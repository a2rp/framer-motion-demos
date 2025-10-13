import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { MotionConfig, motion, useMotionValue, animate } from "framer-motion";
import { Styled } from "./styled";

/* -------------------- slide data (≥5 guaranteed) -------------------- */
const uid = (() => { let i = 0; return () => `slide-${++i}`; })();

function makeSlides(min = 5) {
    const base = [
        { title: "Depth & Snap", body: "Drag with momentum; release to snap to the closest slide." },
        { title: "Touch Native", body: "Works great with touch—low dragElastic, no layout thrash." },
        { title: "Keyboard Too", body: "Use ← → to move. Dots + buttons are accessible controls." },
        { title: "GPU Friendly", body: "Only transforms/opacity. Smooth across devices." },
    ];
    const need = Math.max(min, base.length + 2); // give it a few more for nicer demo
    return Array.from({ length: need }, (_, i) => {
        const b = base[i % base.length];
        const hue = 210 + ((i * 23) % 60); // tasteful blue variants
        return { id: uid(), hue, title: b.title, body: b.body };
    });
}

/* ------------------------------- component ------------------------------- */
export default function DragSnapCarousel() {
    const slides = useMemo(() => makeSlides(5), []);
    const [index, setIndex] = useState(0);

    const viewportRef = useRef(null);
    const x = useMotionValue(0);
    const [slideW, setSlideW] = useState(0);

    // measure slide width (viewport width)
    useLayoutEffect(() => {
        const measure = () => {
            const el = viewportRef.current;
            if (!el) return;
            const w = el.getBoundingClientRect().width;
            setSlideW(w);
        };
        measure();
        // re-measure on resize
        const ro = new ResizeObserver(measure);
        if (viewportRef.current) ro.observe(viewportRef.current);
        window.addEventListener("resize", measure, { passive: true });
        return () => {
            ro.disconnect();
            window.removeEventListener("resize", measure);
        };
    }, []);

    // keep x in sync when index or width changes
    useEffect(() => {
        if (!slideW) return;
        // if width changed, jump (no animation) to the correct offset to avoid drift
        x.set(-index * slideW);
    }, [slideW]); // eslint-disable-line

    useEffect(() => {
        if (!slideW) return;
        animate(x, -index * slideW, { type: "spring", stiffness: 320, damping: 36, mass: 0.9 });
    }, [index, slideW]); // eslint-disable-line

    const count = slides.length;
    const minX = -(count - 1) * slideW;
    const maxX = 0;

    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    const snapTo = (i) => setIndex(clamp(i, 0, count - 1));

    const onDragEnd = (_e, info) => {
        // Project where the track would land with momentum, then snap
        const projected = x.get() + info.velocity.x * 0.35;
        const rawIndex = -projected / slideW;
        const nearest = Math.round(rawIndex);
        snapTo(nearest);
    };

    // keyboard arrows
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowRight") snapTo(index + 1);
            if (e.key === "ArrowLeft") snapTo(index - 1);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [index]);

    return (
        // Force animations visible in demos. Remove reducedMotion="never" if you want to respect OS.
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Drag-Snap Carousel</h1>
                        <p className="muted">
                            Drag horizontally. Momentum projects, then snaps to the nearest slide. Buttons and dots are synced.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Carousel controls">
                        <button className="btn" onClick={() => snapTo(index - 1)} disabled={index === 0} title="Previous">← Prev</button>
                        <div className="dots" aria-live="polite">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    className={`dot ${i === index ? "active" : ""}`}
                                    aria-label={`Go to slide ${i + 1}`}
                                    onClick={() => snapTo(i)}
                                />
                            ))}
                        </div>
                        <button className="btn primary" onClick={() => snapTo(index + 1)} disabled={index === count - 1} title="Next">Next →</button>
                    </div>
                </Styled.Header>

                <Styled.Stage
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Demo carousel"
                >
                    <div className="viewport" ref={viewportRef}>
                        <motion.div
                            className="track"
                            style={{ x }}
                            drag="x"
                            dragMomentum={false}
                            dragElastic={0.08}
                            dragConstraints={{ left: minX, right: maxX }}
                            onDragEnd={onDragEnd}
                        >
                            {slides.map((s, i) => (
                                <article
                                    key={s.id}
                                    className={`slide ${i === index ? "is-active" : ""}`}
                                    style={{ ["--hue"]: s.hue }}
                                    aria-current={i === index ? "true" : "false"}
                                >
                                    <div className="card">
                                        <span className="kicker">Slide {i + 1}</span>
                                        <h3>{s.title}</h3>
                                        <p>{s.body}</p>
                                    </div>
                                </article>
                            ))}
                        </motion.div>
                    </div>
                </Styled.Stage>

                <Styled.Notes>
                    <h3>Tech notes</h3>
                    <ul>
                        <li>Drag the <code>track</code>; each slide is <b>flex: 0 0 100%</b> of the viewport.</li>
                        <li>On release, we <b>project</b> by velocity and <b>snap</b> to <code>round(projected/width)</code>.</li>
                        <li>Only transforms/opacity; theme via CSS variables. It’s buttery.</li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
