import styled from "styled-components";

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

    .btn,
    .ctrl select {
        height: 34px;
    }
    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 14px;
        box-shadow: var(--shadow-sm);
        display: inline-flex;
        align-items: center;
        justify-content: center;
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
        opacity: 0.5;
        cursor: not-allowed;
    }

    .ctrl {
        display: grid;
        grid-template-columns: auto auto auto;
        align-items: center;
        column-gap: 8px;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
        line-height: 1;
    }
    .ctrl input[type="range"] {
        width: 160px;
        accent-color: var(--primary);
    }
    .ctrl em {
        font-style: normal;
        font-size: 12px;
        color: var(--text-muted);
    }

    @media (width < 560px) {
        .ctrl {
            grid-template-columns: 1fr;
            row-gap: 6px;
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
    min-height: 420px;
    /* border: 1px solid #f00; */

    .grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: var(--space-4);
        padding: var(--space-6);
    }
    @media (width < 900px) {
        .grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    @media (width < 720px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (width < 520px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }

    .card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        padding: var(--space-4);
        cursor: pointer;
        transition: transform 0.15s ease, box-shadow 0.15s ease,
            border-color 0.15s ease;
    }
    .card:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
    }
    .card:focus-visible {
        outline: none;
        box-shadow: var(--shadow-sm), var(--focus-ring);
        border-color: var(--primary);
    }

    /* Backdrop */
    .backdrop {
        position: absolute;
        inset: 0;
        z-index: 10;
        background: hsl(220 15% 5% / 0.6);
        border: 0;
        cursor: pointer;
    }

    /* Bottom sheet */
    .sheet {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 11;
        background: var(--card);
        border-top: 1px solid var(--border);
        border-radius: 16px 16px 0 0;
        box-shadow: 0 -12px 40px hsl(0 0% 0% / 0.28);
        padding: 8px 16px 0; /* top padding for content, bottom handled by footer */
        outline: none;
        will-change: transform;
        touch-action: none;

        /* Size & flex layout */
        --sheet-max-h: min(86vh, 640px);
        height: var(--sheet-max-h);
        max-height: var(--sheet-max-h);
        display: flex;
        flex-direction: column;
        /* 🚑 critical so the scroll child can actually shrink instead of pushing content “up” */
        min-height: 0;

        overscroll-behavior: contain;
        box-sizing: border-box;
        transform: translateZ(0);
        height: 420px;
    }
    @media (width < 520px) {
        .sheet {
            --sheet-max-h: min(92vh, 680px);
        }
    }

    .handle {
        display: grid;
        place-items: center;
        padding: 6px 0 10px;
    }
    .bar {
        width: 44px;
        height: 4px;
        background: var(--border);
        border-radius: 999px;
    }

    /* Scrollable middle */
    .sheetBody {
        flex: 1 1 auto;
        /* 🚑 also critical in flex children to avoid “hidden at top” behaviour */
        min-height: 0;
        overflow: auto;
        padding: 4px 2px 12px;
        -webkit-overflow-scrolling: touch;
        scrollbar-gutter: stable;
        scroll-padding-top: 8px;
    }

    /* Two-column layout inside the body */
    .sheetLayout {
        display: grid;
        grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
        gap: var(--space-6);
        align-items: start;
        min-width: 0; /* allow columns to shrink without overflow */
    }
    @media (width < 760px) {
        .sheetLayout {
            grid-template-columns: 1fr;
        }
    }

    .col {
        min-width: 0;
    }
    .sectionTitle {
        font-size: 14px;
        color: var(--text-muted);
        margin: 6px 2px 10px;
    }

    /* Selected card preview */
    .cardPreview {
        border: 1px solid var(--border);
        background: var(--surface);
        border-radius: var(--radius-md);
        padding: 12px;
    }
    .previewHead {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;
    }
    .pill {
        display: inline-block;
        font-size: 11px;
        line-height: 1;
        padding: 6px 8px;
        border-radius: 999px;
        background: var(--card);
        border: 1px solid var(--border);
        color: var(--text-muted);
    }
    .id {
        font-size: 12px;
        opacity: 0.7;
        background: var(--card);
        border: 1px dashed var(--border);
        padding: 2px 6px;
        border-radius: 999px;
    }

    /* Options list */
    .options {
        display: grid;
        gap: 10px;
        margin: 0 0 16px;
        list-style: none;
        padding: 0;
    }
    .options label {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    /* Pinned footer */
    .sheetFoot {
        flex: 0 0 auto;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: var(--space-4);
        border-top: 1px solid var(--border);
        padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));
        background: linear-gradient(to bottom, transparent, var(--card) 24%);
    }

    /* 🔹 Footer buttons */
    .sheetFoot .btn {
        appearance: none;
        height: 36px;
        min-width: 84px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: transform 0.12s ease, box-shadow 0.12s ease,
            background-color 0.12s ease, border-color 0.12s ease;
    }
    .sheetFoot .btn:hover {
        transform: translateY(-1px);
        box-shadow: var(--shadow-md);
    }
    .sheetFoot .btn:active {
        transform: translateY(0);
        box-shadow: var(--shadow-sm);
    }
    .sheetFoot .btn:focus-visible {
        outline: none;
        box-shadow: var(--shadow-sm), var(--focus-ring);
    }
    .sheetFoot .btn:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }

    /* Primary action */
    .sheetFoot .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
        box-shadow: 0 4px 14px hsl(210 90% 56% / 0.35);
    }
    .sheetFoot .btn.primary:hover {
        filter: brightness(1.05);
    }
    .sheetFoot .btn.primary:active {
        filter: brightness(0.97);
    }

    /* Ghost/secondary */
    .sheetFoot .btn.ghost {
        background: var(--card);
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
