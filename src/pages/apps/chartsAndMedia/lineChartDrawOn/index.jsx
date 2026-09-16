import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Styled } from "./styled";

/* ------------------ Data helpers ------------------ */

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;

/** Create N points with gentle noise; values in [min,max]. */
function makeSeries(n = 24, min = 12, max = 100) {
    const arr = [];
    let v = lerp(min, max, 0.6);
    for (let i = 0; i < n; i++) {
        const bias = Math.sin((i / n) * Math.PI * 2) * 10;
        v = clamp(v + (Math.random() - 0.5) * 12 + bias, min, max);
        arr.push({ x: i, y: Math.round(v * 10) / 10 });
    }
    return arr;
}

/** Build a smooth cardinal-spline path string (C segments). */
function buildSmoothPath(points, tension = 0.2) {
    if (!points?.length) return "";
    if (points.length < 2) return `M ${points[0].x} ${points[0].y}`;
    const cps = (p0, p1, p2, t) => {
        // control point for p1 toward p2 using p0 as previous
        const d01 = Math.hypot(p1.x - p0.x, p1.y - p0.y) || 1;
        const d12 = Math.hypot(p2.x - p1.x, p2.y - p1.y) || 1;
        const fa = (t * d01) / (d01 + d12);
        const fb = (t * d12) / (d01 + d12);
        const p1x = p1.x - fa * (p2.x - p0.x);
        const p1y = p1.y - fa * (p2.y - p0.y);
        const p2x = p1.x + fb * (p2.x - p0.x);
        const p2y = p1.y + fb * (p2.y - p0.y);
        return [{ x: p1x, y: p1y }, { x: p2x, y: p2y }];
    };

    const path = [`M ${points[0].x} ${points[0].y}`];
    for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[i - 1] || points[i];
        const p1 = points[i];
        const p2 = points[i + 1];
        const p3 = points[i + 2] || p2;
        const [cp1, cp2] = cps(p0, p1, p2, tension);
        const [cp3, cp4] = cps(p1, p2, p3, tension);
        path.push(`C ${cp2.x} ${cp2.y}, ${cp3.x} ${cp3.y}, ${p2.x} ${p2.y}`);
    }
    return path.join(" ");
}

/* ------------------ Component ------------------ */

