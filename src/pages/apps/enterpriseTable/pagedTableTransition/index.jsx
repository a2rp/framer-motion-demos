import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled, ModalOverlay } from "./styled";

/* ---------- Utilities ---------- */
const roles = ["Admin", "Manager", "Editor", "Viewer"];
const statuses = ["Active", "Invited", "Suspended"];

const uid = (() => { let i = 1000; return () => ++i; })();

function seedUsers(n = 57) {
    const first = ["Ava", "Noah", "Liam", "Mia", "Ivy", "Zara", "Leo", "Aria", "Evan", "Nina", "Theo", "Emma"];
    const last = ["Patel", "Khan", "Sharma", "Singh", "Das", "Roy", "Mehta", "Kapoor", "Gupta", "Bose", "Joshi", "Nair"];
    const arr = [];
    for (let i = 0; i < n; i++) {
        const name = `${first[i % first.length]} ${last[(i * 7) % last.length]}`;
        const email = `${name.toLowerCase().replace(/\s+/g, ".")}@example.com`;
        const role = roles[(i * 5 + 3) % roles.length];
        const status = statuses[(i * 11 + 2) % statuses.length];
        const createdAt = new Date(Date.now() - (i + 1) * 86400000);
        arr.push({ id: uid(), name, email, role, status, createdAt });
    }
    return arr;
}

const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passRx = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

/* ---------- Icons (inline SVG) ---------- */
const IconSort = ({ dir }) => (
    <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden focusable="false">
        <path fill="currentColor" d="M7 14l5 5 5-5H7z" opacity={dir === "asc" ? 0.25 : 1} />
        <path fill="currentColor" d="M7 10l5-5 5 5H7z" opacity={dir === "desc" ? 0.25 : 1} />
    </svg>
);
const Eye = (props) => (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden focusable="false" {...props}>
        <path fill="currentColor" d="M12 5c5 0 9.27 3.11 10.78 7.5C21.27 16.89 17 20 12 20s-9.27-3.11-10.78-7.5C2.73 8.11 7 5 12 5zm0 2C8.03 7 4.53 9.28 3.1 12.5 4.53 15.72 8.03 18 12 18s7.47-2.28 8.9-5.5C19.47 9.28 15.97 7 12 7zm0 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
    </svg>
);
const EyeOff = (props) => (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden focusable="false" {...props}>
        <path fill="currentColor" d="M2 4.27L3.28 3 21 20.72 19.73 22l-3.1-3.1A10.52 10.52 0 0112 20C7 20 2.73 16.89 1.22 12.5c.78-2.26 2.36-4.17 4.37-5.5L2 4.27zM7.12 9.4a3.5 3.5 0 004.48 4.48l-4.48-4.48zM12 7c1 0 1.94.24 2.77.66l-1.5 1.5A3.5 3.5 0 008.84 13l-1.5 1.5A8.46 8.46 0 013.1 12.5C4.53 9.28 8.03 7 12 7zm8.9 5.5c-.57 1.29-1.49 2.43-2.64 3.35L16.77 14a6.5 6.5 0 00.37-2 6.5 6.5 0 00-.74-3l1.26-1.26c1.55.98 2.79 2.33 3.24 3.76z" />
    </svg>
);

