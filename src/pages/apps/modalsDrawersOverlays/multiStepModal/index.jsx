import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";
import { makePages } from "../../_shared/pages";

/* ---------- Step templates (will be padded to ≥5) ---------- */
const TEMPLATES = [
    {
        key: "s1",
        title: "Basics",
        body: "Tell us a little about yourself. This is a quick, low-friction intro.",
        fields: [
            { key: "name", label: "Full name", placeholder: "Jane Doe" },
            { key: "email", label: "Email", placeholder: "jane@acme.com" },
        ],
    },
    {
        key: "s2",
        title: "Details",
        body: "What are you exploring today? Pick options that match your vibe.",
        fields: [
            { key: "role", label: "Role", placeholder: "Student / Developer / Designer" },
            { key: "topic", label: "Topic of interest", placeholder: "Animations, UX motion..." },
        ],
    },
    {
        key: "s3",
        title: "Preferences",
        body: "We’ll tune the experience to your preferences-nothing creepy.",
        fields: [
            { key: "theme", label: "Theme", placeholder: "System / Light / Dark" },
            { key: "updates", label: "Updates cadence", placeholder: "Weekly / Monthly" },
        ],
    },
    {
        key: "s4",
        title: "Review",
        body: "Double-check your info. You can always tweak later.",
        fields: [],
    },
    {
        key: "s5",
        title: "Confirm",
        body: "Looks good? We’ll finalize and set things up.",
        fields: [],
    },
];
const STEPS = makePages(TEMPLATES, 5);

/* ---------- tiny helpers ---------- */
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));

