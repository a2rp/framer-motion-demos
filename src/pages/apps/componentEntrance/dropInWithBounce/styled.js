import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: grid;
        gap: var(--space-6);
        padding: var(--space-6);
        max-width: 1080px;
        margin: 0 auto;
        color: var(--text);
    `,

    Header: styled.header`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--space-4);
        justify-content: space-between;
    `,

    Heading: styled.div`
        h1 {
            font-size: 24px;
            line-height: 1.2;
        }
        .muted {
            color: var(--text-muted);
            margin-top: 6px;
        }
    `,

    Controls: styled.div`
        display: grid;
        grid-template-columns: auto 1fr auto auto;
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
        .btn.ghost {
            background: var(--surface);
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
    `,

    Stage: styled.section`
        position: relative;
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
        padding: var(--space-6);

        .grid {
            display: grid;
            gap: var(--space-4);
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        @media (width < 1000px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (width < 560px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }

        .cell {
            list-style: none;
        }

        .card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: var(--space-4);
            min-height: 120px;
            display: grid;
            align-content: start;
            gap: 8px;
        }
        .cardHead {
            display: grid;
            gap: 4px;
        }
        .kicker {
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-size: 11px;
            color: var(--text-muted);
        }
        h3 {
            font-size: 18px;
        }
        .body {
            color: var(--text);
        }
    `,

    Notes: styled.aside`
        color: var(--text-muted);
        h3 {
            color: var(--text);
            margin-bottom: 6px;
        }
        ul {
            padding-left: 18px;
        }
    `,
};
