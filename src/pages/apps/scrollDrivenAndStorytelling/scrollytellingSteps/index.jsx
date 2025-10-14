import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useScroll, useTransform } from "framer-motion";
import { Styled } from "./styled";

/* ----- Step data (≥5 steps) ----- */
const STEPS = [
    {
        id: "s1",
        kicker: "Chapter 1",
        title: "Set the stage",
        body:
            "Introduce your scene. Keep motion subtle so users feel guided, not dragged. " +
            "We’ll parallax the background and ease text in as you scroll.",
        hue: 210,
    },
    {
        id: "s2",
        kicker: "Chapter 2",
        title: "Focus the subject",
        body:
            "Use gentle scale to imply attention. The sticky panel changes atmosphere while " +
            "text content enters and exits with reduced-motion fallbacks.",
        hue: 260,
    },
    {
        id: "s3",
        kicker: "Chapter 3",
        title: "Reveal a detail",
        body:
            "Crossfade layers; avoid harsh wipes. Small y-offsets and opacity ramps keep " +
            "things premium without feeling animated for animation’s sake.",
        hue: 180,
    },
    {
        id: "s4",
        kicker: "Chapter 4",
        title: "Shift perspective",
        body:
            "Drag the visual background slightly versus the copy to create tasteful depth. " +
            "Transforms only. No costly filters. GPU is your friend.",
        hue: 28,
    },
    {
        id: "s5",
        kicker: "Finale",
        title: "Land the message",
        body:
            "End with a clear call-to-action. We’ll open a small modal where folks can subscribe " +
            "to the full PDF—fully accessible, with validation and a password eye toggle.",
        hue: 330,
    },
];

/* Helpers */
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const emailOk = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s).trim());
const pwdOk = (s) => /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(s); // ≥8, 1 letter, 1 digit

