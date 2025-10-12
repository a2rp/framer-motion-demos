/**
 * Make a pages array with at least `min` items by cycling given templates.
 * - Ensures unique `id`s.
 * - If it needs to repeat, it suffixes the title ("Title 2", "Title 3", ...).
 * - Keeps everything else intact (body, bullets, etc.).
 */
export function makePages(templates = [], min = 5) {
    const src =
        Array.isArray(templates) && templates.length
            ? templates
            : DEFAULT_TEMPLATES;

    const need = Math.max(min, src.length);

    return Array.from({ length: need }, (_, i) => {
        const base = src[i % src.length];
        const repeatIndex = Math.floor(i / src.length); // 0 for originals, 1+ for repeats
        const idSeed = base.id || base.key || "p";
        const title =
            repeatIndex === 0 ? base.title : `${base.title} ${repeatIndex + 1}`;
        return {
            ...base,
            id: `${idSeed}-${i + 1}`, // unique id
            title,
        };
    });
}

/* A tiny default set if a demo forgets to pass templates */
export const DEFAULT_TEMPLATES = [
    {
        key: "overview",
        title: "Overview",
        body: "A compact intro page. Replace with your own demo content. This default exists so the gallery still works.",
        bullets: [
            "Tokens for theming",
            "Framer Motion primitives",
            "Accessible by default",
        ],
    },
    {
        key: "design",
        title: "Design Notes",
        body: "Guidelines on when/why to use this pattern. Keep values small; subtle motion feels premium.",
        bullets: ["Scale < 1.0 only", "Tiny offsets", "Short durations"],
    },
    {
        key: "impl",
        title: "Implementation",
        body: "How the animation is wired under the hood. Variants, AnimatePresence, layoutId where needed.",
        bullets: [
            "Only transforms/opacity",
            "Mode 'wait' if flicker",
            "Minimize reflow",
        ],
    },
    {
        key: "a11y",
        title: "Accessibility",
        body: "Prefer respecting reduced motion. For demo pages you may override to showcase the effect.",
        bullets: ["MotionConfig", "Prefers-reduced-motion", "Focus states"],
    },
    {
        key: "perf",
        title: "Performance",
        body: "Avoid heavy filters; keep layers simple; use will-change sparingly.",
        bullets: ["GPU-friendly", "No layout thrash", "Short timelines"],
    },
];
