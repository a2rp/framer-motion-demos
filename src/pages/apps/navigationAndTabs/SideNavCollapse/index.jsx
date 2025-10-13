import { useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";
import {
    FiHome, FiCompass, FiFolder, FiStar, FiSettings,
    FiChevronLeft, FiChevronRight,
} from "react-icons/fi";

/** Demo items */
const NAV = [
    { id: "home", label: "Home", icon: FiHome, badge: null },
    { id: "browse", label: "Browse", icon: FiCompass, badge: "New" },
    { id: "projects", label: "Projects", icon: FiFolder, badge: 12 },
    { id: "saved", label: "Saved", icon: FiStar, badge: null },
];

const KEY_COLLAPSED = "sideNav.collapsed";
const KEY_ACTIVE = "sideNav.active";
const W_EXPANDED = 260;
const W_COLLAPSED = 72;

export default function SideNavCollapse() {
    /* ---------- persisted state ---------- */
    const [collapsed, setCollapsed] = useState(() => {
        try { return JSON.parse(localStorage.getItem(KEY_COLLAPSED) ?? "false"); }
        catch { return false; }
    });
    const [active, setActive] = useState(() => {
        try {
            const id = localStorage.getItem(KEY_ACTIVE);
            return NAV.some(n => n.id === id) ? id : "home";
        } catch { return "home"; }
    });

    /* ---------- hover-peek with click lock ---------- */
    const [hoveringNav, setHoveringNav] = useState(false);
    const [peekLocked, setPeekLocked] = useState(false); // prevents hover-peek immediately after click
    const expanded = !collapsed || (hoveringNav && !peekLocked);

    /* ---------- tooltip (fixed-position so it won't be clipped) ---------- */
    const [tip, setTip] = useState({ show: false, x: 0, y: 0, label: "" });

    /* ---------- small bits ---------- */
    const [showSettings, setShowSettings] = useState(false);

    useEffect(() => { try { localStorage.setItem(KEY_COLLAPSED, JSON.stringify(collapsed)); } catch { } }, [collapsed]);
    useEffect(() => { try { localStorage.setItem(KEY_ACTIVE, active); } catch { } }, [active]);

    /* ---------- keyboard ---------- */
    const listRef = useRef(null);
    useEffect(() => {
        const onKey = (e) => {
            const metaB = (e.ctrlKey || e.metaKey) && (e.key === "b" || e.key === "B");
            if (metaB) {
                e.preventDefault();
                setCollapsed(v => !v);
                setPeekLocked(true);
                return;
            }
            if (!listRef.current?.contains(document.activeElement)) return;
            const idx = NAV.findIndex(n => n.id === active);
            if (e.key === "ArrowDown") { e.preventDefault(); setActive(NAV[(idx + 1) % NAV.length].id); }
            if (e.key === "ArrowUp") { e.preventDefault(); setActive(NAV[(idx - 1 + NAV.length) % NAV.length].id); }
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); /* demo: no routing; just active */ }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [active]);

    /* ---------- actions ---------- */
    const toggleCollapsed = () => { setCollapsed(v => !v); setPeekLocked(true); };

    const showTip = (label, el) => {
        if (expanded) return; // only show when collapsed
        const r = el.getBoundingClientRect();
        setTip({
            show: true,
            x: r.right + 8,
            y: r.top + r.height / 2,
            label,
        });
    };
    const hideTip = () => setTip((t) => ({ ...t, show: false }));

    return (
        <MotionConfig reducedMotion="never">
            {/* Drive the GRID track width here → sidebar truly collapses/expands */}
            <Styled.Shell style={{ gridTemplateColumns: `${expanded ? W_EXPANDED : W_COLLAPSED}px 1fr` }}>
                {/* Side panel */}
                <aside
                    className={`side ${expanded ? "expanded" : "collapsed"}`}
                    onMouseEnter={() => setHoveringNav(true)}
                    onMouseLeave={() => { setHoveringNav(false); setPeekLocked(false); hideTip(); }}
                    aria-expanded={expanded}
                >
                    <div className="head">
                        <motion.div className="brand" layout="position">
                            <div className="logo" aria-hidden />
                            <AnimatePresence initial={false} mode="wait">
                                {expanded && (
                                    <motion.span
                                        key="brand-text"
                                        className="brandText"
                                        initial={{ opacity: 0, x: -6 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -6 }}
                                        transition={{ duration: 0.18 }}
                                    >
                                        Motion Lab
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        <button
                            className="collapseBtn"
                            onClick={toggleCollapsed}
                            aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
                            title={`${expanded ? "Collapse" : "Expand"} (Ctrl/Cmd+B)`}
                        >
                            {expanded ? <FiChevronLeft /> : <FiChevronRight />}
                        </button>
                    </div>

                    <nav className="nav" aria-label="Primary">
                        <ul ref={listRef}>
                            <AnimatePresence initial={false}>
                                {NAV.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = active === item.id;
                                    return (
                                        <li key={item.id}>
                                            <button
                                                className={`navItem ${isActive ? "active" : ""}`}
                                                onClick={() => setActive(item.id)}
                                                onFocus={(e) => showTip(item.label, e.currentTarget)}
                                                onBlur={hideTip}
                                                onMouseEnter={(e) => showTip(item.label, e.currentTarget)}
                                                onMouseLeave={hideTip}
                                                aria-current={isActive ? "page" : undefined}
                                            >
                                                {/* Active pill glides with shared layoutId */}
                                                {isActive && (
                                                    <motion.span
                                                        layoutId="nav-active"
                                                        className="activePill"
                                                        transition={{ type: "spring", stiffness: 400, damping: 36, mass: 0.6 }}
                                                        aria-hidden="true"
                                                    />
                                                )}

                                                <span className="icon"><Icon size={18} /></span>

                                                <AnimatePresence initial={false} mode="popLayout">
                                                    {expanded && (
                                                        <motion.span
                                                            key="label"
                                                            className="label"
                                                            initial={{ opacity: 0, x: -4 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -4 }}
                                                            transition={{ duration: 0.16 }}
                                                        >
                                                            {item.label}
                                                        </motion.span>
                                                    )}
                                                </AnimatePresence>

                                                <AnimatePresence initial={false} mode="popLayout">
                                                    {expanded && item.badge != null && (
                                                        <motion.span
                                                            key="badge"
                                                            className="badge"
                                                            initial={{ scale: 0.8, opacity: 0 }}
                                                            animate={{ scale: 1, opacity: 1 }}
                                                            exit={{ scale: 0.8, opacity: 0 }}
                                                            transition={{ duration: 0.18 }}
                                                        >
                                                            {String(item.badge)}
                                                        </motion.span>
                                                    )}
                                                </AnimatePresence>
                                            </button>
                                        </li>
                                    );
                                })}
                            </AnimatePresence>
                        </ul>
                    </nav>

                    <div className="foot">
                        <button
                            className="settings"
                            onClick={() => setShowSettings(true)}
                            aria-haspopup="dialog"
                            aria-expanded={showSettings}
                        >
                            <span className="icon"><FiSettings /></span>
                            <AnimatePresence initial={false}>
                                {expanded && (
                                    <motion.span
                                        key="settings-label"
                                        initial={{ opacity: 0, x: -4 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -4 }}
                                        transition={{ duration: 0.16 }}
                                    >
                                        Settings
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </aside>

                {/* Main area */}
                <Styled.Main>
                    <header className="pageHead">
                        <h1>Side-Nav Collapse</h1>
                        <p className="muted">
                            Click chevron or press <kbd>Ctrl/Cmd + B</kbd>. Grid track drives width, so the whole panel collapses.
                        </p>
                    </header>

                    <section className="content">
                        <p>Hover-peek works when collapsed; a click “locks” peek until the mouse leaves. Tooltips float so they aren’t clipped.</p>
                    </section>
                </Styled.Main>

                {/* Floating tooltip (fixed) */}
                <AnimatePresence>
                    {!expanded && tip.show && (
                        <motion.div
                            className="tooltipBase fixedTip"
                            style={{ top: tip.y, left: tip.x }}
                            initial={{ opacity: 0, x: 6, scale: 0.98 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 6, scale: 0.98 }}
                            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                            role="tooltip"
                        >
                            {tip.label}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Self-made modal */}
                <Modal open={showSettings} onClose={() => setShowSettings(false)} />
            </Styled.Shell>
        </MotionConfig>
    );
}

/* ---------- tiny, self-made modal ---------- */
function Modal({ open, onClose }) {
    const first = useRef(null);

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => { if (e.key === "Escape") onClose?.(); };
        window.addEventListener("keydown", onKey);
        const id = requestAnimationFrame(() => first.current?.focus());
        return () => { window.removeEventListener("keydown", onKey); cancelAnimationFrame(id); };
    }, [open, onClose]);

    return (
        <AnimatePresence>
            {open && (
                <div className="modalRoot" role="dialog" aria-modal="true" aria-label="Settings">
                    <motion.div
                        className="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="dialog"
                        initial={{ opacity: 0, y: 16, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    >
                        <header className="dHead"><h3>Sidebar Settings</h3></header>
                        <div className="dBody">
                            <label className="row"><input ref={first} type="checkbox" defaultChecked /> Reduce icon wobble</label>
                            <label className="row"><input type="checkbox" defaultChecked /> Show badges</label>
                            <label className="row"><input type="checkbox" /> Compact density</label>
                        </div>
                        <footer className="dFoot">
                            <button className="btn ghost" onClick={onClose}>Close</button>
                            <button className="btn primary" onClick={onClose}>Save</button>
                        </footer>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
