import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
    AnimatePresence,
    MotionConfig,
    motion,
    useSpring,
    useTransform,
    useMotionValue,
} from "framer-motion";
import { Styled } from "./styled";

/* ---------- helpers ---------- */

const rxUpper = /[A-Z]/;
const rxLower = /[a-z]/;
const rxNumber = /[0-9]/;
const rxSymbol = /[^A-Za-z0-9]/;

function scorePassword(pw = "") {
    let score = 0;
    const len = pw.length;
    const hasUpper = rxUpper.test(pw);
    const hasLower = rxLower.test(pw);
    const hasNumber = rxNumber.test(pw);
    const hasSymbol = rxSymbol.test(pw);

    if (len >= 16) score += 40;
    else if (len >= 12) score += 28;
    else if (len >= 10) score += 20;
    else if (len >= 8) score += 12;

    const groups = [hasUpper, hasLower, hasNumber, hasSymbol].filter(Boolean).length;
    score += groups * 12;

    if (/\s/.test(pw)) score -= 10;
    if (/(.)\1{2,}/.test(pw)) score -= 6;

    score = Math.max(0, Math.min(100, score));
    let label = "Weak";
    if (score >= 80) label = "Excellent";
    else if (score >= 60) label = "Strong";
    else if (score >= 40) label = "Fair";

    return { score, label, hasUpper, hasLower, hasNumber, hasSymbol, len };
}

function EyeOpenIcon(props) {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden focusable="false" {...props}>
            <path
                fill="currentColor"
                d="M12 5c5.5 0 9.5 4.5 10.7 6-.9 1.2-4.9 6-10.7 6S2.5 12.2 1.3 11C2.5 9.5 6.5 5 12 5zm0 2c-4.2 0-7.6 3.2-8.9 4 1.2.9 4.7 4 8.9 4s7.6-3.1 8.9-4C19.6 10.2 16.2 7 12 7zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"
            />
        </svg>
    );
}
function EyeClosedIcon(props) {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden focusable="false" {...props}>
            <path
                fill="currentColor"
                d="M3.3 2l18.4 18.4-1.3 1.3L2 3.3 3.3 2zM12 7c-1 0-1.9.3-2.7.9l1.5 1.5c.4-.2.8-.4 1.2-.4a3 3 0 013 3c0 .4-.2.8-.4 1.2l1.5 1.5c.6-.8.9-1.7.9-2.7a5 5 0 00-5-5zM12 5c5.5 0 9.5 4.5 10.7 6-.4.5-1.6 1.9-3.3 3.3l-1.5-1.5c1.3-1.1 2.3-2.2 2.8-2.8C19.6 10.2 16.2 7 12 7c-.8 0-1.6.1-2.3.3L8.2 6.8A12 12 0 0112 5zM4.1 8.7C5.8 7.2 8.7 5 12 5c.5 0 1 .1 1.5.1l-1.7-1.7C10.9 3.2 10.5 3 10 3 4.5 3 .5 7.5-.7 9c.4.5 1.6 1.9 3.3 3.3.4.3.9.7 1.4 1L5.7 11C5 10.3 4.5 9.5 4.1 8.7z"
            />
        </svg>
    );
}

/* ---------- component ---------- */

