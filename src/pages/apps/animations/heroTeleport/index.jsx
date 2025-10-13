import { useMemo, useRef, useState } from "react";
import { LayoutGroup, MotionConfig, motion } from "framer-motion";
import { makePages } from "../../_shared/pages";
import { Styled } from "./styled";

/** Base templates → padded to >= 5 via makePages() */
const TEMPLATES = [
    {
        key: "ht1",
        title: "Hero Teleport",
        body:
            "A shared-element transition where a hero moves between layouts using a common layoutId. " +
            "Great for list→detail, dashboard→panel, or card→header morphs.",
        bullets: [
            "One element, two places—Framer reconciles the geometry",
            "No manual tweening—just consistent layoutId + layout containers",
            "Works across nested trees inside a LayoutGroup",
        ],
    },
    {
        key: "ht2",
        title: "Design Notes",
        body:
            "Use sparingly; it draws the eye. Keep motion short and the geometry change understandable.",
        bullets: ["Prefer simple shapes", "Avoid huge aspect jumps", "Mind focus order & a11y"],
    },
    {
        key: "ht3",
        title: "Implementation",
        body:
            "Place the hero in one of multiple containers. On state change, render it in the new parent with the same layoutId.",
        bullets: ["Wrap in <LayoutGroup>", "Mark containers with layout", "Give hero a stable layoutId"],
    },
];
const PAGES = makePages(TEMPLATES, 5);

/** Cute gradient generator for hero art */
function gradientFor(i) {
    const hues = [210, 265, 18, 140, 332, 190, 42];
    const h = hues[i % hues.length];
    return `linear-gradient(135deg, hsl(${h} 90% 56%), hsl(${(h + 24) % 360} 90% 62%))`;
}

export default function HeroTeleport() {
    // Slide index + last index (to decide left/right placement)
    const [index, setIndex] = useState(0);
    const lastRef = useRef(0);

    const page = PAGES[index];
    const canPrev = index > 0;
    const canNext = index < PAGES.length - 1;

    const goPrev = () => {
        if (!canPrev) return;
        lastRef.current = index;
        setIndex((i) => i - 1);
    };
    const goNext = () => {
        if (!canNext) return;
        lastRef.current = index;
        setIndex((i) => i + 1);
    };

    // Alternate the hero’s “home” container every step (left on even, right on odd)
    const side = index % 2 === 0 ? "left" : "right";

    // Layout transitions—snappy but premium
    const heroTransition = useMemo(
        () => ({ type: "spring", stiffness: 600, damping: 50, mass: 0.8 }),
        []
    );

    const Hero = (
        <motion.div
            layoutId="hero"
            className="heroCard"
            transition={heroTransition}
            // Allow the whole card layout to participate:
            layout
        >
            <div className="heroArt" style={{ backgroundImage: gradientFor(index) }} />
            <div className="heroText">
                <span className="kicker">Featured</span>
                <h2>{page.title}</h2>
            </div>
        </motion.div>
    );

    return (
        // Demo showcase: force animations even if OS has “Reduce Motion”
        <MotionConfig reducedMotion="never">
            {/* Shared element scope */}
            <LayoutGroup id="hero-teleport">
                <Styled.Wrapper>
                    <Styled.Header>
                        <div className="heading">
                            <h1>Hero Teleport</h1>
                            <p className="muted">
                                One hero, two places. The element morphs between containers via a shared <code>layoutId</code>.
                            </p>
                        </div>

                        <Styled.Controls role="toolbar" aria-label="HeroTeleport controls">
                            <button className="btn" onClick={goPrev} disabled={!canPrev} title="Previous">← Prev</button>
                            <div className="dots" aria-hidden>
                                {PAGES.map((_, i) => (
                                    <span key={i} className={`dot ${i === index ? "active" : ""}`} />
                                ))}
                            </div>
                            <button className="btn primary" onClick={goNext} disabled={!canNext} title="Next">Next →</button>
                        </Styled.Controls>
                    </Styled.Header>

                    {/* Two layout-aware columns; hero “teleports” between them */}
                    <Styled.Stage>
                        <Styled.Column className="left" as={motion.div} layout>
                            <Styled.SectionTitle>Source</Styled.SectionTitle>

                            {side === "left" ? Hero : <Slot />}

                            <ThumbGrid index={index} />
                        </Styled.Column>

                        <Styled.Column className="right" as={motion.div} layout>
                            <Styled.SectionTitle>Target</Styled.SectionTitle>

                            {side === "right" ? Hero : <Slot />}

                            <motion.article className="detail" layout>
                                <header className="cardHead">
                                    <span className="kicker">Active</span>
                                    <h3>{page.title}</h3>
                                </header>
                                <p className="body">{page.body}</p>
                                <ul className="bullets">
                                    {page.bullets?.map((b, i) => <li key={i}>{b}</li>)}
                                </ul>
                            </motion.article>
                        </Styled.Column>
                    </Styled.Stage>

                    <Styled.Notes>
                        <h3>Tech notes</h3>
                        <ul>
                            <li>Wrap both parents and the hero with <code>&lt;LayoutGroup&gt;</code>.</li>
                            <li>Mark changing boxes with <code>layout</code> so Framer measures before/after.</li>
                            <li>Use a single, stable <code>layoutId</code> (here: <code>"hero"</code>).</li>
                        </ul>
                    </Styled.Notes>
                </Styled.Wrapper>
            </LayoutGroup>
        </MotionConfig>
    );
}

function Slot() {
    return <div className="slot" aria-hidden />;
}

function ThumbGrid({ index }) {
    // Just decorative thumbs to make the scene richer
    return (
        <div className="thumbGrid">
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="thumb" style={{ opacity: i === index % 6 ? 0.85 : 0.6 }} />
            ))}
        </div>
    );
}
