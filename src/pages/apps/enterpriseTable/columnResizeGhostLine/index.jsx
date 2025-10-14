import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";

/* ---------- utilities ---------- */
const LS_KEY = "et_column_widths_v1";
const clamp = (v, a, b) => Math.min(Math.max(v, a), b);
const px = (n) => `${Math.round(n)}px`;

const DEFAULT_COLUMNS = [
    { key: "id", label: "ID", min: 80, max: 180, width: 100 },
    { key: "name", label: "Name", min: 160, max: 420, width: 240 },
    { key: "email", label: "Email", min: 220, max: 520, width: 320 },
    { key: "role", label: "Role", min: 140, max: 320, width: 180 },
    { key: "team", label: "Team", min: 140, max: 360, width: 180 },
    { key: "status", label: "Status", min: 120, max: 220, width: 140 },
];

const ROWS = Array.from({ length: 12 }).map((_, i) => ({
    id: 1000 + i,
    name: ["Anika Shah", "Ravi Patel", "Meera Singh", "Kabir Rao", "Ishita Nair", "Neeraj Kulkarni"][i % 6],
    email: `user${i}@example.com`,
    role: ["Engineer", "Designer", "PM", "QA", "DevOps"][i % 5],
    team: ["Core", "UI", "Mobile", "Ops", "Data"][i % 5],
    status: i % 3 === 0 ? "Active" : i % 3 === 1 ? "Pending" : "Suspended",
}));

/* ---------- icons (inline) ---------- */
const IconSettings = (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...p}>
        <path fill="currentColor" d="M10 2h4l1 3 3 1v4l-3 1-1 3h-4l-1-3-3-1V6l3-1 1-3zm2 12a4 4 0 100-8 4 4 0 000 8z" />
    </svg>
);
const IconReset = (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...p}>
        <path fill="currentColor" d="M12 6V3l-5 5 5 5V10c3.31 0 6 2.69 6 6 0 1.05-.27 2.04-.75 2.9l1.46 1.46A7.96 7.96 0 0020 16c0-4.42-3.58-8-8-8z" />
    </svg>
);
const IconEye = (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...p}>
        <path fill="currentColor" d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12a5 5 0 110-10 5 5 0 010 10z" />
    </svg>
);
const IconEyeOff = (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...p}>
        <path fill="currentColor" d="M2 5.27L3.28 4 20 20.72 18.73 22l-2.61-2.61A10.94 10.94 0 0112 21C5 21 2 14 2 14s.87-1.93 2.56-3.93L2 7.73 3.27 6.5 5.7 8.93C7.69 7.69 9.78 7 12 7c7 0 10 7 10 7a12.26 12.26 0 01-5.1 5.67l-1.5-1.5A9.66 9.66 0 0020 14s-3-7-8-7c-1.8 0-3.43.46-4.86 1.26L6.5 9.62a5 5 0 006.88 6.88l-1.76-1.76a3 3 0 01-3.98-3.98L2 5.27z" />
    </svg>
);

