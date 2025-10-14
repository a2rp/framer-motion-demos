import styled from "styled-components";

/* ------- hover-visible, stable scrollbar ------- */
const hoverScrollbarStable = `
  scrollbar-gutter: stable;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar { width: 12px; height: 12px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: transparent; border-radius: 8px; border: 3px solid transparent; background-clip: content-box;
  }
  @media (hover: hover) {
    &:hover { scrollbar-color: #666 transparent; }
    &:hover::-webkit-scrollbar-thumb { background: linear-gradient(180deg,#3a3a3a,#666); }
    &::-webkit-scrollbar-thumb:hover { background: #808080; }
  }
  @media (hover: none) {
    scrollbar-width: thin; scrollbar-color: #555 transparent;
    &::-webkit-scrollbar-thumb { background: #555; }
  }
`;

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
        gap: 6px;
        align-items: center;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .ctrl input[type="text"] {
        width: 260px;
        height: 34px;
        padding: 0 10px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--surface);
        color: var(--text);
        outline: none;
    }
    .ctrl select {
        min-width: 160px;
        height: 34px;
        padding: 0 8px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--surface);
        color: var(--text);
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
    .btn.danger {
        background: hsl(0 80% 45% / 0.1);
        color: hsl(0 80% 60%);
        border-color: hsl(0 80% 45% / 0.35);
    }
`;

const Stage = styled.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    .tableWrap {
        max-height: min(68vh, 820px);
        overflow: auto;
        ${hoverScrollbarStable};
    }

    table.table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        font-size: 14px;
    }

    thead th {
        text-align: left;
        position: sticky;
        top: 0;
        z-index: 3;
        background: var(--surface);
        color: var(--text);
        border-bottom: 1px solid var(--border);
        padding: 10px 12px;
        font-weight: 600;
    }
    thead th.actions {
        text-align: right;
    }

    tbody tr {
        border-bottom: 1px solid var(--border);
        transition: background-color 0.25s ease;
    }
    tbody tr:hover {
        background: color-mix(in oklab, var(--surface) 70%, var(--primary) 5%);
    }

    td {
        padding: 10px 12px;
        vertical-align: middle;
        color: var(--text);
        border-bottom: 1px solid var(--border);
    }
    td.mono {
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
        font-size: 13px;
    }

    td .cell-main {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .avatar {
        width: 28px;
        height: 28px;
        border-radius: 999px;
        display: grid;
        place-items: center;
        font-weight: 700;
        font-size: 13px;
        color: var(--primary-contrast);
        background: linear-gradient(135deg, hsl(210 90% 56%), hsl(210 90% 62%));
        box-shadow: var(--shadow-sm);
    }
    .text {
        display: grid;
    }
    .text .name {
        font-weight: 600;
    }
    .text .sub {
        color: var(--text-muted);
        font-size: 12px;
    }

    .badge {
        display: inline-flex;
        align-items: center;
        height: 26px;
        padding: 0 10px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 600;
        border: 1px solid var(--border);
        background: var(--surface);
    }
    .badge.active {
        color: hsl(145 60% 40%);
        border-color: hsl(145 50% 40% / 0.35);
        background: hsl(145 60% 40% / 0.08);
    }
    .badge.invited {
        color: hsl(210 80% 50%);
        border-color: hsl(210 80% 50% / 0.35);
        background: hsl(210 80% 50% / 0.08);
    }
    .badge.suspended {
        color: hsl(0 70% 55%);
        border-color: hsl(0 70% 55% / 0.35);
        background: hsl(0 70% 55% / 0.08);
    }

    td.actions {
        text-align: right;
    }
    td.actions .btn {
        height: 30px;
        padding: 0 10px;
    }
    td.actions .btn span {
        display: inline-block;
        margin-left: 6px;
    }

    /* Row toast pinned inside the stage */
    .rowToast {
        position: absolute;
        right: 12px; /* top set inline */
        z-index: 5;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-md);
        display: inline-flex;
        align-items: center;
        gap: 10px;
        height: 36px;
        padding: 0 12px;
        pointer-events: none;
    }
    .rowToast .ok {
        width: 22px;
        height: 22px;
        display: inline-grid;
        place-items: center;
        color: hsl(145 60% 45%);
    }
    .rowToast .msg {
        font-weight: 600;
        font-size: 13px;
    }

    @media (width < 720px) {
        .tableWrap {
            max-height: min(70vh, 80vh);
        }
        thead {
            display: none;
        }
        table.table,
        tbody,
        tr,
        td {
            display: block;
            width: 100%;
        }
        tbody tr {
            border-bottom: none;
            border-top: 1px solid var(--border);
        }
        td {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 6px;
            align-items: baseline;
            border-bottom: none;
        }
        td::before {
            content: attr(data-title);
            color: var(--text-muted);
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.06em;
        }
        td.actions {
            grid-template-columns: 1fr;
        }
    }
`;

/* ---- Modal overlay (shared) ---- */
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
    .btn.danger {
        background: hsl(0 80% 45%);
        color: white;
        border-color: hsl(0 80% 45%);
    }

    /* Form */
    .form .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-4);
    }
    @media (width < 560px) {
        .form .grid {
            grid-template-columns: 1fr;
        }
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
        padding: 0 10px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--surface);
        color: var(--text);
        outline: none;
    }
    .field.invalid input,
    .field.invalid select {
        border-color: hsl(0 80% 50%);
        box-shadow: 0 0 0 3px hsl(0 80% 50% / 0.15);
    }
    .err {
        color: hsl(0 80% 55%);
        font-size: 12px;
    }

    .field.pw .pwWrap {
        position: relative;
        display: grid;
    }
    .field.pw .eye {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        width: 28px;
        height: 28px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        border-radius: 6px;
        background: var(--card);
        color: var(--text);
        cursor: pointer;
    }
`;

export const Styled = { Wrapper, Header, Stage, ModalOverlay };
