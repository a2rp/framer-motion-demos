import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled, ModalOverlay } from "./styled";
import {
    MdDeleteOutline,
    MdDownload,
    MdClose,
    MdSearch,
    MdVisibility,
    MdVisibilityOff,
    MdClear,
} from "react-icons/md";
import { toast } from "react-toastify";

/* ----------------------------- Fake data ----------------------------- */

const ROLES = ["Admin", "Manager", "Editor", "Viewer"];
const STATUSES = ["Active", "Invited", "Suspended"];

function makeUsers(n = 24) {
    const first = ["Ava", "Isha", "Rahul", "Karan", "Neha", "Rey", "Mira", "Arjun", "Zoya", "Kabir", "Tia", "Ira"];
    const last = ["Singh", "Sharma", "Joshi", "Patel", "Roy", "Mehta", "Kapoor", "Gupta", "Iyer", "Bose", "Khan", "Das"];
    const users = [];
    for (let i = 0; i < n; i++) {
        const f = first[i % first.length];
        const l = last[(i * 3) % last.length];
        const name = `${f} ${l}`;
        const email = `${f}.${l}${(i % 7) + 1}`.toLowerCase() + "@example.com";
        const role = ROLES[i % ROLES.length];
        const status = STATUSES[(i * 2) % STATUSES.length];
        const createdAt = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10);
        users.push({
            id: `u-${i + 1}`,
            name,
            email,
            role,
            status,
            createdAt,
        });
    }
    return users;
}

/* ------------------------- CSV helper & utils ------------------------ */

