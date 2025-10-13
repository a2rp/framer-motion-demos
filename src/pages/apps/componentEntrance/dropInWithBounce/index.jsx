import { useMemo, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";
import { makePages } from "../../_shared/pages";

/** Base templates → padded to >=5 via makePages() */
const TEMPLATES = [
    {
        key: "d1",
        title: "Snappy",
        body:
            "Classic drop-in: y:-40 → 0 with a spring overshoot. Good for dashboards and list reveals.",
        cfg: { items: 8, stiffness: 320, damping: 22, mass: 0.9, stagger: 0.06 },
    },
    {
        key: "d2",
        title: "Gentle",
        body:
            "Softer spring tuned for content-heavy screens. Still lively, never chaotic.",
        cfg: { items: 10, stiffness: 240, damping: 28, mass: 1.0, stagger: 0.05 },
    },
    {
        key: "d3",
        title: "Buoyant",
        body:
            "A touch more bounce for playful UIs (marketing, cards). Keep it short.",
        cfg: { items: 9, stiffness: 260, damping: 18, mass: 0.85, stagger: 0.07 },
    },
];
const PAGES = makePages(TEMPLATES, 5); // 👈 guarantees ≥5

export default function DropInWithBounce() {
    const [index, setIndex] = useState(0);
    const [bump, setBump] = useState(0); // replay key

    const page = PAGES[index];
    const cfg = page.cfg ?? { items: 8, stiffness: 300, damping: 22, mass: 0.9, stagger: 0.06 };

    const canPrev = index > 0;
    const canNext = index < PAGES.length - 1;

    const goPrev = () => canPrev && setIndex((i) => i - 1);
    const goNext = () => canNext && setIndex((i) => i + 1);
    const replay = () => setBump((k) => k + 1);

    // Variants: container controls stagger; items drop with spring
    const container = useMemo(
        () => ({
            hidden: { opacity: 1 },
            show: {
                opacity: 1,
                transition: {
                    staggerChildren: cfg.stagger,
                    delayChildren: 0.02,
                },
            },
        }),
        [cfg.stagger]
    );

    const item = useMemo(
        () => ({
            hidden: { y: -40, opacity: 0, scale: 0.98 },
            show: {
                y: 0,
                opacity: 1,
                scale: 1,
                transition: {
                    type: "spring",
                    stiffness: cfg.stiffness,
                    damping: cfg.damping,
                    mass: cfg.mass,
                    velocity: 2,
                },
            },
        }),
        [cfg.stiffness, cfg.damping, cfg.mass]
    );

    // Generate predictable content
    const items = useMemo(
        () =>
            Array.from({ length: Math.max(5, cfg.items) }).map((_, i) => ({
                id: `cell-${i + 1}`,
                title: `Card ${i + 1}`,
                text: i % 2
                    ? "Short copy keeps the bounce crisp."
                    : "Use transforms + opacity only for performance.",
            })),
        [cfg.items]
    );

    return (
        // Force animations for the demo showcase; remove reducedMotion="never" to respect OS.
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <Styled.Heading>
                        <h1>Drop-In with Bounce</h1>
                        <p className="muted">
                            Items enter from <code>y:-40</code> with a tuned spring overshoot and stagger.
                        </p>
                    </Styled.Heading>

                    <Styled.Controls role="toolbar" aria-label="Drop-in controls">
                        <button className="btn" onClick={goPrev} disabled={!canPrev} title="Previous">
                            ← Prev
                        </button>

                        <div className="dots" aria-hidden>
                            {PAGES.map((_, i) => (
                                <span key={i} className={`dot ${i === index ? "active" : ""}`} />
                            ))}
                        </div>

                        <button className="btn primary" onClick={goNext} disabled={!canNext} title="Next">
                            Next →
                        </button>

                        <button className="btn ghost" onClick={replay} title="Replay animation">
                            Replay
                        </button>
                    </Styled.Controls>
                </Styled.Header>

                <Styled.Stage>
                    <motion.ul
                        key={`${index}-${bump}-${cfg.items}-${cfg.stiffness}-${cfg.damping}`}
                        className="grid"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        {items.map((it, i) => (
                            <motion.li key={it.id} variants={item} className="cell">
                                <div className="card">
                                    <header className="cardHead">
                                        <span className="kicker">Item</span>
                                        <h3>{it.title}</h3>
                                    </header>
                                    <p className="body">{it.text}</p>
                                </div>
                            </motion.li>
                        ))}
                    </motion.ul>
                </Styled.Stage>

                <Styled.Notes>
                    <h3>Tech notes</h3>
                    <ul>
                        <li>
                            Use <b>staggerChildren</b> and a spring with small overshoot; long durations feel rubbery.
                        </li>
                        <li>
                            Keep initial <code>y</code> small (≈ −40) and <code>scale</code> ≈ 0.98 → 1 to avoid blur.
                        </li>
                        <li>
                            Respect reduced motion in production; this demo forces motion to showcase the effect.
                        </li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
