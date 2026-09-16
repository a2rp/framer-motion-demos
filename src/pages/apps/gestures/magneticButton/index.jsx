import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
    AnimatePresence,
    MotionConfig,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    useReducedMotion,
} from "framer-motion";
import { Styled } from "./styled";

/**
 * Ultra Magnetic Button Demo
 * Layers:
 *  - Aurora background that subtly drifts with pointer
 *  - Spotlight that follows pointer (radial glow)
 *  - Orbiting sparkles (CSS-animated, pointer-parallax)
 *  - Trailing ghosts (two spring-driven nodes)
 *  - Button: 3D tilt, glass layers, neon charge ring, ripple on press
 *  - Reduced motion: static hover/focus, no orbital animations
 */

const PRESETS = {
    Aurora: { radius: 180, strength: 0.75, tilt: 12, intensity: 0.9 },
    Neon: { radius: 220, strength: 0.9, tilt: 14, intensity: 1.0 },
    Minimal: { radius: 120, strength: 0.55, tilt: 7, intensity: 0.65 },
};

export default function MagneticButtonUltra() {
    const prefersReduced = useReducedMotion();

    const [mode, setMode] = useState("Aurora");
    const [radius, setRadius] = useState(PRESETS.Aurora.radius);
    const [strength, setStrength] = useState(PRESETS.Aurora.strength);
    const [tiltDeg, setTiltDeg] = useState(PRESETS.Aurora.tilt);
    const [intensity, setIntensity] = useState(PRESETS.Aurora.intensity);

    const labels = useMemo(
        () => ({
            radius: `${radius}px`,
            strength: strength.toFixed(2),
            tilt: `${tiltDeg}°`,
            glow: `${Math.round(intensity * 100)}%`,
        }),
        [radius, strength, tiltDeg, intensity]
    );

    const applyMode = (key) => {
        const p = PRESETS[key];
        setMode(key);
        setRadius(p.radius);
        setStrength(p.strength);
        setTiltDeg(p.tilt);
        setIntensity(p.intensity);
    };

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper data-mode={mode.toLowerCase()}>
                <Styled.Header>
                    <div className="heading">
                        <h1>Magnetic Button - Ultra</h1>
                        <p className="muted">
                            Aurora + spotlight + orbiting sparkles. Proper 3D tilt, parallax ghosts, and a neon charge ring.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Magnetic controls">
                        <label className="ctrl inline">
                            <span>Mode</span>
                            <select value={mode} onChange={(e) => applyMode(e.target.value)}>
                                {Object.keys(PRESETS).map((k) => (
                                    <option key={k} value={k}>{k}</option>
                                ))}
                            </select>
                        </label>

                        <label className="ctrl">
                            <span>Radius</span>
                            <input type="range" min="80" max="280" step="10" value={radius} onChange={(e) => setRadius(+e.target.value)} />
                            <em>{labels.radius}</em>
                        </label>

                        <label className="ctrl">
                            <span>Strength</span>
                            <input type="range" min="0.2" max="1" step="0.02" value={strength} onChange={(e) => setStrength(+e.target.value)} />
                            <em>{labels.strength}</em>
                        </label>

                        <label className="ctrl">
                            <span>Tilt</span>
                            <input type="range" min="0" max="20" step="1" value={tiltDeg} onChange={(e) => setTiltDeg(+e.target.value)} />
                            <em>{labels.tilt}</em>
                        </label>

                        <label className="ctrl">
                            <span>Glow</span>
                            <input type="range" min="0" max="1" step="0.05" value={intensity} onChange={(e) => setIntensity(+e.target.value)} />
                            <em>{labels.glow}</em>
                        </label>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <UltraMagneticButton
                        label="Launch"
                        radius={radius}
                        strength={strength}
                        tiltDeg={tiltDeg}
                        intensity={intensity}
                        reduced={prefersReduced}
                    />
                </Styled.Stage>

                <Styled.Notes>
                    <h3>Tech notes</h3>
                    <ul>
                        <li>Only transforms/opacity animate. Everything is GPU-friendly.</li>
                        <li>Pointer → translate/rotate/scale via springs; spotlight + aurora drift from same source.</li>
                        <li>Sparkles are CSS-driven with subtle parallax; ripples clean up via AnimatePresence.</li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}

