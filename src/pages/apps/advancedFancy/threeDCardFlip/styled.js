import styled from "styled-components";

/* Page shell */
const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1200px;
    margin: 0 auto;
    color: var(--text);
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
        display: flex;
        align-items: center;
        gap: var(--space-4);
    }

    .btn,
    .closeBtn {
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.ghost {
        background: var(--surface);
        color: var(--text);
    }
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const Stage = styled.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: radial-gradient(
            1200px 600px at 20% -10%,
            hsl(210 90% 56% / 0.12),
            transparent 60%
        ),
        var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    padding: var(--space-6);

    .grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: var(--space-6);
    }

    @media (width < 1100px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (width < 720px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }

    /* 3D card */
    .card3d-wrap {
        perspective: 1200px;
    }

    .card3d {
        transform-style: preserve-3d;
        will-change: transform;
    }

    .card3d-inner {
        position: relative;
        height: 280px;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        overflow: hidden;
        box-shadow: var(--shadow-md);
        background: var(--surface);
        transform-style: preserve-3d;
    }

    .face {
        position: absolute;
        inset: 0;
        padding: var(--space-6);
        display: grid;
        align-content: start;
        gap: var(--space-4);
        backface-visibility: hidden;
    }
    .face-front {
        background: linear-gradient(
                180deg,
                hsl(210 90% 56% / 0.08),
                transparent 40%
            ),
            var(--surface);
    }
    .face-back {
        transform: rotateY(180deg);
        background: linear-gradient(
                180deg,
                hsl(210 90% 56% / 0.1),
                transparent 40%
            ),
            var(--surface);
    }

    .cHead {
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
        font-size: 20px;
    }
    .body {
        color: var(--text);
    }

    .stats {
        display: grid;
        gap: 6px;
        color: var(--text);
    }
    .stats li b {
        margin-right: 6px;
    }

    .bullets {
        margin-left: 18px;
        display: grid;
        gap: 6px;
        color: var(--text);
    }

    .grid2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-6);
    }
    @media (width < 720px) {
        .grid2 {
            grid-template-columns: 1fr;
        }
    }

    .actions {
        display: flex;
        gap: var(--space-4);
        margin-top: auto;
    }
    .btn.ghost {
        background: var(--surface);
        color: var(--text);
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

/* -------- Modal (given spec) -------- */
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

    .iconBtn {
        height: 32px;
        width: 36px;
        display: inline-grid;
        place-items: center;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        cursor: pointer;
    }

    .fLabel {
        display: grid;
        gap: 6px;
    }
    .fLabel span {
        font-size: 12px;
        color: var(--text-muted);
    }

    input {
        height: 36px;
        padding: 0 10px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--surface);
        color: var(--text);
        outline: none;
    }
    input[aria-invalid="true"] {
        border-color: hsl(0 75% 55%);
        box-shadow: 0 0 0 3px hsl(0 75% 55% / 0.15);
    }

    .pwWrap {
        position: relative;
        display: grid;
    }
    .eyeBtn {
        position: absolute;
        top: 50%;
        right: 6px;
        transform: translateY(-50%);
        height: 28px;
        width: 34px;
        display: inline-grid;
        place-items: center;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--card);
        color: var(--text);
        cursor: pointer;
    }

    .errors {
        display: grid;
        gap: 6px;
        color: hsl(0 75% 60%);
        padding: 6px 8px;
        border: 1px solid hsl(0 75% 60% / 0.4);
        border-radius: var(--radius-sm);
        background: hsl(0 75% 60% / 0.08);
    }
    .errors .sub {
        margin-left: 18px;
        display: grid;
        gap: 4px;
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
    .closeBtn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const Styled = { Wrapper, Header, Stage, Notes };
