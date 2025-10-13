import { useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { makePages } from "../../_shared/pages";
import "./styled.css";

const TEMPLATES = [
    {
        key: "s1",
        title: "Overview",
        body:
            "A slide-over transition where the incoming page nudges the previous page into the background " +
            "with a subtle scale and lateral offset—great for multi-step flows and detail screens.",
        bullets: [
            "Incoming slides on X; previous becomes a stacked card",
            "Scale & offset are tiny—keeps it classy, not carnival",
            "Works great with forms, wizards, and detail side-panels",
        ],
    },
    {
        key: "s2",
        title: "Design Notes",
        body:
            "Use this for forward navigation (e.g., list → detail). It suggests continuity without fully replacing context.",
        bullets: ["Scale: ~0.96", "Offset: 16–28px", "Add a thin border/shadow"],
    },
    {
        key: "s3",
        title: "Implementation",
        body:
            "We snapshot the previous page as a ‘stack’ layer, then animate the new page in.",
        bullets: ["One active + one stacked layer", "AnimatePresence for active only", "Pointer-events off on stack"],
    },
];
/** 👇 Always returns at least 5 pages (we get 6 here). */
const PAGES = makePages(TEMPLATES, 5);

export default function SlideOverStack() {
    const [index, setIndex] = useState(0);
    const [dir, setDir] = useState(1); // 1 = forward, -1 = backward
    const prevIndexRef = useRef(null);

    const page = PAGES[index];
    const canPrev = index > 0;
    const canNext = index < PAGES.length - 1;

    const goPrev = () => {
        if (!canPrev) return;
        prevIndexRef.current = index;
        setDir(-1);
        setIndex((i) => i - 1);
    };
    const goNext = () => {
        if (!canNext) return;
        prevIndexRef.current = index;
        setDir(1);
        setIndex((i) => i + 1);
    };

    const stackedId = prevIndexRef.current;
    const stacked = typeof stackedId === "number" ? PAGES[stackedId] : null;

    const enterTransition = useMemo(
        () => ({ type: "spring", stiffness: 260, damping: 28, mass: 0.9 }),
        []
    );
    const stackTransition = useMemo(
        () => ({ duration: 0.26, ease: [0.22, 1, 0.36, 1] }),
        []
    );

    const enter = (d) => ({ x: d > 0 ? 64 : -64, opacity: 0.7, scale: 1 });
    const center = { x: 0, opacity: 1, scale: 1, transition: enterTransition };
    const stackStyle = (d) => ({ scale: 0.96, x: d > 0 ? -24 : 24, filter: "blur(1px)", opacity: 1 });

    return (
        <MotionConfig reducedMotion="never">
            <div className="sos-wrapper">
                <header className="sos-header">
                    <div className="sos-heading">
                        <h1>Slide-Over Stack</h1>
                        <p className="muted">
                            New page slides in; the last page scales and offsets into a stacked state.
                        </p>
                    </div>

                    <div className="sos-controls" role="toolbar" aria-label="SlideOver controls">
                        <button className="btn" onClick={goPrev} disabled={!canPrev} title="Previous">← Prev</button>
                        <div className="dots" aria-hidden>
                            {PAGES.map((_, i) => <span key={i} className={`dot ${i === index ? "active" : ""}`} />)}
                        </div>
                        <button className="btn primary" onClick={goNext} disabled={!canNext} title="Next">Next →</button>
                    </div>
                </header>

                <section className="sos-stage" aria-live="polite">
                    <AnimatePresence initial={false}>
                        {stacked && (
                            <motion.article
                                key={`stack-${stacked.id}`}
                                className="sos-page stack"
                                initial={{ opacity: 0, scale: 0.98, x: dir > 0 ? -8 : 8, filter: "blur(0px)" }}
                                animate={stackStyle(dir)}
                                exit={{ opacity: 0, transition: { duration: 0.18 } }}
                                transition={stackTransition}
                                aria-hidden="true"
                            >
                                <CardContent page={stacked} stacked />
                            </motion.article>
                        )}
                    </AnimatePresence>

                    <AnimatePresence initial={false}>
                        <motion.article
                            key={page.id}
                            className="sos-page active"
                            initial={enter(dir)}
                            animate={center}
                        >
                            <CardContent page={page} />
                        </motion.article>
                    </AnimatePresence>
                </section>

                <aside className="sos-notes">
                    <h3>Tech notes</h3>
                    <ul>
                        <li>At least five slides enforced via <code>makePages()</code>.</li>
                        <li>Stack layer is non-interactive (<code>pointer-events: none</code>).</li>
                        <li>Keep scale small (~0.96) to avoid “zoomed out” vibes.</li>
                    </ul>
                </aside>
            </div>
        </MotionConfig>
    );
}

function CardContent({ page, stacked = false }) {
    return (
        <div className="sos-card">
            <header className="cardHead">
                <span className="kicker">{stacked ? "Previous" : "Active"}</span>
                <h2>{page.title}</h2>
            </header>
            <p className="body">{page.body}</p>
            <ul className="bullets">
                {page.bullets?.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
        </div>
    );
}