function UltraMagneticButton({ label, radius, strength, tiltDeg, intensity, reduced }) {
    const zoneRef = useRef(null);
    const btnRef = useRef(null);

    // Motion values (shared sources)
    const mvX = useMotionValue(0);
    const mvY = useMotionValue(0);
    const mvRX = useMotionValue(0);
    const mvRY = useMotionValue(0);
    const mvScale = useMotionValue(1);
    const mvHalo = useMotionValue(0);
    const mvPressed = useMotionValue(0);

    // Springs - tuned for premium snap
    const x = useSpring(mvX, { stiffness: 360, damping: 30, mass: 0.8 });
    const y = useSpring(mvY, { stiffness: 360, damping: 30, mass: 0.8 });
    const rX = useSpring(mvRX, { stiffness: 260, damping: 26 });
    const rY = useSpring(mvRY, { stiffness: 260, damping: 26 });
    const scale = useSpring(mvScale, { stiffness: 320, damping: 26 });
    const halo = useSpring(mvHalo, { stiffness: 220, damping: 22 });
    const pressed = useSpring(mvPressed, { stiffness: 320, damping: 26 });

    // Parallax ghosts (lag slightly behind)
    const gx = useSpring(mvX, { stiffness: 160, damping: 20 });
    const gy = useSpring(mvY, { stiffness: 160, damping: 20 });
    const gx2 = useSpring(mvX, { stiffness: 90, damping: 16 });
    const gy2 = useSpring(mvY, { stiffness: 90, damping: 16 });

    // Derived transforms
    const buttonTransform = useTransform(
        [x, y, rX, rY, scale, pressed],
        ([tx, ty, rx, ry, sc, p]) =>
            `translate3d(${tx}px, ${ty}px, 0) rotateX(${rx}deg) rotateY(${ry}deg) scale(${sc - p * 0.02})`
    );
    const haloOpacity = useTransform(halo, (v) => v * intensity);
    const auroraPos = useTransform([x, y], ([tx, ty]) => `${-tx * 0.6}px ${-ty * 0.6}px`);
    const spotX = useTransform(x, (tx) => tx * 1.2);
    const spotY = useTransform(y, (ty) => ty * 1.2);

    const [ripples, setRipples] = useState([]);
    const pushRipple = (px, py) => {
        const id = Math.random().toString(36).slice(2);
        setRipples((r) => [...r, { id, x: px, y: py }]);
    };
    const removeRipple = (id) => setRipples((r) => r.filter((i) => i.id !== id));

    const reset = useCallback(() => {
        mvX.set(0); mvY.set(0);
        mvRX.set(0); mvRY.set(0);
        mvScale.set(1);
        mvHalo.set(0);
    }, [mvX, mvY, mvRX, mvRY, mvScale, mvHalo]);

    // Pointer tracking (zone-wide, but attractive radius around the button center)
    useEffect(() => {
        const zone = zoneRef.current;
        if (!zone || reduced) return reset();

        let raf = 0;
        const maxOffset = 26 * strength;

        const onMove = (e) => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const btn = btnRef.current;
                if (!btn) return;
                const rect = btn.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const dx = e.clientX - cx;
                const dy = e.clientY - cy;
                const dist = Math.hypot(dx, dy);

                if (dist < radius) {
                    const pct = Math.max(0, 1 - dist / radius); // 0..1
                    mvX.set((dx / radius) * maxOffset);
                    mvY.set((dy / radius) * maxOffset);
                    mvRX.set((-dy / radius) * tiltDeg);
                    mvRY.set((dx / radius) * tiltDeg);
                    mvScale.set(1 + 0.065 * pct);
                    mvHalo.set(Math.min(1, pct * 1.15));
                } else {
                    reset();
                }
            });
        };

        const onLeave = () => { cancelAnimationFrame(raf); reset(); };

        zone.addEventListener("pointermove", onMove, { passive: true });
        zone.addEventListener("pointerleave", onLeave);
        return () => {
            zone.removeEventListener("pointermove", onMove);
            zone.removeEventListener("pointerleave", onLeave);
            cancelAnimationFrame(raf);
        };
    }, [radius, strength, tiltDeg, reduced, reset, mvX, mvY, mvRX, mvRY, mvScale, mvHalo]);

    // Press interactions (mouse / touch / keyboard)
    const press = (on) => mvPressed.set(on ? 1 : 0);

    const onPointerDown = (e) => {
        press(true);
        const rect = btnRef.current.getBoundingClientRect();
        pushRipple(e.clientX - rect.left, e.clientY - rect.top);
    };
    const onPointerUp = () => press(false);

    const onKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            press(true);
            const rect = btnRef.current.getBoundingClientRect();
            pushRipple(rect.width / 2, rect.height / 2);
        }
    };
    const onKeyUp = (e) => {
        if (e.key === "Enter" || e.key === " ") press(false);
    };

    return (
        <Styled.MagnetZone ref={zoneRef}>
            {/* Aurora background (drifts with pointer) */}
            <motion.div className="aurora" style={{ backgroundPosition: auroraPos }} aria-hidden="true" />

            {/* Spotlight following pointer */}
            <motion.div className="spotlight" style={{ x: spotX, y: spotY, opacity: haloOpacity }} aria-hidden="true" />

            {/* Orbiting sparkles (parallaxed container) */}
            <motion.div className="sparkles" style={{ x: useTransform(x, v => v * 0.15), y: useTransform(y, v => v * 0.15) }} aria-hidden="true">
                {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} className={`sp s${i + 1}`} />
                ))}
            </motion.div>

            {/* Trailing ghosts */}
            <motion.div className="ghost g1" style={{ x: gx, y: gy, opacity: useTransform(halo, v => v * 0.4) }} aria-hidden="true" />
            <motion.div className="ghost g2" style={{ x: gx2, y: gy2, opacity: useTransform(halo, v => v * 0.25) }} aria-hidden="true" />

            {/* Button */}
            <motion.button
                ref={btnRef}
                className="magnetBtn"
                style={{ transform: buttonTransform }}
                onPointerDown={onPointerDown}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
            >
                {/* Neon charge ring */}
                <motion.span
                    className="ring"
                    style={{
                        opacity: haloOpacity,
                        scale: useTransform(halo, (v) => 1 + v * 0.04),
                    }}
                    aria-hidden="true"
                />

                <span className="label">{label}</span>

                {/* Moving shine */}
                <motion.span className="shine" style={{ x: useTransform(x, v => v * 0.4), y: useTransform(y, v => v * 0.4) }} aria-hidden="true" />

                {/* Ripples */}
                <AnimatePresence>
                    {ripples.map((r) => (
                        <motion.span
                            key={r.id}
                            className="ripple"
                            initial={{ opacity: 0.4, scale: 0, x: r.x - 12, y: r.y - 12 }}
                            animate={{ opacity: 0, scale: 10 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                            onAnimationComplete={() => removeRipple(r.id)}
                            aria-hidden="true"
                        />
                    ))}
                </AnimatePresence>
            </motion.button>
        </Styled.MagnetZone>
    );
}
