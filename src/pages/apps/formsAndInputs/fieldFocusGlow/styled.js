import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 920px;
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
`;

const Form = styled.form`
    display: grid;
    gap: var(--space-6);

    .actions {
        display: flex;
        justify-content: flex-end;
    }

    .btn.primary {
        height: 40px;
        padding: 0 18px;
        border-radius: var(--radius-md);
        border: 1px solid transparent;
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.primary:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

const Field = styled.div`
    display: grid;
    gap: 8px;

    .label {
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .label .req {
        color: hsl(0 72% 56%);
    }

    .inlineLabel {
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
        color: var(--text-muted);
        padding: 2px 8px;
        border-radius: 999px;
        background: var(--surface);
        border: 1px solid var(--border);
    }

    .control {
        position: relative;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--surface);
        padding: 10px 12px;
        box-shadow: var(--shadow-sm);
        overflow: hidden; /* ring stays neat inside */
    }

    .ring {
        position: absolute;
        inset: -1.5px; /* just outside the border for a nicer glow edge */
        border-radius: calc(var(--radius-md) + 2px);
        pointer-events: none;
        background: radial-gradient(
                180px 30px at 10% 0%,
                hsl(210 90% 60% / 0.18),
                transparent
            ),
            radial-gradient(
                180px 30px at 90% 100%,
                hsl(210 90% 60% / 0.18),
                transparent
            );
        box-shadow: 0 0 0 2px hsl(210 90% 56% / 0.25),
            0 8px 22px hsl(210 90% 40% / 0.18);
        z-index: 0;
    }

    input,
    select {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 28px;
        border: none;
        outline: none;
        background: transparent;
        color: var(--text);
        font-size: 14px;
        font-family: inherit;
    }

    select {
        height: 32px;

        option {
            background-color: var(--card); /* list row bg */
            color: var(--text); /* list row text */
        }
    }

    .iconBtn {
        position: relative;
        z-index: 1;
        display: inline-grid;
        place-items: center;
        width: 36px;
        height: 32px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        cursor: pointer;
    }

    .meta {
        min-height: 18px;
    }
    .hint {
        color: var(--text-muted);
        font-size: 12px;
    }
    .error {
        color: hsl(0 72% 60%);
        font-size: 12px;
        font-weight: 600;
    }

    /* Password strength bar */
    .pwBar {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 10px;
    }
    .pwBar .bar {
        height: 6px;
        border-radius: 999px;
        background: linear-gradient(
            90deg,
            hsl(0 80% 60% / 0.8),
            hsl(30 90% 55% / 0.9),
            hsl(120 70% 45% / 0.9)
        );
        box-shadow: inset 0 0 0 1px hsl(0 0% 0% / 0.15);
    }
    .pwBar .label {
        color: var(--text-muted);
        font-size: 12px;
    }
`;

const CheckRow = styled.div`
    display: grid;
    gap: 6px;

    .checkbox {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        user-select: none;
    }

    .checkbox input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }
    .checkbox .box {
        width: 18px;
        height: 18px;
        border-radius: 6px;
        border: 1px solid var(--border);
        background: var(--surface);
        box-shadow: var(--shadow-sm);
        position: relative;
    }
    .checkbox input:checked + .box {
        border-color: hsl(210 90% 56%);
        background: linear-gradient(180deg, hsl(210 90% 62%), hsl(210 90% 56%));
    }
    .checkbox input:checked + .box::after {
        content: "";
        position: absolute;
        inset: 0;
        background: conic-gradient(
            from 0deg,
            transparent 0 250deg,
            var(--primary-contrast) 0 360deg
        );
        -webkit-mask: radial-gradient(
            7px at 50% 50%,
            transparent 6px,
            black 6.5px
        );
        mask: radial-gradient(7px at 50% 50%, transparent 6px, black 6.5px);
        opacity: 0.9;
    }

    .error {
        color: hsl(0 72% 60%);
        font-size: 12px;
        font-weight: 600;
    }
`;

/* -------- Modal styles -------- */
const ModalBackdrop = styled.div.attrs({ className: "modal-backdrop" })`
    position: fixed;
    inset: 0;
    z-index: 40;
    background: hsl(220 18% 5% / 0.45);
    backdrop-filter: blur(0px);
`;
const ModalCard = styled.div.attrs({ className: "modal-card" })`
    position: fixed;
    inset: 0;
    z-index: 41;
    display: grid;
    place-items: center;
    pointer-events: none;
    > div {
        pointer-events: auto;
    }
    & {
        /* inner card */
    }
    .check {
        display: grid;
        place-items: center;
        width: 48px;
        height: 48px;
        border-radius: 999px;
        background: var(--surface);
        border: 1px solid var(--border);
        color: hsl(140 60% 45%);
        margin: 0 auto var(--space-4);
    }
    .modal-card {
        position: relative;
    }
`;
/* actual card element */
const ModalCardInner = styled.div`
    background: var(--card);
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    width: min(480px, 92vw);
    padding: var(--space-6);
    text-align: center;

    h3 {
        font-size: 20px;
        margin-bottom: 8px;
    }
    p {
        color: var(--text-muted);
        margin-bottom: var(--space-4);
    }

    .btn.primary {
        height: 36px;
        padding: 0 16px;
        border-radius: var(--radius-md);
        border: 1px solid transparent;
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
`;

/* export all */
export const Styled = {
    Wrapper,
    Header,
    Stage,
    Form,
    Field,
    CheckRow,
    // For modal, classNames are targeted by motion in JSX (no extra export needed)
};
