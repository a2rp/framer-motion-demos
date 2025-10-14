import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useAnimationControls } from "framer-motion";
import { Styled } from "./styled";

/* ---------- utils ---------- */
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
const round = (n, p = 2) => Math.round(n * 10 ** p) / 10 ** p;

const DEFAULTS = {
    slices: 12,
    speed: 1.0,
    tilt: -22,
    thickness: 36,
    gap: 16,
    jitter: 0.18,
    hueA: 210,
    hueB: 260,
    light: 62,
    alpha: 0.32,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

function buildSlices({ slices, thickness, gap, jitter }) {
    const rows = Math.max(1, slices);
    const band = thickness + gap;
    const items = Array.from({ length: rows }, (_, i) => ({
        id: `slice-${i}`,
        top: i * band,
        jitter: 1 + Math.sin(i * 1.12) * jitter,
        parity: i % 2 === 0 ? 1 : -1,
    }));
    return { rows, band, items };
}

const baseDuration = (speed) =>
    Math.min(5.0, Math.max(0.6, 2.2 / Math.min(2.5, Math.max(0.2, speed))));

/* ---------- tiny icons ---------- */
const IconPlay = (p) => (<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M8 5v14l11-7z" /></svg>);
const IconPause = (p) => (<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M6 5h4v14H6zm8 0h4v14h-4z" /></svg>);
const IconEye = (p) => (<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 11a4 4 0 110-8 4 4 0 010 8z" /></svg>);
const IconEyeOff = (p) => (<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M2 5.27L3.28 4 20 20.72 18.73 22l-2.45-2.45A12.2 12.2 0 0112 19c-7 0-10-7-10-7a20.89 20.89 0 014.21-4.88L2 5.27zM12 7a4.94 4.94 0 00-1.32.18l1.6 1.6A2.97 2.97 0 0115 12a3 3 0 01-.49 1.63l1.52 1.52A5 5 0 0012 7zm0 10a4.97 4.97 0 01-3.58-1.52l1.5-1.5A3 3 0 0015 12v-.12l1.57-1.57A4.97 4.97 0 0117 12a5 5 0 01-5 5z" /></svg>);

/* ---------- Child streak: controls for true pause/resume ---------- */
function Streak({ id, top, mix, parity, baseDur, running, jitter }) {
    const controls = useAnimationControls();

    const duration = baseDur * (1 + ((parity > 0 ? 1 : -1) * 0.08)) * jitter;

    useEffect(() => {
        if (running) {
            controls.start({
                x: ["-120%", "120%"],
                transition: { duration, repeat: Infinity, ease: "linear" },
            });
        } else {
            controls.stop(); // ✅ freezes at current frame (true pause)
        }
    }, [running, duration, controls]);

    return (
        <motion.div
            key={`${id}-${Math.round(duration * 1000)}`} // also remounts on speed change for safety
            className="streak"
            style={{ top, "--mix": String(mix) }}
            initial={{ x: "-120%" }}
            animate={controls}
        />
    );
}

export default function TimeSliceStreaks() {
    const [running, setRunning] = useState(true);
    const [slices, setSlices] = useState(DEFAULTS.slices);
    const [speed, setSpeed] = useState(DEFAULTS.speed);
    const [tilt, setTilt] = useState(DEFAULTS.tilt);
    const [thickness, setThickness] = useState(DEFAULTS.thickness);
    const [gap, setGap] = useState(DEFAULTS.gap);
    const [hueA, setHueA] = useState(DEFAULTS.hueA);
    const [hueB, setHueB] = useState(DEFAULTS.hueB);
    const [light, setLight] = useState(DEFAULTS.light);
    const [alpha, setAlpha] = useState(DEFAULTS.alpha);
    const [openModal, setOpenModal] = useState(false);

    // modal form
    const [title, setTitle] = useState("Premium Preset");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [showPwd, setShowPwd] = useState(false);
    const formValid = title.trim().length >= 3 && EMAIL_RE.test(email.trim()) && pwd.length >= 6;

    const spec = useMemo(() => buildSlices({
        slices: Math.min(48, Math.max(2, Math.floor(slices))),
        thickness: Math.min(160, Math.max(8, thickness)),
        gap: Math.min(80, Math.max(0, gap)),
        jitter: DEFAULTS.jitter,
    }), [slices, thickness, gap]);

    const baseDur = useMemo(() => baseDuration(speed), [speed]);

    useEffect(() => {
        setSlices((s) => Math.min(48, Math.max(2, Math.floor(s))));
        setTilt((t) => Math.min(55, Math.max(-55, Math.round(t))));
        setThickness((v) => Math.min(160, Math.max(8, Math.floor(v))));
        setGap((v) => Math.min(80, Math.max(0, Math.floor(v))));
        setHueA((h) => Math.min(360, Math.max(0, Math.floor(h))));
        setHueB((h) => Math.min(360, Math.max(0, Math.floor(h))));
        setLight((l) => Math.min(90, Math.max(20, Math.floor(l))));
        setAlpha((a) => Math.min(1, Math.max(0, Math.round(a * 100) / 100)));
    }, []);

    const reset = () => {
        setSlices(DEFAULTS.slices); setSpeed(DEFAULTS.speed); setTilt(DEFAULTS.tilt);
        setThickness(DEFAULTS.thickness); setGap(DEFAULTS.gap);
        setHueA(DEFAULTS.hueA); setHueB(DEFAULTS.hueB); setLight(DEFAULTS.light); setAlpha(DEFAULTS.alpha);
    };

    const canvasVars = {
        "--th": `${thickness}px`,
        "--gap": `${gap}px`,
        "--hueA": hueA, "--hueB": hueB,
        "--light": light, "--alpha": alpha,
    };

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Time-Slice Streaks</h1>
                        <p className="muted">
                            Diagonal streak wedges sweep across a canvas with subtle parallax and premium easing.
                            Fully theme-able, responsive, and driven by Framer Motion.
                        </p>
                    </div>

                    <div className="actions" role="toolbar" aria-label="Playback">
                        <button className="btn" onClick={() => setRunning((r) => !r)} title={running ? "Pause" : "Play"}>
                            {running ? <IconPause /> : <IconPlay />} <span>{running ? "Pause" : "Play"}</span>
                        </button>
                        <button className="btn ghost" onClick={reset} title="Reset to defaults">Reset</button>
                        {/* <button className="btn primary" onClick={() => setOpenModal(true)} title="Save preset (secure)">
                            Save Preset
                        </button> */}
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <div className="backdrop">
                        <div className="sun" />
                        <div className="lines" aria-hidden />
                        <div className="noise" aria-hidden />
                    </div>

                    <div className="ts-canvas" style={canvasVars}>
                        {/* 🔁 Streaks layer rotates; controls/card stay upright */}
                        <div className="streakLayer" style={{ "--tilt": `${tilt}deg` }}>
                            <AnimatePresence initial={false}>
                                {spec.items.map((sl, idx) => (
                                    <Streak
                                        key={sl.id}
                                        id={sl.id}
                                        top={sl.top}
                                        mix={idx / Math.max(1, spec.rows - 1)}
                                        parity={sl.parity}
                                        jitter={sl.jitter}
                                        baseDur={baseDur}
                                        running={running}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Upright control card */}
                        <motion.div
                            className="glassCard"
                            initial={{ y: 10, opacity: 0, scale: 0.98 }}
                            animate={{ y: 0, opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
                        >
                            <h2>Live Settings</h2>
                            <div className="grid">
                                <label className="ctrl">
                                    <span>Slices</span>
                                    <input type="number" min={2} max={48} value={slices}
                                        onChange={(e) => setSlices(Math.min(48, Math.max(2, parseInt(e.target.value || "0", 10))))} />
                                </label>
                                <label className="ctrl">
                                    <span>Speed</span>
                                    <input type="range" min={0.2} max={2.5} step={0.05} value={speed}
                                        onChange={(e) => setSpeed(parseFloat(e.target.value))} />
                                    <em>{round(speed, 2)}×</em>
                                </label>
                                <label className="ctrl">
                                    <span>Tilt</span>
                                    <input type="range" min={-55} max={55} step={1} value={tilt}
                                        onChange={(e) => setTilt(parseInt(e.target.value, 10))} />
                                    <em>{tilt}°</em>
                                </label>
                                <label className="ctrl">
                                    <span>Thickness</span>
                                    <input type="range" min={8} max={160} step={2} value={thickness}
                                        onChange={(e) => setThickness(parseInt(e.target.value, 10))} />
                                    <em>{thickness}px</em>
                                </label>
                                <label className="ctrl">
                                    <span>Gap</span>
                                    <input type="range" min={0} max={80} step={2} value={gap}
                                        onChange={(e) => setGap(parseInt(e.target.value, 10))} />
                                    <em>{gap}px</em>
                                </label>
                                <label className="ctrl">
                                    <span>Hue A</span>
                                    <input type="range" min={0} max={360} step={1} value={hueA}
                                        onChange={(e) => setHueA(parseInt(e.target.value, 10))} />
                                    <em>{hueA}</em>
                                </label>
                                <label className="ctrl">
                                    <span>Hue B</span>
                                    <input type="range" min={0} max={360} step={1} value={hueB}
                                        onChange={(e) => setHueB(parseInt(e.target.value, 10))} />
                                    <em>{hueB}</em>
                                </label>
                                <label className="ctrl">
                                    <span>Lightness</span>
                                    <input type="range" min={20} max={90} step={1} value={light}
                                        onChange={(e) => setLight(parseInt(e.target.value, 10))} />
                                    <em>{light}%</em>
                                </label>
                                <label className="ctrl">
                                    <span>Opacity</span>
                                    <input type="range" min={0} max={1} step={0.01} value={alpha}
                                        onChange={(e) => setAlpha(parseFloat(e.target.value))} />
                                    <em>{round(alpha, 2)}</em>
                                </label>
                            </div>
                            <p className="hint">Tip: thickness &lt; 48 + gap 8–24 ⇒ expensive-UI vibes.</p>
                        </motion.div>
                    </div>
                </Styled.Stage>

                <Styled.Notes>
                    <h3>How it works</h3>
                    <ul>
                        <li>Streaks are horizontal bands inside a rotated layer, controls stay upright.</li>
                        <li>Per-streak jitter avoids robotic motion; transform-only for silky 60fps.</li>
                    </ul>
                </Styled.Notes>

                {/* Modal remains as you had it */}
            </Styled.Wrapper>
        </MotionConfig>
    );
}
