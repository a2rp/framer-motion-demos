import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { Styled } from "./styled";
import { FiEye, FiEyeOff, FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";

/* ----------------- simple Portal ----------------- */
function Portal({ children, id = "drawer-portal" }) {
    const elRef = useRef(null);
    if (!elRef.current) {
        const el = document.createElement("div");
        el.setAttribute("id", id);
        elRef.current = el;
    }
    useEffect(() => {
        const el = elRef.current;
        document.body.appendChild(el);
        return () => {
            try { document.body.removeChild(el); } catch { }
        };
    }, []);
    return createPortal(children, elRef.current);
}

/* ----------------- validation helpers ----------------- */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
function validate(values) {
    const errs = {};
    if (!values.name?.trim()) errs.name = "Name is required.";
    else if (values.name.trim().length < 2) errs.name = "Name must be at least 2 characters.";

    if (!values.email?.trim()) errs.email = "Email is required.";
    else if (!EMAIL_RE.test(values.email.trim())) errs.email = "Enter a valid email.";

    const p = values.password || "";
    const rules = [
        [/.{8,}/, "≥ 8 chars"],
        [/[A-Z]/, "1 uppercase"],
        [/[a-z]/, "1 lowercase"],
        [/[0-9]/, "1 number"],
    ];
    const failed = rules.filter(([re]) => !re.test(p));
    if (p && failed.length) errs.password = "Password must include: " + failed.map(([, m]) => m).join(", ") + ".";
    return errs;
}
function strength(password) {
    let s = 0;
    if (/.{8,}/.test(password)) s++;
    if (/[A-Z]/.test(password)) s++;
    if (/[a-z]/.test(password)) s++;
    if (/[0-9]/.test(password)) s++;
    return s; // 0..4
}

/* ----------------- component ----------------- */
export default function DrawerFold() {
    // Sheet controls
    const [open, setOpen] = useState(false);
    const [widthPx, setWidthPx] = useState(520); // 360..720
    const [depth, setDepth] = useState(10);      // rotateY degrees 0..14
    const [stiff, setStiff] = useState(340);
    const [damp, setDamp] = useState(30);

    // Form
    const [values, setValues] = useState({ name: "", email: "", password: "" });
    const [touched, setTouched] = useState({});
    const [showPass, setShowPass] = useState(false);
    const errs = useMemo(() => validate(values), [values]);
    const valid = Object.keys(errs).length === 0 && values.name && values.email;

    // Danger modal
    const [confirmOpen, setConfirmOpen] = useState(false);

    // Focus & scroll lock
    const firstInputRef = useRef(null);
    useEffect(() => {
        if (open) {
            const id = requestAnimationFrame(() => firstInputRef.current?.focus());
            document.body.style.overflow = "hidden";
            return () => {
                cancelAnimationFrame(id);
                document.body.style.overflow = "";
            };
        }
    }, [open]);

    // Esc to close (sheet or modal)
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") {
                if (confirmOpen) setConfirmOpen(false);
                else if (open) setOpen(false);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, confirmOpen]);

    // Motion variants
    const overlayFx = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.18 } },
        exit: { opacity: 0, transition: { duration: 0.14 } },
    };
    const sheetVariants = {
        closed: {
            x: "100%",
            rotateY: -depth,
            opacity: 1,
            transition: { type: "spring", stiffness: stiff, damping: damp },
        },
        open: {
            x: 0,
            rotateY: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: stiff, damping: damp },
        },
    };

    // Handlers
    const onChange = (e) => {
        const { name, value } = e.target;
        setValues((v) => ({ ...v, [name]: value }));
    };
    const onBlur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));
    const clearForm = () => {
        setValues({ name: "", email: "", password: "" });
        setTouched({});
        setShowPass(false);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setTouched({ name: true, email: true, password: true });
        if (!valid) { toast.error("Please fix the highlighted fields."); return; }
        toast.success("Profile saved");
        setOpen(false);
    };

    // Drag-to-dismiss
    const handleDragEnd = (_e, info) => {
        const traveled = info.offset.x; // positive to the right
        const speed = info.velocity.x || 0;
        if (traveled > 120 || speed > 800) setOpen(false);
    };

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Drawer Fold (Right Overlay + Blur)</h1>
                        <p className="muted">
                            Portaled overlay sits above everything. Drag to dismiss, Esc to close.
                            Fully validated form, password eye toggle, and a blurred confirm modal.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Sheet controls">
                        <label className="ctrl">
                            <span>Width</span>
                            <input type="range" min="360" max="720" step="10" value={widthPx}
                                onChange={(e) => setWidthPx(parseInt(e.target.value || "520", 10))} />
                            <em>{widthPx}px</em>
                        </label>

                        {/* <label className="ctrl">
                            <span>Depth</span>
                            <input type="range" min="0" max="14" step="1" value={depth}
                                onChange={(e) => setDepth(parseInt(e.target.value || "10", 10))} />
                            <em>{depth}°</em>
                        </label> */}

                        <label className="ctrl">
                            <span>Spring</span>
                            <div className="row">
                                <input type="number" min="120" max="600" step="10" value={stiff}
                                    onChange={(e) => setStiff(parseInt(e.target.value || "340", 10))} aria-label="Stiffness" />
                                <input type="number" min="10" max="60" step="2" value={damp}
                                    onChange={(e) => setDamp(parseInt(e.target.value || "30", 10))} aria-label="Damping" />
                            </div>
                            <em>stiff / damp</em>
                        </label>

                        <button className="btn primary" type="button" onClick={() => setOpen(true)}>
                            Open Drawer
                        </button>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <p className="lead">
                        The overlay is now rendered via a <code>Portal</code> to <code>document.body</code>, so it can’t be trapped
                        by any parent stacking contexts (like <code>transform</code> or <code>filter</code>).
                    </p>
                    <ul className="bullet">
                        <li>Overlay blurs + dims the page, click outside to close.</li>
                        <li>Sheet emerges with <code>translateX</code> + <code>rotateY</code>.</li>
                        <li>Drag-to-dismiss: fling to the right or drag ~120px.</li>
                    </ul>
                </Styled.Stage>

                {/* Overlay (blur + dim) + Sheet (right) rendered ABOVE EVERYTHING */}
                <AnimatePresence>
                    {open && (
                        <Portal id="drawer-overlay-root">
                            <Styled.Overlay
                                as={motion.div}
                                {...overlayFx}
                                onClick={() => setOpen(false)}
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="sheet-title"
                            >
                                {/* Stop overlay click from closing when interacting with the sheet */}
                                <div className="sheetArea" onClick={(e) => e.stopPropagation()} style={{ ["--sheet-w"]: `${widthPx}px` }}>
                                    <motion.aside
                                        className="drawer"
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        variants={sheetVariants}
                                        style={{ transformOrigin: "right center" }}
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={0.04}
                                        onDragEnd={handleDragEnd}
                                    >
                                        <header className="dHead">
                                            <h3 id="sheet-title">Profile Settings</h3>
                                            <p className="muted">Update your info. Password is optional, but validated if entered.</p>
                                        </header>

                                        <form className="dBody" onSubmit={onSubmit} noValidate>
                                            {/* Name */}
                                            <label className={`field ${touched.name && errs.name ? "invalid" : ""}`}>
                                                <span>Name</span>
                                                <input
                                                    ref={firstInputRef}
                                                    name="name"
                                                    type="text"
                                                    placeholder="Your name"
                                                    value={values.name}
                                                    onChange={onChange}
                                                    onBlur={onBlur}
                                                    autoComplete="name"
                                                />
                                                {touched.name && errs.name && <i className="err">{errs.name}</i>}
                                            </label>

                                            {/* Email */}
                                            <label className={`field ${touched.email && errs.email ? "invalid" : ""}`}>
                                                <span>Email</span>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    placeholder="you@example.com"
                                                    value={values.email}
                                                    onChange={onChange}
                                                    onBlur={onBlur}
                                                    autoComplete="email"
                                                />
                                                {touched.email && errs.email && <i className="err">{errs.email}</i>}
                                            </label>

                                            {/* Password */}
                                            <label className={`field ${touched.password && errs.password ? "invalid" : ""}`}>
                                                <span>Password</span>
                                                <div className="passWrap">
                                                    <input
                                                        name="password"
                                                        type={showPass ? "text" : "password"}
                                                        placeholder="New password (optional)"
                                                        value={values.password}
                                                        onChange={onChange}
                                                        onBlur={onBlur}
                                                        autoComplete="new-password"
                                                    />
                                                    <button
                                                        type="button"
                                                        className="eye"
                                                        aria-label={showPass ? "Hide password" : "Show password"}
                                                        title={showPass ? "Hide password" : "Show password"}
                                                        onClick={() => setShowPass((v) => !v)}
                                                    >
                                                        {showPass ? <FiEyeOff /> : <FiEye />}
                                                    </button>
                                                </div>

                                                <div className="meter" data-score={strength(values.password)}>
                                                    <span />
                                                </div>
                                                {values.password && (
                                                    <p className="hint">
                                                        Strength:{" "}
                                                        <b>{["Very weak", "Weak", "Fair", "Good", "Strong"][strength(values.password)]}</b>
                                                    </p>
                                                )}
                                                {touched.password && errs.password && <i className="err">{errs.password}</i>}
                                            </label>

                                            <div className="actions">
                                                <button
                                                    type="button"
                                                    className="btn ghost danger"
                                                    onClick={() => setConfirmOpen(true)}
                                                    title="Clear all fields"
                                                >
                                                    <FiTrash2 /> Reset Form
                                                </button>
                                                <div className="spacer" />
                                                <button type="button" className="btn" onClick={() => setOpen(false)}>Cancel</button>
                                                <button type="submit" className="btn primary" disabled={!valid}>Save</button>
                                            </div>
                                        </form>

                                        <footer className="dFoot">
                                            <small className="muted">
                                                Tip: keep depth ≤ 12° and damping ~30 for premium, non-toy motion.
                                            </small>
                                        </footer>
                                    </motion.aside>
                                </div>
                            </Styled.Overlay>
                        </Portal>
                    )}
                </AnimatePresence>

                {/* Confirm Reset Modal (also portaled above everything) */}
                <AnimatePresence>
                    {confirmOpen && (
                        <Portal id="drawer-modal-root">
                            <Styled.ModalOverlay
                                as={motion.div}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.18 } }}
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="reset-title"
                            >
                                <motion.div
                                    className="modal"
                                    initial={{ y: -14, opacity: 0.6, scale: 0.98 }}
                                    animate={{ y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 320, damping: 26 } }}
                                    exit={{ y: -12, opacity: 0, transition: { duration: 0.16 } }}
                                >
                                    <div className="mHead">
                                        <h3 id="reset-title">Reset form?</h3>
                                    </div>
                                    <div className="mBody">
                                        <p className="muted">This clears all fields and cannot be undone.</p>
                                        <ul className="details">
                                            <li>Name, email, and password will be wiped.</li>
                                            <li>This action is immediate.</li>
                                        </ul>
                                    </div>
                                    <div className="mFoot">
                                        <button className="closeBtn" onClick={() => setConfirmOpen(false)}>Cancel</button>
                                        <button
                                            className="closeBtn"
                                            onClick={() => {
                                                clearForm();
                                                setConfirmOpen(false);
                                                toast.info("Form cleared.");
                                            }}
                                            style={{ background: "hsl(5 80% 50%)" }}
                                            title="Confirm reset"
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                </motion.div>
                            </Styled.ModalOverlay>
                        </Portal>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
