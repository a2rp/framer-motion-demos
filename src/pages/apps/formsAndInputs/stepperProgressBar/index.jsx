import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";

/* ----------------------------- validation utils ---------------------------- */

const emailRe =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

const urlRe =
    /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/.*)?$/i;

function validateStep(step, data) {
    const errs = {};
    if (step === 0) {
        if (!data.name || data.name.trim().length < 2) errs.name = "Name must be at least 2 characters.";
        if (!emailRe.test(data.email || "")) errs.email = "Enter a valid email.";
        const pwd = data.password || "";
        if (pwd.length < 8) errs.password = "Password must be at least 8 characters.";
        if (!/[A-Z]/.test(pwd)) errs.password = (errs.password || "") + " Include an uppercase letter.";
        if (!/[0-9]/.test(pwd)) errs.password = (errs.password || "") + " Include a number.";
    }
    if (step === 1) {
        if (!data.role) errs.role = "Pick a role.";
        if (data.website && !urlRe.test(data.website)) errs.website = "Enter a valid URL (https://...).";
        if (!data.bio || data.bio.trim().length < 10) errs.bio = "Bio must be at least 10 characters.";
    }
    if (step === 2) {
        if (!data.theme) errs.theme = "Choose a theme.";
    }
    return errs;
}

function validateAll(data) {
    return {
        ...validateStep(0, data),
        ...validateStep(1, data),
        ...validateStep(2, data),
    };
}

/* ---------------------------------- steps ---------------------------------- */

const STEPS = [
    { key: "account", title: "Account", desc: "Basics to get you started." },
    { key: "profile", title: "Profile", desc: "Tell us about yourself." },
    { key: "prefs", title: "Preferences", desc: "Make it yours." },
    { key: "review", title: "Review", desc: "Confirm and submit." },
];

/* ----------------------------- page transitions ---------------------------- */

const pageVariants = {
    enter: (dir) => ({ x: dir > 0 ? 56 : -56, opacity: 0.85, scale: 0.995 }),
    center: { x: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 360, damping: 32, mass: 0.9 } },
    exit: (dir) => ({ x: dir > 0 ? -56 : 56, opacity: 0.85, scale: 0.995, transition: { duration: 0.18 } }),
};