export default function ScrollytellingSteps() {
    /* Modal + form state */
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwdShow, setPwdShow] = useState(false);
    const [errors, setErrors] = useState({});
    const firstFieldRef = useRef(null);

    /* Active step calculation via viewport enter/leave */
    const [active, setActive] = useState(0);
    const stepRefs = useRef([]);
    stepRefs.current = [];

    const registerStepRef = (el) => {
        if (el && !stepRefs.current.includes(el)) stepRefs.current.push(el);
    };

    /* Sticky scroll progress (for top bar) */
    const scrollRootRef = useRef(null);
    const { scrollYProgress } = useScroll({
        container: scrollRootRef,
    });
    const progressX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    /* When modal opens, send focus to the email field */
    useEffect(() => {
        if (!showModal) return;
        const id = requestAnimationFrame(() => {
            firstFieldRef.current?.focus();
        });
        return () => cancelAnimationFrame(id);
    }, [showModal]);

    /* Intersection Observers to keep `active` in sync with the viewport */
    useEffect(() => {
        const root = scrollRootRef.current || undefined;
        const options = { root, rootMargin: "0px 0px -55% 0px", threshold: 0.1 };
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    const idx = stepRefs.current.findIndex((n) => n === e.target);
                    if (idx !== -1) setActive((a) => (idx > a ? idx : idx)); // set to idx
                }
            });
        }, options);

        stepRefs.current.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    /* Derived visual layer from active step */
    const visual = useMemo(() => STEPS[clamp(active, 0, STEPS.length - 1)], [active]);

    /* Modal handlers */
    const closeModal = () => setShowModal(false);
    const submitForm = (e) => {
        e.preventDefault();
        const next = {};
        if (!emailOk(email)) next.email = "Please enter a valid email (e.g., name@domain.com).";
        if (!pwdOk(pwd)) next.pwd = "Use at least 8 characters with a letter and a number.";
        setErrors(next);
        if (Object.keys(next).length === 0) {
            // Simulate success: close and clear
            setShowModal(false);
            setTimeout(() => {
                setEmail(""); setPwd("");
            }, 200);
        }
    };

    /* Keyboard close (Esc) when modal open */
    useEffect(() => {
        if (!showModal) return;
        const onKey = (e) => { if (e.key === "Escape") setShowModal(false); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [showModal]);

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Scrollytelling Steps</h1>
                        <p className="muted">Sticky visual + scroll-triggered copy. Dots, progress bar, smooth crossfades.</p>
                    </div>
                    <div className="actions">
                        <button className="btn ghost" onClick={() => setShowModal(true)} title="Get the PDF">
                            Get the PDF
                        </button>
                    </div>
                </Styled.Header>

                {/* Reading progress bar */}
                <Styled.Progress>
                    <motion.div className="bar" style={{ width: progressX }} />
                </Styled.Progress>

                <Styled.Stage>
                    {/* Two-column scrollytelling shell */}
                    <div className="shell" ref={scrollRootRef}>
                        {/* Left: steps scroll */}
                        <div className="stepsCol">
                            {STEPS.map((s, i) => (
                                <motion.section
                                    key={s.id}
                                    ref={registerStepRef}
                                    className="step"
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ amount: 0.6, margin: "0px 0px -10% 0px", once: false }}
                                    transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <header className="sHead">
                                        <span className="kicker">{s.kicker}</span>
                                        <h2>{s.title}</h2>
                                    </header>
                                    <p className="body">{s.body}</p>
                                </motion.section>
                            ))}

                            <div className="cta">
                                <button className="btn primary" onClick={() => setShowModal(true)} title="Open modal">
                                    Download full PDF
                                </button>
                            </div>
                        </div>

                        {/* Right: sticky visual */}
                        <div className="visualCol">
                            <div className="stickyBox">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={visual.id}
                                        className="visual"
                                        initial={{ opacity: 0, scale: 0.96 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                        style={{
                                            // dynamic theme tint per step
                                            ["--v-hue"]: visual.hue,
                                        }}
                                    >
                                        {/* sub-layers for parallax feel */}
                                        <motion.div
                                            className="layer back"
                                            initial={{ x: 24, opacity: 0.7 }}
                                            animate={{ x: 0, opacity: 0.9 }}
                                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                        />
                                        <motion.div
                                            className="layer mid"
                                            initial={{ x: -18, opacity: 0.85 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                        />
                                        <motion.div
                                            className="layer front"
                                            initial={{ y: 18, opacity: 0.8 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                        />

                                        <div className="label">
                                            <span className="dot" />
                                            <b>{visual.title}</b>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Dots nav */}
                            <div className="dotsNav" aria-hidden="true">
                                {STEPS.map((_, i) => (
                                    <motion.button
                                        key={i}
                                        className={`dot ${i === active ? "active" : ""}`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            const target = stepRefs.current[i];
                                            target?.scrollIntoView({ block: "center", behavior: "smooth" });
                                        }}
                                        title={`Go to step ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </Styled.Stage>

                {/* Modal (Subscribe / Download) */}
                <AnimatePresence>
                    {showModal && (
                        <Styled.ModalOverlay
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={(e) => {
                                if (e.target === e.currentTarget) setShowModal(false);
                            }}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-title"
                        >
                            <motion.div
                                className="modal"
                                initial={{ y: 24, scale: 0.98, opacity: 0 }}
                                animate={{ y: 0, scale: 1, opacity: 1 }}
                                exit={{ y: 12, scale: 0.98, opacity: 0 }}
                                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="mHead">
                                    <h3 id="modal-title">Get the PDF</h3>
                                </div>
                                <div className="mBody">
                                    <p className="muted">
                                        Pop in your email and a password to create a lightweight account.
                                    </p>

                                    <form
                                        className="form"
                                        onSubmit={submitForm}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <label className="field">
                                            <span>Email</span>
                                            <input
                                                ref={firstFieldRef}
                                                type="email"
                                                inputMode="email"
                                                placeholder="you@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                aria-invalid={!!errors.email}
                                                aria-describedby={errors.email ? "err-email" : undefined}
                                                required
                                            />
                                            {errors.email && <em id="err-email" className="error">{errors.email}</em>}
                                        </label>

                                        <label className="field">
                                            <span>Password</span>
                                            <div className="pwdWrap">
                                                <input
                                                    type={pwdShow ? "text" : "password"}
                                                    placeholder="At least 8 characters"
                                                    value={pwd}
                                                    onChange={(e) => setPwd(e.target.value)}
                                                    aria-invalid={!!errors.pwd}
                                                    aria-describedby={errors.pwd ? "err-pwd" : "pwd-help"}
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    className="eye"
                                                    aria-pressed={pwdShow}
                                                    aria-label={pwdShow ? "Hide password" : "Show password"}
                                                    onClick={() => setPwdShow((v) => !v)}
                                                >
                                                    {/* inline eye icon */}
                                                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            fill="currentColor"
                                                            d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 11a4 4 0 110-8 4 4 0 010 8z"
                                                        />
                                                        {pwdShow ? (
                                                            <path fill="currentColor" d="M2 2l20 20-1.4 1.4L.6 3.4 2 2z" />
                                                        ) : null}
                                                    </svg>
                                                </button>
                                            </div>
                                            <small id="pwd-help" className="hint">
                                                At least 8 chars, include a letter and a number.
                                            </small>
                                            {errors.pwd && <em id="err-pwd" className="error">{errors.pwd}</em>}
                                        </label>

                                        <div className="actions">
                                            <button type="button" className="btn ghost" onClick={closeModal}>Cancel</button>
                                            <button type="submit" className="btn primary">Get PDF</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="mFoot">
                                    <button className="closeBtn" onClick={closeModal}>Close</button>
                                </div>
                            </motion.div>
                        </Styled.ModalOverlay>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
