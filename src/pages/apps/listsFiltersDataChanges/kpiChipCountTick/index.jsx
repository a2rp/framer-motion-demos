import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";

/** format with thousands separators */
const fmt = new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 });

export default function KpiChipCountTick() {
    const [count, setCount] = useState(1280);
    const [auto, setAuto] = useState(false);
    const [bump, setBump] = useState(0);

    // direction-aware tick
    const prev = useRef(count);
    const dir = Math.sign(count - prev.current) || 1;
    useEffect(() => {
        if (count !== prev.current) {
            prev.current = count;
            setBump((k) => k + 1); // pulse the chip
        }
    }, [count]);

    // ✔ variants (not functions directly in initial/exit)
    const variants = useMemo(
        () => ({
            enter: (d) => ({ y: d > 0 ? 6 : -6, scale: 0.98, opacity: 0 }),
            center: {
                y: 0, scale: 1, opacity: 1,
                transition: { type: "spring", stiffness: 420, damping: 30, mass: 0.7 },
            },
            exit: (d) => ({
                y: d > 0 ? -6 : 6, scale: 0.98, opacity: 0,
                transition: { duration: 0.12 },
            }),
        }),
        []
    );

    // auto tick (demo)
    useEffect(() => {
        if (!auto) return;
        const id = setInterval(() => setCount((c) => c + 1), 1200);
        return () => clearInterval(id);
    }, [auto]);

    const inc = (n = 1) => setCount((c) => c + n);
    const dec = (n = 1) => setCount((c) => Math.max(0, c - n));
    const reset = () => setCount(0);

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>KPI Count Tick</h1>
                        <p className="muted">
                            A compact chip that ticks numbers with a subtle nudge + pop. Perfect for KPI tiles and badges.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="KPI controls">
                        <button className="btn" onClick={() => dec(1)} title="Decrease">−1</button>
                        <button className="btn" onClick={() => inc(1)} title="Increase">+1</button>
                        <button className="btn ghost" onClick={() => inc(10)} title="Increase by 10">+10</button>
                        <div className="sep" />
                        <button className="btn ghost" onClick={reset} title="Reset">Reset</button>
                        <label className="toggle">
                            <input type="checkbox" checked={auto} onChange={(e) => setAuto(e.target.checked)} />
                            <span>Auto</span>
                        </label>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <motion.button
                        key={`chip-${bump}`}
                        className="chip"
                        onClick={() => inc(1)}
                        title="Click to increment"
                        initial={{ boxShadow: "0 0 0 0px hsl(210 90% 56% / 0)" }}
                        animate={{
                            boxShadow: [
                                "0 0 0 0px hsl(210 90% 56% / 0)",
                                "0 0 0 6px hsl(210 90% 56% / 0.18)",
                                "0 0 0 0px hsl(210 90% 56% / 0)",
                            ],
                        }}
                        transition={{ duration: 0.6, times: [0, 0.25, 1] }}
                    >
                        <span className="label">Active Users</span>

                        <span className="countSlot" aria-live="polite" aria-atomic="true">
                            <AnimatePresence initial={false} custom={dir} mode="popLayout">
                                <motion.span
                                    key={count}
                                    className="count"
                                    custom={dir}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                >
                                    {fmt.format(count)}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </motion.button>

                    <p className="hint">
                        Tip: Use inside list rows, filters, or KPI cards. Motion is transform-only → smooth on big lists.
                    </p>
                </Styled.Stage>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
