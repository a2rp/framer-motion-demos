import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, MotionConfig, LayoutGroup, motion } from "framer-motion";
import { Styled } from "./styled";

/* ---------- Sample paths (pickable via modal) ---------- */
const PRESETS = [
    ["Home", "Products", "Laptops", "Apple", "MacBook Air (M2)"],
    ["Home", "Products", "Phones", "Android", "Pixel 9 Pro"],
    ["Home", "Library", "UI", "Components", "Breadcrumbs", "Crumb Entrance"],
    ["Home", "Account", "Billing", "Invoices", "#INV-42318"],
    ["Home", "Docs", "Framer Motion", "Transitions", "Stagger Children"],
];

/* Collapse long paths: [A … D E F] when > 5 */
function collapsePath(segments) {
    if (segments.length <= 5) return segments.map((t) => ({ t, ellipsis: false }));
    const head = { t: segments[0], ellipsis: false };
    const tail = segments.slice(-3).map((t) => ({ t, ellipsis: false }));
    return [head, { t: "…", ellipsis: true }, ...tail];
}

/* Self-made modal (JSX stays here, not in styled.js) */
function QuickPickModal({ onClose, onSelect }) {
    return (
        <>
            <Styled.Backdrop
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.18 } }}
                exit={{ opacity: 0, transition: { duration: 0.16 } }}
                onClick={onClose}
            />
            <Styled.Card
                initial={{ opacity: 0, scale: 0.98, y: 6 }}
                animate={{ opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 480, damping: 36 } }}
                exit={{ opacity: 0, scale: 0.98, y: 6, transition: { duration: 0.14 } }}
            >
                <div className="panel" role="dialog" aria-modal="true" aria-label="Choose a path">
                    <header>
                        <h3>Choose a quick path</h3>
                        <button className="close" onClick={onClose} title="Close">✕</button>
                    </header>
                    <div className="content">
                        {PRESETS.map((arr, i) => (
                            <div className="preset" key={i}>
                                <div>
                                    <div className="label">{arr[arr.length - 1]}</div>
                                    <div className="path">{arr.join(" › ")}</div>
                                </div>
                                <button className="pick" onClick={() => onSelect(arr)}>Use</button>
                            </div>
                        ))}
                    </div>
                </div>
            </Styled.Card>
        </>
    );
}

export default function BreadcrumbCrumbEntrance() {
    const [path, setPath] = useState(PRESETS[0]);
    const [mounted, setMounted] = useState(false); // refresh-safe
    const [modalOpen, setModalOpen] = useState(false);

    // ensure initial animation even on hard refresh (double RAF)
    useEffect(() => {
        let r1 = requestAnimationFrame(() => {
            let r2 = requestAnimationFrame(() => setMounted(true));
            (setMounted)._r2 = r2;
        });
        return () => {
            cancelAnimationFrame(r1);
            cancelAnimationFrame((setMounted)._r2 || 0);
        };
    }, []);

    const view = useMemo(() => collapsePath(path), [path]);

    // navigate by clicking crumb
    const gotoIndex = (iCollapsed) => {
        const full = [...path];
        if (view[iCollapsed]?.ellipsis) return setModalOpen(true);

        // map collapsed index back to full index
        let fullIndex = iCollapsed;
        if (path.length > 5 && iCollapsed > 0) {
            if (iCollapsed === 1) return setModalOpen(true); // ellipsis
            fullIndex = path.length - (view.length - iCollapsed);
        }
        setPath(full.slice(0, fullIndex + 1));
    };

    const addStep = () => setPath((p) => [...p, `Level ${p.length + 1}`]);
    const removeStep = () => setPath((p) => (p.length > 1 ? p.slice(0, -1) : p));

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Breadcrumb — Crumb-by-Crumb Entrance</h1>
                        <p className="muted">Each crumb slides in with a gentle stagger. Active underline glides via shared layout.</p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Breadcrumb controls">
                        <button className="btn ghost" onClick={removeStep} disabled={path.length <= 1} title="Go up one">Up one</button>
                        <button className="btn" onClick={addStep} title="Add a level">Add level</button>
                        <span className="sep" />
                        <button className="btn outline" onClick={() => setModalOpen(true)} title="Choose a quick path">Choose path</button>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <LayoutGroup id="bc">
                        {mounted && (
                            <motion.nav
                                key={path.join(" > ")}
                                className="bc"
                                aria-label="Breadcrumb"
                                initial="hidden"
                                animate="show"
                                variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.02 } } }}
                            >
                                {view.map((node, i) => {
                                    const isLast = i === view.length - 1;
                                    const label = node.t;
                                    return (
                                        <motion.span
                                            className={`crumb ${node.ellipsis ? "ellipsis" : ""} ${isLast ? "active" : ""}`}
                                            key={`${label}-${i}`}
                                            onClick={() => gotoIndex(i)}
                                            role="link"
                                            tabIndex={0}
                                            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && gotoIndex(i)}
                                            aria-current={isLast ? "page" : undefined}
                                            variants={{
                                                hidden: { y: 6, opacity: 0, scale: 0.98 },
                                                show: {
                                                    y: 0, opacity: 1, scale: 1,
                                                    transition: { type: "spring", stiffness: 520, damping: 36, mass: 0.75 },
                                                },
                                            }}
                                            whileHover={!node.ellipsis ? { y: -1 } : {}}
                                            whileTap={!node.ellipsis ? { scale: 0.98 } : {}}
                                        >
                                            <span className="label">{label}</span>
                                            {isLast && !node.ellipsis && <motion.span layoutId="bc-underline" className="underline" />}
                                            {!isLast && <motion.span className="sep" layout aria-hidden="true" />}
                                        </motion.span>
                                    );
                                })}
                            </motion.nav>
                        )}
                    </LayoutGroup>

                    <Styled.Preview>
                        <h3>Current Path</h3>
                        <p className="path">{path.join(" › ")}</p>
                    </Styled.Preview>
                </Styled.Stage>

                <AnimatePresence>
                    {modalOpen && (
                        <QuickPickModal
                            onClose={() => setModalOpen(false)}
                            onSelect={(arr) => {
                                setPath(arr);
                                setModalOpen(false);
                            }}
                        />
                    )}
                </AnimatePresence>

                <Styled.Notes>
                    <h3>Tech notes</h3>
                    <ul>
                        <li>Staggered entrance, refresh-safe mount (double <code>requestAnimationFrame</code>).</li>
                        <li>Underline uses shared <code>layoutId</code> to glide between crumbs.</li>
                        <li>Long paths collapse; “…” opens a self-made modal for quick selection.</li>
                    </ul>
                </Styled.Notes>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
