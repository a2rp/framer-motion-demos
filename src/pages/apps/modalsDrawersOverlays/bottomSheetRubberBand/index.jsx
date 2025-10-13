import { useEffect, useRef, useState } from "react";
import {
    AnimatePresence,
    MotionConfig,
    motion,
    useMotionValue,
    useTransform,
    animate,
} from "framer-motion";
import { Styled } from "./styled";

/** Config */
const AUTO_OPEN_ON_MOUNT = true;
const CLOSE_DRAG_THRESHOLD = 140;       // px pull
const CLOSE_VELOCITY_THRESHOLD = 700;   // px/s fling

export default function BottomSheetRubberBand() {
    const [mounted, setMounted] = useState(false);  // double-RAF mount (refresh-safe)
    const [open, setOpen] = useState(false);

    // focus restore
    const triggerRef = useRef(null);
    const closeBtnRef = useRef(null);

    // body scroll lock while open
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = prev; };
    }, [open]);

    // mount two frames later → animations always fire on refresh
    useEffect(() => {
        let r1 = requestAnimationFrame(() => {
            let r2 = requestAnimationFrame(() => {
                setMounted(true);
                if (AUTO_OPEN_ON_MOUNT) setOpen(true);
            });
            (setMounted)._r2 = r2;
        });
        return () => {
            cancelAnimationFrame(r1);
            cancelAnimationFrame((setMounted)._r2 || 0);
        };
    }, []);

    // focus in/out
    useEffect(() => {
        const id = requestAnimationFrame(() => {
            (open ? closeBtnRef.current : triggerRef.current)?.focus?.();
        });
        return () => cancelAnimationFrame(id);
    }, [open]);

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Bottom Sheet — Rubber-Band</h1>
                        <p className="muted">
                            Drag down to dismiss. Overscroll stretches elastically, then snaps.
                        </p>
                    </div>
                    <button
                        className="openBtn"
                        ref={triggerRef}
                        onClick={() => setOpen(true)}
                        title="Open bottom sheet"
                    >
                        Open Sheet
                    </button>
                </Styled.Header>

                <Styled.Stage>
                    <p className="body">
                        Premium, theme-aware sheet with rubber-band dragging, ESC/backdrop to close,
                        focus management, and body scroll lock.
                    </p>
                </Styled.Stage>

                {/* Modal: backdrop + sheet live together so we can animate the close properly */}
                <AnimatePresence>
                    {mounted && open && (
                        <Sheet onRequestClose={() => setOpen(false)} closeBtnRef={closeBtnRef} />
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}

/* ------------------ Sheet bundle (backdrop + sheet) ------------------ */
function Sheet({ onRequestClose, closeBtnRef }) {
    const y = useMotionValue(0);

    // derived visuals
    const radius = useTransform(y, [0, 120], ["var(--radius-lg)", "28px"]);
    const shadow = useTransform(y, [0, 140], ["var(--shadow-md)", "0 4px 18px hsl(0 0% 0% / 0.20)"]);
    const backdropBlur = useTransform(y, [0, 200], ["blur(8px)", "blur(2px)"]);
    const handleScale = useTransform(y, [0, 120], [1, 0.92]);

    // entrance: slide up from 60% viewport
    useEffect(() => {
        const start = Math.max(window.innerHeight * 0.6, 480);
        y.set(start);
        const controls = animate(y, 0, { type: "spring", stiffness: 360, damping: 34, mass: 0.9 });
        return controls.stop;
    }, []);

    const closeWithSlide = () => {
        const end = Math.max(window.innerHeight * 0.6, 480);
        animate(y, end, {
            type: "spring",
            stiffness: 260,
            damping: 30,
            onComplete: onRequestClose,
        });
    };

    // ESC to close (inside the sheet so we run slide-out, not instant unmount)
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") {
                e.preventDefault();
                closeWithSlide();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const onDragEnd = (_e, info) => {
        const shouldClose =
            info.offset.y > CLOSE_DRAG_THRESHOLD || info.velocity.y > CLOSE_VELOCITY_THRESHOLD;
        if (shouldClose) closeWithSlide();
        else animate(y, 0, { type: "spring", stiffness: 420, damping: 36 });
    };

    return (
        <>
            {/* Backdrop (fade) */}
            <Styled.Backdrop
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.22 } }}
                exit={{ opacity: 0, transition: { duration: 0.18 } }}
                onClick={closeWithSlide}
                aria-hidden="true"
            />

            {/* Optional blur layer synced to y */}
            <Styled.BackdropFilter
                as={motion.div}
                style={{ backdropFilter: backdropBlur }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                aria-hidden="true"
            />

            {/* Sheet */}
            <Styled.Sheet
                as={motion.section}
                role="dialog"
                aria-modal="true"
                aria-labelledby="rb-title"
                style={{ y, borderTopLeftRadius: radius, borderTopRightRadius: radius, boxShadow: shadow }}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={{ top: 0.08, bottom: 0.9 }}
                onDragEnd={onDragEnd}
            >
                <Styled.HeaderBar>
                    <motion.div className="rb-handle" style={{ scaleX: handleScale }} aria-hidden="true" />
                    <div className="rb-titleWrap">
                        <h2 id="rb-title">Choose Destination</h2>
                        <p className="muted">Drag down or tap backdrop to close</p>
                    </div>
                    <button
                        ref={closeBtnRef}
                        className="rb-close"
                        onClick={closeWithSlide}
                        aria-label="Close"
                        title="Close"
                    >
                        ✕
                    </button>
                </Styled.HeaderBar>

                <Styled.Content tabIndex={0}>
                    <Styled.List>
                        {[
                            "Bengaluru (BLR)", "Hyderabad (HYD)", "Pune (PNQ)", "Delhi (DEL)", "Mumbai (BOM)",
                            "Chennai (MAA)", "Kolkata (CCU)", "Ahmedabad (AMD)", "Jaipur (JAI)", "Kochi (COK)",
                            "Goa (GOX)", "Lucknow (LKO)", "Indore (IDR)", "Chandigarh (IXC)", "Nagpur (NAG)",
                        ].map((city, i) => (
                            <li key={i} className="rb-item">
                                <div className="title">{city}</div>
                                <div className="meta">Tap to select</div>
                            </li>
                        ))}
                    </Styled.List>
                </Styled.Content>

                <Styled.Footer>
                    <button className="rb-action primary" onClick={closeWithSlide}>Done</button>
                    <button className="rb-action ghost" onClick={closeWithSlide}>Cancel</button>
                </Styled.Footer>

                <Styled.SafePad aria-hidden />
            </Styled.Sheet>
        </>
    );
}
