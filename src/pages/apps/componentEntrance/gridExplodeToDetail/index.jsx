import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";
import { makePages } from "../../_shared/pages";

/** Base item templates → padded to >=5 via makePages() */
const TEMPLATES = [
    {
        key: "g1",
        title: "Analytics Overview",
        body:
            "High-level metrics snapshot. Click to see breakdowns, comparisons, and trends that matter.",
    },
    {
        key: "g2",
        title: "Orders",
        body:
            "Live order feed merged with fulfillment state. Keep the pipeline flowing with minimal clicks.",
    },
    {
        key: "g3",
        title: "Customers",
        body:
            "Segmentation + cohorts. Turn scattered events into a single, navigable customer story.",
    },
];
const ITEMS = makePages(TEMPLATES, 5);

/** Lightweight color seeds for card accents */
const HUES = [210, 260, 340, 20, 120, 190, 280, 330];

export default function GridExplodeToDetail() {
    const [active, setActive] = useState(null); // index of selected item, or null
    const closeBtnRef = useRef(null);

    // focus the close button when detail opens
    useEffect(() => {
        if (active != null) {
            const id = requestAnimationFrame(() => closeBtnRef.current?.focus());
            return () => cancelAnimationFrame(id);
        }
    }, [active]);

    const canPrev = active != null && active > 0;
    const canNext = active != null && active < ITEMS.length - 1;

    const open = (i) => setActive(i);
    const close = () => setActive(null);
    const prev = () => canPrev && setActive((i) => i - 1);
    const next = () => canNext && setActive((i) => i + 1);

    // keyboard controls while detail is open
    useEffect(() => {
        if (active == null) return;
        function onKey(e) {
            if (e.key === "Escape") return close();
            if (e.key === "ArrowLeft") return prev();
            if (e.key === "ArrowRight") return next();
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active]);

    const cardEnter = useMemo(
        () => ({ opacity: 0, y: 14, scale: 0.98 }),
        []
    );
    const cardCenter = useMemo(
        () => ({ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 26 } }),
        []
    );

    return (
        // Force animations for demo visibility (override OS reduced motion)
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Grid → Detail (Explode)</h1>
                        <p className="muted">
                            Select a card to morph it into a focused detail view via shared <code>layoutId</code>.
                        </p>
                    </div>
                </Styled.Header>

                <Styled.Grid>
                    {ITEMS.map((item, i) => {
                        const hue = HUES[i % HUES.length];
                        const id = item.id || `item-${i + 1}`;
                        return (
                            <motion.button
                                key={id}
                                className="card"
                                layoutId={`card-${id}`}
                                initial={cardEnter}
                                animate={cardCenter}
                                onClick={() => open(i)}
                                style={{
                                    "--accent": `hsl(${hue} 90% 56%)`,
                                    "--accentSoft": `hsl(${hue} 90% 56% / 0.12)`,
                                }}
                            >
                                <motion.div className="thumb" layoutId={`thumb-${id}`} />
                                <motion.h3 className="title" layoutId={`title-${id}`}>{item.title}</motion.h3>
                                <p className="excerpt">{item.body}</p>
                            </motion.button>
                        );
                    })}
                </Styled.Grid>

                {/* Detail Overlay */}
                <AnimatePresence>
                    {active != null && (
                        <>
                            <Styled.Backdrop
                                as={motion.div}
                                key="backdrop"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={close}
                                aria-hidden="true"
                            />
                            <Styled.DetailHolder
                                as={motion.div}
                                key="holder"
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0.6 }}
                                aria-modal="true"
                                role="dialog"
                                aria-label="Detail"
                            >
                                {(() => {
                                    const item = ITEMS[active];
                                    const id = item.id || `item-${active + 1}`;
                                    const hue = HUES[active % HUES.length];
                                    return (
                                        <Styled.Detail
                                            as={motion.article}
                                            layoutId={`card-${id}`}
                                            style={{
                                                "--accent": `hsl(${hue} 90% 56%)`,
                                                "--accentSoft": `hsl(${hue} 90% 56% / 0.12)`,
                                            }}
                                        >
                                            <motion.div className="thumb lg" layoutId={`thumb-${id}`} />
                                            <motion.h2 className="title" layoutId={`title-${id}`}>{item.title}</motion.h2>

                                            <p className="body">
                                                {item.body} This view expands the selected card, preserves its layout identity,
                                                and adds supporting details without a hard context switch.
                                            </p>

                                            <ul className="bullets">
                                                <li>Shared <code>layoutId</code> between grid card and detail container.</li>
                                                <li>Backdrop + keyboard support (Esc/←/→).</li>
                                                <li>Transforms/opacity only; token-themed visuals.</li>
                                            </ul>

                                            <Styled.DetailFooter>
                                                <div className="nav">
                                                    <button onClick={prev} disabled={!canPrev} aria-label="Previous item">← Prev</button>
                                                    <span className="count">{active + 1} / {ITEMS.length}</span>
                                                    <button onClick={next} disabled={!canNext} aria-label="Next item">Next →</button>
                                                </div>
                                                <button className="close" onClick={close} ref={closeBtnRef} aria-label="Close detail">
                                                    Close
                                                </button>
                                            </Styled.DetailFooter>
                                        </Styled.Detail>
                                    );
                                })()}
                            </Styled.DetailHolder>
                        </>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