function downloadCSV(rows, filename = "export.csv") {
    const headers = ["id", "name", "email", "role", "status", "createdAt"];
    const csv =
        [headers.join(",")]
            .concat(
                rows.map((r) =>
                    headers.map((h) => String(r[h]).replace(/"/g, '""')).map((s) => `"${s}"`).join(",")
                )
            )
            .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
}

/* ----------------------------- Page View ----------------------------- */

export default function BulkSelectToolbar() {
    const [rows, setRows] = useState(() => makeUsers(24));
    const [q, setQ] = useState("");
    const [selection, setSelection] = useState(() => new Set());
    const [openDelete, setOpenDelete] = useState(false);

    const headerCheckRef = useRef(null);

    const filtered = useMemo(() => {
        const t = q.trim().toLowerCase();
        if (!t) return rows;
        return rows.filter((r) => {
            const hay = `${r.name} ${r.email} ${r.role} ${r.status}`.toLowerCase();
            return t.split(/\s+/).every((tok) => hay.includes(tok));
        });
    }, [rows, q]);

    const selectedCount = selection.size;
    const allFilteredIds = useMemo(() => filtered.map((r) => r.id), [filtered]);
    const allSelectedInFiltered = allFilteredIds.every((id) => selection.has(id));
    const someSelectedInFiltered = allFilteredIds.some((id) => selection.has(id));

    // Indeterminate checkbox UX
    useEffect(() => {
        if (headerCheckRef.current) {
            headerCheckRef.current.indeterminate = !allSelectedInFiltered && someSelectedInFiltered;
        }
    }, [allSelectedInFiltered, someSelectedInFiltered]);

    const toggleAllFiltered = () => {
        setSelection((prev) => {
            const next = new Set(prev);
            if (allSelectedInFiltered) {
                // unselect filtered
                allFilteredIds.forEach((id) => next.delete(id));
            } else {
                // select all filtered
                allFilteredIds.forEach((id) => next.add(id));
            }
            return next;
        });
    };

    const toggleOne = (id) => {
        setSelection((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const clearSelection = () => setSelection(new Set());

    const onExport = () => {
        if (!selectedCount) return;
        const selectedRows = rows.filter((r) => selection.has(r.id));
        downloadCSV(selectedRows, `users-${selectedCount}.csv`);
        toast.success(`Exported ${selectedCount} row${selectedCount > 1 ? "s" : ""}`);
    };

    const onConfirmDelete = ({ password, confirmText }) => {
        // Simple validations (you can plug real auth later)
        const okText = confirmText.trim().toUpperCase() === "DELETE";
        const okPwd = password.length >= 6;
        if (!okText || !okPwd) return false;

        const next = rows.filter((r) => !selection.has(r.id));
        setRows(next);
        setSelection(new Set());
        setOpenDelete(false);
        toast.success("Deleted selected users");
        return true;
    };

    // Animations
    const listVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: { staggerChildren: 0.025, delayChildren: 0.05 },
        },
    };
    const rowVariants = {
        initial: { opacity: 0, y: 8, scale: 0.995 },
        animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 420, damping: 34, mass: 0.8 } },
    };

    function formatDateLabel(iso) {
        try {
            // If it's plain YYYY-MM-DD, anchor to UTC midnight to avoid TZ drift
            const d = new Date(iso.length <= 10 ? `${iso}T00:00:00Z` : iso);
            return new Intl.DateTimeFormat("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }).format(d);
        } catch {
            return iso;
        }
    }

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Users</h1>
                        <p className="muted">Bulk-select rows; a smart toolbar appears with actions.</p>
                    </div>

                    <div className="tools">
                        <div className="search">
                            <MdSearch size={18} aria-hidden />
                            <input
                                type="search"
                                placeholder="Search name, email, role…"
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                aria-label="Search users"
                            />
                            {q && (
                                <button className="clear" title="Clear" onClick={() => setQ("")} aria-label="Clear search">
                                    <MdClear size={18} />
                                </button>
                            )}
                        </div>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <Styled.Table role="table" aria-label="Users">
                        <div className="thead" role="rowgroup">
                            <div className="tr" role="row">
                                <div className="th check" role="columnheader" aria-label="Select all">
                                    <input
                                        ref={headerCheckRef}
                                        type="checkbox"
                                        checked={allSelectedInFiltered && filtered.length > 0}
                                        onChange={toggleAllFiltered}
                                        aria-checked={
                                            allSelectedInFiltered ? "true" : someSelectedInFiltered ? "mixed" : "false"
                                        }
                                    />
                                </div>
                                <div className="th name" role="columnheader">Name</div>
                                <div className="th email" role="columnheader">Email</div>
                                <div className="th role" role="columnheader">Role</div>
                                <div className="th status" role="columnheader">Status</div>
                                <div className="th created" role="columnheader">Created</div>
                            </div>
                        </div>

                        <motion.div
                            className="tbody"
                            role="rowgroup"
                            variants={listVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <AnimatePresence initial={false}>
                                {filtered.map((r) => {
                                    const isSelected = selection.has(r.id);
                                    return (
                                        <motion.div
                                            key={r.id}
                                            className={`tr ${isSelected ? "selected" : ""}`}
                                            role="row"
                                            variants={rowVariants}
                                            layout
                                        >
                                            <div className="td check" role="cell">
                                                <input
                                                    type="checkbox"
                                                    checked={isSelected}
                                                    onChange={() => toggleOne(r.id)}
                                                    aria-label={`Select ${r.name}`}
                                                />
                                            </div>
                                            <div className="td name" role="cell">
                                                <div className="user">
                                                    <div className="avatar" aria-hidden>
                                                        {r.name.slice(0, 1)}
                                                    </div>
                                                    <div className="meta">
                                                        <div className="nm">{r.name}</div>
                                                        <div className="muted">{r.id}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="td email" role="cell">
                                                <a href={`mailto:${r.email}`}>{r.email}</a>
                                            </div>
                                            <div className="td role" role="cell">
                                                <span className="pill">{r.role}</span>
                                            </div>
                                            <div className="td status" role="cell">
                                                <span className={`status ${r.status.toLowerCase()}`}>{r.status}</span>
                                            </div>
                                            <div className="td created" role="cell">
                                                <time dateTime={r.createdAt} title={r.createdAt}>
                                                    {formatDateLabel(r.createdAt)}
                                                </time>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </motion.div>
                    </Styled.Table>
                </Styled.Stage>

                {/* Bulk toolbar */}
                <AnimatePresence>
                    {selectedCount > 0 && (
                        <Styled.Toolbar
                            as={motion.div}
                            initial={{ y: 24, opacity: 0 }}
                            animate={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 420, damping: 30 } }}
                            exit={{ y: 24, opacity: 0, transition: { duration: 0.15 } }}
                            role="region"
                            aria-label="Bulk actions"
                        >
                            <div className="left">
                                <span className="count">
                                    {selectedCount} selected
                                </span>
                                <button className="link" onClick={clearSelection}>Clear selection</button>
                            </div>
                            <div className="right">
                                <button className="btn ghost" onClick={onExport} title="Export CSV">
                                    <MdDownload size={18} />
                                    <span>Export</span>
                                </button>
                                <button className="btn danger" onClick={() => setOpenDelete(true)} title="Delete selected">
                                    <MdDeleteOutline size={18} />
                                    <span>Delete</span>
                                </button>
                            </div>
                        </Styled.Toolbar>
                    )}
                </AnimatePresence>

                {/* Secure delete modal */}
                <AnimatePresence>
                    {openDelete && (
                        <SecureDeleteModal
                            open={openDelete}
                            onClose={() => setOpenDelete(false)}
                            onConfirm={onConfirmDelete}
                            count={selectedCount}
                        />
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}

/* ---------------------------- Secure Modal --------------------------- */

function SecureDeleteModal({ open, onClose, onConfirm, count }) {
    const [confirmText, setConfirmText] = useState("");
    const [pwd, setPwd] = useState("");
    const [showPwd, setShowPwd] = useState(false);
    const [errors, setErrors] = useState({ text: "", pwd: "" });

    const canSubmit =
        confirmText.trim().toUpperCase() === "DELETE" && pwd.length >= 6;

    const handleSubmit = () => {
        const e = { text: "", pwd: "" };
        if (confirmText.trim().toUpperCase() !== "DELETE") e.text = 'Type "DELETE" to confirm.';
        if (pwd.length < 6) e.pwd = "Password must be at least 6 characters.";
        setErrors(e);
        if (e.text || e.pwd) return;
        const ok = onConfirm({ password: pwd, confirmText });
        if (!ok) setErrors({ text: "Validation failed.", pwd: "Check password." });
    };

    useEffect(() => {
        const onKey = (ev) => {
            if (ev.key === "Escape") onClose();
            if (ev.key === "Enter" && canSubmit) handleSubmit();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [canSubmit]); // eslint-disable-line

    return (
        <ModalOverlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.12 } }}
            aria-modal="true"
            role="dialog"
            aria-label="Confirm deletion"
        >
            <motion.div
                className="modal"
                initial={{ y: 24, scale: 0.98, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1, transition: { type: "spring", stiffness: 420, damping: 34 } }}
                exit={{ y: 12, opacity: 0, transition: { duration: 0.12 } }}
            >
                <div className="mHead">
                    <h3>Delete {count} selected {count > 1 ? "users" : "user"}?</h3>
                </div>
                <div className="mBody">
                    <p className="muted">
                        This action cannot be undone. For safety, please type <b>DELETE</b> and enter your password.
                    </p>

                    <div className="field">
                        <label>Confirmation</label>
                        <input
                            type="text"
                            placeholder='Type "DELETE"'
                            value={confirmText}
                            onChange={(e) => setConfirmText(e.target.value)}
                            aria-invalid={!!errors.text}
                        />
                        {errors.text && <div className="error">{errors.text}</div>}
                    </div>

                    <div className="field">
                        <label>Password</label>
                        <div className="pwd">
                            <input
                                type={showPwd ? "text" : "password"}
                                placeholder="Your password"
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                                aria-invalid={!!errors.pwd}
                            />
                            <button
                                className="eye"
                                onClick={() => setShowPwd((s) => !s)}
                                type="button"
                                aria-label={showPwd ? "Hide password" : "Show password"}
                                title={showPwd ? "Hide password" : "Show password"}
                            >
                                {showPwd ? <MdVisibilityOff size={18} /> : <MdVisibility size={18} />}
                            </button>
                        </div>
                        {errors.pwd && <div className="error">{errors.pwd}</div>}
                    </div>

                    <ul className="details">
                        <li>Type <code>DELETE</code> exactly.</li>
                        <li>Password must be 6+ characters.</li>
                    </ul>
                </div>
                <div className="mFoot">
                    <button className="btn ghost" onClick={onClose}>
                        <MdClose size={18} /> Cancel
                    </button>
                    <button
                        className="btn danger"
                        onClick={handleSubmit}
                        disabled={!canSubmit}
                        title={!canSubmit ? "Complete the fields" : "Delete now"}
                    >
                        <MdDeleteOutline size={18} /> Delete
                    </button>
                </div>
            </motion.div>
        </ModalOverlay>
    );
}
