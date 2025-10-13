import styled from "styled-components";

/* Tokens: var(--bg), --surface, --card, --text, --text-muted, --primary, --primary-contrast, --border, shadows, radius */

export const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);

    @media (width < 560px) {
        padding: var(--space-4);
    }
`;

export const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-4);
    justify-content: space-between;
`;

export const Heading = styled.div`
    h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`;

export const Controls = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: var(--space-4);
    align-items: center;

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
`;

export const Stage = styled.section`
    position: relative;
    isolation: isolate;
    min-height: 320px;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: radial-gradient(
            900px 220px at 10% 0%,
            hsl(210 90% 60% / 0.08),
            transparent 60%
        ),
        var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    .page {
        position: relative;
        z-index: 1;
        padding: var(--space-6);
        height: 100%;
        display: grid;
    }

    .card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        padding: var(--space-6);
        height: 100%;
        overflow: auto;
    }

    .head {
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

    @media (width < 560px) {
        .page {
            padding: var(--space-4);
        }
        .card {
            padding: var(--space-4);
        }
    }
`;

export const Overlay = styled.div`
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none; /* keep UI responsive, we disable buttons while animating */

    .half {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 50%;
        will-change: transform, opacity;
        backface-visibility: hidden;
        transform: translateZ(0);

        /* Brand gradient so it feels “physical” */
        background: linear-gradient(135deg, hsl(210 90% 56%), hsl(210 90% 62%));
        box-shadow: 0 0 0 1px hsl(0 0% 100% / 0.05) inset;
    }

    .left {
        left: 0;
        border-right: 1px solid var(--border);
    }
    .right {
        right: 0;
        border-left: 1px solid var(--border);
    }

    .seam {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 1px;
        transform: translateX(-0.5px);
        background: hsl(0 0% 0% / 0.25);
        mix-blend-mode: multiply;
        pointer-events: none;
    }
`;

export const Notes = styled.aside`
    color: var(--text-muted);
    ul {
        padding-left: 18px;
    }
`;
