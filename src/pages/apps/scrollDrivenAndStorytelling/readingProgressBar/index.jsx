import { useEffect, useMemo, useRef, useState } from "react";
import {
    MotionConfig,
    AnimatePresence,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { Styled, ModalOverlay } from "./styled";

/* ---------- Content ---------- */
const SECTIONS = [
    {
        id: "intro",
        title: "Why reading progress bars work",
        body:
            "Progress indicators reduce uncertainty. They tell the reader how far they’ve come and how far they’ve yet to go. " +
            "Used sparingly, they increase completion rates without nagging or gimmicks.",
    },
    {
        id: "design",
        title: "Design principles",
        body:
            "Keep the bar thin, high-contrast, and free of text. Don’t hijack scroll. Avoid heavy shadows. " +
            "Prefer transform-based animations for performance. Respect reduced motion in production.",
    },
    {
        id: "impl",
        title: "Implementation notes",
        body:
            "Bind to the real scroll container-not the window-especially in SPA shells. Throttle work. " +
            "Use transform scaleX for the fill. For scrollytelling, combine section reveals with stagger.",
    },
    {
        id: "perf",
        title: "Performance & a11y",
        body:
            "Avoid expensive layout thrashing. Use passive listeners and MotionValue springs. " +
            "Ensure headings are navigable and the content order remains logical for screen readers.",
    },
    {
        id: "ux",
        title: "Time left & guidance",
        body:
            "A simple time-left indicator reduces abandonment. Estimate remaining time using a conservative baseline and current progress.",
    },
    {
        id: "wrap",
        title: "When not to use",
        body:
            "If your content is non-linear, heavily interactive, or paginated, a linear progress bar may mislead. " +
            "Don’t add decoration that suggests precision you don’t have.",
    },
];

/* Word counts for reading time */
function countWords(sections) {
    const text = sections.map(s => `${s.title} ${s.body}`).join(" ");
    return (text.match(/\S+/g) || []).length;
}
const WORDS = countWords(SECTIONS);
const WPM = 200;
const READING_MIN = Math.max(1, Math.ceil(WORDS / WPM));

/* Validators */
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isStrongPassword = (s) =>
    typeof s === "string" && s.length >= 8 && /[A-Za-z]/.test(s) && /\d/.test(s);

export default function ReadingProgressBar() {
    // find the SPA scroll container
    const scrollRootRef = useRef(null);
    useEffect(() => {
        scrollRootRef.current =
            document.querySelector("[data-scroll-root]") ||
            document.scrollingElement ||
            document.documentElement;
    }, []);

    /* Progress MotionValue (0..1) + spring */
    const raw = useMotionValue(0);
    const progress = useSpring(raw, { stiffness: 220, damping: 24, mass: 0.6 });
    const pct = useTransform(progress, v => Math.round(v * 100));
    const chipLeft = useTransform(progress, v => `${v * 100}%`);

    /* Section refs for ticks + active highlighting */
    const secRefs = useRef({});
    const [ticks, setTicks] = useState([]); // [{id, leftPct}]
    const [activeId, setActiveId] = useState(SECTIONS[0].id);

    // compute scroll progress + active section from the real container
    useEffect(() => {
        const root = scrollRootRef.current;
        if (!root) return;

        const compute = () => {
            const max = Math.max(1, root.scrollHeight - root.clientHeight);
            const p = Math.min(1, Math.max(0, root.scrollTop / max));
            raw.set(p);

            // active section: last section whose top <= viewportTop + 80
            let current = activeId;
            const viewportTop = root.scrollTop + 80;
            for (const s of SECTIONS) {
                const el = secRefs.current[s.id];
                if (!el) continue;
                const top = el.offsetTop; // relative to scroll container
                if (top <= viewportTop) current = s.id;
            }
            setActiveId(current);
        };

        const recomputeTicks = () => {
            const max = Math.max(1, root.scrollHeight - root.clientHeight);
            const list = SECTIONS.map((s) => {
                const el = secRefs.current[s.id];
                if (!el) return { id: s.id, leftPct: 0 };
                const left = Math.min(1, Math.max(0, el.offsetTop / max));
                return { id: s.id, leftPct: left * 100 };
            });
            setTicks(list);
        };

        // initial
        compute();
        recomputeTicks();

        const onScroll = () => compute();
        const onResize = () => {
            recomputeTicks();
            compute();
        };

        root.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize, { passive: true });
        const id = requestAnimationFrame(() => {
            recomputeTicks();
            compute();
        });

        return () => {
            cancelAnimationFrame(id);
            root.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /* Modal state + form */
    const [modalOpen, setModalOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [pwShow, setPwShow] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const canSubmit = useMemo(() => emailRe.test(email) && isStrongPassword(pw), [email, pw]);

    const openModal = () => {
        setModalOpen(true);
        setSubmitted(false);
        setErrors({});
    };
    const closeModal = () => setModalOpen(false);

    const onSubmit = (e) => {
        e.preventDefault();
        const errs = {};
        if (!emailRe.test(email)) errs.email = "Enter a valid email.";
        if (!isStrongPassword(pw)) errs.pw = "Password must be 8+ chars with letters and numbers.";
        setErrors(errs);
        if (Object.keys(errs).length === 0) {
            setSubmitted(true);
            setTimeout(() => setModalOpen(false), 900);
        }
    };

    /* derived “time left” */
    const timeLeft = useMemo(() => {
        const rem = Math.max(0, 1 - raw.get());
        const mins = Math.ceil(rem * READING_MIN);
        return mins;
    }, [raw]);

    /* Jump to section inside container */
    const jumpTo = (id) => {
        const root = scrollRootRef.current;
        const el = secRefs.current[id];
        if (!root || !el) return;
        root.scrollTo({ top: el.offsetTop - 16, behavior: "smooth" });
    };

    /* Back to top */
    const backToTop = () => {
        const root = scrollRootRef.current || window;
        root.scrollTo({ top: 0, behavior: "smooth" });
    };

    /* Section reveal variants */
    const sectionVar = {
        hidden: { y: 16, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                {/* Sticky top bar with progress, ticks, chip, and meta */}
                <Styled.TopBar>
                    <div className="topInner">
                        <div className="titles">
                            <h1>Reading Progress</h1>
                            <p className="muted">
                                ~{READING_MIN} min read • {WORDS} words • <span className="activeLabel">{SECTIONS.find(s => s.id === activeId)?.title}</span>
                            </p>
                        </div>

                        <div className="meta">
                            <div className="timeLeft" title="Time left (estimate)">
                                <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden focusable="false">
                                    <path fill="currentColor" d="M12 1a11 11 0 1011 11A11.014 11.014 0 0012 1zm1 11H7V11h5V5h1z" />
                                </svg>
                                <span>{timeLeft} min left</span>
                            </div>
                            <button className="btn ghost" onClick={openModal} title="Bookmark">
                                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M6 2h12a2 2 0 012 2v18l-8-4-8 4V4a2 2 0 012-2z" /></svg>
                                <span>Bookmark</span>
                            </button>
                        </div>
                    </div>

                    <div className="track" aria-hidden="true">
                        {/* ticks */}
                        {ticks.map(t => (
                            <span className={`tick ${t.id === activeId ? "is-active" : ""}`} key={t.id} style={{ left: `${t.leftPct}%` }} />
                        ))}
                        {/* progress fill */}
                        <motion.div className="bar" style={{ scaleX: progress }} />
                        {/* progress chip */}
                        <motion.div className="chip" style={{ left: chipLeft }}>
                            <motion.span key="pct" initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -6, opacity: 0 }}>
                                {/** pct is MotionValue<number> */}
                                <motion.b>{pct}</motion.b><em>%</em>
                            </motion.span>
                        </motion.div>
                    </div>
                </Styled.TopBar>

                {/* Main layout: article + right rail */}
                <Styled.Layout>
                    <Styled.Article>
                        {SECTIONS.map((s) => (
                            <motion.section
                                key={s.id}
                                ref={(n) => (secRefs.current[s.id] = n)}
                                className={`block ${activeId === s.id ? "is-active" : ""}`}
                                variants={sectionVar}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.35, margin: "0px 0px -60px 0px" }}
                            >
                                <header className="bHead">
                                    <h2 id={s.id}>{s.title}</h2>
                                </header>
                                <p>{s.body}</p>
                            </motion.section>
                        ))}

                        <Styled.Dividers>
                            <div className="rule" />
                            <div className="cta">
                                <motion.button className="btn primary" onClick={openModal} whileTap={{ scale: 0.98 }} whileHover={{ y: -1 }}>
                                    Save progress
                                </motion.button>
                            </div>
                        </Styled.Dividers>
                    </Styled.Article>

                    {/* Right side TOC rail */}
                    <Styled.Rail>
                        <div className="railInner">
                            <h3>On this page</h3>
                            <ul>
                                {SECTIONS.map((s) => (
                                    <li key={s.id}>
                                        <motion.button
                                            className={`railItem ${activeId === s.id ? "active" : ""}`}
                                            onClick={() => jumpTo(s.id)}
                                            whileHover={{ x: 2 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span className="dot" />
                                            <span className="label">{s.title}</span>
                                        </motion.button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Styled.Rail>
                </Styled.Layout>

                {/* Back-to-top FAB */}
                <AnimatePresence>
                    {/* show after 25% */}
                    <motion.button
                        key="fab"
                        className="fab"
                        onClick={backToTop}
                        initial={false}
                        animate={{ opacity: raw.get() > 0.25 ? 1 : 0, y: raw.get() > 0.25 ? 0 : 20, pointerEvents: raw.get() > 0.25 ? "auto" : "none" }}
                        transition={{ duration: 0.25 }}
                        title="Back to top"
                    >
                        ↑
                    </motion.button>
                </AnimatePresence>

                {/* Modal */}
                <AnimatePresence>
                    {modalOpen && (
                        <ModalOverlay
                            as={motion.div}
                            key="bookmark-modal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
                            aria-modal="true"
                            role="dialog"
                            aria-labelledby="bookmarkTitle"
                        >
                            <motion.div
                                className="modal"
                                initial={{ y: 20, opacity: 0, scale: 0.98 }}
                                animate={{ y: 0, opacity: 1, scale: 1, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } }}
                                exit={{ y: 8, opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="mHead"><h3 id="bookmarkTitle">Save your place</h3></div>
                                <div className="mBody">
                                    <p className="muted">We’ll remember where you left off on this device.</p>

                                    <form onSubmit={onSubmit} className="form">
                                        <label className="field">
                                            <span>Email</span>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="you@domain.com"
                                                autoComplete="email"
                                                required
                                                aria-invalid={!!errors.email}
                                            />
                                            {errors.email && <em className="error">{errors.email}</em>}
                                        </label>

                                        <label className="field">
                                            <span>Password</span>
                                            <div className="pwWrap">
                                                <input
                                                    type={pwShow ? "text" : "password"}
                                                    value={pw}
                                                    onChange={(e) => setPw(e.target.value)}
                                                    placeholder="8+ chars, letters & numbers"
                                                    autoComplete="current-password"
                                                    required
                                                    aria-invalid={!!errors.pw}
                                                />
                                                <button
                                                    type="button"
                                                    className="eye"
                                                    aria-label={pwShow ? "Hide password" : "Show password"}
                                                    onClick={() => setPwShow(v => !v)}
                                                    title={pwShow ? "Hide" : "Show"}
                                                >
                                                    {pwShow ? (
                                                        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                                                            <path fill="currentColor" d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zm10 3a3 3 0 100-6 3 3 0 000 6z" />
                                                        </svg>
                                                    ) : (
                                                        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                                                            <path fill="currentColor" d="M3.27 2L2 3.27l3.1 3.1A13.2 13.2 0 002 12s3.5 7 10 7a9.9 9.9 0 004.89-1.28l3.84 3.84L22 20.73 3.27 2zM12 17c-6.5 0-9-5-9-5a16.6 16.6 0 013.32-3.66l1.56 1.56A3.98 3.98 0 008 12a4 4 0 006.83 2.83l1.38 1.38A8.8 8.8 0 0112 17zm0-10c6.5 0 10 5 10 5a16.4 16.4 0 01-3.06 3.38l-2.2-2.2A3.98 3.98 0 0012 8a3.9 3.9 0 00-1.28.22l-1.6-1.6A10 10 0 0112 7z" />
                                                        </svg>
                                                    )}
                                                </button>
                                            </div>
                                            {errors.pw && <em className="error">{errors.pw}</em>}
                                        </label>

                                        <div className="actions">
                                            <button type="button" className="btn ghost" onClick={closeModal}>Cancel</button>
                                            <motion.button type="submit" className="btn primary" disabled={!canSubmit} whileTap={{ scale: 0.98 }}
                                                animate={canSubmit ? { opacity: 1 } : { opacity: 0.6 }}>
                                                Save
                                            </motion.button>
                                        </div>
                                    </form>

                                    <AnimatePresence initial={false}>
                                        {submitted && (
                                            <motion.div className="success" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.25 }} role="status">
                                                <span className="dot" />
                                                Bookmark saved!
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <div className="mFoot"><button className="closeBtn" onClick={closeModal}>Close</button></div>
                            </motion.div>
                        </ModalOverlay>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
