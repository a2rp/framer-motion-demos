import { useMemo, useRef, useState } from "react";
import { MotionConfig, motion, useAnimationControls } from "framer-motion";
import { makePages } from "../../_shared/pages";
import * as S from "./styled";

// Base templates → padded to >=5 with makePages()
const TEMPLATES = [
    {
        key: "sp1",
        title: "Split Transition",
        body:
            "Two panels meet to cover, content swaps, then they split outward to reveal. " +
            "A bold, cinematic transition-use to punctuate section changes.",
        bullets: [
            "Cover → swap → reveal (sequenced)",
            "Transform-only for crisp edges",
            "Disable inputs during the split",
        ],
    },
    {
        key: "sp2",
        title: "Design Notes",
        body:
            "Reserve for major transitions (e.g., workspace switch, section gateway). Smaller contexts should use subtler motion.",
        bullets: ["Keep durations short", "Use the brand color", "Mind contrast in both themes"],
    },
    {
        key: "sp3",
        title: "Implementation",
        body:
            "We drive the two halves with independent animation controls. " +
            "Midpoint callback swaps the page under full cover.",
        bullets: ["useAnimationControls()", "Promise.all sequencing", "Pointer-events: none on overlay"],
    },
];
const PAGES = makePages(TEMPLATES, 5);

export default function SplitTransition() {
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [dir, setDir] = useState(1); // 1 = forward, -1 = backward
    const leftCtrl = useAnimationControls();
    const rightCtrl = useAnimationControls();
    const nextIndexRef = useRef(null);

    const page = PAGES[index];
    const canPrev = index > 0;
    const canNext = index < PAGES.length - 1;

    const cover = useMemo(
        () => ({ duration: 0.22, ease: [0.22, 1, 0.36, 1] }),
        []
    );
    const reveal = useMemo(
        () => ({ duration: 0.28, ease: [0.22, 1, 0.36, 1] }),
        []
    );
    const cardTrans = useMemo(
        () => ({ type: "spring", stiffness: 260, damping: 26, mass: 0.9 }),
        []
    );

    async function runSplit(nextIdx, direction) {
        if (isAnimating) return;
        setIsAnimating(true);
        setDir(direction);
        nextIndexRef.current = nextIdx;

        // 1) Cover: panels slide to center (x: 0)
        await Promise.all([
            leftCtrl.start({ x: "0%", transition: cover }),
            rightCtrl.start({ x: "0%", transition: cover }),
        ]);

        // 2) Swap content under full cover
        setIndex(nextIndexRef.current);

        // 3) Reveal: panels slide outwards off-screen
        await Promise.all([
            leftCtrl.start({ x: "-100%", transition: reveal }),
            rightCtrl.start({ x: "100%", transition: reveal }),
        ]);

        setIsAnimating(false);
    }

    const goPrev = () => {
        if (!canPrev) return;
        runSplit(index - 1, -1);
    };
    const goNext = () => {
        if (!canNext) return;
        runSplit(index + 1, 1);
    };

    return (
        // Force animations for the demo showcase
        <MotionConfig reducedMotion="never">
            <S.Wrapper>
                <S.Header>
                    <S.Heading>
                        <h1>Split Transition</h1>
                        <p className="muted">
                            Panels meet, swap content, then split outward. Bold and fast.
                        </p>
                    </S.Heading>

                    <S.Controls role="toolbar" aria-label="Split controls">
                        <button className="btn" onClick={goPrev} disabled={!canPrev || isAnimating} title="Previous">
                            ← Prev
                        </button>
                        <div className="dots" aria-hidden>
                            {PAGES.map((_, i) => (
                                <span key={i} className={`dot ${i === index ? "active" : ""}`} />
                            ))}
                        </div>
                        <button className="btn primary" onClick={goNext} disabled={!canNext || isAnimating} title="Next">
                            Next →
                        </button>
                    </S.Controls>
                </S.Header>

                <S.Stage aria-live="polite">
                    {/* Foreground content (fades/settles slightly each swap) */}
                    <motion.article
                        key={page.id}
                        className="page"
                        initial={{ opacity: 0, y: 8, scale: 0.995 }}
                        animate={{ opacity: 1, y: 0, scale: 1, transition: cardTrans }}
                    >
                        <CardContent page={page} />
                    </motion.article>

                    {/* Split overlay (two halves) */}
                    <S.Overlay aria-hidden="true">
                        <motion.div
                            className="half left"
                            initial={{ x: "-100%" }}
                            animate={leftCtrl}
                        />
                        <motion.div
                            className="half right"
                            initial={{ x: "100%" }}
                            animate={rightCtrl}
                        />
                        <div className="seam" />
                    </S.Overlay>
                </S.Stage>

                <S.Notes>
                    <h3>Tech notes</h3>
                    <ul>
                        <li>Sequence: <b>cover</b> → swap → <b>reveal</b> with two animation controls.</li>
                        <li>Overlay has <code>pointer-events: none</code>; inputs are disabled while animating.</li>
                        <li>Keep brand color in halves; seam adds a physical snap at center.</li>
                    </ul>
                </S.Notes>
            </S.Wrapper>
        </MotionConfig>
    );
}

function CardContent({ page }) {
    return (
        <div className="card">
            <header className="head">
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
