import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    AnimatePresence,
    MotionConfig,
    motion,
    useMotionValue,
    useTransform,
} from "framer-motion";
import { Styled, ModalOverlay } from "./styled";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

/* ---------- helpers ---------- */

const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const strongPasswordRx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

/** Find the app’s scroll container if present (your layout sets data-scroll-root on it). */
function getScrollRoot() {
    if (typeof document === "undefined") return null;
    return document.querySelector("[data-scroll-root]") || window;
}

function smoothScrollToTop() {
    const scroller = getScrollRoot();
    if (!scroller) return;

    // Native smooth if available
    try {
        if (scroller === window) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        if (typeof scroller.scrollTo === "function") {
            scroller.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
    } catch {
        /* ignore and fall through to manual */
    }

    // Fallback: RAF ease-out (works everywhere)
    const startY =
        scroller === window
            ? (window.scrollY || document.documentElement.scrollTop || 0)
            : scroller.scrollTop;

    const dur = 500; // ms
    let t0;
    const easeOutQuad = (t) => t * (2 - t);

    function step(ts) {
        if (!t0) t0 = ts;
        const t = Math.min(1, (ts - t0) / dur);
        const y = Math.round(startY * (1 - easeOutQuad(t)));
        if (scroller === window) {
            window.scrollTo(0, y);
        } else {
            scroller.scrollTop = y;
        }
        if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}


/* Reusable reveal variants */
const reveal = {
    hidden: { y: 28, opacity: 0, filter: "blur(2px)" },
    visible: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
};

/* Slight rotate-in for cards */
const tilt = {
    hidden: { y: 20, opacity: 0, rotate: -1.5 },
    visible: {
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

/* ---------- component ---------- */

export default function RevealOnScroll() {
    // Manual scroll progress tied to your app’s scroll root (not window)
    const progress = useMotionValue(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const scroller = getScrollRoot();
        if (!scroller) return;

        const update = () => {
            let top, height, viewport;
            if (scroller === window) {
                top = window.scrollY || document.documentElement.scrollTop || 0;
                height = document.documentElement.scrollHeight || 1;
                viewport = window.innerHeight || 1;
            } else {
                top = scroller.scrollTop;
                height = scroller.scrollHeight || 1;
                viewport = scroller.clientHeight || 1;
            }
            const p = Math.max(0, Math.min(1, (height - viewport > 0 ? top / (height - viewport) : 0)));
            progress.set(p);
        };

        update();
        scroller.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            scroller.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, [progress]);

    // Progress bar scale
    const progressWidth = useTransform(progress, [0, 1], ["0%", "100%"]);

    // Parallax hero layers (subtle, premium)
    const yBack = useTransform(progress, [0, 1], ["0px", "-80px"]);
    const yFront = useTransform(progress, [0, 1], ["0px", "-40px"]);
    const gloss = useTransform(progress, [0, 1], [0.15, 0.35]);

    // Modal state
    const [open, setOpen] = useState(false);
    const [showPw, setShowPw] = useState(false);

    // Form state + validation
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [touched, setTouched] = useState({ email: false, pwd: false });
    const [submitting, setSubmitting] = useState(false);
    const [submitOk, setSubmitOk] = useState(false);

    const emailErr = useMemo(() => {
        if (!touched.email) return "";
        if (!email) return "Email is required.";
        if (!emailRx.test(email)) return "Enter a valid email address.";
        return "";
    }, [email, touched.email]);

    const pwdErr = useMemo(() => {
        if (!touched.pwd) return "";
        if (!pwd) return "Password is required.";
        if (!strongPasswordRx.test(pwd)) {
            return "Min 8 chars, 1 uppercase, 1 lowercase, 1 number.";
        }
        return "";
    }, [pwd, touched.pwd]);

    const canSubmit = !emailErr && !pwdErr && email && pwd && !submitting;

    function onOpen() {
        setOpen(true);
        setSubmitOk(false);
    }
    function onClose() {
        setOpen(false);
        setSubmitting(false);
        setSubmitOk(false);
        setEmail("");
        setPwd("");
        setTouched({ email: false, pwd: false });
    }

    async function onSubmit(e) {
        e.preventDefault();
        setTouched({ email: true, pwd: true });
        if (!canSubmit) return;

        setSubmitting(true);
        // Fake async
        await new Promise((r) => setTimeout(r, 700));
        setSubmitting(false);
        setSubmitOk(true);
    }

    // Escape closes modal
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <MotionConfig>
            <Styled.Wrapper ref={containerRef}>
                {/* Sticky reading progress */}
                <Styled.Progress aria-hidden="true">
                    <motion.div className="bar" style={{ width: progressWidth }} />
                </Styled.Progress>

                {/* Hero */}
                <Styled.Hero>
                    <div className="heroInner">
                        <motion.div className="bg" style={{ y: yBack }} aria-hidden />
                        <motion.div className="fg" style={{ y: yFront }}>
                            <motion.h1
                                initial={{ y: 18, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            >
                                Reveal on Scroll
                            </motion.h1>
                            <motion.p
                                className="muted"
                                initial={{ y: 18, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            >
                                Parallax hero, staggered sections, and a clean CTA modal - all theme-aware and buttery.
                            </motion.p>

                            <motion.div
                                className="ctaRow"
                                initial={{ y: 18, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.16, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <button className="btn primary" onClick={onOpen}>Get early access</button>
                                <motion.span className="gloss" style={{ opacity: gloss }} />
                            </motion.div>
                        </motion.div>
                    </div>
                </Styled.Hero>

                {/* Section: Features grid */}
                <Styled.Section>
                    <motion.h2
                        variants={reveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Why this feels premium
                    </motion.h2>

                    <div className="grid">
                        {[
                            ["Transforms only", "Opacity + transform → crisp GPU paths."],
                            ["Short timelines", "Sub-600ms curves tuned for snappiness."],
                            ["Accessible", "Reduced motion respected in real apps."],
                            ["Theme-aware", "Dark/light tokens for every surface."],
                            ["Parallax lite", "Tiny offsets - no wobble, just depth."],
                            ["Modals done right", "Blurred overlay, centered, keyboard-friendly."],
                        ].map(([t, d], i) => (
                            <motion.article
                                key={i}
                                className="card"
                                variants={tilt}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <h3>{t}</h3>
                                <p>{d}</p>
                            </motion.article>
                        ))}
                    </div>
                </Styled.Section>

                {/* Section: Quote / stat */}
                <Styled.Section>
                    <motion.blockquote
                        className="quote"
                        variants={reveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.4 }}
                    >
                        <p>
                            “Motion is seasoning. Overdo it and you ruin the dish; use it wisely and
                            everything tastes better.”
                        </p>
                        <footer>- A friendly senior engineer</footer>
                    </motion.blockquote>
                </Styled.Section>

                {/* Section: Gallery */}
                <Styled.Gallery>
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                        <motion.figure
                            key={n}
                            className="shot"
                            variants={tilt}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.25 }}
                        >
                            <div className="img" />
                            <figcaption>Scene {n}</figcaption>
                        </motion.figure>
                    ))}
                </Styled.Gallery>

                {/* Section: CTA */}
                <Styled.CTA>
                    <motion.div
                        className="ctaCard"
                        variants={reveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.35 }}
                    >
                        <h3>Like this pattern?</h3>
                        <p className="muted">Join the early list for more animation recipes & code.</p>
                        <div className="row">
                            <button className="btn primary" onClick={onOpen}>Join waitlist</button>
                            <button className="btn ghost" onClick={smoothScrollToTop}>
                                Back to top
                            </button>
                        </div>
                    </motion.div>
                </Styled.CTA>

                {/* Modal */}
                <AnimatePresence>
                    {open && (
                        <ModalOverlay
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onMouseDown={(e) => e.target === e.currentTarget && onClose()}
                        >
                            <motion.div
                                className="modal"
                                initial={{ y: 24, scale: 0.98, opacity: 0 }}
                                animate={{ y: 0, scale: 1, opacity: 1, transition: { type: "spring", stiffness: 280, damping: 28 } }}
                                exit={{ y: 12, scale: 0.98, opacity: 0, transition: { duration: 0.2 } }}
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="m-title"
                            >
                                <div className="mHead">
                                    <h3 id="m-title">Join the waitlist</h3>
                                </div>
                                <div className="mBody">
                                    {!submitOk ? (
                                        <form onSubmit={onSubmit} noValidate>
                                            <p className="muted">Enter your email and create a password.</p>

                                            <label className="fld">
                                                <span>Email</span>
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                                                    placeholder="you@example.com"
                                                    aria-invalid={!!emailErr}
                                                    aria-describedby="err-email"
                                                    required
                                                />
                                                {emailErr && <em id="err-email" className="err">{emailErr}</em>}
                                            </label>

                                            <label className="fld">
                                                <span>Password</span>
                                                <div className="pwWrap">
                                                    <input
                                                        type={showPw ? "text" : "password"}
                                                        value={pwd}
                                                        onChange={(e) => setPwd(e.target.value)}
                                                        onBlur={() => setTouched((t) => ({ ...t, pwd: true }))}
                                                        placeholder="********"
                                                        aria-invalid={!!pwdErr}
                                                        aria-describedby="err-pwd"
                                                        required
                                                    />
                                                    <button
                                                        type="button"
                                                        className="eye"
                                                        aria-label={showPw ? "Hide password" : "Show password"}
                                                        onClick={() => setShowPw((v) => !v)}
                                                    >
                                                        {showPw ? <AiOutlineEyeInvisible size={18} /> : <AiOutlineEye size={18} />}
                                                    </button>
                                                </div>
                                                {pwdErr && <em id="err-pwd" className="err">{pwdErr}</em>}
                                            </label>

                                            <div className="btnRow">
                                                <button
                                                    className="btn primary"
                                                    type="submit"
                                                    disabled={!canSubmit}
                                                    aria-disabled={!canSubmit}
                                                >
                                                    {submitting ? "Submitting…" : "Join"}
                                                </button>
                                                <button type="button" className="btn ghost" onClick={onClose}>Cancel</button>
                                            </div>
                                        </form>
                                    ) : (
                                        <div className="success">
                                            <h4>You're on the list 🎉</h4>
                                            <p className="muted">We’ll email you when new demos land.</p>
                                        </div>
                                    )}
                                </div>
                                <div className="mFoot">
                                    <button className="closeBtn" onClick={onClose}>Close</button>
                                </div>
                            </motion.div>
                        </ModalOverlay>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
