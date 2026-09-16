import { useEffect, useMemo, useRef, useState } from "react";
import { MotionConfig, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Styled } from "./styled";

/* =============== Options on the rail =============== */
const MODES = [
    { key: "off", label: "Off", hue: 210, desc: "Everything idle. Minimal processing." },
    { key: "eco", label: "Eco", hue: 170, desc: "Power saver. Great battery life." },
    { key: "balanced", label: "Balanced", hue: 200, desc: "Daily driver. Smooth and steady." },
    { key: "performance", label: "Performance", hue: 230, desc: "Extra punch. Snappy response." },
    { key: "ludicrous", label: "Ludicrous", hue: 280, desc: "Uncapped. Buckle up." },
];
const LAST = MODES.length - 1;

/* ------- utilities ------- */
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
const nearestIndex = (progress, velocity = 0) => {
    const bias = Math.sign(velocity) * 0.06;           // tiny fling nudge
    const p = clamp(progress + bias, 0, 1);
    return clamp(Math.round(p * LAST), 0, LAST);
};

function useWidth(ref) {
    const [w, setW] = useState(0);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const ro = new ResizeObserver(() => setW(el.clientWidth));
        ro.observe(el);
        setW(el.clientWidth);
        return () => ro.disconnect();
    }, []);
    return w;
}

export default function RailSelector() {
    const [index, setIndex] = useState(2); // Balanced
    const [dragging, setDragging] = useState(false);

    const railRef = useRef(null);
    const railWidth = useWidth(railRef);

    // Motion state
    const x = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 640, damping: 42, mass: 0.7 });

    // Derived values
    const progress = useTransform(springX, (v) => (railWidth ? v / railWidth : 0));
    const hue = useTransform(progress, (p) => {
        const start = MODES[0].hue;
        const end = MODES[LAST].hue;
        return start + (end - start) * p;
    });
    const filterMV = useTransform(progress, (p) => `saturate(${0.8 + p * 0.4})`);

    // keep spring synced with selected index
    useEffect(() => {
        if (!railWidth) return;
        x.set((index / LAST) * railWidth);
    }, [index, railWidth]); // eslint-disable-line

    // Click on rail → seek
    const onSeek = (e) => {
        const rect = railRef.current.getBoundingClientRect();
        const px = clamp(e.clientX - rect.left, 0, rect.width);
        const target = nearestIndex(px / rect.width, 0);
        setIndex(target);
    };

    // Keyboard support
    const onKey = (e) => {
        if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
        let next = index;
        switch (e.key) {
            case "ArrowLeft": next = clamp(index - 1, 0, LAST); break;
            case "ArrowRight": next = clamp(index + 1, 0, LAST); break;
            case "PageDown": next = clamp(index - 2, 0, LAST); break;
            case "PageUp": next = clamp(index + 2, 0, LAST); break;
            case "Home": next = 0; break;
            case "End": next = LAST; break;
            default: return;
        }
        e.preventDefault();
        setIndex(next);
    };

    // Drag end → velocity-aware snap
    const onDragEnd = (_, info) => {
        setDragging(false);
        const rect = railRef.current.getBoundingClientRect();
        const px = clamp(info.point.x - rect.left, 0, railWidth);
        const v = info.velocity.x / 1000; // normalize
        const target = nearestIndex(px / railWidth, v);
        setIndex(target);
    };

    // Ripple feedback
    const [ripple, setRipple] = useState({ id: 0, x: 0 });
    const fireRipple = (clientX) => {
        const left = railRef.current?.getBoundingClientRect().left ?? 0;
        setRipple({ id: Date.now(), x: clientX - left });
    };

    const active = useMemo(() => MODES[index], [index]);

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Rail Selector</h1>
                        <p className="muted">
                            Drag, click, or use keys. Thumb glides with velocity-aware snapping, ticks, tooltip,
                            ripple, and full ARIA-all theme-aware.
                        </p>
                    </div>

                    <div className="pill" style={{ "--h": hue }}>
                        <span className="k">{active.label}</span>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <Styled.Slider
                        role="slider"
                        aria-label="Performance mode"
                        aria-valuemin={0}
                        aria-valuemax={LAST}
                        aria-valuenow={index}
                        aria-valuetext={active.label}
                        tabIndex={0}
                        onKeyDown={onKey}
                        onClick={(e) => { onSeek(e); fireRipple(e.clientX); }}
                    >
                        {/* Rail */}
                        <div className="rail" ref={railRef}>
                            {/* Active fill */}
                            <motion.div
                                className="fill"
                                style={{
                                    scaleX: progress,
                                    transformOrigin: "left center",
                                    filter: filterMV, // ← derived MotionValue (fixes progress.to error)
                                }}
                            />

                            {/* Ticks */}
                            <div className="ticks">
                                {MODES.map((m, i) => (
                                    <button
                                        key={m.key}
                                        className={`tick ${i === index ? "active" : ""}`}
                                        style={{ left: `${(i / LAST) * 100}%` }}
                                        onClick={(e) => { e.stopPropagation(); setIndex(i); fireRipple(e.clientX); }}
                                        type="button"
                                        aria-label={m.label}
                                    />
                                ))}
                            </div>

                            {/* Ripple */}
                            <motion.span
                                key={ripple.id}
                                className="ripple"
                                style={{ left: ripple.x }}
                                initial={{ scale: 0, opacity: 0.35 }}
                                animate={{ scale: 1, opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                aria-hidden
                            />

                            {/* Thumb */}
                            <motion.div
                                className={`thumb ${dragging ? "dragging" : ""}`}
                                drag="x"
                                dragElastic={0.12}
                                dragMomentum={false}
                                dragConstraints={railRef}
                                style={{ x: springX }}
                                onDragStart={() => setDragging(true)}
                                onDragEnd={onDragEnd}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <motion.div className="glow" style={{ "--h": hue }} />
                                <motion.div
                                    className="tooltip"
                                    style={{ "--h": hue }}
                                    initial={false}
                                    animate={{ y: dragging ? -10 : -6, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 520, damping: 36 }}
                                >
                                    {active.label}
                                </motion.div>
                            </motion.div>
                        </div>
                    </Styled.Slider>

                    {/* Preview */}
                    <Styled.Preview style={{ "--h": `hsl(${active.hue} 90% 60%)` }}>
                        <header>
                            <span className="badge">{active.label}</span>
                            <h2>Tuning</h2>
                        </header>
                        <p>{active.desc}</p>
                        <ul>
                            <li>Keyboard: ← → (±1), PgUp/PgDn (±2), Home/End</li>
                            <li>Click anywhere on the rail to seek</li>
                            <li>Springs tuned for snap without wobble</li>
                        </ul>
                    </Styled.Preview>
                </Styled.Stage>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
