import { useEffect, useMemo, useRef, useState } from "react";
import {
    MotionConfig,
    motion,
    useMotionValue,
    useMotionValueEvent,
    useTransform,
    animate,
} from "framer-motion";
import { Styled } from "./styled";

/** Fake list data */
const mkItem = (i) => ({
    id: `${Date.now()}-${i}`,
    title: `Item ${i}`,
    body:
        "Pull down to refresh. This list simulates network fetch with a short delay.",
});

/** Constants */
const MAX_PULL = 140;      // absolute drag limit
const THRESHOLD = 90;      // pull distance to trigger refresh
const HOLD = 64;           // y position to hold while refreshing
const R = 12;              // progress ring radius
const CIRC = 2 * Math.PI * R;

export default function PullToRefresh() {
    // list + last updated
    const [items, setItems] = useState(() => Array.from({ length: 12 }, (_, i) => mkItem(i + 1)));
    const [lastUpdated, setLastUpdated] = useState(() => new Date());
    const niceTime = useMemo(
        () =>
            new Intl.DateTimeFormat("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            }).format(lastUpdated),
        [lastUpdated]
    );

    // gesture state
    const [status, setStatus] = useState("idle"); // idle | pulling | refreshing | done
    const [armed, setArmed] = useState(false);
    const y = useMotionValue(0);

    // progress 0..1 based on pull distance
    const progress = useTransform(y, [0, THRESHOLD], [0, 1], { clamp: true });
    const dash = useTransform(progress, (p) => CIRC * (1 - p));

    // keep "armed" flag in sync for label swap
    useMotionValueEvent(y, "change", (v) => setArmed(v >= THRESHOLD));

    // disable drag while refreshing
    const canDrag = status !== "refreshing";

    /** Reset to zero with spring */
    const springTo = (target) =>
        animate(y, target, { type: "spring", stiffness: 420, damping: 36, mass: 0.9 });

    /** Start a fake refresh */
    const doRefresh = async () => {
        setStatus("refreshing");
        // hold at a pleasant pin height while “fetching”
        await springTo(HOLD);

        // simulate network
        await new Promise((r) => setTimeout(r, 900));

        // prepend a few new items
        setItems((prev) => [
            { id: `${Date.now()}-N1`, title: "✨ New item", body: "Freshly fetched content." },
            ...prev,
        ]);
        setLastUpdated(new Date());

        // release
        await springTo(0);
        setStatus("done");
        setTimeout(() => setStatus("idle"), 900);
    };

    /** Drag handlers */
    const onDragStart = () => {
        if (!canDrag) return;
        setStatus("pulling");
    };
    const onDragEnd = async () => {
        if (!canDrag) return;
        const pulled = y.get();
        if (pulled >= THRESHOLD) {
            await doRefresh();
        } else {
            await springTo(0);
            setStatus("idle");
        }
    };

    // Safety: ensure y is 0 on mount (refresh-proof)
    useEffect(() => {
        let r1 = requestAnimationFrame(() => {
            let r2 = requestAnimationFrame(() => y.set(0));
            (y)._r2 = r2;
        });
        return () => {
            cancelAnimationFrame(r1);
            cancelAnimationFrame((y)._r2 || 0);
        };
    }, [y]);

    return (
        // Demo forces motion so the effect is visible even if OS reduced-motion is on
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Pull-to-Refresh</h1>
                        <p className="muted">
                            Pull down from the top. The ring fills with distance; cross the threshold to
                            trigger a refresh.
                        </p>
                    </div>
                    <div className="meta">
                        <span className="dot" />
                        <span>Last updated: {niceTime}</span>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    {/* Indicator (moves with the sheet via the same `y`) */}
                    <motion.div className="ptr-indicator" style={{ y }} aria-hidden>
                        <div className={`ring ${status}`}>
                            <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden>
                                <circle cx="16" cy="16" r={R} className="track" />
                                <motion.circle
                                    cx="16" cy="16" r={R}
                                    className="prog"
                                    style={{ strokeDasharray: CIRC, strokeDashoffset: dash }}
                                />
                            </svg>
                            <span className="label">
                                {status === "refreshing"
                                    ? "Refreshing…"
                                    : armed
                                        ? "Release to refresh"
                                        : "Pull to refresh"}
                            </span>
                        </div>

                        {status === "done" && <div className="done">✓ Updated</div>}
                    </motion.div>

                    {/* Sheet = draggable content surface */}
                    <motion.div
                        className="ptr-sheet"
                        drag="y"
                        dragConstraints={{ top: 0, bottom: MAX_PULL }}
                        dragElastic={0.28}
                        dragMomentum={false}
                        style={{ y }}
                        onDragStart={onDragStart}
                        onDragEnd={onDragEnd}
                        dragListener={canDrag}
                    >
                        <ul className="list">
                            {items.map((it) => (
                                <li key={it.id} className="row">
                                    <div className="pill">Item</div>
                                    <div className="text">
                                        <h3>{it.title}</h3>
                                        <p>{it.body}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </Styled.Stage>

                <Styled.Notes>
                    <ul>
                        <li>
                            <code>y</code> MotionValue drives both the sheet and the indicator; threshold at{" "}
                            <b>{THRESHOLD}px</b>.
                        </li>
                        <li>Transforms only (no layout thrash); short springs keep it crisp.</li>
                        <li>In production, call your fetch in <code>doRefresh()</code> and update the list.</li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
