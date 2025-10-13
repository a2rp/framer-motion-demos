import styled from "styled-components";

/* Grid & spacing tokens come from your global CSS variables */

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1200px;
    margin: 0 auto;
    color: var(--text);

    /* density affects card padding */
    --pad-card: calc(var(--space-4) * 1);
    &[data-density="compact"] {
        --pad-card: 10px;
    }
`;

const Header = styled.header`
    display: grid;
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
        flex-wrap: wrap;
        gap: var(--space-4);
        align-items: center;
        background: radial-gradient(
                900px 160px at 0% 0%,
                hsl(210 90% 60% / 0.1),
                transparent 60%
            ),
            var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        padding: 10px 12px;
        box-shadow: var(--shadow-sm);
    }

    .searchBox {
        position: relative;
        width: clamp(220px, 28vw, 360px);
    }
    .searchBox input {
        width: 100%;
        height: 34px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 34px 0 12px;
        outline: none;
    }
    .searchBox .x {
        position: absolute;
        right: 6px;
        top: 0;
        height: 34px;
        width: 24px;
        display: grid;
        place-items: center;
        border: 0;
        background: transparent;
        color: var(--text-muted);
        cursor: pointer;
    }

    .chipRow {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
    }
    .chip {
        position: relative;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: 999px;
        padding: 6px 12px;
        cursor: pointer;
        box-shadow: var(--shadow-sm);
        transition: transform 0.15s ease, background 0.15s ease;
    }
    .chip.active {
        background: linear-gradient(
                0deg,
                hsl(210 90% 56% / 0.18),
                hsl(210 90% 56% / 0.1)
            ),
            var(--surface);
        border-color: hsl(210 90% 56% / 0.65);
    }
    .chip .dot {
        position: absolute;
        right: 6px;
        top: 6px;
        width: 6px;
        height: 6px;
        border-radius: 99px;
        background: var(--primary);
    }

    .ctrl {
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        column-gap: 8px;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .ctrl select {
        min-width: 160px;
        height: 34px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 8px;
    }

    .sep {
        width: 1px;
        height: 34px;
        background: var(--border);
    }

    .btn {
        height: 34px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn.clear {
        background: hsl(0 90% 60% / 0.12);
        border-color: hsl(0 90% 60% / 0.35);
    }
`;

const MetaRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--space-3);

    .result {
        display: inline-flex;
        align-items: center;
        gap: 10px;
    }
    .result span {
        color: var(--text-muted);
    }
    .countBadge {
        min-width: 30px;
        height: 26px;
        padding: 0 8px;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: var(--surface);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        color: var(--text);
        font-weight: 600;
    }

    .summary {
        color: var(--text-muted);
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
    }
    .summary .tag {
        background: var(--surface);
        border: 1px solid var(--border);
        color: var(--text);
        padding: 2px 8px;
        border-radius: 999px;
    }
    .summary .pill {
        cursor: pointer;
    }
`;

const Stage = styled.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: radial-gradient(
            1200px 220px at 8% -10%,
            hsl(210 90% 60% / 0.1),
            transparent 60%
        ),
        var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    padding: var(--space-6);

    .grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: var(--space-4);
        align-items: start;
    }

    .card {
        background: radial-gradient(
                400px 120px at 0% 0%,
                hsl(var(--tint-h, 210) 80% 58% / 0.14),
                transparent 60%
            ),
            var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        color: var(--text);
        overflow: hidden;
        will-change: transform, opacity, filter;
    }
    .inner {
        padding: var(--pad-card);
        display: grid;
        gap: 10px;
    }

    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }
    .title {
        display: grid;
        gap: 4px;
    }
    .kicker {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 10px;
        color: var(--text-muted);
    }
    h3 {
        font-size: 18px;
    }

    .price {
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: 999px;
        padding: 2px 10px;
        font-weight: 600;
        box-shadow: var(--shadow-sm);
        min-width: 64px;
        text-align: center;
    }

    .desc {
        color: var(--text);
        opacity: 0.9;
    }

    .foot {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }
    .cats {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
    }
    .cat {
        background: var(--card);
        border: 1px solid var(--border);
        color: var(--text);
        border-radius: 6px;
        padding: 2px 8px;
        font-size: 12px;
        cursor: pointer;
    }

    .rating {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: var(--text-muted);
    }
    .stars {
        font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
            "Helvetica Neue", Arial;
        letter-spacing: 2px;
        background: linear-gradient(
            90deg,
            var(--primary) var(--p, 0%),
            var(--border) var(--p, 0%)
        );
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
    .empty {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        text-align: center;
        gap: 8px;
        color: var(--text-muted);
        background: linear-gradient(180deg, transparent, hsl(0 0% 0% / 0.02));
    }
    .empty .bubble {
        width: 48px;
        height: 48px;
        border-radius: 24px;
        display: grid;
        place-items: center;
        background: var(--surface);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        font-size: 24px;
    }

    @media (width < 560px) {
        padding: var(--space-4);
    }
`;

export const Styled = { Wrapper, Header, MetaRow, Stage };
