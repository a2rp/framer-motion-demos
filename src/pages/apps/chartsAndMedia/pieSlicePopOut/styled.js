import styled from "styled-components";

/* ---------- Page chrome ---------- */

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1100px;
    margin: 0 auto;
    color: var(--text);

    .sr {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        white-space: nowrap;
    }
`;

const Header = styled.header`
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

    .controls {
        display: inline-flex;
        gap: var(--space-4);
        align-items: center;
    }

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 8px 14px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 36px;
    }
    .btn.ghost {
        background: var(--surface);
    }
`;

const Stage = styled.section`
    display: grid;
    gap: var(--space-6);

    .chartWrap {
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        padding: var(--space-4);
        display: grid;
        place-items: center;
        overflow: hidden;
    }

    .chart {
        width: min(560px, 95vw);
        height: auto;
        display: block;
    }

    .ring {
        fill: var(--surface);
        stroke: var(--border);
        stroke-width: 1;
    }

    .slice {
        cursor: pointer;
    }
    .sliceBorder {
        fill: none;
        stroke: var(--card);
        stroke-opacity: 0.45;
        stroke-width: 1;
    }

    .centerLabel text {
        text-anchor: middle;
        dominant-baseline: middle;
    }
    .centerLabel .title {
        font-size: 14px;
        fill: var(--text-muted);
    }
    .centerLabel .value {
        font-size: 22px;
        font-weight: 700;
        fill: var(--text);
    }
    .centerPct {
        text-anchor: middle;
        dominant-baseline: middle;
        font-size: 28px;
        font-weight: 700;
        fill: var(--text);
    }

    .legend {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: var(--space-3);
    }
    .legendItem {
        display: grid;
        grid-template-columns: 14px 1fr auto;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        text-align: left;
    }
    .legendItem.active {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px hsl(210 90% 56% / 0.28);
    }
    .legendItem:focus-visible {
        outline: none;
        box-shadow: 0 0 0 3px var(--focus-ring);
    }

    .swatch {
        width: 14px;
        height: 14px;
        border-radius: 3px;
        box-shadow: inset 0 0 0 1px hsl(0 0% 0% / 0.15);
    }
    .liLabel {
        color: var(--text);
        font-weight: 600;
    }
    .liValue {
        color: var(--text-muted);
    }
`;

/* ---------- Modal overlay (as requested) ---------- */

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 50;
    background: color-mix(in oklab, var(--bg) 40%, #0000);
    backdrop-filter: blur(8px) saturate(1.1);
    display: grid;
    place-items: center;
    padding: var(--space-6);

    .modal {
        width: min(520px, 96vw);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        overflow: hidden;
        display: grid;
        gap: 0;
    }
    .mHead,
    .mFoot {
        padding: 14px 16px;
        border-bottom: 1px solid var(--border);
    }
    .mFoot {
        border-bottom: none;
        border-top: 1px solid var(--border);
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
    .mBody {
        padding: 16px;
    }

    .mHead h3 {
        font-size: 18px;
    }

    .muted {
        color: var(--text-muted);
        margin-bottom: 10px;
    }
    .details {
        margin-left: 18px;
        display: grid;
        gap: 6px;
    }

    .closeBtn {
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .closeBtn.ghost {
        background: var(--surface);
        color: var(--text);
    }

    /* Form grid */
    .gridHead {
        display: grid;
        grid-template-columns: 1fr 120px 90px;
        gap: 10px;
        padding: 6px 0;
        color: var(--text-muted);
        font-size: 12px;
    }
    .rows {
        display: grid;
        gap: 8px;
    }
    .row {
        display: grid;
        grid-template-columns: 1fr 120px 90px;
        gap: 10px;
        align-items: start;
    }
    .cell {
        display: grid;
        gap: 6px;
    }
    .cell.actions {
        align-content: center;
    }

    input[type="text"],
    input[type="number"] {
        height: 34px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 10px;
        outline: none;
    }
    input[type="text"]:focus,
    input[type="number"]:focus {
        box-shadow: 0 0 0 3px var(--focus-ring);
        border-color: var(--primary);
    }

    .mini {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        height: 30px;
        padding: 0 10px;
        border-radius: var(--radius-sm);
        cursor: pointer;
    }
    .mini.ghost {
        background: var(--surface);
    }
    .mini.danger {
        background: hsl(0 75% 50%);
        color: white;
        border-color: transparent;
    }

    .rowOps {
        margin-top: 8px;
    }

    .hint {
        color: hsl(0 70% 60%);
        font-size: 12px;
    }
    .err {
        color: hsl(0 80% 60%);
        margin-bottom: 8px;
    }

    /* Password block */
    .pwWrap {
        display: grid;
        gap: 6px;
        margin-top: 10px;
    }
    .pwWrap label {
        font-size: 12px;
        color: var(--text-muted);
    }
    .pwInput {
        position: relative;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
    }
    .pwInput input {
        height: 34px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 36px 0 10px;
    }
    .pwInput input:focus {
        box-shadow: 0 0 0 3px var(--focus-ring);
        border-color: var(--primary);
    }
    .pwInput .eye {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        width: 28px;
        height: 28px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: 6px;
        cursor: pointer;
    }

    @media (width < 520px) {
        .gridHead,
        .row {
            grid-template-columns: 1fr 100px 80px;
        }
    }
`;

export const Styled = { Wrapper, Header, Stage };
