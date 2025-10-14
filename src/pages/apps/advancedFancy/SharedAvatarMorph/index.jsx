import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";

/* --------------------- Data --------------------- */
const USERS = [
    { id: "u1", name: "Ashish Ranjan", title: "Frontend Engineer", email: "ashish@example.com", hue: 210 },
    { id: "u2", name: "Priya Sharma", title: "Product Designer", email: "priya@example.com", hue: 270 },
    { id: "u3", name: "Rahul Verma", title: "Mobile Developer", email: "rahul@example.com", hue: 180 },
    { id: "u4", name: "Neha Kapoor", title: "Data Scientist", email: "neha@example.com", hue: 330 },
    { id: "u5", name: "Karan Mehta", title: "Backend Engineer", email: "karan@example.com", hue: 35 },
    { id: "u6", name: "Anita Bose", title: "Engineering Manager", email: "anita@example.com", hue: 145 },
];

/* --------------------- Icons (inline, no extra deps) --------------------- */
const Eye = (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M12 5c5.5 0 9.5 4.5 10.5 6-1 1.5-5 6-10.5 6S2.5 12.5 1.5 11C2.5 9.5 6.5 5 12 5zm0 10a4 4 0 100-8 4 4 0 000 8z" /><circle fill="currentColor" cx="12" cy="11" r="2.2" />
    </svg>
);
const EyeOff = (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M2.1 3.5l1.4-1.4 19 19-1.4 1.4-3.2-3.2A12.6 12.6 0 0112 17c-5.5 0-9.5-4.5-10.5-6 .5-.76 1.9-2.43 4-3.86L2.1 3.5zM12 7a4 4 0 013.9 3.2l-1.7-1.7A2.1 2.1 0 0012 8.9c-.2 0-.4 0-.6.1L9.9 7.6c.6-.4 1.3-.6 2.1-.6zm8.6 3c.6.56.9 1.04.9 1.04S18.5 16 12 16c-1.1 0-2.1-.15-3.1-.4l1.8-1.8c.4.13.8.2 1.3.2a4 4 0 003.9-3.3l4.7-4.6 1.4 1.4-1.4 1.4z" />
    </svg>
);

/* --------------------- Helpers --------------------- */
const initialsOf = (name) =>
    name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((p) => p[0]?.toUpperCase())
        .join("");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const hasNumOrSym = /[\d\W]/;

/* --------------------- Component --------------------- */
export default function SharedAvatarMorph() {
    const [activeId, setActiveId] = useState(null);
    const active = useMemo(() => USERS.find((u) => u.id === activeId) || null, [activeId]);

    // Modal: close on ESC
    useEffect(() => {
        if (!active) return;
        const onKey = (e) => e.key === "Escape" && setActiveId(null);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [active]);

    return (
        <MotionConfig reducedMotion="never">
            <LayoutGroup>
                <Styled.Wrapper>
                    <header className="head">
                        <div className="title">
                            <h1>Shared Avatar Morph</h1>
                            <p className="muted">
                                Click a person: the small circular avatar morphs into a wide profile header inside a modal.
                                Text and controls animate into place. Clean, subtle, premium motion.
                            </p>
                        </div>
                    </header>

                    <Styled.Grid>
                        {USERS.map((u) => (
                            <motion.button
                                key={u.id}
                                className="card"
                                layout
                                onClick={() => setActiveId(u.id)}
                                whileHover={{ y: -2, boxShadow: "0 12px 36px hsl(0 0% 0% / 0.16)" }}
                                whileTap={{ scale: 0.98 }}
                                style={{ ["--hue"]: u.hue }}
                            >
                                <motion.div
                                    className="avatarSurface small"
                                    layoutId={`surface-${u.id}`}
                                    transition={{ layout: { type: "spring", stiffness: 600, damping: 42 } }}
                                >
                                    <div className="avatar">{initialsOf(u.name)}</div>
                                </motion.div>

                                <div className="meta">
                                    <motion.h3 layoutId={`name-${u.id}`}>{u.name}</motion.h3>
                                    <p className="role">{u.title}</p>
                                </div>
                            </motion.button>
                        ))}
                    </Styled.Grid>

                    {/* Modal */}
                    <AnimatePresence>
                        {active && (
                            <Styled.ModalOverlay
                                as={motion.div}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setActiveId(null)}
                            >
                                <motion.div
                                    className="modal"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 12, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 280, damping: 26 }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <ModalContent user={active} onClose={() => setActiveId(null)} />
                                </motion.div>
                            </Styled.ModalOverlay>
                        )}
                    </AnimatePresence>
                </Styled.Wrapper>
            </LayoutGroup>
        </MotionConfig>
    );
}

