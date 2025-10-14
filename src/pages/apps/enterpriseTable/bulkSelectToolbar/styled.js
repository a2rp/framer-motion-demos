import styled from "styled-components";

/* ---------- Wrapper + Header ---------- */

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

    .tools {
        display: flex;
        align-items: center;
        gap: var(--space-4);
    }

    .search {
        position: relative;
        display: grid;
        grid-template-columns: 22px 1fr 30px;
        align-items: center;
        width: min(360px, 80vw);
        border: 1px solid var(--border);
        background: var(--card);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        overflow: hidden;
        padding: 0 6px 0 8px;
        height: 38px;
    }
    .search svg {
        color: var(--text-muted);
    }
    .search input {
        border: none;
        outline: none;
        background: transparent;
        color: var(--text);
        height: 100%;
        padding: 0 8px;
        width: 100%;
    }
    .search .clear {
        border: none;
        background: transparent;
        color: var(--text-muted);
        cursor: pointer;
        height: 100%;
        display: grid;
        place-items: center;
    }
`;

/* ---------- Stage + Table ---------- */

const Stage = styled.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
`;

const Table = styled.div`
    --row-h: 56px;

    display: grid;

    .thead {
        position: sticky;
        top: 0;
        z-index: 2;
        background: var(--surface);
        border-bottom: 1px solid var(--border);
    }

    .tr {
        display: grid;
        grid-template-columns: 48px 1.2fr 1.6fr 1fr 1fr 120px;
        align-items: center;
        min-height: var(--row-h);
        gap: 0;
        padding: 0 8px;
        border-bottom: 1px solid var(--border);
        will-change: transform, opacity;
    }

    .th,
    .td {
        padding: 6px 8px;
        color: var(--text);
    }

    .tbody .tr:hover {
        background: color-mix(in oklab, var(--surface) 70%, #0000);
    }

    .tbody .tr.selected {
        background: color-mix(in oklab, var(--primary) 8%, var(--card));
        box-shadow: inset 0 0 0 1px
            color-mix(in oklab, var(--primary) 28%, #0000);
    }

    /* cells */
    .check {
        display: grid;
        place-items: center;
    }
    input[type="checkbox"] {
        width: 18px;
        height: 18px;
        accent-color: var(--primary);
        cursor: pointer;
    }

    .name .user {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .avatar {
        width: 28px;
        height: 28px;
        border-radius: 8px;
        display: grid;
        place-items: center;
        font-weight: 700;
        color: var(--primary-contrast);
        background: linear-gradient(135deg, hsl(210 90% 56%), hsl(210 90% 62%));
        box-shadow: var(--shadow-sm);
    }
    .meta .nm {
        font-weight: 600;
    }
    .muted {
        color: var(--text-muted);
    }

    .email a {
        color: var(--text);
        text-decoration: none;
    }
    .email a:hover {
        text-decoration: underline;
    }

    .pill {
        display: inline-block;
        padding: 2px 8px;
        border-radius: 999px;
        background: var(--surface);
        border: 1px solid var(--border);
        font-size: 12px;
    }

    .status {
        padding: 2px 8px;
        border-radius: 8px;
        font-size: 12px;
        border: 1px solid var(--border);
    }
    .status.active {
        background: color-mix(in oklab, var(--primary) 10%, var(--surface));
    }
    .status.invited {
        background: color-mix(in oklab, #ffc107 20%, var(--surface));
    }
    .status.suspended {
        background: color-mix(in oklab, #ef4444 18%, var(--surface));
    }
`;

/* ---------- Bulk Toolbar ---------- */

const Toolbar = styled.div`
    position: sticky;
    bottom: 0;
    inset-inline: 0;
    z-index: 3;
    background: var(--card);
    border-top: 1px solid var(--border);
    box-shadow: 0 -8px 24px hsl(0 0% 0% / 0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    padding: 10px 12px;

    .count {
        font-weight: 600;
    }

    .link {
        border: none;
        background: transparent;
        color: var(--primary);
        cursor: pointer;
        text-decoration: underline;
        margin-left: 10px;
    }

    .right {
        display: flex;
        align-items: center;
        gap: var(--space-3);
    }

    .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn.danger {
        background: color-mix(in oklab, #ef4444 22%, var(--surface));
        color: var(--text);
        border-color: color-mix(in oklab, #ef4444 40%, var(--border));
    }
`;

/* ---------- Modal Overlay (as requested) ---------- */

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
        margin: 12px 0;
    }
    .field label {
        font-weight: 600;
    }
    .field input[type="text"],
    .field input[type="password"] {
        height: 38px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        padding: 0 10px;
        background: var(--surface);
        color: var(--text);
        outline: none;
    }
    .field input[aria-invalid="true"] {
        border-color: #ef4444;
    }

    .pwd {
        position: relative;
    }
    .pwd input {
        width: 100%;
        padding-right: 40px;
    }
    .pwd .eye {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 38px;
        border: none;
        background: transparent;
        color: var(--text);
        display: grid;
        place-items: center;
        cursor: pointer;
    }

    .error {
        color: #ef4444;
        font-size: 12px;
    }

    .btn {
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .btn.ghost {
        background: var(--surface);
        color: var(--text);
    }
    .btn.danger {
        background: color-mix(in oklab, #ef4444 22%, var(--surface));
        color: var(--text);
        border-color: color-mix(in oklab, #ef4444 40%, var(--border));
    }
`;

export const Styled = { Wrapper, Header, Stage, Table, Toolbar };
