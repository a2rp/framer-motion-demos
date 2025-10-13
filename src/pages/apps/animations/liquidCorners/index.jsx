import { useMemo, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { makePages } from "../../_shared/pages";
import * as S from "./styled";

/** Base templates → padded to >= 5 via makePages() */
const TEMPLATES = [
    {
        key: "lc1",
        title: "Liquid Corners",
        body:
            "Corners morph between asymmetric radii while the card subtly breathes. " +
            "Great for featured tiles, hero cards, and delight-in-small doses.",
        bullets: [
            "Border-radius per-corner animation",
            "Subtle scale for a ‘liquid’ feel",
            "Token themed; transform-only for perf",
        ],
    },
    {
        key: "lc2",
        title: "Design Notes",
        body:
            "Use small deltas. Large radius jumps feel cartoonish. Aim for ‘soft glass’ rather than blob.",
        bullets: ["Asymmetry looks organic", "Scale ≤ 1.02", "Short easing curves"],
    },
    {
        key: "lc3",
        title: "Implementation",
        body:
            "Animate individual corner radii (TL/TR/BR/BL). A tiny y-translate + drop shadow sells depth.",
        bullets: ["border-*Radius props", "Spring to center", "Pointer-friendly"],
    },
];
const PAGES = makePages(TEMPLATES, 5);

/** Generate an asymmetric corner set for a given index and amplitude (px) */
function shapeFor(index, amp) {
    // deterministic, playful radii based on index
    const a = amp;
    const bump = (n) => ((index * 7 + n * 11) % 10) / 10; // 0..0.9
    // Base radius + a bit of variation per-corner
    const base = 14;
    return {
        tl: base + Math.round(a * (0.35 + bump(1))), // top-left
        tr: base + Math.round(a * (0.15 + bump(2))), // top-right
        br: base + Math.round(a * (0.45 + bump(3))), // bottom-right
        bl: base + Math.round(a * (0.25 + bump(4))), // bottom-left
    };
}

export default function LiquidCorners() {
    const [index, setIndex] = useState(0);
    const [amp, setAmp] = useState(22);        // corner amplitude (px)
    const [breathe, setBreathe] = useState(true);
    const [dir, setDir] = useState(1);

    const page = PAGES[index];
    const canPrev = index > 0;
    const canNext = index < PAGES.length - 1;

    const goPrev = () => { if (!canPrev) return; setDir(-1); setIndex((i) => i - 1); };
    const goNext = () => { if (!canNext) return; setDir(1); setIndex((i) => i + 1); };

    // Corner radii for current slide
    const R = useMemo(() => shapeFor(index, amp), [index, amp]);

    // Motion tuning
    const enter = (d) => ({ x: d > 0 ? 36 : -36, opacity: 0.85, scale: 0.995 });
    const center = {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 260, damping: 24, mass: 0.9 },
    };

    // Corner morph (individual props animate)
    const cornerAnim = {
        borderTopLeftRadius: R.tl,
        borderTopRightRadius: R.tr,
        borderBottomRightRadius: R.br,
        borderBottomLeftRadius: R.bl,
        transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
    };

    // Breathing keyframes (optional)
    const breatheAnim = breathe
        ? { scale: [1, 1.012, 1], y: [0, -2, 0], transition: { duration: 2.0, repeat: Infinity, ease: "easeInOut" } }
        : { scale: 1, y: 0 };

    return (
        // Force animations for the demo (override OS reduced-motion)
        <MotionConfig reducedMotion="never">
            <S.Wrapper>
                <S.Header>
                    <div className="heading">
                        <h1>Liquid Corners</h1>
                        <p className="muted">Border-radius morph + subtle breathing for a soft, liquid feel.</p>
                    </div>

                    <S.Controls role="toolbar" aria-label="LiquidCorners controls">
                        <button className="btn" onClick={goPrev} disabled={!canPrev} title="Previous">← Prev</button>

                        <div className="dots" aria-hidden>
                            {PAGES.map((_, i) => <span key={i} className={`dot ${i === index ? "active" : ""}`} />)}
                        </div>

                        <button className="btn primary" onClick={goNext} disabled={!canNext} title="Next">Next →</button>

                        <div className="spacer" />

                        <label className="ctrl">
                            <span>Amplitude</span>
                            <input
                                type="range"
                                min="8"
                                max="36"
                                step="1"
                                value={amp}
                                onChange={(e) => setAmp(parseInt(e.target.value, 10))}
                            />
                            <em>{amp}px</em>
                        </label>

                        <label className="ctrl toggle">
                            <input
                                type="checkbox"
                                checked={breathe}
                                onChange={(e) => setBreathe(e.target.checked)}
                            />
                            <span>Breathing</span>
                        </label>
                    </S.Controls>
                </S.Header>

                <S.Stage aria-live="polite">
                    {/* Decorative background (subtle lights) */}
                    <div className="bg">
                        <div className="glow g1" />
                        <div className="glow g2" />
                    </div>

                    {/* Active morphing card */}
                    <AnimatePresence initial={false}>
                        <motion.article
                            key={`${page.id}-${amp}-${breathe}`}
                            className="card"
                            initial={enter(dir)}
                            animate={center}
                            style={{}}
                        >
                            <motion.div className="shape" animate={cornerAnim} style={breatheAnim}>
                                <CardContent page={page} />
                            </motion.div>
                        </motion.article>
                    </AnimatePresence>
                </S.Stage>

                <S.Notes>
                    <h3>Tech notes</h3>
                    <ul>
                        <li>Animate <code>borderTopLeft/Right/Bottom*</code> radius individually for organic shapes.</li>
                        <li>Keep scale ≤ 1.02 and timing short for a premium feel.</li>
                        <li>Prefer transforms + opacity; radius changes are cheap if the element isn’t huge.</li>
                    </ul>
                </S.Notes>
            </S.Wrapper>
        </MotionConfig>
    );
}

function CardContent({ page }) {
    return (
        <div className="content">
            <header className="cardHead">
                <span className="kicker">Active</span>
                <h2>{page.title}</h2>
            </header>
            <p className="body">{page.body}</p>
            <ul className="bullets">
                {page.bullets?.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
        </div>
    );
}
