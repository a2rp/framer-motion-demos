import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 900px;
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
    gap: var(--space-4);

    .copyRow {
        position: relative;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        overflow: hidden; /* keeps row flash constrained */
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: stretch;
    }

    /* Flash overlay */
    .flash {
        position: absolute;
        inset: 0;
        transform-origin: left center;
        background: linear-gradient(
                0deg,
                hsl(210 90% 56% / 0.12),
                hsl(210 90% 56% / 0.04)
            ),
            var(--surface);
        border-right: 1px solid hsl(210 90% 56% / 0.35);
        pointer-events: none;
        will-change: transform, opacity;
    }

    .code {
        margin: 0;
        padding: var(--space-6) var(--space-6);
        background: var(--card);
        color: var(--text);
        white-space: pre-wrap;
        line-height: 1.6;
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
        tab-size: 2;
    }

    .copyBtn {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        margin: var(--space-6);
        padding: 0 14px;
        height: 36px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;

        /* 👇 allow the pulse ring to render outside the button bounds */
        overflow: visible;
        isolation: isolate; /* isolate stacking so z-index works predictably */

        /* keep content above the pulse */
        .icon,
        .label {
            position: relative;
            z-index: 1;
        }
    }

    /* Pulse ring (success) — sits behind content, expands out */
    .pulse {
        position: absolute;
        inset: -4px; /* a little larger than the button */
        border-radius: calc(var(--radius-md) + 4px);
        pointer-events: none;
        z-index: 0;
        will-change: transform, opacity;

        /* visible both in light and dark; double shadow makes it read well */
        box-shadow: 0 0 0 3px hsl(210 90% 56% / 0.35),
            0 0 0 8px hsl(210 90% 56% / 0.18);
    }

    .copyBtn .icon {
        display: inline-grid;
        place-items: center;
    }
    .copyBtn .label {
        font-weight: 600;
        letter-spacing: 0.2px;
    }

    .tips {
        color: var(--text-muted);
        border-left: 4px solid var(--border);
        padding-left: var(--space-4);
    }

    .sr {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        white-space: nowrap;
    }
`;

export const Styled = { Wrapper, Header, Stage };
