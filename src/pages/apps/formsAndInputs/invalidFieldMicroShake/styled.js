import styled from "styled-components";
import { motion } from "framer-motion";

/* Local accents that respect your theme */
const danger = "hsl(0 84% 60%)";
const success = "hsl(142 72% 45%)";

const Wrapper = styled.div`
    --danger: ${danger};
    --success: ${success};

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
        gap: var(--space-6);
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        padding: var(--space-6);
    }

    .field {
        display: grid;
        gap: var(--space-3);
    }

    label {
        font-size: 13px;
        color: var(--text-muted);
    }

    input[type="text"],
    input[type="email"],
    input[type="password"],
    input[type="search"],
    input[type="url"],
    input[type="tel"] {
        width: 100%;
        height: 40px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        padding: 0 12px;
        outline: none;
        box-shadow: var(--shadow-sm);
        transition: border-color 0.15s ease, box-shadow 0.15s ease,
            background 0.15s ease;
    }
    input::placeholder {
        color: color-mix(in oklab, var(--text-muted) 70%, transparent);
    }

    input:focus {
        border-color: var(--primary);
        box-shadow: 0 0 0 3px hsl(210 90% 56% / 0.25);
    }

    .field.invalid input {
        border-color: var(--danger);
        box-shadow: 0 0 0 2px
            color-mix(in oklab, var(--danger) 40%, transparent);
    }

    .error {
        color: var(--danger);
        font-size: 12px;
    }

    .hasSuffix .inputWrap {
        position: relative;
        display: grid;
    }

    .eyeBtn {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        height: 28px;
        min-width: 34px;
        padding: 0 8px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--card);
        color: var(--text);
        display: inline-grid;
        place-items: center;
        cursor: pointer;
        box-shadow: var(--shadow-sm);
    }
    .eyeBtn:hover {
        background: var(--surface);
    }

    /* strength meter */
    .meter {
        display: grid;
        gap: 6px;
        align-items: center;
    }
    .meter .bar {
        height: 6px;
        width: 0%;
        border-radius: 999px;
        background: color-mix(in oklab, var(--primary) 85%, white 0%);
        box-shadow: inset 0 0 0 1px var(--border);
    }
    .meter .bar.s1 {
        background: color-mix(in oklab, var(--danger) 80%, white 0%);
    }
    .meter .bar.s2 {
        background: color-mix(in oklab, orange 75%, white 0%);
    }
    .meter .bar.s3 {
        background: color-mix(in oklab, #f2c94c 80%, white 0%);
    }
    .meter .bar.s4 {
        background: color-mix(in oklab, var(--success) 85%, white 0%);
    }

    .meter .hint {
        display: flex;
        gap: 10px;
        align-items: center;
        font-size: 12px;
        color: var(--text-muted);
    }
    .meter .hint .link {
        font: inherit;
        background: transparent;
        border: none;
        color: var(--primary);
        text-decoration: underline;
        cursor: pointer;
        padding: 0;
    }

    /* terms */
    .terms {
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--text);
    }
    .terms input[type="checkbox"] {
        width: 16px;
        height: 16px;
        accent-color: var(--primary);
    }
    .terms.invalid span {
        color: var(--danger);
    }

    /* actions */
    .actions {
        display: flex;
        justify-content: flex-end;
    }
    .submitBtn {
        height: 38px;
        padding: 0 16px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    .submitBtn:hover {
        filter: brightness(1.05);
    }
`;

/* Modal primitives (no JSX) */
const ModalRoot = styled(motion.div)`
    position: fixed;
    inset: 0;
    z-index: 80;
    display: grid;
    place-items: center;
    padding: var(--space-6);
    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: hsl(220 14% 10% / 0.35);
        backdrop-filter: blur(6px) saturate(1.1);
    }
`;

const ModalCard = styled(motion.div)`
    position: relative;
    z-index: 1;
    width: min(560px, 96vw);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);
    color: var(--text);
    .mHead h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }
    .mList {
        margin-left: 18px;
        display: grid;
        gap: 6px;
        color: var(--text);
    }
    .mActions {
        display: flex;
        justify-content: flex-end;
        margin-top: var(--space-4);
    }
    .ghost {
        height: 34px;
        padding: 0 12px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        cursor: pointer;
        box-shadow: var(--shadow-sm);
    }
`;

const SuccessCard = styled(ModalCard)`
    display: grid;
    justify-items: center;
    text-align: center;
    gap: var(--space-3);
    .badge {
        width: 42px;
        height: 42px;
        border-radius: 999px;
        display: grid;
        place-items: center;
        background: ${success};
        color: white;
        box-shadow: 0 8px 24px hsl(142 72% 45% / 0.35);
    }
    h3 {
        margin-top: 6px;
    }
    p {
        color: var(--text-muted);
    }
`;

export const Styled = {
    Wrapper,
    Header,
    Stage,
    ModalRoot,
    ModalCard,
    SuccessCard,
};
