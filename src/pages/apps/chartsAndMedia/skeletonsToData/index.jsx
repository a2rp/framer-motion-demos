import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled, ModalOverlay } from "./styled";
import {
    MdOutlineSettings,
    MdVisibility,
    MdVisibilityOff,
    MdRefresh,
    MdErrorOutline,
    MdClose,
} from "react-icons/md";

/* ---------- helpers ---------- */

const LS_KEY = "s2d_apiKey";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const uid = (() => { let i = 0; return () => `row-${++i}`; })();

function validateApiKey(v) {
    const val = (v || "").trim();
    if (!val) return "API key is required.";
    if (val.length < 8) return "API key must be at least 8 characters.";
    if (!/^[a-z0-9-_.]+$/i.test(val)) return "Only letters, numbers, dash, underscore, dot.";
    return "";
}

function makeItems(n = 8) {
    const count = Math.max(6, n);
    return Array.from({ length: count }, (_, i) => {
        const id = uid();
        const score = 60 + Math.floor(Math.random() * 40);
        const delta = (Math.random() * 2 - 1) * 6; // -6..+6
        return {
            id,
            title: `Metric ${i + 1}`,
            desc: "Premium card with subtle micro-interactions and motion.",
            score,
            delta: Math.round(delta * 10) / 10,
        };
    });
}

/* ---------- component ---------- */

