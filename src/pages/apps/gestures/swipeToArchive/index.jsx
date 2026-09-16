import { useEffect, useMemo, useRef, useState } from "react";
import {
    AnimatePresence,
    MotionConfig,
    motion,
    useMotionValue,
    useTransform,
} from "framer-motion";
import { Styled } from "./styled";
import {
    FiArchive,
    FiTrash2,
    FiRotateCcw,
    FiMail,
    FiCornerUpLeft,
    FiAlertTriangle,
} from "react-icons/fi";

/* ---------- mock data ---------- */
const seedItems = Array.from({ length: 10 }).map((_, i) => ({
    id: `mail-${i + 1}`,
    from: ["Maya", "Karan", "Ishan", "Priya", "Leena", "Ravi", "Aditi", "Aarav", "Nisha", "Kabir"][i % 10],
    title: [
        "Weekly status & next steps",
        "Design handoff",
        "Invoice reminder",
        "Invitation: Product review",
        "Campaign results",
    ][i % 5],
    preview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus...",
}));

/* ---------- undo stack ---------- */
function useUndo() {
    const [stack, setStack] = useState([]); // [{item, action, from, to?}]
    const push = (entry) => setStack((s) => [entry, ...s].slice(0, 12));
    const pop = () => {
        let out = null;
        setStack((s) => {
            out = s[0] || null;
            return s.slice(1);
        });
        return out;
    };
    return { stack, push, pop };
}