/* ---------- Modal (self-made) ---------- */
function Modal({ open, onClose, initialFocusRef, children, labelledBy }) {
    // scroll lock
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => (document.body.style.overflow = prev);
    }, [open]);

    // focus trap + restore focus
    const restoreRef = useRef(null);
    useEffect(() => {
        if (!open) return;
        restoreRef.current = document.activeElement;
        const el = initialFocusRef?.current;
        el?.focus?.();
        return () => {
            restoreRef.current && restoreRef.current.focus?.();
        };
    }, [open, initialFocusRef]);

    const onKeyDown = (e) => {
        if (e.key === "Escape") {
            e.stopPropagation();
            onClose?.();
            return;
        }
        if (e.key === "Tab") {
            // focus trap
            const root = e.currentTarget;
            const focusables = root.querySelectorAll(
                'a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])'
            );
            const list = Array.from(focusables).filter((n) => !n.hasAttribute("disabled"));
            if (!list.length) return;
            const first = list[0];
            const last = list[list.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault(); last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault(); first.focus();
            }
        }
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="modalRoot"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={labelledBy}
                    onKeyDown={onKeyDown}
                    initial={false}
                >
                    {/* Backdrop */}
                    <motion.button
                        className="backdrop"
                        onClick={onClose}
                        aria-label="Close modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Panel */}
                    <motion.div
                        className="panel"
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 320, damping: 30 } }}
                        exit={{ opacity: 0, y: 12, scale: 0.98, transition: { duration: 0.18 } }}
                    >
                        {/* Autofocus anchor */}
                        <div tabIndex={-1} ref={initialFocusRef} className="focusAnchor" />
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ---------- Demo: Multi-Step Modal ---------- */
export default function MultiStepModal() {
    const [open, setOpen] = useState(false);
    const [idx, setIdx] = useState(0);
    const [dir, setDir] = useState(1); // 1 forward, -1 back
    const [done, setDone] = useState(false);

    // pretend form data (kept simple)
    const [form, setForm] = useState({});
    const cur = STEPS[idx];
    const total = STEPS.length;

    const firstFocusRef = useRef(null);
    const canPrev = idx > 0;
    const canNext = idx < total - 1;
    const pct = useMemo(() => (idx + 1) / total, [idx, total]);

    const goPrev = () => { if (!canPrev) return; setDir(-1); setIdx((i) => clamp(i - 1, 0, total - 1)); };
    const goNext = () => { if (!canNext) return; setDir(1); setIdx((i) => clamp(i + 1, 0, total - 1)); };

    const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    const close = () => { setOpen(false); setTimeout(() => { setIdx(0); setDone(false); }, 220); };

    const onFinish = () => {
        // mini success banner then close
        setDone(true);
        setTimeout(() => close(), 800);
    };

    // Enter → next, Shift+Enter → prev (inside modal)
    const keyNav = (e) => {
        if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); canNext ? goNext() : onFinish(); }
        if (e.key === "Enter" && e.shiftKey) { e.preventDefault(); goPrev(); }
    };

    return (
        // Showcase motion even with reduced-motion enabled at OS level
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Multi-Step Modal</h1>
                        <p className="muted">
                            Slide between steps with springs, animated progress bar, ESC/overlay close, focus-trap, and a tidy success.
                        </p>
                    </div>

                    <button className="btn primary" onClick={() => setOpen(true)}>Open modal</button>
                </Styled.Header>

                <Styled.Placeholder>
                    <p>This page demonstrates a self-made modal-no external dialog libs.</p>
                    <ul>
                        <li>At least five steps (auto-padded).</li>
                        <li>Framer Motion on backdrop, panel, progress, and step transitions.</li>
                        <li>Accessibility: ESC to close, overlay click, focus trap, labelled header.</li>
                    </ul>
                </Styled.Placeholder>

                <Modal open={open} onClose={close} initialFocusRef={firstFocusRef} labelledBy="msm-title">
                    <Styled.ModalHead>
                        <div className="titleArea">
                            <h2 id="msm-title">{cur.title}</h2>
                            <p className="muted">{cur.body}</p>
                        </div>

                        <button className="iconBtn" onClick={close} aria-label="Close">
                            <span aria-hidden>✕</span>
                        </button>
                    </Styled.ModalHead>

                    {/* Progress bar */}
                    <Styled.Progress>
                        <motion.div className="bar" style={{ scaleX: pct }} />
                        <div className="dots" aria-hidden>
                            {STEPS.map((_, i) => (
                                <span key={i} className={`dot ${i <= idx ? "active" : ""}`} />
                            ))}
                        </div>
                    </Styled.Progress>

                    {/* Step content */}
                    <Styled.StepArea onKeyDown={keyNav}>
                        <div className="viewport">
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={cur.id}
                                    className="step"
                                    initial={{ x: dir > 0 ? 20 : -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 28 } }}
                                    exit={{ x: dir > 0 ? -16 : 16, opacity: 0, transition: { duration: 0.18 } }}
                                >
                                    {cur.fields?.length ? (
                                        <div className="form">
                                            {cur.fields.map((f) => (
                                                <label key={f.key} className="field">
                                                    <span>{f.label}</span>
                                                    <input
                                                        type="text"
                                                        value={form[f.key] || ""}
                                                        onChange={onChange(f.key)}
                                                        placeholder={f.placeholder}
                                                    />
                                                </label>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="review">
                                            <ul>
                                                {Object.entries(form).length ? (
                                                    Object.entries(form).map(([k, v]) => <li key={k}><b>{k}:</b> {v || "-"}</li>)
                                                ) : (
                                                    <li>No data yet-previous steps were optional.</li>
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </Styled.StepArea>

                    {/* Footer actions */}
                    <Styled.Footer>
                        {/* Success banner sits ABOVE the buttons now */}
                        <AnimatePresence>
                            {done && (
                                <motion.div
                                    className="success"
                                    initial={{ y: 8, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 8, opacity: 0 }}
                                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    role="status"
                                    aria-live="polite"
                                >
                                    <span className="tick">✓</span> Saved - closing…
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="actions">
                            <button className="btn ghost" onClick={goPrev} disabled={!canPrev}>← Back</button>
                            <div className="spacer" />
                            {idx < total - 1 ? (
                                <button className="btn primary" onClick={goNext}>Next →</button>
                            ) : (
                                <button className="btn success" onClick={onFinish}>Finish ✓</button>
                            )}
                        </div>
                    </Styled.Footer>

                    {/* Success banner */}
                    <AnimatePresence>
                        {done && (
                            <motion.div
                                className="success"
                                initial={{ y: -8, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -8, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                aria-live="polite"
                            >
                                <span className="tick">✓</span> Saved - closing…
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Modal>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
