import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";

/* ----------------------- data helpers ----------------------- */

const CATS = ["UI", "Data", "Auth", "Media", "UX", "DevOps"];
const rand = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
const uid = (() => { let i = 0; return () => `fm-${++i}`; })();

function makeItem(n) {
    const c1 = CATS[rand(0, CATS.length - 1)];
    const c2 = Math.random() < 0.35 ? CATS[rand(0, CATS.length - 1)] : null;
    const price = rand(19, 399);
    const rating = rand(60, 100) / 20; // 3.0 → 5.0
    const createdAt = Date.now() - rand(0, 1000 * 60 * 60 * 24 * 180);
    return {
        id: uid(),
        title: `Module ${n}`,
        desc:
            "Composable utility with sensible defaults. Works out-of-the-box and plays nice with your stack.",
        cats: c2 && c2 !== c1 ? [c1, c2] : [c1],
        price,
        rating,
        createdAt,
        hue: rand(210, 255),
    };
}
function seed(n = 24) {
    return Array.from({ length: n }, (_, i) => makeItem(i + 1));
}

/* ----------------------- count badge ----------------------- */

function CountBadge({ value }) {
    return (
        <motion.span
            className="countBadge"
            key={value}                 // remount on change for a tiny pop
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 360, damping: 20, mass: 0.6 }}
        >
            {value}
        </motion.span>
    );
}

/* ----------------------- main page ------------------------- */

