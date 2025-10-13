import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { MotionConfig, motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Styled } from "./styled";

const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

export default function DragToDismiss() {
    const CARDS = useMemo(
        () =>
            Array.from({ length: 8 }).map((_, i) => ({
                id: `card-${i + 1}`,
                title: `Card ${i + 1}`,
                blurb:
                    i % 2 === 0
                        ? "Project config, session notes and shortcuts."
                        : "Quick toggles for this view and layout density.",
            })),
        []
    );

    const [open, setOpen] = useState(false);
    const [elastic, setElastic] = useState(0.15);
    const [ratio, setRatio] = useState(0.33);
    const [selected, setSelected] = useState(null);

    const sheetRef = useRef(null);
    const [sheetH, setSheetH] = useState(480);

    useLayoutEffect(() => {
        const read = () => setSheetH(sheetRef.current?.offsetHeight || 480);
        read();
        const ro = new ResizeObserver(read);
        if (sheetRef.current) ro.observe(sheetRef.current);
        window.addEventListener("resize", read, { passive: true });
        return () => {
            ro.disconnect();
            window.removeEventListener("resize", read);
        };
    }, []);

    const y = useMotionValue(0);
    const backdropOpacity = useTransform(y, [0, sheetH], [0.5, 0.15]);

    useEffect(() => {
        if (!open) return;
        y.set(sheetH + 60);
        animate(y, 0, { type: "spring", stiffness: 340, damping: 28, mass: 0.9 });
        const id = requestAnimationFrame(() => sheetRef.current?.focus());
        return () => cancelAnimationFrame(id);
    }, [open, sheetH, y]);

    const close = () => {
        const endY = sheetH + 60;
        animate(y, endY, { type: "spring", stiffness: 320, damping: 28 }).then(() => {
            setOpen(false);
            y.set(0);
        });
    };

    const openSheet = (card) => {
        if (card) setSelected(card);
        setOpen(true);
    };

    const onDragEnd = (_evt, info) => {
        const dragged = info.offset.y;
        const velocity = info.velocity.y;
        const passDistance = dragged > sheetH * ratio;
        const passVelocity = swipePower(dragged, velocity) > 800;
        if (passDistance || passVelocity) close();
        else animate(y, 0, { type: "spring", stiffness: 500, damping: 40 });
    };

    const onCardKey = (card) => (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openSheet(card);
        }
    };

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Drag-to-Dismiss</h1>
                        <p className="muted">Click any card to open the sheet; drag down or tap backdrop to close.</p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Drag-to-dismiss controls">
                        <button className="btn" onClick={() => openSheet(selected)} title="Open sheet">Open</button>

                        <label className="ctrl">
                            <span>Elastic</span>
                            <input
                                type="range" min="0" max="0.35" step="0.05"
                                value={elastic} onChange={(e) => setElastic(parseFloat(e.target.value))}
                            />
                            <em>{elastic.toFixed(2)}</em>
                        </label>

                        <label className="ctrl">
                            <span>Threshold</span>
                            <input
                                type="range" min="0.2" max="0.6" step="0.05"
                                value={ratio} onChange={(e) => setRatio(parseFloat(e.target.value))}
                            />
                            <em>{Math.round(ratio * 100)}%</em>
                        </label>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <div className="grid">
                        {CARDS.map((card) => (
                            <article
                                key={card.id}
                                className="card"
                                role="button"
                                tabIndex={0}
                                aria-haspopup="dialog"
                                aria-label={`Open sheet from ${card.title}`}
                                onClick={() => openSheet(card)}
                                onKeyDown={onCardKey(card)}
                            >
                                <h3>{card.title}</h3>
                                <p>{card.blurb}</p>
                            </article>
                        ))}
                    </div>

                    {open && (
                        <motion.button
                            type="button"
                            aria-label="Close"
                            className="backdrop"
                            onClick={close}
                            style={{ opacity: backdropOpacity }}
                        />
                    )}

                    {open && (
                        <motion.section
                            role="dialog"
                            aria-modal="true"
                            aria-label="Demo bottom sheet"
                            tabIndex={-1}
                            ref={sheetRef}
                            className="sheet"
                            style={{ y }}
                            drag="y"
                            dragConstraints={{ top: 0, bottom: 0 }}
                            dragElastic={elastic}
                            onDragEnd={onDragEnd}
                        >
                            <div className="handle" aria-hidden><span className="bar" /></div>

                            {/* single-row, two-column content */}
                            <div className="sheetBody">
                                <div className="sheetLayout">
                                    {/* Left: selected card content */}
                                    <section className="col left">
                                        <h3 className="sectionTitle">Selected</h3>
                                        <div className="cardPreview">
                                            <div className="previewHead">
                                                <span className="pill">{selected ? "Opened from" : "Quick open"}</span>
                                                {selected?.id && <code className="id">{selected.id}</code>}
                                            </div>
                                            <h4>{selected?.title ?? "No card chosen"}</h4>
                                            <p className="muted">
                                                {selected?.blurb ?? "Click any background card to attach context to this session."}
                                            </p>
                                        </div>
                                    </section>

                                    {/* Right: settings */}
                                    <section className="col right">
                                        <h3 className="sectionTitle">Session Settings</h3>
                                        <ul className="options">
                                            <li><label><input type="checkbox" defaultChecked /> Notes sync</label></li>
                                            <li><label><input type="checkbox" defaultChecked /> Ask before discarding</label></li>
                                            <li><label><input type="checkbox" /> Compact layout</label></li>
                                            <li><label><input type="checkbox" /> Haptics</label></li>
                                            <li><label><input type="checkbox" /> Night mode at sunset</label></li>
                                            <li><label><input type="checkbox" /> Developer toasts</label></li>
                                        </ul>
                                    </section>
                                </div>
                            </div>

                            <footer className="sheetFoot">
                                <button className="btn ghost" onClick={close}>Close</button>
                                <button className="btn primary" onClick={close}>Save</button>
                            </footer>
                        </motion.section>
                    )}
                </Styled.Stage>

                <Styled.Notes>
                    <h3>Tech notes</h3>
                    <ul>
                        <li>Two-column grid inside a scrollable body; stacks to one column on small screens.</li>
                        <li>Footer pinned; sheet height clamped to viewport for no clipping.</li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
