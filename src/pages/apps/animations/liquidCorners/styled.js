import styled from "styled-components";

/* Shared UI tokens via CSS variables already present globally */

export const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);
`;

export const Header = styled.header`
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
`;

export const Controls = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto auto auto;
    gap: var(--space-4);
    align-items: center;

    .spacer {
        width: 12px;
    }

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 8px 14px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }

    .dots {
        display: flex;
        justify-content: center;
        gap: 8px;
    }
    .dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: var(--border);
    }
    .dot.active {
        background: var(--primary);
    }

    .ctrl {
        display: grid;
        gap: 6px;
        align-items: center;
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
        font-style: normal;
        color: var(--text-muted);
        font-size: 12px;
        padding-left: 6px;
    }

    .ctrl.toggle {
        grid-auto-flow: column;
        grid-auto-columns: max-content;
        gap: 8px;
        align-items: center;

        input {
            width: 16px;
            height: 16px;
        }
        span {
            color: var(--text);
            font-size: 14px;
        }
    }
`;

export const Stage = styled.section`
    position: relative;
    isolation: isolate;
    min-height: 320px;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: radial-gradient(
            900px 240px at 12% 0%,
            hsl(210 90% 60% / 0.08),
            transparent 60%
        ),
        var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    .bg {
        position: absolute;
        inset: 0;
        z-index: 1;
        pointer-events: none;
    }
    .glow {
        position: absolute;
        filter: blur(28px);
        opacity: 0.16;
    }
    .glow.g1 {
        width: 220px;
        height: 220px;
        left: -40px;
        top: -60px;
        background: hsl(210 90% 60%);
    }
    .glow.g2 {
        width: 200px;
        height: 200px;
        right: -60px;
        bottom: -40px;
        background: hsl(210 90% 62%);
    }

    .card {
        position: absolute;
        inset: 0;
        z-index: 2;
        display: grid;
        place-items: center;
        padding: var(--space-6);
    }

    .shape {
        width: min(100%, 780px);
        min-height: 230px;
        background: var(--surface);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-md);
        /* Corners are animated individually from React (borderTopLeftRadius, etc.) */
        border-radius: 16px;
        padding: var(--space-6);
        will-change: transform, opacity, border-radius;
    }

    .content {
        height: 100%;
        overflow: auto;
    }

    .cardHead {
        display: grid;
        gap: 6px;
        margin-bottom: var(--space-4);
    }
    .kicker {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 11px;
        color: var(--text-muted);
    }
    h2 {
        font-size: 22px;
    }

    .body {
        margin-bottom: var(--space-4);
        color: var(--text);
    }
    .bullets {
        margin-left: 18px;
        display: grid;
        gap: 6px;
        color: var(--text);
    }
`;

export const Notes = styled.aside`
    color: var(--text-muted);
    ul {
        padding-left: 18px;
    }
`;

/* Responsive tweaks */
export const _ = styled.span``; // no-op export to keep file as module if needed
