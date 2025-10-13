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
    `,

    Controls: styled.div`
        display: flex;
        align-items: center;
        gap: var(--space-4);
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        padding: 10px 12px;
        box-shadow: var(--shadow-sm);

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
            min-width: 36px;
            text-align: right;
        }

        .btn {
            height: 34px;
            padding: 0 12px;
            border-radius: var(--radius-sm);
            border: 1px solid var(--border);
            background: var(--primary);
            color: var(--primary-contrast);
            box-shadow: var(--shadow-sm);
            cursor: pointer;
            white-space: nowrap;
        }
    `,

    Stage: styled.section`
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

        .grid {
            display: grid;
            gap: var(--space-4);
            padding: var(--space-6);
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        @media (width < 1100px) {
            .grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        @media (width < 800px) {
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
            padding: var(--space-4);
            box-shadow: var(--shadow-sm);
            color: var(--text);
            will-change: transform, opacity;
            transition: box-shadow 160ms ease, border-color 160ms ease;
        }
        .card:hover {
            box-shadow: var(--shadow-md);
            border-color: color-mix(
                in oklab,
                var(--border),
                var(--primary) 35%
            );
        }

        .cardHead {
            display: grid;
            gap: 6px;
            margin-bottom: var(--space-3);
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

        .blurb {
            color: var(--text);
            margin-bottom: var(--space-3);
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .tag {
            font-size: 12px;
            padding: 2px 8px;
            border-radius: var(--radius-sm);
            background: var(--surface);
            border: 1px solid var(--border);
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
