import styled from "styled-components";

const GAP = "var(--space-4)";
const COL_MIN = "220px";

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
    gap: var(--space-4);
    justify-content: space-between;

    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }

    /* Controls row - perfectly aligned */
    .controls {
        display: flex;
        align-items: center; /* ← centers everything on the baseline */
        gap: var(--space-4);
        flex-wrap: wrap;
    }

    /* Buttons & select share the same height for a clean row */
    .btn,
    .ctrl select {
        height: 34px;
    }

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 14px; /* ← vertical = 0 to lock height = 34px */
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center; /* ← centers text vertically inside button */
        justify-content: center;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    /* Inline label + select (no stacking), perfectly centered */
    .ctrl {
        display: grid;
        grid-template-columns: auto auto; /* label | select */
        align-items: center; /* vertical centering */
        column-gap: 8px;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
        margin: 0; /* remove any stray margin */
        line-height: 1; /* keeps label snug */
    }
    .ctrl select {
        min-width: 180px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 8px;
    }

    /* Divider that matches control height */
    .sep {
        width: 1px;
        height: 34px; /* ← same as controls */
        background: var(--border);
        align-self: center;
    }

    /* Stack on very small screens */
    @media (width < 560px) {
        .ctrl {
            grid-template-columns: 1fr;
            row-gap: 6px;
        }
        .sep {
            display: none;
        }
    }
`;

const Stage = styled.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    padding: var(--space-6);

    /* Tunables read by JS for span math */
    --row-size: 8px;

    .masonry {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(${COL_MIN}, 1fr));
        grid-auto-rows: var(--row-size);
        grid-auto-flow: dense; /* still useful for tiny leftovers */
        gap: ${GAP};
        align-items: start;
    }

    .tile {
        background: linear-gradient(
                0deg,
                hsl(
                    var(--tile-hue, 210) var(--tile-sat, 80%)
                        calc(var(--tile-light, 56%)) / 0.1
                ),
                hsl(
                    var(--tile-hue, 210) var(--tile-sat, 80%)
                        calc(var(--tile-light, 56%)) / 0.06
                )
            ),
            var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        overflow: hidden;
        color: var(--text);
        will-change: transform, opacity;
    }

    .tileInner {
        padding: var(--space-4);
        display: grid;
        gap: var(--space-3);
    }

    .tHead {
        display: grid;
        gap: 6px;
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

    .meta {
        margin-left: 18px;
        display: grid;
        gap: 4px;
        color: var(--text-muted);
    }

    .tile:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px hsl(0 0% 0% / 0.12);
    }

    @media (width < 560px) {
        padding: var(--space-4);
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
