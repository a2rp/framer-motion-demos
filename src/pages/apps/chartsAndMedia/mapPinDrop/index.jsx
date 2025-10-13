import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
    AnimatePresence,
    MotionConfig,
    motion,
    useMotionValue,
} from "framer-motion";
import { Styled, ModalOverlay } from "./styled";

/* -------------------- helpers -------------------- */
const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const uid = (() => { let i = 0; return () => `pin-${++i}`; })();

/* high-res public domain/world map image (Wikimedia PNG) */
const MAP_URL =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2048px-World_map_-_low_resolution.svg.png";

/* inline icons (no deps) */
const IconTrash = (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden {...p}>
        <path fill="currentColor" d="M9 3h6l1 2h4v2H4V5h4l1-2Zm1 7h2v7h-2v-7Zm4 0h2v7h-2v-7ZM7 10h2v7H7v-7Z" />
    </svg>
);
const IconZoomIn = (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden {...p}>
        <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5ZM10 14a4 4 0 110-8 4 4 0 010 8Zm1-5V7H9v2H7v2h2v2h2v-2h2V9h-2Z" />
    </svg>
);
const IconZoomOut = (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden {...p}>
        <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5ZM10 14a4 4 0 110-8 4 4 0 010 8ZM7 9v2h6V9H7Z" />
    </svg>
);
const IconEye = (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden {...p}>
        <path fill="currentColor" d="M12 5c5 0 9.27 3.11 11 7-1.73 3.89-6 7-11 7S2.73 15.89 1 12c1.73-3.89 6-7 11-7zm0 2C8.13 7 4.83 9.06 3.31 12 4.83 14.94 8.13 17 12 17s7.17-2.06 8.69-5C19.17 9.06 15.87 7 12 7zm0 2a3 3 0 110 6 3 3 0 010-6z" />
    </svg>
);
const IconEyeOff = (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden {...p}>
        <path fill="currentColor" d="M2.1 3.51 3.5 2.1l18.4 18.4-1.41 1.41-2.54-2.54A12.86 12.86 0 0112 19c-5 0-9.27-3.11-11-7a13.74 13.74 0 013.64-4.81L2.1 3.5Zm8.86 8.86a2 2 0 002.67 2.67l-2.67-2.67Zm-5.3-5.3L8 8.41a5 5 0 016.59 6.58l1.54 1.54C18.77 15.54 20 13.88 20.69 12 19.17 9.06 15.87 7 12 7c-1.1 0-2.17.16-3.17.46Z" />
    </svg>
);

