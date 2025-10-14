import { useEffect, useState } from "react";
import {
    AnimatePresence,
    LayoutGroup,
    MotionConfig,
    motion,
    useMotionValue,
    useTransform,
    useSpring,
} from "framer-motion";
import { Styled, ModalOverlay } from "./styled";

/* -------------------- Data -------------------- */

const CARDS = [
    {
        id: "c1",
        title: "Nebula Pass",
        subtitle: "Plan: Pro",
        body:
            "A premium card for interstellar explorers who like minimal UI and maximal speed.",
        stats: [
            { k: "Projects", v: "12" },
            { k: "Teams", v: "3" },
            { k: "Quota", v: "120 GB" },
        ],
    },
    {
        id: "c2",
        title: "Quasar ID",
        subtitle: "Plan: Starter",
        body: "A simple identity card tuned for small squads and prototypes.",
        stats: [
            { k: "Projects", v: "4" },
            { k: "Teams", v: "1" },
            { k: "Quota", v: "12 GB" },
        ],
    },
    {
        id: "c3",
        title: "Aurora Key",
        subtitle: "Plan: Business",
        body:
            "Security-forward. Strong defaults, strong coffee, stronger animations.",
        stats: [
            { k: "Projects", v: "34" },
            { k: "Teams", v: "8" },
            { k: "Quota", v: "1 TB" },
        ],
    },
    {
        id: "c4",
        title: "Photon Prime",
        subtitle: "Plan: Enterprise",
        body:
            "For teams who ship faster than light—with governance that actually helps.",
        stats: [
            { k: "Projects", v: "120" },
            { k: "Teams", v: "24" },
            { k: "Quota", v: "Unlimited" },
        ],
    },
    {
        id: "c5",
        title: "Comet Access",
        subtitle: "Plan: Free",
        body:
            "Great for learning and tinkering. No credit card. No dark patterns.",
        stats: [
            { k: "Projects", v: "2" },
            { k: "Teams", v: "—" },
            { k: "Quota", v: "2 GB" },
        ],
    },
    {
        id: "c6",
        title: "Orbit Vault",
        subtitle: "Plan: Plus",
        body:
            "Encrypted by default. Your bits stay yours. Your vibes stay immaculate.",
        stats: [
            { k: "Projects", v: "18" },
            { k: "Teams", v: "5" },
            { k: "Quota", v: "240 GB" },
        ],
    },
];

/* -------------------- Validation -------------------- */

const emailValid = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
const passwordIssues = (s) => {
    const issues = [];
    if (s.length < 8) issues.push("At least 8 characters");
    if (!/[A-Z]/.test(s)) issues.push("One uppercase letter");
    if (!/[a-z]/.test(s)) issues.push("One lowercase letter");
    if (!/[0-9]/.test(s)) issues.push("One number");
    return issues;
};

/* -------------------- Icons (inline) -------------------- */

function IconEye({ off = false }) {
    return off ? (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden focusable="false">
            <path
                fill="currentColor"
                d="M2 3.27L20.73 22l1.27-1.27L3.27 2 2 3.27zM10.6 7.61 8.97 6A10.86 10.86 0 0 1 12 6c5.05 0 9.27 3.11 10.93 7.5-.54 1.43-1.39 2.72-2.47 3.79l-2.86-2.86A5 5 0 0 0 12 7a5 5 0 0 0-1.4.61zM14.1 11.1a2 2 0 0 0-2.69-2.69l2.69 2.69zM5.12 7.76 6.57 9.2A10.2 10.2 0 0 0 2.07 13.5C3.73 17.89 7.95 21 13 21c1.27 0 2.49-.18 3.62-.5l-1.51-1.51A10.8 10.8 0 0 1 13 19c-4.15 0-7.78-2.4-9.34-5.5a9.78 9.78 0 0 1 1.46-2.24z"
            />
        </svg>
    ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden focusable="false">
            <path
                fill="currentColor"
                d="M12 6c5.05 0 9.27 3.11 10.93 7.5C21.27 17.89 17.05 21 12 21S2.73 17.89 1.07 13.5C2.73 9.11 6.95 6 12 6zm0 2c-3.38 0-6.5 1.94-8.19 5.5C5.5 17.06 8.62 19 12 19s6.5-1.94 8.19-5.5C18.5 9.94 15.38 8 12 8zm0 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"
            />
        </svg>
    );
}
function IconX() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden focusable="false">
            <path
                fill="currentColor"
                d="M18.3 5.71 12 12l6.3 6.29-1.41 1.41L10.59 13.41 4.29 19.7 2.88 18.3 9.17 12 2.88 5.71 4.29 4.3l6.3 6.29L16.88 4.3l1.41 1.41z"
            />
        </svg>
    );
}

