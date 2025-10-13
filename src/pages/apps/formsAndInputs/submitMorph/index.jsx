import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useAnimationControls } from "framer-motion";
import { Styled } from "./styled";

/* ---------- icons (inline, no extra deps) ---------- */
const IconEye = (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M12 5c5.5 0 9.7 4.5 10.8 6-.9 1.3-5 6-10.8 6S2.3 12.3 1.2 11C2.3 9.5 6.5 5 12 5zm0 2c-4.6 0-8 3.8-9 4.9 1 1.1 4.4 5 9 5s8-3.9 9-5c-1-1.1-4.4-4.9-9-4.9zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"></path>
    </svg>
);
const IconEyeOff = (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M3.3 2.6L2 3.9l4 4C4 9 2.6 10.6 1.9 11.5c.9 1.3 5 6 10.8 6 2.2 0 4.2-.6 5.8-1.5l3.5 3.5 1.3-1.3L3.3 2.6zM12 17.4c-4.6 0-8-3.9-9-5 .6-.7 1.7-2 3.3-3.2l2.2 2.2A3.5 3.5 0 0012 15.5c.7 0 1.3-.2 1.9-.5l2.1 2.1c-1.1.2-2.2.3-3.1.3zm9-5.9c-.8 1.2-2.2 2.8-4.2 4l-6-6a3.5 3.5 0 014.7 4.7l1.6 1.6c2.4-1.6 4.1-3.7 4.9-4.7-.7-1-4.1-4.9-9-4.9-.9 0-1.9.1-2.8.3l1.8 1.8c.3 0 .7-.1 1-.1 4.6 0 8 3.8 9 4.9z"></path>
    </svg>
);
const IconCheck = (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M9.55 16.15l-3.7-3.7 1.4-1.4 2.3 2.29 7.1-7.1 1.41 1.41-8.5 8.5z" />
    </svg>
);
const IconLoader = (p) => (
    <svg viewBox="0 0 50 50" width="18" height="18" aria-hidden focusable="false" {...p}>
        <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="5" fill="none" opacity="0.25" />
        <motion.circle
            cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round"
            strokeDasharray="100 80" strokeDashoffset="0"
            animate={{ rotate: 360, strokeDashoffset: -180 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            style={{ originX: "50%", originY: "50%" }}
        />
    </svg>
);

/* ---------- validation ---------- */
const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const strongPassRx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const initialValues = { name: "", email: "", password: "", confirm: "", agree: false };

function validate(values) {
    const e = {};
    if (!values.name.trim()) e.name = "Name is required.";
    else if (values.name.trim().length < 2) e.name = "Name must be at least 2 characters.";

    if (!values.email.trim()) e.email = "Email is required.";
    else if (!emailRx.test(values.email)) e.email = "Enter a valid email.";

    if (!values.password) e.password = "Password is required.";
    else if (!strongPassRx.test(values.password))
        e.password = "Min 8 chars, 1 uppercase, 1 lowercase, 1 number.";

    if (!values.confirm) e.confirm = "Confirm your password.";
    else if (values.confirm !== values.password) e.confirm = "Passwords do not match.";

    if (!values.agree) e.agree = "Please accept the terms.";
    return e;
}

/* ---------- component ---------- */
export default function SubmitMorph() {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [announce, setAnnounce] = useState("");
    const [showModal, setShowModal] = useState(false);

    const btnControls = useAnimationControls();
    const formRef = useRef(null);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const confirmRef = useRef(null);
    const agreeRef = useRef(null);

    // compute first invalid field to focus on submit failure
    const firstInvalidKey = useMemo(() => {
        const keys = ["name", "email", "password", "confirm", "agree"];
        for (const k of keys) if (errors[k]) return k;
        return null;
    }, [errors]);

    useEffect(() => {
        if (!firstInvalidKey) return;
        const map = { name: nameRef, email: emailRef, password: passRef, confirm: confirmRef, agree: agreeRef };
        map[firstInvalidKey]?.current?.focus?.();
    }, [firstInvalidKey]);

    // button morph variants
    const btnVariants = {
        idle: { width: 160, borderRadius: 10, backgroundColor: "var(--primary)", transition: { type: "spring", stiffness: 260, damping: 22 } },
        loading: { width: 44, borderRadius: 999, transition: { type: "spring", stiffness: 260, damping: 24 } },
        success: { width: 44, borderRadius: 999, backgroundColor: "var(--ok, hsl(152 70% 35%))", transition: { type: "spring", stiffness: 260, damping: 22 } },
        error: { width: 160, borderRadius: 10, backgroundColor: "var(--err, hsl(0 70% 55%))", transition: { type: "spring", stiffness: 260, damping: 22 } },
    };

    // shake on error
    const shake = async () => {
        await btnControls.start({ x: [0, -8, 8, -6, 6, -3, 3, 0], transition: { duration: 0.5 } });
    };

    const setField = (k, v) => {
        setValues((s) => ({ ...s, [k]: v }));
    };

    const onBlur = (k) => setTouched((t) => ({ ...t, [k]: true }));

    const submit = async (e) => {
        e.preventDefault();
        const v = validate(values);
        setErrors(v);

        if (Object.keys(v).length) {
            setStatus("error");
            setAnnounce("Please fix form errors.");
            shake();
            return;
        }

        setStatus("loading");
        setAnnounce("Submitting…");
        try {
            // simulate network
            await new Promise((r) => setTimeout(r, 1100));
            setStatus("success");
            setAnnounce("Submitted successfully.");
            setShowModal(true);
            // reset after a moment (keep values for modal)
            setTimeout(() => setStatus("idle"), 900);
        } catch {
            setStatus("error");
            setAnnounce("Submission failed.");
            shake();
        }
    };

    const closeModal = () => setShowModal(false);

    const idleLabel = "Create account";
    const formDisabled = status === "loading";

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Submit Morph</h1>
                        <p className="muted">A premium form with a morphing submit button, accessible validation, and a custom modal.</p>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <form ref={formRef} className="form" onSubmit={submit} noValidate>
                        {/* name */}
                        <motion.div className="field" animate={errors.name && touched.name ? { x: [0, -6, 6, 0] } : { x: 0 }}>
                            <label htmlFor="name">Full name</label>
                            <input
                                id="name"
                                ref={nameRef}
                                type="text"
                                placeholder="e.g., Ashish Ranjan"
                                value={values.name}
                                onChange={(e) => setField("name", e.target.value)}
                                onBlur={() => onBlur("name")}
                                aria-invalid={!!errors.name}
                                aria-describedby={errors.name ? "err-name" : undefined}
                                disabled={formDisabled}
                            />
                            <AnimatePresence>
                                {errors.name && touched.name && (
                                    <motion.div
                                        id="err-name"
                                        className="error"
                                        initial={{ opacity: 0, y: -4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -4 }}
                                    >
                                        {errors.name}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* email */}
                        <motion.div className="field twoCol" animate={errors.email && touched.email ? { x: [0, -6, 6, 0] } : { x: 0 }}>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                ref={emailRef}
                                type="email"
                                placeholder="you@example.com"
                                value={values.email}
                                onChange={(e) => setField("email", e.target.value)}
                                onBlur={() => onBlur("email")}
                                aria-invalid={!!errors.email}
                                aria-describedby={errors.email ? "err-email" : undefined}
                                disabled={formDisabled}
                                inputMode="email"
                                autoComplete="email"
                            />
                            <AnimatePresence>
                                {errors.email && touched.email && (
                                    <motion.div
                                        id="err-email"
                                        className="error"
                                        initial={{ opacity: 0, y: -4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -4 }}
                                    >
                                        {errors.email}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* password */}
                        <motion.div className="field" animate={errors.password && touched.password ? { x: [0, -6, 6, 0] } : { x: 0 }}>
                            <label htmlFor="password">Password</label>
                            <div className="withEye">
                                <input
                                    id="password"
                                    ref={passRef}
                                    type={showPass ? "text" : "password"}
                                    placeholder="Min 8 chars, upper/lower/number"
                                    value={values.password}
                                    onChange={(e) => setField("password", e.target.value)}
                                    onBlur={() => onBlur("password")}
                                    aria-invalid={!!errors.password}
                                    aria-describedby={errors.password ? "err-password" : "hint-password"}
                                    disabled={formDisabled}
                                    autoComplete="new-password"
                                />
                                <button
                                    type="button"
                                    className="eye"
                                    aria-label={showPass ? "Hide password" : "Show password"}
                                    onClick={() => setShowPass((s) => !s)}
                                    tabIndex={-1}
                                >
                                    {showPass ? <IconEyeOff /> : <IconEye />}
                                </button>
                            </div>
                            <div id="hint-password" className="hint">Use at least 8 characters with a mix of letters and numbers.</div>
                            <AnimatePresence>
                                {errors.password && touched.password && (
                                    <motion.div
                                        id="err-password"
                                        className="error"
                                        initial={{ opacity: 0, y: -4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -4 }}
                                    >
                                        {errors.password}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* confirm */}
                        <motion.div className="field" animate={errors.confirm && touched.confirm ? { x: [0, -6, 6, 0] } : { x: 0 }}>
                            <label htmlFor="confirm">Confirm password</label>
                            <div className="withEye">
                                <input
                                    id="confirm"
                                    ref={confirmRef}
                                    type={showConfirm ? "text" : "password"}
                                    placeholder="Re-enter your password"
                                    value={values.confirm}
                                    onChange={(e) => setField("confirm", e.target.value)}
                                    onBlur={() => onBlur("confirm")}
                                    aria-invalid={!!errors.confirm}
                                    aria-describedby={errors.confirm ? "err-confirm" : undefined}
                                    disabled={formDisabled}
                                    autoComplete="new-password"
                                />
                                <button
                                    type="button"
                                    className="eye"
                                    aria-label={showConfirm ? "Hide password" : "Show password"}
                                    onClick={() => setShowConfirm((s) => !s)}
                                    tabIndex={-1}
                                >
                                    {showConfirm ? <IconEyeOff /> : <IconEye />}
                                </button>
                            </div>
                            <AnimatePresence>
                                {errors.confirm && touched.confirm && (
                                    <motion.div
                                        id="err-confirm"
                                        className="error"
                                        initial={{ opacity: 0, y: -4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -4 }}
                                    >
                                        {errors.confirm}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* agree */}
                        <motion.div className="agreeRow" animate={errors.agree && touched.agree ? { x: [0, -6, 6, 0] } : { x: 0 }}>
                            <label className="checkbox">
                                <input
                                    ref={agreeRef}
                                    type="checkbox"
                                    checked={values.agree}
                                    onChange={(e) => setField("agree", e.target.checked)}
                                    onBlur={() => onBlur("agree")}
                                    aria-invalid={!!errors.agree}
                                    aria-describedby={errors.agree ? "err-agree" : undefined}
                                    disabled={formDisabled}
                                />
                                <span>I agree to the <a href="#" onClick={(e) => e.preventDefault()}>Terms & Privacy</a>.</span>
                            </label>
                            <AnimatePresence>
                                {errors.agree && touched.agree && (
                                    <motion.div
                                        id="err-agree"
                                        className="error"
                                        initial={{ opacity: 0, y: -4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -4 }}
                                    >
                                        {errors.agree}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* submit */}
                        <div className="submitRow">
                            <motion.button
                                type="submit"
                                className="submitBtn"
                                variants={btnVariants}
                                animate={status}
                                whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
                                disabled={status === "loading"}
                            >
                                <span className="btnContent">
                                    <AnimatePresence mode="wait" initial={false}>
                                        {status === "loading" ? (
                                            <motion.span
                                                key="loader"
                                                className="btnIcon"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                            >
                                                <IconLoader />
                                            </motion.span>
                                        ) : status === "success" ? (
                                            <motion.span
                                                key="check"
                                                className="btnIcon"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                            >
                                                <IconCheck />
                                            </motion.span>
                                        ) : (
                                            <motion.span
                                                key="label"
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -6 }}
                                                className="btnLabel"
                                            >
                                                {idleLabel}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </span>
                            </motion.button>
                        </div>

                        {/* polite SR region */}
                        <div className="sr" aria-live="polite">{announce}</div>
                    </form>
                </Styled.Stage>

                {/* Modal */}
                <AnimatePresence>
                    {showModal && (
                        <Styled.ModalOverlay
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-title"
                        >
                            <motion.div
                                className="modal"
                                initial={{ y: 20, scale: 0.98, opacity: 0 }}
                                animate={{ y: 0, scale: 1, opacity: 1, transition: { type: "spring", stiffness: 280, damping: 24 } }}
                                exit={{ y: 10, opacity: 0, transition: { duration: 0.2 } }}
                            >
                                <header className="mHead">
                                    <h3 id="modal-title">Welcome aboard!</h3>
                                </header>
                                <div className="mBody">
                                    <p className="muted">Your account has been created with:</p>
                                    <ul className="details">
                                        <li><b>Name:</b> {values.name}</li>
                                        <li><b>Email:</b> {values.email}</li>
                                        <li><b>Password:</b> {"•".repeat(Math.max(8, values.password.length))}</li>
                                    </ul>
                                </div>
                                <footer className="mFoot">
                                    <button className="closeBtn" onClick={closeModal}>Done</button>
                                </footer>
                            </motion.div>
                        </Styled.ModalOverlay>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
