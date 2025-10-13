import { useMemo, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";

/** Format as string parts so digits can animate and separators stay static */
function formatParts(value, { locale = "en-IN", style = "decimal", currency } = {}) {
    const fmt = new Intl.NumberFormat(locale, {
        style,
        currency,
        maximumFractionDigits: 2,
        minimumFractionDigits: 0,
    });

    // Intl gives you a single string; we split into tokens (digits vs others).
    const s = fmt.format(value);
    const parts = [];
    for (const ch of s) {
        if (/\d/.test(ch)) parts.push({ type: "digit", value: ch });
        else parts.push({ type: "sep", value: ch });
    }
    return parts;
}

/** One vertical column that scrolls to the target digit (0–9) */
function DigitColumn({ digit, rowH = 46, transition }) {
    const y = useMemo(() => -Number(digit) * rowH, [digit, rowH]);

    return (
        <div className="col" style={{ height: rowH }}>
            {/* Track contains 0..9 once; we slide it via 'y' */}
            <motion.div
                className="colTrack"
                animate={{ y }}
                transition={transition}
                // Keep transforms crisp
                style={{ willChange: "transform" }}
            >
                {Array.from({ length: 10 }, (_, i) => (
                    <div className="cell" key={i} style={{ height: rowH }}>
                        {i}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default function NumberTicker() {
    const [value, setValue] = useState(12345);
    const [duration, setDuration] = useState(0.55);
    const [mode, setMode] = useState("spring"); // 'spring' | 'tween'
    const [currency, setCurrency] = useState(false);

    const transition = useMemo(() => {
        return mode === "spring"
            ? { type: "spring", stiffness: 320, damping: 34, mass: 0.8 }
            : { duration, ease: [0.22, 1, 0.36, 1] };
    }, [mode, duration]);

    const parts = useMemo(
        () =>
            formatParts(value, {
                style: currency ? "currency" : "decimal",
                currency: "INR",
            }),
        [value, currency]
    );

    const add = (n) => setValue((v) => v + n);
    const randomize = () =>
        setValue(() => Math.floor(Math.random() * 9000000) + 1000);

    return (
        // Force animations for demo clarity; remove reducedMotion="never" to respect OS settings
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Number Ticker</h1>
                        <p className="muted">
                            Digits scroll vertically; separators stay static. Great for KPIs, counters, and live
                            dashboards.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Ticker controls">
                        <button className="btn" onClick={() => add(-1000)}>-1000</button>
                        <button className="btn" onClick={() => add(-100)}>-100</button>
                        <button className="btn" onClick={() => add(-1)}>-1</button>

                        <button className="btn ghost" onClick={() => add(1)}>+1</button>
                        <button className="btn ghost" onClick={() => add(100)}>+100</button>
                        <button className="btn ghost" onClick={() => add(1000)}>+1000</button>

                        <div className="sep" />

                        <label className="ctrl">
                            <span>Mode</span>
                            <select value={mode} onChange={(e) => setMode(e.target.value)}>
                                <option value="spring">Spring</option>
                                <option value="tween">Tween</option>
                            </select>
                        </label>

                        <label className="ctrl">
                            <span>Duration</span>
                            <input
                                type="range"
                                min="0.25"
                                max="1.2"
                                step="0.05"
                                value={duration}
                                onChange={(e) => setDuration(parseFloat(e.target.value))}
                                disabled={mode !== "tween"}
                            />
                            <em>{duration.toFixed(2)}s</em>
                        </label>

                        <label className="ctrl inline">
                            <input
                                type="checkbox"
                                checked={currency}
                                onChange={(e) => setCurrency(e.target.checked)}
                            />
                            <span>Currency (₹)</span>
                        </label>

                        <button className="btn" onClick={randomize}>Random</button>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <div className="ticker" aria-live="polite" aria-label="Animated value">
                        {parts.map((p, i) =>
                            p.type === "digit" ? (
                                <DigitColumn
                                    key={`d-${i}`}
                                    digit={p.value}
                                    rowH={46}
                                    transition={transition}
                                />
                            ) : (
                                <span key={`s-${i}`} className="sepChar">
                                    {p.value}
                                </span>
                            )
                        )}
                    </div>

                    <div className="raw">
                        <span className="label">Value:</span>
                        <input
                            className="numInput"
                            type="number"
                            value={value}
                            onChange={(e) => setValue(Number(e.target.value || 0))}
                        />
                    </div>
                </Styled.Stage>

                <Styled.Notes>
                    <h3>Tips</h3>
                    <ul>
                        <li>Use <code>spring</code> for playful counters; <code>tween</code> for KPI polish.</li>
                        <li>Prefix/suffix (₹, %, k) can be static <code>sep</code> nodes around digit columns.</li>
                        <li>Keep row height consistent across breakpoints for crisp motion.</li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
