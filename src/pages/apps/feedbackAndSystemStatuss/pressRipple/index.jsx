import { useCallback, useId, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";

/** Compute a circle that reaches the farthest corner from the press point. */
function computeRipple(host, clientX, clientY) {
    const rect = host.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // If event coords are missing, default to center
    const cx = Number.isFinite(x) ? x : rect.width / 2;
    const cy = Number.isFinite(y) ? y : rect.height / 2;

    const dx = Math.max(cx, rect.width - cx);
    const dy = Math.max(cy, rect.height - cy);
    const radius = Math.sqrt(dx * dx + dy * dy);
    const size = radius * 2;

    return { size, left: cx - radius, top: cy - radius };
}

function useRipples() {
    const [ripples, setRipples] = useState([]);
    const add = useCallback((r) => setRipples((rs) => [...rs, r]), []);
    const remove = useCallback((id) => setRipples((rs) => rs.filter((r) => r.id !== id)), []);
    return { ripples, add, remove };
}

function RippleHost({
    as: Tag = "button",
    children,
    className = "",
    variant = "contained",
    disabled = false,
    onClick,
    "aria-label": ariaLabel,
}) {
    const hostRef = useRef(null);
    const { ripples, add, remove } = useRipples();
    const idPrefix = useId();

    const spawnAt = useCallback((x, y) => {
        const el = hostRef.current;
        if (!el) return;
        const { size, left, top } = computeRipple(el, x, y);
        const id = `${idPrefix}-${Math.random().toString(36).slice(2)}`;
        add({ id, size, left, top });
    }, [add, idPrefix]);

    // Pointer + mouse + touch + keyboard (Enter/Space)
    const onPointerDown = (e) => {
        if (disabled) return;
        spawnAt(e.clientX, e.clientY);
    };
    const onMouseDown = (e) => {
        if (disabled) return;
        // In some browsers pointer events might be off; fallback
        if (e.buttons === 1) spawnAt(e.clientX, e.clientY);
    };
    const onTouchStart = (e) => {
        if (disabled) return;
        const t = e.touches?.[0];
        if (t) spawnAt(t.clientX, t.clientY);
    };
    const onKeyDown = (e) => {
        if (disabled) return;
        if (e.key === "Enter" || e.key === " ") {
            const rect = hostRef.current?.getBoundingClientRect();
            if (!rect) return;
            spawnAt(rect.left + rect.width / 2, rect.top + rect.height / 2);
            // Prevent page scroll on Space when used on <div role="button">
            if (e.key === " ") e.preventDefault();
        }
    };

    const handleClick = (e) => {
        if (disabled) return;
        onClick?.(e);
    };

    // Motion config: force visible demo (ignore OS reduced motion)
    return (
        <MotionConfig reducedMotion="never">
            <Tag
                ref={hostRef}
                type={Tag === "button" ? "button" : undefined}
                className={`rippleHost ${variant} ${className}`}
                disabled={Tag === "button" ? disabled : undefined}
                aria-label={ariaLabel}
                role={Tag !== "button" ? "button" : undefined}
                tabIndex={Tag !== "button" ? 0 : undefined}
                onPointerDown={onPointerDown}
                onMouseDown={onMouseDown}
                onTouchStart={onTouchStart}
                onKeyDown={onKeyDown}
                onClick={handleClick}
            >
                {/* Content */}
                <span className="label">{children}</span>

                {/* Ripple layer */}
                <span className="rippleLayer" aria-hidden>
                    <AnimatePresence>
                        {ripples.map((r) => (
                            <motion.span
                                key={r.id}
                                className="ripple"
                                style={{ width: r.size, height: r.size, left: r.left, top: r.top }}
                                initial={{ opacity: 0.38, scale: 0 }}
                                animate={{ opacity: 0, scale: 1 }}
                                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                                onAnimationComplete={() => remove(r.id)}
                            />
                        ))}
                    </AnimatePresence>
                </span>
            </Tag>
        </MotionConfig>
    );
}

export default function PressRipple() {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <div className="heading">
                    <h1>Press Ripple</h1>
                    <p className="muted">
                        Ripple spawns from the press point, expands to cover the host, then fades. Works with mouse, touch, and keyboard.
                    </p>
                </div>
            </Styled.Header>

            <Styled.Stage>
                <div className="group">
                    <RippleHost variant="contained">Primary</RippleHost>
                    <RippleHost variant="surface">Surface</RippleHost>
                    <RippleHost variant="outline">Outline</RippleHost>
                    <RippleHost variant="ghost">Ghost</RippleHost>
                    <RippleHost variant="contained" aria-label="Heart">
                        <span className="icon">❤</span>
                        <span className="sr-only">Like</span>
                    </RippleHost>
                </div>

                {/* Full-card host (press anywhere) */}
                <div className="cards">
                    <RippleHost as="article" className="card surface" variant="surface" aria-label="Open card">
                        <header>
                            <h3>Card with Full-bleed Ripple</h3>
                            <p className="muted">Press anywhere on this card.</p>
                        </header>
                        <div className="meta">
                            <small>Ripple clips to card border radius.</small>
                        </div>
                    </RippleHost>

                    <RippleHost as="article" className="card ghost" variant="ghost" aria-label="Explore">
                        <header>
                            <h3>Ghost Surface</h3>
                            <p className="muted">Try keyboard: Enter or Space.</p>
                        </header>
                        <div className="meta">
                            <small>Accessible: focus ring + role="button".</small>
                        </div>
                    </RippleHost>
                </div>
            </Styled.Stage>

            <Styled.Notes>
                <h3>Tech notes</h3>
                <ul>
                    <li>Hit-tested circle computed against farthest corner ensures coverage.</li>
                    <li>Stacking: label above, ripple layer under label, over background.</li>
                    <li>Blend-mode improves contrast across themes & variants.</li>
                </ul>
            </Styled.Notes>
        </Styled.Wrapper>
    );
}
