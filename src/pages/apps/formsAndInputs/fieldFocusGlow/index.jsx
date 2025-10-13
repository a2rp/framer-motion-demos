import { useEffect, useId, useMemo, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";

/* ---------------- Icons (inline SVG = zero deps) ---------------- */
const IconEye = (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...props}>
        <path fill="currentColor" d="M12 5c4.5 0 8.5 2.6 10 7-1.5 4.4-5.5 7-10 7S3.5 16.4 2 12c1.5-4.4 5.5-7 10-7zm0 2C8.6 7 5.7 8.9 4.4 12 5.7 15.1 8.6 17 12 17s6.3-1.9 7.6-5C18.3 8.9 15.4 7 12 7zm0 2.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5z" />
    </svg>
);
const IconEyeOff = (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...props}>
        <path fill="currentColor" d="M2.4 1.7 20 19.3l-1.4 1.4-3.1-3.1A10.7 10.7 0 0 1 12 19c-4.5 0-8.5-2.6-10-7a12.8 12.8 0 0 1 4.3-5.7L1 3.1 2.4 1.7zM12 7c3.4 0 6.3 1.9 7.6 5a11.2 11.2 0 0 1-3.3 4.2l-2-2a4 4 0 0 0-5.5-5.5l-2-2A12.7 12.7 0 0 1 12 7zm0 3a2 2 0 0 1 2 2l-3.4-3.4c.4-.4.9-.6 1.4-.6z" />
    </svg>
);
const IconInfo = (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...props}>
        <path fill="currentColor" d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm0 4.8a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM10.9 18h2.2v-7h-2.2v7z" />
    </svg>
);
const IconCheck = (props) => (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...props}>
        <path fill="currentColor" d="M9.2 16.6 5.4 12.8l1.4-1.4 2.4 2.3 7.9-7.9 1.4 1.4-9.3 9.4z" />
    </svg>
);

/* ---------------- Utilities ---------------- */
const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const hasUpper = /[A-Z]/;
const hasLower = /[a-z]/;
const hasNum = /[0-9]/;
const hasSym = /[^A-Za-z0-9]/;

function pwScore(pw) {
    let s = 0;
    if (pw.length >= 8) s++;
    if (hasUpper.test(pw)) s++;
    if (hasLower.test(pw)) s++;
    if (hasNum.test(pw)) s++;
    if (hasSym.test(pw)) s++;
    return Math.min(s, 5);
}
const strengthLabel = (s) =>
    ["Very Weak", "Weak", "Okay", "Good", "Strong"][Math.max(0, s - 1)] || "Very Weak";

