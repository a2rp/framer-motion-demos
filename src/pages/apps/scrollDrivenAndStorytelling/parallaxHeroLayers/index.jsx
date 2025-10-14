import React, { useEffect, useMemo, useRef, useState, useLayoutEffect } from "react";

import {
    AnimatePresence,
    MotionConfig,
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { Styled } from "./styled";

/* ---------- helpers ---------- */

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const strongPwdRe = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/; // 8+ chars, 1+ letter & number

function EyeOpen(props) {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden focusable="false" {...props}>
            <path fill="currentColor" d="M12 5c5.5 0 9.5 5 10 6-.5 1-4.5 6-10 6S2.5 12 2 11c.5-1 4.5-6 10-6zm0 2C8 7 4.9 10 4 11c.9 1 4 4 8 4s7.1-3 8-4c-.9-1-4-4-8-4zm0 2.25A3.75 3.75 0 1 1 8.25 13 3.75 3.75 0 0 1 12 9.25m0 1.5A2.25 2.25 0 1 0 14.25 13 2.25 2.25 0 0 0 12 10.75z" />
        </svg>
    );
}
function EyeClosed(props) {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden focusable="false" {...props}>
            <path fill="currentColor" d="M21.2 21.2 2.8 2.8l1.4-1.4 18.4 18.4-1.4 1.4zM9.5 7.78l1.03 1.04A3.75 3.75 0 0 1 15.18 12l1.08 1.08A5.25 5.25 0 0 0 12 6.75c-.88 0-1.7.2-2.5.53zM4.27 6.55l1.2 1.2C3.8 9.1 2.6 10.5 2 11c.5 1 4.5 6 10 6 1.29 0 2.49-.25 3.6-.64l1.19 1.19c-1.49.62-3.07.95-4.79.95C6.5 18.5 2.5 13.5 2 12.5c.3-.64 1.76-2.44 3.78-3.95l-1.5-2z" />
        </svg>
    );
}

/* ---------- component ---------- */

