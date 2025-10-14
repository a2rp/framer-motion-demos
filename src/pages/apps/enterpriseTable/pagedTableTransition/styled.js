import styled from "styled-components";

/* --- Shell --- */
const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    color: var(--text);

    /* BULK TOOLBAR lives OUTSIDE Stage → style it here */
    .bulk {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: color-mix(in oklab, var(--card) 85%, var(--primary) 15%);
        box-shadow: var(--shadow-sm);
        /* keep it visually attached to table */
        margin-top: -6px;
        margin-bottom: 6px;
    }
    .bulk .label {
        font-weight: 600;
        margin-right: 6px;
    }

    /* Buttons inside bulk bar */
    .bulk .btn {
        height: 30px;
        padding: 0 12px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        transition: background 0.2s ease, border-color 0.2s ease,
            box-shadow 0.2s ease, transform 0.08s ease;
    }
    .bulk .btn:hover {
        background: color-mix(in oklab, var(--surface) 85%, var(--primary) 15%);
        box-shadow: 0 4px 12px hsl(0 0% 0% / 0.12);
    }
    .bulk .btn:active {
        transform: translateY(1px);
    }
    .bulk .btn:focus-visible {
        outline: none;
        box-shadow: var(--shadow-sm), var(--focus-ring);
    }

    /* Clear */
    .bulk .btn.ghost {
        background: var(--surface);
        color: var(--text);
        border-color: var(--border);
    }
    .bulk .btn.ghost:hover {
        background: color-mix(in oklab, var(--surface) 80%, var(--primary) 20%);
        border-color: color-mix(
            in oklab,
            var(--border) 70%,
            var(--primary) 30%
        );
    }

    /* Delete */
    .bulk .btn.danger {
        background: hsl(6 78% 57%);
        color: #fff;
        border-color: transparent;
    }
    .bulk .btn.danger:hover {
        background: color-mix(in oklab, hsl(6 78% 57%) 85%, white 15%);
    }
    .bulk .btn.danger:active {
        background: color-mix(in oklab, hsl(6 78% 57%) 90%, black 10%);
    }
    .bulk .btn.danger:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
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
        flex-wrap: wrap;
        align-items: center;
        gap: var(--space-4);
    }

    .search input {
        width: 260px;
        max-width: 60vw;
        height: 36px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--surface);
        color: var(--text);
        padding: 0 12px;
        outline: none;
    }

    .size {
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        column-gap: 8px;
    }
    .size label {
        font-size: 12px;
        color: var(--text-muted);
    }
    .size select {
        height: 36px;
        min-width: 84px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--surface);
        color: var(--text);
        padding: 0 10px;
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

