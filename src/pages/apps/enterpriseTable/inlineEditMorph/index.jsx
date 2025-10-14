import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";

/* ------------------------------------------
   Helpers & validation
------------------------------------------- */

// simple uid for demo rows
const uid = (() => { let i = 0; return () => `row-${++i}`; })();

const ROLES = ["Admin", "Manager", "Staff"];
const STATUSES = ["Active", "Pending", "Suspended"];

const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
function validateRow(row) {
    const errors = {};
    if (!row.name || row.name.trim().length < 2) errors.name = "Name must be at least 2 characters.";
    if (!row.email || !emailRx.test(row.email)) errors.email = "Enter a valid email address.";
    if (!ROLES.includes(row.role)) errors.role = "Choose a valid role.";
    if (!STATUSES.includes(row.status)) errors.status = "Choose a valid status.";
    if (!row.password || row.password.length < 8) errors.password = "Password must be 8+ characters.";
    if (row.password && !/\d/.test(row.password)) errors.password = "Password needs at least one number.";
    return errors;
}

function maskDots(len = 8) {
    return "•".repeat(Math.max(8, len));
}

function EyeIcon({ open = false }) {
    return open ? (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <path fill="currentColor" d="M12 5c5.5 0 9.5 4.1 10.8 6.1.3.5.3 1.2 0 1.7C21.5 14.9 17.5 19 12 19s-9.5-4.1-10.8-6.1a1.6 1.6 0 010-1.7C2.5 9.1 6.5 5 12 5zm0 3a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
    ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <path fill="currentColor" d="M3.7 2.3l18 18-1.4 1.4-2.9-2.9A12.6 12.6 0 0112 19C6.5 19 2.5 14.9 1.2 12.9a1.6 1.6 0 010-1.7c.9-1.3 3.2-3.7 6.4-5.1L2.3 3.7 3.7 2.3zM12 7a5 5 0 014.8 6.5L14.6 11a2 2 0 00-2.6-2.6L10.5 6.9A4.9 4.9 0 0112 7zm-3.8 1.8l1.6 1.6a2 2 0 002.8 2.8l1.6 1.6A5 5 0 018 12a5 5 0 01.8-3.2z" />
        </svg>
    );
}

/* ------------------------------------------
   Demo data
------------------------------------------- */
function seedRows() {
    return [
        { id: uid(), name: "Aisha Khan", email: "aisha.khan@example.com", role: "Manager", status: "Active", password: "passw0rd1" },
        { id: uid(), name: "Ravi Patel", email: "ravi.patel@example.com", role: "Staff", status: "Pending", password: "demo1234" },
        { id: uid(), name: "Meera Iyer", email: "meera.iyer@example.com", role: "Admin", status: "Active", password: "S3curePwd" },
        { id: uid(), name: "Kabir Singh", email: "kabir.singh@example.com", role: "Staff", status: "Suspended", password: "lock3d321" },
    ];
}

