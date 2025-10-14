import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    AnimatePresence,
    MotionConfig,
    motion,
    useAnimationControls,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { Styled } from "./styled";

/* ---------- tiny inline icons ---------- */
function IconEye({ ...p }) {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden focusable="false" {...p}>
            <path fill="currentColor" d="M12 5c5.5 0 9.5 5 9.5 7s-4 7-9.5 7S2.5 14 2.5 12 6.5 5 12 5zm0 2C8 7 4.9 10 4 12c.9 1.9 4 5 8 5s7.1-3.1 8-5c-.9-2-4-5-8-5zm0 2.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
        </svg>
    );
}
function IconEyeOff({ ...p }) {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden focusable="false" {...p}>
            <path fill="currentColor" d="M3 4.3L4.3 3 21 19.7 19.7 21l-3.1-3.1A11.7 11.7 0 0112 19.5C6.5 19.5 2.5 14.5 2.5 12c0-1 .6-2.4 1.7-3.9L3 4.3zm7.3 7.3l2 2a2.5 2.5 0 01-2-2zM12 5c5.5 0 9.5 5 9.5 7 0 .8-.5 2-1.3 3.2l-1.5-1.5c.5-.7.8-1.3.8-1.7-1-2-4.1-5-7.5-5-1.2 0-2.3.3-3.3.8L7.7 5.9C9 5.3 10.5 5 12 5z" />
        </svg>
    );
}
function IconInfo({ ...p }) {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden focusable="false" {...p}>
            <path fill="currentColor" d="M11 10h2v7h-2v-7zm0-4h2v2h-2V6zm1-4C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
    );
}

/* ---------- helpers ---------- */
const emailOk = (s) => /\S+@\S+\.\S+/.test(String(s || ""));
const pwdOk = (s) => typeof s === "string" && s.length >= 6;

