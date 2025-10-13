import { useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { makePages } from "../../_shared/pages";
import "./styled.css";

/** Base templates → padded to >= 5 via makePages() */
const TEMPLATES = [
    {
        key: "px1",
        title: "Parallax Push",
        body:
            "Foreground content slides in; the background world drifts more slowly, " +
            "creating a tactile depth cue without heavy 3D.",
        bullets: [
            "Foreground: larger translate distance",
            "Background: smaller translate distance",
            "Crisp, transform-only motion",
        ],
    },
    {
        key: "px2",
        title: "Design Notes",
        body:
            "Use for lateral navigation (list → detail) or wizard steps. Keep values subtle so it feels like weight, not wobble.",
        bullets: ["Parallax ratio ~0.25–0.45", "Short springs", "Light blur on the background is optional"],
    },
    {
        key: "px3",
        title: "Implementation",
        body:
            "Two layers: a decorative background and a card-like foreground. " +
            "Animate both on enter; you usually don't need an exit—keep it snappy.",
        bullets: ["Variants per direction", "Separate transitions", "Pointer-events off on the BG layer"],
    },
];
const PAGES = makePages(TEMPLATES, 5);

export default function ParallaxPush() {
    const [index, setIndex] = useState(0);
    const [dir, setDir] = useState(1); // 1 = forward (from right), -1 = backward (from left)
    const [ratio, setRatio] = useState(0.35); // background movement ratio vs. foreground
    const [bump, setBump] = useState(0); // replay key

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
    const replay = () => setBump((k) => k + 1);

    // Tuned transitions: foreground = spring; background = short tween
    const fgTransition = useMemo(
        () => ({ type: "spring", stiffness: 260, damping: 28, mass: 0.9 }),
        []
    );
    const bgTransition = useMemo(
        () => ({ duration: 0.42, ease: [0.22, 1, 0.36, 1] }),
        []
    );

    // Foreground motion (bigger travel)
    const fgEnter = (d) => ({ x: d > 0 ? 88 : -88, opacity: 0.85, scale: 1 });
    const fgCenter = { x: 0, opacity: 1, scale: 1, transition: fgTransition };

    // Background motion (smaller travel, slight blur)
    const bgEnter = (d, r) => ({
        x: d > 0 ? 88 * r : -88 * r,
        opacity: 1,
        filter: "blur(1px)",
    });
    const bgCenter = { x: 0, filter: "blur(0px)", transition: bgTransition };

    return (
        // Force animations (demo showcase). If you want to respect OS: remove reducedMotion="never".
        <MotionConfig reducedMotion="never">
            <div className="pp-wrapper">
                <header className="pp-header">
                    <div className="pp-heading">
                        <h1>Parallax Push</h1>
                        <p className="muted">
                            Foreground slides; background drifts slower for a subtle depth cue.
                        </p>
                    </div>

                    <div className="pp-controls" role="toolbar" aria-label="Parallax controls">
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

                        <div className="spacer" />

                        <label className="ctrl">
                            <span>Parallax ratio</span>
                            <input
                                type="range"
                                min="0.2"
                                max="0.6"
                                step="0.05"
                                value={ratio}
                                onChange={(e) => setRatio(parseFloat(e.target.value))}
                            />
                            <em>{ratio.toFixed(2)}</em>
                        </label>

                        <button className="btn ghost" onClick={replay} title="Replay animation">
                            Replay
                        </button>
                    </div>
                </header>

                <section className="pp-stage" aria-live="polite">
                    {/* Decorative background layer (non-interactive) */}
                    <AnimatePresence initial={false}>
                        <motion.div
                            key={`bg-${index}-${bump}-${ratio}`}
                            className="pp-bg"
                            initial={bgEnter(dir, ratio)}
                            animate={bgCenter}
                            exit={{ opacity: 1 }}
                            aria-hidden="true"
                        >
                            {/* Simple shapes to show drift; keep DOM cheap */}
                            <div className="bg-stripes" />
                            <div className="bg-dots" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Foreground content card */}
                    <AnimatePresence initial={false}>
                        <motion.article
                            key={`page-${page.id}-${bump}`}
                            className="pp-page"
                            initial={fgEnter(dir)}
                            animate={fgCenter}
                        >
                            <CardContent page={page} />
                        </motion.article>
                    </AnimatePresence>
                </section>

                <aside className="pp-notes">
                    <h3>Tech notes</h3>
                    <ul>
                        <li>Two layers: <b>background (drifts)</b> and <b>foreground (slides)</b>.</li>
                        <li>Parallax ratio controls how far the background travels vs. the foreground.</li>
                        <li>Transforms + opacity only; short, springy timing for premium feel.</li>
                    </ul>
                </aside>
            </div>
        </MotionConfig>
    );
}

function CardContent({ page }) {
    return (
        <div className="pp-card">
            <header className="cardHead">
                <span className="kicker">Active</span>
                <h2>{page.title}</h2>
            </header>
            <p className="body">{page.body}</p>
            <ul className="bullets">
                {page.bullets?.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
        </div>
    );
}
