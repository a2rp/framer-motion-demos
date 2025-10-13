import styled from "styled-components";

/* Warm highlight tokens that read well on light + dark */
const Wrapper = styled.div`
    --hl-strong: hsl(50 100% 50% / 0.35);
    --hl-mid: hsl(50 100% 50% / 0.22);
    --hl-weak: hsl(50 100% 50% / 0.1);

    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    color: var(--text);
    max-width: 880px;
    margin: 0 auto;
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

    .switch {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: var(--text-muted);
        input {
            transform: translateY(1px);
        }
    }

    .btn {
        height: 34px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        padding: 0 14px;
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

    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .total {
        padding-left: 6px;
        color: var(--text-muted);
    }
`;

const Stage = styled.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
`;

const TableHeader = styled.div`
    display: grid;
    grid-template-columns: 80px 1fr 80px 140px;
    gap: var(--space-4);
    padding: 12px var(--space-6);
    border-bottom: 1px solid var(--border);
    background: var(--surface);
    color: var(--text-muted);
    font-size: 12px;

    .right {
        justify-self: end;
    }
`;

const Table = styled.div`
    max-height: 420px;
    overflow: auto;
    padding: 6px var(--space-6) var(--space-6);
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: 80px 1fr 80px 140px;
    gap: var(--space-4);
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px dashed var(--border);
    border-radius: var(--radius-sm);

    .muted {
        color: var(--text-muted);
    }
    .right {
        justify-self: end;
    }

    &:hover {
        background: hsl(0 0% 100% / 0.02);
    }
`;

const Empty = styled.div`
    padding: 24px;
    text-align: center;
    color: var(--text-muted);
`;

/* ---------- Modal styles ---------- */

const ModalBackdrop = styled.div`
    position: fixed;
    inset: 0;
    z-index: 999;
    background: hsl(220 14% 10% / 0.55);
    backdrop-filter: blur(2px);
`;

const ModalDialog = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: grid;
    place-items: center; /* ← center on page */
    padding: 24px;

    .panel {
        background: var(--card);
        color: var(--text);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        width: min(520px, 92vw);
        max-height: min(80vh, 640px);
        padding: 18px;
        display: grid;
        align-content: start;
        gap: 12px;
    }

    h3 {
        font-size: 18px;
        margin: 0;
    }
    .body {
        color: var(--text-muted);
    }

    .actions {
        display: grid;
        grid-auto-flow: column;
        justify-content: end;
        gap: var(--space-4);
        margin-top: 6px;
    }

    .btn {
        height: 34px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        padding: 0 14px;
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn.danger {
        background: hsl(0 80% 56%);
        color: #fff;
        border-color: transparent;
    }
`;

export const Styled = {
    Wrapper,
    Header,
    Stage,
    TableHeader,
    Table,
    Row,
    Empty,
    ModalBackdrop,
    ModalDialog,
};
