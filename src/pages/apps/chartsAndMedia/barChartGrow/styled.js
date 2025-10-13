import styled from "styled-components";

/* ---- Layout primitives ---- */

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
        grid-template-columns: auto auto;
        align-items: center;
        column-gap: 8px;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
        line-height: 1;
    }

    .ctrl select {
        min-width: 100px;
        height: 34px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 8px;
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
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn.subtle {
        background: var(--card);
        opacity: 0.9;
    }
    .btn:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }

    .sep {
        width: 1px;
        height: 28px;
        background: var(--border);
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
    min-height: 380px;

    /* Y grid */
    .gridY {
        position: absolute;
        inset: var(--space-6) var(--space-6) var(--space-10, 72px)
            var(--space-6);
        display: grid;
        grid-template-rows: repeat(5, 1fr);
        pointer-events: none;
    }
    .gridY .line {
        border-top: 1px dashed
            color-mix(in oklab, var(--border) 80%, transparent);
    }

    .bars {
        position: relative;
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
        gap: 18px;
        align-items: end;
        height: 100%;
        padding-bottom: 56px; /* space for labels */
    }

    .barWrap {
        display: grid;
        grid-template-rows: 1fr auto;
        align-items: end;
        min-width: 22px;
    }

    .bar {
        position: relative;
        height: 100%;
        transform-origin: bottom;
        border-radius: 10px 10px 0 0;
        background: linear-gradient(
            180deg,
            hsl(var(--hue, 210) 90% 62% / 0.85),
            hsl(var(--hue, 210) 90% 56% / 0.85)
        );
        filter: saturate(1.05);
        /* mask creates “grow from baseline” look without stretching gradients weirdly */
        -webkit-mask: linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        padding-top: calc(
            100% - var(--h)
        ); /* top padding “reveals” the fill to desired height */
    }

    .barFill {
        width: 100%;
        height: 100%;
        border-radius: 10px 10px 0 0;
        box-shadow: inset 0 8px 14px hsl(0 0% 100% / 0.12),
            inset 0 -4px 10px hsl(0 0% 0% / 0.15);
    }

    .bar:hover {
        box-shadow: 0 12px 30px hsl(0 0% 0% / 0.18);
    }

    .barLabel {
        text-align: center;
        margin-top: 8px;
        color: var(--text-muted);
        font-weight: 600;
        letter-spacing: 0.2px;
    }

    /* Tooltip */
    .tooltip {
        position: absolute;
        translate: -50% -120%;
        padding: 8px 10px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        pointer-events: none;
        min-width: 44px;
        text-align: center;
        z-index: 2;
    }
    .tooltip .tLabel {
        font-size: 11px;
        color: var(--text-muted);
    }
    .tooltip .tValue {
        font-weight: 700;
    }

    @media (width < 640px) {
        padding: var(--space-4);
        .bars {
            gap: 12px;
            padding-bottom: 48px;
        }
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

/* ---- Modal (per your spec) ---- */

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
        display: grid;
        gap: 12px;
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

    /* Fields */
    .field {
        display: grid;
        gap: 6px;
    }
    .field > span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .field input {
        height: 36px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 10px;
        outline: none;
    }
    .field input[aria-invalid="true"] {
        border-color: hsl(0 80% 55%);
        box-shadow: 0 0 0 3px hsl(0 80% 55% / 0.15);
    }
    .field .err {
        color: hsl(0 80% 70%);
        font-style: normal;
        font-size: 12px;
    }

    .passWrap {
        position: relative;
    }
    .eyeBtn {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 40px;
        border: none;
        background: transparent;
        color: var(--text);
        display: grid;
        place-items: center;
        cursor: pointer;
    }
`;

export const Styled = { Wrapper, Header, Stage, Notes };
