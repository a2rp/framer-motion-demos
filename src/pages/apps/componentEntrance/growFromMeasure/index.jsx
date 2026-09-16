import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";
import { makePages } from "../../_shared/pages";

/* Base templates → padded to >= 5 via makePages() */
const TEMPLATES = [
    {
        key: "gm1",
        title: "Grow from measure",
        body:
            "Animate height from its measured content size instead of hardcoded values. " +
            "Great for accordions, expanding cards, and disclosure patterns.",
        bullets: ["No magic numbers", "Handles dynamic content", "Pairs well with layout transitions"],
    },
    {
        key: "gm2",
        title: "When to use",
        body:
            "Anytime content can change size-user-generated text, filters, validation blocks-" +
            "and you want a smooth expand/collapse.",
        bullets: ["Forms & validation", "Filter panels", "Doc sections"],
    },
    {
        key: "gm3",
        title: "Implementation",
        body:
            "Two techniques: (1) layout animation, where Framer Motion measures for you, " +
            "(2) manual measure using ResizeObserver and animating height.",
        bullets: ["layout on containers", "ResizeObserver for manual", "Transforms/opacity only elsewhere"],
    },
];
const ITEMS = makePages(TEMPLATES, 5);

/** Observe size of an element; returns latest content height (px). */
function useMeasuredHeight(open) {
    const ref = useRef(null);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;

        const update = () => setHeight(open ? el.scrollHeight : 0);
        update();

        const RO = window.ResizeObserver || class { observe() { } disconnect() { } };
        const ro = new RO(() => update());
        ro.observe(el);

        const onResize = () => update();
        window.addEventListener("resize", onResize);
        return () => {
            ro.disconnect?.();
            window.removeEventListener("resize", onResize);
        };
    }, [open]);

    return { ref, height };
}

export default function GrowFromMeasure() {
    const [mode, setMode] = useState("layout"); // 'layout' | 'measure'
    const [openIndex, setOpenIndex] = useState(0); // one-at-a-time for clarity
    const [replayId, setReplayId] = useState(0);   // used in 'measure' mode

    const allOpen = openIndex === -2;

    const spring = useMemo(
        () => ({ type: "spring", stiffness: 260, damping: 28, mass: 0.9 }),
        []
    );

    const open = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));
    const openAll = () => setOpenIndex(-2);
    const closeAll = () => setOpenIndex(-1);

    // 🔁 Reliable replay:
    // - layout: briefly close then reopen next frame so height animates again
    // - measure: bump a key so wrapper remounts and runs 0 → height
    const replay = () => {
        if (mode === "layout") {
            const current = openIndex;
            // Close everything this frame…
            setOpenIndex(-1);
            // …and reopen on next frame (no visible flash, height re-animates)
            requestAnimationFrame(() => setOpenIndex(current === -1 ? 0 : current));
        } else {
            setReplayId((k) => k + 1);
        }
    };

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Grow-From-Measure</h1>
                        <p className="muted">
                            Smooth expand/collapse using <code>layout</code> or measured <code>height</code>.
                        </p>
                    </div>

                    <Styled.Controls role="toolbar" aria-label="Grow controls">
                        <label className="ctrl">
                            <span>Technique</span>
                            <select value={mode} onChange={(e) => setMode(e.target.value)}>
                                <option value="layout">Layout (preferred)</option>
                                <option value="measure">Measured height</option>
                            </select>
                        </label>

                        <div className="spacer" />

                        <button className="btn" onClick={openAll} title="Open all">Open all</button>
                        <button className="btn" onClick={closeAll} title="Close all">Close all</button>
                        <button className="btn ghost" onClick={replay} title="Replay">Replay</button>
                    </Styled.Controls>
                </Styled.Header>

                <Styled.Stage>
                    {ITEMS.map((item, i) => {
                        const isOpen = allOpen || openIndex === i;
                        return (
                            <Panel
                                key={item.id}
                                index={i}
                                item={item}
                                isOpen={isOpen}
                                onToggle={() => open(i)}
                                spring={spring}
                                mode={mode}
                                replayId={replayId}
                            />
                        );
                    })}
                </Styled.Stage>

                <Styled.Notes>
                    <h3>Tech notes</h3>
                    <ul>
                        <li><b>Layout</b>: container’s height animates via <code>layout</code> on open/close.</li>
                        <li><b>Measure</b>: wrapper animates numeric <code>height</code> to the measured <code>scrollHeight</code>.</li>
                        <li>Short timings, transform/opacity elsewhere = smooth and cheap.</li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}

function Panel({ item, index, isOpen, onToggle, spring, mode, replayId }) {
    const contentId = `gm-panel-${index}`;
    const { ref, height } = useMeasuredHeight(isOpen);

    return (
        <Styled.Panel layout={mode === "layout"} className={isOpen ? "open" : ""}>
            <Styled.PanelHeader
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={contentId}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onToggle()}
            >
                <div className="titles">
                    <span className="kicker">Section</span>
                    <h2>{item.title}</h2>
                </div>

                <motion.span
                    className="chev"
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden
                >
                    ▸
                </motion.span>
            </Styled.PanelHeader>

            {mode === "layout" ? (
                // 👉 Let the container (Panel) handle the height tween; body just fades
                <AnimatePresence initial>
                    {isOpen && (
                        <motion.div
                            key={`body-${index}-${open ? 1 : 0}`} /* fade replay naturally on open/close */
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ layout: spring, opacity: { duration: 0.18 } }}
                            id={contentId}
                            role="region"
                            aria-labelledby={contentId + "-label"}
                        >
                            <Styled.PanelBody>
                                <Inner item={item} />
                            </Styled.PanelBody>
                        </motion.div>
                    )}
                </AnimatePresence>
            ) : (
                // 👉 Measured mode: numeric height animation (remount on replayId)
                <Styled.MeasureWrap
                    as={motion.div}
                    key={`measure-${index}-${replayId}`}
                    style={{ height }}
                    initial={{ height: 0 }}
                    animate={{ height }}
                    transition={spring}
                    aria-hidden={!isOpen}
                >
                    <div ref={ref}>
                        <Styled.PanelBody>
                            <Inner item={item} />
                        </Styled.PanelBody>
                    </div>
                </Styled.MeasureWrap>
            )}
        </Styled.Panel>
    );
}

function Inner({ item }) {
    return (
        <>
            <p className="body">{item.body}</p>
            {item.bullets?.length ? (
                <ul className="bullets">
                    {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
            ) : null}
        </>
    );
}
