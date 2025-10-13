import { useEffect, useMemo, useRef, useState } from "react";
import { motion, MotionConfig, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Styled } from "./styled";

/* ---------------- helpers ---------------- */
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const isFinePointer = () =>
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/* ---------------- demo data ---------------- */
const CARDS = [
    { id: "hp-1", title: "Aurora", tag: "3D Tilt + Parallax", emoji: "🟣", accent: { h: 268, s: 82, l: 56 } },
    { id: "hp-2", title: "Nebula", tag: "Animated Glare", emoji: "🟢", accent: { h: 150, s: 70, l: 54 } },
    { id: "hp-3", title: "Quasar", tag: "Magnetic Hover", emoji: "🔵", accent: { h: 206, s: 86, l: 56 } },
    { id: "hp-4", title: "Ion", tag: "Depth Layers", emoji: "🟠", accent: { h: 28, s: 92, l: 58 } },
    { id: "hp-5", title: "Photon", tag: "GPU Smooth", emoji: "🟡", accent: { h: 46, s: 92, l: 60 } },
    { id: "hp-6", title: "Zenith", tag: "Keyboard A11y", emoji: "🟤", accent: { h: 18, s: 35, l: 46 } },
];

/* ---------------- Tilt Card ---------------- */
function TiltCard({
    item,
    intensity = 1,
    glare = true,
    spring = { stiffness: 360, damping: 34, mass: 0.9 },
}) {
    const ref = useRef(null);
    const hoverCapable = isFinePointer();

    // Motion values
    const rxMV = useMotionValue(0);
    const ryMV = useMotionValue(0);
    const pxMV = useMotionValue(0);
    const pyMV = useMotionValue(0);
    const scaleMV = useMotionValue(1);

    // Springs
    const rx = useSpring(rxMV, spring);
    const ry = useSpring(ryMV, spring);
    const px = useSpring(pxMV, spring);
    const py = useSpring(pyMV, spring);
    const scale = useSpring(scaleMV, spring);

    // Parallax mapping
    const bgX = useTransform(px, (v) => v * -0.35);
    const bgY = useTransform(py, (v) => v * -0.35);
    const midX = useTransform(px, (v) => v * 0.25);
    const midY = useTransform(py, (v) => v * 0.25);

    // Glare CSS vars
    const [vars, setVars] = useState({ "--gx": "50%", "--gy": "50%", "--ga": "0deg" });

    // Tunables
    const MAX_ROT = 14 * intensity;   // degrees
    const MAX_SHIFT = 18 * intensity; // px

    // rAF throttle
    const rafRef = useRef(0);

    function updateFromPointer(e) {
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;

        const nx = clamp(dx / (rect.width / 2), -1, 1);
        const ny = clamp(dy / (rect.height / 2), -1, 1);

        rxMV.set(clamp(-ny * MAX_ROT, -MAX_ROT, MAX_ROT)); // invert Y
        ryMV.set(clamp(nx * MAX_ROT, -MAX_ROT, MAX_ROT));
        pxMV.set(clamp(nx * MAX_SHIFT, -MAX_SHIFT, MAX_SHIFT));
        pyMV.set(clamp(ny * MAX_SHIFT, -MAX_SHIFT, MAX_SHIFT));

        if (glare) {
            const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
            setVars({
                "--gx": `${((nx + 1) / 2) * 100}%`,
                "--gy": `${((ny + 1) / 2) * 100}%`,
                "--ga": `${angle.toFixed(2)}deg`,
            });
        }
    }

    function onPointerMove(e) {
        if (!hoverCapable) return;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => updateFromPointer(e));
    }

    function onEnter() { scaleMV.set(1.02); }
    function onLeave() {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rxMV.set(0); ryMV.set(0); pxMV.set(0); pyMV.set(0); scaleMV.set(1);
        if (glare) setVars({ "--gx": "50%", "--gy": "50%", "--ga": "0deg" });
    }

    // Keyboard a11y
    function onKeyDown(e) {
        const stepR = 2.5, stepP = 3.5;
        if (e.key === "ArrowLeft") { ryMV.set(ry.get() - stepR); pxMV.set(px.get() - stepP); }
        if (e.key === "ArrowRight") { ryMV.set(ry.get() + stepR); pxMV.set(px.get() + stepP); }
        if (e.key === "ArrowUp") { rxMV.set(rx.get() - stepR); pyMV.set(py.get() - stepP); }
        if (e.key === "ArrowDown") { rxMV.set(rx.get() + stepR); pyMV.set(py.get() + stepP); }
        if (e.key === "Escape") onLeave();
        if (e.key === "Enter") scaleMV.set(scale.get() > 1.01 ? 1 : 1.02);
    }

    useEffect(() => () => rafRef.current && cancelAnimationFrame(rafRef.current), []);

    // Accent vars + per-card bg & shadow
    const h = item.accent?.h ?? 210;
    const s = item.accent?.s ?? 80;
    const l = item.accent?.l ?? 56;

    const accentVars = useMemo(() => ({
        "--accent-h": h,
        "--accent-s": `${s}%`,
        "--accent-l": `${l}%`,
    }), [h, s, l]);

    const bg = `
    linear-gradient(
      180deg,
      hsl(${h} ${s}% ${Math.min(l + 16, 96)}% / 0.16) 0%,
      hsl(${h} ${s}% ${Math.min(l + 6, 96)}% / 0.10) 40%,
      transparent 100%
    ),
    var(--card)
  `;
    const shadow = `
    0 1px 0 hsl(0 0% 100% / .06) inset,
    0 16px 34px hsl(0 0% 0% / .22),
    0 10px 28px hsl(${h} ${s}% ${l}% / .22)
  `;

    return (
        <Styled.TiltWrap>
            <Styled.Tilt
                as={motion.div}
                ref={ref}
                style={{
                    rotateX: rx,
                    rotateY: ry,
                    scale,
                    ...accentVars,
                    "--tilt-bg": bg,
                    "--tilt-shadow": shadow,
                }}
                onPointerMove={onPointerMove}
                onPointerEnter={onEnter}
                onPointerLeave={onLeave}
                onFocus={onEnter}
                onBlur={onLeave}
                onKeyDown={onKeyDown}
                role="button"
                tabIndex={0}
                aria-label={`${item.title} — ${item.tag}`}
            >
                {/* Background (moves least) */}
                <motion.div className="bgLayer" style={{ x: bgX, y: bgY }} aria-hidden>
                    <div className="bgGradient" />
                    <div className="bgNoise" />
                </motion.div>

                {/* Mid ornaments */}
                <motion.div className="midLayer" style={{ x: midX, y: midY }} aria-hidden>
                    <div className="ring" />
                    <div className="orbs">
                        <span className="orb a" />
                        <span className="orb b" />
                    </div>
                </motion.div>

                {/* Foreground content */}
                <motion.div className="content" style={{ x: px, y: py }}>
                    <div className="kicker">{item.tag}</div>
                    <h3 className="title">{item.title}</h3>
                    <div className="meta">
                        <span className="emoji" aria-hidden>{item.emoji}</span>
                        <span>Hover or use arrow keys</span>
                    </div>
                </motion.div>

                {/* Effects */}
                <div className="glare" style={vars} aria-hidden />
                <div className="outline" aria-hidden />
                <div className="shadow" aria-hidden />
            </Styled.Tilt>
        </Styled.TiltWrap>
    );
}

