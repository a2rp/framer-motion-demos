import { useEffect, useId, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";

/* -------------------- Icons (inline) -------------------- */
const IconPlus = (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
    </svg>
);
const IconSend = (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M3.4 20.4l17.2-8.4L3.4 3.6l-.4 6.7 10.3 1.7-10.3 1.7.4 6.7z" />
    </svg>
);
const IconX = (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M18.3 5.7L12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3 10.6 10.6 16.9 4.3z" />
    </svg>
);
const IconAttach = (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M7 13.5V7a5 5 0 0 1 10 0v6.5a3.5 3.5 0 1 1-7 0V7h2v6.5a1.5 1.5 0 1 0 3 0V7a3 3 0 0 0-6 0v6.5a5.5 5.5 0 1 0 11 0V7h2v6.5a7.5 7.5 0 1 1-15 0z" />
    </svg>
);
const IconEye = (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M12 5c5.5 0 10 4.5 10 7s-4.5 7-10 7S2 14.5 2 12s4.5-7 10-7zm0 2C7.6 7 4.2 10 4.2 12S7.6 17 12 17s7.8-3 7.8-5S16.4 7 12 7zm0 2.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5z" />
    </svg>
);
const IconEyeOff = (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M2 3.3 3.3 2 22 20.7 20.7 22l-3.5-3.5A12.5 12.5 0 0 1 12 19C6.5 19 2 14.5 2 12a9.7 9.7 0 0 1 3.5-5.8L2 3.3zM7.2 8.5 9 10.3a2.5 2.5 0 0 0 3.2 3.2l1.8 1.8a4.5 4.5 0 0 1-6.8-6.8zM12 5c5.5 0 10 4.5 10 7 0 1.2-.8 2.8-2.1 4.3l-1.4-1.4c.8-1 1.5-2.1 1.5-2.9 0-2-3.4-5-7.8-5-1 0-2 .2-2.9.5L7.7 5.1A12.2 12.2 0 0 1 12 5z" />
    </svg>
);
const IconCheck = (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M9.2 16.6L4.6 12l1.4-1.4 3.2 3.2 8.8-8.8 1.4 1.4z" />
    </svg>
);
const IconTrash = (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M9 3h6l1 2h5v2H3V5h5l1-2zm1 6h2v9h-2V9zm4 0h2v9h-2V9zM7 9h2v9H7V9z" />
    </svg>
);

/* -------------------- Helpers -------------------- */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
const splitEmails = (v) => v.split(/[,\s]+/).map(s => s.trim()).filter(Boolean);
const STORAGE_KEY = "fm_fab_compose_sent_v1";

const formatIST = (iso) => {
    try {
        const d = new Date(iso);
        return new Intl.DateTimeFormat("en-IN", {
            year: "numeric", month: "short", day: "2-digit",
            hour: "2-digit", minute: "2-digit", hour12: false,
            timeZone: "Asia/Kolkata",
        }).format(d);
    } catch {
        return iso;
    }
};

function validate({ to, subject, message, protect, password, files }) {
    const errors = {};
    const emails = splitEmails(to);

    if (emails.length === 0) errors.to = "At least one recipient required.";
    else if (emails.some(e => !emailRegex.test(e))) errors.to = "One or more emails are invalid.";

    if (!subject.trim()) errors.subject = "Subject is required.";
    if (message.trim().length < 10) errors.message = "Message should be at least 10 characters.";

    if (protect) {
        if (!password) errors.password = "Password required.";
        else if (password.length < 6) errors.password = "Min 6 characters.";
    }

    if (files && files.length > 3) errors.files = "Max 3 attachments.";
    if (files) {
        for (const f of files) {
            if (f.size > 2 * 1024 * 1024) { errors.files = "Each file must be ≤ 2MB."; break; }
        }
    }
    return errors;
}

/* -------------------- Component -------------------- */
export default function FabToComposeMorph() {
    const [open, setOpen] = useState(false);
    const [sentPill, setSentPill] = useState(false);

    // form state
    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [files, setFiles] = useState([]);
    const [protect, setProtect] = useState(false);
    const [password, setPassword] = useState("");
    const [showPw, setShowPw] = useState(false);
    const [touched, setTouched] = useState({});
    const [sending, setSending] = useState(false);

    // sent items (persisted)
    const [sentItems, setSentItems] = useState([]);

    // confirm modal state
    const [confirm, setConfirm] = useState({ open: false, mode: null, id: null });

    const toId = useId(), subjectId = useId(), messageId = useId(), filesId = useId(), pwId = useId();
    const firstFieldRef = useRef(null);
    const timers = useRef([]);

    // load persisted sent items
    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) setSentItems(JSON.parse(raw));
        } catch { }
    }, []);

    // persist whenever list changes
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(sentItems));
        } catch { }
    }, [sentItems]);

    const form = useMemo(() => ({ to, subject, message, files, protect, password }), [to, subject, message, files, protect, password]);
    const errors = useMemo(() => validate(form), [form]);
    const isValid = Object.keys(errors).length === 0;

    const openCompose = () => setOpen(true);
    const closeCompose = () => { if (!sending) setOpen(false); };

    // autofocus + ESC to close compose
    useEffect(() => {
        if (!open) return;
        const id = requestAnimationFrame(() => firstFieldRef.current?.focus());
        const onKey = (e) => { if (e.key === "Escape") closeCompose(); };
        window.addEventListener("keydown", onKey);
        return () => { cancelAnimationFrame(id); window.removeEventListener("keydown", onKey); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    useEffect(() => () => timers.current.forEach(clearTimeout), []);

    const onFileChange = (e) => {
        const list = Array.from(e.target.files || []);
        setFiles(list);
        setTouched((t) => ({ ...t, files: true }));
    };

    const onSend = async () => {
        setTouched({ to: true, subject: true, message: true, password: true, files: true });
        if (!isValid) return;

        setSending(true);
        timers.current.push(setTimeout(() => {
            setSending(false);
            setOpen(false);
            setSentPill(true);

            const item = {
                id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
                date: new Date().toISOString(),
                to: splitEmails(to),
                subject: subject.trim(),
                message: message.trim(),
                protect: !!protect,
                attachments: (files || []).slice(0, 3).map(f => ({ name: f.name, size: f.size })),
            };
            setSentItems((prev) => [item, ...prev]);

            // reset fields (keep 'to' for convenience)
            setSubject("");
            setMessage("");
            setFiles([]);
            setProtect(false);
            setPassword("");
            setShowPw(false);

            timers.current.push(setTimeout(() => setSentPill(false), 1800));
        }, 1100));
    };

    /* ===== Confirm modal helpers ===== */
    const openConfirmDelete = (id) => setConfirm({ open: true, mode: "delete", id });
    const openConfirmClearAll = () => setConfirm({ open: true, mode: "clearAll", id: null });
    const closeConfirm = () => setConfirm({ open: false, mode: null, id: null });

    const doConfirm = () => {
        if (confirm.mode === "delete" && confirm.id) {
            setSentItems((prev) => prev.filter(x => x.id !== confirm.id));
        }
        if (confirm.mode === "clearAll") {
            setSentItems([]);
        }
        closeConfirm();
    };

    // ESC to close confirm
    useEffect(() => {
        if (!confirm.open) return;
        const onKey = (e) => { if (e.key === "Escape") closeConfirm(); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [confirm.open]);

    /* Motion configs */
    const spring = { type: "spring", stiffness: 380, damping: 32, mass: 0.8 };
    const overlayFade = { duration: 0.22, ease: [0.22, 1, 0.36, 1] };
    const contentStagger = {
        hidden: { opacity: 0, y: 6 },
        show: { opacity: 1, y: 0, transition: { staggerChildren: 0.04, delayChildren: 0.02 } }
    };
    const item = { hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } };

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>FAB → Compose Morph</h1>
                        <p className="muted">
                            Floating action button morphs into a compose card using a shared <code>layoutId</code>.
                            Includes validation, attachments, optional password with eye toggle, and a polished send flow.
                        </p>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    {/* Floating FAB (shared layoutId) */}
                    <motion.button
                        type="button"
                        className="fab"
                        layoutId="compose"
                        onClick={openCompose}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.98 }}
                        transition={spring}
                        aria-label="Compose message"
                    >
                        <IconPlus />
                        <span className="label">Compose</span>
                    </motion.button>

                    {/* Sent pill near FAB */}
                    <AnimatePresence>
                        {sentPill && (
                            <motion.div
                                className="sentPill"
                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <IconCheck /> Sent
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Modal overlay + morphing card */}
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                className="overlay"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={overlayFade}
                                onClick={(e) => { if (e.currentTarget === e.target) closeCompose(); }}
                                aria-hidden="true"
                            >
                                <Styled.ModalOverlay as={motion.div} layout>
                                    <motion.div className="modal" layoutId="compose" transition={spring}>
                                        <div className="mHead">
                                            <div className="title">
                                                <h3>New Message</h3>
                                                <p className="muted">All fields with * are mandatory.</p>
                                            </div>
                                            <button className="iconBtn" onClick={closeCompose} aria-label="Close"><IconX /></button>
                                        </div>

                                        <motion.div className="mBody" variants={contentStagger} initial="hidden" animate="show">
                                            <motion.div className="field" variants={item}>
                                                <label htmlFor={toId}>To*</label>
                                                <input
                                                    id={toId}
                                                    ref={firstFieldRef}
                                                    type="text"
                                                    placeholder="name@example.com, other@domain.com"
                                                    value={to}
                                                    onChange={(e) => setTo(e.target.value)}
                                                    onBlur={() => setTouched((t) => ({ ...t, to: true }))}
                                                    aria-invalid={!!(touched.to && errors.to)}
                                                />
                                                {touched.to && errors.to && <div className="error">{errors.to}</div>}
                                                <div className="hint">Separate multiple emails with comma or space.</div>
                                            </motion.div>

                                            <motion.div className="twoCol" variants={item}>
                                                <div className="field">
                                                    <label htmlFor={subjectId}>Subject*</label>
                                                    <input
                                                        id={subjectId}
                                                        type="text"
                                                        placeholder="Subject"
                                                        value={subject}
                                                        onChange={(e) => setSubject(e.target.value)}
                                                        onBlur={() => setTouched((t) => ({ ...t, subject: true }))}
                                                        aria-invalid={!!(touched.subject && errors.subject)}
                                                    />
                                                    {touched.subject && errors.subject && <div className="error">{errors.subject}</div>}
                                                </div>

                                                <div className="field attach">
                                                    <label htmlFor={filesId}>Attachments</label>
                                                    <div className="attachRow">
                                                        <label className="attachBtn" htmlFor={filesId}><IconAttach /> Add files</label>
                                                        <input id={filesId} type="file" multiple onChange={onFileChange} />
                                                        <span className="meta">{files.length} selected (max 3, ≤ 2MB each)</span>
                                                    </div>
                                                    {touched.files && errors.files && <div className="error">{errors.files}</div>}
                                                    {files.length > 0 && (
                                                        <ul className="fileList">
                                                            {files.map((f, i) => (
                                                                <li key={i}><span className="name">{f.name}</span><span className="size">{(f.size / 1024).toFixed(0)} KB</span></li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            </motion.div>

                                            <motion.div className="field" variants={item}>
                                                <label htmlFor={messageId}>Message*</label>
                                                <textarea
                                                    id={messageId}
                                                    rows={6}
                                                    placeholder="Write your message…"
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                                                    aria-invalid={!!(touched.message && errors.message)}
                                                />
                                                <div className="row">
                                                    {touched.message && errors.message
                                                        ? <div className="error">{errors.message}</div>
                                                        : <div className="hint">{message.trim().length}/10</div>}
                                                </div>
                                            </motion.div>

                                            <motion.div className="protect" variants={item}>
                                                <label className="checkbox">
                                                    <input type="checkbox" checked={protect} onChange={(e) => setProtect(e.target.checked)} />
                                                    <span>Protect with password</span>
                                                </label>

                                                {protect && (
                                                    <div className="pwRow">
                                                        <div className="field">
                                                            <label htmlFor={pwId}>Password*</label>
                                                            <div className="pwWrap">
                                                                <input
                                                                    id={pwId}
                                                                    type={showPw ? "text" : "password"}
                                                                    placeholder="Min 6 characters"
                                                                    value={password}
                                                                    onChange={(e) => setPassword(e.target.value)}
                                                                    onBlur={() => setTouched((t) => ({ ...t, password: true }))}
                                                                    aria-invalid={!!(touched.password && errors.password)}
                                                                />
                                                                <button
                                                                    type="button"
                                                                    className="iconBtn eye"
                                                                    aria-label={showPw ? "Hide password" : "Show password"}
                                                                    onClick={() => setShowPw((v) => !v)}
                                                                >
                                                                    {showPw ? <IconEyeOff /> : <IconEye />}
                                                                </button>
                                                            </div>
                                                            {touched.password && errors.password && <div className="error">{errors.password}</div>}
                                                        </div>
                                                    </div>
                                                )}
                                            </motion.div>
                                        </motion.div>

                                        <div className="mFoot">
                                            <button className="btn ghost" onClick={closeCompose} disabled={sending}>Cancel</button>
                                            <motion.button
                                                className="btn primary"
                                                onClick={onSend}
                                                disabled={!isValid || sending}
                                                whileTap={{ scale: 0.98 }}
                                                animate={sending ? { scale: 0.98 } : { scale: 1 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                                            >
                                                <span className="icon">{sending ? <span className="spinner" aria-hidden /> : <IconSend />}</span>
                                                <span>{sending ? "Sending…" : "Send"}</span>
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                </Styled.ModalOverlay>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Styled.Stage>

                {/* ===== Sent Items Panel ===== */}
                <Styled.SentHeader>
                    <div className="left">
                        <h2>Sent Items</h2>
                        <p className="muted">Messages you’ve sent are saved offline (localStorage).</p>
                    </div>
                    <div className="right">
                        <button className="btn ghost" onClick={openConfirmClearAll} disabled={sentItems.length === 0}>
                            Clear All
                        </button>
                    </div>
                </Styled.SentHeader>

                <Styled.SentGrid as={motion.div} layout>
                    <AnimatePresence initial={false}>
                        {sentItems.length === 0 ? (
                            <motion.div
                                key="empty"
                                className="empty"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 8 }}
                                transition={{ duration: 0.25 }}
                            >
                                No sent messages yet. Compose one using the FAB.
                            </motion.div>
                        ) : (
                            sentItems.map((it) => (
                                <motion.article
                                    key={it.id}
                                    className="card"
                                    layout
                                    initial={{ opacity: 0, scale: 0.98, y: 6 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.98, y: 6 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <header className="cHead">
                                        <h3 title={it.subject || "(no subject)"}>{it.subject || "(no subject)"}</h3>
                                        <time className="date" dateTime={it.date}>{formatIST(it.date)}</time>
                                    </header>

                                    <div className="row chips">
                                        {it.to.slice(0, 3).map((e, i) => (<span className="chip" key={i} title={e}>{e}</span>))}
                                        {it.to.length > 3 && <span className="chip more">+{it.to.length - 3} more</span>}
                                    </div>

                                    <p className="snippet">{it.message}</p>

                                    <div className="row meta">
                                        <div className="badges">
                                            {it.protect && <span className="badge lock">🔒 Protected</span>}
                                            {it.attachments?.length > 0 && (
                                                <span className="badge attach">📎 {it.attachments.length} file(s)</span>
                                            )}
                                        </div>
                                        <button className="iconBtn danger" onClick={() => openConfirmDelete(it.id)} aria-label="Delete">
                                            <IconTrash />
                                        </button>
                                    </div>
                                </motion.article>
                            ))
                        )}
                    </AnimatePresence>
                </Styled.SentGrid>

                {/* ===== Confirm Modal (Delete / Clear All) ===== */}
                <AnimatePresence>
                    {confirm.open && (
                        <Styled.ConfirmOverlay
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={overlayFade}
                            onClick={(e) => { if (e.currentTarget === e.target) closeConfirm(); }}
                        >
                            <motion.div
                                className="modal"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="confirm-title"
                                aria-describedby="confirm-desc"
                                initial={{ scale: 0.96, opacity: 0, y: 8 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.98, opacity: 0, y: 8 }}
                                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="mHead">
                                    <h3 id="confirm-title">
                                        {confirm.mode === "delete" ? "Delete message?" : "Clear all sent items?"}
                                    </h3>
                                </div>
                                <div className="mBody">
                                    <p id="confirm-desc" className="muted">
                                        {confirm.mode === "delete"
                                            ? "This will permanently remove the selected message from Sent Items."
                                            : "This will permanently remove all messages from Sent Items."}
                                    </p>
                                </div>
                                <div className="mFoot">
                                    <button className="btn ghost" onClick={closeConfirm}>Cancel</button>
                                    <button className="btn danger" onClick={doConfirm}>
                                        {confirm.mode === "delete" ? "Delete" : "Clear All"}
                                    </button>
                                </div>
                            </motion.div>
                        </Styled.ConfirmOverlay>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
