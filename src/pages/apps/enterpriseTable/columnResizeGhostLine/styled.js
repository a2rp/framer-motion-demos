import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    color: var(--text);
`;

const Header = styled.header`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--space-4);
    flex-wrap: wrap;

    h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }

    .right {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        flex-wrap: wrap;
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
    .ctrl select {
        min-width: 140px;
        height: 34px;
        padding: 0 10px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--surface);
        color: var(--text);
    }

    .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        height: 34px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        background: var(--card);
        color: var(--text);
    }
    .btn span {
        font-weight: 600;
        letter-spacing: 0.2px;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn.ghost {
        background: var(--surface);
    }
`;

const Stage = styled.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    padding: var(--space-4);

    /* ghost line */
    .ghostLine {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--primary);
        box-shadow: 0 0 0 3px hsl(210 90% 56% / 0.18);
        z-index: 10;
        pointer-events: none;
    }
    .widthChip {
        position: absolute;
        top: 8px;
        transform: translateX(-50%);
        background: var(--card);
        color: var(--text);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        padding: 4px 8px;
        font-size: 12px;
        z-index: 11;
        white-space: nowrap;
    }

    .tableWrap {
        overflow: auto;
        border-radius: var(--radius-md);
    }

    table.table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        table-layout: fixed;
        color: var(--text);
    }
    thead tr {
        background: var(--surface);
    }
    tbody tr:nth-child(even) {
        background: color-mix(in oklab, var(--surface) 70%, transparent);
    }

    th.th,
    td.td {
        border-bottom: 1px solid var(--border);
        padding: 0; /* we'll manage inner paddings for density control */
        vertical-align: middle;
    }

    .th .thInner {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 8px 10px 12px;
    }
    .th .label {
        font-weight: 600;
        letter-spacing: 0.2px;
        user-select: none;
    }

    /* resize handle */
    .resizeHandle {
        position: absolute;
        top: 0;
        right: -2px;
        bottom: 0;
        width: 12px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: col-resize;
        background: transparent;
        border: 0;
        padding: 0;
        outline: none;
        opacity: 0.55;
    }
    .resizeHandle:hover,
    .resizeHandle:focus {
        opacity: 1;
    }
    .resizeHandle.active {
        opacity: 1;
    }
    .resizeHandle .grip {
        width: 2px;
        height: 20px;
        background: var(--border);
        border-radius: 2px;
    }

    /* cells */
    .td {
        padding: 0;
    }
    .td .cellTxt {
        display: block;
        padding: var(--cell-pad-y) 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .badge {
        display: inline-flex;
        align-items: center;
        height: 22px;
        padding: 0 8px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 600;
        margin: 4px 0 4px 12px;
        user-select: none;
        border: 1px solid var(--border);
        background: var(--surface);
    }
    .badge.ok {
        color: #1b8a3a;
        border-color: #1b8a3a33;
        background: #1b8a3a12;
    }
    .badge.warn {
        color: #8a6c1b;
        border-color: #8a6c1b33;
        background: #8a6c1b12;
    }
    .badge.danger {
        color: #8a1b2b;
        border-color: #8a1b2b33;
        background: #8a1b2b12;
    }

    /* density */
    &[data-density="comfort"] {
        --cell-pad-y: 12px;
    }
    &[data-density="compact"] {
        --cell-pad-y: 6px;
    }

    .footNotes {
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--text-muted);
        padding: 8px 4px 0 4px;
        font-size: 12px;
    }
    .footNotes .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--primary);
        display: inline-block;
        margin-right: 4px;
    }
    .footNotes .sp {
        width: 10px;
        display: inline-block;
    }
`;

/* Provided modal overlay spec, adapted with tokens and buttons */
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
        color: var(--text-muted);
        margin-top: 10px;
    }

    .field {
        display: grid;
        gap: 6px;
        margin-bottom: 10px;
    }
    .field span {
        font-size: 12px;
        color: var(--text-muted);
    }

    .pwdWrap {
        position: relative;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--surface);
    }
    .pwdWrap input {
        height: 36px;
        padding: 0 10px;
        color: var(--text);
        background: transparent;
        border: none;
        outline: none;
    }
    .pwdWrap .eyeBtn {
        height: 30px;
        width: 36px;
        margin-right: 4px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-sm);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-grid;
        place-items: center;
    }
    .pwdWrap.err {
        border-color: hsl(0 80% 60%);
    }
    .errMsg {
        color: hsl(0 80% 68%);
        font-size: 12px;
    }

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
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
`;

export const Styled = { Wrapper, Header, Stage, ModalOverlay };
