import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useMotionValue, useSpring } from "framer-motion";
import { Styled, ModalOverlay } from "./styled";

/* --------------------------
   Helpers & slide templates
---------------------------*/
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const mod = (n, m) => ((n % m) + m) % m;

function makeSlides(min = 5) {
    const base = [
        { key: "aurora", title: "Aurora", kicker: "Visual", desc: "Soft gradients and glass highlights.", hue: 210 },
        { key: "nebula", title: "Nebula", kicker: "Depth", desc: "Layers, parallax and subtle glow.", hue: 270 },
        { key: "sonic", title: "Sonic", kicker: "Motion", desc: "Timing curves with intent.", hue: 195 },
        { key: "velvet", title: "Velvet", kicker: "Pattern", desc: "Texture without noise.", hue: 330 },
        { key: "quartz", title: "Quartz", kicker: "Clarity", desc: "Crisp edges, no blur jank.", hue: 15 },
    ];
    const need = Math.max(min, base.length);
    return Array.from({ length: need }, (_, i) => {
        const b = base[i % base.length];
        const r = Math.floor(i / base.length);
        const title = r === 0 ? b.title : `${b.title} ${r + 1}`;
        return { id: `${b.key}-${i + 1}`, title, kicker: b.kicker, desc: b.desc, hue: b.hue };
    });
}