export default function SkeletonsToData() {
    // settings
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [apiKey, setApiKey] = useState(() => {
        try { return localStorage.getItem(LS_KEY) || ""; } catch { return ""; }
    });
    const [apiKeyVisible, setApiKeyVisible] = useState(false);
    const [apiKeyErr, setApiKeyErr] = useState("");

    // data
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState(() => makeItems(8));
    const [error, setError] = useState("");

    const prefersData = useMemo(() => !loading && !error, [loading, error]);

    const loadData = useCallback(async ({ simulateError = false } = {}) => {
        setLoading(true);
        setError("");
        try {
            // small realistic delay
            await sleep(1100);
            if (simulateError) throw new Error("Network error: request timed out.");
            // Optional: require key to be present (but not blocking the demo)
            if (!apiKey) {
                // Soft nudge: still show data, but advise to set a key in settings.
                setItems(makeItems(8));
            } else {
                setItems(makeItems(8));
            }
        } catch (e) {
            setError(e?.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    }, [apiKey]);

    useEffect(() => {
        // initial load
        loadData();
    }, [loadData]);

    // Save settings
    const onSaveSettings = () => {
        const msg = validateApiKey(apiKey);
        setApiKeyErr(msg);
        if (msg) return;
        try { localStorage.setItem(LS_KEY, apiKey); } catch { }
        setSettingsOpen(false);
    };

    const onCancelSettings = () => {
        // restore from storage
        try { setApiKey(localStorage.getItem(LS_KEY) || ""); } catch { }
        setApiKeyErr("");
        setSettingsOpen(false);
    };

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Skeletons → Data</h1>
                        <p className="muted">
                            Shimmering placeholders that crossfade into real content. Tidy motion,
                            no layout jumps, and a crisp, theme-aware design.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Skeletons controls">
                        <button
                            className="btn ghost"
                            onClick={() => loadData({ simulateError: true })}
                            title="Simulate error"
                        >
                            <MdErrorOutline size={18} />
                            Simulate Error
                        </button>
                        <button
                            className="btn"
                            onClick={() => loadData()}
                            title="Reload data"
                            disabled={loading}
                        >
                            <MdRefresh size={18} />
                            Reload
                        </button>
                        <button
                            className="btn primary"
                            onClick={() => setSettingsOpen(true)}
                            title="Settings"
                        >
                            <MdOutlineSettings size={18} />
                            Settings
                        </button>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    {/* Error banner */}
                    <AnimatePresence initial={false}>
                        {error && (
                            <motion.div
                                className="errorBanner"
                                role="status"
                                initial={{ y: -12, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="msg">
                                    <MdErrorOutline size={18} />
                                    <span>{error}</span>
                                </div>
                                <button className="close" onClick={() => setError("")} aria-label="Dismiss">
                                    <MdClose size={16} />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Content */}
                    <div className={`grid ${loading ? "is-loading" : ""}`}>
                        {/* Skeletons */}
                        <AnimatePresence initial={false}>
                            {loading &&
                                Array.from({ length: 8 }).map((_, i) => (
                                    <motion.article
                                        key={`skel-${i}`}
                                        className="card skeleton"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.25, delay: i * 0.03 }}
                                        aria-hidden="true"
                                    >
                                        <div className="skel skel-title" />
                                        <div className="skel skel-line" />
                                        <div className="skel skel-line short" />
                                        <motion.div
                                            className="shimmer"
                                            aria-hidden="true"
                                            initial={{ x: "-120%" }}
                                            animate={{ x: "120%" }}
                                            transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
                                        />
                                    </motion.article>
                                ))}
                        </AnimatePresence>

                        {/* Data cards */}
                        <AnimatePresence initial={false}>
                            {prefersData &&
                                items.map((it, i) => (
                                    <motion.article
                                        key={it.id}
                                        className="card"
                                        initial={{ opacity: 0, y: 14, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                                        transition={{ duration: 0.28, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                                        whileHover={{ y: -2 }}
                                    >
                                        <header className="cHead">
                                            <span className="kicker">Metric</span>
                                            <h3>{it.title}</h3>
                                        </header>

                                        <p className="desc">{it.desc}</p>

                                        <div className="kpis">
                                            <div className="kpi">
                                                <span className="label">Score</span>
                                                <span className="value">{it.score}</span>
                                            </div>
                                            <div className={`kpi ${it.delta >= 0 ? "up" : "down"}`}>
                                                <span className="label">Δ</span>
                                                <span className="value">
                                                    {it.delta >= 0 ? "+" : ""}
                                                    {it.delta}%
                                                </span>
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                        </AnimatePresence>
                    </div>
                </Styled.Stage>

                {/* Settings Modal */}
                <AnimatePresence>
                    {settingsOpen && (
                        <ModalOverlay
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="modal"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="m-title"
                                initial={{ scale: 0.96, y: 10, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1 }}
                                exit={{ scale: 0.98, y: -6, opacity: 0 }}
                                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="mHead">
                                    <h3 id="m-title">Settings</h3>
                                </div>

                                <div className="mBody">
                                    <p className="muted">
                                        Add your API key (stored locally). This demo does not call a real API.
                                    </p>

                                    <label className="field">
                                        <span>API Key</span>
                                        <div className="inputWrap">
                                            <input
                                                type={apiKeyVisible ? "text" : "password"}
                                                value={apiKey}
                                                onChange={(e) => setApiKey(e.target.value)}
                                                placeholder="Enter at least 8 characters"
                                                aria-invalid={!!apiKeyErr}
                                            />
                                            <button
                                                type="button"
                                                className="eye"
                                                onClick={() => setApiKeyVisible((v) => !v)}
                                                aria-label={apiKeyVisible ? "Hide API key" : "Show API key"}
                                                title={apiKeyVisible ? "Hide" : "Show"}
                                            >
                                                {apiKeyVisible ? <MdVisibilityOff size={18} /> : <MdVisibility size={18} />}
                                            </button>
                                        </div>
                                        {apiKeyErr && <span className="error">{apiKeyErr}</span>}
                                    </label>

                                    <details className="details">
                                        <summary>What’s stored?</summary>
                                        <div className="muted">
                                            Only the API key (if you provide one) is saved to <code>localStorage</code>.
                                        </div>
                                    </details>
                                </div>

                                <div className="mFoot">
                                    <button className="closeBtn ghost" onClick={onCancelSettings}>Cancel</button>
                                    <button className="closeBtn" onClick={onSaveSettings}>Save</button>
                                </div>
                            </motion.div>
                        </ModalOverlay>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
