import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled, ModalOverlay } from "./styled";

/* -------------------- helpers -------------------- */

const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
const rand = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
const uid = (() => { let i = 0; return () => `bar-${++i}`; })();

const LABELS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function makeBars(count = 7) {
    const n = clamp(count, 5, 16); // always ≥ 5
    return Array.from({ length: n }, (_, i) => ({
        id: uid(),
        label: LABELS[i % LABELS.length],
        value: rand(10, 100),
    }));
}

function shuffleValues(bars) {
    const vals = bars.map(b => b.value).sort(() => Math.random() - 0.5);
    return bars.map((b, i) => ({ ...b, value: vals[i] }));
}

/* -------------------- main -------------------- */

export default function BarChartGrow() {
    const [bars, setBars] = useState(() => makeBars(7));
    const [size, setSize] = useState(7);
    const [hover, setHover] = useState(null); // { id, x, y, value, label }
    const [showModal, setShowModal] = useState(false);

    // Share modal state
    const [shareName, setShareName] = useState("");
    const [sharePwd, setSharePwd] = useState("");
    const [showPwd, setShowPwd] = useState(false);
    const [errors, setErrors] = useState({});

    // Derived
    const maxVal = useMemo(() => Math.max(...bars.map(b => b.value), 1), [bars]);

    // Resize → hide tooltip (prevents stale placement)
    useEffect(() => {
        const onResize = () => setHover(null);
        window.addEventListener("resize", onResize, { passive: true });
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // Controls
    const onRandomize = () =>
        setBars(prev => prev.map(b => ({ ...b, value: rand(10, 100) })));

    const onShuffle = () => setBars(prev => shuffleValues(prev));

    const onReset = () => {
        setSize(7);
        setBars(makeBars(7));
        setHover(null);
    };

    const onSizeChange = (e) => {
        const n = clamp(parseInt(e.target.value || "7", 10), 5, 16);
        setSize(n);
        setBars(makeBars(n));
        setHover(null);
    };

    const onAdd = () => {
        setBars(prev => {
            if (prev.length >= 16) return prev;
            const idx = prev.length;
            return [...prev, { id: uid(), label: LABELS[idx % LABELS.length], value: rand(10, 100) }];
        });
        setSize(s => clamp(s + 1, 5, 16));
    };

    const onRemove = () => {
        setBars(prev => (prev.length <= 5 ? prev : prev.slice(0, -1)));
        setSize(s => clamp(s - 1, 5, 16));
    };

    // Tooltip positioning
    const stageRef = useRef(null);
    const handleEnter = (e, b) => {
        const rect = stageRef.current?.getBoundingClientRect();
        if (!rect) return;
        setHover({
            id: b.id,
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            value: b.value,
            label: b.label,
        });
    };
    const handleMove = handleEnter;
    const handleLeave = () => setHover(null);

    // Share modal validate + submit
    const openShare = () => setShowModal(true);
    const closeShare = () => { setShowModal(false); setErrors({}); };

    const validateShare = () => {
        const e = {};
        if (!shareName.trim()) e.name = "Chart name is required.";
        if (sharePwd && sharePwd.length < 6) e.pwd = "Password must be at least 6 characters.";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const submitShare = (e) => {
        e.preventDefault();
        if (!validateShare()) return;
        // here you'd call your API; we just close and reset
        setShowModal(false);
        setTimeout(() => {
            alert(`Shared "${shareName}" ${sharePwd ? "(protected)" : ""}`); // eslint-disable-line no-alert
            setShareName(""); setSharePwd(""); setShowPwd(false);
        }, 0);
    };

    return (
        // Demo forces motion to showcase animations
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header
                    as={motion.header}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.35 } }}
                >
                    <div className="heading">
                        <h1>Bar Chart - Grow from Baseline</h1>
                        <p className="muted">
                            Bars rise from the baseline with subtle spring timing. Hover to inspect values.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Chart controls">
                        <label className="ctrl">
                            <span>Bars</span>
                            <select value={size} onChange={onSizeChange} aria-label="Bars count">
                                {Array.from({ length: 12 }, (_, i) => 5 + i).map(n => (
                                    <option key={n} value={n}>{n}</option>
                                ))}
                            </select>
                        </label>

                        <button className="btn" onClick={onRandomize} title="Randomize values">Randomize</button>
                        <button className="btn" onClick={onShuffle} title="Shuffle values">Shuffle</button>
                        <div className="sep" />
                        <button className="btn ghost" onClick={onAdd} disabled={bars.length >= 16} title="Add bar">Add</button>
                        <button className="btn ghost" onClick={onRemove} disabled={bars.length <= 5} title="Remove bar">Remove</button>
                        <div className="sep" />
                        <button className="btn primary" onClick={openShare} title="Share chart">Share</button>
                        <button className="btn subtle" onClick={onReset} title="Reset">Reset</button>
                    </div>
                </Styled.Header>

                <Styled.Stage ref={stageRef}>
                    {/* X axis + grid lines */}
                    <div className="gridY" aria-hidden>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="line" />
                        ))}
                    </div>

                    {/* Bars */}
                    <div className="bars">
                        {bars.map((b, i) => {
                            const h = (b.value / maxVal) * 100;
                            const hue = 210 + (i * 16) % 120; // nice spread on blue-cyan
                            return (
                                <div key={b.id} className="barWrap">
                                    <motion.div
                                        className="bar"
                                        style={{ ["--h"]: `${h}%`, ["--hue"]: hue }}
                                        initial={{ scaleY: 0, transformOrigin: "bottom" }}
                                        animate={{ scaleY: 1, transition: { type: "spring", stiffness: 260, damping: 30, mass: 0.8 } }}
                                        whileHover={{ scaleX: 0.96 }}
                                        onMouseEnter={(e) => handleEnter(e, b)}
                                        onMouseMove={(e) => handleMove(e, b)}
                                        onMouseLeave={handleLeave}
                                        tabIndex={0}
                                        onFocus={(e) => handleEnter(e, b)}
                                        onBlur={handleLeave}
                                        aria-label={`${b.label} value ${b.value}`}
                                    >
                                        <motion.div className="barFill" layout />
                                    </motion.div>
                                    <div className="barLabel" aria-hidden>{b.label}</div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Tooltip */}
                    <AnimatePresence>
                        {hover && (
                            <motion.div
                                key={hover.id}
                                className="tooltip"
                                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.18 } }}
                                exit={{ opacity: 0, y: 6, transition: { duration: 0.14 } }}
                                style={{ left: hover.x, top: hover.y }}
                                role="status"
                            >
                                <div className="tLabel">{hover.label}</div>
                                <div className="tValue">{hover.value}</div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Styled.Stage>

                <Styled.Notes
                    as={motion.aside}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
                >
                    <h3>Tech notes</h3>
                    <ul>
                        <li>Bars use transform-only animation (scaleY from bottom) for crisp edges.</li>
                        <li>Hover scales each bar slightly and shows a motion tooltip.</li>
                        <li>Controls ensure 5–16 bars; reset brings back the default dataset.</li>
                    </ul>
                </Styled.Notes>

                {/* Share Modal */}
                <AnimatePresence>
                    {showModal && (
                        <ModalOverlay
                            as={motion.div}
                            key="share"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 0.15 } }}
                            exit={{ opacity: 0, transition: { duration: 0.12 } }}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="share-title"
                        >
                            <motion.div
                                className="modal"
                                initial={{ y: 12, opacity: 0, scale: 0.98 }}
                                animate={{ y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 320, damping: 26 } }}
                                exit={{ y: 8, opacity: 0, transition: { duration: 0.12 } }}
                            >
                                <div className="mHead">
                                    <h3 id="share-title">Share chart</h3>
                                    <p className="muted">Name your chart and optionally protect it with a password.</p>
                                </div>
                                <form className="mBody" onSubmit={submitShare} noValidate>
                                    <label className="field">
                                        <span>Chart name</span>
                                        <input
                                            type="text"
                                            value={shareName}
                                            onChange={(e) => setShareName(e.target.value)}
                                            placeholder="Q3 – Sales by Region"
                                            aria-invalid={Boolean(errors.name)}
                                            aria-describedby={errors.name ? "err-name" : undefined}
                                            required
                                        />
                                        {errors.name && <em id="err-name" className="err">{errors.name}</em>}
                                    </label>

                                    <label className="field">
                                        <span>Password (optional)</span>
                                        <div className="passWrap">
                                            <input
                                                type={showPwd ? "text" : "password"}
                                                value={sharePwd}
                                                onChange={(e) => setSharePwd(e.target.value)}
                                                placeholder="Minimum 6 characters"
                                                aria-invalid={Boolean(errors.pwd)}
                                                aria-describedby={errors.pwd ? "err-pwd" : undefined}
                                            />
                                            <button
                                                type="button"
                                                className="eyeBtn"
                                                aria-label={showPwd ? "Hide password" : "Show password"}
                                                onClick={() => setShowPwd((v) => !v)}
                                            >
                                                {showPwd ? <EyeOffIcon /> : <EyeIcon />}
                                            </button>
                                        </div>
                                        {errors.pwd && <em id="err-pwd" className="err">{errors.pwd}</em>}
                                    </label>
                                </form>
                                <div className="mFoot">
                                    <button className="closeBtn ghost" type="button" onClick={closeShare}>Cancel</button>
                                    <button className="closeBtn" type="button" onClick={submitShare}>Share</button>
                                </div>
                            </motion.div>
                        </ModalOverlay>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}

