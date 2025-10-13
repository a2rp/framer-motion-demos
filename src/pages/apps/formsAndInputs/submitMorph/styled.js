import styled from "styled-components";

/* local tokens (success/error) fall back to HSL if not provided globally */
const Wrapper = styled.div`
    --ok: hsl(152 70% 35%);
    --err: hsl(0 70% 55%);

    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 820px;
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
    .form {
        display: grid;
        gap: var(--space-4);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        padding: var(--space-6);
    }

    .field {
        display: grid;
        gap: 8px;
    }

    .twoCol {
        grid-template-columns: 1fr;
    }

    label {
        font-size: 13px;
        color: var(--text-muted);
    }

    input[type="text"],
    input[type="email"],
    input[type="password"] {
        height: 40px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        padding: 0 12px;
        outline: none;
        box-shadow: var(--shadow-sm);
        transition: box-shadow 0.2s ease, border-color 0.2s ease,
            background 0.2s ease;
    }
    input::placeholder {
        color: color-mix(in oklab, var(--text-muted) 80%, transparent);
    }

    input:focus {
        border-color: transparent;
        box-shadow: var(--focus-ring);
        background: color-mix(in oklab, var(--surface) 70%, var(--card));
    }

    .withEye {
        position: relative;
        display: grid;
    }
    .withEye .eye {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        width: 34px;
        height: 34px;
        display: grid;
        place-items: center;
        border-radius: var(--radius-sm);
        border: 1px solid transparent;
        background: transparent;
        color: var(--text-muted);
        cursor: pointer;
    }
    .withEye .eye:hover {
        background: var(--surface);
        border-color: var(--border);
    }

    .hint {
        font-size: 12px;
        color: var(--text-muted);
    }

    .error {
        color: var(--err);
        font-size: 12px;
    }

    .agreeRow {
        display: grid;
        gap: 6px;
        margin-top: 2px;
    }

    .checkbox {
        display: inline-flex;
        gap: 10px;
        align-items: center;
        color: var(--text);
    }
    .checkbox input {
        width: 18px;
        height: 18px;
        accent-color: var(--primary);
    }
    .checkbox a {
        color: var(--primary);
        text-decoration: none;
    }
    .checkbox a:hover {
        text-decoration: underline;
    }

    .submitRow {
        display: flex;
        justify-content: flex-end;
        margin-top: 6px;
    }

    .submitBtn {
        border: 1px solid transparent;
        background: var(--primary);
        color: var(--primary-contrast);
        height: 44px;
        min-width: 44px; /* for circle state */
        padding: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        overflow: hidden;
    }
    .submitBtn:disabled {
        opacity: 0.75;
        cursor: not-allowed;
    }

    .btnContent {
        position: relative;
        display: grid;
        place-items: center;
        width: 100%;
        height: 100%;
    }
    .btnLabel {
        padding: 0 16px;
        font-weight: 600;
        letter-spacing: 0.15px;
    }
    .btnIcon {
        display: inline-grid;
        place-items: center;
    }

    .sr {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        white-space: nowrap;
    }
`;

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
