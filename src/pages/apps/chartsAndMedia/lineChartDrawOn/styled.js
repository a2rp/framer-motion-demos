import styled from "styled-components";

/* Modal overlay as requested (blurred bg + centered card) */
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
    .closeBtn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .formGrid {
        display: grid;
        gap: var(--space-4);
    }
    .ctrl {
        display: grid;
        gap: 6px;
        align-items: center;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .ctrl input[type="number"] {
        height: 34px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 10px;
        width: 140px;
    }
    .ctrl input[type="checkbox"] {
        width: 18px;
        height: 18px;
        accent-color: var(--primary);
    }

    .pwd {
        display: flex;
        align-items: center;
        gap: 6px;
    }
    .pwd input {
        flex: 1 1 auto;
        height: 36px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 10px;
        outline: none;
    }
    .pwd.invalid input {
        border-color: hsl(0 70% 50% / 0.7);
    }
    .pwd .eye {
        display: inline-grid;
        place-items: center;
        width: 36px;
        height: 36px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        cursor: pointer;
    }
    .error {
        color: hsl(0 70% 60%);
    }
`;

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

    .controls {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        flex-wrap: wrap;
    }

    .ctrl {
        display: grid;
        align-items: center;
        gap: 6px;
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
        text-align: right;
    }

    .switch {
        display: inline-flex;
        align-items: center;
        gap: 10px;
    }
    .switch input {
        width: 18px;
        height: 18px;
        accent-color: var(--primary);
    }

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        height: 34px;
        padding: 0 14px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .btn.ghost {
        background: var(--surface);
    }
`;

const Stage = styled.section`
    display: grid;
    gap: var(--space-3);

    .card {
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        overflow: hidden;
    }

    .caption {
        font-size: 12px;
    }
    .muted {
        color: var(--text-muted);
    }

    .chart {
        display: block;
        width: 100%;
        height: auto;
        aspect-ratio: 900 / 360;
    }

    /* SVG theme */
    .bg {
        fill: var(--card);
    }

    .grid .v,
    .grid .h {
        stroke: var(--border);
        stroke-width: 1;
    }

    .axes line {
        stroke: hsl(0 0% 50% / 0.45);
        stroke-width: 1.2;
        shape-rendering: crispEdges;
    }

    .area {
        fill: color-mix(in oklab, var(--primary) 25%, transparent);
    }

    .line {
        fill: none;
        stroke: var(--primary);
        stroke-width: 2.5;
        filter: drop-shadow(0 1px 0.5px hsl(0 0% 0% / 0.15));
    }

    .dot {
        fill: var(--card);
        stroke: var(--primary);
        stroke-width: 1.8;
    }

    .xh {
        stroke: hsl(210 90% 56% / 0.45);
        stroke-width: 1.2;
    }
    .xhDot {
        fill: var(--primary);
        stroke: var(--card);
        stroke-width: 1.4;
    }
    .xhLabelBg {
        fill: var(--surface);
        stroke: var(--border);
    }
    .xhLabel {
        font-size: 11px;
        fill: var(--text);
    }
`;

export const Styled = { Wrapper, Header, Stage, ModalOverlay };
