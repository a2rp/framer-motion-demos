import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: grid;
        gap: var(--space-6);
        padding: var(--space-6);
        max-width: 820px;
        margin: 0 auto;
        color: var(--text);
    `,

    Header: styled.header`
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

        .meta {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--text-muted);
        }
        .meta .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--primary);
        }
    `,

    Stage: styled.section`
        position: relative;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        overflow: hidden;

        /* Indicator pinned to top; we also translate it with the same MotionValue "y" */
        .ptr-indicator {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 80px; /* space revealed while pulling */
            display: grid;
            place-items: center;
            z-index: 2;
            pointer-events: none;
            color: var(--text);
            background: radial-gradient(
                    900px 220px at 10% 0%,
                    hsl(210 90% 60% / 0.06),
                    transparent 60%
                ),
                var(--card);
            border-bottom: 1px dashed var(--border);
        }

        .ring {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--surface);
            border: 1px solid var(--border);
            box-shadow: var(--shadow-sm);
        }
        .ring svg {
            display: block;
        }
        .ring .track {
            fill: none;
            stroke: var(--border);
            stroke-width: 3;
        }
        .ring .prog {
            fill: none;
            stroke: var(--primary);
            stroke-width: 3;
            stroke-linecap: round;
            transform: rotate(-90deg);
            transform-origin: 16px 16px;
        }
        /* Spinner when refreshing */
        .ring.refreshing .prog {
            stroke-dasharray: 18 18;
            animation: spin 0.9s linear infinite;
        }
        @keyframes spin {
            to {
                transform: rotate(270deg);
            }
        }

        .ring .label {
            font-size: 12px;
            color: var(--text);
        }

        .done {
            margin-top: 6px;
            font-size: 12px;
            color: var(--text-muted);
        }

        /* Draggable sheet that contains the list */
        .ptr-sheet {
            position: relative;
            z-index: 1;
            will-change: transform;
            background: transparent; /* content cards handle their own surfaces */
        }

        .list {
            display: grid;
            gap: var(--space-4);
            padding: 90px var(--space-6) var(--space-6); /* top padding leaves room for indicator */
            list-style: none;
        }

        .row {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: var(--space-4);
            align-items: start;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            padding: var(--space-4);
            box-shadow: var(--shadow-sm);
        }

        .pill {
            padding: 4px 10px;
            border-radius: 999px;
            background: var(--primary);
            color: var(--primary-contrast);
            font-size: 12px;
            align-self: start;
        }

        .text h3 {
            font-size: 16px;
            margin-bottom: 6px;
        }
        .text p {
            color: var(--text-muted);
        }
    `,

    Notes: styled.aside`
        color: var(--text-muted);
        ul {
            padding-left: 18px;
        }
    `,
};