/* ---------------- Page ---------------- */
export default function HoverPeekTilt() {
    const [intensity, setIntensity] = useState(1);
    const [glare, setGlare] = useState(true);

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Hover Peek Tilt</h1>
                        <p className="muted">
                            Pointer-aware 3D tilt with parallax layers, animated glare, per-card accent background,
                            premium shadows, and keyboard support.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Tilt controls">
                        <label className="ctrl">
                            <span>Intensity</span>
                            <input
                                type="range" min="0.6" max="1.6" step="0.05"
                                value={intensity}
                                onChange={(e) => setIntensity(parseFloat(e.target.value))}
                            />
                            <em>{intensity.toFixed(2)}×</em>
                        </label>

                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={glare}
                                onChange={(e) => setGlare(e.target.checked)}
                            />
                            <span>Glare</span>
                        </label>
                    </div>
                </Styled.Header>

                <Styled.Grid>
                    {CARDS.map((c) => (
                        <TiltCard key={c.id} item={c} intensity={intensity} glare={glare} />
                    ))}
                </Styled.Grid>

                <Styled.Notes>
                    <h3>Tech notes</h3>
                    <ul>
                        <li>Transform-only; rAF-throttled pointer; <code>useSpring</code> for natural easing.</li>
                        <li>Accent-tinted backgrounds + layered shadows per card.</li>
                        <li>Light/Dark theme tokens respected; keyboard a11y built-in.</li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
