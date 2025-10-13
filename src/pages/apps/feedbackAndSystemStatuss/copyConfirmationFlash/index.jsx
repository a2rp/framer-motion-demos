import { useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";

/** Try clipboard API, fall back to a hidden textarea */
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        try {
            const ta = document.createElement("textarea");
            ta.value = text;
            ta.style.position = "fixed";
            ta.style.opacity = "0";
            document.body.appendChild(ta);
            ta.focus();
            ta.select();
            const ok = document.execCommand("copy");
            document.body.removeChild(ta);
            return ok;
        } catch {
            return false;
        }
    }
}

/** Simple inline icons (no extra deps) */
function IconCopy(props) {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden focusable="false" {...props}>
            <path fill="currentColor" d="M8 7a3 3 0 013-3h7a3 3 0 013 3v7a3 3 0 01-3 3h-7a3 3 0 01-3-3V7zm-5 5a3 3 0 003 3h1v-2H6a1 1 0 01-1-1V8H3v4z" />
        </svg>
    );
}
function IconCheck(props) {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden focusable="false" {...props}>
            <path fill="currentColor" d="M9.55 16.15l-3.7-3.7 1.4-1.4 2.3 2.29 7.1-7.1 1.41 1.41-8.5 8.5z" />
        </svg>
    );
}

export default function CopyConfirmationFlash() {
    const text =
        `npm i framer-motion styled-components\n# or\npnpm add framer-motion styled-components`;
    const [copied, setCopied] = useState(false);
    const [flashKey, setFlashKey] = useState(0); // remount flash for every copy
    const [announce, setAnnounce] = useState(""); // SR-only polite updates
    const resetTimer = useRef(0);

    const doCopy = async () => {
        const ok = await copyToClipboard(text);
        window.clearTimeout(resetTimer.current);

        setCopied(!!ok);
        setFlashKey((k) => k + 1);
        setAnnounce(ok ? "Copied to clipboard" : "Copy failed");

        // auto-reset UI state
        resetTimer.current = window.setTimeout(() => {
            setCopied(false);
            setAnnounce("");
        }, 1100);
    };

    useEffect(() => () => window.clearTimeout(resetTimer.current), []);

    return (
        // Demo showcases motion even when OS has reduced motion on
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Copy Confirmation Flash</h1>
                        <p className="muted">
                            Click to copy. The row flashes, the button pulses, and the icon swaps to a check.
                        </p>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <div className="copyRow">
                        {/* Flash overlay (remounts each time via key) */}
                        <AnimatePresence initial={false}>
                            <motion.div
                                key={flashKey}
                                className="flash"
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: [0, 1, 0], scaleX: [0, 1, 1] }}
                                transition={{ duration: 0.9, times: [0, 0.18, 1], ease: [0.22, 1, 0.36, 1] }}
                                aria-hidden="true"
                            />
                        </AnimatePresence>

                        <pre className="code" aria-label="Install commands" tabIndex={0}>
                            {String(text)}
                        </pre>

                        <button className="copyBtn" onClick={doCopy} aria-live="polite" aria-label="Copy to clipboard">
                            {/* Pulse ring on success */}
                            <AnimatePresence initial={false}>
                                {copied && (
                                    <motion.span
                                        className="pulse"
                                        key="pulse"
                                        initial={{ opacity: 0.25, scale: 0.8 }}
                                        animate={{ opacity: 0, scale: 1.6 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        aria-hidden="true"
                                    />
                                )}
                            </AnimatePresence>

                            {/* Icon swap */}
                            <span className="icon" aria-hidden="true">
                                <AnimatePresence mode="wait" initial={false}>
                                    {copied ? (
                                        <motion.span
                                            key="check"
                                            initial={{ rotate: -10, opacity: 0, scale: 0.9 }}
                                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                            exit={{ rotate: 10, opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
                                        >
                                            <IconCheck />
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="copy"
                                            initial={{ rotate: -10, opacity: 0, scale: 0.9 }}
                                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                            exit={{ rotate: 10, opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
                                        >
                                            <IconCopy />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </span>

                            <span className="label">{copied ? "Copied" : "Copy"}</span>
                        </button>
                    </div>

                    {/* SR-only polite region */}
                    <span className="sr" aria-live="polite">{announce}</span>

                    <div className="tips">
                        <ul>
                            <li>Flash uses a full-row overlay: <code>scaleX</code> and opacity tween.</li>
                            <li>Button fires a quick pulse ring and icon crossfade.</li>
                            <li>Accessible: focusable code block + polite screen reader updates.</li>
                        </ul>
                    </div>
                </Styled.Stage>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
