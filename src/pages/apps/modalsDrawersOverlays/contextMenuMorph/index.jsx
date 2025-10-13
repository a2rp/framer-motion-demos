import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";

/** Minimal inline icons (no extra deps) */
const DotsIcon = (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden focusable="false" {...p}>
        <circle cx="5" cy="12" r="2" fill="currentColor" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <circle cx="19" cy="12" r="2" fill="currentColor" />
    </svg>
);
const RenameIcon = (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </svg>
);
const DuplicateIcon = (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M16 1H4a2 2 0 00-2 2v12h2V3h12V1zm3 4H8a2 2 0 00-2 2v14h13a2 2 0 002-2V7a2 2 0 00-2-2z" />
    </svg>
);
const ShareIcon = (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M18 16a3 3 0 00-2.24 1.03L8.91 13.7a3.02 3.02 0 000-3.4l6.85-3.33A3 3 0 1015 5a3 3 0 001.24.26l-6.85 3.33a3 3 0 100 7l6.85 3.33A3 3 0 1018 16z" />
    </svg>
);
const MoveIcon = (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M13 5l4 4h-3v6h-2V9H9l4-4zM4 19h16v2H4z" />
    </svg>
);
const DeleteIcon = (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M6 7h12v14H6z" opacity=".4" /><path fill="currentColor" d="M8 7V5h8v2h5v2H3V7h5z" />
    </svg>
);

/** Menu items */
const MENU = [
    { id: "rename", label: "Rename", icon: RenameIcon },
    { id: "duplicate", label: "Duplicate", icon: DuplicateIcon },
    { id: "share", label: "Share…", icon: ShareIcon },
    { id: "move", label: "Move to…", icon: MoveIcon },
    { id: "delete", label: "Delete", icon: DeleteIcon, danger: true },
];

/** Correct menu position so it stays inside viewport */
function clampToViewport(x, y, w, h, pad = 8) {
    const vw = window.innerWidth, vh = window.innerHeight;
    const nx = Math.min(Math.max(pad, x), Math.max(pad, vw - w - pad));
    const ny = Math.min(Math.max(pad, y), Math.max(pad, vh - h - pad));
    return { x: nx, y: ny };
}