export default function ParallaxHeroLayers() {
    // ✅ Hydrated ref for your app’s scroll container ([data-scroll-root])
    const scrollContainerRef = useRef(null);
    const [hasContainer, setHasContainer] = useState(false);
    useLayoutEffect(() => {
        const el = document.querySelector("[data-scroll-root]");
        if (el) {
            scrollContainerRef.current = el;   // hydrate ref BEFORE useScroll reads it
            setHasContainer(true);
        }
    }, []);

    // Overall page progress (for the reading bar & FAB)
    // Pass container only after it's hydrated; otherwise default to window (no error)
    const { scrollYProgress: pageProgressRaw } = useScroll({
        container: hasContainer ? scrollContainerRef : undefined,
    });

    const pageProgress = useSpring(pageProgressRaw, { stiffness: 180, damping: 28, mass: 0.7 });

    // Parallax tied to the hero section specifically
    const heroRef = useRef(null);
    const { scrollYProgress: heroProgRaw } = useScroll({
        container: hasContainer ? scrollContainerRef : undefined,
        target: heroRef,
        // Start when hero hits top, end when hero fully scrolled past the top
        offset: ["start start", "end start"],
    });
    const heroProgress = useSpring(heroProgRaw, { stiffness: 200, damping: 30, mass: 0.7 });

    // Parallax transforms (subtle but visible)
    const yBack = useTransform(heroProgress, [0, 1], [0, -200]);  // far background
    const yMid = useTransform(heroProgress, [0, 1], [0, -120]);  // mid layer
    const yFore = useTransform(heroProgress, [0, 1], [0, -60]);   // foreground
    const rotateFore = useTransform(heroProgress, [0, 1], [0, 8]);

    // Back-to-top visibility via overall page progress
    const fabOpacity = useTransform(pageProgress, [0.05, 0.12], [0, 1]);
    const fabScale = useTransform(pageProgress, [0.05, 0.12], [0.9, 1]);

    // Modal form state
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [touched, setTouched] = useState({ name: false, email: false, password: false });
    const [showPwd, setShowPwd] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [done, setDone] = useState(false);

    const errs = useMemo(() => {
        const e = { name: "", email: "", password: "" };
        if (touched.name && form.name.trim().length < 2) e.name = "Name must be at least 2 characters.";
        if (touched.email && !emailRe.test(form.email)) e.email = "Enter a valid email address.";
        if (touched.password && !strongPwdRe.test(form.password)) e.password = "Password must be 8+ chars with a letter and a number.";
        return e;
    }, [form, touched]);
    const isValid =
        form.name.trim().length >= 2 &&
        emailRe.test(form.email) &&
        strongPwdRe.test(form.password);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);
    useEffect(() => {
        if (!open) {
            setForm({ name: "", email: "", password: "" });
            setTouched({ name: false, email: false, password: false });
            setSubmitting(false);
            setDone(false);
            setShowPwd(false);
        }
    }, [open]);

    const onField = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
    const onBlur = (k) => () => setTouched((t) => ({ ...t, [k]: true }));
    const submit = (e) => {
        e.preventDefault();
        setTouched({ name: true, email: true, password: true });
        if (!isValid || submitting) return;
        setSubmitting(true);
        setTimeout(() => {
            setDone(true);
            setSubmitting(false);
        }, 800);
    };

    const gotoFeatures = () =>
        document.querySelector("#features")?.scrollIntoView({ behavior: "smooth", block: "start" });

    return (
        <MotionConfig>
            <Styled.Wrapper>
                {/* Reading progress bar (sticky in scroll root) */}
                <Styled.Progress>
                    <motion.div className="bar" style={{ scaleX: pageProgress }} />
                </Styled.Progress>

                {/* HERO (parallax target) */}
                <Styled.Hero ref={heroRef}>
                    {/* Parallax layers */}
                    <motion.div className="layer back" style={{ y: yBack }} aria-hidden>
                        <div className="grad grad-1" />
                        <div className="grad grad-2" />
                    </motion.div>

                    <motion.div className="layer mid" style={{ y: yMid }} aria-hidden>
                        <div className="blobs">
                            <span className="blob b1" />
                            <span className="blob b2" />
                            <span className="blob b3" />
                        </div>
                    </motion.div>

                    <motion.div className="layer fore" style={{ y: yFore, rotate: rotateFore }} aria-hidden>
                        <div className="rings">
                            <span className="ring r1" />
                            <span className="ring r2" />
                        </div>
                    </motion.div>

                    {/* Hero content */}
                    <Styled.HeroContent>
                        <motion.h1
                            initial={{ y: 18, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Parallax Hero Layers
                        </motion.h1>
                        <motion.p
                            className="kicker"
                            initial={{ y: 18, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Foreground glides, background drifts — silky, GPU-friendly, and accessible.
                        </motion.p>

                        <motion.div
                            className="ctas"
                            initial={{ y: 18, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <button className="btn primary" onClick={onOpen}>Get early access</button>
                            <button className="btn ghost" onClick={gotoFeatures}>Learn more</button>
                        </motion.div>
                    </Styled.HeroContent>
                </Styled.Hero>

                {/* CONTENT */}
                <Styled.Section id="features">
                    <header className="sHead">
                        <h2>Why this pattern works</h2>
                        <p className="muted">Depth cues, subtle motion, and clean layering make content feel premium without distraction.</p>
                    </header>

                    <div className="grid">
                        {[
                            ["Crisp & Performant", "Only transforms & opacity, spring-tuned to avoid layout thrash."],
                            ["Reduced Motion-friendly", "Respects OS preference; content still shines without motion."],
                            ["Composable", "Layers are plain divs — swap colors, shapes, or add images."],
                            ["Tiny API Surface", "Just useScroll + useTransform + a couple of springs."],
                            ["No Jank", "GPU-friendly, no filters in the scroll path."],
                            ["Accessible", "Readable contrast, large hit targets, semantic HTML."],
                        ].map(([title, body], i) => (
                            <motion.article
                                key={i}
                                className="card"
                                initial={{ y: 16, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.03 }}
                            >
                                <h3>{title}</h3>
                                <p>{body}</p>
                            </motion.article>
                        ))}
                    </div>
                </Styled.Section>

                <Styled.Section>
                    <header className="sHead">
                        <h2>Implementation tips</h2>
                        <p className="muted">Parallax ratios: back −200px, mid −120px, fore −60px across hero scroll.</p>
                    </header>
                    <ul className="bullets">
                        <li>Bind <code>useScroll</code> to your scroll container (<code>[data-scroll-root]</code>).</li>
                        <li>Use <code>target: heroRef</code> with offsets to scope parallax to the hero.</li>
                        <li>Keep durations short; premium motion is subtle.</li>
                        <li>Avoid animating heavy filters during scroll; they’re expensive.</li>
                    </ul>
                </Styled.Section>

                {/* Back to top FAB */}
                <motion.button
                    className="fabTop"

                    onClick={() =>
                    (scrollContainerRef.current
                        ? scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" })
                        : window.scrollTo({ top: 0, behavior: "smooth" }))
                    }

                    style={{ opacity: fabOpacity, scale: fabScale }}
                    title="Back to top"
                    aria-label="Back to top"
                >
                    ↑
                </motion.button>

                {/* Modal */}
                <AnimatePresence>
                    {open && (
                        <Styled.ModalOverlay
                            as={motion.div}
                            key="modal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            aria-modal="true"
                            role="dialog"
                            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
                        >
                            <motion.div
                                className="modal"
                                initial={{ y: 24, opacity: 0, scale: 0.98 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ y: 24, opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="mHead">
                                    <h3>Early access</h3>
                                    <p className="muted">Join the preview list. No spam. We’ll email you a private link.</p>
                                </div>

                                <div className="mBody">
                                    <AnimatePresence mode="wait" initial={false}>
                                        {!done ? (
                                            <motion.form
                                                key="form"
                                                onSubmit={submit}
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -8 }}
                                                className="form"
                                                noValidate
                                            >
                                                {/* Name */}
                                                <label className={`field ${errs.name ? "hasErr" : ""}`}>
                                                    <span>Name</span>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        autoComplete="name"
                                                        placeholder="Your name"
                                                        value={form.name}
                                                        onChange={onField("name")}
                                                        onBlur={onBlur("name")}
                                                        aria-invalid={!!errs.name}
                                                        aria-describedby={errs.name ? "err-name" : undefined}
                                                        required
                                                    />
                                                    {errs.name && <em id="err-name" className="err">{errs.name}</em>}
                                                </label>

                                                {/* Email */}
                                                <label className={`field ${errs.email ? "hasErr" : ""}`}>
                                                    <span>Email</span>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        autoComplete="email"
                                                        placeholder="you@example.com"
                                                        value={form.email}
                                                        onChange={onField("email")}
                                                        onBlur={onBlur("email")}
                                                        aria-invalid={!!errs.email}
                                                        aria-describedby={errs.email ? "err-email" : undefined}
                                                        required
                                                    />
                                                    {errs.email && <em id="err-email" className="err">{errs.email}</em>}
                                                </label>

                                                {/* Password with eye toggle */}
                                                <label className={`field ${errs.password ? "hasErr" : ""}`}>
                                                    <span>Password</span>
                                                    <div className="pwdWrap">
                                                        <input
                                                            type={showPwd ? "text" : "password"}
                                                            name="password"
                                                            autoComplete="new-password"
                                                            placeholder="Create a strong password"
                                                            value={form.password}
                                                            onChange={onField("password")}
                                                            onBlur={onBlur("password")}
                                                            aria-invalid={!!errs.password}
                                                            aria-describedby={errs.password ? "err-password" : undefined}
                                                            required
                                                        />
                                                        <button
                                                            type="button"
                                                            className="eyeBtn"
                                                            onClick={() => setShowPwd((v) => !v)}
                                                            aria-label={showPwd ? "Hide password" : "Show password"}
                                                            title={showPwd ? "Hide password" : "Show password"}
                                                        >
                                                            {showPwd ? <EyeClosed /> : <EyeOpen />}
                                                        </button>
                                                    </div>
                                                    {errs.password && <em id="err-password" className="err">{errs.password}</em>}
                                                    <p className="hint muted">Use at least 8 characters, including a letter and a number.</p>
                                                </label>

                                                <div className="actions">
                                                    <button type="button" className="btn ghost" onClick={onClose}>Cancel</button>
                                                    <button type="submit" className="btn primary" disabled={!isValid || submitting}>
                                                        {submitting ? "Submitting…" : "Join waitlist"}
                                                    </button>
                                                </div>
                                            </motion.form>
                                        ) : (
                                            <motion.div
                                                key="done"
                                                className="success"
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -8 }}
                                            >
                                                <div className="checkWrap" aria-hidden>
                                                    <motion.svg viewBox="0 0 120 120" className="check">
                                                        <motion.circle
                                                            cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="8" opacity="0.25"
                                                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.45 }}
                                                        />
                                                        <motion.path
                                                            d="M34 62 L54 78 L88 42"
                                                            fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"
                                                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.35, duration: 0.45, ease: "easeInOut" }}
                                                        />
                                                    </motion.svg>
                                                </div>
                                                <h4>You're in!</h4>
                                                <p className="muted">We’ll email you as soon as the preview opens.</p>
                                                <div className="actions">
                                                    <button className="btn primary" onClick={onClose}>Close</button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="mFoot">
                                    <button className="closeBtn" onClick={onClose}>Close</button>
                                </div>
                            </motion.div>
                        </Styled.ModalOverlay>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