export default function SwipeToArchive() {
    // Lists
    const [inbox, setInbox] = useState(seedItems);
    const [archives, setArchives] = useState([]);
    const [deleted, setDeleted] = useState([]); // [{ item, from: 'inbox'|'archive' }]

    // UI state
    const [view, setView] = useState("inbox"); // 'inbox' | 'archive' | 'deleted'
    const { stack, push, pop } = useUndo();

    // Confirm modal state
    const [confirm, setConfirm] = useState({ open: false, item: null });

    /* ---------- helpers to move items ---------- */
    const move = (arr, setArr, id) => {
        const idx = arr.findIndex((x) => x.id === id);
        if (idx === -1) return [null, arr];
        const item = arr[idx];
        const next = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
        setArr(next);
        return [item, next];
    };

    /* ---------- actions ---------- */
    const archiveById = (id) => {
        const [item] = move(inbox, setInbox, id);
        if (!item) return;
        setArchives((a) => [item, ...a]);
        push({ item, action: "archive", from: "inbox" });
    };

    const unarchiveById = (id) => {
        const [item] = move(archives, setArchives, id);
        if (!item) return;
        setInbox((a) => [item, ...a]);
        push({ item, action: "unarchive", from: "archive" });
    };

    const deleteById = (id, from) => {
        if (from === "inbox") {
            const [item] = move(inbox, setInbox, id);
            if (!item) return;
            setDeleted((d) => [{ item, from: "inbox" }, ...d]);
            push({ item, action: "delete", from: "inbox" });
        } else if (from === "archive") {
            const [item] = move(archives, setArchives, id);
            if (!item) return;
            setDeleted((d) => [{ item, from: "archive" }, ...d]);
            push({ item, action: "delete", from: "archive" });
        }
    };

    const restoreById = (id) => {
        const idx = deleted.findIndex((e) => e.item.id === id);
        if (idx === -1) return;
        const entry = deleted[idx];
        setDeleted((d) => [...d.slice(0, idx), ...d.slice(idx + 1)]);
        if (entry.from === "inbox") setInbox((i) => [entry.item, ...i]);
        else setArchives((a) => [entry.item, ...a]);
        push({ item: entry.item, action: "undelete", from: "deleted", to: entry.from });
    };

    // PURGE (permanent) - called only after confirm
    const purgeById = (id) => {
        const idx = deleted.findIndex((e) => e.item.id === id);
        if (idx === -1) return;
        const entry = deleted[idx];
        setDeleted((d) => [...d.slice(0, idx), ...d.slice(idx + 1)]);
        push({ item: entry.item, action: "purge", from: "deleted" });
    };

    // Ask for confirmation (open modal)
    const askPurgeById = (id) => {
        const entry = deleted.find((e) => e.item.id === id);
        if (!entry) return;
        setConfirm({ open: true, item: entry.item });
    };

    // Confirm handlers
    const onConfirmPurge = () => {
        if (confirm.item) purgeById(confirm.item.id);
        setConfirm({ open: false, item: null });
    };
    const onCancelPurge = () => setConfirm({ open: false, item: null });

    /* ---------- undo ---------- */
    const onUndo = () => {
        const last = pop();
        if (!last) return;
        const { item, action, from, to } = last;
        if (action === "archive") {
            setArchives((a) => a.filter((x) => x.id !== item.id));
            setInbox((i) => [item, ...i]);
        } else if (action === "unarchive") {
            setInbox((i) => i.filter((x) => x.id !== item.id));
            setArchives((a) => [item, ...a]);
        } else if (action === "delete") {
            setDeleted((d) => d.filter((e) => e.item.id !== item.id));
            if (from === "inbox") setInbox((i) => [item, ...i]);
            else setArchives((a) => [item, ...a]);
        } else if (action === "undelete") {
            if (to === "inbox") setInbox((i) => i.filter((x) => x.id !== item.id));
            else setArchives((a) => a.filter((x) => x.id !== item.id));
            setDeleted((d) => [{ item, from: to }, ...d]);
        } else if (action === "purge") {
            setDeleted((d) => [{ item, from: "unknown" }, ...d]);
        }
    };

    /* ---------- list selection ---------- */
    const list = useMemo(() => {
        if (view === "inbox") return inbox;
        if (view === "archive") return archives;
        return deleted; // 'deleted'
    }, [view, inbox, archives, deleted]);

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Swipe to Archive</h1>
                        <p className="muted">
                            {view === "inbox" && <>Drag right to <b>Archive</b>, left to <b>Delete</b>.</>}
                            {view === "archive" && <>Drag right to <b>Unarchive</b>, left to <b>Delete</b>.</>}
                            {view === "deleted" && <>Drag right to <b>Restore</b>, left to <b>Purge</b>.</>}
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Actions">
                        <div className="seg">
                            <button
                                className={`segBtn ${view === "inbox" ? "active" : ""}`}
                                onClick={() => setView("inbox")}
                                title="Inbox"
                            >
                                <FiMail /> Inbox <span className="count">{inbox.length}</span>
                            </button>
                            <button
                                className={`segBtn ${view === "archive" ? "active" : ""}`}
                                onClick={() => setView("archive")}
                                title="Archived"
                            >
                                <FiArchive /> Archived <span className="count">{archives.length}</span>
                            </button>
                            <button
                                className={`segBtn ${view === "deleted" ? "active" : ""}`}
                                onClick={() => setView("deleted")}
                                title="Deleted"
                            >
                                <FiTrash2 /> Deleted <span className="count">{deleted.length}</span>
                            </button>
                        </div>

                        <button className="btn ghost" onClick={onUndo} disabled={!stack.length} title="Undo last">
                            <FiRotateCcw style={{ marginRight: 6 }} /> Undo
                        </button>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <AnimatePresence initial={false} mode="popLayout">
                        {view !== "deleted" &&
                            list.map((item) => (
                                <SwipeRow
                                    key={item.id}
                                    item={item}
                                    mode={view} // 'inbox' | 'archive'
                                    onArchive={() => archiveById(item.id)}
                                    onUnarchive={() => unarchiveById(item.id)}
                                    onDelete={() => deleteById(item.id, view)}
                                />
                            ))}

                        {view === "deleted" &&
                            deleted.map((entry) => (
                                <SwipeRow
                                    key={entry.item.id}
                                    item={entry.item}
                                    mode="deleted"
                                    onRestore={() => restoreById(entry.item.id)}
                                    onPurgeAsk={() => askPurgeById(entry.item.id)}
                                />
                            ))}

                        {((view === "inbox" && inbox.length === 0) ||
                            (view === "archive" && archives.length === 0) ||
                            (view === "deleted" && deleted.length === 0)) && (
                                <Styled.Empty key="empty">
                                    <p>
                                        {view === "inbox" && "Inbox is empty. Bliss."}
                                        {view === "archive" && "No archived items. Fresh as dew."}
                                        {view === "deleted" && "Trash is empty. Clean slate."}
                                    </p>
                                </Styled.Empty>
                            )}
                    </AnimatePresence>
                </Styled.Stage>

                {/* Confirm Purge Modal */}
                <ConfirmModal
                    open={confirm.open}
                    title="Permanently delete?"
                    message={
                        <>
                            This will <b>permanently</b> remove
                            {confirm.item ? ` “${confirm.item.title}”` : " this item"}
                            . You can’t undo this later.
                        </>
                    }
                    confirmLabel="Delete permanently"
                    onConfirm={onConfirmPurge}
                    onCancel={onCancelPurge}
                />

                <Styled.Notes>
                    <h3>Tech notes</h3>
                    <ul>
                        <li>Modal uses <code>AnimatePresence</code> with springy scale/opacity.</li>
                        <li>Esc/backdrop close; Enter on primary button for quick keyboard flow.</li>
                        <li>Undo still reverses purge by restoring the item back into Deleted.</li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}

