import styled from "styled-components";

/* compact helpers */
const P = (v) => `var(${v})`;

const Wrapper = styled.div`
    display: grid;
    gap: ${P("--space-6")};
    padding: ${P("--space-6")};
    max-width: 1100px;
    margin: 0 auto;
    color: ${P("--text")};
`;

const Header = styled.header`
    display: grid;
    gap: ${P("--space-4")};

    .brand h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .brand .muted {
        color: ${P("--text-muted")};
        margin-top: 6px;
    }

    .controls {
        display: grid;
        grid-template-columns: 1fr auto auto auto;
        align-items: center;
        gap: ${P("--space-4")};
        background: ${P("--card")};
        border: 1px solid ${P("--border")};
        border-radius: ${P("--radius-lg")};
        box-shadow: ${P("--shadow-sm")};
        padding: 12px;
    }

    .group {
        display: flex;
        align-items: center;
        gap: ${P("--space-4")};
        flex-wrap: wrap;
    }

    .field {
        display: grid;
        gap: 6px;
        align-items: center;
        span {
            font-size: 12px;
            color: ${P("--text-muted")};
        }
        input,
        select {
            height: 34px;
            border: 1px solid ${P("--border")};
            background: ${P("--surface")};
            color: ${P("--text")};
            border-radius: ${P("--radius-sm")};
            padding: 0 10px;
            min-width: 220px;
        }
    }

    .tags {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        align-items: center;
    }
    .tag {
        height: 30px;
        padding: 0 12px;
        border-radius: 999px;
        border: 1px solid ${P("--border")};
        background: ${P("--surface")};
        color: ${P("--text")};
        cursor: pointer;
        box-shadow: ${P("--shadow-sm")};
    }
    .tag.active {
        background: hsl(210 90% 56% / 0.15);
        border-color: hsl(210 90% 56% / 0.5);
    }
    .tag.ghost {
        opacity: 0.8;
    }

    .sep {
        width: 1px;
        height: 34px;
        background: ${P("--border")};
    }

    .actions {
        display: flex;
        gap: ${P("--space-3")};
    }
    .btn {
        height: 34px;
        padding: 0 14px;
        border-radius: ${P("--radius-md")};
        border: 1px solid ${P("--border")};
        background: ${P("--card")};
        color: ${P("--text")};
        box-shadow: ${P("--shadow-sm")};
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .btn.primary {
        background: ${P("--primary")};
        color: ${P("--primary-contrast")};
        border-color: transparent;
    }

    .count {
        display: grid;
        justify-items: end;
        gap: 6px;
    }
    .count .label {
        font-size: 12px;
        color: ${P("--text-muted")};
    }
    .count .num {
        font-family: "Antonio", ui-sans-serif, system-ui, -apple-system,
            Segoe UI, Roboto, Ubuntu;
        font-size: 28px;
        line-height: 1;
    }

    @media (width < 900px) {
        .controls {
            grid-template-columns: 1fr;
        }
        .sep {
            display: none;
        }
        .count {
            justify-items: start;
        }
    }
`;

const Stage = styled.section`
    position: relative;
    border: 1px solid ${P("--border")};
    border-radius: ${P("--radius-lg")};
    background: ${P("--card")};
    box-shadow: ${P("--shadow-md")};
    overflow: hidden;

    .empty {
        display: grid;
        place-items: center;
        padding: ${P("--space-8")};
    }
    .emptyCard {
        background: ${P("--surface")};
        border: 1px solid ${P("--border")};
        border-radius: ${P("--radius-lg")};
        padding: ${P("--space-6")};
        box-shadow: ${P("--shadow-sm")};
        text-align: center;
    }
`;

const List = styled.ul`
    list-style: none;
    padding: ${P("--space-6")};
    margin: 0;

    display: grid;
    gap: ${P("--space-4")};
    grid-template-columns: repeat(3, minmax(0, 1fr));

    @media (width < 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (width < 560px) {
        grid-template-columns: 1fr;
    }
`;

const tileShadow = `0 8px 24px hsl(0 0% 0% / .15)`;

const Notes = styled.aside`
    color: ${P("--text-muted")};
    h3 {
        color: ${P("--text")};
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
    }
`;

/* Presentational bits are scoped in Stage → List → .tile */
const GlobalItemStyles = styled.div`
    .tile {
        position: relative;
        background: linear-gradient(
                180deg,
                hsl(var(--tile-hue, 210) 80% 62% / 0.1),
                hsl(var(--tile-hue, 210) 80% 62% / 0.06)
            ),
            ${P("--surface")};
        border: 1px solid ${P("--border")};
        border-radius: ${P("--radius-lg")};
        box-shadow: ${tileShadow};
        overflow: hidden;
        will-change: transform, opacity, height;
    }

    /* Update/Add pulse ring (re-mounted via key) */
    .tile .pulse {
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: radial-gradient(
            120% 120% at 50% 50%,
            hsl(210 90% 56% / 0.25),
            transparent 60%
        );
        opacity: 0;
        animation: pulse 900ms ease-out forwards;
    }
    @keyframes pulse {
        0% {
            opacity: 0;
        }
        10% {
            opacity: 0.85;
        }
        100% {
            opacity: 0;
        }
    }

    .tile .head {
        display: grid;
        gap: 6px;
        padding: ${P("--space-4")} ${P("--space-4")} 0;
    }
    .tile .kicker {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 11px;
        color: ${P("--text-muted")};
    }
    .tile h3 {
        font-size: 18px;
    }

    .tile .desc {
        color: ${P("--text")};
        padding: 0 ${P("--space-4")};
        margin: 6px 0 ${P("--space-3")};
    }

    .tile .meta {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: end;
        gap: ${P("--space-4")};
        padding: 0 ${P("--space-4")} ${P("--space-4")};
    }

    .tile .tags {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
    }
    .tile .chip {
        height: 26px;
        padding: 0 10px;
        border-radius: 999px;
        border: 1px solid ${P("--border")};
        background: ${P("--card")};
        color: ${P("--text")};
        display: inline-flex;
        align-items: center;
    }

    .tile .right {
        display: flex;
        gap: ${P("--space-3")};
        align-items: center;
    }
    .tile .when {
        color: ${P("--text-muted")};
        font-size: 12px;
    }
    .tile .score {
        min-width: 38px;
        height: 28px;
        padding: 0 8px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: ${P("--radius-sm")};
        background: hsl(210 90% 56% / 0.15);
        color: ${P("--text")};
        border: 1px solid hsl(210 90% 56% / 0.45);
        box-shadow: ${P("--shadow-sm")};
        font-weight: 600;
    }

    /* Micro interaction */
    .tile:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 32px hsl(0 0% 0% / 0.18);
    }
`;

export const Styled = {
    Wrapper,
    Header,
    Stage,
    List,
    Notes,
    GlobalItemStyles, // optional if you want to render once near the root
};
