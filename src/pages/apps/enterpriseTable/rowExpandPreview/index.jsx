import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";
import { TbChevronDown, TbSearch, TbEye, TbEyeOff } from "react-icons/tb";

/* ---------- Fake data (stable) ---------- */
const ROLES = ["Admin", "Manager", "Analyst", "Viewer"];
const STATUS = ["Active", "Invited", "Suspended"];

function seedUsers(n = 12) {
    const rand = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
    const pick = (arr) => arr[rand(0, arr.length - 1)];
    const names = [
        "Ashish Ranjan", "Priya Mehta", "Rohit Kumar", "Aman Verma",
        "Neha Gupta", "Vikram Singh", "Sana Khan", "Arjun Iyer",
        "Ritu Sharma", "Kunal Desai", "Meera Nair", "Kabir Ali",
        "Ananya Roy", "Rhea Kapoor", "Ishaan Joshi",
    ];

    const emails = (name) =>
        name.toLowerCase().replace(/[^a-z]+/g, ".") + "@example.com";

    return Array.from({ length: n }, (_, i) => {
        const name = names[i % names.length];
        return {
            id: `u-${i + 1}`,
            name,
            email: emails(name),
            role: pick(ROLES),
            status: pick(STATUS),
            lastActive: Date.now() - rand(1, 30) * 86400000,
            billable: !!(i % 2),
            spend: +(rand(1200, 9800) + Math.random()).toFixed(2),
        };
    });
}

/* ---------- Utilities ---------- */
const formatDate = (ts) =>
    new Intl.DateTimeFormat("en-IN", {
        year: "numeric",
        month: "short",
        day: "2-digit",
    }).format(ts);

const currency = (n) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

