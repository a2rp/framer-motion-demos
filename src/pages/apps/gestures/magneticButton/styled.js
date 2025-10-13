import styled from "styled-components";

const BTN_H = "58px";
const BTN_PAD_X = "30px";
const RADIUS = "999px";

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1100px;
    margin: 0 auto;
    color: var(--text);

    /* Mode-specific subtle tints */
    &[data-mode="aurora"] {
        --mb-accent: var(--primary);
    }
    &[data-mode="neon"] {
        --mb-accent: hsl(290 90% 60%);
    }
    &[data-mode="minimal"] {
        --mb-accent: hsl(210 16% 60%);
    }
`;

const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-4);
    justify-content: space-between;

    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }

    .controls {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        flex-wrap: wrap;
    }

    .ctrl {
        display: grid;
        align-items: center;
        gap: 6px;
    }
    .ctrl.inline {
        grid-template-columns: auto auto;
        column-gap: 8px;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .ctrl select {
        min-width: 140px;
        height: 34px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        padding: 0 8px;
    }
    .ctrl input[type="range"] {
        width: 160px;
        accent-color: var(--mb-accent);
    }
    .ctrl em {
        font-style: normal;
        font-size: 12px;
        color: var(--text-muted);
    }
`;

const Stage = styled.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    padding: clamp(var(--space-6), 6vw, 120px);
    display: grid;
    place-items: center;

    /* faint noise */
    &::after {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        mix-blend-mode: soft-light;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.02'/%3E%3C/svg%3E");
    }
