import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useAnimation } from "framer-motion";
import { Styled } from "./styled";

/** Simple state machine */
const ST = { IDLE: "idle", DIRTY: "dirty", SAVING: "saving", SAVED: "saved" };

export default function SavePulse() {
    const [text, setText] = useState("");
    const [state, setState] = useState(ST.IDLE);
    const [auto, setAuto] = useState(true);
    const [latency, setLatency] = useState(1.0); // seconds
    const debRef = useRef(null);

    /** when text changes: become DIRTY, optionally debounce autosave */
    const onChange = (e) => {
        const v = e.target.value;
        setText(v);
        setState(ST.DIRTY);

        if (!auto) return;
        if (debRef.current) clearTimeout(debRef.current);
        debRef.current = setTimeout(() => {
            handleSave();
        }, 800);
    };

    /** Simulated save */
    const handleSave = useCallback(() => {
        if (state === ST.SAVING) return;
        setState(ST.SAVING);
        const t = setTimeout(() => {
            setState(ST.SAVED);
            // keep "Saved" badge visible; we’ll return to IDLE on next keystroke
        }, Math.max(200, latency * 1000));
        return () => clearTimeout(t);
    }, [state, latency]);

    /** Keyboard: Ctrl/Cmd+S to save */
    useEffect(() => {
        const onKey = (e) => {
            const cmdS = (e.metaKey || e.ctrlKey) && (e.key === "s" || e.key === "S");
            if (cmdS) {
                e.preventDefault();
                handleSave();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [handleSave]);

    const statusText = useMemo(() => {
        switch (state) {
            case ST.DIRTY: return "Unsaved changes";
            case ST.SAVING: return "Saving…";
            case ST.SAVED: return "Saved";
            default: return "All up to date";
        }
    }, [state]);

    return (
        // Demo forces motion so the pulse is always visible
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Save Pulse</h1>
                        <p className="muted">
                            Tactile feedback for saves: ring pulse while saving, icon swap to a check, subtle color and scale.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Save controls">
                        <label className="ctrl">
                            <span>Auto-save</span>
                            <button
                                className={`toggle ${auto ? "on" : ""}`}
                                onClick={() => setAuto((v) => !v)}
                                aria-pressed={auto}
                                title="Toggle auto-save"
                            >
                                <i />
                            </button>
                        </label>

                        <label className="ctrl">
                            <span>Latency</span>
                            <input
                                type="range"
                                min="0.4"
                                max="1.8"
                                step="0.1"
                                value={latency}
                                onChange={(e) => setLatency(parseFloat(e.target.value))}
                            />
                            <em>{latency.toFixed(1)}s</em>
                        </label>

                        <button className="btn" onClick={handleSave} disabled={state === ST.SAVING} title="Save now">
                            <SaveIcon state={state} />
                            <span className="btnLabel">{state === ST.SAVING ? "Saving…" : "Save"}</span>
                        </button>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <div className="editor">
                        <label htmlFor="notes">Notes</label>
                        <textarea
                            id="notes"
                            placeholder="Type something… (Ctrl/Cmd+S to save)"
                            value={text}
                            onChange={onChange}
                        />
                        <div className={`status ${state}`}>
                            <StatusDot state={state} />
                            <span aria-live="polite">{statusText}</span>
                        </div>
                    </div>
                </Styled.Stage>

                <Styled.Notes>
                    <h3>Tech notes</h3>
                    <ul>
                        <li>Ring pulses are three <code>&lt;motion.span&gt;</code> circles with staggered keyframes.</li>
                        <li>Button uses a tiny scale pop on transition to <b>Saved</b>.</li>
                        <li>Accessible updates via <code>aria-live</code> on the status label.</li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}

/* --------------------------------- */
/* Icons + micro-interactions        */
/* --------------------------------- */

function SaveIcon({ state }) {
    const rings = [0, 1, 2];

    const ringAnim = {
        initial: { opacity: 0, scale: 0.6 },
        animate: (i) => ({
            opacity: [0, 0.85, 0],
            scale: [0.6, 1.25, 1.6],
            transition: {
                duration: 1.2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };

    const iconControls = useAnimation();
    useEffect(() => {
        if (state === "saved") {
            // tiny pop when we hit Saved
            iconControls.start({
                scale: [1, 1.08, 1],
                transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            });
        }
    }, [state, iconControls]);

    return (
        <span className={`iconWrap ${state}`}>
            {/* Pulse rings while saving */}
            <AnimatePresence mode="popLayout" initial={false}>
                {state === "saving" &&
                    rings.map((i) => (
                        <motion.span key={i} className="ring" variants={ringAnim} initial="initial" animate="animate" custom={i} />
                    ))}
            </AnimatePresence>

            {/* Icon itself */}
            <motion.span className="glyph" animate={iconControls}>
                <AnimatePresence mode="wait" initial={false}>
                    {state === "saved" ? (
                        <motion.svg
                            key="check"
                            viewBox="0 0 24 24"
                            className="svg"
                            initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 10, scale: 0.9 }}
                            transition={{ duration: 0.18 }}
                        >
                            <path
                                d="M20 6L9 17l-5-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </motion.svg>
                    ) : (
                        <motion.svg
                            key="disk"
                            viewBox="0 0 24 24"
                            className="svg"
                            initial={{ opacity: 0, y: 2 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -2 }}
                            transition={{ duration: 0.18 }}
                        >
                            {/* Floppy-ish shape */}
                            <path
                                d="M5 3h10l4 4v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            />
                            <path d="M7 3h8v6H7z" fill="currentColor" />
                            <path d="M7 18h10" stroke="currentColor" strokeWidth="1.8" />
                        </motion.svg>
                    )}
                </AnimatePresence>
            </motion.span>
        </span>
    );
}

function StatusDot({ state }) {
    const variants = {
        idle: { background: "var(--border)" },
        dirty: { background: "hsl(32 95% 55%)" },
        saving: { background: "hsl(210 90% 56%)" },
        saved: { background: "hsl(145 70% 45%)" },
    };
    return <motion.i className="dot" variants={variants} animate={state} />;
}