export default function ContextMenuMorph() {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false); // avoid first-paint races
    const [anchor, setAnchor] = useState({ x: 0, y: 0 });
    const [hint, setHint] = useState("Right-click the card or use the ⋯ button.");
    const triggerRef = useRef(null);
    const firstItemRef = useRef(null);
    const menuRef = useRef(null);

    // Ensure we mount after paint so shared layout calculates reliably
    useLayoutEffect(() => {
        let r1 = requestAnimationFrame(() => {
            let r2 = requestAnimationFrame(() => setMounted(true));
            (setMounted)._r2 = r2;
        });
        return () => {
            cancelAnimationFrame(r1);
            cancelAnimationFrame((setMounted)._r2 || 0);
        };
    }, []);

    // Close on ESC / click outside
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => (e.key === "Escape") && setOpen(false);
        const onClick = (e) => {
            if (!menuRef.current) return;
            if (!menuRef.current.contains(e.target)) setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        window.addEventListener("mousedown", onClick);
        return () => {
            window.removeEventListener("keydown", onKey);
            window.removeEventListener("mousedown", onClick);
        };
    }, [open]);

    // Focus first menu item when opened (accessibility)
    useEffect(() => {
        if (open) {
            const id = requestAnimationFrame(() => firstItemRef.current?.focus());
            return () => cancelAnimationFrame(id);
        }
    }, [open]);

    function openAtPoint(px, py) {
        // Menu size heuristic (tuned to our styled sizes)
        const menuW = 240, menuH = 44 * MENU.length + 16;
        const { x, y } = clampToViewport(px, py, menuW, menuH, 12);

        // Double RAF ensures layout pass before shared layout runs
        let r1 = requestAnimationFrame(() => {
            let r2 = requestAnimationFrame(() => {
                setAnchor({ x, y });
                setOpen(true);
            });
            (setOpen)._r2 = r2;
        });
        return () => {
            cancelAnimationFrame(r1);
            cancelAnimationFrame((setOpen)._r2 || 0);
        };
    }

    const onTriggerClick = () => {
        const rect = triggerRef.current?.getBoundingClientRect();
        if (!rect) return;
        openAtPoint(rect.left + rect.width, rect.top + rect.height);
    };

    const onCardContextMenu = (e) => {
        e.preventDefault();
        openAtPoint(e.clientX, e.clientY);
        setHint("Nice. You can also use the ⋯ button.");
    };

    const onSelect = (id) => {
        setOpen(false);
        // lightweight feedback
        setHint(`Action: ${MENU.find((m) => m.id === id)?.label}`);
    };

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Context Menu Morph</h1>
                        <p className="muted">
                            A tiny trigger “chip” morphs into a full menu via <code>layoutId</code>.
                            Right-click the card or use the button.
                        </p>
                    </div>

                    <button
                        ref={triggerRef}
                        className="triggerBtn"
                        onClick={onTriggerClick}
                        aria-haspopup="menu"
                        aria-expanded={open}
                        title="Open menu"
                    >
                        {/* The morphing surface (shared) */}
                        {mounted && (
                            <motion.span layoutId="cm-bubble" className="chipSurface" />
                        )}
                        <span className="dots"><DotsIcon /></span>
                    </button>
                </Styled.Header>

                <Styled.Stage>
                    <div className="card" onContextMenu={onCardContextMenu} tabIndex={0} aria-label="Demo card">
                        <div className="cardHead">
                            <h3>Project Spec</h3>
                            <p className="kicker">Right-click anywhere on this card</p>
                        </div>
                        <p className="body">
                            Context menus shine for quick actions in dense UIs. Morphing the trigger into the
                            menu gives a sense of continuity and place.
                        </p>
                        <ul className="meta">
                            <li>Lightweight • No portal needed</li>
                            <li>Escape to close • Click outside to dismiss</li>
                            <li>Keyboard friendly • Arrow/Tab to navigate</li>
                        </ul>
                    </div>

                    <p className="hint">{hint}</p>
                </Styled.Stage>

                {/* Overlay + Menu */}
                <AnimatePresence>
                    {open && mounted && (
                        <Styled.Overlay                 // ⬅️ use styled component
                            as={motion.div}               // render it as a motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="backdrop"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.06 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.18 }}
                                aria-hidden="true"
                            />

                            <div className="menuAnchor" style={{ left: anchor.x, top: anchor.y }}>
                                <motion.div
                                    layoutId="cm-bubble"
                                    className="menuSurface"
                                    ref={menuRef}
                                    initial={false}
                                >
                                    <nav aria-label="Context menu">
                                        {MENU.map((item, i) => {
                                            const Icon = item.icon;
                                            return (
                                                <motion.button
                                                    key={item.id}
                                                    ref={i === 0 ? firstItemRef : undefined}
                                                    className={`menuItem ${item.danger ? "danger" : ""}`}
                                                    role="menuitem"
                                                    onClick={() => onSelect(item.id)}
                                                    initial={{ opacity: 0, y: 6 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 6 }}
                                                    transition={{ duration: 0.18, delay: 0.04 + i * 0.03 }}
                                                >
                                                    <span className="ico"><Icon /></span>
                                                    <span className="label">{item.label}</span>
                                                    <span className="kbd">
                                                        {item.id === "delete" ? "⌫" : item.id === "rename" ? "F2" : ""}
                                                    </span>
                                                </motion.button>
                                            );
                                        })}
                                    </nav>
                                </motion.div>
                            </div>
                        </Styled.Overlay>
                    )}
                </AnimatePresence>

            </Styled.Wrapper>
        </MotionConfig>
    );
}