export default function FilterMeltAway() {
    const [items, setItems] = useState(() => seed(28));
    const [query, setQuery] = useState("");
    const [tags, setTags] = useState([]); // multi-select
    const [sort, setSort] = useState("newest"); // newest | price | rating | title
    const [density, setDensity] = useState("cozy"); // cozy | compact

    const searchRef = useRef(null);

    // Ctrl/Cmd+K focuses search
    useEffect(() => {
        const onKey = (e) => {
            if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
                e.preventDefault();
                searchRef.current?.focus();
                searchRef.current?.select();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const hasFilters = query.trim().length > 0 || tags.length > 0 || sort !== "newest";

    // Filtering + sorting
    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        const tokens = q ? q.split(/\s+/).filter(Boolean) : [];

        let list = items.filter((it) => {
            const hay = `${it.title} ${it.desc} ${it.cats.join(" ")}`.toLowerCase();
            const matchesText = tokens.length === 0 || tokens.every((t) => hay.includes(t));
            const matchesTags = tags.length === 0 || it.cats.some((c) => tags.includes(c));
            return matchesText && matchesTags;
        });

        switch (sort) {
            case "price": list.sort((a, b) => a.price - b.price); break;
            case "rating": list.sort((a, b) => b.rating - a.rating); break;
            case "title": list.sort((a, b) => a.title.localeCompare(b.title)); break;
            default: // newest
                list.sort((a, b) => b.createdAt - a.createdAt);
        }
        return list;
    }, [items, query, tags, sort]);

    // Actions
    const toggleTag = (cat) =>
        setTags((t) => (t.includes(cat) ? t.filter((x) => x !== cat) : [...t, cat]));

    const clearAll = () => {
        setQuery("");
        setTags([]);
        setSort("newest");
    };

    const addOne = () => setItems((arr) => [makeItem(arr.length + 1), ...arr]);
    const removeOne = () =>
        setItems((arr) => (arr.length > 0 ? arr.slice(0, arr.length - 1) : arr));

    return (
        // For the gallery we force animations on to showcase effects
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper data-density={density}>
                <Styled.Header>
                    <div className="heading">
                        <h1>Filtered “Melt-Away” List</h1>
                        <p className="muted">
                            Items that don’t match your filters <b>melt away</b> (opacity + blur), while matches
                            flow into place with springy layout transitions.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Filter controls">
                        <div className="searchBox">
                            <input
                                ref={searchRef}
                                type="search"
                                placeholder="Search modules (Ctrl + K)"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            {query && (
                                <button className="x" onClick={() => setQuery("")} aria-label="Clear search">×</button>
                            )}
                        </div>

                        <div className="chipRow" role="group" aria-label="Categories">
                            {CATS.map((c) => (
                                <motion.button
                                    key={c}
                                    className={`chip ${tags.includes(c) ? "active" : ""}`}
                                    onClick={() => toggleTag(c)}
                                    whileTap={{ scale: 0.96 }}
                                    whileHover={{ y: -1 }}
                                    title={tags.includes(c) ? `Remove ${c}` : `Filter by ${c}`}
                                >
                                    {c}
                                    {tags.includes(c) && <motion.span layoutId="chipDot" className="dot" />}
                                </motion.button>
                            ))}
                        </div>

                        <label className="ctrl">
                            <span>Sort</span>
                            <select value={sort} onChange={(e) => setSort(e.target.value)}>
                                <option value="newest">Newest</option>
                                <option value="price">Price (low → high)</option>
                                <option value="rating">Rating (high → low)</option>
                                <option value="title">Title (A → Z)</option>
                            </select>
                        </label>

                        <label className="ctrl">
                            <span>Density</span>
                            <select value={density} onChange={(e) => setDensity(e.target.value)}>
                                <option value="cozy">Cozy</option>
                                <option value="compact">Compact</option>
                            </select>
                        </label>

                        <div className="sep" />

                        <button className="btn ghost" onClick={addOne} title="Add one">Add</button>
                        <button className="btn ghost" onClick={removeOne} title="Remove one">Remove</button>

                        <AnimatePresence>
                            {hasFilters && (
                                <motion.button
                                    className="btn clear"
                                    onClick={clearAll}
                                    initial={{ opacity: 0, x: 12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 12 }}
                                    title="Clear all filters"
                                >
                                    Clear
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </div>
                </Styled.Header>

                <Styled.MetaRow>
                    <div className="result">
                        <span>Results</span> <CountBadge value={filtered.length} />
                    </div>
                    {hasFilters ? (
                        <motion.div
                            key="active"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            className="summary"
                        >
                            <b>Active:</b>
                            {query && <code className="tag">“{query}”</code>}
                            {tags.map((t) => (
                                <button key={t} className="tag pill" onClick={() => toggleTag(t)} title="Remove filter">
                                    {t} ×
                                </button>
                            ))}
                            {sort !== "newest" && <span className="tag">{sort}</span>}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="none"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            className="summary"
                        >
                            Try combining a search and a couple of category chips.
                        </motion.div>
                    )}
                </Styled.MetaRow>

                <Styled.Stage>
                    <motion.ul className="grid" layout>
                        <AnimatePresence initial={false}>
                            {filtered.map((it) => (
                                <motion.li
                                    key={it.id}
                                    layout
                                    className="card"
                                    initial={{ opacity: 0, y: 8, scale: 0.98, filter: "blur(2px)" }}
                                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                                    exit={{
                                        opacity: 0,
                                        y: 8,
                                        scale: 0.98,
                                        filter: "blur(8px)",
                                        transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
                                    }}
                                    transition={{ layout: { type: "spring", stiffness: 420, damping: 36, mass: 0.8 } }}
                                    style={{
                                        ["--tint-h"]: it.hue,
                                    }}
                                    whileHover={{ translateY: -2 }}
                                >
                                    <article className="inner">
                                        <header className="head">
                                            <div className="title">
                                                <span className="kicker">Module</span>
                                                <h3>{it.title}</h3>
                                            </div>
                                            <div className="price">₹{it.price}</div>
                                        </header>

                                        <p className="desc">{it.desc}</p>

                                        <footer className="foot">
                                            <div className="cats">
                                                {it.cats.map((c) => (
                                                    <span key={c} className="cat" onClick={() => toggleTag(c)} title={`Toggle ${c}`}>
                                                        {c}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="rating" title="Rating">
                                                <div className="stars" style={{ ["--p"]: (it.rating / 5) * 100 + "%" }}>
                                                    ★★★★★
                                                </div>
                                                <span>{it.rating.toFixed(1)}</span>
                                            </div>
                                        </footer>
                                    </article>
                                </motion.li>
                            ))}
                        </AnimatePresence>
                    </motion.ul>

                    <AnimatePresence>
                        {filtered.length === 0 && (
                            <motion.div
                                className="empty"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <motion.div
                                    className="bubble"
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
                                >
                                    🔎
                                </motion.div>
                                <h4>No matches</h4>
                                <p>Try different keywords or clear a few chips.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Styled.Stage>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
