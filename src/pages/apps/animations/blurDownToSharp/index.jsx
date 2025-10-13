import { useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { makePages } from "../../_shared/pages";
import { Styled } from "./styled";

/** Base content → padded to ≥5 via makePages() */
const TEMPLATES = [
    {
        key: "b1",
        title: "Blur → Sharp",
        body:
            "Enter with a soft blur and micro-scale, then settle to perfect sharpness. " +
            "Great for progressive data loads and modal/page entrances.",
        bullets: ["filter blur animates to 0", "micro-scale 0.98 → 1", "tiny directional offset"],
    },
    {
        key: "b2",
        title: "Design Notes",
        body:
            "Keep blur low (6–10px) and duration short. The effect should feel like a camera focusing, not a fog machine.",
        bullets: ["Blur: 6–10px", "Duration: 240–420ms", "Offset: 8–12px"],
    },
    {
        key: "b3",
        title: "Implementation",
        body:
            "Animate transforms + opacity + filter only. Use AnimatePresence to ensure exit finishes cleanly.",
        bullets: ["Variants w/ direction", "Only GPU-friendly props", "Mode 'wait' when composing routes"],
    },
];
const PAGES = makePages(TEMPLATES, 5);

export default function BlurDownToSharp() {
    const [index, setIndex] = useState(0);
    const [dir, setDir] = useState(1); // 1=forward (from right), -1=back (from left)
    const [dur, setDur] = useState(0.34); // seconds
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

    const transition = useMemo(
        () => ({
            duration: dur,
            ease: [0.22, 1, 0.36, 1],
        }),
        [dur]
    );

    const variants = {
        enter: (d) => ({
            x: d > 0 ? 12 : -12,
            y: 8,
            opacity: 0,
            scale: 0.98,
            filter: "blur(10px)",
        }),
        center: {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition,
        },
        exit: (d) => ({
            x: d > 0 ? -12 : 12,
            y: -6,
            opacity: 0,
            scale: 0.985,
            filter: "blur(6px)",
            transition: { duration: Math.max(0.18, dur * 0.6), ease: [0.33, 1, 0.68, 1] },
        }),
    };

    return (
        // Force animations for demo showcase; remove reducedMotion="never" to fully respect OS pref.
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Blur-Down to Sharp</h1>
                        <p className="muted">
                            Starts soft and slightly small, resolves to crisp at rest.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Blur controls">
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

                        <label className="ctrl">
                            <span>Duration</span>
                            <input
                                type="range"
                                min="0.22"
                                max="0.6"
                                step="0.02"
                                value={dur}
                                onChange={(e) => setDur(parseFloat(e.target.value))}
                            />
                            <em>{dur.toFixed(2)}s</em>
                        </label>
                    </div>
                </Styled.Header>

                <Styled.Stage aria-live="polite">
                    <AnimatePresence custom={dir} mode="wait">
                        <motion.article
                            key={page.id}
                            className="page"
                            custom={dir}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                        >
                            <Styled.Card>
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
                            </Styled.Card>
                        </motion.article>
                    </AnimatePresence>
                </Styled.Stage>

                <Styled.Notes>
                    <h3>Tech notes</h3>
                    <ul>
                        <li>Animates <code>opacity</code>, <code>scale</code>, <code>filter: blur()</code>, and tiny <code>x/y</code> offsets.</li>
                        <li>Use with skeleton loaders → crossfade to crisp content for a natural “focus” feel.</li>
                        <li>When used as a route transition, prefer <code>mode="wait"</code> to avoid overlap artifacts.</li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
