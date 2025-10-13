import { useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { makePages } from "../../_shared/pages";
import { Styled } from "./styled";

/** Base content; will be padded to >= 5 via makePages() */
const TEMPLATES = [
    {
        key: "cf1",
        title: "Crossfade + Micro-scale",
        body:
            "Gentle opacity crossfade with a tiny scale settle (0.98 → 1.00). " +
            "Feels premium, draws attention without shouting.",
        bullets: [
            "Transforms + opacity only",
            "Micro-scale: 0.98 → 1.00",
            "Perfect for dense UI or detail swaps",
        ],
    },
    {
        key: "cf2",
        title: "Design Notes",
        body:
            "Crossfades are versatile: use for detail panes, card swaps, or image galleries. " +
            "Keep copy short so the motion reads cleanly.",
        bullets: ["Durations 220–420ms", "Easing with a soft landing", "No layout thrash"],
    },
    {
        key: "cf3",
        title: "Implementation",
        body:
            "AnimatePresence mounts the new view while the old one fades. " +
            "We use slight blur on enter/exit to hide texture pop.",
        bullets: ["Variants per lifecycle", "Exit is short", "Initial is subtle"],
    },
];
const PAGES = makePages(TEMPLATES, 5);

export default function CrossfadeMicroScale() {
    const [index, setIndex] = useState(0);
    const prevIndexRef = useRef(null);
    const [dir, setDir] = useState(1); // 1 = forward, -1 = backward

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

    // Timing: soft spring in; short tween out
    const inTransition = useMemo(
        () => ({ type: "spring", stiffness: 260, damping: 30, mass: 0.9 }),
        []
    );
    const outTransition = useMemo(
        () => ({ duration: 0.22, ease: [0.22, 1, 0.36, 1] }),
        []
    );

    /** Variants: crossfade + tiny scale w/ micro y-nudge based on direction */
    const cardVariants = {
        initial: (d) => ({
            opacity: 0,
            scale: 0.98,
            y: d > 0 ? 6 : -6,
            filter: "blur(2px)",
        }),
        enter: {
            opacity: 1,
            scale: 1.0,
            y: 0,
            filter: "blur(0px)",
            transition: inTransition,
        },
        exit: (d) => ({
            opacity: 0,
            scale: 1.0,
            y: d > 0 ? -6 : 6,
            filter: "blur(2px)",
            transition: outTransition,
        }),
    };

    return (
        // Force animations for demo visibility; remove reducedMotion="never" to respect OS.
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <Styled.Heading>
                        <h1>Crossfade + Micro-scale</h1>
                        <p className="muted">
                            Opacity crossfade + tiny scale settle (0.98 → 1.00). Smooth, quiet, classy.
                        </p>
                    </Styled.Heading>

                    <Styled.Controls role="toolbar" aria-label="Crossfade controls">
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
                    </Styled.Controls>
                </Styled.Header>

                <Styled.Stage aria-live="polite">
                    {/* Decorative backdrop, unchanged across pages; helps sell the crossfade */}
                    <div className="cf-backdrop" aria-hidden="true" />

                    <AnimatePresence initial={false} custom={dir}>
                        <Styled.Page
                            as={motion.article}
                            key={page.id}
                            className="cf-page"
                            custom={dir}
                            variants={cardVariants}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            layout
                        >
                            <CardContent page={page} />
                        </Styled.Page>
                    </AnimatePresence>
                </Styled.Stage>

                <Styled.Notes>
                    <h3>Tech notes</h3>
                    <ul>
                        <li>Crossfade is about restraint: short exit, cushy enter.</li>
                        <li>Micro-scale stays near 1.00; big scales look tacky fast.</li>
                        <li>Only transforms/opacity; add <code>layout</code> if size changes.</li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}

function CardContent({ page }) {
    return (
        <div className="cf-card">
            <header className="cardHead">
                <span className="kicker">Active</span>
                <h2>{page.title}</h2>
            </header>

            <p className="body">{page.body}</p>

            <ul className="bullets">
                {page.bullets?.map((b, i) => (
                    <li key={i}>{b}</li>
                ))}
            </ul>
        </div>
    );
}