/* --------------------- Modal Content --------------------- */
function ModalContent({ user, onClose }) {
    const [following, setFollowing] = useState(false);

    // Form state (basic profile/account edit)
    const [values, setValues] = useState({
        name: user.name,
        email: user.email,
        password: "",
        confirm: "",
    });
    const [showPw, setShowPw] = useState({ pw: false, confirm: false });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | saving | success

    const setField = (k, v) => setValues((s) => ({ ...s, [k]: v }));

    const validate = () => {
        const e = {};
        if (!values.name || values.name.trim().length < 2) e.name = "Please enter your full name.";
        if (!emailRegex.test(values.email)) e.email = "Enter a valid email address.";
        if (values.password.length && (values.password.length < 8 || !hasNumOrSym.test(values.password))) {
            e.password = "Min 8 chars, include a number or symbol.";
        }
        if (values.password !== values.confirm) e.confirm = "Passwords do not match.";
        return e;
    };

    const submit = (ev) => {
        ev.preventDefault();
        const e = validate();
        setErrors(e);
        if (Object.keys(e).length > 0) return;

        setStatus("saving");
        // Simulate save
        setTimeout(() => setStatus("success"), 650);
        setTimeout(() => setStatus("idle"), 1600);
    };

    return (
        <>
            <div className="mHead">
                {/* Morphing header surface */}
                <motion.div
                    className="heroSurface"
                    layoutId={`surface-${user.id}`}
                    style={{ ["--hue"]: user.hue }}
                    transition={{ layout: { type: "spring", stiffness: 600, damping: 42 } }}
                >
                    <div className="heroContent">
                        <motion.h3 layoutId={`name-${user.id}`}>{user.name}</motion.h3>
                        <p className="role">{user.title}</p>
                    </div>
                </motion.div>
            </div>

            <div className="mBody">
                <div className="columns">
                    <section className="col colA">
                        <h4>Quick Actions</h4>
                        <div className="actions">
                            <motion.button
                                className={`btn ${following ? "ghost" : "primary"}`}
                                onClick={() => setFollowing((s) => !s)}
                                whileTap={{ scale: 0.98 }}
                                aria-pressed={following}
                            >
                                {following ? "Following" : "Follow"}
                            </motion.button>
                            <motion.button className="btn" whileTap={{ scale: 0.98 }}>
                                Message
                            </motion.button>
                            <motion.button className="btn ghost" whileTap={{ scale: 0.98 }}>
                                Share Profile
                            </motion.button>
                        </div>

                        <div className="about">
                            <p className="muted">
                                This modal demonstrates <b>shared layout</b> between grid and detail views.
                                The small circle avatar becomes a wide, elegant header surface.
                            </p>
                            <ul className="details">
                                <li>Transforms & opacity only</li>
                                <li>Spring-tuned for crispness</li>
                                <li>Theme-aware via tokens</li>
                            </ul>
                        </div>
                    </section>

                    <section className="col colB">
                        <h4>Edit Account</h4>
                        <form className="form" onSubmit={submit} noValidate>
                            <FormRow
                                id="name"
                                label="Full name"
                                value={values.name}
                                onChange={(v) => setField("name", v)}
                                error={errors.name}
                                placeholder="Your full name"
                            />

                            <FormRow
                                id="email"
                                label="Email"
                                type="email"
                                value={values.email}
                                onChange={(v) => setField("email", v)}
                                error={errors.email}
                                placeholder="you@example.com"
                            />

                            <PasswordRow
                                id="password"
                                label="New password"
                                value={values.password}
                                onChange={(v) => setField("password", v)}
                                error={errors.password}
                                show={showPw.pw}
                                setShow={(s) => setShowPw((x) => ({ ...x, pw: s }))}
                                placeholder="••••••••"
                            />

                            <PasswordRow
                                id="confirm"
                                label="Confirm password"
                                value={values.confirm}
                                onChange={(v) => setField("confirm", v)}
                                error={errors.confirm}
                                show={showPw.confirm}
                                setShow={(s) => setShowPw((x) => ({ ...x, confirm: s }))}
                                placeholder="Repeat password"
                            />

                            <div className="formActions">
                                <motion.button
                                    className="btn primary"
                                    type="submit"
                                    whileTap={{ scale: 0.98 }}
                                    disabled={status === "saving"}
                                >
                                    {status === "saving" ? "Saving…" : status === "success" ? "Saved ✓" : "Save changes"}
                                </motion.button>
                                <motion.button className="btn ghost" type="button" onClick={onClose} whileTap={{ scale: 0.98 }}>
                                    Close
                                </motion.button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>

            <div className="mFoot">
                <span className="muted">Press <kbd>Esc</kbd> to close</span>
                <div className="spacer" />
                <button className="closeBtn" onClick={onClose}>Close</button>
            </div>
        </>
    );
}

/* --------------------- Form Rows --------------------- */
function FormRow({ id, label, value, onChange, error, type = "text", placeholder }) {
    return (
        <div className={`formRow ${error ? "hasError" : ""}`}>
            <label htmlFor={id}>{label}</label>
            <motion.input
                id={id}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                whileFocus={{ boxShadow: "var(--focus-ring)" }}
                transition={{ type: "tween", duration: 0.15 }}
            />
            <AnimatePresence>
                {error && (
                    <motion.div
                        className="error"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                    >
                        {error}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function PasswordRow({ id, label, value, onChange, error, show, setShow, placeholder }) {
    return (
        <div className={`formRow ${error ? "hasError" : ""}`}>
            <label htmlFor={id}>{label}</label>
            <div className="pwWrap">
                <motion.input
                    id={id}
                    type={show ? "text" : "password"}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    whileFocus={{ boxShadow: "var(--focus-ring)" }}
                    transition={{ type: "tween", duration: 0.15 }}
                />
                <button
                    type="button"
                    className="eye"
                    aria-label={show ? "Hide password" : "Show password"}
                    onClick={() => setShow(!show)}
                    title={show ? "Hide" : "Show"}
                >
                    {show ? <EyeOff /> : <Eye />}
                </button>
            </div>
            <AnimatePresence>
                {error && (
                    <motion.div
                        className="error"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                    >
                        {error}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