/* -------------------- modal -------------------- */
function PinModal({ open, initial, onClose, onSave, onDelete }) {
    const [label, setLabel] = useState(initial?.label ?? "");
    const [pass, setPass] = useState(initial?.pass ?? "");
    const [showPass, setShowPass] = useState(false);
    const [errors, setErrors] = useState({ label: "", pass: "" });

    useEffect(() => {
        if (open) {
            setLabel(initial?.label ?? "");
            setPass(initial?.pass ?? "");
            setErrors({ label: "", pass: "" });
            setShowPass(false);
        }
    }, [open, initial]);

    const validate = () => {
        const e = { label: "", pass: "" };
        if (!label.trim()) e.label = "Label is required.";
        if (pass && pass.length < 4) e.pass = "Passcode must be at least 4 characters.";
        setErrors(e);
        return !e.label && !e.pass;
    };

    const handleSave = () => {
        if (!validate()) return;
        onSave({ label: label.trim(), pass });
    };

    return (
        <AnimatePresence>
            {open && (
                <ModalOverlay as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <motion.div
                        className="modal"
                        role="dialog" aria-modal="true" aria-label="Pin details"
                        initial={{ y: 20, scale: 0.98, opacity: 0.8 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ y: 10, scale: 0.98, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 26 }}
                    >
                        <div className="mHead"><h3>{initial?.id ? "Edit Pin" : "Add Pin"}</h3></div>
                        <div className="mBody">
                            <p className="muted">Give your pin a short label. Optionally protect it with a passcode.</p>

                            <div className="field">
                                <label>Label <span className="req">*</span></label>
                                <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} placeholder="e.g. Café, Meeting Point" />
                                {errors.label && <div className="err">{errors.label}</div>}
                            </div>

                            <div className="field">
                                <label>Passcode (optional)</label>
                                <div className="pwd">
                                    <input
                                        type={showPass ? "text" : "password"}
                                        value={pass}
                                        onChange={(e) => setPass(e.target.value)}
                                        placeholder="Set a passcode (min 4 chars)"
                                    />
                                    <button
                                        type="button" className="eye"
                                        onClick={() => setShowPass((s) => !s)}
                                        aria-label={showPass ? "Hide passcode" : "Show passcode"}
                                        title={showPass ? "Hide passcode" : "Show passcode"}
                                    >
                                        {showPass ? <IconEyeOff /> : <IconEye />}
                                    </button>
                                </div>
                                {errors.pass && <div className="err">{errors.pass}</div>}
                            </div>

                            <div className="details">
                                <small className="muted">Position: {Math.round(initial?.x ?? 0)}% × {Math.round(initial?.y ?? 0)}%</small>
                            </div>
                        </div>
                        <div className="mFoot">
                            {initial?.id && (
                                <button className="btn danger" onClick={onDelete} title="Delete pin">
                                    <IconTrash /> Remove
                                </button>
                            )}
                            <div style={{ flex: 1 }} />
                            <button className="btn ghost" onClick={onClose}>Cancel</button>
                            <button className="btn primary" onClick={handleSave}>Save</button>
                        </div>
                    </motion.div>
                </ModalOverlay>
            )}
        </AnimatePresence>
    );
}

