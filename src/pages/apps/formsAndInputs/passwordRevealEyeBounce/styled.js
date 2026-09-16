import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 880px;
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
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);

    .form {
        display: grid;
        gap: var(--space-6);
    }
    .field {
        display: grid;
        gap: var(--space-3);
    }
    label {
        font-weight: 600;
        color: var(--text);
    }

    .inputWrap {
        position: relative;
        display: grid;
    }

    input {
        width: 100%;
        height: 42px;
        padding: 0 44px 0 12px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        outline: none;
        transition: box-shadow 0.15s ease, border-color 0.15s ease;
    }
    input::placeholder {
        color: var(--text-muted);
    }
    input:focus {
        border-color: hsl(210 90% 56% / 0.6);
        box-shadow: 0 0 0 3px hsl(210 90% 56% / 0.18);
    }
    input[aria-invalid="true"] {
        border-color: hsl(8 80% 55%);
        box-shadow: 0 0 0 3px hsl(8 80% 55% / 0.18);
    }

    /* Eye button - vertically centered without transforms */
    .eyeBtn {
        position: absolute;
        right: 6px;
        top: 0;
        bottom: 0;
        margin-block: auto;
        height: 32px;
        width: 32px;
        border-radius: 999px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        cursor: pointer;
        box-shadow: var(--shadow-sm);
        line-height: 0;
        transform: none;
    }
    .eyeBtn svg {
        display: block;
    }

    /* strength meter */
    .meter {
        margin-top: 10px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 999px;
        height: 10px;
        position: relative;
        overflow: hidden;
    }
    .meter .bar {
        height: 100%;
        width: 0%;
        background: var(--primary);
    }
    .meter .label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--text-muted);
        font-size: 12px;
        margin-top: 6px;
    }
    .meter .label .score {
        font-variant-numeric: tabular-nums;
        color: var(--text);
    }

    .criteria {
        display: grid;
        gap: 8px;
        margin-top: 6px;
        list-style: none;
        padding: 0;
    }
    .criteria li {
        display: grid;
        grid-template-columns: 20px 1fr;
        gap: 8px;
        align-items: center;
        color: var(--text);
    }
    .criteria li .dotWrap {
        position: relative;
        width: 16px;
        height: 16px;
    }
    .criteria li .dot {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: var(--border);
    }
    .criteria li .check {
        position: absolute;
        inset: 0;
        background: radial-gradient(
                closest-side,
                var(--primary) 60%,
                transparent 61%
            )
            center/100% 100% no-repeat;
        mask: linear-gradient(#000 0 0) padding-box,
            radial-gradient(6px at 50% 55%, transparent 98%, #000 100%);
    }
    .criteria li.ok .text {
        color: var(--text);
    }
    .criteria li.bad .text {
        color: var(--text-muted);
    }

    .error {
        color: hsl(8 80% 60%);
        font-size: 13px;
    }

    .actions {
        display: flex;
        gap: var(--space-4);
        justify-content: flex-end;
        align-items: center;
    }
    .btn {
        height: 40px;
        border-radius: var(--radius-md);
        padding: 0 16px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

/* ---- Your requested modal styles ---- */
const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 50;
    background: color-mix(in oklab, var(--bg) 40%, #0000);
    backdrop-filter: blur(8px) saturate(1.1);
    -webkit-backdrop-filter: blur(8px) saturate(1.1);
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
`;

export const Styled = { Wrapper, Header, Stage, ModalOverlay };
