import { useEffect, useMemo, useRef, useState } from "react";
import { MotionConfig, animate, motion, useMotionValue, useTransform } from "framer-motion";
import { Styled } from "./styled";

/**
 * Long-press semantics:
 * - pointerdown / keydown starts a linear timer (progress 0→1)
 * - release/cancel before done: progress animates back to 0 fast
 * - complete: lock success state and show a check for a moment
 */
export default function LongPressProgressRing() {
    const [holdMs, setHoldMs] = useState(900);          // slider-controlled duration
    const [success, setSuccess] = useState(false);      // completed press
    const [armed, setArmed] = useState(false);          // currently pressing
    const progress = useMotionValue(0);                 // 0..1
    const controlsRef = useRef(null);                   // framer animate() controller
    const pressId = useRef(null);                       // track pointer id
    const keyHold = useRef(false);                      // track keyboard hold

    // Derived UI bits
    const pct = useTransform(progress, (v) => Math.round(v * 100));
    const ringColor = useTransform(progress, [0, 1], ["var(--border)", "var(--primary)"]);
    const label = useMemo(
        () => (success ? "Done" : armed ? "Hold…" : "Hold to Confirm"),
        [armed, success]
    );

    /** Cancel any running animation safely */
    function stopAnim(to = 0, speed = 0.18) {
        controlsRef.current?.stop?.();
        controlsRef.current = animate(progress, to, {
            duration: speed,
            ease: [0.22, 1, 0.36, 1],
        });
    }

    function startPress() {
        if (success) return; // ignore if already completed
        setArmed(true);
        controlsRef.current?.stop?.();
        controlsRef.current = animate(progress, 1, {
            duration: holdMs / 1000,
            ease: "linear",
            onComplete: () => {
                setSuccess(true);
                setArmed(false);
                // small bounce pulse on success
                animate("#lp-btn", { scale: [1, 1.06, 1] }, { duration: 0.32, ease: [0.22, 1, 0.36, 1] });
            },
        });
    }

    function cancelPress() {
        setArmed(false);
        if (!success) stopAnim(0); // snap back only if not success
    }

    function resetAll() {
        setSuccess(false);
        setArmed(false);
        stopAnim(0, 0.12);
    }

    // Pointer handlers
    function onPointerDown(e) {
        // left click / touch only
        if (e.button !== undefined && e.button !== 0) return;
        pressId.current = e.pointerId ?? "mouse";
        (e.currentTarget).setPointerCapture?.(pressId.current);
        startPress();
    }
    function onPointerUp(e) {
        if (pressId.current !== (e.pointerId ?? "mouse")) return;
        (e.currentTarget).releasePointerCapture?.(pressId.current);
        pressId.current = null;
        cancelPress();
    }
    function onPointerCancel() {
        pressId.current = null;
        cancelPress();
    }
    function onPointerLeave() {
        // If finger/mouse leaves while holding, treat as cancel (common UX)
        if (armed && !success) cancelPress();
    }

    // Keyboard (Space/Enter) hold semantics
    function onKeyDown(e) {
        if (e.repeat) return;
        if (e.key === " " || e.key === "Enter") {
            keyHold.current = true;
            startPress();
            e.preventDefault();
        }
    }
    function onKeyUp(e) {
        if (!keyHold.current) return;
        if (e.key === " " || e.key === "Enter") {
            keyHold.current = false;
            cancelPress();
            e.preventDefault();
        }
    }

    // Clean up running animation on unmount
    useEffect(() => () => controlsRef.current?.stop?.(), []);

    return (
        // Force motion on for demo clarity
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Long-press Progress Ring</h1>
                        <p className="muted">
                            Hold the button to fill the ring. Release early to cancel. Keyboard: Space/Enter.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Long-press controls">
                        <label className="ctrl">
                            <span>Hold duration</span>
                            <input
                                type="range" min="600" max="2000" step="50"
                                value={holdMs}
                                onChange={(e) => setHoldMs(parseInt(e.target.value, 10))}
                            />
                            <em>{(holdMs / 1000).toFixed(2)}s</em>
                        </label>

                        <button className="btn ghost" onClick={resetAll} title="Reset">Reset</button>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <Styled.RingWrap>
                        {/* Press target */}
                        <motion.button
                            id="lp-btn"
                            type="button"
                            className={`pressBtn ${success ? "is-success" : ""}`}
                            onPointerDown={onPointerDown}
                            onPointerUp={onPointerUp}
                            onPointerCancel={onPointerCancel}
                            onPointerLeave={onPointerLeave}
                            onKeyDown={onKeyDown}
                            onKeyUp={onKeyUp}
                            aria-pressed={armed}
                            aria-label={label}
                        >
                            <span className="label">{label}</span>
                            {/* Success check */}
                            <motion.span
                                className="check"
                                initial={false}
                                animate={{ opacity: success ? 1 : 0, scale: success ? 1 : 0.8 }}
                                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                                aria-hidden="true"
                            >
                                ✓
                            </motion.span>
                        </motion.button>

                        {/* Progress ring (SVG) */}
                        <svg className="ring" viewBox="0 0 100 100" aria-hidden="true">
                            {/* track */}
                            <circle
                                cx="50" cy="50" r="46"
                                fill="none"
                                stroke="var(--border)"
                                strokeWidth="6"
                            />
                            {/* progress (normalized 0..1 via pathLength) */}
                            <motion.circle
                                cx="50" cy="50" r="46"
                                fill="none"
                                strokeWidth="6"
                                strokeLinecap="round"
                                stroke={success ? "var(--primary)" : ringColor}
                                // normalized dasharray so pathLength works from 0..1
                                pathLength="1"
                                strokeDasharray="1"
                                // bind to motion value
                                style={{ pathLength: progress }}
                                // start at top (rotate -90deg)
                                transform="rotate(-90 50 50)"
                            />
                        </svg>

                        {/* Percent readout for debugging / delight */}
                        <motion.div className="pct" aria-hidden="true">
                            {/** Using useTransform above, subscribe via motion.span */}
                            <motion.span>{pct}</motion.span>%
                        </motion.div>
                    </Styled.RingWrap>
                </Styled.Stage>

                <Styled.Notes>
                    <h3>Tech notes</h3>
                    <ul>
                        <li>Progress is a <code>MotionValue</code>; on press we <code>animate()</code> it linearly to 1.</li>
                        <li>SVG circle uses normalized <code>pathLength</code> with <code>strokeDasharray="1"</code> for easy 0..1 control.</li>
                        <li>Pointer + keyboard semantics; release/cancel animates back to 0 quickly.</li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
