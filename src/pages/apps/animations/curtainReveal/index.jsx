import React, { useEffect, useMemo, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import "./styled.css";

/** Directions for wipe */
const DIRS = {
    lr: { label: "Left → Right", axis: "x", origin: "left center" },
    rl: { label: "Right → Left", axis: "x", origin: "right center" },
    tb: { label: "Top → Bottom", axis: "y", origin: "top center" },
    bt: { label: "Bottom → Top", axis: "y", origin: "bottom center" },
};

/** Clip-path equivalents (optional) */
const CLIPS = {
    lr: { from: "inset(0% 0% 0% 0%)", to: "inset(0% 100% 0% 0%)" },
    rl: { from: "inset(0% 0% 0% 0%)", to: "inset(0% 0% 0% 100%)" },
    tb: { from: "inset(0% 0% 0% 0%)", to: "inset(100% 0% 0% 0%)" },
    bt: { from: "inset(0% 0% 0% 0%)", to: "inset(0% 0% 100% 0%)" },
};

const canClipPath = (() => {
    try { return CSS?.supports?.("clip-path", "inset(10% 10% 10% 10%)") ?? false; }
    catch { return false; }
})();

export default function CurtainReveal() {
    const [dir, setDir] = useState("lr");
    const [dur, setDur] = useState(0.9);
    const [tech, setTech] = useState(canClipPath ? "transform" : "transform");
    const [bump, setBump] = useState(0);

    // ✅ Mount overlay two frames after first paint so initial→animate always fires on refresh.
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        let r1 = requestAnimationFrame(() => {
            let r2 = requestAnimationFrame(() => setMounted(true));
            // store id so we can cancel if unmounted quickly
            (setMounted)._r2 = r2;
        });
        return () => {
            cancelAnimationFrame(r1);
            cancelAnimationFrame((setMounted)._r2 || 0);
        };
    }, []);

    const D = useMemo(() => DIRS[dir], [dir]);
    const C = useMemo(() => CLIPS[dir], [dir]);

    const transition = useMemo(
        () => ({ duration: dur, ease: [0.22, 1, 0.36, 1] }),
        [dur]
    );

    const initial =
        tech === "clip"
            ? { clipPath: C.from, opacity: 1 }
            : D.axis === "x"
                ? { scaleX: 1, opacity: 1 }
                : { scaleY: 1, opacity: 1 };

    const animate =
        tech === "clip"
            ? { clipPath: C.to }
            : D.axis === "x"
                ? { scaleX: 0 }
                : { scaleY: 0 };

    const replay = () => setBump((k) => k + 1);

    return (
        <MotionConfig reducedMotion="never">
            <div className="cr-wrapper">
                <header className="cr-header">
                    <div className="cr-heading">
                        <h1>Curtain Reveal</h1>
                        <p className="muted">
                            Crisp wipe using <code>transform</code> (default) with optional <code>clip-path</code>.
                        </p>
                    </div>

                    <div className="cr-controls">
                        <label className="ctrl">
                            <span>Direction</span>
                            <select value={dir} onChange={(e) => setDir(e.target.value)}>
                                {Object.entries(DIRS).map(([k, v]) => (
                                    <option key={k} value={k}>{v.label}</option>
                                ))}
                            </select>
                        </label>

                        <label className="ctrl">
                            <span>Duration</span>
                            <input
                                type="range" min="0.4" max="1.6" step="0.1"
                                value={dur} onChange={(e) => setDur(parseFloat(e.target.value))}
                            />
                            <em>{dur.toFixed(1)}s</em>
                        </label>

                        <label className="ctrl">
                            <span>Technique</span>
                            <select value={tech} onChange={(e) => setTech(e.target.value)}>
                                <option value="transform">Transform (scale)</option>
                                <option value="clip">Clip-path</option>
                            </select>
                        </label>

                        <button className="btn" onClick={replay} title="Replay animation">Replay</button>
                    </div>
                </header>

                <section className="cr-stage">
                    <div className="cr-grid">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <article className="cr-card" key={i}>
                                <h3>Card {i + 1}</h3>
                                <p>Drop this overlay into your route transition. Transform mode avoids blur/jank.</p>
                            </article>
                        ))}
                    </div>

                    {mounted && (
                        <motion.div
                            key={`${bump}-${dir}-${dur}-${tech}`}   // key remounts on replay/setting changes
                            className={`cr-curtain ${tech === "clip" ? "is-clip" : "is-transform"}`}
                            initial={initial}
                            animate={animate}
                            transition={transition}
                            style={{ transformOrigin: D.origin }}
                            aria-hidden="true"
                        >
                            <div className="cr-brand">
                                <span className="dot" />
                                <b>Curtain</b><span className="sep">•</span><b>Reveal</b>
                            </div>
                        </motion.div>
                    )}
                </section>

                <footer className="cr-notes">
                    <ul>
                        <li>Wrap your routes with <code>AnimatePresence</code> for page-level wipes.</li>
                        <li>Key the overlay by <code>location.pathname</code> to run on navigation.</li>
                        <li>The stage uses <code>isolation: isolate</code> so the overlay sits in its own stacking context.</li>
                    </ul>
                </footer>
            </div>
        </MotionConfig>
    );
}
