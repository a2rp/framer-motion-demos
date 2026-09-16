import { useEffect, useMemo, useRef, useState } from "react";
import {
    AnimatePresence,
    LayoutGroup,
    MotionConfig,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { Styled } from "./styled";

/* ----------------------------- data helpers ----------------------------- */

const TAGS = ["Design", "Dev", "Data", "Ops"];
const uid = (() => {
    let i = 0;
    return () => `diod-${++i}`;
})();
const rand = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

function makeItem(i) {
    const tagCount = rand(1, 2);
    const tags = Array.from({ length: tagCount }, () => TAGS[rand(0, TAGS.length - 1)]).filter(
        (v, idx, a) => a.indexOf(v) === idx
    );
    const hue = rand(210, 260);
    const title = [
        "Refactor",
        "Prototype",
        "Telemetry",
        "Dashboard",
        "Workflow",
        "Schema",
        "Lighthouse",
    ][rand(0, 6)];
    return {
        id: uid(),
        title: `${title} #${i}`,
        desc:
            "Diff-in/diff-out with filters, search, sort & updates. Only transforms/opacity animate; height collapses on exit.",
        tags,
        score: rand(40, 99),
        date: Date.now() - rand(0, 1000 * 60 * 60 * 24 * 12), // last 12 days
        hue,
    };
}
function seed(n = 16) {
    return Array.from({ length: Math.max(12, n) }, (_, i) => makeItem(i + 1));
}

/* ------------------------------- component ------------------------------ */

export default function DiffInOut() {
    const [items, setItems] = useState(() => seed(16));
    const [search, setSearch] = useState("");
    const [activeTags, setActiveTags] = useState(new Set()); // empty = all
    const [sort, setSort] = useState("recent"); // recent | title | score
    const [pulseMap, setPulseMap] = useState({}); // id -> bump for update pulse

    // derived list for current UI
    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        const tags = activeTags;
        let a = items.filter((it) => {
            const matchesQ =
                !q ||
                it.title.toLowerCase().includes(q) ||
                it.desc.toLowerCase().includes(q) ||
                it.tags.some((t) => t.toLowerCase().includes(q));
            const matchesTag = tags.size === 0 || it.tags.some((t) => tags.has(t));
            return matchesQ && matchesTag;
        });

        switch (sort) {
            case "title":
                a.sort((x, y) => x.title.localeCompare(y.title));
                break;
            case "score":
                a.sort((x, y) => y.score - x.score);
                break;
            default:
                a.sort((x, y) => y.date - x.date);
                break;
        }
        return a;
    }, [items, search, activeTags, sort]);

    /* ---------- actions (now target VISIBLE items) ---------- */

    const toggleTag = (tag) =>
        setActiveTags((prev) => {
            const next = new Set(prev);
            next.has(tag) ? next.delete(tag) : next.add(tag);
            return next;
        });

    const clearTags = () => setActiveTags(new Set());

    // pick a target id from visible list; fallback to full list if needed
    const pickTargetId = () => {
        const pool = (filtered && filtered.length ? filtered : items);
        if (!pool.length) return null;
        const choice = pool[rand(0, pool.length - 1)];
        return choice?.id ?? null;
    };

    const bumpPulse = (id) =>
        id && setPulseMap((m) => ({ ...m, [id]: (m[id] || 0) + 1 }));

    const addOne = () => {
        // ensure newly added item is visible under current tag filters, if any
        const item = makeItem(items.length + 1);
        if (activeTags.size > 0) {
            const anyActive = [...activeTags][0];
            item.tags = Array.from(new Set([anyActive, ...item.tags]));
        }
        item.date = Date.now();
        setItems((arr) => [item, ...arr]);
        bumpPulse(item.id);
    };

    const removeRandom = () => {
        const id = pickTargetId();
        if (!id) return;
        setItems((arr) => arr.filter((it) => it.id !== id));
    };

    const updateRandom = () => {
        const id = pickTargetId();
        if (!id) return;
        setItems((arr) =>
            arr.map((it) =>
                it.id === id
                    ? {
                        ...it,
                        score: Math.min(100, Math.max(0, it.score + rand(-6, 12))),
                        date: Date.now(),
                    }
                    : it
            )
        );
        bumpPulse(id);
    };

    /* ---------- match count ticker ---------- */
    const mv = useMotionValue(filtered.length);
    const spring = useSpring(mv, { stiffness: 240, damping: 28, mass: 0.9 });
    const rounded = useTransform(spring, (v) => Math.round(v));
    useEffect(() => {
        mv.set(filtered.length);
    }, [filtered.length, mv]);

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="brand">
                        <h1>Diff-in / Diff-out</h1>
                        <p className="muted">
                            Animate list changes via <code>AnimatePresence</code> and <code>layout</code>.
                            Filter, search, sort, add, remove, and update-everything stays silky.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="List controls">
                        <div className="group">
                            <label className="field">
                                <span>Search</span>
                                <input
                                    type="text"
                                    placeholder="type to filter…"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </label>

                            <label className="field">
                                <span>Sort</span>
                                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                                    <option value="recent">Recent</option>
                                    <option value="title">Title A→Z</option>
                                    <option value="score">Score</option>
                                </select>
                            </label>
                        </div>

                        <div className="tags">
                            {TAGS.map((t) => (
                                <button
                                    key={t}
                                    className={`tag ${activeTags.has(t) ? "active" : ""}`}
                                    onClick={() => toggleTag(t)}
                                >
                                    {t}
                                </button>
                            ))}
                            <button className="tag ghost" onClick={clearTags} title="Clear tags">
                                All
                            </button>
                        </div>

                        <div className="sep" />

                        <div className="actions">
                            <button className="btn primary" onClick={addOne}>
                                Add
                            </button>
                            <button className="btn" onClick={updateRandom} title="Bump a visible item's score">
                                Update
                            </button>
                            <button className="btn" onClick={removeRandom}>
                                Remove
                            </button>
                        </div>

                        <div className="count">
                            <span className="label">Matches</span>
                            <motion.span className="num" aria-live="polite">
                                {rounded}
                            </motion.span>
                        </div>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <LayoutGroup>
                        <Styled.List as={motion.ul} layout initial={false} role="list" aria-live="polite">
                            <AnimatePresence initial={false}>
                                {filtered.map((it) => (
                                    <ItemCard key={it.id} item={it} pulseKey={pulseMap[it.id] || 0} />
                                ))}
                            </AnimatePresence>
                        </Styled.List>
                    </LayoutGroup>

                    <AnimatePresence>
                        {filtered.length === 0 && (
                            <motion.div
                                className="empty"
                                key="empty"
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.2 }}
                                role="status"
                            >
                                <div className="emptyCard">
                                    <h3>No matches</h3>
                                    <p>Try different tags or clear the search filter.</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Styled.Stage>

                <Styled.Notes>
                    <h3>Tech notes</h3>
                    <ul>
                        <li>
                            <b>Target visibility:</b> actions operate on the <i>currently visible</i> list so UI always changes.
                        </li>
                        <li>
                            <b>Reflow:</b> parent + items use <code>layout</code> for buttery FLIP transitions.
                        </li>
                        <li>
                            <b>Exit height collapse</b> prevents ghost gaps during removal.
                        </li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}

