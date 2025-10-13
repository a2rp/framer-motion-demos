import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, Reorder, motion } from "framer-motion";
import { Styled } from "./styled";

/* ---------- data helpers ---------- */
const uid = (() => { let i = 0; return () => `it-${++i}`; })();
const PRIOS = ["Low", "Medium", "High"];

function makeItems(n = 12) {
    const words = ["Apollo", "Nimbus", "Vector", "Quartz", "Zephyr", "Orchid", "Atlas", "Halo", "Vertex", "Nova", "Sable", "Polar", "Indigo"];
    return Array.from({ length: n }, (_, i) => ({
        id: uid(),
        title: `${words[i % words.length]} ${i + 1}`,
        note: "Drag by the handle to reorder. Try search, sort, bulk select, and keyboard moves (Alt+↑/↓).",
        priority: (i % 3),           // 0 Low, 1 Medium, 2 High
        createdAt: Date.now() - i * 36_000,
        pulse: false,
    }));
}

function move(array, from, to) {
    const a = array.slice();
    const item = a.splice(from, 1)[0];
    a.splice(to, 0, item);
    return a;
}

/* ---------- component ---------- */
export default function DragReorderSort() {
    const [items, setItems] = useState(() => makeItems(12));
    const [search, setSearch] = useState("");
    const [sortMode, setSortMode] = useState("manual"); // manual | title | priority
    const [density, setDensity] = useState("cozy");     // cozy | compact
    const [selection, setSelection] = useState(() => new Set());

    const listRef = useRef(null);
    const scrollLoop = useRef(null);
    const lastPointerY = useRef(0);

    const dragEnabled = sortMode === "manual" && !search.trim();

    const visible = useMemo(() => {
        const q = search.trim().toLowerCase();
        let arr = q ? items.filter(it => (it.title + " " + it.note).toLowerCase().includes(q)) : items.slice();
        if (sortMode === "title") arr.sort((a, b) => a.title.localeCompare(b.title));
        else if (sortMode === "priority") arr.sort((a, b) => b.priority - a.priority || a.title.localeCompare(b.title));
        return arr;
    }, [items, search, sortMode]);

    const isSelected = useCallback((id) => selection.has(id), [selection]);
    const toggleSelect = (id) => setSelection(prev => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        return next;
    });
    const clearSelection = () => setSelection(new Set());

    const addItem = () => {
        const next = {
            id: uid(),
            title: `New Task ${items.length + 1}`,
            note: "Freshly added. Reorder me!",
            priority: Math.floor(Math.random() * 3),
            createdAt: Date.now(),
            pulse: true,
        };
        setItems(a => [next, ...a]);
        setTimeout(() => setItems(a => a.map(x => (x.id === next.id ? { ...x, pulse: false } : x))), 1200);
    };
    const removeSelected = () => {
        if (!selection.size) return;
        setItems(a => a.filter(x => !selection.has(x.id)));
        clearSelection();
    };

    const handleReorder = (newOrder) => {
        if (!dragEnabled) return;
        setItems(newOrder);
    };

    // keyboard Alt+↑/↓ (manual mode & exactly one selected)
    useEffect(() => {
        const onKey = (e) => {
            if (!(e.altKey && (e.key === "ArrowUp" || e.key === "ArrowDown"))) return;
            if (!dragEnabled || selection.size !== 1) return;
            e.preventDefault();
            const id = Array.from(selection)[0];
            const idx = items.findIndex(x => x.id === id);
            if (idx < 0) return;
            const dir = e.key === "ArrowUp" ? -1 : +1;
            const to = Math.min(items.length - 1, Math.max(0, idx + dir));
            if (to !== idx) setItems(a => move(a, idx, to));
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [items, selection, dragEnabled]);

    // auto-scroll near edges
    const startScrollLoop = useCallback(() => {
        cancelAnimationFrame(scrollLoop.current);
        const step = () => {
            const box = listRef.current;
            if (!box) return;
            const rect = box.getBoundingClientRect();
            const y = lastPointerY.current;
            const threshold = 30;
            const speed = 14;
            let dy = 0;
            if (y < rect.top + threshold) dy = -speed;
            else if (y > rect.bottom - threshold) dy = speed;
            if (dy) box.scrollTop += dy;
            scrollLoop.current = requestAnimationFrame(step);
        };
        scrollLoop.current = requestAnimationFrame(step);
    }, []);
    const stopScrollLoop = useCallback(() => cancelAnimationFrame(scrollLoop.current), []);

    const onDragStart = (_evt, info) => { lastPointerY.current = info.point.y; startScrollLoop(); };
    const onDrag = (_evt, info) => { lastPointerY.current = info.point.y; };
    const onDragEnd = () => { stopScrollLoop(); };

    const priorityTag = (p) => PRIOS[p] || "Low";

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper data-density={density}>
                <Styled.Header>
                    <div className="heading">
                        <h1>Drag / Reorder / Sort</h1>
                        <p className="muted">Reorder with buttery springs. Search & sort. Bulk ops. Alt+↑/↓ to move.</p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Controls">
                        <div className="search">
                            <input
                                type="text"
                                placeholder="Search… (Ctrl/⌘ + K)"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                onKeyDown={(e) => {
                                    const meta = e.ctrlKey || e.metaKey;
                                    if (meta && (e.key === "k" || e.key === "K")) { e.preventDefault(); e.currentTarget.select(); }
                                }}
                            />
                        </div>

                        <label className="ctrl">
                            <span>Sort</span>
                            <select value={sortMode} onChange={(e) => setSortMode(e.target.value)}>
                                <option value="manual">Manual (drag)</option>
                                <option value="title">Title A→Z</option>
                                <option value="priority">Priority High→Low</option>
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

                        <button className="btn ghost" onClick={addItem}>Add</button>
                        <button className="btn ghost" onClick={removeSelected} disabled={selection.size === 0}>Remove</button>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    {!dragEnabled && (
                        <Styled.Infobar role="status">
                            {search
                                ? "Drag disabled while filtering. Clear search to reorder."
                                : "Drag disabled in sorted view. Switch back to Manual to reorder."}
                        </Styled.Infobar>
                    )}

                    {/* ✅ Use string tags for 'as' to avoid <[object Object] /> warning */}
                    <Reorder.Group
                        as="div"
                        axis="y"
                        values={visible}
                        onReorder={handleReorder}
                        className="list"
                        ref={listRef}
                        layout
                    >
                        <AnimatePresence initial={false}>
                            {visible.map((item) => {
                                const selected = isSelected(item.id);
                                return (
                                    <Reorder.Item
                                        key={item.id}
                                        value={item}
                                        as="article"
                                        className={`row ${selected ? "is-selected" : ""} ${item.pulse ? "is-pulse" : ""}`}
                                        layout
                                        drag={dragEnabled}
                                        dragListener={dragEnabled}
                                        onDragStart={onDragStart}
                                        onDrag={onDrag}
                                        onDragEnd={onDragEnd}
                                        dragConstraints={listRef}
                                        dragElastic={0.08}
                                        whileDrag={{ scale: 1.02, boxShadow: "0 10px 30px hsl(0 0% 0% / 0.25)" }}
                                        initial={{ opacity: 0, y: -6 }}
                                        animate={{ opacity: 1, y: 0, transition: { type: "spring", stiffness: 420, damping: 36, mass: 0.8 } }}
                                        exit={{ opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.16 } }}
                                    >
                                        <div className="grab" aria-hidden title={dragEnabled ? "Drag to reorder" : "Reordering disabled"} />
                                        <label className="check">
                                            <input
                                                type="checkbox"
                                                checked={selected}
                                                onChange={() => toggleSelect(item.id)}
                                                aria-label={`Select ${item.title}`}
                                            />
                                            <span />
                                        </label>

                                        <div className="main">
                                            <header className="t">
                                                <h3>{item.title}</h3>
                                                <span className={`prio p${item.priority}`}>{priorityTag(item.priority)}</span>
                                            </header>
                                            <p className="note">{item.note}</p>
                                        </div>

                                        <div className="meta">
                                            <time title={new Date(item.createdAt).toLocaleString()}>
                                                {timeAgo(item.createdAt)}
                                            </time>
                                            <button
                                                className="pill"
                                                onClick={() =>
                                                    setItems(a => a.map(x => x.id === item.id ? { ...x, priority: (x.priority + 1) % 3 } : x))
                                                }
                                                title="Cycle priority"
                                            >
                                                Cycle
                                            </button>
                                        </div>
                                    </Reorder.Item>
                                );
                            })}
                        </AnimatePresence>
                    </Reorder.Group>

                    {/* Bulk toolbar */}
                    <AnimatePresence>
                        {selection.size > 0 && (
                            <Styled.BulkToolbar
                                initial={{ y: -12, opacity: 0 }}
                                animate={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 26 } }}
                                exit={{ y: -12, opacity: 0, transition: { duration: 0.18 } }}
                            >
                                <div className="left">
                                    <b>{selection.size}</b> selected
                                </div>
                                <div className="right">
                                    <button className="btn ghost" onClick={clearSelection}>Clear</button>
                                    <button className="btn danger" onClick={removeSelected}>Delete</button>
                                </div>
                            </Styled.BulkToolbar>
                        )}
                    </AnimatePresence>
                </Styled.Stage>
            </Styled.Wrapper>
        </MotionConfig>
    );
}

/* ----- tiny utilities ----- */
function timeAgo(ts) {
    const s = Math.floor((Date.now() - ts) / 1000);
    if (s < 60) return `${s}s ago`;
    const m = Math.floor(s / 60);
    if (m < 60) return `${m}m ago`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h}h ago`;
    const d = Math.floor(h / 24);
    return `${d}d ago`;
}
