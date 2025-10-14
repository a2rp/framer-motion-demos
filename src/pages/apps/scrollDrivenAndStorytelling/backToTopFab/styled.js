import styled from "styled-components";

/* ---- Page skeleton ---- */
const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
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

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 8px 14px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
`;

const Stage = styled.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);
    overflow: hidden;

    .block {
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--surface);
        padding: var(--space-6);
        box-shadow: var(--shadow-sm);
        & + .block {
            margin-top: var(--space-6);
        }
    }

    .bHead {
        display: grid;
        gap: 6px;
        margin-bottom: var(--space-4);
    }
    .kicker {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 11px;
        color: var(--text-muted);
    }
    h2 {
        font-size: 20px;
    }
    .body {
        color: var(--text);
        margin-bottom: var(--space-3);
    }
    .bullets {
        margin-left: 18px;
        display: grid;
        gap: 6px;
        color: var(--text);
    }

    /* ---- FAB ---- */
    .fab {
        position: fixed; /* pinned to viewport; works with container scroll too */
        right: calc(24px + env(safe-area-inset-right, 0px));
        bottom: calc(24px + env(safe-area-inset-bottom, 0px));
        width: 48px;
        height: 48px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: 0 8px 24px hsl(0 0% 0% / 0.25);
        cursor: pointer;
        display: grid;
        place-items: center;
        isolation: isolate; /* make tooltip and ring layers sane */
        transform-origin: center;
        outline: none;
    }

    .fab:focus-visible {
        box-shadow: 0 8px 24px hsl(0 0% 0% / 0.25), var(--focus-ring);
    }

    .fab .icon {
        position: relative;
        z-index: 2;
        font-size: 18px;
        line-height: 1;
    }

    /* Progress ring (SVG circles) */
    .ring {
        position: absolute;
        inset: 0;
        z-index: 1;
    }
    .track {
        fill: none;
        stroke: hsl(0 0% 100% / 0.25);
        stroke-width: 4;
    }
    .progress {
        fill: none;
        stroke: var(--primary-contrast);
        stroke-linecap: round;
        stroke-width: 4;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
        filter: drop-shadow(0 1px 2px hsl(0 0% 0% / 0.2));
    }

    /* Tooltip */
    .tooltip {
        position: absolute;
        right: 56px;
        bottom: 8px;
        padding: 6px 10px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        opacity: 0;
        transform: translateY(4px);
        transition: opacity 0.18s ease, transform 0.18s ease;
        pointer-events: none;
        white-space: nowrap;
        z-index: 3;
    }
    .fab:hover .tooltip {
        opacity: 1;
        transform: translateY(0);
    }
`;

/* ---- Modal overlay (as requested) ---- */
const ModalOverlay = styled.div`
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

    .form {
        display: grid;
        gap: 12px;
        margin-top: 8px;
    }
    .field {
        display: grid;
        gap: 6px;
    }
    .field label {
        font-size: 13px;
        color: var(--text);
    }
    .field input {
        height: 36px;
        padding: 0 10px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        outline: none;
    }
    .field input:focus {
        box-shadow: var(--focus-ring);
    }

    .pwWrap {
        position: relative;
        display: grid;
    }
    .pwWrap .eye {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        height: 28px;
        min-width: 28px;
        display: grid;
        place-items: center;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        cursor: pointer;
    }

    .err {
        color: hsl(6 78% 57%);
        font-size: 12px;
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 6px;
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
    .primaryBtn {
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
`;

export const Styled = { Wrapper, Header, Stage };
export { ModalOverlay };