/* -------------------- icons -------------------- */
function EyeIcon(props) {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden focusable="false" {...props}>
            <path fill="currentColor" d="M12 5c5.523 0 9.75 4.77 9.75 7s-4.227 7-9.75 7S2.25 14.23 2.25 12 6.477 5 12 5Zm0 2C7.86 7 4.75 10.28 4.75 12S7.86 17 12 17s7.25-3.28 7.25-5S16.14 7 12 7Zm0 2.25A2.75 2.75 0 1 1 9.25 12 2.75 2.75 0 0 1 12 9.25Z" />
        </svg>
    );
}
function EyeOffIcon(props) {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden focusable="false" {...props}>
            <path fill="currentColor" d="M3.28 2.22 21.78 20.7l-1.06 1.06-2.26-2.26A12.72 12.72 0 0 1 12 19c-6 0-9.75-5-9.75-7 0-1.16 1.27-3.03 3.35-4.62L2.22 3.28 3.28 2.22Zm4.2 5.26L8.9 8.9a2.75 2.75 0 0 0 3.19 3.19l1.43 1.43A4.25 4.25 0 0 1 7.5 9.25ZM12 7c4.14 0 7.25 3.28 7.25 5 0 .65-.45 1.7-1.45 2.82l-1.1-1.1c.55-.52.8-1.04.8-1.72 0-1.72-3.11-5-7.25-5-.8 0-1.57.1-2.31.3L6.5 6.29C8.13 5.98 10.03 5.8 12 5.8Z" />
        </svg>
    );
}
