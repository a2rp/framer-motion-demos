import { useMemo, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";

export default function StaggeredCardRise() {
    const [count, setCount] = useState(12);        // number of cards
    const [stagger, setStagger] = useState(0.06);  // seconds between children
    const [bump, setBump] = useState(0);           // replay key

    // Generate deterministic items (rekey on replay to re-run variants)
    const items = useMemo(() => {
        return Array.from({ length: Math.max(5, count) }, (_, i) => ({
            id: `card-${bump}-${i + 1}`,
            title: `Card ${i + 1}`,
            blurb:
                "A small, reusable card. The entrance is a springy y: 20 → 0 with opacity fade.",
            tags: i % 3 === 0 ? ["UI", "Motion"] : i % 3 === 1 ? ["Patterns"] : ["Demo"],
        }));
    }, [count, bump]);

    // Container + item variants
    const containerV = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: stagger,
                delayChildren: 0.05,
            },
        },
    };

    const itemV = {
        hidden: { y: 20, opacity: 0, scale: 0.98 },
        show: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 260, damping: 22, mass: 0.9 },
        },
    };

    const replay = () => setBump((k) => k + 1);

    return (
        // Force animations for demo visibility; remove to respect OS setting.
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Staggered Card Rise</h1>
                        <p className="muted">
                            Cards rise from <code>y: 20</code> with a spring. Container uses{" "}
                            <code>staggerChildren</code> for a clean cascade.
                        </p>
                    </div>

                    <Styled.Controls role="toolbar" aria-label="Stagger controls">
                        <label className="ctrl">
                            <span>Cards</span>
                            <input
                                type="range"
                                min="6"
                                max="24"
                                step="2"
                                value={count}
                                onChange={(e) => setCount(parseInt(e.target.value, 10))}
                            />
                            <em>{Math.max(5, count)}</em>
                        </label>

                        <label className="ctrl">
                            <span>Stagger (s)</span>
                            <input
                                type="range"
                                min="0"
                                max="0.2"
                                step="0.01"
                                value={stagger}
                                onChange={(e) => setStagger(parseFloat(e.target.value))}
                            />
                            <em>{stagger.toFixed(2)}</em>
                        </label>

                        <button className="btn primary" onClick={replay} title="Replay">
                            Replay
                        </button>
                    </Styled.Controls>
                </Styled.Header>

                <Styled.Stage>
                    <motion.div
                        key={`${bump}-${stagger}-${items.length}`}
                        className="grid"
                        variants={containerV}
                        initial="hidden"
                        animate="show"
                    >
                        {items.map((it) => (
                            <motion.article
                                key={it.id}
                                className="card"
                                variants={itemV}
                                whileHover={{ y: -2 }}
                            >
                                <header className="cardHead">
                                    <span className="kicker">Item</span>
                                    <h3>{it.title}</h3>
                                </header>

                                <p className="blurb">{it.blurb}</p>

                                <div className="tags">
                                    {it.tags.map((t, i) => (
                                        <span className="tag" key={i}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </Styled.Stage>

                <Styled.Notes>
                    <ul>
                        <li>
                            Keep stagger small (0.04–0.08s). Longer staggers feel sluggish.
                        </li>
                        <li>Transforms + opacity only; layout stays stable.</li>
                        <li>
                            Use <code>whileInView</code> instead of mount if you want reveal-on-scroll.
                        </li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