/* ------------------------------ item card ------------------------------- */

function ItemCard({ item, pulseKey }) {
    const created = new Date(item.date);
    const dd = created.toLocaleDateString(undefined, { month: "short", day: "numeric" });
    const tt = created.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });

    return (
        <motion.li
            className="tile"
            layout
            layoutId={item.id}
            style={{ ["--tile-hue"]: item.hue }}
            initial={{ opacity: 0, scale: 0.96, y: 6, height: "auto" }}
            animate={{ opacity: 1, scale: 1, y: 0, height: "auto" }}
            exit={{
                opacity: 0,
                scale: 0.92,
                y: -6,
                height: 0,
                marginTop: 0,
                marginBottom: 0,
                transition: { duration: 0.18 },
            }}
            transition={{ layout: { type: "spring", stiffness: 420, damping: 38, mass: 0.8 } }}
        >
            {/* Update/Add pulse ring (re-mounted via key) */}
            <div className="pulse" key={pulseKey} aria-hidden="true" />

            <header className="head">
                <span className="kicker">#{item.id.slice(-3)}</span>
                <h3>{item.title}</h3>
            </header>

            <p className="desc">{item.desc}</p>

            <div className="meta">
                <div className="tags">
                    {item.tags.map((t) => (
                        <span className="chip" key={t}>
                            {t}
                        </span>
                    ))}
                </div>

                <div className="right">
                    <span className="when" title={created.toLocaleString()}>
                        {dd} · {tt}
                    </span>
                    <span className="score" title="Score">
                        {item.score}
                    </span>
                </div>
            </div>
        </motion.li>
    );
}
