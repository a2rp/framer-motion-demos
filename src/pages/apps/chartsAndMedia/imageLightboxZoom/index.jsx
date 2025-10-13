import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
    AnimatePresence,
    MotionConfig,
    animate,
    motion,
    useMotionValue,
    useMotionValueEvent,
    useTransform,
} from "framer-motion";
import { Styled, ModalOverlay } from "./styled";

/** Demo gallery */
const GALLERY = [
    { id: "alps", src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop", alt: "Snowy mountains at sunrise", w: 1600, h: 1067 },
    { id: "forest", src: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=1600&auto=format&fit=crop", alt: "Misty forest path", w: 1600, h: 1067 },
    { id: "desert", src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop", alt: "Desert dunes with long shadows", w: 1600, h: 1067 },
    { id: "city", src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop", alt: "City skyline at dusk", w: 1600, h: 1067 },
    { id: "coast", src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop", alt: "Rocky coastline and sea spray", w: 1600, h: 1067 },
    { id: "aurora", src: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1600&auto=format&fit=crop", alt: "Aurora borealis over a lake", w: 1600, h: 1067 },
];

const wrap = (min, max, v) => {
    const r = max - min + 1;
    return (((v - min) % r) + r) % r + min;
};

const PROTECTED_PWD = "open-sesame";

function Spinner() {
    return (
        <div className="spinner" aria-hidden>
            <div className="dot" /><div className="dot" /><div className="dot" />
        </div>
    );
}

export default function ImageLightboxZoom() {
    const [items] = useState(GALLERY);
    const [active, setActive] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [pwd, setPwd] = useState("");
    const [pwdError, setPwdError] = useState("");
    const [showPw, setShowPw] = useState(false);

    // Motion values
    const scale = useMotionValue(1);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // ✅ Reactively toggle drag when scale crosses threshold
    const [canDrag, setCanDrag] = useState(false);
    useMotionValueEvent(scale, "change", (s) => setCanDrag(s > 1.02));

    // Cursor follows scale
    const cursor = useTransform(scale, (s) => (s > 1.02 ? "grab" : "zoom-in"));

    const thumbClick = (idx) => () => {
        setActive(idx);
        setLoaded(false);
        scale.set(1); x.set(0); y.set(0); setCanDrag(false);
    };

    const close = useCallback(() => {
        setActive(null);
        setShowInfo(false);
        setPwd(""); setPwdError(""); setShowPw(false);
    }, []);

    const next = useCallback(() => {
        if (active == null) return;
        const ni = wrap(0, items.length - 1, active + 1);
        setActive(ni);
        setLoaded(false);
        scale.set(1); x.set(0); y.set(0); setCanDrag(false);
    }, [active, items.length, scale, x, y]);

    const prev = useCallback(() => {
        if (active == null) return;
        const pi = wrap(0, items.length - 1, active - 1);
        setActive(pi);
        setLoaded(false);
        scale.set(1); x.set(0); y.set(0); setCanDrag(false);
    }, [active, items.length, scale, x, y]);

    // Keyboard shortcuts
    useEffect(() => {
        if (active == null) return;
        const onKey = (e) => {
            if (e.key === "Escape") return close();
            if (e.key === "ArrowRight") return next();
            if (e.key === "ArrowLeft") return prev();
            if (e.key === "+" || e.key === "=") animate(scale, Math.min(4, scale.get() + 0.2), { duration: 0.15 });
            if (e.key === "-" || e.key === "_") animate(scale, Math.max(1, scale.get() - 0.2), { duration: 0.15 });
            if (e.key.toLowerCase() === "i") setShowInfo(true);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [active, close, next, prev, scale]);

    // Wheel zoom (centered)
    const onWheelZoom = (e) => {
        e.preventDefault();
        const dir = Math.sign(e.deltaY) * -1; // up → zoom in
        const target = Math.max(1, Math.min(4, scale.get() + dir * 0.25));
        animate(scale, target, { duration: 0.15 });
    };

    const resetZoom = () => {
        animate(scale, 1, { duration: 0.18 });
        animate(x, 0, { duration: 0.18 });
        animate(y, 0, { duration: 0.18 });
        setCanDrag(false);
    };

    // Protected modal
    const openInfo = () => setShowInfo(true);
    const closeInfo = () => { setShowInfo(false); setPwd(""); setPwdError(""); setShowPw(false); };
    const submitPwd = (e) => {
        e.preventDefault();
        const val = pwd.trim();
        if (!val) return setPwdError("Password is required.");
        if (val.length < 4) return setPwdError("Must be at least 4 characters.");
        if (val !== PROTECTED_PWD) return setPwdError("Incorrect password.");
        setPwdError(""); setShowInfo(false);
        alert("Protected EXIF unlocked ✅");
    };

    const activeItem = active != null ? items[active] : null;

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Image Lightbox Zoom</h1>
                        <p className="muted">Shared-element zoom from grid → lightbox. Drag to pan, wheel to zoom, arrows to navigate.</p>
                    </div>
                </Styled.Header>

                {/* Grid */}
                <Styled.Grid>
                    {items.map((it, i) => (
                        <motion.button
                            key={it.id}
                            className="thumb"
                            onClick={thumbClick(i)}
                            layout
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.img src={it.src} alt={it.alt} loading="lazy" layoutId={`img-${it.id}`} className="img" />
                            <div className="cap"><span className="title">{it.alt}</span></div>
                        </motion.button>
                    ))}
                </Styled.Grid>

                {/* Lightbox */}
                <AnimatePresence>
                    {active != null && (
                        <Styled.Overlay
                            as={motion.div}
                            key="overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={(e) => { if (e.currentTarget === e.target) close(); }}
                        >
                            <motion.div
                                className="stage"
                                initial={{ scale: 0.98, opacity: 0.5 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.98, opacity: 0 }}
                                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            >
                                {/* Prev/Next */}
                                <button className="nav prev" onClick={prev} aria-label="Previous image">‹</button>
                                <button className="nav next" onClick={next} aria-label="Next image">›</button>

                                {/* Zoomable/draggable image */}
                                <motion.img
                                    key={activeItem.id}
                                    src={activeItem.src}
                                    alt={activeItem.alt}
                                    className="full"
                                    layoutId={`img-${activeItem.id}`}
                                    style={{ scale, x, y, cursor }}
                                    onLoad={() => setLoaded(true)}
                                    drag={canDrag}                // ← now reacts to scale changes
                                    dragPropagation={false}
                                    dragElastic={0.12}
                                    dragMomentum={false}
                                    whileDrag={{ cursor: "grabbing" }}
                                    onWheel={onWheelZoom}
                                    onDoubleClick={resetZoom}
                                />

                                {!loaded && (
                                    <div className="loading">
                                        <Spinner />
                                        <span className="muted">Loading…</span>
                                    </div>
                                )}

                                {/* Toolbar */}
                                <motion.div
                                    className="toolbar"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 20, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="left">
                                        <button className="tool" onClick={resetZoom} title="Reset zoom (double-click also)">Reset</button>
                                        <button
                                            className="tool"
                                            onClick={() => animate(scale, Math.min(4, scale.get() + 0.3), { duration: 0.12 })}
                                            title="Zoom in (+)"
                                        >+</button>
                                        <button
                                            className="tool"
                                            onClick={() => animate(scale, Math.max(1, scale.get() - 0.3), { duration: 0.12 })}
                                            title="Zoom out (-)"
                                        >−</button>
                                    </div>

                                    <div className="center"><span className="caption">{activeItem.alt}</span></div>

                                    <div className="right">
                                        <button className="tool ghost" onClick={openInfo} title="Protected EXIF (i)">EXIF</button>
                                        <a className="tool primary" href={activeItem.src} target="_blank" rel="noreferrer" title="Open original">Open</a>
                                        <button className="tool danger" onClick={close} title="Close (Esc)">Close</button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </Styled.Overlay>
                    )}
                </AnimatePresence>

                {/* Modal */}
                <AnimatePresence>
                    {showInfo && (
                        <ModalOverlay
                            as={motion.div}
                            key="modal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={(e) => { if (e.currentTarget === e.target) { setShowInfo(false); setPwd(""); setPwdError(""); setShowPw(false); } }}
                        >
                            <motion.div
                                className="modal"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="m-title"
                                initial={{ y: 18, scale: 0.98, opacity: 0 }}
                                animate={{ y: 0, scale: 1, opacity: 1 }}
                                exit={{ y: 18, scale: 0.98, opacity: 0 }}
                                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="mHead"><h3 id="m-title">Protected EXIF</h3></div>
                                <div className="mBody">
                                    <p className="muted">Enter password to reveal extra metadata.</p>
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                        const val = pwd.trim();
                                        if (!val) return setPwdError("Password is required.");
                                        if (val.length < 4) return setPwdError("Must be at least 4 characters.");
                                        if (val !== PROTECTED_PWD) return setPwdError("Incorrect password.");
                                        setPwdError(""); setShowInfo(false);
                                        alert("Protected EXIF unlocked ✅");
                                    }} className="form">
                                        <label className="field">
                                            <span>Password</span>
                                            <div className="pwWrap">
                                                <input
                                                    type={showPw ? "text" : "password"}
                                                    value={pwd}
                                                    onChange={(e) => { setPwd(e.target.value); setPwdError(""); }}
                                                    placeholder="Enter password"
                                                    autoFocus
                                                    minLength={4}
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    className="eye"
                                                    aria-label={showPw ? "Hide password" : "Show password"}
                                                    onClick={() => setShowPw((v) => !v)}
                                                >
                                                    {showPw ? "🙈" : "👁️"}
                                                </button>
                                            </div>
                                            {pwdError && <em className="error">{pwdError}</em>}
                                        </label>
                                    </form>
                                </div>
                                <div className="mFoot">
                                    <button className="closeBtn ghost" type="button" onClick={() => { setShowInfo(false); setPwd(""); setPwdError(""); setShowPw(false); }}>Cancel</button>
                                    <button className="closeBtn" type="button" onClick={(e) => {
                                        const val = pwd.trim();
                                        if (!val) return setPwdError("Password is required.");
                                        if (val.length < 4) return setPwdError("Must be at least 4 characters.");
                                        if (val !== PROTECTED_PWD) return setPwdError("Incorrect password.");
                                        setPwdError(""); setShowInfo(false);
                                        alert("Protected EXIF unlocked ✅");
                                    }}>Unlock</button>
                                </div>
                            </motion.div>
                        </ModalOverlay>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
