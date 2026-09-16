import { useEffect, useMemo, useRef, useState, useId } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/* ------------------ Commands ------------------ */
const COMMANDS = [
    // Quick links
    { id: "home", group: "Quick links", title: "Go to Home", subtitle: "Project landing", path: "/home", shortcut: ["G", "H"] },
    { id: "about", group: "Quick links", title: "Open About", subtitle: "Author & project notes", path: "/about", shortcut: ["G", "A"] },

    // Animations - Page / Route
    { id: "curtain", group: "Animations", title: "Curtain Reveal", subtitle: "Wipe overlay (transform/clip-path)", path: "/curtain-reveal" },
    { id: "book", group: "Animations", title: "Book-flip", subtitle: "Perspective rotateY", path: "/book-flip" },
    { id: "stack", group: "Animations", title: "Slide-over Stack", subtitle: "New page pushes previous", path: "/slide-over-stack" },
    { id: "para", group: "Animations", title: "Parallax Push", subtitle: "Foreground slides, bg drifts", path: "/parallax-push" },
    { id: "masonry", group: "Animations", title: "Masonry Shuffle", subtitle: "Variable-height grid reflow", path: "/masonry-shuffle" },

    // Feedback / System
    { id: "copy", group: "Feedback", title: "Copy Flash", subtitle: "Row flash + pulse + check", path: "/copy-confirmation-flash" },

    // Actions (no route)
    { id: "theme", group: "Actions", title: "Toggle Theme", subtitle: "Light ↔ Dark", action: "toggleTheme", shortcut: ["T"] },
];

/* ------------------ Fuzzy-ish filter ------------------ */
const normalize = (s = "") => s.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
const score = (cmd, q) => {
    if (!q) return 1;
    const hay = normalize(`${cmd.title} ${cmd.subtitle} ${cmd.group}`);
    const qq = normalize(q);
    if (hay.startsWith(qq)) return 20;
    if (hay.includes(qq)) return 10;
    const tokens = qq.split(/\s+/).filter(Boolean);
    return tokens.every((t) => hay.includes(t)) ? 5 : -1;
};
const searchCommands = (all, q) => {
    const ranked = all
        .map((c) => ({ c, s: score(c, q) }))
        .filter((r) => r.s >= 0)
        .sort((a, b) => b.s - a.s || a.c.title.localeCompare(b.c.title))
        .map((r) => r.c);

    const groups = [];
    for (const cmd of ranked) {
        let g = groups.find((x) => x.group === cmd.group);
        if (!g) { g = { group: cmd.group, items: [] }; groups.push(g); }
        g.items.push(cmd);
    }
    return groups;
};

/* ------------------ Match highlight ------------------ */
function splitHighlight(text, q) {
    if (!q) return [{ t: text, m: false }];
    const hay = text;
    const nHay = normalize(hay);
    const nQ = normalize(q);
    const i = nHay.indexOf(nQ);
    if (i < 0) return [{ t: text, m: false }];
    const a = hay.slice(0, i);
    const b = hay.slice(i, i + q.length);
    const c = hay.slice(i + q.length);
    return [
        ...(a ? [{ t: a, m: false }] : []),
        ...(b ? [{ t: b, m: true }] : []),
        ...(c ? splitHighlight(c, "") : []),
    ];
}