/* ---------- Main ---------- */
export default function RowExpandPreview() {
    const [q, setQ] = useState("");
    const [status, setStatus] = useState("all");
    const [sort, setSort] = useState("date-desc");
    const [rows, setRows] = useState(() => seedUsers(16));
    const [expandedId, setExpandedId] = useState(null);

    // Modal state
    const [modalOpen, setModalOpen] = useState(false);
    const [editing, setEditing] = useState(null);

    const onExpand = (id) => setExpandedId((cur) => (cur === id ? null : id));
    const closeModal = () => (setModalOpen(false), setEditing(null));

    const filtered = useMemo(() => {
        const needle = q.trim().toLowerCase();
        let out = rows.filter((r) => {
            const hay = `${r.name} ${r.email} ${r.role} ${r.status}`.toLowerCase();
            const okText = !needle || hay.includes(needle);
            const okStatus = status === "all" || r.status === status;
            return okText && okStatus;
        });
        switch (sort) {
            case "date-desc":
                out.sort((a, b) => b.lastActive - a.lastActive); break;
            case "date-asc":
                out.sort((a, b) => a.lastActive - b.lastActive); break;
            case "spend-desc":
                out.sort((a, b) => b.spend - a.spend); break;
            case "spend-asc":
                out.sort((a, b) => a.spend - b.spend); break;
            case "name":
                out.sort((a, b) => a.name.localeCompare(b.name)); break;
            default:
                break;
        }
        return out;
    }, [rows, q, status, sort]);

    const startEdit = (row) => {
        setEditing({
            id: row.id,
            name: row.name,
            email: row.email,
            role: row.role,
            password: "",
            showPw: false,
        });
        setModalOpen(true);
    };

    const saveEdit = () => {
        // Basic validations
        const errs = {};
        if (!editing.name.trim()) errs.name = "Name is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editing.email)) errs.email = "Enter a valid email.";
        if (!ROLES.includes(editing.role)) errs.role = "Choose a role.";
        if (editing.password && editing.password.length < 8) {
            errs.password = "Password must be at least 8 characters.";
        }

        if (Object.keys(errs).length) {
            setEditing((e) => ({ ...e, _errors: errs }));
            return;
        }

        // Persist (mock)
        setRows((rs) =>
            rs.map((r) =>
                r.id === editing.id
                    ? {
                        ...r,
                        name: editing.name.trim(),
                        email: editing.email.trim(),
                        role: editing.role,
                    }
                    : r
            )
        );
        closeModal();
    };

    const togglePw = () =>
        setEditing((e) => ({ ...e, showPw: !e.showPw }));

    // Focus first invalid input
    const firstInvalidRef = useRef(null);
    useEffect(() => {
        if (editing?._errors) {
            firstInvalidRef.current?.focus();
        }
    }, [editing?._errors]);

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="title">
                        <h1>Row Expand Preview</h1>
                        <p className="muted">
                            Click a row to expand details. Animates height/opacity, rotates caret, and keeps layout buttery with FLIP.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Table controls">
                        <label className="search">
                            <TbSearch size={18} aria-hidden />
                            <input
                                type="text"
                                placeholder="Search name, email, role, status"
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                            />
                        </label>

                        <label className="ctrl">
                            <span>Status</span>
                            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="all">All</option>
                                {STATUS.map((s) => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </label>

                        <label className="ctrl">
                            <span>Sort</span>
                            <select value={sort} onChange={(e) => setSort(e.target.value)}>
                                <option value="date-desc">Last active ↓</option>
                                <option value="date-asc">Last active ↑</option>
                                <option value="spend-desc">Spend ↓</option>
                                <option value="spend-asc">Spend ↑</option>
                                <option value="name">Name A→Z</option>
                            </select>
                        </label>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <LayoutGroup id="et">
                        <div className="tableWrap">
                            <table className="table" aria-label="Users">
                                <thead>
                                    <tr>
                                        <th style={{ width: 42 }} aria-label="expand column" />
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th style={{ textAlign: "right" }}>Spend</th>
                                        <th style={{ width: 140 }}>Last Active</th>
                                        <th style={{ width: 100 }} aria-label="actions column" />
                                    </tr>
                                </thead>

                                <tbody>
                                    {filtered.map((r) => {
                                        const isOpen = expandedId === r.id;
                                        return (
                                            <FragmentRow
                                                key={r.id}
                                                row={r}
                                                isOpen={isOpen}
                                                onToggle={() => onExpand(r.id)}
                                                onEdit={() => startEdit(r)}
                                            />
                                        );
                                    })}

                                    {filtered.length === 0 && (
                                        <tr className="empty">
                                            <td colSpan={8}>
                                                <div className="emptyBox">
                                                    No results. Try a different search, filter, or sort.
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </LayoutGroup>
                </Styled.Stage>

                {/* Modal */}
                <AnimatePresence>
                    {modalOpen && editing && (
                        <Styled.ModalOverlay
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="modal"
                                layout
                                initial={{ y: 16, scale: 0.98, opacity: 0 }}
                                animate={{ y: 0, scale: 1, opacity: 1, transition: { type: "spring", stiffness: 280, damping: 26 } }}
                                exit={{ y: 12, scale: 0.98, opacity: 0, transition: { duration: 0.18 } }}
                            >
                                <div className="mHead">
                                    <h3>Edit User</h3>
                                    <p className="muted">
                                        Update profile basics. Password is optional; leave empty to keep.
                                    </p>
                                </div>

                                <div className="mBody">
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            saveEdit();
                                        }}
                                        noValidate
                                    >
                                        <div className="fgrid">
                                            <label className={`field ${editing._errors?.name ? "error" : ""}`}>
                                                <span>Name</span>
                                                <input
                                                    ref={!editing._errors?.name ? null : firstInvalidRef}
                                                    type="text"
                                                    value={editing.name}
                                                    onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                                                    aria-invalid={!!editing._errors?.name}
                                                    aria-describedby={editing._errors?.name ? "err-name" : undefined}
                                                />
                                                {editing._errors?.name && <em id="err-name">{editing._errors.name}</em>}
                                            </label>

                                            <label className={`field ${editing._errors?.email ? "error" : ""}`}>
                                                <span>Email</span>
                                                <input
                                                    ref={!editing._errors?.email || editing._errors?.name ? null : firstInvalidRef}
                                                    type="email"
                                                    value={editing.email}
                                                    onChange={(e) => setEditing({ ...editing, email: e.target.value })}
                                                    aria-invalid={!!editing._errors?.email}
                                                    aria-describedby={editing._errors?.email ? "err-email" : undefined}
                                                />
                                                {editing._errors?.email && <em id="err-email">{editing._errors.email}</em>}
                                            </label>

                                            <label className={`field ${editing._errors?.role ? "error" : ""}`}>
                                                <span>Role</span>
                                                <select
                                                    value={editing.role}
                                                    onChange={(e) => setEditing({ ...editing, role: e.target.value })}
                                                    aria-invalid={!!editing._errors?.role}
                                                    aria-describedby={editing._errors?.role ? "err-role" : undefined}
                                                >
                                                    <option value="">Select role</option>
                                                    {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                                                </select>
                                                {editing._errors?.role && <em id="err-role">{editing._errors.role}</em>}
                                            </label>

                                            <label className={`field ${editing._errors?.password ? "error" : ""}`}>
                                                <span>Password (optional)</span>
                                                <div className="pwWrap">
                                                    <input
                                                        type={editing.showPw ? "text" : "password"}
                                                        value={editing.password}
                                                        onChange={(e) => setEditing({ ...editing, password: e.target.value })}
                                                        placeholder="New password"
                                                        aria-invalid={!!editing._errors?.password}
                                                        aria-describedby={editing._errors?.password ? "err-pw" : undefined}
                                                    />
                                                    <button
                                                        type="button"
                                                        className="pwToggle"
                                                        onClick={togglePw}
                                                        aria-label={editing.showPw ? "Hide password" : "Show password"}
                                                    >
                                                        {editing.showPw ? <TbEyeOff size={18} /> : <TbEye size={18} />}
                                                    </button>
                                                </div>
                                                {editing._errors?.password && <em id="err-pw">{editing._errors.password}</em>}
                                            </label>
                                        </div>
                                    </form>
                                </div>

                                <div className="mFoot">
                                    <button className="btn ghost" type="button" onClick={closeModal}>Cancel</button>
                                    <button className="btn primary" type="button" onClick={saveEdit}>Save</button>
                                </div>
                            </motion.div>
                        </Styled.ModalOverlay>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}

/* ---------- Row Fragment (row + expandable preview) ---------- */
function FragmentRow({ row, isOpen, onToggle, onEdit }) {
    return (
        <>
            <motion.tr
                layout
                className="row"
                initial={false}
                whileHover={{ backgroundColor: "color-mix(in oklab, var(--surface) 92%, #0000)" }}
                transition={{ layout: { type: "spring", stiffness: 500, damping: 40 } }}
            >
                <td>
                    <button
                        className="iconBtn"
                        onClick={onToggle}
                        aria-expanded={isOpen}
                        aria-controls={`exp-${row.id}`}
                        title={isOpen ? "Collapse" : "Expand"}
                    >
                        <motion.span
                            initial={false}
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <TbChevronDown size={18} />
                        </motion.span>
                    </button>
                </td>
                <td>
                    <div className="cellUser">
                        <span className="avatar" style={{ ["--h"]: hueFromString(row.id) }} aria-hidden />
                        <div className="stack">
                            <b className="name">{row.name}</b>
                            <span className="sub muted">{row.email}</span>
                        </div>
                    </div>
                </td>
                <td className="hide-sm">{row.email}</td>
                <td>
                    <span className="chip">{row.role}</span>
                </td>
                <td>
                    <span className={`badge ${row.status.toLowerCase()}`}>{row.status}</span>
                </td>
                <td className="right">{currency(row.spend)}</td>
                <td>{formatDate(row.lastActive)}</td>
                <td>
                    <div className="rowActions">
                        <button className="btn ghost sm" onClick={onEdit}>Edit</button>
                    </div>
                </td>
            </motion.tr>

            {/* Expandable area */}
            <tr className="expandRow">
                <td colSpan={8} style={{ padding: 0 }}>
                    <AnimatePresence initial={false}>
                        {isOpen && (
                            <motion.div
                                id={`exp-${row.id}`}
                                className="expand"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="expandInner">
                                    <div className="kpis">
                                        <div className="kpi">
                                            <span className="kicker">Billable</span>
                                            <b className="val">{row.billable ? "Yes" : "No"}</b>
                                        </div>
                                        <div className="kpi">
                                            <span className="kicker">Spend</span>
                                            <b className="val">{currency(row.spend)}</b>
                                        </div>
                                        <div className="kpi">
                                            <span className="kicker">Last Active</span>
                                            <b className="val">{formatDate(row.lastActive)}</b>
                                        </div>
                                    </div>

                                    <div className="desc muted">
                                        This preview row is great for avoiding navigation: drop in notes, last activity,
                                        and quick actions without leaving the table.
                                    </div>

                                    <div className="actions">
                                        <button className="btn primary sm" onClick={onEdit}>Edit</button>
                                        <button className="btn ghost sm">Message</button>
                                        <button className="btn ghost sm">View History</button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </td>
            </tr>
        </>
    );
}

/* ---------- Helpers ---------- */
function hueFromString(id) {
    let h = 0;
    for (let i = 0; i < id.length; i++) h = (h + id.charCodeAt(i) * 17) % 360;
    return h;
}
