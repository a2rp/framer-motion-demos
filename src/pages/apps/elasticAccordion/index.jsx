import { useCallback, useMemo, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";
import { makePages } from "../_shared/pages";

/** Base templates → padded to >=5 via makePages() */
const TEMPLATES = [
    {
        key: "acc-1",
        title: "What is Elastic Accordion?",
        body:
            "A single-open accordion with springy height and a rotating caret. " +
            "Animations are transform/opacity-only for smoothness; height is simulated via grid.",
        bullets: ["Single item open at a time", "Springy caret rotation", "Grid-rows trick for height"],
    },
    {
        key: "acc-2",
        title: "When to use",
        body:
            "Use for compact FAQs, preference groups, or anything where you want tasteful disclosure.",
        bullets: ["Short, scannable titles", "Keep copy tight", "Prefer subtle motion"],
    },
    {
        key: "acc-3",
        title: "Implementation details",
        body:
            "We animate grid-template-rows (0fr → 1fr) for the panel and rotate the caret 0→90°. " +
            "This avoids layout thrash and keeps edges crisp.",
        bullets: ["No JS measurements", "No clip-path blur", "Tokenized theme"],
    },
];
const PANELS = makePages(TEMPLATES, 5);

export default function ElasticAccordion() {
    // index of the currently open panel; -1 means none open
    const [open, setOpen] = useState(0);

    const canPrev = open > 0;
    const canNext = open < PANELS.length - 1;

    const toggle = useCallback(
        (i) => setOpen((cur) => (cur === i ? -1 : i)),
        []
    );

    const goPrev = () => { if (canPrev) setOpen((i) => i - 1); };
    const goNext = () => { if (canNext) setOpen((i) => i + 1); };

    // Transitions tuned for an elastic feel
    const caretTransition = useMemo(
        () => ({ type: "spring", stiffness: 520, damping: 32, mass: 0.75 }),
        []
    );
    const panelTransition = useMemo(
        () => ({ type: "spring", stiffness: 220, damping: 28, mass: 0.9 }),
        []
    );

    return (
        // For demo visibility we force motion on; remove reducedMotion="never" to respect OS.
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Elastic Accordion</h1>
                        <p className="muted">
                            Single-open accordion with springy height and a rotating caret.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Accordion controls">
                        <button className="btn" onClick={goPrev} disabled={!canPrev} title="Previous item">
                            ← Prev
                        </button>
                        <span className="count">
                            {open < 0 ? "0" : open + 1} / {PANELS.length}
                        </span>
                        <button className="btn primary" onClick={goNext} disabled={!canNext} title="Next item">
                            Next →
                        </button>
                    </div>
                </Styled.Header>

                <Styled.List role="list">
                    {PANELS.map((p, i) => {
                        const isOpen = open === i;
                        const regionId = `acc-panel-${p.id}`;
                        const btnId = `acc-btn-${p.id}`;

                        return (
                            <Styled.Item key={p.id} role="listitem">
                                <Styled.Trigger
                                    id={btnId}
                                    type="button"
                                    aria-expanded={isOpen}
                                    aria-controls={regionId}
                                    onClick={() => toggle(i)}
                                >
                                    <Styled.Title>{p.title}</Styled.Title>

                                    <Styled.Icon
                                        as={motion.span}
                                        animate={{ rotate: isOpen ? 90 : 0 }}
                                        transition={caretTransition}
                                        aria-hidden="true"
                                    >
                                        {/* simple chevron */}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M8 5l8 7-8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Styled.Icon>
                                </Styled.Trigger>

                                {/* Height animation via grid-rows: 0fr → 1fr */}
                                <Styled.Panel
                                    as={motion.div}
                                    initial={false}
                                    animate={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0.5 }}
                                    transition={panelTransition}
                                    id={regionId}
                                    role="region"
                                    aria-labelledby={btnId}
                                >
                                    <div className="panelInner">
                                        <p className="body">{p.body}</p>
                                        {!!p.bullets?.length && (
                                            <ul className="bullets">
                                                {p.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                                            </ul>
                                        )}
                                    </div>
                                </Styled.Panel>
                            </Styled.Item>
                        );
                    })}
                </Styled.List>

                <Styled.Notes>
                    <h3>Tech notes</h3>
                    <ul>
                        <li>Panel height is animated by <code>grid-template-rows</code> (no measurements).</li>
                        <li>Caret rotates with a stiff spring for an elastic snap.</li>
                        <li>Tokens keep it themeable across light/dark.</li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
