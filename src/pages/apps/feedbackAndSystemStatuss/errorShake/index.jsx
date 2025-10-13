import { useRef, useState } from "react";
import { MotionConfig, motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { Styled } from "./styled";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export default function ErrorShake() {
    const prefersReduced = useReducedMotion();
    const controls = useAnimationControls();
    const inputRef = useRef(null);

    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const [ok, setOk] = useState(false);

    const runShake = async () => {
        if (prefersReduced) {
            // Reduced-motion fallback: quick color flash
            await controls.start({
                boxShadow: [
                    "0 0 0 0px transparent",
                    "0 0 0 3px hsl(0 85% 55% / .5)",
                    "0 0 0 0px transparent",
                ],
                transition: { duration: 0.6, times: [0, 0.35, 1] },
            });
            return;
        }

        // Tactile shake
        await controls.start({
            x: [0, -10, 10, -8, 8, -4, 4, 0],
            transition: { duration: 0.55, ease: "easeInOut" },
        });

        // Optional: a tiny haptic nudge on supported devices
        try { navigator.vibrate?.(40); } catch { }
    };

    const validate = (s) => {
        if (!s.trim()) return "Email is required.";
        if (!EMAIL_RE.test(s)) return "Enter a valid email (name@example.com).";
        return "";
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const msg = validate(value);
        setError(msg);
        setOk(!msg);
        if (msg) {
            // focus the field and animate the shake/flash
            inputRef.current?.focus();
            await runShake();
        }
    };

    return (
        // Force on for showcase; remove `reducedMotion="never"` to respect OS by default.
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Error Shake</h1>
                        <p className="muted">
                            A tiny, useful micro-interaction for invalid fields. Reduced-motion users get a color flash instead.
                        </p>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <form onSubmit={onSubmit} noValidate>
                        <motion.div className="field" animate={controls}>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                ref={inputRef}
                                type="email"
                                autoComplete="email"
                                value={value}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                    if (error) setError("");
                                    setOk(false);
                                }}
                                aria-invalid={error ? "true" : "false"}
                                aria-describedby="email-help email-error"
                                placeholder="name@example.com"
                            />
                            <div id="email-help" className="hint">
                                We’ll never share your email.
                            </div>
                        </motion.div>

                        <div className="actions">
                            <button className="btn primary" type="submit">Submit</button>
                            <button
                                className="btn ghost"
                                type="button"
                                onClick={() => {
                                    setValue("");
                                    setError("");
                                    setOk(false);
                                    inputRef.current?.focus();
                                }}
                            >
                                Reset
                            </button>
                        </div>

                        <div className="messages" aria-live="polite">
                            {error && (
                                <div id="email-error" className="error">
                                    {error}
                                </div>
                            )}
                            {ok && !error && (
                                <div className="ok">Looks good. Form ready to submit.</div>
                            )}
                        </div>
                    </form>
                </Styled.Stage>

                <Styled.Notes>
                    <h3>Usage</h3>
                    <ul>
                        <li>Call the shake on validation failure for any field or row.</li>
                        <li>Keep the distance tiny (≤10px) so it feels crisp, not cartoonish.</li>
                        <li>Always pair motion with text and color for accessibility.</li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