/* ---------- main component ---------- */
export default function ColumnResizeGhostLine() {
    const [density, setDensity] = useState("comfort"); // comfort | compact
    const [isSettingsOpen, setSettingsOpen] = useState(false);
    const [adminPwd, setAdminPwd] = useState("");
    const [showPwd, setShowPwd] = useState(false);
    const [pwdError, setPwdError] = useState("");

    // widths state
    const [columns, setColumns] = useState(() => {
        try {
            const saved = JSON.parse(localStorage.getItem(LS_KEY) || "null");
            if (saved && Array.isArray(saved) && saved.length === DEFAULT_COLUMNS.length) {
                // merge constraints from default (safety)
                return DEFAULT_COLUMNS.map((c, i) => ({ ...c, width: saved[i].width ?? c.width }));
            }
        } catch { }
        return DEFAULT_COLUMNS;
    });

    // dragging state
    const [drag, setDrag] = useState({
        active: false,
        key: null,
        startX: 0,
        startW: 0,
        containerLeft: 0,
        x: 0,
    });

    const containerRef = useRef(null);

    // persist widths
    useEffect(() => {
        const toSave = columns.map(({ key, width }) => ({ key, width }));
        try { localStorage.setItem(LS_KEY, JSON.stringify(toSave)); } catch { }
    }, [columns]);

    const startResize = (e, col) => {
        e.preventDefault();
        e.stopPropagation();
        const rect = containerRef.current.getBoundingClientRect();
        setDrag({
            active: true,
            key: col.key,
            startX: e.clientX,
            startW: col.width,
            containerLeft: rect.left,
            x: e.clientX - rect.left,
        });

        // attach listeners
        window.addEventListener("mousemove", onMove, { passive: false });
        window.addEventListener("mouseup", onUp, { passive: true });
    };

    const onMove = (e) => {
        e.preventDefault();
        setDrag((d) => {
            if (!d.active) return d;
            const col = columns.find((c) => c.key === d.key);
            if (!col) return d;
            const dx = e.clientX - d.startX;
            const nextW = clamp(d.startW + dx, col.min, col.max);
            // ghost line position follows pointer (within container)
            const x = e.clientX - d.containerLeft;
            // apply live width (optimistically)
            setColumns((cols) => cols.map((c) => (c.key === col.key ? { ...c, width: nextW } : c)));
            return { ...d, x };
        });
    };

    const onUp = () => {
        setDrag((d) => ({ ...d, active: false }));
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onUp);
    };

    // keyboard resize on handle focus
    const onHandleKeyDown = (e, col) => {
        const step = e.shiftKey ? 10 : 2;
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            e.preventDefault();
            const inc = e.key === "ArrowRight" ? step : -step;
            setColumns((cols) =>
                cols.map((c) =>
                    c.key === col.key
                        ? { ...c, width: clamp(c.width + inc, c.min, c.max) }
                        : c
                )
            );
        }
    };

    const resetWidths = () => setColumns(DEFAULT_COLUMNS);

    const openSettings = () => {
        setAdminPwd("");
        setPwdError("");
        setShowPwd(false);
        setSettingsOpen(true);
    };

    const closeSettings = () => setSettingsOpen(false);

    const submitSettings = (e) => {
        e?.preventDefault();
        // trivial validation
        if (adminPwd.trim().length < 6) {
            setPwdError("Password must be at least 6 characters.");
            return;
        }
        // pretend success
        setPwdError("");
        setSettingsOpen(false);
    };

    const densityLabel = density === "comfort" ? "Comfort" : "Compact";

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="left">
                        <h1>Column Resize — Ghost Line</h1>
                        <p className="muted">
                            Drag handles to resize. Ghost line follows the pointer. Widths persist locally. Keyboard: ←/→ (Shift for ×5).
                        </p>
                    </div>
                    <div className="right" role="toolbar" aria-label="Table tools">
                        <div className="density">
                            <label className="ctrl">
                                <span>Density</span>
                                <select value={density} onChange={(e) => setDensity(e.target.value)}>
                                    <option value="comfort">Comfort</option>
                                    <option value="compact">Compact</option>
                                </select>
                            </label>
                        </div>
                        {/* <button className="btn ghost" onClick={resetWidths} title="Reset widths">
                            <IconReset /><span>Reset</span>
                        </button> */}
                        <button className="btn primary" onClick={openSettings} title="Settings">
                            <IconSettings /><span>Settings</span>
                        </button>
                    </div>
                </Styled.Header>

                <Styled.Stage ref={containerRef} data-density={density}>
                    {/* Ghost line */}
                    <AnimatePresence>
                        {drag.active && (
                            <motion.div
                                key="ghost"
                                className="ghostLine"
                                initial={{ opacity: 0, x: drag.x }}
                                animate={{ opacity: 1, x: drag.x }}
                                exit={{ opacity: 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.6 }}
                            />
                        )}
                    </AnimatePresence>

                    {/* Width chip while resizing */}
                    <AnimatePresence>
                        {drag.active && (
                            <motion.div
                                key="chip"
                                className="widthChip"
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.18 }}
                                style={{ left: px(drag.x + 8) }}
                            >
                                {(() => {
                                    const col = columns.find((c) => c.key === drag.key);
                                    return col ? `${Math.round(col.width)}px` : "";
                                })()}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Table */}
                    <div className="tableWrap">
                        <table className="table" role="table" aria-label="Enterprise table with resizable columns">
                            <thead>
                                <tr>
                                    {columns.map((col) => (
                                        <motion.th
                                            key={col.key}
                                            className="th"
                                            style={{ width: px(col.width) }}
                                            transition={{ layout: { type: "spring", stiffness: 400, damping: 36, mass: 0.7 } }}
                                            layout
                                        >
                                            <div className="thInner">
                                                <span className="label">{col.label}</span>
                                                <motion.button
                                                    type="button"
                                                    aria-label={`Resize column ${col.label}`}
                                                    aria-valuemin={col.min}
                                                    aria-valuemax={col.max}
                                                    aria-valuenow={Math.round(col.width)}
                                                    role="slider"
                                                    className={`resizeHandle${drag.key === col.key && drag.active ? " active" : ""}`}
                                                    onMouseDown={(e) => startResize(e, col)}
                                                    onKeyDown={(e) => onHandleKeyDown(e, col)}
                                                >
                                                    <span className="grip" />
                                                </motion.button>
                                            </div>
                                        </motion.th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {ROWS.map((row, i) => (
                                    <tr key={row.id} className="tr">
                                        {columns.map((col) => (
                                            <motion.td
                                                key={col.key}
                                                className="td"
                                                style={{ width: px(col.width) }}
                                                layout
                                                transition={{ layout: { type: "spring", stiffness: 400, damping: 36, mass: 0.7 } }}
                                            >
                                                <Cell col={col} row={row} />
                                            </motion.td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="footNotes">
                        <span className="dot" /> Density: <b>{densityLabel}</b> •
                        <span className="sp" /> Saved locally •
                        <span className="sp" /> Keyboard resize supported
                    </div>
                </Styled.Stage>

                {/* Settings modal */}
                <AnimatePresence>
                    {isSettingsOpen && (
                        <Styled.ModalOverlay
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="modal"
                                initial={{ y: 12, scale: 0.98, opacity: 0 }}
                                animate={{ y: 0, scale: 1, opacity: 1 }}
                                exit={{ y: 8, scale: 0.98, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 420, damping: 32, mass: 0.7 }}
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="settings-title"
                            >
                                <div className="mHead">
                                    <h3 id="settings-title">Settings</h3>
                                </div>
                                <form className="mBody" onSubmit={submitSettings}>
                                    <p className="muted">
                                        Admin confirmation required for unlocking advanced options.
                                    </p>

                                    <label className="field">
                                        <span>Admin Password</span>
                                        <div className={`pwdWrap ${pwdError ? "err" : ""}`}>
                                            <input
                                                type={showPwd ? "text" : "password"}
                                                value={adminPwd}
                                                onChange={(e) => setAdminPwd(e.target.value)}
                                                placeholder="Enter password"
                                                minLength={6}
                                                required
                                            />
                                            <button
                                                type="button"
                                                className="eyeBtn"
                                                aria-label={showPwd ? "Hide password" : "Show password"}
                                                onClick={() => setShowPwd((v) => !v)}
                                            >
                                                {showPwd ? <IconEyeOff /> : <IconEye />}
                                            </button>
                                        </div>
                                        {pwdError && <div className="errMsg">{pwdError}</div>}
                                    </label>

                                    <ul className="details">
                                        <li>Min length: 6 characters.</li>
                                        <li>Password never leaves your device in this demo.</li>
                                    </ul>

                                    <div className="mFoot">
                                        <button type="button" className="btn ghost" onClick={closeSettings}>Cancel</button>
                                        <button type="submit" className="btn primary">Confirm</button>
                                    </div>
                                </form>
                            </motion.div>
                        </Styled.ModalOverlay>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}

/* Render a cell with little tag styling based on column */
function Cell({ col, row }) {
    const v = row[col.key];
    if (col.key === "status") {
        const tone =
            v === "Active" ? "ok" : v === "Pending" ? "warn" : "danger";
        return <span className={`badge ${tone}`}>{v}</span>;
    }
    return <span className="cellTxt">{String(v)}</span>;
}
