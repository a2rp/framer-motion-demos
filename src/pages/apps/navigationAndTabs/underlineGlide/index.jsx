import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";

/** Demo tabs (≥5 for a meaningful glide) */
const BASE_TABS = [
    { id: "overview", label: "Overview" },
    { id: "design", label: "Design" },
    { id: "api", label: "API" },
    { id: "examples", label: "Examples" },
    { id: "changelog", label: "Changelog" },
    { id: "about", label: "About" },
];

/** Small content map */
const CONTENT = {
    overview: {
        title: "Underline Glide",
        body:
            "A shared layout underline that glides between tabs. The trick is a single " +
            "motion.div with a stable layoutId rendered under the active tab.",
        bullets: ["layoutId for underline", "Keyboard accessible", "Scrollable tab bar"],
    },
    design: {
        title: "Design Notes",
        body:
            "Use short labels, keep the underline thin (2–3px), and animate only transforms/opacity.",
        bullets: ["Underline height: 2–3px", "Ease: [0.22,1,0.36,1]", "Short durations"],
    },
    api: {
        title: "API",
        body:
            "You usually just need value, onChange, and an array of { id, label }. Here we also expose keyboard handlers.",
        bullets: ["value, onChange", "Arrow keys, Home/End", "aria-* roles"],
    },
    examples: {
        title: "Examples",
        body:
            "Place this on product pages, dashboards, or settings. The shared underline makes navigation feel snappy.",
        bullets: ["Dashboards", "Settings", "Docs navigation"],
    },
    changelog: {
        title: "Changelog",
        body:
            "v1: Shared underline with layoutId. v1.1: Added modal, focus management, and scroll-into-view for the active tab.",
        bullets: ["v1.0 core", "v1.1 polish", "v1.2 TBD"],
    },
    about: {
        title: "About",
        body:
            "This demo is theme-aware and uses your CSS tokens. It avoids first-paint flicker and respects reduced motion if you want it to.",
        bullets: ["Theme tokens", "No first-paint jank", "A11y-first"],
    },
};

/** Focus utilities */
function focusEl(el) {
    try { el?.focus({ preventScroll: true }); } catch { }
}

export default function UnderlineGlide() {
    const [tabs] = useState(BASE_TABS);
    const [active, setActive] = useState(tabs[0].id);
    const [mounted, setMounted] = useState(false); // avoid first-paint quirks
    const [showModal, setShowModal] = useState(false);

    const listRef = useRef(null);
    const btnRefs = useRef({}); // map id -> button

    // mount after RAF to prevent underline flicker in some browsers
    useEffect(() => {
        const r1 = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(r1);
    }, []);

    // keep active tab scrolled into view
    useEffect(() => {
        const el = btnRefs.current[active];
        el?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    }, [active]);

    const idx = useMemo(() => tabs.findIndex(t => t.id === active), [tabs, active]);

    const onKeyDown = (e) => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
        e.preventDefault();
        const last = tabs.length - 1;

        if (e.key === "Home") {
            setActive(tabs[0].id);
            focusEl(btnRefs.current[tabs[0].id]);
            return;
        }
        if (e.key === "End") {
            setActive(tabs[last].id);
            focusEl(btnRefs.current[tabs[last].id]);
            return;
        }
        const next = e.key === "ArrowRight" ? Math.min(idx + 1, last) : Math.max(idx - 1, 0);
        setActive(tabs[next].id);
        focusEl(btnRefs.current[tabs[next].id]);
    };

    const current = CONTENT[active];

    return (
        // Demo forces animations visible; remove reducedMotion="never" to respect OS
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Underline Glide</h1>
                        <p className="muted">Shared layout underline that smoothly glides between tabs.</p>
                    </div>

                    <div className="actions">
                        <button className="btn ghost" onClick={() => setShowModal(true)}>Shortcuts & Tips</button>
                    </div>
                </Styled.Header>

                <Styled.TabsCard>
                    {/* scrollable tab list */}
                    <div className="scrollMask left" aria-hidden />
                    <div className="scrollMask right" aria-hidden />
                    <div
                        className="tablist"
                        ref={listRef}
                        role="tablist"
                        aria-label="Underline Glide tabs"
                        onKeyDown={onKeyDown}
                    >
                        {tabs.map((t) => {
                            const isActive = t.id === active;
                            return (
                                <button
                                    key={t.id}
                                    ref={(el) => (btnRefs.current[t.id] = el)}
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-controls={`panel-${t.id}`}
                                    id={`tab-${t.id}`}
                                    className={`tab ${isActive ? "active" : ""}`}
                                    onClick={() => setActive(t.id)}
                                >
                                    <span className="label">{t.label}</span>

                                    {/* Shared underline lives INSIDE the active tab for perfect sizing */}
                                    <AnimatePresence initial={false}>
                                        {mounted && isActive && (
                                            <motion.span
                                                layoutId="underline"
                                                className="underline"
                                                transition={{ type: "spring", stiffness: 500, damping: 40 }}
                                            />
                                        )}
                                    </AnimatePresence>
                                </button>
                            );
                        })}
                    </div>
                </Styled.TabsCard>

                {/* Panel area */}
                <Styled.PanelArea>
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.section
                            key={active}
                            id={`panel-${active}`}
                            role="tabpanel"
                            aria-labelledby={`tab-${active}`}
                            className="panel"
                            initial={{ y: 8, opacity: 0.75 }}
                            animate={{ y: 0, opacity: 1, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
                            exit={{ y: -8, opacity: 0, transition: { duration: 0.18, ease: "easeOut" } }}
                        >
                            <header className="pHead">
                                <span className="kicker">Section</span>
                                <h2>{current.title}</h2>
                            </header>
                            <p className="body">{current.body}</p>
                            <ul className="bullets">
                                {current.bullets.map((b, i) => <li key={i}>{b}</li>)}
                            </ul>
                        </motion.section>
                    </AnimatePresence>
                </Styled.PanelArea>

                {/* Self-made modal (tips) */}
                <AnimatePresence>
                    {showModal && (
                        <>
                            <motion.div
                                className="modalBackdrop"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.18 } }}
                                exit={{ opacity: 0, transition: { duration: 0.16 } }}
                                onClick={() => setShowModal(false)}
                                aria-hidden
                            />
                            <motion.div
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="tips-title"
                                className="modal"
                                initial={{ y: 18, opacity: 0.8, scale: 0.98 }}
                                animate={{ y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 420, damping: 34 } }}
                                exit={{ y: 6, opacity: 0, scale: 0.985, transition: { duration: 0.16 } }}
                            >
                                {/* 👇 single centered card */}
                                <div className="modalCard">
                                    <header className="mHead">
                                        <h3 id="tips-title">Shortcuts & Tips</h3>
                                    </header>
                                    <div className="mBody">
                                        <ul>
                                            <li>Use <kbd>←</kbd>/<kbd>→</kbd> to change tabs.</li>
                                            <li><kbd>Home</kbd>/<kbd>End</kbd> to jump to first/last.</li>
                                            <li>The underline uses a shared <code>layoutId</code> for a buttery glide.</li>
                                        </ul>
                                    </div>
                                    <footer className="mFoot">
                                        <button className="btn" onClick={() => setShowModal(false)}>Got it</button>
                                    </footer>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

            </Styled.Wrapper>
        </MotionConfig>
    );
}
