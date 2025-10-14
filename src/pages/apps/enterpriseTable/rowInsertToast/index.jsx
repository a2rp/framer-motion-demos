import { useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";

/* ------------------------ utilities ------------------------ */

const uid = (() => { let i = 0; return () => `row-${++i}`; })();

const ROLES = ["Developer", "Designer", "Manager", "Analyst", "Support"];
const STATUS = ["Active", "Invited", "Suspended"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form) {
    const err = {};
    if (!form.name || form.name.trim().length < 2) err.name = "Please enter at least 2 characters.";
    if (!EMAIL_RE.test(form.email || "")) err.email = "Please enter a valid email address.";
    if (!ROLES.includes(form.role)) err.role = "Please select a role.";

    if (!form.password) {
        err.password = "Password is required.";
    } else {
        const pw = form.password;
        const ok =
            /.{8,}/.test(pw) && /[A-Z]/.test(pw) && /[a-z]/.test(pw) && /[0-9]/.test(pw) && /[^A-Za-z0-9]/.test(pw);
        if (!ok) err.password = "Use 8+ chars with upper, lower, number, and a symbol.";
    }
    return err;
}

function fmtDate(d) {
    try {
        const parts = new Intl.DateTimeFormat("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
            hour12: false,
            timeZone: "Asia/Kolkata",
        }).formatToParts(d);
        const get = (t) => parts.find((p) => p.type === t)?.value || "";
        return `${get("day")} ${get("month")} ${get("year")} ${get("hour")}:${get("minute")}`;
    } catch {
        return d.toLocaleString();
    }
}

const CheckIcon = (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M9.55 16.15l-3.7-3.7 1.4-1.4 2.3 2.29 7.1-7.1 1.41 1.41-8.5 8.5z" />
    </svg>
);
const TrashIcon = (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    </svg>
);
const EyeIcon = (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12a5 5 0 110-10 5 5 0 010 10z" />
    </svg>
);
const EyeOffIcon = (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden focusable="false" {...p}>
        <path fill="currentColor" d="M2 4.27L3.28 3 21 20.72 19.73 22l-3.1-3.1A10.9 10.9 0 0112 19c-7 0-10-7-10-7a19.1 19.1 0 015.27-6.16L2 4.27zM9.9 7.15A5 5 0 0117 12c0 .83-.2 1.6-.54 2.28l-1.5-1.5c.04-.25.04-.51.04-.78a3 3 0 00-3-3c-.27 0-.53 0-.78.04L9.9 7.15zM12 7a5 5 0 00-1.76.32L8.68 5.76A10.9 10.9 0 0112 5c7 0 10 7 10 7a19.2 19.2 0 01-3.07 4.25l-1.41-1.41A17.2 17.2 0 0022 12s-3-7-10-7z" />
    </svg>
);

/* ------------------------ demo seed ------------------------ */
function seedRows() {
    const now = new Date();
    return [
        { id: uid(), name: "Aarav Sharma", email: "aarav@acme.dev", role: "Developer", status: "Active", createdAt: now },
        { id: uid(), name: "Isha Verma", email: "isha@acme.dev", role: "Designer", status: "Invited", createdAt: now },
        { id: uid(), name: "Rohan Mehta", email: "rohan@acme.dev", role: "Manager", status: "Active", createdAt: now },
        { id: uid(), name: "Neha Singh", email: "neha@acme.dev", role: "Analyst", status: "Suspended", createdAt: now },
    ];
}

/* ------------------------ component ------------------------ */

