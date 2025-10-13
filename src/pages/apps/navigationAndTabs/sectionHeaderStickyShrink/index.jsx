import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Styled } from "./styled";

/** Simple content seeds (≥5 sections for a good scroll feel) */
const SECTIONS = [
    { id: "overview", title: "Overview" },
    { id: "design", title: "Design Notes" },
    { id: "behavior", title: "Behavior & UX" },
    { id: "a11y", title: "Accessibility" },
    { id: "perf", title: "Performance" },
    { id: "impl", title: "Implementation Tips" },
];

/** Utility: focus an element safely */
function focusEl(el) {
    try { el?.focus(); } catch { }
}

export default function SectionHeaderStickyShrink() {
    // container that scrolls
    const scrollerRef = useRef(null);
    const { scrollYProgress } = useScroll({ container: scrollerRef });

    // spring the progress for a slick feel (less jittery while dragging trackpads)
    const p = useSpring(scrollYProgress, { stiffness: 240, damping: 28, mass: 0.9 });

    // Sticky header dynamics (values tuned for “premium” subtlety)
    const headerH = useTransform(p, [0, 0.22], [96, 56]);         // height px
    const padX = useTransform(p, [0, 0.22], [20, 12]);         // horizontal padding
    const logoScale = useTransform(p, [0, 0.22], [1.0, 0.86]);      // logo dot scale
    const titleY = useTransform(p, [0, 0.22], [0, -2]);          // slight lift
    const titleSize = useTransform(p, [0, 0.22], [22, 18]);         // clamp title size
    const blurAmt = useTransform(p, [0, 0.22], [0, 8]);           // backdrop blur
    const shadowA = useTransform(p, [0, 0.22], [0.06, 0.18]);     // shadow alpha

    const shadowCSS = useTransform(shadowA, a => `0 10px 30px hsl(0 0% 0% / ${a})`);
    const blurCSS = useTransform(blurAmt, b => `saturate(1.1) blur(${b}px)`);


    // track active section with IntersectionObserver inside the scroller
    const [activeId, setActiveId] = useState(SECTIONS[0].id);
    const headingsRef = useRef({});
    useEffect(() => {
        const root = scrollerRef.current;
        if (!root) return;
        const io = new IntersectionObserver(
            (entries) => {
                // choose the most visible heading (largest intersection ratio)
                const vis = entries
                    .filter(e => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                if (vis[0]) setActiveId(vis[0].target.id);
            },
            { root, threshold: [0.25, 0.5, 0.75], rootMargin: "-10% 0px -70% 0px" }
        );
        SECTIONS.forEach(s => {
            const el = headingsRef.current[s.id];
            if (el) io.observe(el);
        });
        return () => io.disconnect();
    }, []);

    // tabs keyboard nav
    const tabRefs = useRef({});
    const onKeyTabs = (e) => {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        e.preventDefault();
        const idx = SECTIONS.findIndex(s => s.id === activeId);
        const next = e.key === "ArrowRight"
            ? Math.min(SECTIONS.length - 1, idx + 1)
            : Math.max(0, idx - 1);
        const nextId = SECTIONS[next].id;
        setActiveId(nextId);
        focusEl(tabRefs.current[nextId]);
        // also scroll to the section
        scrollToAnchor(nextId);
    };

    // smooth in-container scroll
    const scrollToAnchor = (id) => {
        const root = scrollerRef.current;
        const el = headingsRef.current[id];
        if (!root || !el) return;
        const top = el.offsetTop - 8; // tiny top offset
        root.scrollTo({ top, behavior: "smooth" });
    };

    // About modal
    const [aboutOpen, setAboutOpen] = useState(false);
    const closeBtnRef = useRef(null);
    useEffect(() => {
        if (aboutOpen) {
            const id1 = requestAnimationFrame(() => focusEl(closeBtnRef.current));
            return () => cancelAnimationFrame(id1);
        }
    }, [aboutOpen]);

    // initial mount guard (prevents one-frame weirdness with sticky shadows in some browsers)
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        let r1 = requestAnimationFrame(() => {
            let r2 = requestAnimationFrame(() => setMounted(true));
            (setMounted)._r2 = r2;
        });
        return () => {
            cancelAnimationFrame(r1);
            cancelAnimationFrame((setMounted)._r2 || 0);
        };
    }, []);

    return (
        // Showcase animations even if OS has reduced motion (demo context)
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Section Header — Sticky Shrink</h1>
                        <p className="muted">
                            Large title collapses into a compact bar as you scroll the section. Tabs get an animated underline.
                        </p>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <div className="scroller" ref={scrollerRef} aria-label="Demo scroller with sticky header">
                        {/* Sticky header (within scroller) */}
                        <motion.div
                            className="sticky"
                            style={{
                                height: headerH,
                                paddingInline: padX,
                                boxShadow: shadowCSS,          // ← was shadowA.to(...)
                                WebkitBackdropFilter: blurCSS, // ← was blurAmt.to(...)
                                backdropFilter: blurCSS,
                            }}
                            data-mounted={mounted}
                        >

                            <div className="left">
                                <motion.span className="logoDot" style={{ scale: logoScale }} aria-hidden="true" />
                                <motion.h2
                                    className="title"
                                    style={{ y: titleY, fontSize: titleSize }}
                                >
                                    Motion Patterns
                                </motion.h2>
                            </div>

                            <nav className="tabs" role="tablist" aria-label="Sections" onKeyDown={onKeyTabs}>
                                {SECTIONS.map((s) => {
                                    const isActive = activeId === s.id;
                                    return (
                                        <button
                                            key={s.id}
                                            role="tab"
                                            aria-selected={isActive}
                                            tabIndex={isActive ? 0 : -1}
                                            ref={(el) => (tabRefs.current[s.id] = el)}
                                            className={`tab ${isActive ? "active" : ""}`}
                                            onClick={() => {
                                                setActiveId(s.id);
                                                scrollToAnchor(s.id);
                                            }}
                                            title={s.title}
                                        >
                                            <span>{s.title}</span>
                                            {/* underline */}
                                            {isActive && (
                                                <motion.div
                                                    className="underline"
                                                    layoutId="tab-underline"
                                                    transition={{ type: "spring", stiffness: 600, damping: 34, mass: 0.6 }}
                                                />
                                            )}
                                        </button>
                                    );
                                })}
                            </nav>

                            <div className="right">
                                <motion.button
                                    whileTap={{ scale: 0.96 }}
                                    className="aboutBtn"
                                    onClick={() => setAboutOpen(true)}
                                    aria-haspopup="dialog"
                                    aria-controls="about-modal"
                                    title="About this pattern"
                                >
                                    About
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Content sections */}
                        <div className="content">
                            {SECTIONS.map((s, i) => (
                                <section key={s.id} className="block">
                                    <h3
                                        id={s.id}
                                        ref={(el) => (headingsRef.current[s.id] = el)}
                                        className="blockTitle"
                                    >
                                        {s.title}
                                    </h3>
                                    <p>
                                        This sticky-shrink pattern mirrors iOS large titles: generous at the top for scanning,
                                        compressing to a compact bar once you commit to the content. Keep motion minimal: values
                                        are tiny and spring-tuned so it feels deliberate, not floaty.
                                    </p>
                                    <ul>
                                        <li>Transforms only (height via MotionValue on the wrapper; no layout thrash).</li>
                                        <li>Blur ramps in as the header shrinks to separate it from scrollable content.</li>
                                        <li>Tabs use <code>layoutId</code> underline for delightful, consistent feedback.</li>
                                    </ul>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel augue a mi interdum
                                        luctus. Mauris vehicula lectus sed nibh egestas, at facilisis orci facilisis. Nulla
                                        facilisi. Sed nam erat at dui tincidunt euismod. Integer pretium, erat a finibus sodales,
                                        turpis lectus porttitor justo, id rhoncus velit arcu et lectus.
                                    </p>
                                    {i === 2 && (
                                        <div className="callout">
                                            <b>Tip:</b> keep the header background simple; avoid heavy images or shadows.
                                        </div>
                                    )}
                                </section>
                            ))}
                        </div>
                    </div>
                </Styled.Stage>

                {/* About Modal (self-made) */}
                <AnimatePresence>
                    {aboutOpen && (
                        <motion.div
                            id="about-modal"
                            role="dialog"
                            aria-modal="true"
                            aria-label="About sticky header pattern"
                            className="modalWrap"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="modal"
                                initial={{ y: 12, opacity: 0, scale: 0.98 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ y: 8, opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <header>
                                    <h4>About this pattern</h4>
                                </header>
                                <div className="body">
                                    <p>
                                        Use sticky-shrink headers when the content scrolls within a self-contained region
                                        (cards, modals, side panels). The large title helps orientation; the compact state saves space.
                                    </p>
                                    <ul>
                                        <li>Animate tiny deltas (scale &lt; 1.0, translate &lt; 4px).</li>
                                        <li>Prefer springs; they de-noise trackpad scroll micro-deltas.</li>
                                        <li>Respect reduced motion in production; demo forces motion for visibility.</li>
                                    </ul>
                                </div>
                                <footer>
                                    <button
                                        ref={closeBtnRef}
                                        className="closeBtn"
                                        onClick={() => setAboutOpen(false)}
                                    >
                                        Close
                                    </button>
                                </footer>
                                <button
                                    className="xBtn"
                                    aria-label="Close"
                                    title="Close"
                                    onClick={() => setAboutOpen(false)}
                                >
                                    ×
                                </button>
                            </motion.div>

                            {/* backdrop click closes */}
                            <button className="backdrop" onClick={() => setAboutOpen(false)} aria-hidden="true" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