export default function PasswordRevealEyeBounce() {
    const idPassword = useId();
    const idConfirm = useId();

    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [show, setShow] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const result = useMemo(() => scorePassword(password), [password]);
    const match = confirm.length ? confirm === password : false;
    const allGood =
        result.len >= 8 &&
        result.hasUpper &&
        result.hasLower &&
        result.hasNumber &&
        result.hasSymbol &&
        match;

    // strength meter motion (version-safe)
    const mv = useMotionValue(0);
    const w = useSpring(mv, { stiffness: 260, damping: 32, mass: 0.8 });
    const hue = useTransform(w, [0, 100], [4, 140]);
    const bg = useTransform(hue, (h) => `hsl(${h} 90% 56%)`);
    const widthPct = useTransform(w, (v) => `${Math.max(0, Math.min(100, v)).toFixed(0)}%`);
    useEffect(() => { mv.set(result.score); }, [result.score, mv]);

    const onSubmit = (e) => { e.preventDefault(); if (allGood) setModalOpen(true); };

    // eye bounce on inner wrapper
    const [eyeKey, setEyeKey] = useState(0);
    const toggleShow = () => { setShow((s) => !s); setEyeKey((k) => k + 1); };

    /* ----- Full-screen modal: focus trap + body scroll lock + Esc close ----- */
    const dialogRef = useRef(null);
    const doneBtnRef = useRef(null);
    const prevFocusRef = useRef(null);

    useEffect(() => {
        if (!modalOpen) return;
        const { overflow } = document.body.style;
        document.body.style.overflow = "hidden";
        prevFocusRef.current = document.activeElement;
        const id = requestAnimationFrame(() => doneBtnRef.current?.focus());

        const onKey = (e) => {
            if (e.key === "Escape") {
                e.preventDefault();
                setModalOpen(false);
            } else if (e.key === "Tab") {
                const root = dialogRef.current;
                if (!root) return;
                const focusables = root.querySelectorAll(
                    'a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])'
                );
                if (!focusables.length) return;
                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault(); last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault(); first.focus();
                }
            }
        };
        window.addEventListener("keydown", onKey);

        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = overflow;
            cancelAnimationFrame(id);
            if (prevFocusRef.current && prevFocusRef.current.focus) prevFocusRef.current.focus();
        };
    }, [modalOpen]);

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Password - Eye Toggle + Bounce</h1>
                        <p className="muted">
                            Animated reveal/hide with a bouncy eye icon, live strength meter, and realtime validations.
                        </p>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <form className="form" onSubmit={onSubmit} noValidate>
                        {/* Password */}
                        <div className="field">
                            <label htmlFor={idPassword}>New Password</label>
                            <div className="inputWrap">
                                <input
                                    id={idPassword}
                                    type={show ? "text" : "password"}
                                    autoComplete="new-password"
                                    placeholder="Create a strong password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    aria-describedby="pw-help"
                                    required
                                />
                                <button
                                    type="button"
                                    className="eyeBtn"
                                    onClick={toggleShow}
                                    title={show ? "Hide password" : "Show password"}
                                    aria-label={show ? "Hide password" : "Show password"}
                                >
                                    <motion.span
                                        className="eyeBounce"
                                        initial={false}
                                        animate={{ y: [0, -3, 0], scale: [1, 0.96, 1] }}
                                        transition={{ duration: 0.35, times: [0, 0.5, 1], ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <AnimatePresence mode="wait" initial={false}>
                                            {show ? (
                                                <motion.span
                                                    key={"open-" + eyeKey}
                                                    initial={{ rotate: -15, opacity: 0, scale: 0.9 }}
                                                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                                    exit={{ rotate: 15, opacity: 0, scale: 0.9 }}
                                                    transition={{ duration: 0.22 }}
                                                    aria-hidden="true"
                                                >
                                                    <EyeOpenIcon />
                                                </motion.span>
                                            ) : (
                                                <motion.span
                                                    key={"closed-" + eyeKey}
                                                    initial={{ rotate: -15, opacity: 0, scale: 0.9 }}
                                                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                                    exit={{ rotate: 15, opacity: 0, scale: 0.9 }}
                                                    transition={{ duration: 0.22 }}
                                                    aria-hidden="true"
                                                >
                                                    <EyeClosedIcon />
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </motion.span>
                                </button>
                            </div>

                            {/* Strength meter */}
                            <div className="meter" aria-live="polite">
                                <motion.div className="bar" style={{ width: widthPct, background: bg }} />
                                <div className="label">
                                    <span>{result.label}</span>
                                    <span className="score">{result.score}%</span>
                                </div>
                            </div>

                            {/* Criteria */}
                            <ul className="criteria" id="pw-help">
                                <Criteria ok={result.len >= 8} text="At least 8 characters" />
                                <Criteria ok={result.hasUpper} text="Uppercase (A–Z)" />
                                <Criteria ok={result.hasLower} text="Lowercase (a–z)" />
                                <Criteria ok={result.hasNumber} text="Number (0–9)" />
                                <Criteria ok={result.hasSymbol} text="Symbol (!@#$…)" />
                            </ul>
                        </div>

                        {/* Confirm */}
                        <div className="field">
                            <label htmlFor={idConfirm}>Confirm Password</label>
                            <div className="inputWrap">
                                <input
                                    id={idConfirm}
                                    type={show ? "text" : "password"}
                                    autoComplete="new-password"
                                    placeholder="Re-type your password"
                                    value={confirm}
                                    onChange={(e) => setConfirm(e.target.value)}
                                    aria-invalid={confirm.length > 0 && !match}
                                />
                            </div>
                            <AnimatePresence initial={false}>
                                {confirm.length > 0 && !match && (
                                    <motion.p
                                        className="error"
                                        initial={{ opacity: 0, y: -4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -4 }}
                                    >
                                        Passwords don’t match.
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Actions */}
                        <div className="actions">
                            <button
                                className="btn ghost"
                                type="button"
                                onClick={() => { setPassword(""); setConfirm(""); }}
                            >
                                Reset
                            </button>
                            <motion.button
                                className="btn primary"
                                type="submit"
                                disabled={!allGood}
                                whileTap={{ scale: 0.98 }}
                                animate={allGood ? { boxShadow: "0 8px 24px hsl(210 90% 56% / 0.35)" } : { boxShadow: "var(--shadow-sm)" }}
                                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                            >
                                Save Password
                            </motion.button>
                        </div>
                    </form>
                </Styled.Stage>

                {/* Full-screen success modal using your ModalOverlay spec */}
                <AnimatePresence>
                    {modalOpen && (
                        <Styled.ModalOverlay
                            as={motion.div}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-title"
                            onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                ref={dialogRef}
                                className="modal"
                                initial={{ y: 12, opacity: 0, scale: 0.98 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ y: 8, opacity: 0, scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 300, damping: 26 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="mHead">
                                    <h3 id="modal-title">Password Updated</h3>
                                    <p className="muted">Everything meets the policy. You’re good to go.</p>
                                </div>

                                <div className="mBody">
                                    <p className="muted">Summary</p>
                                    <ul className="details">
                                        <li>Strength: <b>{result.label}</b> ({result.score}%)</li>
                                        <li>Length: <b>{result.len}</b> characters</li>
                                    </ul>
                                </div>

                                <div className="mFoot">
                                    <button className="closeBtn" ref={doneBtnRef} onClick={() => setModalOpen(false)}>
                                        Done
                                    </button>
                                </div>
                            </motion.div>
                        </Styled.ModalOverlay>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}

function Criteria({ ok, text }) {
    return (
        <li className={ok ? "ok" : "bad"}>
            <span className="dotWrap" aria-hidden="true">
                <motion.span
                    className="dot"
                    layout
                    initial={false}
                    animate={ok ? { scale: 1, background: "var(--primary)" } : { scale: 1, background: "var(--border)" }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
                <AnimatePresence initial={false}>
                    {ok && (
                        <motion.span
                            className="check"
                            key="check"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    )}
                </AnimatePresence>
            </span>
            <span className="text">{text}</span>
        </li>
    );
}
