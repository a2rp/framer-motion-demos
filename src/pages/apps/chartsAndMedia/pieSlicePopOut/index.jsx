import { useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled, ModalOverlay } from "./styled";

/* ---------- Helpers: geometry & color ---------- */

const TAU = Math.PI * 2;
const deg = (rad) => (rad * 180) / Math.PI;
const rad = (deg) => (deg * Math.PI) / 180;

function polarToCartesian(cx, cy, r, angleDeg) {
    const a = rad(angleDeg - 90);
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

/** Donut slice path between startAngle and endAngle (degrees) */
function donutSegmentPath(cx, cy, rOuter, rInner, startAngle, endAngle) {
    const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
    const p1 = polarToCartesian(cx, cy, rOuter, endAngle);
    const p2 = polarToCartesian(cx, cy, rOuter, startAngle);
    const p3 = polarToCartesian(cx, cy, rInner, startAngle);
    const p4 = polarToCartesian(cx, cy, rInner, endAngle);
    return [
        "M", p1.x, p1.y,
        "A", rOuter, rOuter, 0, largeArc, 0, p2.x, p2.y,
        "L", p3.x, p3.y,
        "A", rInner, rInner, 0, largeArc, 1, p4.x, p4.y,
        "Z",
    ].join(" ");
}

/** palette from theme primary, gently rotated in HSL */
function sliceColor(i) {
    // blue-ish family but theme-friendly
    const hue = 210 + (i * 28) % 360;
    const sat = 75;
    const light = 52;
    return `hsl(${hue} ${sat}% ${light}%)`;
}

/* ---------- Initial data ---------- */

const DEFAULT_DATA = [
    { id: "a", label: "Alpha", value: 32 },
    { id: "b", label: "Beta", value: 25 },
    { id: "c", label: "Gamma", value: 18 },
    { id: "d", label: "Delta", value: 14 },
    { id: "e", label: "Epsilon", value: 11 },
];

/* ---------- Main ---------- */

export default function PieSlicePopOut() {
    const [data, setData] = useState(DEFAULT_DATA);
    const [selected, setSelected] = useState(null); // id or null
    const [modalOpen, setModalOpen] = useState(false);
    const [announce, setAnnounce] = useState("");

    const total = useMemo(
        () => data.reduce((sum, d) => sum + (Number(d.value) || 0), 0),
        [data]
    );

    // Geometry
    const SIZE = 420;
    const CX = SIZE / 2;
    const CY = SIZE / 2;
    const R_OUT = 150;
    const R_IN = 88;

    // Angles
    const slices = useMemo(() => {
        const result = [];
        let acc = 0;
        if (total <= 0) return result;
        for (let i = 0; i < data.length; i++) {
            const d = data[i];
            const frac = (Number(d.value) || 0) / total;
            const start = (acc / total) * 360;
            const end = ((acc + d.value) / total) * 360;
            acc += d.value;
            const mid = (start + end) / 2;
            const col = sliceColor(i);
            result.push({
                ...d,
                color: col,
                startAngle: start,
                endAngle: end,
                midAngle: mid,
                pct: frac * 100,
            });
        }
        return result;
    }, [data, total]);

    const onSliceClick = (id) => {
        setSelected((cur) => (cur === id ? null : id));
        setAnnounce("Slice " + (data.find((x) => x.id === id)?.label || "") + " selected");
    };

    const onReset = () => {
        setSelected(null);
        setData(DEFAULT_DATA);
        setAnnounce("Chart reset");
    };

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Pie Slice Pop-Out</h1>
                        <p className="muted">
                            Hover to nudge; click to pop a slice. Edit the dataset live. Everything runs on crisp transforms.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Chart controls">
                        <button className="btn" onClick={() => setModalOpen(true)} title="Edit data">Edit Data</button>
                        <button className="btn ghost" onClick={onReset} title="Reset">Reset</button>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    {/* SVG Chart */}
                    <div className="chartWrap" role="img" aria-label="Donut chart">
                        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} width="100%" height="100%" className="chart">
                            {/* Base ring (backplate) */}
                            <circle cx={CX} cy={CY} r={(R_OUT + R_IN) / 2} className="ring" />

                            {/* Slices */}
                            {slices.map((s, i) => {
                                const path = donutSegmentPath(CX, CY, R_OUT, R_IN, s.startAngle, s.endAngle);

                                // pop-out offset along bisector
                                const pop = selected === s.id ? 16 : 8; // click > hover
                                const dx = Math.cos(rad(s.midAngle - 90)) * pop;
                                const dy = Math.sin(rad(s.midAngle - 90)) * pop;

                                return (
                                    <motion.g
                                        key={s.id}
                                        initial={false}
                                        whileHover={{ x: dx * 0.5, y: dy * 0.5 }}
                                        animate={{ x: selected === s.id ? dx : 0, y: selected === s.id ? dy : 0 }}
                                        transition={{ type: "spring", stiffness: 380, damping: 30, mass: 0.6 }}
                                        className="slice"
                                        onClick={() => onSliceClick(s.id)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSliceClick(s.id)}
                                        aria-label={`${s.label} ${Math.round(s.pct)}%`}
                                    >
                                        {/* fill */}
                                        <motion.path
                                            d={path}
                                            style={{ fill: s.color }}
                                            initial={{ opacity: 0, scale: 0.98 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                        />

                                        {/* subtle border */}
                                        <path d={path} className="sliceBorder" />

                                        {/* percentage label on selected */}
                                        <AnimatePresence>
                                            {selected === s.id && (
                                                <motion.text
                                                    key="pct"
                                                    x={CX}
                                                    y={CY}
                                                    className="centerPct"
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.9 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {Math.round(s.pct)}%
                                                </motion.text>
                                            )}
                                        </AnimatePresence>
                                    </motion.g>
                                );
                            })}

                            {/* Donut hole center label */}
                            <motion.g initial={false} className="centerLabel">
                                <text x={CX} y={CY - 6} className="title">
                                    {selected
                                        ? slices.find((x) => x.id === selected)?.label || "—"
                                        : "Total"}
                                </text>
                                <text x={CX} y={CY + 20} className="value">
                                    {selected
                                        ? (slices.find((x) => x.id === selected)?.value ?? 0)
                                        : total}
                                </text>
                            </motion.g>
                        </svg>
                    </div>

                    {/* Legend */}
                    <div className="legend" role="list" aria-label="Legend">
                        {slices.map((s, i) => (
                            <motion.button
                                key={s.id}
                                className={`legendItem ${selected === s.id ? "active" : ""}`}
                                onClick={() => onSliceClick(s.id)}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                layout
                            >
                                <span className="swatch" style={{ background: s.color }} />
                                <span className="liLabel">{s.label}</span>
                                <span className="liValue">{s.value}</span>
                            </motion.button>
                        ))}
                    </div>
                </Styled.Stage>

                {/* SR polite region */}
                <span className="sr" aria-live="polite">{announce}</span>

                {/* Modal: Edit Data */}
                <AnimatePresence>
                    {modalOpen && (
                        <ModalOverlay
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="modal"
                                role="dialog"
                                aria-modal="true"
                                aria-label="Edit data"
                                initial={{ y: 20, scale: 0.98, opacity: 0 }}
                                animate={{ y: 0, scale: 1, opacity: 1 }}
                                exit={{ y: 8, scale: 0.98, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 320, damping: 28, mass: 0.7 }}
                            >
                                <div className="mHead">
                                    <h3>Edit Data</h3>
                                </div>
                                <EditForm
                                    data={data}
                                    onCancel={() => setModalOpen(false)}
                                    onSave={(rows) => {
                                        setData(rows);
                                        setSelected(null);
                                        setModalOpen(false);
                                        setAnnounce("Data updated");
                                    }}
                                />
                            </motion.div>
                        </ModalOverlay>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}

/* ---------- Edit form (with validations + password eye toggle) ---------- */

function EditForm({ data, onSave, onCancel }) {
    const [rows, setRows] = useState(() =>
        data.map((d) => ({ id: d.id, label: d.label, value: String(d.value) }))
    );
    const [pw, setPw] = useState(""); // optional protect password
    const [showPw, setShowPw] = useState(false);
    const [errors, setErrors] = useState({});
    const idRef = useRef(0);

    const addRow = () => {
        const i = ++idRef.current;
        setRows((r) => [...r, { id: "n" + i, label: "New", value: "1" }]);
    };
    const removeRow = (id) => {
        setRows((r) => r.filter((x) => x.id !== id));
    };
    const updateRow = (id, patch) => {
        setRows((r) => r.map((x) => (x.id === id ? { ...x, ...patch } : x)));
    };

    const validate = () => {
        const errs = {};
        if (rows.length === 0) errs.rows = "At least one row is required.";
        const used = new Set();
        let total = 0;
        rows.forEach((r, idx) => {
            const kBase = `row_${r.id}`;
            const label = (r.label || "").trim();
            const val = Number(r.value);
            if (!label) errs[kBase + "_label"] = "Label is required.";
            if (used.has(label.toLowerCase())) errs[kBase + "_label"] = "Labels must be unique.";
            used.add(label.toLowerCase());
            if (!Number.isFinite(val) || val <= 0) errs[kBase + "_value"] = "Value must be a positive number.";
            total += Number.isFinite(val) ? val : 0;
        });
        if (total <= 0) errs.total = "Total value must be greater than zero.";
        if (pw && pw.length < 6) errs.pw = "Password must be at least 6 characters.";
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSave = () => {
        if (!validate()) return;
        const normalized = rows.map((r) => ({
            id: r.id,
            label: r.label.trim(),
            value: Math.round(Number(r.value)),
        }));
        onSave(normalized);
    };

    return (
        <>
            <div className="mBody">
                <p className="muted">Add/edit labels and values. Values must be positive numbers.</p>
                {errors.total && <p className="err">{errors.total}</p>}
                {errors.rows && <p className="err">{errors.rows}</p>}

                <div className="gridHead">
                    <span>Label</span>
                    <span>Value</span>
                    <span className="sr">Actions</span>
                </div>

                <div className="rows">
                    {rows.map((r) => {
                        const kBase = `row_${r.id}`;
                        return (
                            <motion.div
                                layout
                                key={r.id}
                                className="row"
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                            >
                                <div className="cell">
                                    <input
                                        type="text"
                                        value={r.label}
                                        onChange={(e) => updateRow(r.id, { label: e.target.value })}
                                        aria-label="Label"
                                        placeholder="Label"
                                    />
                                    {errors[kBase + "_label"] && <span className="hint">{errors[kBase + "_label"]}</span>}
                                </div>
                                <div className="cell">
                                    <input
                                        type="number"
                                        min="1"
                                        step="1"
                                        value={r.value}
                                        onChange={(e) => updateRow(r.id, { value: e.target.value })}
                                        aria-label="Value"
                                        placeholder="Value"
                                    />
                                    {errors[kBase + "_value"] && <span className="hint">{errors[kBase + "_value"]}</span>}
                                </div>
                                <div className="cell actions">
                                    <button className="mini danger" onClick={() => removeRow(r.id)} title="Remove">Remove</button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="rowOps">
                    <button className="mini ghost" onClick={addRow}>+ Add row</button>
                </div>

                <div className="pwWrap">
                    <label htmlFor="pw">Protect edits (optional)</label>
                    <div className="pwInput">
                        <input
                            id="pw"
                            type={showPw ? "text" : "password"}
                            value={pw}
                            onChange={(e) => setPw(e.target.value)}
                            placeholder="Password (min 6 chars)"
                            aria-invalid={!!errors.pw}
                        />
                        <button
                            type="button"
                            className="eye"
                            onClick={() => setShowPw((v) => !v)}
                            aria-label={showPw ? "Hide password" : "Show password"}
                            title={showPw ? "Hide" : "Show"}
                        >
                            {showPw ? <EyeOffIcon /> : <EyeIcon />}
                        </button>
                    </div>
                    {errors.pw && <span className="hint">{errors.pw}</span>}
                </div>
            </div>

            <div className="mFoot">
                <button className="closeBtn ghost" onClick={onCancel}>Cancel</button>
                <motion.button
                    className="closeBtn"
                    onClick={handleSave}
                    whileTap={{ scale: 0.98 }}
                >
                    Save
                </motion.button>
            </div>
        </>
    );
}

/* ---------- Inline icons ---------- */

function EyeIcon(props) {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden focusable="false" {...props}>
            <path fill="currentColor" d="M12 5c5 0 9 4 10 7-1 3-5 7-10 7S3 15 2 12c1-3 5-7 10-7zm0 3.5A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 8.5z" />
        </svg>
    );
}
function EyeOffIcon(props) {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden focusable="false" {...props}>
            <path fill="currentColor" d="M2 3.3 3.3 2 22 20.7 20.7 22l-3.3-3.3A11.8 11.8 0 0 1 12 19c-5 0-9-4-10-7 0 0 2-4.6 6.5-6.5L2 3.3zM12 7a5 5 0 0 1 5 5 4.9 4.9 0 0 1-.4 2l-6.6-6.6A4.9 4.9 0 0 1 12 7z" />
        </svg>
    );
}
