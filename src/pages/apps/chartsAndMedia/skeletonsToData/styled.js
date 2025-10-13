import styled from "styled-components";

/* ---------- Page ---------- */

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
        gap: var(--space-4);
        align-items: center;
        flex-wrap: wrap;
    }

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 14px;
        height: 36px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
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
`;

const Stage = styled.section`
    display: grid;
    gap: var(--space-4);

    .errorBanner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: linear-gradient(0deg, hsl(0 80% 60% / 0.08), transparent),
            var(--card);
        box-shadow: var(--shadow-sm);
        padding: 10px 12px;
        color: var(--text);
    }
    .errorBanner .msg {
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .errorBanner .close {
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        height: 30px;
        padding: 0 10px;
        border-radius: var(--radius-sm);
        cursor: pointer;
    }

    .grid {
        display: grid;
        gap: var(--space-4);
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (width < 980px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (width < 620px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }

    .card {
        position: relative;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        color: var(--text);
        overflow: hidden;
        padding: 16px;
        display: grid;
        gap: 10px;
    }

    /* Data card content */
    .cHead {
        display: grid;
        gap: 4px;
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
    .desc {
        color: var(--text-muted);
    }

    .kpis {
        margin-top: 6px;
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
        gap: 8px;
    }
    .kpi {
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--surface);
        display: grid;
        gap: 4px;
        padding: 10px;
    }
    .kpi .label {
        color: var(--text-muted);
        font-size: 12px;
    }
    .kpi .value {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.2px;
    }
    .kpi.up {
        outline: 2px solid hsl(140 70% 45% / 0.15);
    }
    .kpi.down {
        outline: 2px solid hsl(0 70% 45% / 0.15);
    }

    /* Skeletons */
    .skeleton {
        background: var(--card);
    }
    .skel {
        border-radius: 8px;
        background: var(--surface);
    }
    .skel-title {
        height: 16px;
        width: 50%;
    }
    .skel-line {
        height: 10px;
        width: 100%;
    }
    .skel-line.short {
        width: 70%;
    }

    .shimmer {
        position: absolute;
        inset: 0;
        background: linear-gradient(
            90deg,
            transparent 0%,
            hsl(0 0% 100% / 0.08) 35%,
            hsl(0 0% 100% / 0.16) 50%,
            hsl(0 0% 100% / 0.08) 65%,
            transparent 100%
        );
        mix-blend-mode: plus-lighter;
        transform: translateX(-100%);
        pointer-events: none;
    }
`;

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

    .field {
        display: grid;
        gap: 6px;
        margin: 10px 0 6px;
    }
    .field > span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .inputWrap {
        position: relative;
        display: grid;
    }
    input {
        height: 38px;
        padding: 0 38px 0 12px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--surface);
        color: var(--text);
        outline: none;
    }
    input[aria-invalid="true"] {
        box-shadow: 0 0 0 3px hsl(0 90% 60% / 0.25) inset;
    }
    .error {
        color: hsl(0 80% 60%);
        font-size: 12px;
    }

    .eye {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        width: 32px;
        height: 32px;
        display: grid;
        place-items: center;
        border-radius: 8px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        cursor: pointer;
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
`;

export const Styled = { Wrapper, Header, Stage };