/* ------------------ Component ------------------ */
export default function CommandPaletteZoomIn() {
    const navigate = useNavigate();
    const dialogId = useId();
    const inputRef = useRef(null);
    const listRef = useRef(null);
    const lastFocusRef = useRef(null);

    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);

    // Open/Close helpers
    const openPalette = () => {
        lastFocusRef.current = document.activeElement;
        setOpen(true);
        setQuery("");
        setActiveIndex(0);
    };
    const closePalette = () => {
        setOpen(false);
        requestAnimationFrame(() => lastFocusRef.current?.focus?.());
    };

    // Body scroll lock + focus on input when open
    useEffect(() => {
        if (!open) return;
        const prev = document.documentElement.style.overflow;
        document.documentElement.style.overflow = "hidden";
        const id = requestAnimationFrame(() => inputRef.current?.focus());
        return () => {
            cancelAnimationFrame(id);
            document.documentElement.style.overflow = prev;
        };
    }, [open]);

    // Global shortcuts
    useEffect(() => {
        const onKey = (e) => {
            const metaK = (e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K");
            if (metaK) {
                e.preventDefault();
                open ? closePalette() : openPalette();
                return;
            }
            if (e.key === "/" && !open) {
                e.preventDefault();
                openPalette();
                return;
            }
            if (e.key === "Escape" && open) {
                e.preventDefault();
                closePalette();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    const groups = useMemo(() => searchCommands(COMMANDS, query), [query]);
    const flatItems = useMemo(() => groups.flatMap((g) => g.items), [groups]);

    // Reset cursor on new query
    useEffect(() => setActiveIndex(0), [query]);

    // Keep active option visible (no jump)
    useEffect(() => {
        const list = listRef.current;
        const id = flatItems[activeIndex]?.id;
        if (!list || !id) return;
        const el = list.querySelector(`[data-id="${id}"]`);
        if (!el) return;
        const { top: ct, bottom: cb } = list.getBoundingClientRect();
        const { top: et, bottom: eb } = el.getBoundingClientRect();
        if (et < ct) el.scrollIntoView({ block: "nearest" });
        else if (eb > cb) el.scrollIntoView({ block: "nearest" });
    }, [activeIndex, flatItems]);

    const runCommand = (cmd) => {
        if (cmd.action === "toggleTheme") {
            const root = document.documentElement;
            const next = root.classList.toggle("light") ? "light" : "dark";
            try { localStorage.setItem("prefers-theme", next); } catch { }
            closePalette();
            return;
        }
        if (cmd.path) {
            navigate(cmd.path);
            closePalette();
        }
    };

    const onKeyDownList = (e) => {
        if (!open) return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex((i) => Math.min(i + 1, flatItems.length - 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex((i) => Math.max(i - 1, 0));
        } else if (e.key === "PageDown") {
            e.preventDefault();
            setActiveIndex((i) => Math.min(i + 6, flatItems.length - 1));
        } else if (e.key === "PageUp") {
            e.preventDefault();
            setActiveIndex((i) => Math.max(i - 6, 0));
        } else if (e.key === "Home") {
            e.preventDefault();
            setActiveIndex(0);
        } else if (e.key === "End") {
            e.preventDefault();
            setActiveIndex(flatItems.length - 1);
        } else if (e.key === "Enter") {
            e.preventDefault();
            const cmd = flatItems[activeIndex];
            if (cmd) runCommand(cmd);
        }
    };

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Command Palette - Zoom-in</h1>
                        <p className="muted">
                            Press <kbd className="kbd">Ctrl</kbd>/<kbd className="kbd">⌘</kbd>+<kbd className="kbd">K</kbd> or <kbd className="kbd">/</kbd> to open. Type to filter.
                        </p>
                    </div>
                    <button className="openBtn" onClick={openPalette} title="Open palette (Ctrl/Cmd+K)">Open Palette</button>
                </Styled.Header>

                <Styled.Stage>
                    <div className="preview">
                        <span className="hint">Keyboard first. This palette is fast.</span>
                    </div>
                </Styled.Stage>

                {/* Modal */}
                <AnimatePresence>
                    {open && (
                        <>
                            <Styled.Backdrop
                                key="bk"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={closePalette}
                                aria-hidden
                            />

                            <Styled.Dialog
                                key="dlg"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby={dialogId}
                                initial={{ opacity: 0, scale: 0.96, y: -8 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98, y: -4 }}
                                transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.7 }}
                                onKeyDown={onKeyDownList}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="cp-card">
                                    <div className="cp-search">
                                        <svg className="icon" viewBox="0 0 24 24" aria-hidden>
                                            <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6 6 0 1016 10a6 6 0 00-1.07 3.42l.27.28v.79l5 5 1.5-1.5-5-5zM10 14a4 4 0 110-8 4 4 0 010 8z" />
                                        </svg>
                                        <input
                                            ref={inputRef}
                                            type="text"
                                            placeholder="Search commands…"
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                            aria-autocomplete="list"
                                            aria-controls="cp-list"
                                            aria-activedescendant={flatItems[activeIndex]?.id || ""}
                                        />
                                        <div className="kbdWrap"><span className="kbd">Esc</span></div>
                                    </div>

                                    <div className="cp-results" id="cp-list" role="listbox" ref={listRef}>
                                        {flatItems.length === 0 && (
                                            <div className="empty">No results. Try “curtain”, “stack”, or “theme”.</div>
                                        )}

                                        {groups.map((g) => (
                                            <div className="group" key={g.group}>
                                                <div className="groupLabel">{g.group}</div>

                                                <motion.ul
                                                    className="items"
                                                    initial="hidden"
                                                    animate="show"
                                                    variants={{
                                                        hidden: {},
                                                        show: { transition: { staggerChildren: 0.035, delayChildren: 0.02 } },
                                                    }}
                                                >
                                                    {g.items.map((cmd) => {
                                                        const i = flatItems.indexOf(cmd);
                                                        const active = i === activeIndex;
                                                        return (
                                                            <motion.li
                                                                role="option"
                                                                aria-selected={active}
                                                                key={cmd.id}
                                                                data-id={cmd.id}
                                                                className={`item ${active ? "active" : ""}`}
                                                                onMouseMove={() => setActiveIndex(i)}
                                                                onClick={() => runCommand(cmd)}
                                                                tabIndex={-1}
                                                                variants={{
                                                                    hidden: { opacity: 0, y: 4 },
                                                                    show: { opacity: 1, y: 0, transition: { duration: 0.18 } },
                                                                }}
                                                            >
                                                                {active && <motion.div layoutId="cpHighlight" className="highlight" />}

                                                                <div className="meta">
                                                                    <div className="title">
                                                                        {splitHighlight(cmd.title, query).map((s, idx) =>
                                                                            s.m ? <mark key={idx}>{s.t}</mark> : <span key={idx}>{s.t}</span>
                                                                        )}
                                                                    </div>
                                                                    <div className="sub">
                                                                        {splitHighlight(cmd.subtitle, query).map((s, idx) =>
                                                                            s.m ? <mark key={idx}>{s.t}</mark> : <span key={idx}>{s.t}</span>
                                                                        )}
                                                                    </div>
                                                                </div>

                                                                {cmd.shortcut && (
                                                                    <div className="shortcut">
                                                                        {cmd.shortcut.map((k) => (
                                                                            <span className="kbd" key={k}>{k}</span>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </motion.li>
                                                        );
                                                    })}
                                                </motion.ul>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="cp-foot">
                                        <div className="row">
                                            <span><b>↑/↓</b> Move</span>
                                            <span><b>Enter</b> Run</span>
                                            <span><b>Esc</b> Close</span>
                                        </div>
                                    </div>
                                </div>
                            </Styled.Dialog>
                        </>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
