import styled from "styled-components";

/* Header / Controls */
const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    color: var(--text);
`;

const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);

    .title h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .title .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }

    .controls {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-4);
        align-items: center;
    }

    .search {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        padding: 0 10px;
        height: 36px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
    }
    .search input {
        background: transparent;
        border: none;
        outline: none;
        color: var(--text);
        min-width: 260px;
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
        min-width: 160px;
        height: 36px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 8px;
    }

    @media (width < 720px) {
        .search input {
            min-width: 160px;
        }
    }
`;

/* Table + Expand Row */
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
    }

    thead th {
        position: sticky;
        top: 0;
        z-index: 1;
        background: var(--surface);
        color: var(--text);
        text-align: left;
        font-weight: 600;
        padding: 12px 14px;
        border-bottom: 1px solid var(--border);
        white-space: nowrap;
    }

    tbody td {
        padding: 12px 14px;
        border-bottom: 1px solid var(--border);
        vertical-align: middle;
        color: var(--text);
    }

    tr.row {
        transition: background-color 0.2s ease;
    }
    tr.row:last-of-type td {
        border-bottom: none;
    }

    .cellUser {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .cellUser .avatar {
        --size: 28px;
        width: var(--size);
        height: var(--size);
        border-radius: 999px;
        background: hsl(var(--h, 210) 70% 60% / 0.8);
        box-shadow: 0 0 0 2px var(--surface) inset;
    }
    .cellUser .stack {
        display: grid;
    }
    .cellUser .name {
        font-weight: 600;
    }
    .cellUser .sub {
        font-size: 12px;
    }

    .chip {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 2px 8px;
        height: 24px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        font-size: 12px;
    }

    .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 2px 10px;
        height: 24px;
        border-radius: 999px;
        font-size: 12px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
    }
    .badge.active {
        background: color-mix(in oklab, var(--primary) 15%, var(--surface));
    }
    .badge.invited {
        background: color-mix(in oklab, #ffc107 22%, var(--surface));
    }
    .badge.suspended {
        background: color-mix(in oklab, #ef4444 18%, var(--surface));
    }

    .right {
        text-align: right;
    }

    .rowActions {
        display: inline-flex;
        gap: 8px;
        align-items: center;
    }

    .iconBtn {
        width: 28px;
        height: 28px;
        display: grid;
        place-items: center;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        cursor: pointer;
    }
    .iconBtn:hover {
        filter: brightness(1.05);
    }

    /* Expandable row */
    tr.expandRow td {
        background: color-mix(in oklab, var(--surface) 96%, #0000);
    }
    .expand {
        overflow: hidden;
        border-top: 1px dashed var(--border);
        background: color-mix(in oklab, var(--surface) 98%, #0000);
    }
    .expandInner {
        padding: 14px;
        display: grid;
        gap: 12px;
    }

    .kpis {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;
    }
    .kpi {
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--card);
        padding: 10px 12px;
        box-shadow: var(--shadow-sm);
    }
    .kicker {
        font-size: 11px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--text-muted);
    }
    .val {
        font-size: 16px;
    }

    .desc {
        color: var(--text-muted);
    }

    .actions {
        display: flex;
        gap: 10px;
    }

    .btn {
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        height: 34px;
        padding: 0 12px;
        box-shadow: var(--shadow-sm);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: var(--card);
        color: var(--text);
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
    .btn.sm {
        height: 30px;
        padding: 0 10px;
    }

    tr.empty td {
        text-align: center;
    }
    .emptyBox {
        padding: 24px;
        color: var(--text-muted);
    }

    @media (width < 880px) {
        .hide-sm {
            display: none;
        }
        .kpis {
            grid-template-columns: 1fr;
        }
    }
`;

/* Modal overlay (as requested) */
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

    .fgrid {
        display: grid;
        gap: 12px;
    }
    .field {
        display: grid;
        gap: 6px;
    }
    .field span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .field input,
    .field select {
        height: 36px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 10px;
        outline: none;
    }
    .field.error input,
    .field.error select {
        border-color: #ef4444;
    }
    .field em {
        color: #ef4444;
        font-style: normal;
        font-size: 12px;
    }

    .pwWrap {
        position: relative;
        display: grid;
    }
    .pwWrap input {
        padding-right: 36px;
    }
    .pwToggle {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        width: 28px;
        height: 28px;
        border-radius: 8px;
        border: 1px solid var(--border);
        background: var(--surface);
        display: grid;
        place-items: center;
        cursor: pointer;
        color: var(--text);
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
    .btn.ghost {
        background: var(--surface);
        color: var(--text);
    }
`;

export const Styled = { Wrapper, Header, Stage, ModalOverlay };