/* ---------- component ---------- */
export default function GlassCardCondensation() {
    // Controls
    const [intensity, setIntensity] = useState(0.6);  // 0..1
    const [autoSwirl, setAutoSwirl] = useState(true);
    const [showInfo, setShowInfo] = useState(false);
    const prefers = { motion: "never" };              // demo = always animate

    // Form state + validation
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [showPwd, setShowPwd] = useState(false);
    const [errors, setErrors] = useState({ email: "", pwd: "" });

    // tilt & highlight
    const cardRef = useRef(null);
    const mx = useMotionValue(0.5);
    const my = useMotionValue(0.5);
    const rX = useTransform(my, [0, 1], [10, -10]);
    const rY = useTransform(mx, [0, 1], [-12, 12]);
    const sR = useSpring(rX, { stiffness: 160, damping: 18, mass: 0.8 });
    const sY = useSpring(rY, { stiffness: 160, damping: 18, mass: 0.8 });

    const hx = useTransform(mx, (v) => `${(v * 100).toFixed(2)}%`);
    const hy = useTransform(my, (v) => `${(v * 100).toFixed(2)}%`);

    // droplets wrapper drifts against pointer
    const driftX = useSpring(useTransform(mx, [0, 1], [18, -18]), { stiffness: 70, damping: 18 });
    const driftY = useSpring(useTransform(my, [0, 1], [18, -18]), { stiffness: 70, damping: 18 });

    // pointer mapping
    const onMove = (e) => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const px = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
        const py = Math.min(Math.max((e.clientY - rect.top) / rect.height, 0), 1);
        mx.set(px);
        my.set(py);
    };
    const onLeave = () => { mx.set(0.5); my.set(0.5); };

    // form submit
    const shake = useAnimationControls();
    const onSubmit = (e) => {
        e.preventDefault();
        const next = { email: "", pwd: "" };
        if (!emailOk(email)) next.email = "Please enter a valid email address.";
        if (!pwdOk(pwd)) next.pwd = "Password must be at least 6 characters.";
        setErrors(next);
        if (next.email || next.pwd) {
            shake.start({
                x: [0, -10, 10, -6, 6, -2, 0],
                transition: { duration: 0.38, ease: "easeOut" },
            });
            return;
        }
        setShowInfo(true);
    };

    // CSS variables for the glass layers
    const glassVars = useMemo(
        () => ({
            ["--hx"]: hx,
            ["--hy"]: hy,
            ["--condense"]: intensity, // bind directly from state
        }),
        [hx, hy, intensity]
    );

    return (
        <MotionConfig reducedMotion={prefers.motion}>
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Glass Card Condensation</h1>
                        <p className="muted">
                            A premium glassmorphism panel with <em>condensing</em> fog, droplets, tilt, and a mouse-tracked highlight.
                            Fully theme-aware, accessible, and spring-tuned.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Glass controls">
                        <label className="ctrl">
                            <span>Condensation</span>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.05"
                                value={intensity}
                                onChange={(e) => setIntensity(parseFloat(e.target.value))}
                            />
                            <em>{(intensity * 100).toFixed(0)}%</em>
                        </label>

                        {/* <label className="toggle">
                            <input
                                type="checkbox"
                                checked={autoSwirl}
                                onChange={(e) => setAutoSwirl(e.target.checked)}
                            />
                            <span>Auto swirl</span>
                        </label> */}

                        <button className="btn ghost" onClick={() => setShowInfo(true)} title="What’s this?">
                            <IconInfo /> Details
                        </button>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <motion.div
                        ref={cardRef}
                        className="glassCard"
                        style={{ rotateX: sR, rotateY: sY, ...glassVars }}
                        onMouseMove={onMove}
                        onMouseLeave={onLeave}
                    >
                        {/* BACKDROP fog + highlight */}
                        <div className="glassBase" />

                        {/* Droplets wrapper (drifts) */}
                        <motion.div className="droplets" style={{ x: driftX, y: driftY }}>
                            {/* Inner layer (swirls when enabled) */}
                            <motion.div
                                className="dropsInner"
                                animate={
                                    autoSwirl
                                        ? { x: [0, 6, -6, 0], y: [0, -4, 4, 0] }
                                        : { x: 0, y: 0 }
                                }
                                transition={
                                    autoSwirl
                                        ? { duration: 8, ease: "easeInOut", repeat: Infinity }
                                        : { duration: 0.3, ease: "easeOut" }
                                }
                            />
                        </motion.div>

                        {/* content */}
                        <motion.div className="content" layout>
                            <header className="cHead">
                                <h2>Sign in to continue</h2>
                                <p className="sub">We’ll keep your session secure. No tracking pixels, just vibes.</p>
                            </header>

                            <motion.form className="form" onSubmit={onSubmit} initial={false} animate={shake}>
                                <label className="field">
                                    <span>Email</span>
                                    <input
                                        type="email"
                                        placeholder="you@domain.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        aria-invalid={!!errors.email}
                                        aria-describedby={errors.email ? "e-err" : undefined}
                                        required
                                    />
                                    {errors.email && <em className="err" id="e-err">{errors.email}</em>}
                                </label>

                                <label className="field">
                                    <span>Password</span>
                                    <div className="pwd">
                                        <input
                                            type={showPwd ? "text" : "password"}
                                            placeholder="••••••••"
                                            value={pwd}
                                            onChange={(e) => setPwd(e.target.value)}
                                            aria-invalid={!!errors.pwd}
                                            aria-describedby={errors.pwd ? "p-err" : undefined}
                                            required
                                            minLength={6}
                                        />
                                        <button
                                            type="button"
                                            className="eye"
                                            aria-label={showPwd ? "Hide password" : "Show password"}
                                            onClick={() => setShowPwd((v) => !v)}
                                        >
                                            {showPwd ? <IconEyeOff /> : <IconEye />}
                                        </button>
                                    </div>
                                    {errors.pwd && <em className="err" id="p-err">{errors.pwd}</em>}
                                </label>

                                <div className="actions">
                                    <button type="submit" className="btn primary">Continue</button>
                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={() => { setEmail(""); setPwd(""); setErrors({ email: "", pwd: "" }); }}
                                    >
                                        Reset
                                    </button>
                                </div>
                            </motion.form>

                            <footer className="cFoot">
                                <p className="hint">By continuing you agree to our <a href="#t">Terms</a> and <a href="#p">Privacy</a>.</p>
                            </footer>
                        </motion.div>
                    </motion.div>
                </Styled.Stage>

                {/* Modal with blurred overlay */}
                <AnimatePresence>
                    {showInfo && (
                        <motion.div key="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <Styled.ModalOverlay onClick={() => setShowInfo(false)}>
                                <motion.div
                                    className="modal"
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="m-title"
                                    initial={{ y: 18, scale: 0.96, opacity: 0 }}
                                    animate={{ y: 0, scale: 1, opacity: 1, transition: { type: "spring", stiffness: 220, damping: 22 } }}
                                    exit={{ y: 8, scale: 0.98, opacity: 0, transition: { duration: 0.18 } }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="mHead">
                                        <h3 id="m-title">About the Glass Effect</h3>
                                    </div>
                                    <div className="mBody">
                                        <p className="muted">
                                            This panel uses a layered stack: backdrop blur/saturate/brightness for fog,
                                            a highlight gradient pinned to your cursor, and a droplet layer with subtle parallax.
                                        </p>
                                        <ul className="details">
                                            <li>Transforms only for motion (no layout thrash).</li>
                                            <li>Spring timing tuned for hardware cleanliness.</li>
                                            <li>Accessible form with inline validation &amp; password toggle.</li>
                                        </ul>
                                    </div>
                                    <div className="mFoot">
                                        <button className="closeBtn" onClick={() => setShowInfo(false)}>Close</button>
                                    </div>
                                </motion.div>
                            </Styled.ModalOverlay>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