/* --------------------------
   Component
---------------------------*/
export default function ThreeDRingCarousel() {
    // Slides (≥ 5 guaranteed)
    const slides = useMemo(() => makeSlides(6), []);
    const count = slides.length;
    const slice = 360 / count;

    // Radius is responsive to container width
    const sceneRef = useRef(null);
    const [radius, setRadius] = useState(300);

    useEffect(() => {
        const el = sceneRef.current;
        if (!el) return;
        const measure = () => {
            const w = el.clientWidth || 800;
            setRadius(clamp(Math.round(w / 2.6), 200, 520));
        };
        measure();
        const ro = new ResizeObserver(measure);
        ro.observe(el);
        window.addEventListener("orientationchange", measure, { passive: true });
        return () => {
            ro.disconnect();
            window.removeEventListener("orientationchange", measure);
        };
    }, []);

    // 🔑 Authoritative angle (degrees)
    const angle = useMotionValue(0);
    // Spring follows angle
    const rSpring = useSpring(angle, { stiffness: 220, damping: 28, mass: 0.9 });

    // Derived active index (which slide is centered)
    const [active, setActive] = useState(0);
    useEffect(() => {
        const unsub = rSpring.on("change", (deg) => {
            const i = mod(Math.round(-deg / slice), count);
            setActive(i);
        });
        return unsub;
    }, [count, slice, rSpring]);

    /* -------------------------------------------
       Direction switches (tune to your preference)
       DRAG_DIR = 1  → current (right drag → previous)
       DRAG_DIR = -1 → invert (right drag → next)
       WHEEL_DIR mirrors the same sense.
    --------------------------------------------*/
    const DRAG_DIR = 1;   // change to -1 if you ever want to flip again
    const WHEEL_DIR = 1;  // keep in sync with DRAG_DIR for consistent feel

    // Drag-to-rotate (reversed per DRAG_DIR)
    const dragging = useRef(false);
    const dragFactorDegPerPx = 0.25; // tuned

    const [autoplay, setAutoplay] = useState(true);
    const [hover, setHover] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const onDragStart = () => {
        dragging.current = true;
        setAutoplay(false);
    };
    const onDrag = (_, info) => {
        // NOTE: flipped direction using DRAG_DIR
        angle.set(angle.get() + DRAG_DIR * info.delta.x * dragFactorDegPerPx);
    };
    const onDragEnd = () => {
        dragging.current = false;
        // Snap to nearest slice
        const current = angle.get();
        const snapped = Math.round(current / slice) * slice;
        angle.set(snapped);
    };

    // Prev/Next (unchanged)
    const goTo = useCallback(
        (i) => {
            const target = -i * slice;
            angle.set(target);
            setAutoplay(false);
        },
        [slice, angle]
    );
    const next = () => angle.set(angle.get() - slice);
    const prev = () => angle.set(angle.get() + slice);

    // Dots click
    const onDot = (i) => goTo(i);

    // Keyboard arrows
    const rootRef = useRef(null);
    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;
        const onKey = (e) => {
            if (e.key === "ArrowRight") { e.preventDefault(); next(); }
            if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
        };
        root.addEventListener("keydown", onKey);
        return () => root.removeEventListener("keydown", onKey);
    }, []);

    // Wheel/trackpad scroll → rotate (thresholded), direction tied to WHEEL_DIR
    const wheelAccum = useRef(0);
    const WHEEL_STEP = 40; // px to step one slide

    const onWheel = (e) => {
        if (showModal) return; // ignore while modal open
        // Use the dominant axis (natural for both mice and trackpads)
        const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        wheelAccum.current += delta;

        if (Math.abs(wheelAccum.current) >= WHEEL_STEP) {
            const steps = Math.sign(wheelAccum.current); // +down/right, -up/left
            angle.set(angle.get() + steps * slice * WHEEL_DIR);
            wheelAccum.current = 0;
            // Prevent page scroll only when we consume a step
            e.preventDefault?.();
        }
    };

    // Autoplay (pauses on hover/drag/modal/hidden)
    useEffect(() => {
        if (!autoplay || hover || dragging.current || showModal || document.hidden) return;
        const id = setInterval(() => {
            angle.set(angle.get() - slice);
        }, 3000);
        return () => clearInterval(id);
    }, [autoplay, hover, showModal, slice, angle]);

    useEffect(() => {
        const onVis = () => {
            if (document.hidden) setAutoplay(false);
        };
        document.addEventListener("visibilitychange", onVis);
        return () => document.removeEventListener("visibilitychange", onVis);
    }, []);

    // Modal: “Save Carousel” (validations + password eye)
    const [form, setForm] = useState({ name: "", email: "", password: "", showPass: false });
    const [errors, setErrors] = useState({});
    const [submitState, setSubmitState] = useState("idle"); // idle | sending | ok

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const validate = () => {
        const e = {};
        if (!form.name || form.name.trim().length < 2) e.name = "Please enter your full name.";
        if (!emailRe.test(form.email)) e.email = "Enter a valid email address.";
        if (!form.password || form.password.length < 6) e.password = "Password must be 6+ characters.";
        setErrors(e);
        return Object.keys(e).length === 0;
    };
    const onSubmit = (ev) => {
        ev.preventDefault();
        if (!validate()) return;
        setSubmitState("sending");
        setTimeout(() => {
            setSubmitState("ok");
            setTimeout(() => {
                setShowModal(false);
                setSubmitState("idle");
                setForm({ name: "", email: "", password: "", showPass: false });
                setErrors({});
            }, 900);
        }, 800);
    };

    // Accessibility title/desc for active slide
    const activeSlide = slides[active];

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper
                ref={rootRef}
                tabIndex={0}
                aria-roledescription="3D ring carousel"
                aria-label={`Active: ${activeSlide?.title ?? "slide"}`}
            >
                <Styled.Header>
                    <div className="heading">
                        <h1>3D Ring Carousel</h1>
                        <p className="muted">Drag, scroll, click dots, or use arrow keys. Snaps to center. Autoplay pauses on hover.</p>
                    </div>

                    <div className="controls" role="toolbar" aria-label="Carousel controls">
                        <button className="btn" onClick={prev} aria-label="Previous slide">← Prev</button>
                        <button className="btn primary" onClick={next} aria-label="Next slide">Next →</button>
                        <div className="sep" />
                        <label className="switch" title="Toggle autoplay">
                            <input
                                type="checkbox"
                                checked={autoplay}
                                onChange={(e) => setAutoplay(e.target.checked)}
                            />
                            <span className="track"><span className="thumb" /></span>
                            <span className="label">{autoplay ? "Autoplay: On" : "Autoplay: Off"}</span>
                        </label>
                        <button className="btn ghost" onClick={() => setShowModal(true)}>Save Carousel</button>
                    </div>
                </Styled.Header>

                <Styled.Stage
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    {/* Perspective scene */}
                    <Styled.Scene ref={sceneRef} onWheel={onWheel}>
                        {/* Ring: rotateY spring, each slide positioned on circle */}
                        <motion.div className="ring" style={{ rotateY: rSpring }}>
                            {slides.map((s, i) => {
                                const angleDeg = i * slice;
                                const isActive = i === active;
                                return (
                                    <motion.article
                                        key={s.id}
                                        className={`slide ${isActive ? "active" : ""}`}
                                        style={{ transform: `rotateY(${angleDeg}deg) translateZ(${radius}px)` }}
                                    >
                                        <div className="art" style={{ ["--hue"]: s.hue }} aria-hidden="true" />
                                        <header className="cardHead">
                                            <span className="kicker">{s.kicker}</span>
                                            <h3>{s.title}</h3>
                                        </header>
                                        <p className="desc">{s.desc}</p>

                                        <AnimatePresence initial={false}>
                                            {isActive && (
                                                <motion.div
                                                    className="halo"
                                                    key="halo"
                                                    initial={{ opacity: 0, scale: 0.92 }}
                                                    animate={{ opacity: 0.6, scale: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </AnimatePresence>
                                    </motion.article>
                                );
                            })}
                        </motion.div>

                        {/* Transparent drag overlay to rotate the ring */}
                        <motion.div
                            className="dragLayer"
                            drag="x"
                            onDragStart={onDragStart}
                            onDrag={onDrag}
                            onDragEnd={onDragEnd}
                            dragConstraints={{ left: 0, right: 0 }}
                        />
                    </Styled.Scene>

                    {/* Dots */}
                    <div className="dots" role="tablist" aria-label="Slides">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                className={`dot ${i === active ? "active" : ""}`}
                                onClick={() => onDot(i)}
                                role="tab"
                                aria-selected={i === active}
                                aria-controls={`slide-${i}`}
                                tabIndex={i === active ? 0 : -1}
                            />
                        ))}
                    </div>
                </Styled.Stage>

                {/* Modal (blurred overlay) */}
                <AnimatePresence>
                    {showModal && (
                        <ModalOverlay
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={(e) => {
                                if (e.target === e.currentTarget) setShowModal(false);
                            }}
                        >
                            <motion.div
                                className="modal"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="saveTitle"
                                initial={{ y: 30, opacity: 0, scale: 0.98 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ y: 10, opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="mHead">
                                    <h3 id="saveTitle">Save Carousel</h3>
                                    <p className="muted">Create an account to save preferences and autoplay settings.</p>
                                </div>

                                <form className="mBody" onSubmit={onSubmit} noValidate>
                                    <div className={`field ${errors.name ? "error" : ""}`}>
                                        <label htmlFor="name">Full name</label>
                                        <input
                                            id="name" name="name" type="text" autoComplete="name"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            placeholder="Jane Doe"
                                            aria-invalid={!!errors.name}
                                            aria-describedby="err-name"
                                        />
                                        <AnimatePresence>
                                            {errors.name && (
                                                <motion.div
                                                    id="err-name" className="err"
                                                    initial={{ opacity: 0, y: -4 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -4 }}
                                                >{errors.name}</motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <div className={`field ${errors.email ? "error" : ""}`}>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email" name="email" type="email" autoComplete="email"
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            placeholder="jane@example.com"
                                            aria-invalid={!!errors.email}
                                            aria-describedby="err-email"
                                        />
                                        <AnimatePresence>
                                            {errors.email && (
                                                <motion.div
                                                    id="err-email" className="err"
                                                    initial={{ opacity: 0, y: -4 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -4 }}
                                                >{errors.email}</motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <div className={`field pass ${errors.password ? "error" : ""}`}>
                                        <label htmlFor="password">Password</label>
                                        <div className="passWrap">
                                            <input
                                                id="password" name="password"
                                                type={form.showPass ? "text" : "password"}
                                                autoComplete="new-password"
                                                value={form.password}
                                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                                                placeholder="Create a password"
                                                aria-invalid={!!errors.password}
                                                aria-describedby="err-password"
                                            />
                                            <button
                                                type="button"
                                                className="eye"
                                                aria-label={form.showPass ? "Hide password" : "Show password"}
                                                onClick={() => setForm((f) => ({ ...f, showPass: !f.showPass }))}
                                            >
                                                {form.showPass ? "🙈" : "👁️"}
                                            </button>
                                        </div>
                                        <AnimatePresence>
                                            {errors.password && (
                                                <motion.div
                                                    id="err-password" className="err"
                                                    initial={{ opacity: 0, y: -4 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -4 }}
                                                >{errors.password}</motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </form>

                                <div className="mFoot">
                                    <button className="closeBtn ghost" onClick={() => setShowModal(false)}>Cancel</button>
                                    <motion.button
                                        className="closeBtn"
                                        onClick={onSubmit}
                                        disabled={submitState === "sending" || submitState === "ok"}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {submitState === "idle" && "Create Account"}
                                        {submitState === "sending" && "Saving…"}
                                        {submitState === "ok" && "Saved ✓"}
                                    </motion.button>
                                </div>
                            </motion.div>
                        </ModalOverlay>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
