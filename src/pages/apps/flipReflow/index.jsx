import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, MotionConfig, motion } from "framer-motion";
import { Styled as S } from "./styled";

/** Generate at least 8 items with stable IDs */
function makeItems(min = 8) {
    const base = [
        { id: "A", title: "Alpha" },
        { id: "B", title: "Beta" },
        { id: "C", title: "Gamma" },
        { id: "D", title: "Delta" },
        { id: "E", title: "Epsilon" },
    ];
    const out = [];
    let c = 0;
    while (out.length < min) {
        const b = base[c % base.length];
        out.push({
            id: `${b.id}${Math.floor(out.length / base.length) || ""}`,
            title: `${b.title}${Math.floor(out.length / base.length) ? ` ${Math.floor(out.length / base.length) + 1}` : ""}`,
            value: 10 + ((c * 7) % 89), // pseudo value for sorting
            desc:
                "Layout (FLIP) reflow: smooth position swaps on reorder/resize. Only transforms & opacity animate.",
        });
        c++;
    }
    return out;
}

export default function FlipReflow() {
    // Items + UI state
    const [items, setItems] = useState(() => makeItems(8));
    const [expanded, setExpanded] = useState(() => new Set()); // ids that are expanded (taller)
    const [sortDir, setSortDir] = useState(0); // 0 = none, 1 = asc, -1 = desc
    const [dense, setDense] = useState(false); // tighter grid to exaggerate reflow

    // Derived view list
    const view = useMemo(() => {
        const copy = [...items];
        if (sortDir === 1) copy.sort((a, b) => a.value - b.value);
        if (sortDir === -1) copy.sort((a, b) => b.value - a.value);
        return copy;
    }, [items, sortDir]);

    const toggleExpand = (id) => {
        setExpanded((prev) => {
            const n = new Set(prev);
            n.has(id) ? n.delete(id) : n.add(id);
            return n;
        });
    };

    const shuffle = () => {
        setSortDir(0);
        setItems((prev) => {
            const a = [...prev];
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        });
    };

    const cycleSort = () => {
        setSortDir((d) => (d === 0 ? 1 : d === 1 ? -1 : 0));
    };

    const addItem = () => {
        setItems((prev) => {
            const id = `N${prev.length + 1}`;
            return [
                ...prev,
                {
                    id,
                    title: `New ${prev.length + 1}`,
                    value: 10 + ((prev.length * 13) % 89),
                    desc:
                        "Newly added item; FLIP will reflow neighbors without jumps.",
                },
            ];
        });
    };

    const removeLast = () => {
        setItems((prev) => (prev.length > 0 ? prev.slice(0, -1) : prev));
    };

    // Layout spring tuned for premium feel
    const layoutTransition = { type: "spring", stiffness: 380, damping: 32, mass: 0.85 };

    return (
        // Force animations for the demo showcase (remove to respect OS reduced motion)
        <MotionConfig reducedMotion="never">
            <S.Wrapper>
                <S.Header>
                    <div className="heading">
                        <h1>FLIP Reflow</h1>
                        <p className="muted">
                            Smooth position swaps on list reorder/resize using <code>layout</code>.
                            No manual keyframes—Framer computes transforms between states.
                        </p>
                    </div>

                    <S.Controls role="toolbar" aria-label="FLIP Reflow controls">
                        <button className="btn" onClick={shuffle} title="Shuffle">Shuffle</button>
                        <button className="btn" onClick={cycleSort} title="Cycle sort">
                            Sort: {sortDir === 0 ? "none" : sortDir === 1 ? "↑ asc" : "↓ desc"}
                        </button>
                        <button className="btn" onClick={addItem} title="Add item">Add</button>
                        <button className="btn" onClick={removeLast} title="Remove last" disabled={items.length <= 5}>
                            Remove
                        </button>

                        <label className="switch">
                            <input type="checkbox" checked={dense} onChange={(e) => setDense(e.target.checked)} />
                            <span>Tight grid</span>
                        </label>
                    </S.Controls>
                </S.Header>

                <S.Stage data-dense={dense}>
                    {/* LayoutGroup helps multi-element layout animations feel cohesive */}
                    <LayoutGroup>
                        <S.Grid
                            as={motion.ul}
                            layout
                            transition={layoutTransition}
                            role="list"
                            aria-label="Card grid"
                        >
                            <AnimatePresence initial={false}>
                                {view.map((it) => {
                                    const isOpen = expanded.has(it.id);
                                    return (
                                        <S.Card
                                            as={motion.li}
                                            key={it.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.96 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.18 } }}
                                            transition={layoutTransition}
                                            data-open={isOpen ? "true" : "false"}
                                            onClick={() => toggleExpand(it.id)}
                                        >
                                            <div className="cardHead">
                                                <span className="kicker">#{it.id}</span>
                                                <h2>{it.title}</h2>
                                                <span className="metric">{it.value}</span>
                                            </div>

                                            <motion.p
                                                className="body"
                                                layout
                                                initial={false}
                                                animate={{ opacity: isOpen ? 1 : 0.75 }}
                                            >
                                                {it.desc}
                                            </motion.p>

                                            <motion.div
                                                className="details"
                                                layout
                                                initial={false}
                                                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                                            >
                                                <ul>
                                                    <li>Click cards to expand/collapse (height changes reflow neighbors).</li>
                                                    <li>Use <code>Shuffle</code> / <code>Sort</code> / <code>Add</code> / <code>Remove</code> to watch FLIP in action.</li>
                                                    <li>Only transforms & opacity are animated; layout is computed.</li>
                                                </ul>
                                            </motion.div>
                                        </S.Card>
                                    );
                                })}
                            </AnimatePresence>
                        </S.Grid>
                    </LayoutGroup>
                </S.Stage>

                <S.Notes>
                    <h3>Tech notes</h3>
                    <ul>
                        <li>
                            Add <code>layout</code> to the container and each item. Framer calculates transform deltas (the “I”
                            in FLIP) and animates them.
                        </li>
                        <li>
                            For size changes inside an item (accordion), also mark those blocks with <code>layout</code>.
                        </li>
                        <li>
                            Keep shadows/borders light; heavy effects can make reflow feel sluggish.
                        </li>
                    </ul>
                </S.Notes>
            </S.Wrapper>
        </MotionConfig>
    );
}
