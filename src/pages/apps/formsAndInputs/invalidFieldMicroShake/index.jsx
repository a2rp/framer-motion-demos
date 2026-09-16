import { useEffect, useId, useMemo, useState } from "react";
import {
    AnimatePresence,
    MotionConfig,
    motion,
    useAnimationControls,
} from "framer-motion";
import { Styled } from "./styled";

/* ----------------- validation helpers ----------------- */
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const hasUpper = /[A-Z]/,
    hasLower = /[a-z]/,
    hasDigit = /\d/,
    hasSpecial = /[^A-Za-z0-9]/;

function validate(values) {
    const errors = {};
    if (!values.name?.trim()) errors.name = "Please enter your full name.";
    else if (values.name.trim().length < 2)
        errors.name = "Name must be at least 2 characters.";

    if (!values.email?.trim()) errors.email = "Email is required.";
    else if (!emailRe.test(values.email))
        errors.email = "Enter a valid email address.";

    const p = values.password || "";
    const reqs = {
        len: p.length >= 8,
        upper: hasUpper.test(p),
        lower: hasLower.test(p),
        digit: hasDigit.test(p),
        special: hasSpecial.test(p),
    };
    const okCount = Object.values(reqs).filter(Boolean).length;
    if (!p) errors.password = "Password is required.";
    else if (okCount < 3) errors.password = "Password is too weak.";
    else if (!reqs.len) errors.password = "Use at least 8 characters.";

    if (!values.confirm) errors.confirm = "Please confirm your password.";
    else if (values.confirm !== values.password)
        errors.confirm = "Passwords do not match.";

    if (!values.accept) errors.accept = "You must accept the terms.";
    return { errors };
}

function strengthScore(pw) {
    if (!pw) return 0;
    let s = 0;
    if (pw.length >= 8) s++;
    if (hasUpper.test(pw)) s++;
    if (hasLower.test(pw)) s++;
    if (hasDigit.test(pw)) s++;
    if (hasSpecial.test(pw)) s++;
    return Math.min(4, Math.max(1, s));
}

/* ----------------- icons ----------------- */
function Eye({ off = false }) {
    return off ? (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <path
                fill="currentColor"
                d="M2 5.27L3.28 4 20 20.72 18.73 22l-3.17-3.17A9.76 9.76 0 0 1 12 20C6.5 20 2.15 16.28 1 12c.41-1.49 1.23-2.9 2.33-4.08L2 5.27zM12 7a5 5 0 0 1 5 5c0 .66-.13 1.29-.36 1.86l-6.5-6.5C10.71 7.13 11.34 7 12 7zm10.99 5c-.56 2.05-2.09 3.98-4.11 5.36l-1.45-1.45C19.43 14.69 20.57 13.43 21 12 19.85 7.72 15.5 4 10 4c-1.07 0-2.1.13-3.08.36l-1.6-1.6C6.64 2.26 8.28 2 10 2c6.01 0 10.85 3.86 12.99 10z"
            />
        </svg>
    ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <path
                fill="currentColor"
                d="M12 4c6 0 10.85 3.86 13 10-2.15 6.14-7 10-13 10S1.15 20.14-1 14C1.15 7.86 6 4 12 4zm0 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
            />
        </svg>
    );
}
function Check() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <path
                fill="currentColor"
                d="M9 16.17l-3.88-3.88L3.71 13.7 9 19l12-12-1.41-1.41z"
            />
        </svg>
    );
}

/* ----------------- reliable shake hook ----------------- */
function useShakeTrigger(active) {
    const controls = useAnimationControls();
    useEffect(() => {
        if (!active) return;
        controls.start({
            x: [0, -8, 8, -6, 6, -3, 3, 0],
            transition: {
                duration: 0.5,
                times: [0, 0.12, 0.24, 0.4, 0.6, 0.78, 0.9, 1],
                ease: "easeInOut",
            },
        });
    }, [active, controls]);
    return controls;
}

