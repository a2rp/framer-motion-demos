import styled from "styled-components";

/* ---- Modal overlay from your spec (unchanged structurally) ---- */
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

/* ------------------------------- Page styles ------------------------------- */
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

const Stepper = styled.div`
    display: grid;
    gap: var(--space-4);

    .bar {
        height: 8px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        overflow: hidden;
        box-shadow: inset 0 1px 2px hsl(0 0% 0% / 0.06);
    }
    .fill {
        height: 100%;
        background: linear-gradient(90deg, hsl(210 90% 56%), hsl(210 90% 62%));
    }

    .dots {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-3);
        padding: 0;
        margin: 0;
        text-align: center;
    }
    .dots li {
        display: grid;
        justify-items: center;
        gap: 6px;
    }
    .dot {
        position: relative;
        width: 28px;
        height: 28px;
        border-radius: 999px;
        background: var(--card);
        border: 1px solid var(--border);
        display: grid;
        place-items: center;
        box-shadow: var(--shadow-sm);
    }
    .dots li.done .dot {
        border-color: hsl(210 90% 56%);
        background: color-mix(in oklab, var(--card) 80%, hsl(210 90% 56%));
    }
    .halo {
        position: absolute;
        inset: -6px;
        border-radius: 999px;
        box-shadow: 0 0 0 3px hsl(210 90% 56% / 0.3);
        pointer-events: none;
    }
    .idx {
        font-size: 12px;
        color: var(--text);
    }
    .label {
        font-size: 12px;
        color: var(--text-muted);
    }
`;

const Stage = styled.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    padding: var(--space-6);

    form {
        display: grid;
        gap: var(--space-6);
    }

    .panel {
        display: grid;
        gap: var(--space-6);
    }

    fieldset {
        border: 1px dashed var(--border);
        border-radius: var(--radius-md);
        padding: var(--space-4);
    }
    legend {
        padding: 0 8px;
        color: var(--text-muted);
        font-size: 12px;
    }

    .grid2 {
        display: grid;
        gap: var(--space-4);
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .grid2 > *[wide] {
        grid-column: 1 / -1;
    }

    .review .summary {
        margin-left: 18px;
        display: grid;
        gap: 6px;
    }
    .muted {
        color: var(--text-muted);
    }
`;

const Field = styled.div`
    display: grid;
    gap: 8px;

    label {
        font-size: 13px;
        color: var(--text);
    }

    input[type="text"],
    input[type="email"],
    input[type="password"],
    input[type="url"],
    textarea,
    select {
        height: 38px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 12px;
        outline: none;
        box-shadow: var(--shadow-sm);
        transition: box-shadow 0.2s ease, border-color 0.2s ease,
            background 0.2s ease;
    }
    textarea {
        height: auto;
        padding: 10px 12px;
        resize: vertical;
        min-height: 90px;
    }

    input:focus,
    textarea:focus,
    select:focus {
        border-color: hsl(210 90% 56%);
        box-shadow: var(--shadow-sm), 0 0 0 3px hsl(210 90% 56% / 0.28);
    }

    .err {
        color: hsl(0 80% 60%);
        font-size: 12px;
    }

    &.invalid input,
    &.invalid textarea,
    &.invalid select {
        border-color: hsl(0 80% 60%);
        box-shadow: var(--shadow-sm), 0 0 0 2px hsl(0 80% 60% / 0.25);
    }

    /* radios / checkboxes */
    .row {
        display: flex;
        gap: 14px;
        align-items: center;
        flex-wrap: wrap;
    }
    .radio {
        display: inline-flex;
        gap: 8px;
        align-items: center;
    }
    .radio input {
        width: 16px;
        height: 16px;
    }
    .check {
        display: inline-flex;
        gap: 8px;
        align-items: center;
    }

    /* password eye */
    &.pw .pwWrap {
        position: relative;
    }
    &.pw .eye {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        width: 32px;
        height: 28px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--card);
        cursor: pointer;
        color: var(--text);
    }
`;

const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: var(--space-4);

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 16px;
        height: 38px;
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
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const Styled = {
    Wrapper,
    Header,
    Stepper,
    Stage,
    Field,
    Actions,
    ModalOverlay,
};
