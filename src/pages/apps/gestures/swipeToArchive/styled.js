import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 820px;
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
        flex-wrap: wrap;
    }

    /* Segmented toggle */
    .seg {
        display: inline-flex;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: 999px;
        padding: 4px;
        box-shadow: var(--shadow-sm);
    }
    .segBtn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        height: 32px;
        padding: 0 12px;
        border-radius: 999px;
        color: var(--text);
        background: transparent;
        border: 0;
        cursor: pointer;
    }
    .segBtn .count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 20px;
        height: 20px;
        border-radius: 999px;
        font-size: 12px;
        padding: 0 6px;
        background: var(--surface);
        color: var(--text);
        border: 1px solid var(--border);
    }
    /* Active: ensure high contrast on blue chip */
    .segBtn.active {
        background: var(--primary);
        color: #fff;
    }
    .segBtn.active .count {
        color: #fff; /* always readable on blue */
        border-color: transparent;
        background: rgba(255, 255, 255, 0.22);
    }
    @supports (color: color-mix(in oklab, white 22%, transparent)) {
        .segBtn.active .count {
            background: color-mix(in oklab, white 22%, transparent);
        }
    }

    .btn {
        height: 34px;
        padding: 0 12px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.ghost {
        background: var(--card);
    }
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const Stage = styled.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
`;

const RowWrapper = styled.li`
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;

    .bg {
        position: absolute;
        inset: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        pointer-events: none;
        background: var(--card);
    }
    .bg .left,
    .bg .right {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0 var(--space-6);
        color: var(--primary-contrast);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        opacity: 0; /* controlled by motion values */
        user-select: none;
    }
    .bg .left {
        justify-content: flex-start;
        background: hsl(0 80% 50% / 0.16);
    }
    .bg .right {
        justify-content: flex-end;
        background: hsl(160 70% 40% / 0.18);
    }

    .card {
        position: relative;
        z-index: 1;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        margin: var(--space-4);
        padding: var(--space-4);
        box-shadow: var(--shadow-sm);
        touch-action: pan-y; /* drag horizontally without jank */
        will-change: transform;
    }

    .meta {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 8px;
        align-items: baseline;
    }
    .from {
        color: var(--text);
    }
    .title {
        color: var(--text-muted);
        font-size: 12px;
    }
    .preview {
        color: var(--text);
        margin-top: 4px;
        opacity: 0.9;
    }

    .rowActions {
        margin-top: 10px;
        display: flex;
        gap: 10px;
    }
    .rowActions .act {
        height: 28px;
        padding: 0 10px;
        border-radius: 8px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        display: inline-flex;
        align-items: center;
        gap: 6px;
        cursor: pointer;
    }
    .rowActions .act.danger {
        color: hsl(0 75% 55%);
        border-color: color-mix(in oklab, hsl(0 75% 55%) 60%, var(--border));
    }

    .collapse {
        height: 0;
    }
`;

const Empty = styled.div`
    display: grid;
    place-items: center;
    padding: var(--space-8);
    color: var(--text-muted);
`;

/* ---------- Modal ---------- */
const ModalBackdrop = styled.div`
    position: fixed;
    inset: 0;
    background: radial-gradient(
            600px 200px at 10% -10%,
            hsl(210 90% 56% / 0.12),
            transparent 50%
        ),
        hsl(0 0% 0% / 0.45);
    backdrop-filter: blur(2px);
    z-index: 1000;
`;

const ModalDialog = styled.div`
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
    z-index: 1001;
    pointer-events: none; /* clicks pass through except on .panel */
    padding: var(--space-6);

    .panel {
        width: min(520px, calc(100% - 2 * var(--space-6)));
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        padding: var(--space-6);
        pointer-events: auto; /* interactive */
    }

    .head {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: var(--space-3);
    }

    .icon {
        width: 38px;
        height: 38px;
        border-radius: 10px;
        display: grid;
        place-items: center;
        background: hsl(0 80% 55% / 0.12);
        color: hsl(0 75% 55%);
        flex: 0 0 38px;
    }

    h3 {
        margin: 0;
        font-size: 18px;
        color: var(--text);
    }

    .body {
        color: var(--text);
        margin: var(--space-3) 0 var(--space-6);
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        gap: var(--space-3);
    }

    .btn {
        height: 34px;
        padding: 0 12px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.ghost {
        background: var(--card);
    }
    .btn.danger {
        background: hsl(0 75% 55%);
        border-color: hsl(0 75% 55%);
        color: #fff;
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

export const Styled = {
    Wrapper,
    Header,
    Stage,
    RowWrapper,
    Empty,
    ModalBackdrop,
    ModalDialog,
    Notes,
};
