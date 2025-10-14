import styled from "styled-components";

/* Page scaffold */
const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1100px;
    margin: 0 auto;
    color: var(--text);
`;

const Header = styled.header`
    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`;

const Stage = styled.section`
    position: relative;
    min-height: 80px;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(0deg, hsl(0 0% 100% / 0.02), transparent),
            repeating-linear-gradient(
                90deg,
                hsl(0 0% 0% / 0.04) 0 1px,
                transparent 1px 40px
            ),
            repeating-linear-gradient(
                0deg,
                hsl(0 0% 0% / 0.04) 0 1px,
                transparent 1px 40px
            );
        pointer-events: none;
    }

    .fab {
        position: absolute;
        right: 20px;
        bottom: 20px;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 12px 16px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        outline: none;
        font-weight: 600;
    }
    .fab .label {
        display: inline;
    }
    @media (width < 560px) {
        .fab .label {
            display: none;
        }
    }

    .sentPill {
        position: absolute;
        right: 20px;
        bottom: 74px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: var(--surface);
        color: var(--text);
        border: 1px solid var(--border);
        border-radius: 999px;
        padding: 6px 10px;
        box-shadow: var(--shadow-sm);
        pointer-events: none;
    }

    .overlay {
        position: fixed;
        inset: 0;
        z-index: 40;
        background: color-mix(in oklab, var(--bg) 40%, #0000);
        backdrop-filter: blur(8px) saturate(1.05);
    }
`;

/* Compose Modal overlay */
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
        width: min(720px, 96vw);
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
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }
    .mFoot {
        border-bottom: none;
        border-top: 1px solid var(--border);
        justify-content: flex-end;
        gap: 10px;
    }
    .mBody {
        padding: 16px;
        display: grid;
        gap: var(--space-4);
    }
    .mHead h3 {
        font-size: 18px;
    }
    .title .muted {
        color: var(--text-muted);
    }

    .iconBtn {
        width: 34px;
        height: 34px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-md);
        cursor: pointer;
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
        opacity: 0.6;
        cursor: not-allowed;
    }

    .btn .spinner {
        width: 16px;
        height: 16px;
        border-radius: 999px;
        border: 2px solid hsl(0 0% 100% / 0.4);
        border-top-color: var(--primary-contrast);
        animation: spin 0.8s linear infinite;
    }
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    .twoCol {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-4);
    }
    @media (width < 720px) {
        .twoCol {
            grid-template-columns: 1fr;
        }
    }

    .field {
        display: grid;
        gap: 6px;
    }
    .field label {
        font-size: 12px;
        color: var(--text-muted);
    }
    .field input[type="text"],
    .field input[type="password"],
    .field input[type="file"],
    .field textarea {
        width: 100%;
        min-height: 36px;
        padding: 8px 10px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        outline: none;
    }
    .field textarea {
        resize: vertical;
    }
    .field input[aria-invalid="true"],
    .field textarea[aria-invalid="true"] {
        border-color: hsl(3 90% 62%);
        box-shadow: 0 0 0 3px hsl(3 90% 62% / 0.15);
    }
    .error {
        color: hsl(3 90% 62%);
        font-size: 12px;
    }
    .hint {
        color: var(--text-muted);
        font-size: 12px;
    }

    .attach {
        align-self: start;
    }
    .attachRow {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .attachBtn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 6px 10px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        cursor: pointer;
    }
    .attach input[type="file"] {
        display: none;
    }
    .attach .meta {
        color: var(--text-muted);
        font-size: 12px;
    }
    .fileList {
        margin: 6px 0 0 0;
        padding-left: 18px;
        display: grid;
        gap: 4px;
    }
    .fileList li {
        display: flex;
        gap: 8px;
        color: var(--text);
    }
    .fileList .size {
        color: var(--text-muted);
    }

    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .checkbox {
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .checkbox input {
        width: 16px;
        height: 16px;
    }

    .protect {
        display: grid;
        gap: 10px;
        align-content: start;
    }
    .pwRow {
        display: grid;
        gap: 6px;
    }
    .pwWrap {
        position: relative;
        display: grid;
    }
    .pwWrap .iconBtn.eye {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        background: var(--card);
    }
`;

/* ===== Sent Items styles ===== */
const SentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    .muted {
        color: var(--text-muted);
    }
    .btn {
        height: 34px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const SentGrid = styled.div`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);

    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space-4);

    @media (width < 980px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (width < 640px) {
        grid-template-columns: 1fr;
    }

    .empty {
        grid-column: 1 / -1;
        color: var(--text-muted);
    }

    .card {
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--surface);
        box-shadow: var(--shadow-sm);
        color: var(--text);
        display: grid;
        gap: 10px;
        padding: var(--space-4);
    }
    .cHead {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        align-items: baseline;
    }
    .cHead h3 {
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .cHead .date {
        color: var(--text-muted);
        font-size: 12px;
        white-space: nowrap;
    }

    .chips {
        gap: 8px;
        display: flex;
        flex-wrap: wrap;
    }
    .chip {
        border: 1px solid var(--border);
        background: var(--card);
        border-radius: 999px;
        padding: 2px 8px;
        font-size: 12px;
        color: var(--text);
    }
    .chip.more {
        color: var(--text-muted);
    }

    .snippet {
        color: var(--text);
        opacity: 0.9;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    }
    .badges {
        display: inline-flex;
        gap: 8px;
        flex-wrap: wrap;
    }
    .badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: 999px;
        padding: 2px 8px;
        font-size: 12px;
    }
    .badge.lock {
        background: hsl(210 90% 56% / 0.1);
    }
    .badge.attach {
        background: hsl(210 90% 56% / 0.06);
    }

    .iconBtn.danger {
        width: 32px;
        height: 32px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        background: var(--surface);
        color: hsl(3 90% 62%);
        border-radius: var(--radius-md);
        cursor: pointer;
    }
`;

/* ===== Self-made Confirm Modal (Delete / Clear All) ===== */
const ConfirmOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 60; /* above compose modal */
    background: color-mix(in oklab, var(--bg) 40%, #0000);
    backdrop-filter: blur(8px) saturate(1.1);
    display: grid;
    place-items: center;
    padding: var(--space-6);

    .modal {
        width: min(480px, 96vw);
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
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }
    .mFoot {
        border-bottom: none;
        border-top: 1px solid var(--border);
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
    .btn.ghost {
        background: var(--surface);
    }
    .btn.danger {
        background: hsl(3 90% 58%);
        color: #fff;
        border-color: transparent;
    }
`;

export const Styled = {
    Wrapper,
    Header,
    Stage,
    ModalOverlay,
    SentHeader,
    SentGrid,
    ConfirmOverlay,
};