/* -------------------- main -------------------- */
export default function MapPinDrop() {
    const canvasRef = useRef(null);
    const imgRef = useRef(null);

    // image natural size
    const [imgSize, setImgSize] = useState({ w: 0, h: 0, ok: false });
    // container size
    const [box, setBox] = useState({ w: 0, h: 0 });

    // pan & zoom (origin = top-left for predictable constraints)
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const zoom = useMotionValue(1); // 1.0 → 2.0 (extra zoom over base cover scale)

    // constraints computed from actual dimensions
    const [limits, setLimits] = useState({ left: 0, right: 0, top: 0, bottom: 0 });

    // pins in map-space percentages (0–100)
    const [pins, setPins] = useState([]);
    const [dragging, setDragging] = useState(false);

    const [active, setActive] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [justAdded, setJustAdded] = useState(null);

    // baseScale to cover container at zoom=1
    const baseScale = useMemo(() => {
        if (!imgSize.ok || !box.w || !box.h) return 1;
        const sx = box.w / imgSize.w;
        const sy = box.h / imgSize.h;
        return Math.max(sx, sy);
    }, [imgSize, box]);

    // recompute constraints + optionally center content
    const recomputeLayout = useCallback((opts = { center: false }) => {
        if (!imgSize.ok) return;

        const s = baseScale * zoom.get();
        const contentW = imgSize.w * s;
        const contentH = imgSize.h * s;

        const minX = Math.min(0, box.w - contentW);
        const minY = Math.min(0, box.h - contentH);
        const newLimits = { left: minX, right: 0, top: minY, bottom: 0 };
        setLimits(newLimits);

        if (opts.center) {
            const cx = (minX + 0) / 2;
            const cy = (minY + 0) / 2;
            x.set(cx);
            y.set(cy);
        } else {
            // clamp existing pan to new limits
            x.set(clamp(x.get(), minX, 0));
            y.set(clamp(y.get(), minY, 0));
        }
    }, [imgSize, box, baseScale, x, y, zoom]);

    // image load
    const onImgLoad = () => {
        const el = imgRef.current;
        if (!el) return;
        setImgSize({ w: el.naturalWidth, h: el.naturalHeight, ok: true });
    };

    // container resize
    useEffect(() => {
        const el = canvasRef.current;
        if (!el) return;
        const ro = new ResizeObserver((entries) => {
            const r = entries[0].contentRect;
            setBox({ w: Math.round(r.width), h: Math.round(r.height) });
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    // center when we first know sizes
    useEffect(() => {
        if (imgSize.ok && box.w && box.h) {
            recomputeLayout({ center: true });
        }
    }, [imgSize, box, recomputeLayout]);

    // recompute & clamp when zoom changes
    useEffect(() => {
        const unsub = zoom.on("change", () => {
            recomputeLayout({ center: false });
        });
        return () => unsub?.();
    }, [zoom, recomputeLayout]);

    // Zoom controls
    const zoomBy = (delta) => {
        const next = clamp(zoom.get() + delta, 1, 2);
        zoom.set(next);
    };
    const onRange = (e) => {
        const v = clamp(parseFloat(e.target.value) / 100, 1, 2);
        zoom.set(v);
    };

    // Convert click (client coords) → map-space %
    const pointToMapPct = useCallback((evt) => {
        if (!imgSize.ok) return { xPct: 50, yPct: 50 };
        const r = canvasRef.current.getBoundingClientRect();
        const s = baseScale * zoom.get();
        const localX = (evt.clientX - r.left - x.get()) / s;
        const localY = (evt.clientY - r.top - y.get()) / s;
        const xPct = clamp((localX / imgSize.w) * 100, 0, 100);
        const yPct = clamp((localY / imgSize.h) * 100, 0, 100);
        return { xPct, yPct };
    }, [imgSize, baseScale, zoom, x, y]);

    const onCanvasClick = (e) => {
        if (dragging || !imgSize.ok) return;
        const { xPct, yPct } = pointToMapPct(e);
        const newPin = { id: null, label: "", pass: "", x: xPct, y: yPct };
        setActive(newPin);
        setModalOpen(true);
    };

    const onPinClick = (pin, e) => {
        e.stopPropagation();
        setActive(pin);
        setModalOpen(true);
    };

    const handleSavePin = (data) => {
        if (active?.id) {
            setPins((arr) => arr.map((p) => (p.id === active.id ? { ...p, ...data } : p)));
        } else {
            const id = uid();
            const pin = { id, ...active, ...data };
            setPins((arr) => [...arr, pin]);
            setJustAdded(id);
            setTimeout(() => setJustAdded(null), 1000);
        }
        setModalOpen(false);
        setActive(null);
    };

    const handleDelete = () => {
        if (!active?.id) return;
        setPins((arr) => arr.filter((p) => p.id !== active.id));
        setModalOpen(false);
        setActive(null);
    };

    // keyboard zoom shortcuts
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "=" || e.key === "+") zoomBy(0.05);
            if (e.key === "-" || e.key === "_") zoomBy(-0.05);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Map Pin Drop</h1>
                        <p className="muted">
                            Real image background, true pan & zoom (cover-fit), and pins that bounce to life.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Map controls">
                        <button className="btn" onClick={() => zoomBy(-0.1)} title="Zoom out">
                            <IconZoomOut /> Zoom–
                        </button>

                        <div className="zoomReadout" aria-hidden>
                            {Math.round(zoom.get() * 100)}%
                        </div>

                        <input
                            className="zoomRange"
                            type="range" min="100" max="200" step="1"
                            onChange={onRange} value={Math.round(zoom.get() * 100)}
                            aria-label="Zoom"
                        />

                        <button className="btn" onClick={() => zoomBy(0.1)} title="Zoom in">
                            <IconZoomIn /> Zoom+
                        </button>

                        <div className="sep" />

                        <button
                            className="btn ghost"
                            onClick={() => { setPins([]); setActive(null); }}
                            title="Clear all pins"
                        >
                            Clear
                        </button>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <div className="canvas" ref={canvasRef} onClick={onCanvasClick}>
                        {/* world layer is sized to image * baseScale, then additional zoom via transform scale */}
                        <motion.div
                            className="world"
                            style={{ x, y, scale: zoom, originX: 0, originY: 0 }}
                            drag
                            dragMomentum={false}
                            dragElastic={0}
                            dragConstraints={limits}
                            onDragStart={() => setDragging(true)}
                            onDragEnd={() => setTimeout(() => setDragging(false), 0)}
                            transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.2 }}
                        >
                            {/* base sized by natural image x baseScale */}
                            <div
                                className="worldSize"
                                style={{
                                    width: imgSize.ok ? `${imgSize.w * baseScale}px` : "100%",
                                    height: imgSize.ok ? `${imgSize.h * baseScale}px` : "100%",
                                }}
                            >
                                <img
                                    ref={imgRef}
                                    src={MAP_URL}
                                    alt="World map"
                                    className="mapImg"
                                    onLoad={onImgLoad}
                                    onError={() => setImgSize((s) => ({ ...s, ok: false }))}
                                    draggable={false}
                                />

                                {/* visual grid overlay to emphasize zoom */}
                                <div className="gridOverlay" aria-hidden />

                                {/* pins */}
                                <AnimatePresence initial={false}>
                                    {pins.map((pin) => (
                                        <Pin
                                            key={pin.id}
                                            pin={pin}
                                            justAdded={justAdded === pin.id}
                                            onClick={onPinClick}
                                        />
                                    ))}
                                </AnimatePresence>
                            </div>
                        </motion.div>

                        {/* skeleton while image loads */}
                        {!imgSize.ok && (
                            <div className="skeleton">
                                <div className="shine" />
                                <p className="hint">Loading map… you can still click to add pins.</p>
                            </div>
                        )}
                    </div>
                </Styled.Stage>

                {/* Modal */}
                <PinModal
                    open={modalOpen}
                    initial={active}
                    onClose={() => { setModalOpen(false); setActive(null); }}
                    onSave={handleSavePin}
                    onDelete={handleDelete}
                />
            </Styled.Wrapper>
        </MotionConfig>
    );
}

