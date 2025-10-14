import styled from "styled-components";

/* --------- Base layout --------- */
const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    color: var(--text);
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    flex-wrap: wrap;

    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }

    .actions {
        display: flex;
        gap: var(--space-3);
    }

    .btn {
        height: 36px;
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
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    .tableWrap {
        overflow: auto;
    }

    table.table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        font-size: 14px;
    }

    thead th {
        position: sticky;
        top: 0;
        background: var(--surface);
        color: var(--text);
        text-align: left;
        font-weight: 600;
        padding: 12px 14px;
        border-bottom: 1px solid var(--border);
        z-index: 1;
    }

    tbody tr {
        border-bottom: 1px solid var(--border);
        transition: background 0.2s ease;
    }
    tbody tr:hover {
        background: color-mix(in oklab, var(--surface) 70%, transparent);
    }
    tbody tr.isEditing {
        background: color-mix(in oklab, var(--primary) 12%, var(--card));
    }

    td {
        padding: 10px 14px;
        vertical-align: top;
    }

    .actionsCol {
        width: 210px;
        white-space: nowrap;
    }

    /* Cell internals */
    .cell {
        display: grid;
        align-items: center;
        gap: 6px;
    }

    .text {
        color: var(--text);
    }
    .mono {
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
    }

    .badge.role {
        display: inline-grid;
        place-items: center;
        height: 28px;
        padding: 0 10px;
        border-radius: 999px;
        background: var(--surface);
        border: 1px solid var(--border);
    }

    .chip {
        display: inline-grid;
        place-items: center;
        height: 26px;
        padding: 0 10px;
        border-radius: 999px;
        font-weight: 600;
        letter-spacing: 0.2px;
        border: 1px solid var(--border);
    }
    .chip.active {
        background: hsl(150 70% 40% / 0.15);
        color: hsl(150 70% 35%);
        border-color: hsl(150 60% 30% / 0.35);
    }
    .chip.pending {
        background: hsl(40 90% 50% / 0.18);
        color: hsl(40 80% 34%);
        border-color: hsl(40 70% 30% / 0.35);
    }
    .chip.suspended {
        background: hsl(355 80% 55% / 0.18);
        color: hsl(355 70% 40%);
        border-color: hsl(355 60% 38% / 0.35);
    }

    /* Fields */
    .field {
        display: grid;
        gap: 6px;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"],
    select {
        height: 34px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--surface);
        color: var(--text);
        padding: 0 10px;
        outline: none;
    }
    input:focus,
    select:focus {
        box-shadow: var(--focus-ring);
        border-color: color-mix(in oklab, var(--primary), var(--border));
    }
    [aria-invalid="true"] {
        border-color: hsl(355 80% 55% / 0.7);
        box-shadow: 0 0 0 3px hsl(355 80% 55% / 0.15);
    }

    .error {
        color: hsl(355 80% 60%);
        font-size: 12px;
    }

    .withEye {
        position: relative;
    }
    .masked {
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .eye,
    .eye.small {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        background: var(--card);
        border-radius: var(--radius-sm);
        cursor: pointer;
    }
    .eye.small {
        position: static;
        width: 28px;
        height: 28px;
        border-radius: 999px;
    }

    .btnGroup {
        display: inline-flex;
        gap: 8px;
    }
    .btn {
        height: 32px;
        padding: 0 12px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn.ghost {
        background: var(--card);
    }
    .btn.danger {
        background: hsl(355 80% 56%);
        color: #fff;
        border-color: transparent;
    }
`;

/* --------- Modal overlay (as provided, with theme) --------- */
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

    .closeBtn,
    .btn {
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }

    /* Add-user form grid */
    .formGrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-4);
    }
    .formGrid label {
        display: grid;
        gap: 6px;
    }
    .formGrid label span {
        font-size: 12px;
        color: var(--text-muted);
    }

    .withEye .eyeWrap {
        position: relative;
    }
    .eyeWrap {
        display: flex;
        align-items: center;
    }
    .withEye input {
        width: 100%;
    }
    .withEye .eye {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        background: var(--card);
        border-radius: var(--radius-sm);
        cursor: pointer;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"],
    select {
        height: 36px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--surface);
        color: var(--text);
        padding: 0 10px;
        outline: none;
    }
    input:focus,
    select:focus {
        box-shadow: var(--focus-ring);
        border-color: color-mix(in oklab, var(--primary), var(--border));
    }

    .error {
        color: hsl(355 80% 60%);
        font-size: 12px;
    }

    @media (width < 640px) {
        .formGrid {
            grid-template-columns: 1fr;
        }
    }
`;

export const Styled = {
    Wrapper,
    Header,
    Stage,
    ModalOverlay,
};
