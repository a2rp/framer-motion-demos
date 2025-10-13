import { useMemo, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { makePages } from "../_shared/pages";
import { Styled } from "./styled";

const TEMPLATES = [
    {
        key: "ps1", title: "Pop & Settle",
        body: "A quick entrance that pops slightly above 1x scale, then settles—clean emphasis without chaos.",
        bullets: ["Scale: 0.92 → 1.06 → 1.00", "Micro y-nudge", "Fast, tasteful timing"]
    },
    {
        key: "ps2", title: "Design Notes",
        body: "Use for first-time entrances or confirming focus changes. Keep overshoot tiny.",
        bullets: ["Overshoot ≤ 1.06", "Duration ~0.45–0.60s", "Pairs well with crossfade"]
    },
    {
        key: "ps3", title: "Implementation",
        body: "Keyframes for scale & y create snap then settle. Exit does a quick fade + blur.",
        bullets: ["Keyframes for scale/y", "No layout thrash", "Exit blur ~2px"]
    },
];
const PAGES = makePages(TEMPLATES, 5);

export default function PopAndSettle() {
    const [index, setIndex] = useState(0);
    const [bump, setBump] = useState(0);
    const page = PAGES[index];

    const canPrev = index > 0;
    const canNext = index < PAGES.length - 1;

    const goPrev = () => canPrev && setIndex(i => i - 1);
    const goNext = () => canNext && setIndex(i => i + 1);
    const replay = () => setBump(k => k + 1);

    // Property-specific transitions (rock solid)
    const tIn = useMemo(() => ({
        scale: { duration: 0.55, times: [0, 0.6, 1], ease: [0.2, 0.8, 0.2, 1] },
        y: { duration: 0.55, times: [0, 0.6, 1], ease: [0.2, 0.8, 0.2, 1] },
        opacity: { duration: 0.20, ease: "linear" },
        filter: { duration: 0.01 }
    }), []);

    const tOut = useMemo(() => ({ duration: 0.18, ease: "linear" }), []);

    const initial = { opacity: 0, scale: 0.92, y: 16, filter: "blur(0px)" };
    const animate = {
        opacity: [0, 1, 1],
        scale: [0.92, 1.06, 1.00],
        y: [16, -6, 0],
        filter: ["blur(0px)", "blur(0px)", "blur(0px)"],
        transition: tIn,
    };
    const exit = { opacity: 0, scale: 0.98, y: -8, filter: "blur(2px)", transition: tOut };

    return (
        // Force animations for the demo (remove reducedMotion="never" to respect OS setting)
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <Styled.Heading>
                        <h1>Pop &amp; Settle</h1>
                        <p className="muted">Quick entrance with a tiny overshoot and gentle settle.</p>
                    </Styled.Heading>

                    <Styled.Controls role="toolbar" aria-label="Pop & Settle controls">
                        <button className="btn" onClick={goPrev} disabled={!canPrev} title="Previous">← Prev</button>
                        <Styled.Dots aria-hidden>
                            {PAGES.map((_, i) => <span key={i} className={`dot ${i === index ? "active" : ""}`} />)}
                        </Styled.Dots>
                        <button className="btn primary" onClick={goNext} disabled={!canNext} title="Next">Next →</button>
                        <span className="spacer" />
                        <button className="btn ghost" onClick={replay} title="Replay">Replay</button>
                    </Styled.Controls>
                </Styled.Header>

                <Styled.Stage aria-live="polite">
                    <AnimatePresence mode="wait" initial>
                        <motion.article
                            key={`${page.id}-${bump}`}
                            className="ps-page"
                            initial={initial}
                            animate={animate}
                            exit={exit}
                            style={{ transformOrigin: "50% 50%" }}
                        >
                            <CardContent page={page} />
                        </motion.article>
                    </AnimatePresence>
                </Styled.Stage>

                <Styled.Notes>
                    <h3>Tech notes</h3>
                    <ul>
                        <li>Property-specific transitions ensure keyframes run reliably.</li>
                        <li>Overshoot kept small for a premium feel.</li>
                        <li>Exit fade + tiny blur avoids hard cuts.</li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}

function CardContent({ page }) {
    return (
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
    );
}