/* --- Table card --- */
const Stage = styled.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    .thead .row.head {
        display: grid;
        grid-template-columns: 40px 1.1fr 1.4fr 0.9fr 0.9fr 0.9fr auto;
        gap: 6px;
        align-items: center;
        padding: 12px;
        border-bottom: 1px solid var(--border);
        background: var(--surface);
        color: var(--text-muted);
    }
    .thead .cell.chk {
        display: grid;
        place-items: center;
    }
    .thead .cell.sort {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 10px;
        border-radius: var(--radius-sm);
        background: transparent;
        border: 1px solid transparent;
        color: var(--text);
        cursor: pointer;
    }
    .thead .cell.sort:hover {
        border-color: var(--border);
        background: color-mix(in oklab, var(--surface) 92%, var(--primary) 8%);
    }
    .thead .cell.sort.active {
        color: var(--text);
        border-color: var(--border);
    }
    .thead .sortIcon {
        display: inline-grid;
        place-items: center;
    }

    .tbody .page {
        position: relative;
    }
    .tbody .rows {
        display: grid;
    }
    .tbody .row.body {
        display: grid;
        grid-template-columns: 40px 1.1fr 1.4fr 0.9fr 0.9fr 0.9fr auto;
        gap: 6px;
        align-items: center;
        padding: 12px;
        border-bottom: 1px solid var(--border);
    }
    .tbody .row.body:hover {
        background: color-mix(in oklab, var(--surface) 90%, var(--primary) 10%);
    }
    .tbody .row.body.is-selected {
        background: color-mix(in oklab, var(--surface) 80%, var(--primary) 20%);
    }

    .cell {
        min-width: 0;
    }
    .cell b {
        display: block;
    }
    .cell .sub {
        color: var(--text-muted);
        font-size: 12px;
    }
    .cell.actions {
        display: inline-flex;
        gap: 8px;
        justify-content: flex-end;
    }
    .cell.actions .btn.sm {
        height: 30px;
        padding: 0 10px;
        border-radius: var(--radius-sm);
        background: var(--surface);
        color: var(--text);
        border: 1px solid var(--border);
        cursor: pointer;
    }

    .pill {
        display: inline-flex;
        align-items: center;
        height: 24px;
        padding: 0 10px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 600;
        border: 1px solid var(--border);
        background: var(--surface);
    }
    .pill.active {
        background: hsl(142 72% 28% / 0.12);
        color: hsl(142 70% 45%);
        border-color: hsl(142 40% 35% / 0.25);
    }
    .pill.invited {
        background: hsl(210 90% 56% / 0.12);
        color: hsl(210 90% 50%);
        border-color: hsl(210 60% 45% / 0.25);
    }
    .pill.suspended {
        background: hsl(6 78% 57% / 0.12);
        color: hsl(6 78% 50%);
        border-color: hsl(6 60% 45% / 0.25);
    }

    .empty {
        padding: 28px;
        color: var(--text-muted);
    }

    .tfoot .pager {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 12px;
        gap: 10px;
        border-top: 1px solid var(--border);
        background: var(--surface);
    }
    .tfoot .pager .btn {
        height: 34px;
        padding: 0 12px;
        border-radius: var(--radius-sm);
        background: var(--card);
        color: var(--text);
        border: 1px solid var(--border);
        cursor: pointer;
    }
    .tfoot .pager .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    .tfoot .pageInfo {
        color: var(--text-muted);
    }
`;

/* --- Toast --- */
const Toast = styled.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 40;
    border: 1px solid var(--border);
    background: var(--card);
    color: var(--text);
    padding: 10px 14px;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
`;

/* --- Modal overlay (unchanged) --- */
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

    .btn {
        height: 36px;
        padding: 0 14px;
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
        background: var(--surface);
    }
    .btn.danger {
        background: hsl(6 78% 57%);
        border-color: transparent;
        color: white;
    }

    .field {
        display: grid;
        gap: 6px;
    }
    .field.hasErr input,
    .field.hasErr select {
        border-color: hsl(6 78% 57%);
    }
    .field label {
        font-size: 12px;
        color: var(--text-muted);
    }
    .field input,
    .field select {
        height: 36px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--surface);
        color: var(--text);
        padding: 0 12px;
        outline: none;
    }
    .field .err {
        color: hsl(6 78% 57%);
        font-size: 12px;
    }

    .grid2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-4);
    }
    .withEye .eyeWrap {
        position: relative;
    }
    .withEye input {
        padding-right: 34px;
    }
    .withEye .eyeBtn {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        width: 28px;
        height: 28px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        border-radius: 8px;
        background: var(--card);
        cursor: pointer;
        color: var(--text);
    }

    .kv {
        display: grid;
        grid-template-columns: 120px 1fr;
        column-gap: 12px;
        row-gap: 8px;
        align-items: center;
    }
    .kv dt {
        color: var(--text-muted);
        font-size: 12px;
    }
    .kv dd {
        margin: 0;
    }

    @media (width < 640px) {
        .grid2 {
            grid-template-columns: 1fr;
        }
        .kv {
            grid-template-columns: 1fr;
        }
    }
`;

export const Styled = { Wrapper, Header, Stage, Toast };