/* ---------------- Field component with Motion focus ring ---------------- */
function Field({
    id,
    label,
    children,
    hint,
    error,
    required,
}) {
    const [focused, setFocused] = useState(false);
    const ring = {
        initial: { opacity: 0, scale: 0.97 },
        focus: { opacity: 1, scale: 1, transition: { duration: 0.18 } },
        blur: { opacity: 0, scale: 0.98, transition: { duration: 0.2 } },
    };
    const border = {
        initial: { borderColor: "var(--border)" },
        focus: { borderColor: "hsl(210 90% 56%)", transition: { duration: 0.18 } },
        error: { borderColor: "hsl(0 72% 56%)", transition: { duration: 0.18 } },
    };

    const state = error ? "error" : focused ? "focus" : "initial";

    return (
        <Styled.Field
            onFocusCapture={() => setFocused(true)}
            onBlurCapture={(e) => {
                // blur fires when moving inside; delay collapse to allow clicks on icons
                if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
            }}
        >
            <label htmlFor={id} className="label">
                {label} {required && <span className="req" aria-hidden>*</span>}
            </label>

            <motion.div
                className="control"
                variants={border}
                animate={state}
                layout
            >
                {/* Focus glow ring */}
                <motion.span
                    className="ring"
                    variants={ring}
                    animate={focused ? "focus" : "blur"}
                    aria-hidden="true"
                />
                {children}
            </motion.div>

            <div className="meta">
                <AnimatePresence initial={false}>
                    {error ? (
                        <motion.div
                            key="err"
                            className="error"
                            initial={{ y: -6, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -6, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                        >
                            {error}
                        </motion.div>
                    ) : hint ? (
                        <motion.div
                            key="hint"
                            className="hint"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.9 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {hint}
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>
        </Styled.Field>
    );
}

/* ---------------- Modal ---------------- */
function SuccessModal({ open, onClose }) {
    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="modal-card"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="success-title"
                        initial={{ y: 30, opacity: 0, scale: 0.98 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 20, opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="check">
                            <motion.span
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                            >
                                <IconCheck />
                            </motion.span>
                        </div>
                        <h3 id="success-title">All set!</h3>
                        <p>Your demo form validated successfully.</p>
                        <button className="btn primary" onClick={onClose}>Close</button>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

/* ---------------- Main Page ---------------- */
export default function FieldFocusGlow() {
    const nameId = useId();
    const emailId = useId();
    const pwId = useId();
    const cpwId = useId();
    const roleId = useId();
    const termsId = useId();

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
        role: "",
        terms: false,
    });
    const [touched, setTouched] = useState({});
    const [showPw, setShowPw] = useState(false);
    const [showCpw, setShowCpw] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const score = pwScore(values.password);
    const scorePct = (score / 5) * 100;

    const errors = useMemo(() => {
        const e = {};
        if (!values.name.trim()) e.name = "Your full name is required.";
        else if (values.name.trim().length < 2) e.name = "Name should be at least 2 characters.";
        if (!emailRx.test(values.email)) e.email = "Enter a valid email address.";
        if (!values.password) e.password = "Create a password.";
        else {
            if (values.password.length < 8) e.password = "Use at least 8 characters.";
            else if (!(hasUpper.test(values.password) && hasLower.test(values.password)))
                e.password = "Use both uppercase and lowercase letters.";
            else if (!hasNum.test(values.password)) e.password = "Include at least one number.";
            else if (!hasSym.test(values.password)) e.password = "Include at least one symbol.";
        }
        if (values.confirm !== values.password) e.confirm = "Passwords do not match.";
        if (!values.role) e.role = "Select a role.";
        if (!values.terms) e.terms = "You must accept the terms.";
        return e;
    }, [values]);

    const showError = (k) => touched[k] && errors[k];

    const set = (k, v) => setValues((s) => ({ ...s, [k]: v }));
    const onBlur = (k) => setTouched((s) => ({ ...s, [k]: true }));

    async function onSubmit(e) {
        e.preventDefault();
        // mark all touched to reveal any hidden errors
        setTouched({
            name: true, email: true, password: true, confirm: true, role: true, terms: true,
        });
        if (Object.keys(errors).length) return;

        setSubmitting(true);
        // fake network
        await new Promise((r) => setTimeout(r, 700));
        setSubmitting(false);
        setModalOpen(true);
    }

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Field Focus Glow</h1>
                        <p className="muted">
                            Premium focus ring with <code>Framer Motion</code> + accessible validation,
                            animated error hints, and password strength meter.
                        </p>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <Styled.Form onSubmit={onSubmit} noValidate>
                        <Field id={nameId} label="Full name" required hint="As it appears on official ID." error={showError("name") && errors.name}>
                            <input
                                id={nameId}
                                type="text"
                                autoComplete="name"
                                value={values.name}
                                onChange={(e) => set("name", e.target.value)}
                                onBlur={() => onBlur("name")}
                                aria-invalid={!!showError("name")}
                                aria-describedby={showError("name") ? `${nameId}-err` : undefined}
                            />
                        </Field>

                        <Field id={emailId} label="Email" required hint="We’ll never share your email." error={showError("email") && errors.email}>
                            <input
                                id={emailId}
                                type="email"
                                autoComplete="email"
                                value={values.email}
                                onChange={(e) => set("email", e.target.value)}
                                onBlur={() => onBlur("email")}
                                aria-invalid={!!showError("email")}
                                aria-describedby={showError("email") ? `${emailId}-err` : undefined}
                            />
                        </Field>

                        <Field
                            id={pwId}
                            label={
                                <span className="inlineLabel">
                                    Password
                                    <span className="req" aria-hidden>*</span>
                                    <span className="badge"><IconInfo /> rules</span>
                                </span>
                            }
                            required
                            error={showError("password") && errors.password}
                            hint={
                                <div className="pwBar" role="img" aria-label={`Password strength: ${strengthLabel(score)}`}>
                                    <motion.div
                                        className={`bar s${score}`}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${scorePct}%` }}
                                        transition={{ type: "spring", stiffness: 220, damping: 26 }}
                                    />
                                    <span className="label">{strengthLabel(score)}</span>
                                </div>
                            }
                        >
                            <input
                                id={pwId}
                                type={showPw ? "text" : "password"}
                                autoComplete="new-password"
                                value={values.password}
                                onChange={(e) => set("password", e.target.value)}
                                onBlur={() => onBlur("password")}
                                aria-invalid={!!showError("password")}
                                aria-describedby={showError("password") ? `${pwId}-err` : undefined}
                            />
                            <button
                                type="button"
                                className="iconBtn"
                                aria-label={showPw ? "Hide password" : "Show password"}
                                onClick={() => setShowPw((v) => !v)}
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {showPw ? (
                                        <motion.span
                                            key="eye-off"
                                            initial={{ rotate: -15, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 10, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <IconEyeOff />
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="eye"
                                            initial={{ rotate: -15, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 10, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <IconEye />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        </Field>

                        <Field id={cpwId} label="Confirm password" required error={showError("confirm") && errors.confirm}>
                            <input
                                id={cpwId}
                                type={showCpw ? "text" : "password"}
                                autoComplete="new-password"
                                value={values.confirm}
                                onChange={(e) => set("confirm", e.target.value)}
                                onBlur={() => onBlur("confirm")}
                                aria-invalid={!!showError("confirm")}
                                aria-describedby={showError("confirm") ? `${cpwId}-err` : undefined}
                            />
                            <button
                                type="button"
                                className="iconBtn"
                                aria-label={showCpw ? "Hide password" : "Show password"}
                                onClick={() => setShowCpw((v) => !v)}
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {showCpw ? (
                                        <motion.span
                                            key="eye-off-c"
                                            initial={{ rotate: -15, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 10, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <IconEyeOff />
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="eye-c"
                                            initial={{ rotate: -15, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 10, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <IconEye />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        </Field>

                        <Field id={roleId} label="Role" required error={showError("role") && errors.role}>
                            <select
                                id={roleId}
                                value={values.role}
                                onChange={(e) => set("role", e.target.value)}
                                onBlur={() => onBlur("role")}
                                aria-invalid={!!showError("role")}
                            >
                                <option value="">Select role…</option>
                                <option value="designer">Designer</option>
                                <option value="developer">Developer</option>
                                <option value="pm">Product Manager</option>
                            </select>
                        </Field>

                        <Styled.CheckRow>
                            <label htmlFor={termsId} className="checkbox">
                                <input
                                    id={termsId}
                                    type="checkbox"
                                    checked={values.terms}
                                    onChange={(e) => set("terms", e.target.checked)}
                                    onBlur={() => onBlur("terms")}
                                    aria-invalid={!!showError("terms")}
                                />
                                <span className="box" aria-hidden />
                                <span>I agree to the terms & privacy policy.</span>
                            </label>
                            <AnimatePresence initial={false}>
                                {showError("terms") && (
                                    <motion.div
                                        className="error"
                                        initial={{ y: -6, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -6, opacity: 0 }}
                                        transition={{ duration: 0.18 }}
                                    >
                                        {errors.terms}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Styled.CheckRow>

                        <div className="actions">
                            <motion.button
                                className="btn primary"
                                type="submit"
                                disabled={submitting}
                                whileTap={{ scale: 0.98 }}
                                whileHover={{ y: -2 }}
                            >
                                {submitting ? "Submitting…" : "Create account"}
                            </motion.button>
                        </div>
                    </Styled.Form>
                </Styled.Stage>

                <SuccessModal open={modalOpen} onClose={() => setModalOpen(false)} />
            </Styled.Wrapper>
        </MotionConfig>
    );
}
