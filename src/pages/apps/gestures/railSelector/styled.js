import styled from "styled-components";

/* Sizes */
const HEIGHT = 52;
const THUMB = 28;

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    flex-wrap: wrap;

    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }

    .pill {
        height: 36px;
        display: inline-grid;
        place-items: center;
        padding: 0 14px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: linear-gradient(
                90deg,
                hsl(var(--h, 210) 90% 60% / 0.18),
                transparent 60%
            ),
            var(--card);
        box-shadow: var(--shadow-sm);
    }
    .pill .k {
        font-weight: 600;
        letter-spacing: 0.02em;
    }
`;

const Stage = styled.section`
    display: grid;
    gap: var(--space-6);
`;

const Slider = styled.div`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 18px;
    background: var(--card);
    box-shadow: var(--shadow-md);

    &:focus-visible {
        outline: none;
        box-shadow: var(--shadow-md), var(--focus-ring);
    }

    .rail {
        position: relative;
        height: ${HEIGHT}px;
        border-radius: ${HEIGHT / 2}px;
        background: linear-gradient(
                180deg,
                hsl(0 0% 100% / 0.04),
                hsl(0 0% 0% / 0.05)
            ),
            var(--surface);
        border: 1px solid var(--border);
        box-shadow: inset 0 1px 0 hsl(0 0% 100% / 0.04);
        overflow: hidden;
        cursor: pointer;
        isolation: isolate;
    }

    .fill {
        position: absolute;
        inset: 0 auto 0 0;
        width: 100%;
        transform: scaleX(0);
        background: radial-gradient(
                600px 120px at 0% 0%,
                hsl(210 90% 60% / 0.14),
                transparent 60%
            ),
            linear-gradient(90deg, hsl(210 90% 56%), hsl(280 90% 62%));
        mix-blend-mode: plus-lighter;
        will-change: transform, filter;
        pointer-events: none;
    }

    .ticks {
        position: absolute;
        inset: 0;
        pointer-events: none;
    }
    .tick {
        --w: 6px;
        pointer-events: auto;
        position: absolute;
        top: 50%;
        translate: calc(-0.5 * var(--w)) -50%;
        width: var(--w);
        height: 14px;
        border-radius: 999px;
        background: hsl(0 0% 100% / 0.18);
        border: 0;
        cursor: pointer;
        transition: transform 0.15s ease, background 0.15s ease;
    }
    .tick.active {
        height: 18px;
        background: hsl(0 0% 100% / 0.34);
        transform: translateY(-50%) scale(1.15);
    }
    .tick:hover {
        background: hsl(0 0% 100% / 0.5);
    }

    .ripple {
        position: absolute;
        top: 50%;
        translate: -50% -50%;
        width: ${HEIGHT}px;
        height: ${HEIGHT}px;
        border-radius: 999px;
        pointer-events: none;
        background: radial-gradient(
            circle,
            hsl(210 90% 60% / 0.35),
            transparent 55%
        );
        mix-blend-mode: screen;
    }

    .thumb {
        position: absolute;
        top: 50%;
        translate: -50% -50%;
        width: ${THUMB}px;
        height: ${THUMB}px;
        border-radius: 999px;
        background: var(--card);
        border: 1px solid var(--border);
        box-shadow: 0 6px 22px hsl(0 0% 0% / 0.22),
            inset 0 1px 0 hsl(0 0% 100% / 0.06);
        display: grid;
        place-items: center;
        cursor: grab;
        will-change: transform;
    }
    .thumb.dragging {
        cursor: grabbing;
    }

    .thumb .glow {
        position: absolute;
        inset: -18px;
        border-radius: 999px;
        pointer-events: none;
        background: radial-gradient(
            circle,
            hsl(var(--h, 210) 90% 60% / 0.18),
            transparent 60%
        );
        filter: blur(8px);
    }

    .thumb .tooltip {
        position: absolute;
        top: -36px;
        left: 50%;
        translate: -50% 0;
        padding: 6px 10px;
        border-radius: 10px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.02em;
        color: var(--primary-contrast);
        background: linear-gradient(
            180deg,
            hsl(var(--h, 210) 90% 60% / 0.95),
            hsl(var(--h, 210) 90% 56% / 0.95)
        );
        box-shadow: var(--shadow-sm);
        white-space: nowrap;
        pointer-events: none;
    }
`;

const Preview = styled.article`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: radial-gradient(
            1000px 200px at 10% 0%,
            var(--h) / 0.1,
            transparent 60%
        ),
        var(--card);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);

    header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 8px;
    }
    .badge {
        display: inline-grid;
        place-items: center;
        height: 28px;
        padding: 0 10px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 600;
        color: var(--primary-contrast);
        background: var(--h);
        box-shadow: var(--shadow-sm);
    }

    h2 {
        font-size: 20px;
    }
    p {
        color: var(--text);
        margin: 8px 0 10px;
    }
    ul {
        color: var(--text-muted);
        padding-left: 18px;
    }
`;

export const Styled = { Wrapper, Header, Stage, Slider, Preview };
