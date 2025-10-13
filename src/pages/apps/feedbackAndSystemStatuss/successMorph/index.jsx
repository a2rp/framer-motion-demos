import { useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "framer-motion";
import { Styled } from "./styled";

const STATUS = { idle: "idle", loading: "loading", success: "success" };

export default function SuccessMorph() {
    const [status, setStatus] = useState(STATUS.idle);
    const [message, setMessage] = useState("Nothing to save yet.");
    const prefersReduced = useReducedMotion();
    const resetTimer = useRef(null);

    useEffect(() => () => clearTimeout(resetTimer.current), []);

    async function fakeSave() {
        // simulate a 1.2–1.6s network round-trip
        const ms = 1200 + Math.floor(Math.random() * 400);
        return new Promise((res) => setTimeout(res, ms));
    }

    async function onClick() {
        if (status !== STATUS.idle) return;
        clearTimeout(resetTimer.current);

        setStatus(STATUS.loading);
        setMessage("Saving…");

        await fakeSave();

        setStatus(STATUS.success);
        setMessage("Saved!");

        // auto-reset after a moment so the button is usable again
        resetTimer.current = setTimeout(() => {
            setStatus(STATUS.idle);
            setMessage("Nothing to save yet.");
        }, 1800);
    }

    function resetNow() {
        clearTimeout(resetTimer.current);
        setStatus(STATUS.idle);
        setMessage("Reset.");
    }

    const isLoading = status === STATUS.loading;
    const isSuccess = status === STATUS.success;

    return (
        // Respect user’s reduced-motion setting for the spinner; keep everything transform/opacity-only.
        <MotionConfig>
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Success Morph</h1>
                        <p className="muted">
                            Press the button to simulate a save. We morph from a spinner to a checkmark with a tidy color pop.
                        </p>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <Styled.Panel role="region" aria-label="Save demo">
                        <motion.button
                            type="button"
                            className="btn"
                            data-state={status}
                            onClick={onClick}
                            disabled={isLoading}
                            aria-busy={isLoading || undefined}
                            aria-live="polite"
                        >
                            <span className="icon">
                                <AnimatePresence mode="wait" initial={false}>
                                    {isLoading && (
                                        <motion.svg
                                            key="spinner"
                                            viewBox="0 0 24 24"
                                            className="spinner"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <circle
                                                cx="12" cy="12" r="9"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeDasharray="44"
                                                strokeDashoffset="28" /* arc */
                                            />
                                            {!prefersReduced && (
                                                <motion.g
                                                    style={{ transformOrigin: "12px 12px" }}
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                />
                                            )}
                                        </motion.svg>
                                    )}

                                    {isSuccess && (
                                        <motion.svg
                                            key="check"
                                            viewBox="0 0 24 24"
                                            initial={{ scale: 0.7, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        >
                                            <motion.path
                                                d="M6 12l4 4 8-8"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ duration: 0.45, ease: "easeOut" }}
                                            />
                                        </motion.svg>
                                    )}

                                    {!isLoading && !isSuccess && (
                                        <motion.svg
                                            key="idle"
                                            viewBox="0 0 24 24"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 0.6 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <path
                                                d="M12 4v16M4 12h16"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </motion.svg>
                                    )}
                                </AnimatePresence>
                            </span>

                            <span className="label">
                                {status === STATUS.idle ? "Save changes" : status === STATUS.loading ? "Saving…" : "Saved"}
                            </span>
                        </motion.button>

                        <div className="aux">
                            <span className="status" aria-live="polite">{message}</span>
                            <button className="link" onClick={resetNow} disabled={isLoading}>
                                Reset
                            </button>
                        </div>
                    </Styled.Panel>
                </Styled.Stage>

                <Styled.Notes>
                    <ul>
                        <li>Button disables during work and exposes <code>aria-busy</code>.</li>
                        <li>Spinner respects <code>prefers-reduced-motion</code>; checkmark draws in ~450ms.</li>
                        <li>State colors are tokenized, so themes just work.</li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
