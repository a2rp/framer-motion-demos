import { useMemo, useRef, useState, useEffect } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";

// --- tiny helpers
const uid = (() => { let i = 0; return () => `nr-${++i}`; })();
const rand = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
const names = ["Riya", "Kabir", "Aanya", "Imran", "Meera", "Dev", "Zoya", "Vivaan", "Ishaan", "Tara"];
const pick = (arr) => arr[rand(0, arr.length - 1)];

// make an initial list with 8 rows
function seedRows(n = 8) {
    return Array.from({ length: n }, (_, i) => ({
        id: uid(),
        name: `${pick(names)} ${rand(1, 99)}`,
        qty: rand(1, 8),
        amount: rand(150, 2500),
    }));
}

export default function NewRowHighlight() {
    const [rows, setRows] = useState(() => seedRows(8));
    const [lastNewId, setLastNewId] = useState(null);
    const [insertAtTop, setInsertAtTop] = useState(true);

    // confirm modal state
    const [confirmOpen, setConfirmOpen] = useState(false);
    const clearBtnRef = useRef(null);

    const listRef = useRef(null);
    const total = useMemo(() => rows.reduce((s, r) => s + r.amount, 0), [rows]);

    const addRow = () => {
        const row = {
            id: uid(),
            name: `${pick(names)} ${rand(1, 99)}`,
            qty: rand(1, 8),
            amount: rand(150, 2500),
            isNew: true,
        };

        setRows((prev) => (insertAtTop ? [row, ...prev] : [...prev, row]));
        setLastNewId(row.id);

        requestAnimationFrame(() => {
            const el = listRef.current?.querySelector(`[data-id="${row.id}"]`);
            el?.scrollIntoView({ block: "nearest", behavior: "smooth" });
        });
    };

    const openConfirm = () => setConfirmOpen(true);

    const confirmClear = () => {
        setRows([]);
        setLastNewId(null);
        setConfirmOpen(false);
        // return focus to the Clear button
        requestAnimationFrame(() => clearBtnRef.current?.focus());
    };

    const cancelClear = () => {
        setConfirmOpen(false);
        requestAnimationFrame(() => clearBtnRef.current?.focus());
    };

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header aria-hidden={confirmOpen}>
                    <div className="heading">
                        <h1>New Row Highlight</h1>
                        <p className="muted">When a row is added, it inserts with a tiny rise and a warm pulse, then settles.</p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Row controls">
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={insertAtTop}
                                onChange={(e) => setInsertAtTop(e.target.checked)}
                            />
                            <span>Insert at top</span>
                        </label>

                        <button className="btn primary" onClick={addRow}>Add row</button>
                        <button
                            ref={clearBtnRef}
                            className="btn ghost"
                            onClick={openConfirm}
                            disabled={!rows.length}
                        >
                            Clear
                        </button>

                        <div className="total"><b>Total:</b> ₹{total.toLocaleString()}</div>
                    </div>
                </Styled.Header>

                <Styled.Stage aria-hidden={confirmOpen}>
                    <Styled.TableHeader role="row">
                        <span>#</span>
                        <span>Name</span>
                        <span>Qty</span>
                        <span className="right">Amount</span>
                    </Styled.TableHeader>

                    <Styled.Table as={motion.div} ref={listRef} layout role="list" aria-live="polite">
                        <AnimatePresence initial={false}>
                            {rows.map((r, idx) => (
                                <RowItem
                                    key={r.id}
                                    row={r}
                                    index={idx}
                                    isLastNew={r.id === lastNewId}
                                    onPulseEnd={() => {
                                        if (r.id === lastNewId) setLastNewId(null);
                                    }}
                                />
                            ))}
                        </AnimatePresence>

                        {!rows.length && <Styled.Empty>List is empty. Add a row to see the highlight.</Styled.Empty>}
                    </Styled.Table>
                </Styled.Stage>

                {/* --- Confirm Modal --- */}
                <ConfirmDialog
                    open={confirmOpen}
                    title="Clear all rows?"
                    body="This will remove all rows from the list. You can’t undo this action."
                    confirmLabel="Clear"
                    cancelLabel="Cancel"
                    onConfirm={confirmClear}
                    onCancel={cancelClear}
                />
            </Styled.Wrapper>
        </MotionConfig>
    );
}

function RowItem({ row, index, isLastNew, onPulseEnd }) {
    const base = { opacity: 1, y: 0, scale: 1, backgroundColor: "transparent" };
    const initial = row.isNew ? { opacity: 0, y: -6, scale: 0.995 } : { opacity: 0, y: 0, scale: 1 };
    const animate = isLastNew
        ? {
            opacity: 1,
            y: 0,
            scale: 1,
            backgroundColor: [
                "var(--hl-strong)",
                "var(--hl-mid)",
                "var(--hl-weak)",
                "transparent",
            ],
            transition: {
                layout: { type: "spring", stiffness: 420, damping: 38, mass: 0.8 },
                duration: 1.2,
                times: [0, 0.35, 0.7, 1],
            },
        }
        : { ...base, transition: { layout: { type: "spring", stiffness: 420, damping: 38, mass: 0.8 } } };

    return (
        <Styled.Row
            as={motion.div}
            role="listitem"
            layout
            initial={initial}
            animate={animate}
            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.18 } }}
            onAnimationComplete={onPulseEnd}
            data-id={row.id}
        >
            <span className="muted">#{String(index + 1).padStart(2, "0")}</span>
            <span>{row.name}</span>
            <span>{row.qty}</span>
            <span className="right">₹{row.amount.toLocaleString()}</span>
        </Styled.Row>
    );
}

/* -------- Confirm Dialog (Framer Motion) -------- */

function ConfirmDialog({
    open,
    title,
    body,
    confirmLabel = "Confirm",
    cancelLabel = "Cancel",
    onConfirm,
    onCancel,
}) {
    const confirmRef = useRef(null);

    useEffect(() => {
        if (!open) return;
        const id = requestAnimationFrame(() => confirmRef.current?.focus());
        return () => cancelAnimationFrame(id);
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === "Escape") { e.stopPropagation(); onCancel?.(); }
            if (e.key === "Enter") { e.preventDefault(); onConfirm?.(); }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onCancel, onConfirm]);

    return (
        <AnimatePresence>
            {open && (
                <>
                    <Styled.ModalBackdrop
                        as={motion.div}
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onCancel}
                        aria-hidden="true"
                    />
                    <Styled.ModalDialog
                        as={motion.div}
                        key="dialog"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="confirm-title"
                        initial={{ opacity: 0, scale: 0.96, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 6, transition: { duration: 0.16 } }}
                        transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.8 }}
                    >
                        {/* single centered panel */}
                        <div className="panel" onClick={(e) => e.stopPropagation()}>
                            <h3 id="confirm-title">{title}</h3>
                            <p className="body">{body}</p>
                            <div className="actions">
                                <button className="btn ghost" onClick={onCancel}>{cancelLabel}</button>
                                <button ref={confirmRef} className="btn danger" onClick={onConfirm}>
                                    {confirmLabel}
                                </button>
                            </div>
                        </div>
                    </Styled.ModalDialog>
                </>
            )}
        </AnimatePresence>
    );
}