/* ---------- Component ---------- */
export default function PagedTableTransition() {
    // data
    const [rows, setRows] = useState(() => seedUsers());

    // ui state
    const [query, setQuery] = useState("");
    const [sortKey, setSortKey] = useState("createdAt");
    const [sortDir, setSortDir] = useState("desc"); // asc | desc
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [selected, setSelected] = useState(() => new Set());

    // modals/toasts
    const [showAdd, setShowAdd] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showView, setShowView] = useState(false);
    const [viewRow, setViewRow] = useState(null);
    const [toast, setToast] = useState("");

    // add form
    const [f, setF] = useState({
        name: "", email: "", role: "Viewer", status: "Invited",
        password: "", confirm: "", showPass: false, showConfirm: false,
    });
    const [err, setErr] = useState({});

    // derived
    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return rows;
        return rows.filter(r =>
            r.name.toLowerCase().includes(q) ||
            r.email.toLowerCase().includes(q) ||
            r.role.toLowerCase().includes(q) ||
            r.status.toLowerCase().includes(q)
        );
    }, [rows, query]);

    const sorted = useMemo(() => {
        const a = filtered.slice();
        a.sort((x, y) => {
            let vx = x[sortKey], vy = y[sortKey];
            if (vx instanceof Date) vx = vx.getTime();
            if (vy instanceof Date) vy = vy.getTime();
            if (typeof vx === "string") vx = vx.toLowerCase();
            if (typeof vy === "string") vy = vy.toLowerCase();
            if (vx < vy) return sortDir === "asc" ? -1 : 1;
            if (vx > vy) return sortDir === "asc" ? 1 : -1;
            return 0;
        });
        return a;
    }, [filtered, sortKey, sortDir]);

    const pageCount = Math.max(1, Math.ceil(sorted.length / pageSize));
    const safePage = Math.min(page, pageCount - 1);
    const pageItems = useMemo(() => {
        const start = safePage * pageSize;
        return sorted.slice(start, start + pageSize);
    }, [sorted, safePage, pageSize]);
    useEffect(() => { setPage(0); }, [query, pageSize]);

    // selection
    const toggleOne = (id) => {
        setSelected(prev => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    };
    const onToggleAll = () => {
        const ids = pageItems.map(x => x.id);
        const all = ids.every(id => selected.has(id));
        setSelected(prev => {
            const next = new Set(prev);
            ids.forEach(id => all ? next.delete(id) : next.add(id));
            return next;
        });
    };

    // sorting
    const onSort = (key) => {
        setSortKey(k => {
            if (k === key) setSortDir(d => (d === "asc" ? "desc" : "asc"));
            else setSortDir("asc");
            return key;
        });
    };

    // add user modal
    const validate = () => {
        const e = {};
        if (!f.name || f.name.trim().length < 2) e.name = "Please enter at least 2 characters.";
        if (!emailRx.test(f.email)) e.email = "Please enter a valid email.";
        if (!roles.includes(f.role)) e.role = "Select a valid role.";
        if (!statuses.includes(f.status)) e.status = "Select a valid status.";
        if (!passRx.test(f.password)) e.password = "Min 8 chars with at least 1 letter and 1 number.";
        if (f.confirm !== f.password) e.confirm = "Passwords do not match.";
        setErr(e);
        return Object.keys(e).length === 0;
    };

    const onAdd = (ev) => {
        ev.preventDefault();
        if (!validate()) return;
        const newRow = {
            id: uid(),
            name: f.name.trim(),
            email: f.email.trim().toLowerCase(),
            role: f.role,
            status: f.status,
            createdAt: new Date(),
        };
        setRows(r => [newRow, ...r]);
        setShowAdd(false);
        setF({ name: "", email: "", role: "Viewer", status: "Invited", password: "", confirm: "", showPass: false, showConfirm: false });
        setErr({});
        setToast("User added");
    };

    // delete selected modal
    const onDelete = () => {
        setRows(r => r.filter(x => !selected.has(x.id)));
        setSelected(new Set());
        setShowDelete(false);
        setToast("Deleted selected");
    };

    const onView = (row) => {
        setViewRow(row);
        setShowView(true);
    };

    // toast auto-hide
    const toastTimer = useRef(0);
    useEffect(() => {
        if (!toast) return;
        clearTimeout(toastTimer.current);
        toastTimer.current = setTimeout(() => setToast(""), 1600);
        return () => clearTimeout(toastTimer.current);
    }, [toast]);

    const pageKey = `${safePage}-${pageSize}-${sortKey}-${sortDir}`;

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Paged Table Transition</h1>
                        <p className="muted">Professional data grid with springy page swaps, sorting, search, bulk actions, and an add-user modal.</p>
                    </div>

                    <div className="controls" role="toolbar">
                        <div className="search">
                            <input
                                type="search"
                                placeholder="Search name, email, role, status…"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                aria-label="Search users"
                            />
                        </div>

                        <div className="size">
                            <label>Rows</label>
                            <select value={pageSize} onChange={(e) => setPageSize(parseInt(e.target.value, 10))} aria-label="Rows per page">
                                {[10, 20, 30].map(n => <option key={n} value={n}>{n}</option>)}
                            </select>
                        </div>

                        <button className="btn primary" onClick={() => setShowAdd(true)}>+ Add User</button>
                    </div>
                </Styled.Header>

                {/* Bulk toolbar */}
                <AnimatePresence initial={false}>
                    {selected.size > 0 && (
                        <motion.div
                            className="bulk"
                            initial={{ y: -12, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -8, opacity: 0 }}
                            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="label">{selected.size} selected</span>
                            <button className="btn ghost" onClick={() => setSelected(new Set())}>Clear</button>
                            <button className="btn danger" onClick={() => setShowDelete(true)}>Delete</button>
                        </motion.div>
                    )}
                </AnimatePresence>

                <Styled.Stage>
                    {/* Table header */}
                    <div className="thead" role="rowgroup">
                        <div className="row head" role="row">
                            <div className="cell chk" role="columnheader" aria-label="Select all">
                                <input
                                    type="checkbox"
                                    checked={pageItems.length > 0 && pageItems.every(x => selected.has(x.id))}
                                    onChange={onToggleAll}
                                    aria-label="Toggle all rows on this page"
                                />
                            </div>

                            {[
                                { key: "name", label: "Name" },
                                { key: "email", label: "Email" },
                                { key: "role", label: "Role" },
                                { key: "status", label: "Status" },
                                { key: "createdAt", label: "Created" },
                            ].map(col => (
                                <button
                                    key={col.key}
                                    className={`cell sort ${sortKey === col.key ? "active" : ""}`}
                                    role="columnheader"
                                    onClick={() => onSort(col.key)}
                                    title={`Sort by ${col.label}`}
                                >
                                    <span>{col.label}</span>
                                    <motion.span
                                        className="sortIcon"
                                        animate={{ rotate: sortKey === col.key && sortDir === "desc" ? 180 : 0 }}
                                        transition={{ duration: 0.18 }}
                                    >
                                        <IconSort dir={sortDir} />
                                    </motion.span>
                                </button>
                            ))}

                            <div className="cell actions headOnly" role="columnheader">Actions</div>
                        </div>
                    </div>

                    {/* Page body (with transitions) */}
                    <div className="tbody" role="rowgroup">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={pageKey}
                                className="page"
                                initial={{ y: 12, opacity: 0 }}
                                animate={{ y: 0, opacity: 1, transition: { duration: 0.26, ease: [0.22, 1, 0.36, 1] } }}
                                exit={{ y: -12, opacity: 0, transition: { duration: 0.2 } }}
                            >
                                {/* rows (stagger) */}
                                <motion.div
                                    className="rows"
                                    initial="init"
                                    animate="show"
                                    variants={{
                                        show: { transition: { staggerChildren: 0.035 } },
                                    }}
                                >
                                    {pageItems.map((r) => (
                                        <motion.div
                                            key={r.id}
                                            className={`row body ${selected.has(r.id) ? "is-selected" : ""}`}
                                            variants={{
                                                init: { opacity: 0, y: 10 },
                                                show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.2, 0.8, 0.2, 1] } },
                                            }}
                                            layout
                                            role="row"
                                        >
                                            <div className="cell chk" role="gridcell">
                                                <input
                                                    type="checkbox"
                                                    checked={selected.has(r.id)}
                                                    onChange={() => toggleOne(r.id)}
                                                    aria-label={`Select ${r.name}`}
                                                />
                                            </div>

                                            <div className="cell name" role="gridcell">
                                                <b>{r.name}</b>
                                                <span className="sub">{r.email}</span>
                                            </div>

                                            <div className="cell email" role="gridcell">{r.email}</div>
                                            <div className="cell role" role="gridcell">{r.role}</div>
                                            <div className="cell status" role="gridcell">
                                                <span className={`pill ${r.status.toLowerCase()}`}>{r.status}</span>
                                            </div>
                                            <div className="cell created" role="gridcell">
                                                {new Intl.DateTimeFormat("en-IN", {
                                                    year: "numeric", month: "short", day: "2-digit",
                                                }).format(r.createdAt)}
                                            </div>
                                            <div className="cell actions" role="gridcell">
                                                <button className="btn ghost sm" onClick={() => onView(r)}>View</button>
                                                <button className="btn ghost sm" onClick={() => { setSelected(new Set([r.id])); setShowDelete(true); }}>Delete</button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {pageItems.length === 0 && (
                                    <div className="empty">
                                        No results. Try adjusting your search or filters.
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination */}
                    <div className="tfoot" role="rowgroup">
                        <div className="pager">
                            <button
                                className="btn"
                                onClick={() => setPage(p => Math.max(0, p - 1))}
                                disabled={safePage === 0}
                                title="Previous page"
                            >← Prev</button>

                            <div className="pageInfo">
                                Page <b>{safePage + 1}</b> of <b>{pageCount}</b>
                            </div>

                            <button
                                className="btn"
                                onClick={() => setPage(p => Math.min(pageCount - 1, p + 1))}
                                disabled={safePage >= pageCount - 1}
                                title="Next page"
                            >Next →</button>
                        </div>
                    </div>
                </Styled.Stage>

                {/* Toast */}
                <AnimatePresence>
                    {toast && (
                        <motion.div
                            className="toast"
                            initial={{ y: 16, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 8, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                        >
                            {toast}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* View Modal */}
                <AnimatePresence>
                    {showView && viewRow && (
                        <ModalOverlay as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onMouseDown={(e) => {
                                // click outside to close (but keep interactions inside)
                                if (e.target === e.currentTarget) setShowView(false);
                            }}
                        >
                            <motion.div
                                className="modal"
                                initial={{ y: 20, scale: 0.98, opacity: 0 }}
                                animate={{ y: 0, scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 28 } }}
                                exit={{ y: 10, opacity: 0, transition: { duration: 0.18 } }}
                                role="dialog" aria-modal="true" aria-labelledby="view-user-title"
                            >
                                <div className="mHead">
                                    <h3 id="view-user-title">User Details</h3>
                                </div>
                                <div className="mBody">
                                    <div className="kv">
                                        <div className="section">
                                            <dt>ID</dt>
                                            <dd><code>{viewRow.id}</code></dd>
                                        </div>

                                        <div className="section">
                                            <dt>Name</dt>
                                            <dd>{viewRow.name}</dd>
                                        </div>

                                        <div className="section">
                                            <dt>Email</dt>
                                            <dd>
                                                <a href={`mailto:${viewRow.email}`}>{viewRow.email}</a>
                                            </dd>
                                        </div>

                                        <div className="section">
                                            <dt>Role</dt>
                                            <dd>{viewRow.role}</dd>
                                        </div>

                                        <div className="section">
                                            <dt>Status</dt>
                                            <dd><span className={`pill ${viewRow.status.toLowerCase()}`}>{viewRow.status}</span></dd>
                                        </div>

                                        <div className="section">
                                            <dt>Created</dt>
                                            <dd>
                                                {new Intl.DateTimeFormat("en-IN", {
                                                    year: "numeric", month: "short", day: "2-digit",
                                                    hour: "2-digit", minute: "2-digit"
                                                }).format(viewRow.createdAt)}
                                            </dd>
                                        </div>
                                    </div>
                                </div>
                                <div className="mFoot">
                                    <button className="btn ghost" onClick={() => setShowView(false)}>Close</button>
                                    <button
                                        className="btn primary"
                                        onClick={async () => {
                                            try {
                                                await navigator.clipboard.writeText(`${viewRow.name} <${viewRow.email}>`);
                                                setToast("Copied contact");
                                            } catch {
                                                setToast("Copy failed");
                                            }
                                        }}
                                    >
                                        Copy Contact
                                    </button>
                                </div>
                            </motion.div>
                        </ModalOverlay>
                    )}
                </AnimatePresence>

                {/* Add User Modal */}
                <AnimatePresence>
                    {showAdd && (
                        <ModalOverlay as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="modal"
                                initial={{ y: 20, scale: 0.98, opacity: 0 }}
                                animate={{ y: 0, scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 28 } }}
                                exit={{ y: 10, opacity: 0, transition: { duration: 0.18 } }}
                                role="dialog" aria-modal="true" aria-labelledby="add-user-title"
                            >
                                <div className="mHead">
                                    <h3 id="add-user-title">Add User</h3>
                                </div>
                                <form className="mBody" onSubmit={onAdd} noValidate>
                                    <div className={`field ${err.name ? "hasErr" : ""}`}>
                                        <label>Name</label>
                                        <input
                                            type="text" value={f.name}
                                            onChange={(e) => setF({ ...f, name: e.target.value })}
                                            placeholder="Full name" required
                                        />
                                        {err.name && <span className="err">{err.name}</span>}
                                    </div>

                                    <div className={`field ${err.email ? "hasErr" : ""}`}>
                                        <label>Email</label>
                                        <input
                                            type="email" value={f.email}
                                            onChange={(e) => setF({ ...f, email: e.target.value })}
                                            placeholder="name@example.com" required
                                        />
                                        {err.email && <span className="err">{err.email}</span>}
                                    </div>

                                    <div className="grid2">
                                        <div className={`field ${err.role ? "hasErr" : ""}`}>
                                            <label>Role</label>
                                            <select value={f.role} onChange={(e) => setF({ ...f, role: e.target.value })}>
                                                {roles.map(r => <option key={r} value={r}>{r}</option>)}
                                            </select>
                                            {err.role && <span className="err">{err.role}</span>}
                                        </div>
                                        <div className={`field ${err.status ? "hasErr" : ""}`}>
                                            <label>Status</label>
                                            <select value={f.status} onChange={(e) => setF({ ...f, status: e.target.value })}>
                                                {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                                            </select>
                                            {err.status && <span className="err">{err.status}</span>}
                                        </div>
                                    </div>

                                    <div className="grid2">
                                        <div className={`field withEye ${err.password ? "hasErr" : ""}`}>
                                            <label>Password</label>
                                            <div className="eyeWrap">
                                                <input
                                                    type={f.showPass ? "text" : "password"}
                                                    value={f.password}
                                                    onChange={(e) => setF({ ...f, password: e.target.value })}
                                                    placeholder="••••••••" required
                                                />
                                                <button
                                                    type="button" className="eyeBtn"
                                                    onClick={() => setF({ ...f, showPass: !f.showPass })}
                                                    aria-label={f.showPass ? "Hide password" : "Show password"}
                                                >
                                                    {f.showPass ? <EyeOff /> : <Eye />}
                                                </button>
                                            </div>
                                            {err.password && <span className="err">{err.password}</span>}
                                        </div>

                                        <div className={`field withEye ${err.confirm ? "hasErr" : ""}`}>
                                            <label>Confirm Password</label>
                                            <div className="eyeWrap">
                                                <input
                                                    type={f.showConfirm ? "text" : "password"}
                                                    value={f.confirm}
                                                    onChange={(e) => setF({ ...f, confirm: e.target.value })}
                                                    placeholder="••••••••" required
                                                />
                                                <button
                                                    type="button" className="eyeBtn"
                                                    onClick={() => setF({ ...f, showConfirm: !f.showConfirm })}
                                                    aria-label={f.showConfirm ? "Hide confirmation" : "Show confirmation"}
                                                >
                                                    {f.showConfirm ? <EyeOff /> : <Eye />}
                                                </button>
                                            </div>
                                            {err.confirm && <span className="err">{err.confirm}</span>}
                                        </div>
                                    </div>
                                </form>
                                <div className="mFoot">
                                    <button className="btn ghost" onClick={() => { setShowAdd(false); setErr({}); }}>Cancel</button>
                                    <button className="btn primary" onClick={onAdd}>Save</button>
                                </div>
                            </motion.div>
                        </ModalOverlay>
                    )}
                </AnimatePresence>

                {/* Delete confirm modal */}
                <AnimatePresence>
                    {showDelete && (
                        <ModalOverlay as={motion.div}
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="modal"
                                initial={{ y: 20, scale: 0.98, opacity: 0 }}
                                animate={{ y: 0, scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 28 } }}
                                exit={{ y: 10, opacity: 0, transition: { duration: 0.18 } }}
                                role="dialog" aria-modal="true" aria-labelledby="del-title"
                            >
                                <div className="mHead"><h3 id="del-title">Delete users?</h3></div>
                                <div className="mBody">
                                    <p className="muted">You’re about to delete <b>{selected.size}</b> user(s). This action cannot be undone.</p>
                                    <ul className="details">
                                        {[...selected].map(id => {
                                            const r = rows.find(x => x.id === id);
                                            return r ? <li key={id}>{r.name} &lt;{r.email}&gt;</li> : null;
                                        })}
                                    </ul>
                                </div>
                                <div className="mFoot">
                                    <button className="btn ghost" onClick={() => setShowDelete(false)}>Cancel</button>
                                    <button className="btn danger" onClick={onDelete}>Delete</button>
                                </div>
                            </motion.div>
                        </ModalOverlay>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
