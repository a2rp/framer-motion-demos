import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";

/* ---------- helpers ---------- */

const rand = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
const uid = (() => { let i = 0; return () => `ms-${++i}`; })();

/** Make variable-height content by repeating the body lines. */
function makeItems(count = 14) {
    const baseText =
        "Masonry-style variable height. Reorder, shuffle, and add/remove to see FLIP reflow.";
    return Array.from({ length: Math.max(12, count) }, (_, i) => {
        const lines = rand(2, 7); // visual height driver
        const hue = rand(210, 258);
        return {
            id: uid(),
            title: `Card ${i + 1}`,
            lines,
            hue,
            sat: rand(70, 92),
            light: rand(46, 62),
            body: Array.from({ length: lines }, () => baseText).join(" "),
        };
    });
}

function shuffle(items) {
    const a = items.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = rand(0, i);
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
const addItem = (items) => [...items, ...makeItems(1)];
function removeItem(items) {
    if (items.length <= 6) return items;
    const a = items.slice(); a.splice(rand(0, a.length - 1), 1); return a;
}

/** Compute exact row spans for every .tile in the grid. */
function measureGridSpans(gridEl) {
    if (!gridEl) return;
    const styles = getComputedStyle(gridEl);
    const row = parseFloat(styles.getPropertyValue("--row-size")) || parseFloat(styles.gridAutoRows);
    const gap = parseFloat(styles.rowGap || styles.gap || 0);
    if (!row) return;

    const tiles = gridEl.querySelectorAll(".tile");
    tiles.forEach((tile) => {
        const inner = tile.querySelector(".tileInner");
        if (!inner) return;
        const h = inner.getBoundingClientRect().height;
        const span = Math.max(1, Math.ceil((h + gap) / (row + gap)));
        tile.style.gridRowEnd = `span ${span}`;
        tile.style.setProperty("--computed-span", span); // (optional) for debugging
    });
}

/* ---------- component ---------- */

export default function MasonryShuffle() {
    const [items, setItems] = useState(() => makeItems(14));
    const [sort, setSort] = useState("none"); // none | tall | short | alpha
    const gridRef = useRef(null);

    const sorted = useMemo(() => {
        const a = items.slice();
        switch (sort) {
            case "tall": a.sort((x, y) => y.lines - x.lines); break;
            case "short": a.sort((x, y) => x.lines - y.lines); break;
            case "alpha": a.sort((x, y) => x.title.localeCompare(y.title)); break;
            default: break;
        }
        return a;
    }, [items, sort]);

    // Measure → on mount, on item changes, on resize, and on content resize.
    useLayoutEffect(() => {
        // after DOM paints
        const id = requestAnimationFrame(() => measureGridSpans(gridRef.current));
        return () => cancelAnimationFrame(id);
    }, [sorted.length, sort]);

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        // Window resize
        const onResize = () => measureGridSpans(grid);
        window.addEventListener("resize", onResize, { passive: true });

        // Observe each tile’s inner content
        const ro = new ResizeObserver(() => measureGridSpans(grid));
        grid.querySelectorAll(".tile .tileInner").forEach((el) => ro.observe(el));

        return () => {
            window.removeEventListener("resize", onResize);
            ro.disconnect();
        };
    }, []);

    const onShuffle = () => setItems((it) => shuffle(it));
    const onAdd = () => setItems((it) => addItem(it));
    const onRemove = () => setItems((it) => removeItem(it));

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Masonry Shuffle</h1>
                        <p className="muted">
                            True masonry: cards measure themselves via <code>ResizeObserver</code> and
                            set exact <code>grid-row-end</code> spans. No more awkward holes.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Masonry controls">
                        <button className="btn" onClick={onShuffle} title="Shuffle">Shuffle</button>

                        <label className="ctrl">
                            <span>Sort</span>
                            <select value={sort} onChange={(e) => setSort(e.target.value)}>
                                <option value="none">None</option>
                                <option value="tall">Tall → Short</option>
                                <option value="short">Short → Tall</option>
                                <option value="alpha">A → Z</option>
                            </select>
                        </label>

                        <div className="sep" />

                        <button className="btn ghost" onClick={onAdd} title="Add one">Add</button>
                        <button className="btn ghost" onClick={onRemove} title="Remove one">Remove</button>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <motion.div className="masonry" layout ref={gridRef}>
                        <AnimatePresence initial={false}>
                            {sorted.map((card) => (
                                <motion.article
                                    key={card.id}
                                    className="tile"
                                    layout
                                    layoutId={card.id}
                                    style={{
                                        // tint knobs
                                        ["--tile-hue"]: card.hue,
                                        ["--tile-sat"]: `${card.sat}%`,
                                        ["--tile-light"]: `${card.light}%`,
                                    }}
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.18 } }}
                                    transition={{ layout: { type: "spring", stiffness: 420, damping: 38, mass: 0.8 } }}
                                    onLayoutAnimationComplete={() => measureGridSpans(gridRef.current)}
                                >
                                    <div className="tileInner">
                                        <header className="tHead">
                                            <span className="kicker">Card</span>
                                            <h3>{card.title}</h3>
                                        </header>

                                        <p className="body">{card.body}</p>

                                        <ul className="meta">
                                            <li><b>Lines:</b> {card.lines}</li>
                                            <li><b>Span:</b> <code style={{ opacity: .8 }}>var(--computed-span)</code></li>
                                        </ul>
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </Styled.Stage>

                <Styled.Notes>
                    <h3>Tech notes</h3>
                    <ul>
                        <li>Exact spans = <code>ceil((contentHeight + gap) / (row + gap))</code>.</li>
                        <li>Measured on mount, layout animation complete, and on content/window resize.</li>
                        <li><code>grid-auto-flow: dense</code> still helps pack small leftovers.</li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
