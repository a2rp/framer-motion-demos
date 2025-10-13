import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";

/** Small focus-utils */
const FOCUSABLE = [
    "a[href]",
    "button:not([disabled])",
    "textarea:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
].join(",");

function useScrollLock(locked) {
    useLayoutEffect(() => {
        const root = document.documentElement;
        const prev = root.style.overflow;
        if (locked) root.style.overflow = "hidden";
        return () => { root.style.overflow = prev; };
    }, [locked]);
}

function trapTabKey(e, container) {
    if (e.key !== "Tab") return;
    const nodes = container.querySelectorAll(FOCUSABLE);
    if (!nodes.length) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    const active = document.activeElement;
    if (e.shiftKey && (active === first || active === container)) {
        e.preventDefault(); last.focus(); return;
    }
    if (!e.shiftKey && (active === last)) {
        e.preventDefault(); first.focus(); return;
    }
}

/** Frosted modal component */
function FrostedModal({ open, onClose, title, children, blur = 12 }) {
    const overlayRef = useRef(null);
    const closeBtnRef = useRef(null);

    // accessibility ids (simple & static for demo)
    const headingId = "fgm-heading";
    const descId = "fgm-desc";

    useScrollLock(open);

    // Key handlers (Esc + Tab trap)
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === "Escape") { e.stopPropagation(); onClose?.(); }
            else if (e.key === "Tab") { trapTabKey(e, overlayRef.current); }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    // First focus when opened
    useEffect(() => {
        if (!open) return;
        const id1 = requestAnimationFrame(() => {
            const id2 = requestAnimationFrame(() => {
                // two RAFs to avoid first-paint races (seen earlier)
                (closeBtnRef.current || overlayRef.current)?.focus();
            });
            (closeBtnRef.current || overlayRef.current)._r2 = id2;
        });
        return () => {
            cancelAnimationFrame(id1);
            cancelAnimationFrame((closeBtnRef.current || overlayRef.current)?._r2 || 0);
        };
    }, [open]);

    // Variants
    const overlayAnim = useMemo(() => ({
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.22 } },
        exit: { opacity: 0, transition: { duration: 0.18 } },
    }), []);
    const dialogAnim = useMemo(() => ({
        initial: { opacity: 0, y: 14, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 420, damping: 36, mass: 0.85 } },
        exit: { opacity: 0, y: 10, scale: 0.985, transition: { duration: 0.18 } },
    }), []);

    return (
        <AnimatePresence>
            {open && (
                <Styled.Overlay
                    as={motion.div}
                    key="overlay"
                    {...overlayAnim}
                    ref={overlayRef}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={headingId}
                    aria-describedby={descId}
                    tabIndex={-1}
                    style={{ ["--blur"]: `${blur}px` }}
                    onMouseDown={(e) => {
                        // click backdrop to close
                        if (e.target === e.currentTarget) onClose?.();
                    }}
                >
                    {/* Frosted dialog card */}
                    <Styled.Dialog as={motion.div} {...dialogAnim}>
                        <header className="head">
                            <h2 id={headingId}>{title}</h2>
                            <button ref={closeBtnRef} className="iconBtn" onClick={onClose} aria-label="Close modal">
                                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M18.3 5.71L12 12.01l-6.29-6.3-1.42 1.42 6.3 6.29-6.3 6.29 1.42 1.42 6.29-6.3 6.29 6.3 1.42-1.42-6.3-6.29 6.3-6.29z" /></svg>
                            </button>
                        </header>

                        <div id={descId} className="body">
                            {children}
                        </div>

                        <footer className="actions">
                            <button className="btn ghost" onClick={onClose}>Cancel</button>
                            <button className="btn primary" onClick={onClose}>Confirm</button>
                        </footer>
                    </Styled.Dialog>
                </Styled.Overlay>
            )}
        </AnimatePresence>
    );
}

/** Demo page */
export default function FrostedGlassModal() {
    const [open, setOpen] = useState(false);
    const [blur, setBlur] = useState(12);

    return (
        // Demo: show motion regardless of OS setting (consistent with other pages)
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper aria-hidden={open ? "true" : "false"}>
                <Styled.Header>
                    <div className="heading">
                        <h1>Frosted Glass Modal</h1>
                        <p className="muted">Backdrop blur + soft, springy dialog. ESC / backdrop click to close. Focus trapped. Scroll locked.</p>
                    </div>
                    <div className="controls" role="toolbar" aria-label="Modal controls">
                        <label className="ctrl">
                            <span>Blur</span>
                            <input type="range" min="6" max="20" step="1" value={blur} onChange={(e) => setBlur(parseInt(e.target.value, 10))} />
                            <em>{blur}px</em>
                        </label>
                        <button className="btn primary" onClick={() => setOpen(true)}>Open Modal</button>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <div className="content">
                        <p>
                            This area represents your app. When the modal opens, background scroll locks and focus is captured within the dialog.
                            Try pressing <kbd>Esc</kbd> or clicking outside the card. Use <kbd>Tab</kbd>/<kbd>Shift+Tab</kbd> to cycle focus.
                        </p>
                    </div>
                </Styled.Stage>
            </Styled.Wrapper>

            {/* Self-made modal (not a portal, but fixed to viewport) */}
            <FrostedModal
                open={open}
                onClose={() => setOpen(false)}
                title="Enable premium mode?"
                blur={blur}
            >
                <p>
                    This is a frosted card floating above a blurred backdrop. It respects your design tokens and prefers transform-only animations for performance.
                </p>
                <ul>
                    <li>Backdrop blur with graceful fallback</li>
                    <li>Spring-tuned entrance/exit</li>
                    <li>Accessible: <code>role="dialog"</code>, labelled/ described, focus trap</li>
                </ul>
            </FrostedModal>
        </MotionConfig>
    );
}
