import { useMemo, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "framer-motion";
import "./styled.css";

const PAGES = [
    {
        id: "p1", kicker: "Pattern", title: "Book-flip",
        body: `A 3D rotateY transition with perspective. Great for magazine or card stacks.`,
        bullets: ["Scene has perspective", "Variants use custom direction", "Hinge via transform-origin"],
    },
    {
        id: "p2", kicker: "When to use", title: "Story screens",
        body: `Use for onboarding/story or gallery pages. Keep copy short—motion draws attention.`,
        bullets: ["Short copy", "Respect reduced motion (but we override here)", "Avoid nested 3D"],
    },
    {
        id: "p3", kicker: "Pitfalls", title: "Common gotchas",
        body: `Use mode="wait" to prevent backface flicker. Animate transforms/opacity only.`,
        bullets: ["mode='wait' for exit→enter", "backface-visibility: hidden", "One light source"],
    },
];

export default function BookFlip() {
    const prefersReduced = useReducedMotion();

    const [index, setIndex] = useState(0);
    const [dir, setDir] = useState(1);
    const page = PAGES[index];

    const canPrev = index > 0;
    const canNext = index < PAGES.length - 1;

    const goPrev = () => { if (canPrev) { setDir(-1); setIndex(i => i - 1); } };
    const goNext = () => { if (canNext) { setDir(1); setIndex(i => i + 1); } };

    // Snappy, premium spring. If reduced motion is on, we still animate (overridden below).
    const transition = useMemo(() => ({
        type: "spring",
        stiffness: 260,
        damping: 26,
        mass: 0.9,
    }), []);

    const pageVariants = {
        enter: (direction) => ({
            rotateY: direction > 0 ? -75 : 75,
            opacity: 0,
            x: direction > 0 ? 24 : -24,
            filter: "blur(3px)",
        }),
        center: {
            rotateY: 0,
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition,
        },
        exit: (direction) => ({
            rotateY: direction > 0 ? 75 : -75,
            opacity: 0,
            x: direction > 0 ? -24 : 24,
            filter: "blur(3px)",
            transition: { duration: 0.22 },
        }),
    };

    const origin = dir > 0 ? "right center" : "left center";

    return (
        // Force animations even if OS prefers reduced motion
        <MotionConfig reducedMotion="never">
            <div className="bookFlip">
                <section className="head">
                    <h1>Book-flip</h1>
                    <p>
                        3D page turn using <code>rotateY</code>, perspective, and{" "}
                        <code>AnimatePresence</code> with <code>mode="wait"</code>.
                        {prefersReduced ? " (OS says reduce motion, but this demo overrides to show the effect.)" : ""}
                    </p>
                </section>

                <div className="controls" role="toolbar" aria-label="Book controls">
                    <button className="btn" onClick={goPrev} disabled={!canPrev} title="Previous">← Prev</button>
                    <div className="dots" aria-hidden>
                        {PAGES.map((_, i) => <span key={i} className={`dot ${i === index ? "active" : ""}`} />)}
                    </div>
                    <button className="btn primary" onClick={goNext} disabled={!canNext} title="Next">Next →</button>
                </div>

                <div className="scene" aria-live="polite">
                    <AnimatePresence mode="wait" custom={dir}>
                        <motion.article
                            key={page.id}
                            className="page"
                            custom={dir}
                            variants={pageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            style={{ transformOrigin: origin }}
                        >
                            <header className="pageHead">
                                <span className="kicker">{page.kicker}</span>
                                <h2>{page.title}</h2>
                            </header>

                            <p className="body">{page.body}</p>

                            <ul className="bullets">
                                {page.bullets.map((b, i) => <li key={i}>{b}</li>)}
                            </ul>

                            <footer className="pageFoot">
                                <button className="ghost" onClick={goPrev} disabled={!canPrev}>← Prev</button>
                                <button className="ghost" onClick={goNext} disabled={!canNext}>Next →</button>
                            </footer>
                        </motion.article>
                    </AnimatePresence>
                </div>

                <aside className="notes">
                    <h3>Tech notes</h3>
                    <ul>
                        <li>Parent has <code>perspective</code>; child rotates on Y with <code>backface-visibility: hidden</code>.</li>
                        <li><code>mode="wait"</code> ensures exit finishes before enter.</li>
                        <li>Animate transforms/opacity; layout changes use <code>layout</code> when needed.</li>
                    </ul>
                </aside>
            </div>
        </MotionConfig>
    );
}
