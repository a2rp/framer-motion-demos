import styled from "styled-components";

/* ---- Blur/dim overlay for the sheet (portaled) ---- */
const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 10000; /* above app chrome, nav, and any local stacking contexts */

    background: color-mix(in oklab, var(--bg) 30%, #0000);
    backdrop-filter: blur(8px) saturate(1.05);

    display: flex;
    align-items: stretch;
    justify-content: flex-end;

    .sheetArea {
        width: var(--sheet-w, 520px);
        max-width: 96vw;
        height: 100%;
        perspective: 1200px;
        transform-style: preserve-3d;
        display: grid;
    }

    .drawer {
        height: 100%;
        border-left: 1px solid var(--border);
        background: var(--card);
        box-shadow: -24px 0 60px hsl(0 0% 0% / 0.25);
        will-change: transform, opacity;
        display: grid;
        grid-template-rows: auto 1fr auto;
        overflow: hidden;
    }

    .dHead,
    .dFoot {
        padding: 14px 16px;
        border-bottom: 1px solid var(--border);
        background: var(--card);
    }
    .dFoot {
        border-bottom: none;
        border-top: 1px solid var(--border);
    }
    .dHead h3 {
        font-size: 18px;
    }
    .muted {
        color: var(--text-muted);
    }

    .dBody {
        display: grid;
        gap: var(--space-4);
        padding: 16px;
        overflow: auto;

        /* vertical centering while there's room */
        align-content: center;
        justify-items: stretch;
        min-height: 0;
    }
    @media (max-height: 700px) {
        .dBody {
            align-content: start;
        }
    }

    .field {
        display: grid;
        gap: 8px;
    }
    .field > span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .field input {
        height: 38px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        padding: 0 12px;
        outline: none;
        box-shadow: inset 0 1px 0 hsl(0 0% 100% / 0.03);
    }
    .field input:focus {
        box-shadow: var(--focus-ring);
        border-color: color-mix(in oklab, var(--primary) 60%, var(--border));
    }
    .field.invalid input {
        border-color: hsl(5 80% 50%);
    }
    .field .err {
        color: hsl(5 80% 60%);
        font-size: 12px;
    }

    .passWrap {
        position: relative;
    }
    .passWrap input {
        width: 100%;
        padding-right: 40px;
    }
    .passWrap .eye {
        position: absolute;
        right: 4px;
        top: 3px;
        height: 32px;
        width: 32px;
        border-radius: 8px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        display: grid;
        place-items: center;
        cursor: pointer;
    }

    .meter {
        position: relative;
        height: 8px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 999rem;
        overflow: hidden;
    }
    .meter span {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 0%;
        background: linear-gradient(90deg, hsl(210 90% 56%), hsl(210 90% 60%));
        transition: width 220ms ease;
    }
    .meter[data-score="0"] span {
        width: 0%;
    }
    .meter[data-score="1"] span {
        width: 25%;
    }
    .meter[data-score="2"] span {
        width: 50%;
    }
    .meter[data-score="3"] span {
        width: 75%;
    }
    .meter[data-score="4"] span {
        width: 100%;
    }

    .hint {
        color: var(--text-muted);
        font-size: 12px;
    }

    .actions {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 6px;
    }
    .actions .spacer {
        flex: 1;
    }
    .actions .btn {
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .actions .btn.ghost {
        background: var(--surface);
    }
    .actions .btn.ghost.danger {
        color: hsl(5 80% 55%);
        border-color: hsl(5 60% 45% / 0.35);
    }
    .actions .btn.primary {
        background: var(--primary);
        border-color: transparent;
        color: var(--primary-contrast);
    }
    .actions .btn[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
    }

    @media (width < 560px) {
        .sheetArea {
            width: min(var(--sheet-w, 520px), 96vw);
        }
    }
`;

/* ---- Center modal (also portaled) ---- */
const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 11000; /* above the drawer overlay */
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
`;

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

    .controls {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        flex-wrap: wrap;
    }
    .ctrl {
        display: grid;
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
    .ctrl .row {
        display: grid;
        grid-template-columns: 90px 90px;
        gap: 8px;
    }
    .ctrl input[type="number"] {
        height: 34px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 8px;
        outline: none;
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
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
`;

const Stage = styled.section`
    display: grid;
    gap: var(--space-4);
    .lead {
        color: var(--text);
    }
    .bullet {
        margin-left: 18px;
        color: var(--text-muted);
        display: grid;
        gap: 4px;
    }
`;

export const Styled = { Wrapper, Header, Stage, Overlay, ModalOverlay };