/* ----------------- component ----------------- */
export default function InvalidFieldMicroShake() {
    const nameId = useId(),
        emailId = useId(),
        pwdId = useId(),
        confId = useId();

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
        accept: false,
    });
    const [touched, setTouched] = useState({});
    const [submitCount, setSubmitCount] = useState(0);
    const [showPwd, setShowPwd] = useState(false);
    const [rulesOpen, setRulesOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);

    const { errors } = useMemo(() => validate(values), [values]);
    const score = useMemo(() => strengthScore(values.password), [values.password]);

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
    };
    const onBlur = (e) =>
        setTouched((t) => ({ ...t, [e.target.name]: true }));

    const invalid = (k) => !!errors[k] && (touched[k] || submitCount > 0);

    // ✅ shake controls per field - will run every time active flips to true
    const shakeName = useShakeTrigger(invalid("name"));
    const shakeEmail = useShakeTrigger(invalid("email"));
    const shakePwd = useShakeTrigger(invalid("password"));
    const shakeConf = useShakeTrigger(invalid("confirm"));
    const shakeTerms = useShakeTrigger(invalid("accept"));

    const submit = (e) => {
        e.preventDefault();
        setSubmitCount((n) => n + 1);
        setTouched({
            name: true,
            email: true,
            password: true,
            confirm: true,
            accept: true,
        });
        if (Object.keys(errors).length === 0) setSuccessOpen(true);
    };

    useEffect(() => {
        if (!successOpen) return;
        const id = setTimeout(() => setSuccessOpen(false), 1600);
        return () => clearTimeout(id);
    }, [successOpen]);

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Invalid Field Micro-Shake</h1>
                        <p className="muted">
                            Strict validation with a gentle shake on errors, animated hints,
                            and a polished success modal.
                        </p>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <form className="form" noValidate onSubmit={submit}>
                        {/* Name */}
                        <motion.div
                            className={`field ${invalid("name") ? "invalid" : ""}`}
                            animate={shakeName}
                        >
                            <label htmlFor={nameId}>Full Name</label>
                            <input
                                id={nameId}
                                type="text"
                                name="name"
                                placeholder="Jane Doe"
                                value={values.name}
                                onChange={onChange}
                                onBlur={onBlur}
                                aria-invalid={invalid("name")}
                                aria-describedby={invalid("name") ? `${nameId}-err` : undefined}
                                autoComplete="name"
                            />
                            <AnimatePresence>
                                {invalid("name") && (
                                    <motion.p
                                        id={`${nameId}-err`}
                                        className="error"
                                        initial={{ opacity: 0, y: -4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -4 }}
                                    >
                                        {errors.name}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Email */}
                        <motion.div
                            className={`field ${invalid("email") ? "invalid" : ""}`}
                            animate={shakeEmail}
                        >
                            <label htmlFor={emailId}>Email</label>
                            <input
                                id={emailId}
                                type="email"
                                name="email"
                                placeholder="jane@example.com"
                                value={values.email}
                                onChange={onChange}
                                onBlur={onBlur}
                                aria-invalid={invalid("email")}
                                aria-describedby={invalid("email") ? `${emailId}-err` : undefined}
                                autoComplete="email"
                                inputMode="email"
                            />
                            <AnimatePresence>
                                {invalid("email") && (
                                    <motion.p
                                        id={`${emailId}-err`}
                                        className="error"
                                        initial={{ opacity: 0, y: -4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -4 }}
                                    >
                                        {errors.email}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Password */}
                        <motion.div
                            className={`field hasSuffix ${invalid("password") ? "invalid" : ""}`}
                            animate={shakePwd}
                        >
                            <label htmlFor={pwdId}>Password</label>
                            <div className="inputWrap">
                                <input
                                    id={pwdId}
                                    type={showPwd ? "text" : "password"}
                                    name="password"
                                    placeholder="••••••••"
                                    value={values.password}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    aria-invalid={invalid("password")}
                                    aria-describedby={`${pwdId}-help ${invalid("password") ? `${pwdId}-err` : ""
                                        }`.trim()}
                                    autoComplete="new-password"
                                />
                                <button
                                    type="button"
                                    className="eyeBtn"
                                    aria-label={showPwd ? "Hide password" : "Show password"}
                                    onClick={() => setShowPwd((v) => !v)}
                                >
                                    <AnimatePresence mode="wait" initial={false}>
                                        <motion.span
                                            key={showPwd ? "eye-off" : "eye"}
                                            initial={{ rotate: -10, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 10, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Eye off={showPwd} />
                                        </motion.span>
                                    </AnimatePresence>
                                </button>
                            </div>

                            {/* Strength meter */}
                            <div className="meter" id={`${pwdId}-help`} aria-live="polite">
                                <motion.div
                                    className={`bar s${score}`}
                                    initial={false}
                                    animate={{ width: ["0%", `${(score / 4) * 100}%`] }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                />
                                <span className="hint">
                                    {score >= 4
                                        ? "Strong"
                                        : score === 3
                                            ? "Good"
                                            : score === 2
                                                ? "Weak"
                                                : score === 1
                                                    ? "Very weak"
                                                    : "-"}
                                    <button
                                        type="button"
                                        className="link"
                                        onClick={() => setRulesOpen(true)}
                                    >
                                        Password rules
                                    </button>
                                </span>
                            </div>

                            <AnimatePresence>
                                {invalid("password") && (
                                    <motion.p
                                        id={`${pwdId}-err`}
                                        className="error"
                                        initial={{ opacity: 0, y: -4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -4 }}
                                    >
                                        Password must be 8+ chars and mix cases, numbers, or symbols.
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Confirm */}
                        <motion.div
                            className={`field ${invalid("confirm") ? "invalid" : ""}`}
                            animate={shakeConf}
                        >
                            <label htmlFor={confId}>Confirm Password</label>
                            <input
                                id={confId}
                                type="password"
                                name="confirm"
                                placeholder="Repeat password"
                                value={values.confirm}
                                onChange={onChange}
                                onBlur={onBlur}
                                aria-invalid={invalid("confirm")}
                                aria-describedby={invalid("confirm") ? `${confId}-err` : undefined}
                                autoComplete="new-password"
                            />
                            <AnimatePresence>
                                {invalid("confirm") && (
                                    <motion.p
                                        id={`${confId}-err`}
                                        className="error"
                                        initial={{ opacity: 0, y: -4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -4 }}
                                    >
                                        {errors.confirm}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Terms */}
                        <motion.label
                            className={`terms ${invalid("accept") ? "invalid" : ""}`}
                            animate={shakeTerms}
                        >
                            <input
                                type="checkbox"
                                name="accept"
                                checked={values.accept}
                                onChange={onChange}
                                onBlur={onBlur}
                                aria-invalid={invalid("accept")}
                            />
                            <span>I accept the terms & privacy policy.</span>
                        </motion.label>

                        <div className="actions">
                            <button type="submit" className="submitBtn">
                                <span>Create Account</span>
                            </button>
                        </div>
                    </form>
                </Styled.Stage>

                {/* Modals */}
                <AnimatePresence>
                    {rulesOpen && (
                        <Styled.ModalRoot
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onMouseDown={(e) => {
                                if (e.target === e.currentTarget) setRulesOpen(false);
                            }}
                        >
                            <Styled.ModalCard
                                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                                aria-label="Password rules"
                            >
                                <header className="mHead">
                                    <h3>Password rules</h3>
                                </header>
                                <ul className="mList">
                                    <li>Minimum 8 characters</li>
                                    <li>Mix of uppercase & lowercase letters</li>
                                    <li>At least one number</li>
                                    <li>At least one special character</li>
                                </ul>
                                <div className="mActions">
                                    <button className="ghost" onClick={() => setRulesOpen(false)}>
                                        Close
                                    </button>
                                </div>
                            </Styled.ModalCard>
                        </Styled.ModalRoot>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {successOpen && (
                        <Styled.ModalRoot
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onMouseDown={(e) => {
                                if (e.target === e.currentTarget) setSuccessOpen(false);
                            }}
                        >
                            <Styled.SuccessCard
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                                role="alertdialog"
                                aria-label="Account created"
                            >
                                <motion.span
                                    className="badge"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 320, damping: 18 }}
                                >
                                    <Check />
                                </motion.span>
                                <h3>Account created</h3>
                                <p>All validations passed. You’re good to go!</p>
                            </Styled.SuccessCard>
                        </Styled.ModalRoot>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