export default function LineChartDrawOn() {
    // Controls
    const [count, setCount] = useState(24);
    const [smoothing, setSmoothing] = useState(0.22); // 0..0.5 feels good
    const [showArea, setShowArea] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);

    // “Share protection” password (demo purpose only)
    const [password, setPassword] = useState("");
    const [pwdVisible, setPwdVisible] = useState(false);
    const pwdInvalid = password.length > 0 && password.length < 6;

    // Data
    const [seed, setSeed] = useState(0); // force re-gen
    const raw = useMemo(() => makeSeries(Math.max(5, count)), [count, seed]);

    // Chart metrics (viewBox space)
    const vb = { w: 900, h: 360, pad: 36, top: 24, right: 16, bottom: 32, left: 44 };
    const iw = vb.w - vb.left - vb.right;
    const ih = vb.h - vb.top - vb.bottom;
    const xMax = raw.length - 1;
    const yMin = Math.min(...raw.map(d => d.y));
    const yMax = Math.max(...raw.map(d => d.y));

    // Scales into SVG coords
    const scaleX = (i) => vb.left + (i / Math.max(1, xMax)) * iw;
    const scaleY = (v) => vb.top + ih - ((v - yMin) / Math.max(1e-6, yMax - yMin)) * ih;

    // Projected points for path
    const pts = useMemo(
        () => raw.map((d) => ({ x: scaleX(d.x), y: scaleY(d.y), v: d.y })),
        [raw, seed]
    );

    // Paths
    const pathD = useMemo(() => buildSmoothPath(pts, clamp(smoothing, 0, 0.5)), [pts, smoothing]);
    const areaD = useMemo(() => {
        if (pts.length < 2) return "";
        const baseline = vb.top + ih;
        return `${pathD} L ${pts.at(-1).x} ${baseline} L ${pts[0].x} ${baseline} Z`;
    }, [pathD, pts, ih]);

    // Stroke length measurement for draw-on
    const pathRef = useRef(null);
    const [len, setLen] = useState(1);
    useLayoutEffect(() => {
        const L = pathRef.current?.getTotalLength?.() || 1;
        setLen(L);
    }, [pathD]);

    // Crosshair interaction (pointer → nearest)
    const localX = useMotionValue(0);
    const xIdx = useTransform(localX, [vb.left, vb.left + iw], [0, xMax]);
    const idxSpring = useSpring(xIdx, { stiffness: 300, damping: 30, mass: 0.6 });
    const activeIndex = useTransform(idxSpring, (v) => Math.round(clamp(v, 0, xMax)));
    const [hovering, setHovering] = useState(false);

    const onPointer = (e) => {
        const svg = e.currentTarget;
        const pt = svg.createSVGPoint();
        pt.x = e.clientX; pt.y = e.clientY;
        const cursor = pt.matrixTransform(svg.getScreenCTM().inverse());
        localX.set(clamp(cursor.x, vb.left, vb.left + iw));
    };

    const valueAt = (i) => raw[clamp(i, 0, xMax)]?.y ?? 0;

    // Modal handlers
    const closeModal = () => setModalOpen(false);
    const openModal = () => setModalOpen(true);
    const applySettings = () => {
        if (pwdInvalid) return; // validation
        setModalOpen(false);
    };

    // Accessibility announce
    const [announce, setAnnounce] = useState("");
    useEffect(() => setAnnounce(`Series with ${raw.length} points, range ${yMin} to ${yMax}`), [raw, yMin, yMax]);

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Line Chart - Draw On</h1>
                        <p className="muted">Path reveals with stroke-dash, grid fades in, points stagger, and a crosshair tracks your cursor.</p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Chart controls">
                        <label className="ctrl">
                            <span>Points</span>
                            <input
                                type="range" min={5} max={60} step={1}
                                value={count}
                                onChange={(e) => setCount(parseInt(e.target.value, 10) || 5)}
                            />
                            <em>{count}</em>
                        </label>

                        <label className="ctrl">
                            <span>Smoothing</span>
                            <input
                                type="range" min={0} max={0.5} step={0.02}
                                value={smoothing}
                                onChange={(e) => setSmoothing(parseFloat(e.target.value))}
                            />
                            <em>{smoothing.toFixed(2)}</em>
                        </label>

                        <label className="switch">
                            <input type="checkbox" checked={showArea} onChange={(e) => setShowArea(e.target.checked)} />
                            <span>Area</span>
                        </label>

                        <button className="btn ghost" onClick={() => setSeed((s) => s + 1)}>Regenerate</button>
                        <button className="btn" onClick={openModal}>Settings</button>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <div className="card" role="img" aria-label={`Animated line chart. ${announce}`}>
                        <motion.svg
                            viewBox={`0 0 ${vb.w} ${vb.h}`}
                            className="chart"
                            onPointerMove={onPointer}
                            onPointerEnter={() => setHovering(true)}
                            onPointerLeave={() => setHovering(false)}
                        >
                            {/* BG */}
                            <rect x="0" y="0" width={vb.w} height={vb.h} className="bg" />

                            {/* Grid (animate in) */}
                            <g className="grid">
                                {/* vertical */}
                                <AnimatePresence initial={false}>
                                    {Array.from({ length: 6 }).map((_, i) => {
                                        const x = vb.left + (i / 5) * iw;
                                        return (
                                            <motion.line
                                                key={`vx-${i}`}
                                                x1={x} x2={x}
                                                y1={vb.top} y2={vb.top + ih}
                                                initial={{ opacity: 0, scaleY: 0.9, transformOrigin: "center" }}
                                                animate={{ opacity: 1, scaleY: 1 }}
                                                transition={{ duration: 0.4, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                                                className="v"
                                            />
                                        );
                                    })}
                                </AnimatePresence>
                                {/* horizontal */}
                                <AnimatePresence initial={false}>
                                    {Array.from({ length: 6 }).map((_, i) => {
                                        const y = vb.top + (i / 5) * ih;
                                        return (
                                            <motion.line
                                                key={`hx-${i}`}
                                                x1={vb.left} x2={vb.left + iw}
                                                y1={y} y2={y}
                                                initial={{ opacity: 0, scaleX: 0.9, transformOrigin: "center" }}
                                                animate={{ opacity: 1, scaleX: 1 }}
                                                transition={{ duration: 0.4, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                                                className="h"
                                            />
                                        );
                                    })}
                                </AnimatePresence>
                            </g>

                            {/* Axes */}
                            <g className="axes">
                                <line x1={vb.left} y1={vb.top + ih} x2={vb.left + iw} y2={vb.top + ih} />
                                <line x1={vb.left} y1={vb.top} x2={vb.left} y2={vb.top + ih} />
                            </g>

                            {/* Area (fade up) */}
                            {showArea && (
                                <motion.path
                                    d={areaD}
                                    className="area"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                />
                            )}

                            {/* Line (draw-on) */}
                            <motion.path
                                ref={pathRef}
                                d={pathD}
                                className="line"
                                strokeDasharray={len}
                                initial={{ strokeDashoffset: len }}
                                animate={{ strokeDashoffset: 0 }}
                                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                            />

                            {/* Points (stagger in) */}
                            <AnimatePresence initial={false}>
                                {pts.map((p, i) => (
                                    <motion.circle
                                        key={`pt-${i}-${seed}`}
                                        cx={p.x} cy={p.y} r="3.5"
                                        className="dot"
                                        initial={{ opacity: 0, scale: 0.7 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.28, delay: 0.03 * i, ease: [0.22, 1, 0.36, 1] }}
                                    />
                                ))}
                            </AnimatePresence>

                            {/* Crosshair + tooltip */}
                            <Crosshair
                                active={hovering}
                                index={activeIndex}
                                pts={pts}
                                scaleY={scaleY}
                                valueAt={valueAt}
                                vb={vb}
                            />
                        </motion.svg>
                    </div>

                    <p className="caption muted">
                        Draw-on via <code>strokeDasharray</code>/<code>strokeDashoffset</code>, spline path for premium feel, and MotionValues for a responsive crosshair.
                    </p>
                </Styled.Stage>

                {/* Settings Modal */}
                <AnimatePresence>
                    {modalOpen && (
                        <Styled.ModalOverlay
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
                            role="dialog"
                            aria-modal="true"
                            aria-label="Chart settings"
                        >
                            <motion.div
                                className="modal"
                                initial={{ y: 12, scale: 0.98, opacity: 0 }}
                                animate={{ y: 0, scale: 1, opacity: 1 }}
                                exit={{ y: 8, scale: 0.98, opacity: 0 }}
                                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="mHead">
                                    <h3>Settings</h3>
                                    <p className="muted">Tune how the line renders and optional sharing protection.</p>
                                </div>
                                <div className="mBody">
                                    <div className="formGrid">
                                        <label className="ctrl">
                                            <span>Smoothing (0–0.5)</span>
                                            <input
                                                type="number" step="0.02" min="0" max="0.5"
                                                value={smoothing}
                                                onChange={(e) => setSmoothing(clamp(parseFloat(e.target.value) || 0, 0, 0.5))}
                                            />
                                        </label>

                                        <label className="ctrl">
                                            <span>Show Area</span>
                                            <input
                                                type="checkbox"
                                                checked={showArea}
                                                onChange={(e) => setShowArea(e.target.checked)}
                                            />
                                        </label>

                                        <label className="ctrl">
                                            <span>Share Password (optional)</span>
                                            <div className={`pwd ${pwdInvalid ? "invalid" : ""}`}>
                                                <input
                                                    type={pwdVisible ? "text" : "password"}
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    placeholder="Min 6 characters"
                                                    aria-invalid={pwdInvalid}
                                                />
                                                <button
                                                    className="eye"
                                                    onClick={() => setPwdVisible(v => !v)}
                                                    type="button"
                                                    aria-label={pwdVisible ? "Hide password" : "Show password"}
                                                >
                                                    {/* simple eye icon */}
                                                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                                                        {pwdVisible ? (
                                                            <path fill="currentColor" d="M12 5c5.5 0 9.5 5.2 9.5 7s-4 7-9.5 7S2.5 12.8 2.5 12 6.5 5 12 5zm0 3a4 4 0 100 8 4 4 0 000-8z" />
                                                        ) : (
                                                            <path fill="currentColor" d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12zm10 4a4 4 0 110-8 4 4 0 010 8z" />
                                                        )}
                                                    </svg>
                                                </button>
                                            </div>
                                            {pwdInvalid && <small className="error">Password must be at least 6 characters.</small>}
                                        </label>
                                    </div>
                                </div>
                                <div className="mFoot">
                                    <button className="closeBtn ghost" onClick={closeModal}>Cancel</button>
                                    <button className="closeBtn" onClick={applySettings} disabled={pwdInvalid}>Save</button>
                                </div>
                            </motion.div>
                        </Styled.ModalOverlay>
                    )}
                </AnimatePresence>

                {/* SR announce */}
                <span className="sr" aria-live="polite">{announce}</span>
            </Styled.Wrapper>
        </MotionConfig>
    );
}

/* ------------------ Crosshair component ------------------ */

function Crosshair({ active, index, pts, valueAt, vb }) {
    const [i, setI] = useState(0);
    useEffect(() => {
        const unsub = index.on("change", (v) => setI(v));
        return () => unsub();
    }, [index]);
    const p = pts[i] || pts[0] || { x: vb.left, y: vb.top };
    const val = valueAt(i);

    return (
        <AnimatePresence>
            {active && (
                <g>
                    {/* line */}
                    <motion.line
                        key="xh"
                        x1={p.x} x2={p.x}
                        y1={vb.top} y2={vb.top + (vb.h - vb.top - vb.bottom)}
                        className="xh"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                    />
                    {/* dot */}
                    <motion.circle
                        key="xhd"
                        cx={p.x} cy={p.y} r="5.5"
                        className="xhDot"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.15 }}
                    />
                    {/* label */}
                    <motion.g
                        key="xhl"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                    >
                        <rect
                            x={p.x - 36}
                            y={vb.top - 22}
                            width="72"
                            height="18"
                            rx="8"
                            className="xhLabelBg"
                        />
                        <text x={p.x} y={vb.top - 9} textAnchor="middle" className="xhLabel">
                            {val.toFixed(1)}
                        </text>
                    </motion.g>
                </g>
            )}
        </AnimatePresence>
    );
}