/* -------------------- Card -------------------- */

function FlipCard({ data, flipAllTick }) {
    const [flipped, setFlipped] = useState(false);

    // Tilt + hover scale
    const rx = useMotionValue(0);
    const ry = useMotionValue(0);
    const hoverMV = useMotionValue(0); // 0 not hovered, 1 hovered
    const scaleMV = useTransform(hoverMV, [0, 1], [1, 1.02]);
    const scale = useSpring(scaleMV, { stiffness: 260, damping: 24, mass: 0.8 });

    const onPointerMove = (e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;  // 0..1
        const py = (e.clientY - rect.top) / rect.height;  // 0..1
        const rotX = (0.5 - py) * 12;  // -6..6
        const rotY = (px - 0.5) * 16;  // -8..8
        rx.set(rotX);
        ry.set(rotY);
    };
    const onLeave = () => {
        hoverMV.set(0);
        rx.set(0);
        ry.set(0);
    };

    // Toolbar “flip all”
    useEffect(() => {
        setFlipped((f) => !f);
    }, [flipAllTick]);

    const innerVariants = { front: { rotateY: 0 }, back: { rotateY: 180 } };

    return (
        <div className="card3d-wrap" style={{ perspective: 1200 }}>
            <motion.div
                className="card3d"
                style={{ rotateX: rx, rotateY: ry, scale, transformStyle: "preserve-3d" }}
                onPointerMove={onPointerMove}
                onPointerEnter={() => hoverMV.set(1)}
                onPointerLeave={onLeave}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
            >
                <motion.div
                    className="card3d-inner"
                    animate={flipped ? "back" : "front"}
                    variants={innerVariants}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Front */}
                    <div className="face face-front">
                        <header className="cHead">
                            <span className="kicker">{data.subtitle}</span>
                            <h3>{data.title}</h3>
                        </header>
                        <p className="body">{data.body}</p>
                        <ul className="stats">
                            {data.stats.map((s) => (
                                <li key={s.k}><b>{s.k}:</b> {s.v}</li>
                            ))}
                        </ul>
                        <div className="actions">
                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                className="btn"
                                onClick={() => setFlipped(true)}
                                aria-label={`Flip ${data.title} to back`}
                            >
                                Flip
                            </motion.button>
                        </div>
                    </div>

                    {/* Back */}
                    <div className="face face-back">
                        <header className="cHead">
                            <span className="kicker">Details</span>
                            <h3>{data.title}</h3>
                        </header>
                        <div className="grid2">
                            <div>
                                <p className="muted">Includes</p>
                                <ul className="bullets">
                                    <li>Premium support</li>
                                    <li>Unlimited viewers</li>
                                    <li>SSO (SAML/OIDC)</li>
                                </ul>
                            </div>
                            <div>
                                <p className="muted">Limits</p>
                                <ul className="bullets">
                                    <li>API rate quotas</li>
                                    <li>Audit log retention</li>
                                    <li>Per-seat billing</li>
                                </ul>
                            </div>
                        </div>
                        <div className="actions">
                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                className="btn ghost"
                                onClick={() => setFlipped(false)}
                                aria-label={`Flip ${data.title} to front`}
                            >
                                Back
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

/* -------------------- Secure Modal -------------------- */

function SecureModal({ open, onClose }) {
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [showPw, setShowPw] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [done, setDone] = useState(false);

    const emailOK = emailValid(email);
    const pwIssues = passwordIssues(pw);
    const pwOK = pwIssues.length === 0;
    const canSubmit = emailOK && pwOK && !submitting;

    useEffect(() => {
        const onKey = (e) => { if (e.key === "Escape") onClose?.(); };
        if (open) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    const onSubmit = (e) => {
        e?.preventDefault?.();
        if (!canSubmit) return;
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setDone(true);
            setTimeout(() => { setDone(false); onClose?.(); }, 900);
        }, 900);
    };

    return (
        <AnimatePresence>
            {open && (
                <ModalOverlay
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="modal"
                        initial={{ scale: 0.96, opacity: 0.8 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.96, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="secure-title"
                    >
                        <div className="mHead">
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                                <h3 id="secure-title">Secure Settings</h3>
                                <motion.button
                                    whileTap={{ scale: 0.96 }}
                                    className="iconBtn"
                                    onClick={onClose}
                                    aria-label="Close modal"
                                >
                                    <IconX />
                                </motion.button>
                            </div>
                            <p className="muted">
                                Log in to change sensitive options for 3D flips, depth, and motion intensity.
                            </p>
                        </div>

                        <form className="mBody" onSubmit={onSubmit} noValidate>
                            <label className="fLabel">
                                <span>Email</span>
                                <input
                                    type="email"
                                    inputMode="email"
                                    placeholder="you@domain.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    aria-invalid={!emailOK && email.length > 0}
                                    required
                                />
                            </label>

                            <label className="fLabel">
                                <span>Password</span>
                                <div className="pwWrap">
                                    <input
                                        type={showPw ? "text" : "password"}
                                        placeholder="••••••••"
                                        value={pw}
                                        onChange={(e) => setPw(e.target.value)}
                                        aria-invalid={!pwOK && pw.length > 0}
                                        required
                                    />
                                    <motion.button
                                        type="button"
                                        whileTap={{ scale: 0.96 }}
                                        className="eyeBtn"
                                        onClick={() => setShowPw((s) => !s)}
                                        aria-label={showPw ? "Hide password" : "Show password"}
                                    >
                                        <IconEye off={showPw} />
                                    </motion.button>
                                </div>
                            </label>

                            <AnimatePresence initial={false}>
                                {(!emailOK && email.length > 0) || (!pwOK && pw.length > 0) ? (
                                    <motion.ul
                                        className="errors"
                                        initial={{ opacity: 0, y: -6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                    >
                                        {!emailOK && email.length > 0 && <li>Enter a valid email address</li>}
                                        {!pwOK && pw.length > 0 && (
                                            <li>
                                                Password needs:
                                                <ul className="sub">{pwIssues.map((p) => <li key={p}>{p}</li>)}</ul>
                                            </li>
                                        )}
                                    </motion.ul>
                                ) : null}
                            </AnimatePresence>
                        </form>

                        <div className="mFoot">
                            <motion.button
                                whileTap={{ scale: canSubmit ? 0.98 : 1 }}
                                className="closeBtn"
                                onClick={onSubmit}
                                disabled={!canSubmit}
                            >
                                {submitting ? "Verifying…" : done ? "Done!" : "Continue"}
                            </motion.button>
                        </div>
                    </motion.div>
                </ModalOverlay>
            )}
        </AnimatePresence>
    );
}

/* -------------------- Page -------------------- */

export default function ThreeDCardFlip() {
    const [flipAllTick, setFlipAllTick] = useState(0);
    const [open, setOpen] = useState(false);

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>3D Card Flip</h1>
                        <p className="muted">
                            Perspective-correct flips with hover tilt, buttery springs, and a secure settings modal.
                        </p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="3D Card controls">
                        <motion.button
                            whileTap={{ scale: 0.98 }}
                            className="btn"
                            onClick={() => setFlipAllTick((k) => k + 1)}
                        >
                            Flip All
                        </motion.button>
                        <motion.button
                            whileTap={{ scale: 0.98 }}
                            className="btn ghost"
                            onClick={() => setOpen(true)}
                        >
                            Secure Settings
                        </motion.button>
                    </div>
                </Styled.Header>

                <Styled.Stage>
                    <LayoutGroup>
                        <div className="grid">
                            {CARDS.map((c) => (
                                <FlipCard key={c.id} data={c} flipAllTick={flipAllTick} />
                            ))}
                        </div>
                    </LayoutGroup>
                </Styled.Stage>

                <Styled.Notes>
                    <h3>Tech notes</h3>
                    <ul>
                        <li>Perspective on wrapper; card preserves 3D; faces have <code>backface-visibility: hidden</code>.</li>
                        <li>Pointer-driven <code>rotateX/Y</code> + hover scale via <code>MotionValue</code> → <code>useSpring</code>.</li>
                        <li>“Flip All” toggles each card with a LayoutGroup-friendly update.</li>
                        <li>Modal: email/password validation, eye toggle, Escape to close, animated mount/unmount.</li>
                    </ul>
                </Styled.Notes>

                <SecureModal open={open} onClose={() => setOpen(false)} />
            </Styled.Wrapper>
        </MotionConfig>
    );
}
