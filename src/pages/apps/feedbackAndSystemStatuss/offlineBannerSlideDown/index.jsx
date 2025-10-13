import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";

/* -------------------------------
   Online status (real + simulated)
----------------------------------*/
function useOnline() {
    const [online, setOnline] = useState(() =>
        typeof navigator !== "undefined" ? navigator.onLine : true
    );
    useEffect(() => {
        const on = () => setOnline(true);
        const off = () => setOnline(false);
        window.addEventListener("online", on);
        window.addEventListener("offline", off);
        return () => {
            window.removeEventListener("online", on);
            window.removeEventListener("offline", off);
        };
    }, []);
    return online;
}

export default function OfflineBannerSlideDown() {
    // real network + simulation
    const isOnline = useOnline();
    const [simulate, setSimulate] = useState(false);
    const effectiveOnline = isOnline && !simulate;

    // banner state
    const [visible, setVisible] = useState(false);
    const [kind, setKind] = useState("offline"); // "offline" | "online"
    const [mounted, setMounted] = useState(false); // double-RAF to avoid refresh race
    const hideTimer = useRef(0);
    const keyRef = useRef(0);

    // Ensure the banner mounts after initial paint so initial->animate always runs (even on refresh)
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

    // React to online/offline
    useEffect(() => {
        // Clear any pending hides
        window.clearTimeout(hideTimer.current);

        if (!effectiveOnline) {
            setKind("offline");
            setVisible(true);
            keyRef.current++; // force fresh mount of banner animation
        } else {
            // if we were showing offline, announce back online briefly then auto-hide
            setKind("online");
            setVisible(true);
            keyRef.current++;
            hideTimer.current = window.setTimeout(() => setVisible(false), 1600);
        }

        return () => window.clearTimeout(hideTimer.current);
    }, [effectiveOnline]);

    const onDismiss = () => {
        window.clearTimeout(hideTimer.current);
        setVisible(false);
    };

    const variants = useMemo(
        () => ({
            hidden: { y: "-100%", opacity: 0.0001 },
            shown: { y: "0%", opacity: 1 },
        }),
        []
    );

    return (
        // Respect OS setting: we won't force animations here
        <MotionConfig>
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Offline Banner Slide-Down</h1>
                        <p className="muted">
                            When the app goes offline, a banner slides down and pins. On reconnect,
                            it shows a “Back online” notice and auto-dismisses.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Demo controls">
                        <label className="ctrl switch">
                            <input
                                type="checkbox"
                                checked={simulate}
                                onChange={(e) => setSimulate(e.target.checked)}
                                aria-label="Simulate offline"
                            />
                            <span className="t">Simulate offline</span>
                        </label>
                        <span className={`pill ${effectiveOnline ? "ok" : "bad"}`}>
                            {effectiveOnline ? "Online" : "Offline"}
                        </span>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    {/* Slide-down banner; mounts two RAFs after first paint → reliable on refresh */}
                    <AnimatePresence initial={false}>
                        {mounted && visible && (
                            <motion.div
                                key={`${keyRef.current}-${kind}`}
                                className={`banner ${kind}`}
                                role="status"
                                aria-live="polite"
                                initial="hidden"
                                animate="shown"
                                exit="hidden"
                                variants={variants}
                                transition={{
                                    type: "spring",
                                    stiffness: 420,
                                    damping: 36,
                                    mass: 0.7,
                                }}
                            >
                                <div className="content">
                                    <span className="icon" aria-hidden="true">
                                        {kind === "offline" ? <IconWifiOff /> : <IconCheck />}
                                    </span>
                                    <div className="text">
                                        <strong>
                                            {kind === "offline" ? "You’re offline" : "Back online"}
                                        </strong>
                                        <span className="sub">
                                            {kind === "offline"
                                                ? "Some actions are paused. We’ll retry automatically."
                                                : "Connection restored. Resuming network requests."}
                                        </span>
                                    </div>

                                    <div className="actions">
                                        {kind === "offline" ? (
                                            <button className="btn ghost" onClick={onDismiss}>
                                                Dismiss
                                            </button>
                                        ) : (
                                            <button className="btn ghost" onClick={onDismiss}>
                                                Close
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Subtle progress bar for the “back online” auto-hide window */}
                                {kind === "online" && (
                                    <motion.div
                                        className="autoHideBar"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 1.4, ease: "linear" }}
                                        aria-hidden="true"
                                    />
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Fake content to demonstrate pinned banner */}
                    <div className="paper">
                        <h3>Demo content</h3>
                        <p>
                            Toggle “Simulate offline” to trigger the banner. Try scrolling; the
                            banner stays pinned at the top of this surface.
                        </p>
                        <ul className="list">
                            {Array.from({ length: 14 }).map((_, i) => (
                                <li key={i}>List item {i + 1}</li>
                            ))}
                        </ul>
                    </div>
                </Styled.Stage>
            </Styled.Wrapper>
        </MotionConfig>
    );
}

/* ----------------
   Tiny inline icons
------------------*/
function IconWifiOff(props) {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
            <path
                fill="currentColor"
                d="M2.28 3.72L1 5l3.09 3.09A13.93 13.93 0 0 1 12 6c3 0 5.74.98 7.9 2.64l1.45-1.45A15.94 15.94 0 0 0 12 4C8.96 4 6.15 4.98 3.72 6.72L2.28 5.28 2.28 3.72zM6.5 9.5l1.5 1.5A8.96 8.96 0 0 1 12 10c2.01 0 3.86.66 5.33 1.77l1.48-1.48A10.96 10.96 0 0 0 12 8c-2.06 0-3.98.6-5.5 1.5zm3 3 4.99 5 .01.01A1.5 1.5 0 1 0 12 20a1.5 1.5 0 0 0 2.5-1.16l-3-3A5.97 5.97 0 0 0 12 15c1.31 0 2.52.42 3.5 1.13l1.46-1.46A7.97 7.97 0 0 0 12 13c-1.04 0-2.03.2-2.9.5z"
            />
        </svg>
    );
}
function IconCheck(props) {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
            <path
                fill="currentColor"
                d="M9.55 16.15l-3.7-3.7 1.4-1.4 2.3 2.29 7.1-7.1 1.41 1.41-8.5 8.5z"
            />
        </svg>
    );
}