/* ---------- Row component ---------- */
function SwipeRow({
    item,
    mode,                // 'inbox' | 'archive' | 'deleted'
    onArchive,           // inbox
    onUnarchive,         // archive
    onDelete,            // inbox/archive
    onRestore,           // deleted
    onPurgeAsk,          // deleted (open confirm)
}) {
    const wrapRef = useRef(null);
    const x = useMotionValue(0);

    // Dynamic threshold from width
    const [threshold, setThreshold] = useState(120);
    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;
        const calc = () => setThreshold(Math.max(90, el.clientWidth * 0.28));
        calc();
        const ro = new ResizeObserver(calc);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    // BG opacities
    const bgRightOpacity = useTransform(x, [0, threshold], [0, 1]);
    const bgLeftOpacity = useTransform(x, [-threshold, 0], [1, 0]);

    const handleDragEnd = (_, info) => {
        const { velocity, offset } = info;
        const traveled = offset.x;
        const fling = Math.abs(velocity.x) > 500;

        // right actions
        if (traveled > threshold || (fling && traveled > threshold * 0.6)) {
            if (mode === "inbox" && onArchive) onArchive();
            if (mode === "archive" && onUnarchive) onUnarchive();
            if (mode === "deleted" && onRestore) onRestore();
            return;
        }
        // left actions
        if (traveled < -threshold || (fling && traveled < -threshold * 0.6)) {
            if ((mode === "inbox" || mode === "archive") && onDelete) onDelete();
            if (mode === "deleted" && onPurgeAsk) onPurgeAsk();
            return;
        }
        // else snap-back by spring
    };

    const rightLabel =
        mode === "inbox" ? "Archive" : mode === "archive" ? "Unarchive" : "Restore";
    const rightIcon =
        mode === "inbox" ? <FiArchive /> : mode === "archive" ? <FiCornerUpLeft /> : <FiCornerUpLeft />;
    const leftLabel = mode === "deleted" ? "Purge" : "Delete";
    const leftIcon = <FiTrash2 />;

    return (
        <Styled.RowWrapper
            as={motion.li}
            layout
            ref={wrapRef}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8, transition: { duration: 0.12 } }}
        >
            {/* Action background */}
            <div className="bg">
                <div className="left" style={{ opacity: bgLeftOpacity }}>
                    {leftIcon}
                    <span>{leftLabel}</span>
                </div>
                <div className="right" style={{ opacity: bgRightOpacity }}>
                    {rightIcon}
                    <span>{rightLabel}</span>
                </div>
            </div>

            {/* Draggable card */}
            <motion.div
                className="card"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                style={{ x }}
                onDragEnd={handleDragEnd}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.8 }}
            >
                <div className="meta">
                    <b className="from">{item.from}</b>
                    <span className="title">{item.title}</span>
                </div>
                <p className="preview">{item.preview}</p>

                {/* Quick actions */}
                <div className="rowActions">
                    {mode === "deleted" ? (
                        <>
                            <button className="act danger" onClick={onPurgeAsk} title="Purge">
                                <FiTrash2 /> Purge
                            </button>
                            <button className="act" onClick={onRestore} title="Restore">
                                <FiCornerUpLeft /> Restore
                            </button>
                        </>
                    ) : mode === "inbox" ? (
                        <>
                            <button className="act danger" onClick={onDelete} title="Delete">
                                <FiTrash2 /> Delete
                            </button>
                            <button className="act" onClick={onArchive} title="Archive">
                                <FiArchive /> Archive
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="act danger" onClick={onDelete} title="Delete">
                                <FiTrash2 /> Delete
                            </button>
                            <button className="act" onClick={onUnarchive} title="Unarchive">
                                <FiCornerUpLeft /> Unarchive
                            </button>
                        </>
                    )}
                </div>
            </motion.div>

            {/* Collapsing height on exit */}
            <motion.div
                className="collapse"
                initial={{ height: "auto" }}
                animate={{ height: "auto" }}
                exit={{ height: 0, margin: 0, padding: 0 }}
                transition={{ duration: 0.18, ease: [0.33, 1, 0.68, 1] }}
            />
        </Styled.RowWrapper>
    );
}

/* ---------- Confirm Modal ---------- */
function ConfirmModal({ open, title, message, confirmLabel, onConfirm, onCancel }) {
    const primaryRef = useRef(null);

    useEffect(() => {
        if (!open) return;
        const id = requestAnimationFrame(() => {
            primaryRef.current?.focus();
        });
        const onKey = (e) => {
            if (e.key === "Escape") onCancel?.();
            if (e.key === "Enter" && document.activeElement === primaryRef.current) {
                onConfirm?.();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => {
            cancelAnimationFrame(id);
            window.removeEventListener("keydown", onKey);
        };
    }, [open, onCancel, onConfirm]);

    return (
        <AnimatePresence>
            {open && (
                <>
                    <Styled.ModalBackdrop
                        as={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onCancel}
                    />
                    <Styled.ModalDialog
                        as={motion.div}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="purge-title"
                        initial={{ opacity: 0, scale: 0.96, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 8 }}
                        transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    >
                        {/* NEW: single card wrapper */}
                        <div className="panel">
                            <div className="head">
                                <div className="icon">
                                    <FiAlertTriangle size={22} />
                                </div>
                                <h3 id="purge-title">{title}</h3>
                            </div>

                            <div className="body">{message}</div>

                            <div className="actions">
                                <button className="btn ghost" onClick={onCancel}>Cancel</button>
                                <button className="btn danger" ref={primaryRef} onClick={onConfirm}>
                                    {confirmLabel || "Delete permanently"}
                                </button>
                            </div>
                        </div>
                    </Styled.ModalDialog>

                </>
            )}
        </AnimatePresence>
    );
}