export default function RowInsertToast() {
    const [rows, setRows] = useState(() => seedRows());
    const [query, setQuery] = useState("");
    const [sortBy, setSortBy] = useState("createdAt-desc");

    // add-row modal
    const [open, setOpen] = useState(false);
    const [showPw, setShowPw] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        role: ROLES[0],
        status: STATUS[0],
        password: "",
    });
    const [errors, setErrors] = useState({});

    // delete confirm modal
    const [confirm, setConfirm] = useState({ open: false, row: null });

    // row toast state
    const stageRef = useRef(null);
    const scrollerRef = useRef(null);
    const rowRefs = useRef(new Map());
    const [toast, setToast] = useState({ show: false, top: 0, text: "", key: 0 });

    const filteredSorted = useMemo(() => {
        const q = query.trim().toLowerCase();
        let r = rows.filter(
            (x) =>
                !q ||
                x.name.toLowerCase().includes(q) ||
                x.email.toLowerCase().includes(q) ||
                x.role.toLowerCase().includes(q) ||
                x.status.toLowerCase().includes(q)
        );
        const [key, dir] = sortBy.split("-");
        r.sort((a, b) => {
            const vA = a[key];
            const vB = b[key];
            if (vA < vB) return dir === "asc" ? -1 : 1;
            if (vA > vB) return dir === "asc" ? 1 : -1;
            return 0;
        });
        return r;
    }, [rows, query, sortBy]);

    const showInsertToast = (id, text) => {
        const rowEl = rowRefs.current.get(id);
        const scrollEl = scrollerRef.current;
        const stageEl = stageRef.current;
        if (!rowEl || !scrollEl || !stageEl) return;

        const rowRect = rowEl.getBoundingClientRect();
        const scrollRect = scrollEl.getBoundingClientRect();
        const top = rowRect.top - scrollRect.top + scrollEl.scrollTop;

        rowEl.scrollIntoView({ block: "center", behavior: "smooth" });

        setToast((t) => ({
            show: true,
            top: Math.max(8, top - 8),
            text,
            key: t.key + 1,
        }));

        window.setTimeout(() => {
            setToast((t) => ({ ...t, show: false }));
        }, 1500);
    };

    const removeRow = (id) => {
        setRows((r) => r.filter((x) => x.id !== id));
    };

    // Submit new row
    const onSubmit = (e) => {
        e.preventDefault();
        const v = validate(form);
        setErrors(v);
        if (Object.keys(v).length) return;

        const id = uid();
        const newRow = {
            id,
            name: form.name.trim(),
            email: form.email.trim(),
            role: form.role,
            status: form.status,
            createdAt: new Date(),
        };

        setRows((r) => [newRow, ...r]);
        setOpen(false);

        setForm({ name: "", email: "", role: ROLES[0], status: STATUS[0], password: "" });
        setShowPw(false);
        setErrors({});

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                showInsertToast(id, `Added ${newRow.name} as ${newRow.role}`);
            });
        });
    };

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Row Insert Toast</h1>
                        <p className="muted">
                            Insert a row via modal; the table reflows with a highlight, and a contextual toast appears next to the newly added row.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Table controls">
                        <label className="ctrl">
                            <span>Search</span>
                            <input
                                type="text"
                                placeholder="Name, email, role, status…"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </label>

                        <label className="ctrl">
                            <span>Sort</span>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="createdAt-desc">Newest</option>
                                <option value="createdAt-asc">Oldest</option>
                                <option value="name-asc">Name A–Z</option>
                                <option value="name-desc">Name Z–A</option>
                                <option value="role-asc">Role A–Z</option>
                                <option value="role-desc">Role Z–A</option>
                            </select>
                        </label>

                        <button className="btn primary" onClick={() => setOpen(true)}>+ Add Row</button>
                    </div>
                </Styled.Header>

                <Styled.Stage ref={stageRef}>
                    <div className="tableWrap" ref={scrollerRef}>
                        <table className="table" role="grid">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Created</th>
                                    <th scope="col" className="actions">Actions</th>
                                </tr>
                            </thead>

                            <motion.tbody layout>
                                <AnimatePresence initial={false}>
                                    {filteredSorted.map((row) => (
                                        <motion.tr
                                            key={row.id}
                                            layout
                                            ref={(el) => rowRefs.current.set(row.id, el)}
                                            initial={{ opacity: 0, y: -12, backgroundColor: "hsl(210 90% 56% / 0.14)" }}
                                            animate={{ opacity: 1, y: 0, backgroundColor: "transparent" }}
                                            exit={{ opacity: 0, y: -8, transition: { duration: 0.18 } }}
                                            transition={{ layout: { type: "spring", stiffness: 420, damping: 38, mass: 0.8 }, duration: 0.6 }}
                                        >
                                            <td data-title="Name">
                                                <div className="cell-main">
                                                    <div className="avatar" aria-hidden="true">{row.name.charAt(0).toUpperCase()}</div>
                                                    <div className="text">
                                                        <b className="name">{row.name}</b>
                                                        <span className="sub">{row.email}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-title="Email" className="mono">{row.email}</td>
                                            <td data-title="Role">{row.role}</td>
                                            <td data-title="Status">
                                                <span className={`badge ${row.status.toLowerCase()}`}>{row.status}</span>
                                            </td>
                                            <td data-title="Created" title={row.createdAt.toISOString()}>{fmtDate(row.createdAt)}</td>
                                            <td className="actions">
                                                <button
                                                    className="btn ghost danger"
                                                    title="Delete"
                                                    onClick={() => setConfirm({ open: true, row })}
                                                >
                                                    <TrashIcon />
                                                    <span>Delete</span>
                                                </button>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </AnimatePresence>
                            </motion.tbody>
                        </table>
                    </div>

                    {/* Row Insert Toast */}
                    <AnimatePresence>
                        {toast.show && (
                            <motion.div
                                key={toast.key}
                                className="rowToast"
                                style={{ top: toast.top }}
                                initial={{ x: 24, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 16, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                                role="status"
                                aria-live="polite"
                            >
                                <span className="ok"><CheckIcon /></span>
                                <span className="msg">{toast.text}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Styled.Stage>

                {/* Modal: Add Row */}
                <AnimatePresence>
                    {open && (
                        <Styled.ModalOverlay
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
                        >
                            <motion.div
                                className="modal"
                                initial={{ scale: 0.96, y: 6, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 28 } }}
                                exit={{ scale: 0.98, y: 8, opacity: 0, transition: { duration: 0.18 } }}
                                role="dialog" aria-modal="true" aria-labelledby="m-title"
                            >
                                <div className="mHead">
                                    <h3 id="m-title">Create New Row</h3>
                                </div>

                                <form className="mBody form" onSubmit={onSubmit} noValidate>
                                    <div className="grid">
                                        <label className={`field ${errors.name ? "invalid" : ""}`}>
                                            <span>Name</span>
                                            <input
                                                type="text"
                                                value={form.name}
                                                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                                                placeholder="Enter full name"
                                                required
                                            />
                                            {errors.name && <em className="err">{errors.name}</em>}
                                        </label>

                                        <label className={`field ${errors.email ? "invalid" : ""}`}>
                                            <span>Email</span>
                                            <input
                                                type="email"
                                                value={form.email}
                                                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                                                placeholder="name@example.com"
                                                required
                                            />
                                            {errors.email && <em className="err">{errors.email}</em>}
                                        </label>

                                        <label className={`field ${errors.role ? "invalid" : ""}`}>
                                            <span>Role</span>
                                            <select
                                                value={form.role}
                                                onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
                                                required
                                            >
                                                {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                                            </select>
                                            {errors.role && <em className="err">{errors.role}</em>}
                                        </label>

                                        <label className="field">
                                            <span>Status</span>
                                            <select
                                                value={form.status}
                                                onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))}
                                            >
                                                {STATUS.map((s) => <option key={s} value={s}>{s}</option>)}
                                            </select>
                                        </label>

                                        <label className={`field pw ${errors.password ? "invalid" : ""}`}>
                                            <span>Password</span>
                                            <div className="pwWrap">
                                                <input
                                                    type={showPw ? "text" : "password"}
                                                    value={form.password}
                                                    onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                                                    placeholder="Strong password"
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    className="eye"
                                                    onClick={() => setShowPw((s) => !s)}
                                                    aria-label={showPw ? "Hide password" : "Show password"}
                                                >
                                                    {showPw ? <EyeOffIcon /> : <EyeIcon />}
                                                </button>
                                            </div>
                                            {errors.password && <em className="err">{errors.password}</em>}
                                        </label>
                                    </div>
                                </form>

                                <div className="mFoot">
                                    <button className="btn ghost" onClick={() => setOpen(false)}>Cancel</button>
                                    <button className="btn primary" onClick={onSubmit}>Create</button>
                                </div>
                            </motion.div>
                        </Styled.ModalOverlay>
                    )}
                </AnimatePresence>

                {/* Modal: Confirm Delete */}
                <AnimatePresence>
                    {confirm.open && confirm.row && (
                        <Styled.ModalOverlay
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={(e) => { if (e.target === e.currentTarget) setConfirm({ open: false, row: null }); }}
                        >
                            <motion.div
                                className="modal"
                                initial={{ scale: 0.96, y: 6, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1, transition: { type: "spring", stiffness: 320, damping: 28 } }}
                                exit={{ scale: 0.98, y: 8, opacity: 0, transition: { duration: 0.18 } }}
                                role="dialog" aria-modal="true" aria-labelledby="cd-title"
                            >
                                <div className="mHead">
                                    <h3 id="cd-title">Delete Row?</h3>
                                </div>

                                <div className="mBody">
                                    <p className="muted">
                                        You are about to delete the following user. This action cannot be undone.
                                    </p>
                                    <ul className="details">
                                        <li><b>Name:</b> {confirm.row.name}</li>
                                        <li><b>Email:</b> {confirm.row.email}</li>
                                        <li><b>Role/Status:</b> {confirm.row.role} / {confirm.row.status}</li>
                                    </ul>
                                </div>

                                <div className="mFoot">
                                    <button
                                        className="btn ghost"
                                        onClick={() => setConfirm({ open: false, row: null })}
                                        autoFocus
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="btn danger"
                                        onClick={() => {
                                            const id = confirm.row.id;
                                            setConfirm({ open: false, row: null });
                                            removeRow(id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </motion.div>
                        </Styled.ModalOverlay>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