/* -------------------- pin -------------------- */
function Pin({ pin, justAdded, onClick }) {
    const { id, label, x, y } = pin; // x/y are in %
    const drop = {
        initial: { y: -30, scaleY: 0.9, opacity: 0 },
        animate: {
            y: 0, scaleY: 1, opacity: 1,
            transition: { type: "spring", stiffness: 700, damping: 18, mass: 0.6 },
        },
    };
    const hover = { scale: 1.08, y: -2 };

    return (
        <motion.button
            className="pin"
            style={{ left: `${x}%`, top: `${y}%` }}
            onClick={(e) => onClick(pin, e)}
            initial={justAdded ? drop.initial : false}
            animate={justAdded ? drop.animate : { opacity: 1 }}
            whileHover={hover}
            whileTap={{ scale: 0.98 }}
            title={label || "Untitled pin"}
        >
            <motion.span className="dot" layoutId={`dot-${id}`} transition={{ type: "spring", stiffness: 600, damping: 24 }} />
            <motion.span
                className="shadow"
                initial={justAdded ? { scaleX: 0.6, opacity: 0.15 } : { opacity: 0.22 }}
                animate={justAdded ? { scaleX: [0.6, 1.15, 1], opacity: [0.15, 0.25, 0.22] } : { opacity: 0.22 }}
                transition={{ duration: justAdded ? 0.5 : 0.2, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden
            />
            <AnimatePresence>
                {label && (
                    <motion.span
                        className="label"
                        initial={{ y: 6, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 6, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                    >
                        {label}
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.button>
    );
}
