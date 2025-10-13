import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, useMotionTemplate, useMotionValue, useSpring, motion } from "framer-motion";
import { Styled } from "./styled";

/** Feature check for better masking on Safari */
const supportsMask = (() => {
    try {
        return CSS?.supports?.("-webkit-mask-image", "radial-gradient(circle, #000 0, transparent 100%)") ||
            CSS?.supports?.("mask-image", "radial-gradient(circle, #000 0, transparent 100%)") || false;
    } catch { return false; }
})();

function useStagePointer(stageRef) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const setFromEvent = useCallback((e) => {
        const el = stageRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
    }, [stageRef, x, y]);

    const center = useCallback(() => {
        const el = stageRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        x.set(rect.width / 2);
        y.set(rect.height / 2);
    }, [stageRef, x, y]);

    return { x, y, setFromEvent, center };
}

export default function SpotlightOverlay() {
    // Controls
    const [enabled, setEnabled] = useState(true);
    const [showHelp, setShowHelp] = useState(false);
    const [dim, setDim] = useState(0.65);     // darkness outside
    const [radius, setRadius] = useState(160); // spotlight radius (px)
    const [feather, setFeather] = useState(36); // feather width (px)
    const stageRef = useRef(null);

    // Pointer tracking (no initial/animate race; MV + springs)
    const { x, y, setFromEvent, center } = useStagePointer(stageRef);
    const sx = useSpring(x, { stiffness: 240, damping: 30, mass: 0.8 });
    const sy = useSpring(y, { stiffness: 240, damping: 30, mass: 0.8 });

    // Radius & feather as motion templates for CSS vars
    const rPx = useMotionTemplate`${radius}px`;
    const fPx = useMotionTemplate`${feather}px`;
    const xPx = useMotionTemplate`${sx}px`;
    const yPx = useMotionTemplate`${sy}px`;

    // On mount/resize → center spotlight
    useEffect(() => {
        center();
        const onR = () => center();
        window.addEventListener("resize", onR, { passive: true });
        return () => window.removeEventListener("resize", onR);
    }, [center]);

    // Keyboard helpers: Space = toggle; F = freeze/unfreeze (enable/disable)
    useEffect(() => {
        const onKey = (e) => {
            if (e.key.toLowerCase() === "f") setEnabled((v) => !v);
            if (e.key === "?" || (e.shiftKey && e.key === "/")) setShowHelp((v) => !v);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Snap to a card center
    const snapTo = (el) => {
        if (!el || !stageRef.current) return;
        const a = el.getBoundingClientRect();
        const s = stageRef.current.getBoundingClientRect();
        x.set(a.left - s.left + a.width / 2);
        y.set(a.top - s.top + a.height / 2);
    };

    // Demo cards (lightweight)
    const CARDS = useMemo(() => (
        Array.from({ length: 6 }).map((_, i) => ({
            id: `card-${i + 1}`,
            title: `Target ${i + 1}`,
            body: "Click “Spot here” to pin the spotlight to this card.",
        }))
    ), []);

    return (
        // Demo: force motion for showcase
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Spotlight Overlay</h1>
                        <p className="muted">
                            Dim the world and reveal a moving focus circle that follows the cursor or pins to elements.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Spotlight controls">
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={enabled}
                                onChange={(e) => setEnabled(e.target.checked)}
                                aria-label="Enable spotlight"
                            />
                            <span>Enabled</span>
                        </label>

                        <div className="ctrl">
                            <span>Radius</span>
                            <input type="range" min="80" max="280" step="2" value={radius} onChange={(e) => setRadius(+e.target.value)} />
                            <em>{radius}px</em>
                        </div>

                        <div className="ctrl">
                            <span>Feather</span>
                            <input type="range" min="8" max="80" step="2" value={feather} onChange={(e) => setFeather(+e.target.value)} />
                            <em>{feather}px</em>
                        </div>

                        <div className="ctrl">
                            <span>Dim</span>
                            <input type="range" min="0.2" max="0.9" step="0.05" value={dim} onChange={(e) => setDim(+e.target.value)} />
                            <em>{dim.toFixed(2)}</em>
                        </div>

                        <button className="btn ghost" onClick={() => setShowHelp(true)} aria-haspopup="dialog" aria-controls="spot-help">
                            Guide
                        </button>
                    </div>
                </Styled.Header>

                <Styled.Stage
                    ref={stageRef}
                    onMouseMove={(e) => enabled && setFromEvent(e)}
                    onTouchMove={(e) => {
                        if (!enabled) return;
                        const t = e.touches[0];
                        if (!t) return;
                        setFromEvent(t);
                    }}
                    onClick={(e) => enabled && setFromEvent(e)}
                >
                    {/* Content */}
                    <div className="grid">
                        {CARDS.map((c) => (
                            <article className="card" key={c.id} id={c.id}>
                                <header><h3>{c.title}</h3></header>
                                <p className="body">{c.body}</p>
                                <div className="actions">
                                    <button className="btn" onClick={(e) => snapTo(e.currentTarget.closest(".card"))}>Spot here</button>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Spotlight overlay */}
                    <AnimatePresence initial={false}>
                        {enabled && (
                            <motion.div
                                className={`spotLayer ${supportsMask ? "use-mask" : "use-gradient"}`}
                                style={{
                                    // CSS custom props the layer reads for the radial “hole”
                                    "--x": xPx,
                                    "--y": yPx,
                                    "--r": rPx,
                                    "--f": fPx,
                                    "--dim": dim,
                                }}
                                aria-hidden="true"
                            />
                        )}
                    </AnimatePresence>

                    {/* Optional ring for premium feel (subtle) */}
                    {enabled && (
                        <motion.div
                            className="ring"
                            style={{
                                left: `calc(${xPx} - ${rPx})`,
                                top: `calc(${yPx} - ${rPx})`,
                                width: `calc(${rPx} * 2)`,
                                height: `calc(${rPx} * 2)`,
                            }}
                            aria-hidden="true"
                        />
                    )}
                </Styled.Stage>

                {/* Self-made modal (help) */}
                <AnimatePresence>
                    {showHelp && (
                        <motion.div
                            className="modalOverlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                id="spot-help"
                                role="dialog"
                                aria-modal="true"
                                className="modal"
                                initial={{ y: 12, opacity: 0.8, scale: 0.98 }}
                                animate={{ y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 280, damping: 30 } }}
                                exit={{ y: 8, opacity: 0, scale: 0.98, transition: { duration: 0.18 } }}
                            >
                                <header className="modalHead">
                                    <h2>Using Spotlight</h2>
                                </header>
                                <div className="modalBody">
                                    <ul>
                                        <li><b>Enabled</b> lets the circle follow your cursor/touch.</li>
                                        <li>Use <b>Radius</b> and <b>Feather</b> to tune the reveal.</li>
                                        <li>Click <b>Spot here</b> on any card to pin the light there.</li>
                                        <li>Keyboard: <kbd>F</kbd> toggles enable, <kbd>?</kbd> opens this guide.</li>
                                    </ul>
                                </div>
                                <footer className="modalFoot">
                                    <button className="btn" onClick={() => setShowHelp(false)}>Close</button>
                                </footer>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
