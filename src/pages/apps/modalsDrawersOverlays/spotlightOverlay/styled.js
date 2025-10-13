import styled from "styled-components";

/* Tokens used from your global CSS variables */
const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1100px;
    margin: 0 auto;
    color: var(--text);
`;

const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);

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

    .switch {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        input {
            accent-color: var(--primary);
            width: 18px;
            height: 18px;
        }
    }

    .ctrl {
        display: grid;
        align-items: center;
        gap: 6px;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .ctrl input[type="range"] {
        width: 160px;
        accent-color: var(--primary);
    }
    .ctrl em {
        font-size: 12px;
        color: var(--text-muted);
    }

    .btn {
        height: 34px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.ghost {
        background: var(--card);
    }
`;

const Stage = styled.section`
    position: relative;
    isolation: isolate;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    min-height: 420px;

    .grid {
        display: grid;
        gap: var(--space-4);
        padding: var(--space-6);
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (width < 900px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (width < 560px) {
        .grid {
            grid-template-columns: 1fr;
            padding: var(--space-4);
        }
    }

    .card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        padding: var(--space-4);
        display: grid;
        gap: var(--space-3);
    }
    .card h3 {
        font-size: 18px;
    }
    .card .body {
        color: var(--text-muted);
    }
    .card .actions {
        margin-top: 4px;
    }
    .card .btn {
        height: 32px;
        padding: 0 12px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }

    /* Spotlight layer
     We support two strategies:
     - mask (preferred on Safari/Chromium)
     - gradient fallback using transparency
  */
    .spotLayer {
        position: absolute;
        inset: 0;
        z-index: 3;
        pointer-events: none;
        will-change: transform, opacity;
        /* Custom props expected:
       --x (px), --y (px), --r (px), --f (px), --dim (0..1)
    */
    }

    /* Preferred: mask image punches a hole through the dark layer */
    .spotLayer.use-mask {
        background: hsl(0 0% 0% / var(--dim));
        -webkit-mask-image: radial-gradient(
            circle at var(--x) var(--y),
            transparent 0,
            transparent calc(var(--r) - var(--f)),
            black calc(var(--r) + var(--f)),
            black 100%
        );
        mask-image: radial-gradient(
            circle at var(--x) var(--y),
            transparent 0,
            transparent calc(var(--r) - var(--f)),
            black calc(var(--r) + var(--f)),
            black 100%
        );
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
    }

    /* Fallback: draw a radial gradient that is transparent inside and dark outside */
    .spotLayer.use-gradient {
        background: radial-gradient(
            circle at var(--x) var(--y),
            transparent 0,
            transparent calc(var(--r) - var(--f)),
            hsl(0 0% 0% / var(--dim)) calc(var(--r) + var(--f)),
            hsl(0 0% 0% / var(--dim)) 100%
        );
    }

    /* Subtle ring (premium vibe) */
    .ring {
        position: absolute;
        z-index: 4;
        pointer-events: none;
        border-radius: 999px;
        border: 1.5px solid hsl(210 90% 56% / 0.65);
        box-shadow: 0 0 0 1px hsl(210 90% 56% / 0.18),
            0 10px 30px hsl(0 0% 0% / 0.18);
        will-change: transform;
    }

    /* Modal (self-made) */
    .modalOverlay {
        position: fixed;
        inset: 0;
        z-index: 50;
        backdrop-filter: blur(6px) saturate(1.2);
        background: hsl(0 0% 0% / 0.35);
        display: grid;
        place-items: center;
    }
    .modal {
        width: min(560px, 92vw);
        background: var(--card);
        color: var(--text);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        display: grid;
        gap: var(--space-4);
        padding: var(--space-6);
    }
    .modalHead h2 {
        font-size: 20px;
    }
    .modalBody ul {
        padding-left: 18px;
        color: var(--text);
    }
    .modalFoot {
        display: flex;
        justify-content: flex-end;
    }
    .modalFoot .btn {
        height: 34px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
`;

export const Styled = { Wrapper, Header, Stage };
