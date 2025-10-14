import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useScroll, useTransform } from "framer-motion";
import { Styled, ModalOverlay } from "./styled";

/** Safe container detection (uses your app's data-scroll-root if present) */
function getScrollContainer() {
    if (typeof document === "undefined") return null;
    return (
        document.querySelector("[data-scroll-root]") ||
        document.getElementById("scroll-root") ||
        null
    );
}

export default function BackToTopFab() {
    // Prepare a ref whose initial current is set BEFORE hooks run
    const containerRef = useRef(getScrollContainer());

    // Bind useScroll to the scrolling container (falls back to viewport if null)
    const { scrollYProgress } = useScroll({ container: containerRef });

    // Animate visibility of FAB based on progress
    const fabScale = useTransform(scrollYProgress, [0.03, 0.10], [0.7, 1]);
    const fabOpacity = useTransform(scrollYProgress, [0.03, 0.10], [0, 1]);

    // Circular progress ring math
    const R = 14; // radius
    const CIRC = 2 * Math.PI * R;
    const dashOffset = useTransform(scrollYProgress, [0, 1], [CIRC, 0]);

    // Settings/Info modal
    const [showModal, setShowModal] = useState(false);
    const [admin, setAdmin] = useState({ email: "", password: "" });
    const [pwVisible, setPwVisible] = useState(false);
    const [errors, setErrors] = useState({ email: "", password: "" });

    // Validate simple fields
    const validate = () => {
        const next = { email: "", password: "" };
        if (!admin.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(admin.email)) {
            next.email = "Please enter a valid email.";
        }
        if (!admin.password || admin.password.length < 6) {
            next.password = "Password must be at least 6 characters.";
        }
        setErrors(next);
        return !next.email && !next.password;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        // no-op: demo form
        setShowModal(false);
    };

    // Smooth scroll to top (container aware)
    const toTop = () => {
        const el = containerRef.current;
        try {
            if (el && "scrollTo" in el) el.scrollTo({ top: 0, behavior: "smooth" });
            else window.scrollTo({ top: 0, behavior: "smooth" });
        } catch {
            // very old browsers fallback
            if (el) el.scrollTop = 0;
            else window.scrollTo(0, 0);
        }
    };

    // Ensure we refresh the container ref after mount (in case layout changes)
    useEffect(() => {
        containerRef.current = getScrollContainer();
    }, []);

    // Some dummy sections to enable real scrolling & showcase the FAB
    const sections = useMemo(
        () =>
            Array.from({ length: 7 }).map((_, i) => ({
                id: `sect-${i + 1}`,
                title: `Section ${i + 1}`,
                body:
                    "Scroll to see the FAB appear. The circular ring fills as you progress. " +
                    "Click the button to smoothly return to the top. This long text ensures a comfortable, realistic demo.",
                bullets: [
                    "Progress ring uses strokeDashoffset bound to scrollYProgress.",
                    "FAB scales and fades in after ~3–10% scroll.",
                    "Container-aware scrolling (uses data-scroll-root).",
                ],
            })),
        []
    );

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Back-to-Top FAB</h1>
                        <p className="muted">
                            A scroll-aware floating action button with a circular progress ring and springy motion.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="FAB controls">
                        <button className="btn" onClick={() => setShowModal(true)} title="About & Settings">
                            About / Settings
                        </button>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    {sections.map((s) => (
                        <article key={s.id} id={s.id} className="block">
                            <header className="bHead">
                                <span className="kicker">Demo</span>
                                <h2>{s.title}</h2>
                            </header>
                            <p className="body">{s.body}</p>
                            <ul className="bullets">
                                {s.bullets.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                        </article>
                    ))}

                    {/* FAB */}
                    <motion.button
                        className="fab"
                        onClick={toTop}
                        aria-label="Back to top"
                        style={{ scale: fabScale, opacity: fabOpacity }}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        {/* Progress ring */}
                        <svg className="ring" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
                            <circle className="track" cx="20" cy="20" r={R} />
                            <motion.circle
                                className="progress"
                                cx="20"
                                cy="20"
                                r={R}
                                strokeDasharray={CIRC}
                                style={{ strokeDashoffset: dashOffset }}
                            />
                        </svg>

                        {/* Up arrow */}
                        <motion.span
                            className="icon"
                            initial={{ y: 4, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.25 }}
                            aria-hidden="true"
                        >
                            ↑
                        </motion.span>

                        {/* Tooltip */}
                        <span className="tooltip" role="tooltip">
                            Back to top
                        </span>
                    </motion.button>
                </Styled.Stage>

                {/* Modal: About & Settings (with password eye toggle + validation) */}
                <AnimatePresence>
                    {showModal && (
                        <ModalOverlay
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onMouseDown={(e) => {
                                // click outside closes; ignore clicks inside panel
                                if (e.target === e.currentTarget) setShowModal(false);
                            }}
                        >
                            <motion.div
                                className="modal"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="aboutTitle"
                                initial={{ y: 24, scale: 0.98, opacity: 0.9 }}
                                animate={{ y: 0, scale: 1, opacity: 1 }}
                                exit={{ y: 12, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                            >
                                <div className="mHead">
                                    <h3 id="aboutTitle">About this demo</h3>
                                </div>

                                <div className="mBody">
                                    <p className="muted">
                                        This page showcases a back-to-top FAB built with Framer Motion. It tracks scroll
                                        progress from your app’s main content container and animates a circular ring.
                                    </p>
                                    <ul className="details">
                                        <li>Container-aware progress via <code>useScroll({`{ container }`})</code>.</li>
                                        <li>Springy scale-in and subtle hover/tap feedback.</li>
                                        <li>Theme tokens for colors, radius, shadows.</li>
                                    </ul>

                                    <hr className="rule" />

                                    <form className="form" onSubmit={onSubmit} noValidate>
                                        <div className="field">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="you@example.com"
                                                value={admin.email}
                                                onChange={(e) => setAdmin((p) => ({ ...p, email: e.target.value }))}
                                                aria-invalid={!!errors.email}
                                                aria-describedby={errors.email ? "email-err" : undefined}
                                            />
                                            {errors.email && (
                                                <div className="err" id="email-err" role="alert">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>

                                        <div className="field">
                                            <label htmlFor="pw">Password</label>
                                            <div className="pwWrap">
                                                <input
                                                    id="pw"
                                                    type={pwVisible ? "text" : "password"}
                                                    placeholder="At least 6 characters"
                                                    value={admin.password}
                                                    onChange={(e) => setAdmin((p) => ({ ...p, password: e.target.value }))}
                                                    aria-invalid={!!errors.password}
                                                    aria-describedby={errors.password ? "pw-err" : undefined}
                                                />
                                                <button
                                                    type="button"
                                                    className="eye"
                                                    aria-label={pwVisible ? "Hide password" : "Show password"}
                                                    onClick={() => setPwVisible((v) => !v)}
                                                    title={pwVisible ? "Hide" : "Show"}
                                                >
                                                    {pwVisible ? "🙈" : "👁️"}
                                                </button>
                                            </div>
                                            {errors.password && (
                                                <div className="err" id="pw-err" role="alert">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>

                                        <div className="actions">
                                            <button type="button" className="closeBtn" onClick={() => setShowModal(false)}>
                                                Close
                                            </button>
                                            <button type="submit" className="primaryBtn">
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <div className="mFoot">
                                    <button className="closeBtn" onClick={() => setShowModal(false)}>
                                        Done
                                    </button>
                                </div>
                            </motion.div>
                        </ModalOverlay>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