export default function StepperProgressBar() {
    const [step, setStep] = useState(0);
    const [dir, setDir] = useState(1); // 1 forward, -1 back
    const [showPwd, setShowPwd] = useState(false);
    const [modal, setModal] = useState(false);
    const [touched, setTouched] = useState({});
    const formRef = useRef(null);

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
        website: "",
        bio: "",
        theme: "system",
        newsletter: true,
    });

    const errs = useMemo(() => validateStep(step, data), [step, data]);
    const canNext = useMemo(() => Object.keys(errs).length === 0, [errs]);
    const progressPct = ((step) / (STEPS.length - 1)) * 100;

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData((d) => ({ ...d, [name]: type === "checkbox" ? !!checked : value }));
    };

    const markTouched = (name) => setTouched((t) => ({ ...t, [name]: true }));

    const next = () => {
        if (!canNext) { focusFirstError(); return; }
        setDir(1);
        setStep((s) => Math.min(s + 1, STEPS.length - 1));
    };

    const back = () => {
        setDir(-1);
        setStep((s) => Math.max(s - 1, 0));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const allErrs = validateAll(data);
        if (Object.keys(allErrs).length) {
            // show all errors and jump to first offending step
            setTouched(Object.fromEntries(Object.keys(allErrs).map((k) => [k, true])));
            const firstStepWithError =
                [0, 1, 2].find((idx) => Object.keys(validateStep(idx, data)).length) ?? 0;
            setStep(firstStepWithError);
            setDir(-1);
            focusFirstError();
            return;
        }
        setModal(true);
    };

    function focusFirstError() {
        // try to focus the first field with error
        const root = formRef.current;
        if (!root) return;
        const firstErr = root.querySelector("[data-error='true']");
        if (firstErr) firstErr.focus();
    }

    // Allow Enter to continue when the current step is valid
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) return; // let ctrl/cmd+enter pass
            if (e.key === "Enter" && canNext && step < STEPS.length - 1) {
                e.preventDefault();
                next();
            }
        };
        const el = formRef.current;
        el?.addEventListener("keydown", onKey);
        return () => el?.removeEventListener("keydown", onKey);
    }, [canNext, step]);

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Stepper Progress Bar</h1>
                        <p className="muted">Multi-step form with animated progress and validations.</p>
                    </div>
                </Styled.Header>

                {/* Stepper */}
                <Styled.Stepper>
                    <div className="bar">
                        <motion.div
                            className="fill"
                            initial={false}
                            animate={{ width: `${progressPct}%` }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        />
                    </div>

                    <ul className="dots">
                        {STEPS.map((s, i) => (
                            <li key={s.key} className={i <= step ? "done" : ""}>
                                <div className="dot">
                                    <span className="idx">{i + 1}</span>
                                    <AnimatePresence>
                                        {i === step && (
                                            <motion.span
                                                className="halo"
                                                layoutId="active-dot"
                                                initial={{ scale: 0.9, opacity: 0.25 }}
                                                animate={{ scale: 1, opacity: 0.5 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.28 }}
                                            />
                                        )}
                                    </AnimatePresence>
                                </div>
                                <span className="label">{s.title}</span>
                            </li>
                        ))}
                    </ul>
                </Styled.Stepper>

                {/* Form */}
                <Styled.Stage>
                    <form ref={formRef} onSubmit={onSubmit} noValidate>
                        <AnimatePresence initial={false} custom={dir} mode="popLayout">
                            <motion.div
                                key={step}
                                className="panel"
                                variants={pageVariants}
                                custom={dir}
                                initial="enter"
                                animate="center"
                                exit="exit"
                            >
                                {step === 0 && (
                                    <fieldset className="grid2">
                                        <legend>Account</legend>

                                        <Styled.Field className={touched.name && errs.name ? "invalid" : ""}>
                                            <label htmlFor="name">Full name</label>
                                            <input
                                                id="name" name="name" type="text" autoComplete="name"
                                                value={data.name} onChange={onChange}
                                                onBlur={() => markTouched("name")}
                                                data-error={touched.name && !!errs.name}
                                                placeholder="Ada Lovelace"
                                                required
                                            />
                                            {touched.name && errs.name && <span className="err">{errs.name}</span>}
                                        </Styled.Field>

                                        <Styled.Field className={touched.email && errs.email ? "invalid" : ""}>
                                            <label htmlFor="email">Email</label>
                                            <input
                                                id="email" name="email" type="email" autoComplete="email"
                                                value={data.email} onChange={onChange}
                                                onBlur={() => markTouched("email")}
                                                data-error={touched.email && !!errs.email}
                                                placeholder="ada@analytical.engine"
                                                required
                                            />
                                            {touched.email && errs.email && <span className="err">{errs.email}</span>}
                                        </Styled.Field>

                                        <Styled.Field className={`pw ${touched.password && errs.password ? "invalid" : ""}`}>
                                            <label htmlFor="password">Password</label>
                                            <div className="pwWrap">
                                                <input
                                                    id="password" name="password"
                                                    type={showPwd ? "text" : "password"}
                                                    autoComplete="new-password"
                                                    value={data.password} onChange={onChange}
                                                    onBlur={() => markTouched("password")}
                                                    data-error={touched.password && !!errs.password}
                                                    placeholder="At least 8 chars, A-Z & 0-9"
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    className="eye"
                                                    aria-label={showPwd ? "Hide password" : "Show password"}
                                                    onClick={() => setShowPwd((v) => !v)}
                                                >
                                                    {showPwd ? (
                                                        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden><path fill="currentColor" d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12a5 5 0 110-10 5 5 0 010 10zm0-2.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" /></svg>
                                                    ) : (
                                                        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden><path fill="currentColor" d="M3.27 2L2 3.27 5.11 6.4C3.11 8 2 12 2 12s3 7 10 7c2.23 0 4.08-.62 5.59-1.52l3.14 3.14 1.27-1.27L3.27 2zM12 17c-4.97 0-7.74-4.02-8.73-5.82A14.24 14.24 0 017.4 7.4l1.46 1.46A5 5 0 0012 17zm0-10c4.97 0 7.74 4.02 8.73 5.82-.33.61-1.02 1.73-2.17 2.86l-1.45-1.45A5 5 0 0010.27 7.1L8.82 5.65A13.7 13.7 0 0112 7z" /></svg>
                                                    )}
                                                </button>
                                            </div>
                                            {touched.password && errs.password && <span className="err">{errs.password}</span>}
                                        </Styled.Field>
                                    </fieldset>
                                )}

                                {step === 1 && (
                                    <fieldset className="grid2">
                                        <legend>Profile</legend>

                                        <Styled.Field className={touched.role && errs.role ? "invalid" : ""}>
                                            <label>Role</label>
                                            <div className="row">
                                                {["Student", "Teacher", "Manager"].map((r) => (
                                                    <label key={r} className="radio">
                                                        <input
                                                            type="radio" name="role" value={r}
                                                            checked={data.role === r}
                                                            onChange={onChange}
                                                            onBlur={() => markTouched("role")}
                                                            data-error={touched.role && !!errs.role}
                                                        />
                                                        <span>{r}</span>
                                                    </label>
                                                ))}
                                            </div>
                                            {touched.role && errs.role && <span className="err">{errs.role}</span>}
                                        </Styled.Field>

                                        <Styled.Field className={touched.website && errs.website ? "invalid" : ""}>
                                            <label htmlFor="website">Website (optional)</label>
                                            <input
                                                id="website" name="website" type="url" inputMode="url"
                                                value={data.website} onChange={onChange}
                                                onBlur={() => markTouched("website")}
                                                data-error={touched.website && !!errs.website}
                                                placeholder="https://example.com"
                                            />
                                            {touched.website && errs.website && <span className="err">{errs.website}</span>}
                                        </Styled.Field>

                                        <Styled.Field className={touched.bio && errs.bio ? "invalid" : ""} wide>
                                            <label htmlFor="bio">Bio</label>
                                            <textarea
                                                id="bio" name="bio" rows={4}
                                                value={data.bio} onChange={onChange}
                                                onBlur={() => markTouched("bio")}
                                                data-error={touched.bio && !!errs.bio}
                                                placeholder="A line about your work, interests, or goals…"
                                            />
                                            {touched.bio && errs.bio && <span className="err">{errs.bio}</span>}
                                        </Styled.Field>
                                    </fieldset>
                                )}

                                {step === 2 && (
                                    <fieldset className="grid2">
                                        <legend>Preferences</legend>

                                        <Styled.Field className={touched.theme && errs.theme ? "invalid" : ""}>
                                            <label htmlFor="theme">Theme</label>
                                            <select
                                                id="theme" name="theme"
                                                value={data.theme} onChange={onChange}
                                                onBlur={() => markTouched("theme")}
                                                data-error={touched.theme && !!errs.theme}
                                                required
                                            >
                                                <option value="system">System</option>
                                                <option value="light">Light</option>
                                                <option value="dark">Dark</option>
                                            </select>
                                            {touched.theme && errs.theme && <span className="err">{errs.theme}</span>}
                                        </Styled.Field>

                                        <Styled.Field>
                                            <label className="check">
                                                <input
                                                    type="checkbox" name="newsletter"
                                                    checked={!!data.newsletter}
                                                    onChange={onChange}
                                                />
                                                <span>Subscribe to newsletter</span>
                                            </label>
                                        </Styled.Field>
                                    </fieldset>
                                )}

                                {step === 3 && (
                                    <fieldset className="review">
                                        <legend>Review</legend>
                                        <ul className="summary">
                                            <li><b>Name:</b> {data.name || "—"}</li>
                                            <li><b>Email:</b> {data.email || "—"}</li>
                                            <li><b>Role:</b> {data.role || "—"}</li>
                                            <li><b>Website:</b> {data.website || "—"}</li>
                                            <li><b>Theme:</b> {data.theme}</li>
                                            <li><b>Newsletter:</b> {data.newsletter ? "Yes" : "No"}</li>
                                        </ul>
                                        <p className="muted">Submit when everything looks right.</p>
                                    </fieldset>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        <Styled.Actions>
                            <button type="button" className="btn ghost" onClick={back} disabled={step === 0}>Back</button>
                            {step < STEPS.length - 1 ? (
                                <motion.button
                                    type="button"
                                    className="btn primary"
                                    onClick={next}
                                    disabled={!canNext}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Next
                                </motion.button>
                            ) : (
                                <motion.button
                                    type="submit"
                                    className="btn primary"
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Submit
                                </motion.button>
                            )}
                        </Styled.Actions>
                    </form>
                </Styled.Stage>

                {/* Modal */}
                <AnimatePresence>
                    {modal && (
                        <Styled.ModalOverlay
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="modal"
                                initial={{ y: 12, scale: 0.98, opacity: 0 }}
                                animate={{ y: 0, scale: 1, opacity: 1, transition: { type: "spring", stiffness: 360, damping: 34 } }}
                                exit={{ y: 8, scale: 0.98, opacity: 0, transition: { duration: 0.18 } }}
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="m-title"
                            >
                                <div className="mHead">
                                    <h3 id="m-title">All set!</h3>
                                </div>
                                <div className="mBody">
                                    <p className="muted">Your details were validated successfully.</p>
                                    <ul className="details">
                                        <li><b>Name:</b> {data.name}</li>
                                        <li><b>Email:</b> {data.email}</li>
                                        <li><b>Role:</b> {data.role}</li>
                                        <li><b>Theme:</b> {data.theme}</li>
                                        <li><b>Newsletter:</b> {data.newsletter ? "Yes" : "No"}</li>
                                    </ul>
                                </div>
                                <div className="mFoot">
                                    <button className="closeBtn" onClick={() => setModal(false)}>Close</button>
                                </div>
                            </motion.div>
                        </Styled.ModalOverlay>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
