import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);
`;

const Header = styled.header`
    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`;

const Stage = styled.section`
    display: grid;
    gap: var(--space-6);

    .group {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-4);
    }

    .cards {
        display: grid;
        gap: var(--space-4);
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (width < 720px) {
        .cards {
            grid-template-columns: 1fr;
        }
    }

    /* Base host (button or article) */
    .rippleHost {
        --btn-fg: var(--text);
        --btn-bg: var(--surface);
        --btn-border: var(--border);
        --btn-radius: var(--radius-md);
        --btn-shadow: var(--shadow-sm);

        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;

        min-height: 36px;
        padding: 10px 14px;
        gap: 8px;

        border-radius: var(--btn-radius);
        border: 1px solid var(--btn-border);
        background: var(--btn-bg);
        color: var(--btn-fg);
        box-shadow: var(--btn-shadow);
        cursor: pointer;
        user-select: none;
        text-align: left;
        outline: none;
        overflow: hidden; /* clip ripple */
        transition: transform 120ms ease, box-shadow 120ms ease,
            background-color 120ms ease;
    }
    .rippleHost.button {
        display: inline-flex;
    }
    .rippleHost[role="button"] {
        display: block;
    } /* card hosts */
    .rippleHost:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    /* Variants tune foreground/background and ripple color */
    .rippleHost.contained {
        --btn-bg: var(--primary);
        --btn-fg: var(--primary-contrast);
        --btn-border: transparent;
        --ripple: hsl(0 0% 100% / 0.5);
    }
    .rippleHost.surface {
        --btn-bg: var(--card);
        --btn-fg: var(--text);
        --btn-border: var(--border);
        --ripple: hsl(210 90% 56% / 0.35);
    }
    .rippleHost.outline {
        --btn-bg: transparent;
        --btn-fg: var(--text);
        --btn-border: var(--border);
        --ripple: hsl(210 90% 56% / 0.33);
        backdrop-filter: saturate(1.1);
    }
    .rippleHost.ghost {
        --btn-bg: var(--surface);
        --btn-fg: var(--text);
        --btn-border: transparent;
        --ripple: hsl(210 90% 56% / 0.32);
    }

    .rippleHost .label {
        position: relative;
        z-index: 2;
    }

    .rippleHost:focus-visible {
        box-shadow: var(--shadow-sm), var(--focus-ring);
    }
    @media (hover: hover) {
        .rippleHost:hover {
            transform: translateY(-1px);
        }
        .rippleHost:active {
            transform: translateY(0);
        }
    }

    /* Ripple plane sits under label but above background */
    .rippleLayer {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 1;
        border-radius: inherit;
        overflow: hidden;
    }
    .ripple {
        position: absolute;
        border-radius: 999px;
        background: var(--ripple);
        mix-blend-mode: screen; /* makes it pop on dark surfaces */
        will-change: transform, opacity;
        transform: translateZ(0);
    }

    /* Card styling */
    .card {
        display: grid;
        gap: var(--space-3);
        padding: var(--space-6);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        min-height: 140px;
    }
    .card header {
        margin-bottom: var(--space-2);
    }
    .card .muted {
        color: var(--text-muted);
    }
    .card .meta {
        color: var(--text-muted);
    }
    .icon {
        line-height: 1;
    }
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
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

export const Styled = { Wrapper, Header, Stage, Notes };