`;

const MagnetZone = styled.div`
    position: relative;
    width: min(680px, 92vw);
    height: 300px;
    display: grid;
    place-items: center;
    isolation: isolate;
    perspective: 900px;

    /* Aurora background layer */
    .aurora {
        position: absolute;
        inset: -20%;
        background: radial-gradient(
                1000px 600px at 10% -10%,
                hsl(210 90% 56% / 0.15),
                transparent 60%
            ),
            radial-gradient(
                1000px 800px at 110% -10%,
                hsl(290 90% 62% / 0.12),
                transparent 60%
            ),
            radial-gradient(
                1200px 800px at 50% 110%,
                hsl(140 90% 52% / 0.09),
                transparent 60%
            );
        filter: blur(22px);
        opacity: 0.8;
        pointer-events: none;
        transition: background-position 0.08s linear; /* updated via framer */
        z-index: 0;
    }

    /* Spotlight that follows pointer */
    .spotlight {
        position: absolute;
        width: 300px;
        height: 300px;
        border-radius: 999px;
        background: radial-gradient(
            closest-side,
            color-mix(in oklab, var(--mb-accent), white 10%) 0%,
            transparent 62%
        );
        filter: blur(22px);
        mix-blend-mode: screen;
        pointer-events: none;
        z-index: 1;
    }

    /* Sparkles orbit container */
    .sparkles {
        position: absolute;
        inset: 0;
        z-index: 2;
        pointer-events: none;
    }
    .sp {
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 999px;
        background: color-mix(in oklab, var(--mb-accent), white 22%);
        filter: drop-shadow(
            0 0 6px color-mix(in oklab, var(--mb-accent), white 35%)
        );
        animation: spin 16s linear infinite;
        opacity: 0.9;
    }
    /* Distribute sparkles on concentric rings with phase offsets */
    ${Array.from({ length: 12 })
        .map((_, i) => {
            const ring = i % 3; // 0,1,2
            const r = [80, 110, 140][ring];
            const dur = [16, 22, 28][ring];
            const size = [6, 5, 4][ring];
            const delay = -(i * 1.2);
            return `
      .s${i + 1} {
        width: ${size}px; height: ${size}px;
        transform-origin: center;
        left: calc(50% - ${size / 2}px); top: calc(50% - ${size / 2}px);
        animation-duration: ${dur}s; animation-delay: ${delay}s;
      }
      .s${i + 1}::before {
        content:""; position:absolute; inset:0; border-radius:inherit;
        transform: translate(${r}px, 0);
      }
    `;
        })
        .join("\n")}

    @keyframes spin {
        to {
            transform: rotate(1turn);
        }
    }

    /* Trailing ghosts */
    .ghost {
        position: absolute;
        width: 180px;
        height: 180px;
        border-radius: 999px;
        filter: blur(28px);
        mix-blend-mode: screen;
        pointer-events: none;
        background: radial-gradient(
            closest-side,
            color-mix(in oklab, var(--mb-accent), white 14%),
            transparent 70%
        );
        z-index: 1;
    }
    .g1 {
        width: 200px;
        height: 200px;
    }
    .g2 {
        width: 160px;
        height: 160px;
    }

    /* Button */
    .magnetBtn {
        position: relative;
        z-index: 3;
        height: ${BTN_H};
        padding: 0 ${BTN_PAD_X};
        border-radius: ${RADIUS};
        border: 1px solid color-mix(in oklab, var(--mb-accent), black 35%);
        color: var(--text);
        cursor: pointer;
        outline: none;
        transform-style: preserve-3d;
        will-change: transform;

        /* Glass base */
        background: linear-gradient(
                180deg,
                color-mix(in oklab, var(--card), white 6%),
                color-mix(in oklab, var(--card), black 8%)
            ),
            radial-gradient(
                120% 200% at 30% 0%,
                color-mix(in oklab, var(--mb-accent), white 18%) 0%,
                transparent 60%
            );
        box-shadow: 0 18px 50px hsl(0 0% 0% / 0.35),
            inset 0 1px 0 hsl(0 0% 100% / 0.35),
            inset 0 -1px 0 hsl(0 0% 0% / 0.25);

        display: inline-grid;
        place-items: center;

        &:focus-visible {
            box-shadow: 0 0 0 4px
                    color-mix(in oklab, var(--mb-accent), transparent 70%),
                0 18px 50px hsl(0 0% 0% / 0.35),
                inset 0 1px 0 hsl(0 0% 100% / 0.35),
                inset 0 -1px 0 hsl(0 0% 0% / 0.25);
        }

        @media (hover: hover) {
            &:hover {
                filter: saturate(1.04);
            }
        }

        .label {
            font-weight: 700;
            letter-spacing: 0.02em;
            color: color-mix(in oklab, var(--primary-contrast), white 12%);
            text-shadow: 0 1px 0 hsl(0 0% 0% / 0.25);
            transform: translateZ(32px);
        }

        /* Neon charge ring */
        .ring {
            position: absolute;
            inset: -3px;
            border-radius: ${RADIUS};
            box-shadow: 0 0 0 2px
                    color-mix(in oklab, var(--mb-accent), white 10%) inset,
                0 0 24px color-mix(in oklab, var(--mb-accent), white 15%),
                0 0 48px color-mix(in oklab, var(--mb-accent), white 8%);
            filter: saturate(1.2);
            pointer-events: none;
        }

        /* Moving highlight */
        .shine {
            position: absolute;
            inset: -6px -10px -10px -6px;
            border-radius: ${RADIUS};
            background: radial-gradient(
                    260px 120px at 18% -10%,
                    hsl(0 0% 100% / 0.16),
                    transparent 60%
                ),
                radial-gradient(
                    220px 140px at 82% -20%,
                    hsl(0 0% 100% / 0.1),
                    transparent 60%
                );
            mix-blend-mode: screen;
            pointer-events: none;
            transform: translateZ(40px);
        }

        /* Ripple */
        .ripple {
            position: absolute;
            width: 24px;
            height: 24px;
            border-radius: 999px;
            background: color-mix(in oklab, var(--mb-accent), white 10%);
            mix-blend-mode: screen;
            pointer-events: none;
            will-change: transform, opacity;
            transform: translateZ(50px);
        }
    }
`;

const Notes = styled.aside`
    color: var(--text-muted);
    h3 {
        color: var(--text);
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
    }
`;

export const Styled = { Wrapper, Header, Stage, MagnetZone, Notes };