/* ------------------------------------------
   Main
------------------------------------------- */
export default function InlineEditMorph() {
    const [rows, setRows] = useState(seedRows);
    const [editingId, setEditingId] = useState(null);
    const [draft, setDraft] = useState(null);
    const [errors, setErrors] = useState({});
    const [reveals, setReveals] = useState({}); // { [id]: boolean }
    const [showDeleteId, setShowDeleteId] = useState(null);
    const [addOpen, setAddOpen] = useState(false);

    const editing = useMemo(() => rows.find(r => r.id === editingId) || null, [rows, editingId]);

    // focus first field on entering edit
    const firstFieldRef = useRef(null);
    useEffect(() => {
        if (editingId && firstFieldRef.current) {
            firstFieldRef.current.focus();
            firstFieldRef.current.select?.();
        }
    }, [editingId]);

    // open edit
    const onEdit = (row) => {
        setEditingId(row.id);
        setDraft({ ...row });
        setErrors({});
    };

    const onCancel = () => {
        setEditingId(null);
        setDraft(null);
        setErrors({});
    };

    const onChange = (field, value) => {
        setDraft(d => ({ ...d, [field]: value }));
    };

    const onToggleReveal = (id) => {
        setReveals(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const onSave = () => {
        const errs = validateRow(draft || {});
        setErrors(errs);
        if (Object.keys(errs).length) return;
        setRows(prev => prev.map(r => (r.id === editingId ? { ...r, ...draft } : r)));
        setEditingId(null);
        setDraft(null);
    };

    const onDelete = (id) => setShowDeleteId(id);

    const confirmDelete = () => {
        setRows(prev => prev.filter(r => r.id !== showDeleteId));
        setShowDeleteId(null);
        if (editingId === showDeleteId) onCancel();
    };

    const onAddOpen = () => {
        setAddOpen(true);
        setDraft({ id: uid(), name: "", email: "", role: "Staff", status: "Pending", password: "" });
        setErrors({});
    };

    const onAddClose = () => {
        setAddOpen(false);
        setDraft(null);
        setErrors({});
    };

    const onAddSave = () => {
        const errs = validateRow(draft || {});
        setErrors(errs);
        if (Object.keys(errs).length) return;
        setRows(prev => [{ ...draft }, ...prev]);
        setAddOpen(false);
        setDraft(null);
    };

    // keyboard helpers inside cells
    const onCellKeyDown = (e) => {
        if (e.key === "Enter") onSave();
        if (e.key === "Escape") onCancel();
    };

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Inline Edit Morph</h1>
                        <p className="muted">
                            Cells morph into inputs with springy layout. Validations included. Password field has an eye toggle.
                        </p>
                    </div>

                    <div className="actions">
                        <button className="btn primary" onClick={onAddOpen}>+ Add User</button>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <div className="tableWrap">
                        <table className="table" aria-label="Enterprise users">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Password</th>
                                    <th className="actionsCol">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                <AnimatePresence initial={false}>
                                    {rows.map((row) => {
                                        const isEditing = row.id === editingId;
                                        const d = isEditing ? draft : row;
                                        const reveal = !!reveals[row.id];

                                        return (
                                            <motion.tr
                                                layout
                                                key={row.id}
                                                className={isEditing ? "isEditing" : undefined}
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -8 }}
                                                transition={{ type: "spring", stiffness: 420, damping: 36, mass: 0.8 }}
                                            >
                                                {/* Name */}
                                                <td>
                                                    <motion.div layoutId={`cell-${row.id}-name`} layout className="cell">
                                                        {isEditing ? (
                                                            <div className="field">
                                                                <input
                                                                    ref={firstFieldRef}
                                                                    type="text"
                                                                    value={d.name}
                                                                    onChange={(e) => onChange("name", e.target.value)}
                                                                    onKeyDown={onCellKeyDown}
                                                                    placeholder="Enter full name"
                                                                    aria-invalid={!!errors.name}
                                                                />
                                                                <FieldError error={errors.name} />
                                                            </div>
                                                        ) : (
                                                            <span className="text">{row.name}</span>
                                                        )}
                                                    </motion.div>
                                                </td>

                                                {/* Email */}
                                                <td>
                                                    <motion.div layoutId={`cell-${row.id}-email`} layout className="cell">
                                                        {isEditing ? (
                                                            <div className="field">
                                                                <input
                                                                    type="email"
                                                                    value={d.email}
                                                                    onChange={(e) => onChange("email", e.target.value)}
                                                                    onKeyDown={onCellKeyDown}
                                                                    placeholder="name@company.com"
                                                                    aria-invalid={!!errors.email}
                                                                />
                                                                <FieldError error={errors.email} />
                                                            </div>
                                                        ) : (
                                                            <span className="text mono">{row.email}</span>
                                                        )}
                                                    </motion.div>
                                                </td>

                                                {/* Role */}
                                                <td>
                                                    <motion.div layoutId={`cell-${row.id}-role`} layout className="cell">
                                                        {isEditing ? (
                                                            <div className="field">
                                                                <select
                                                                    value={d.role}
                                                                    onChange={(e) => onChange("role", e.target.value)}
                                                                    onKeyDown={onCellKeyDown}
                                                                    aria-invalid={!!errors.role}
                                                                >
                                                                    {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                                                                </select>
                                                                <FieldError error={errors.role} />
                                                            </div>
                                                        ) : (
                                                            <span className="badge role">{row.role}</span>
                                                        )}
                                                    </motion.div>
                                                </td>

                                                {/* Status */}
                                                <td>
                                                    <motion.div layoutId={`cell-${row.id}-status`} layout className="cell">
                                                        {isEditing ? (
                                                            <div className="field">
                                                                <select
                                                                    value={d.status}
                                                                    onChange={(e) => onChange("status", e.target.value)}
                                                                    onKeyDown={onCellKeyDown}
                                                                    aria-invalid={!!errors.status}
                                                                >
                                                                    {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                                                                </select>
                                                                <FieldError error={errors.status} />
                                                            </div>
                                                        ) : (
                                                            <StatusChip status={row.status} />
                                                        )}
                                                    </motion.div>
                                                </td>

                                                {/* Password (masked with eye) */}
                                                <td>
                                                    <motion.div layoutId={`cell-${row.id}-password`} layout className="cell">
                                                        {isEditing ? (
                                                            <div className="field withEye">
                                                                <input
                                                                    type={reveal ? "text" : "password"}
                                                                    value={d.password}
                                                                    onChange={(e) => onChange("password", e.target.value)}
                                                                    onKeyDown={onCellKeyDown}
                                                                    placeholder="Min 8 chars, 1 number"
                                                                    aria-invalid={!!errors.password}
                                                                />
                                                                <button
                                                                    type="button"
                                                                    className="eye"
                                                                    onClick={() => onToggleReveal(row.id)}
                                                                    aria-label={reveal ? "Hide password" : "Show password"}
                                                                    title={reveal ? "Hide" : "Show"}
                                                                >
                                                                    <EyeIcon open={reveal} />
                                                                </button>
                                                                <FieldError error={errors.password} />
                                                            </div>
                                                        ) : (
                                                            <div className="masked">
                                                                <span className="mono">{reveal ? row.password : maskDots(row.password?.length)}</span>
                                                                <button
                                                                    type="button"
                                                                    className="eye small"
                                                                    onClick={() => onToggleReveal(row.id)}
                                                                    aria-label={reveal ? "Hide password" : "Show password"}
                                                                    title={reveal ? "Hide" : "Show"}
                                                                >
                                                                    <EyeIcon open={reveal} />
                                                                </button>
                                                            </div>
                                                        )}
                                                    </motion.div>
                                                </td>

                                                {/* Actions */}
                                                <td className="actionsCol">
                                                    <motion.div layout className="actions">
                                                        <AnimatePresence initial={false} mode="popLayout">
                                                            {isEditing ? (
                                                                <motion.div
                                                                    key="edit-actions"
                                                                    initial={{ opacity: 0, y: -6 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    exit={{ opacity: 0, y: 6 }}
                                                                    className="btnGroup"
                                                                >
                                                                    <button className="btn primary" onClick={onSave}>Save</button>
                                                                    <button className="btn ghost" onClick={onCancel}>Cancel</button>
                                                                </motion.div>
                                                            ) : (
                                                                <motion.div
                                                                    key="view-actions"
                                                                    initial={{ opacity: 0, y: -6 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    exit={{ opacity: 0, y: 6 }}
                                                                    className="btnGroup"
                                                                >
                                                                    <button className="btn" onClick={() => onEdit(row)}>Edit</button>
                                                                    <button className="btn danger" onClick={() => onDelete(row.id)}>Delete</button>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </motion.div>
                                                </td>
                                            </motion.tr>
                                        );
                                    })}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>
                </Styled.Stage>

                {/* Add user modal */}
                <AnimatePresence>
                    {addOpen && (
                        <Styled.ModalOverlay
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="modal"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="addUserTitle"
                                initial={{ scale: 0.96, y: 12, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1, transition: { type: "spring", stiffness: 360, damping: 30 } }}
                                exit={{ scale: 0.98, y: 8, opacity: 0, transition: { duration: 0.18 } }}
                            >
                                <div className="mHead">
                                    <h3 id="addUserTitle">Add User</h3>
                                    <p className="muted">Create a new user. All fields are required.</p>
                                </div>
                                <div className="mBody">
                                    <div className="formGrid">
                                        <label>
                                            <span>Name</span>
                                            <input
                                                type="text"
                                                value={draft?.name || ""}
                                                onChange={(e) => onChange("name", e.target.value)}
                                                aria-invalid={!!errors.name}
                                            />
                                            <FieldError error={errors.name} />
                                        </label>

                                        <label>
                                            <span>Email</span>
                                            <input
                                                type="email"
                                                value={draft?.email || ""}
                                                onChange={(e) => onChange("email", e.target.value)}
                                                aria-invalid={!!errors.email}
                                            />
                                            <FieldError error={errors.email} />
                                        </label>

                                        <label>
                                            <span>Role</span>
                                            <select
                                                value={draft?.role || "Staff"}
                                                onChange={(e) => onChange("role", e.target.value)}
                                                aria-invalid={!!errors.role}
                                            >
                                                {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                                            </select>
                                            <FieldError error={errors.role} />
                                        </label>

                                        <label>
                                            <span>Status</span>
                                            <select
                                                value={draft?.status || "Pending"}
                                                onChange={(e) => onChange("status", e.target.value)}
                                                aria-invalid={!!errors.status}
                                            >
                                                {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                                            </select>
                                            <FieldError error={errors.status} />
                                        </label>

                                        <label className="withEye">
                                            <span>Password</span>
                                            <div className="eyeWrap">
                                                <input
                                                    type={reveals["__add"] ? "text" : "password"}
                                                    value={draft?.password || ""}
                                                    onChange={(e) => onChange("password", e.target.value)}
                                                    aria-invalid={!!errors.password}
                                                    placeholder="Min 8 chars, 1 number"
                                                />
                                                <div
                                                    type="button"
                                                    className="eye"
                                                    onClick={() => setReveals(r => ({ ...r, ["__add"]: !r["__add"] }))}
                                                    aria-label={reveals["__add"] ? "Hide password" : "Show password"}
                                                >
                                                    <EyeIcon open={!!reveals["__add"]} />
                                                </div>
                                            </div>
                                            <FieldError error={errors.password} />
                                        </label>
                                    </div>
                                </div>
                                <div className="mFoot">
                                    <button className="btn ghost" onClick={onAddClose}>Cancel</button>
                                    <button className="btn primary" onClick={onAddSave}>Create</button>
                                </div>
                            </motion.div>
                        </Styled.ModalOverlay>
                    )}
                </AnimatePresence>

                {/* Delete confirm modal */}
                <AnimatePresence>
                    {showDeleteId && (
                        <Styled.ModalOverlay
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="modal"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="delTitle"
                                initial={{ scale: 0.96, y: 12, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1, transition: { type: "spring", stiffness: 360, damping: 30 } }}
                                exit={{ scale: 0.98, y: 8, opacity: 0, transition: { duration: 0.18 } }}
                            >
                                <div className="mHead">
                                    <h3 id="delTitle">Delete user?</h3>
                                </div>
                                <div className="mBody">
                                    <p className="muted">This action removes the user row. You can’t undo this.</p>
                                </div>
                                <div className="mFoot">
                                    <button className="btn ghost" onClick={() => setShowDeleteId(null)}>Cancel</button>
                                    <button className="btn danger" onClick={confirmDelete}>Delete</button>
                                </div>
                            </motion.div>
                        </Styled.ModalOverlay>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}

/* ------------------------------------------
   Small components
------------------------------------------- */

function FieldError({ error }) {
    return (
        <AnimatePresence initial={false}>
            {error ? (
                <motion.div
                    className="error"
                    initial={{ opacity: 0, y: -2 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -2 }}
                    transition={{ duration: 0.18 }}
                    role="alert"
                >
                    {error}
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}

function StatusChip({ status }) {
    return (
        <motion.span
            className={`chip ${status.toLowerCase()}`}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
            {status}
        </motion.span>
    );
}
