import { useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { makePages } from "../../_shared/pages";
import { Styled } from "./styled";

/** Base templates → padded to ≥5 via makePages() */
const TEMPLATES = [
    {
        key: "ds1",
        title: "Door Swing",
        body:
            "Page swings on a hinge using rotateY with scene perspective. Great for detail flows, " +
            "story screens, or places you want a tactile 'open' feel.",
        bullets: ["Uses perspective on the scene", "Transform origin = hinge", "Enter/Exit rotateY"],
    },
    {
        key: "ds2",
        title: "Design Notes",
        body:
            "Keep angles modest (55–75°). Bigger angles feel gimmicky and can cause perspective warping.",
        bullets: ["Angle ~70° sweet spot", "Short/firm spring", "Consider a subtle shadow/edge"],
    },
    {
        key: "ds3",
        title: "Implementation",
        body:
            "We use AnimatePresence with mode='wait' so exit finishes before enter—no flicker. " +
            "Hinge is controlled by transform-origin.",
        bullets: ["mode='wait' for clean swaps", "Only transforms/opacity", "Backface hidden"],
    },
];
const PAGES = makePages(TEMPLATES, 5);

export default function DoorSwing() {
    const [index, setIndex] = useState(0);
    const [dir, setDir] = useState(1); // 1 = forward, -1 = back
    const [hinge, setHinge] = useState("left"); // 'left' | 'right'
    const [angle, setAngle] = useState(70); // degrees
    const [persp, setPersp] = useState(1000); // px
    const [bump, setBump] = useState(0); // replay key

    const prevIndexRef = useRef(null);
    const page = PAGES[index];

    const canPrev = index > 0;
    const canNext = index < PAGES.length - 1;

    const goPrev = () => {
        if (!canPrev) return;
        prevIndexRef.current = index;
        setDir(-1);
        setIndex(i => i - 1);
    };
    const goNext = () => {
        if (!canNext) return;
        prevIndexRef.current = index;
        setDir(1);
        setIndex(i => i + 1);
    };
    const replay = () => setBump(k => k + 1);

    /** Spring for enter, short tween for exit */
    const enterTransition = useMemo(
        () => ({ type: "spring", stiffness: 280, damping: 28, mass: 0.9 }),
        []
    );
    const exitTransition = useMemo(
        () => ({ duration: 0.24, ease: [0.22, 1, 0.36, 1] }),
        []
    );

    // Sign helper for rotateY based on hinge side
    const sign = hinge === "left" ? -1 : 1;
    const origin = `${hinge} center`;

    const enter = (d) => ({
        rotateY: sign * angle,           // swings from angled → 0
        opacity: 0.7,
        x: d > 0 ? 20 : -20,             // tiny lateral hint
        scale: 0.995,                    // micro depth hint
    });
    const center = {
        rotateY: 0,
        opacity: 1,
        x: 0,
        scale: 1,
        transition: enterTransition,
    };
    const exit = (d) => ({
        rotateY: -sign * angle * 0.8,    // swings away to opposite side
        opacity: 0,
        x: d > 0 ? -12 : 12,
        transition: exitTransition,
    });

    return (
        // Force animations for the demo showcase (remove to respect OS reduced motion)
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <Styled.Heading>
                        <h1>Door Swing</h1>
                        <p className="muted">
                            Hinge on left/right, rotateY into view with perspective. Subtle and tactile.
                        </p>
                    </Styled.Heading>

                    <Styled.Controls role="toolbar" aria-label="Door Swing controls">
                        <button className="btn" onClick={goPrev} disabled={!canPrev} title="Previous">
                            ← Prev
                        </button>

                        <Styled.Dots aria-hidden>
                            {PAGES.map((_, i) => (
                                <span key={i} className={`dot ${i === index ? "active" : ""}`} />
                            ))}
                        </Styled.Dots>

                        <button className="btn primary" onClick={goNext} disabled={!canNext} title="Next">
                            Next →
                        </button>

                        <span className="spacer" />

                        <label className="ctrl">
                            <span>Hinge</span>
                            <select value={hinge} onChange={(e) => setHinge(e.target.value)}>
                                <option value="left">Left</option>
                                <option value="right">Right</option>
                            </select>
                        </label>

                        <label className="ctrl">
                            <span>Angle</span>
                            <input
                                type="range"
                                min="40"
                                max="85"
                                step="1"
                                value={angle}
                                onChange={(e) => setAngle(parseInt(e.target.value, 10))}
                            />
                            <em>{angle}°</em>
                        </label>

                        <label className="ctrl">
                            <span>Perspective</span>
                            <input
                                type="range"
                                min="600"
                                max="1500"
                                step="50"
                                value={persp}
                                onChange={(e) => setPersp(parseInt(e.target.value, 10))}
                            />
                            <em>{persp}px</em>
                        </label>

                        <button className="btn ghost" onClick={replay} title="Replay animation">
                            Replay
                        </button>
                    </Styled.Controls>
                </Styled.Header>

                <Styled.Stage>
                    {/* Scene provides the perspective context */}
                    <Styled.Scene style={{ perspective: `${persp}px` }}>
                        <AnimatePresence mode="wait" initial={false} custom={{ dir, sign, angle }}>
                            <motion.article
                                key={`${page.id}-${hinge}-${angle}-${bump}`}
                                className="ds-page"
                                initial={enter(dir)}
                                animate={center}
                                exit={exit(dir)}
                                style={{ transformOrigin: origin }}
                            >
                                <Styled.Card>
                                    <header className="cardHead">
                                        <span className="kicker">Active</span>
                                        <h2>{page.title}</h2>
                                    </header>

                                    <p className="body">{page.body}</p>

                                    <ul className="bullets">
                                        {page.bullets?.map((b, i) => <li key={i}>{b}</li>)}
                                    </ul>
                                </Styled.Card>
                            </motion.article>
                        </AnimatePresence>
                    </Styled.Scene>
                </Styled.Stage>

                <Styled.Notes>
                    <h3>Tech notes</h3>
                    <ul>
                        <li>Use <b>transform-origin</b> to set the hinge (<code>left center</code> / <code>right center</code>).</li>
                        <li>Scene sets <code>perspective</code>; child rotates on <code>Y</code> with <code>backface-visibility: hidden</code>.</li>
                        <li><code>mode="wait"</code> ensures exit completes before enter to avoid flicker.</li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
