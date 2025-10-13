import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 900px;
    margin: 0 auto;
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
        grid-template-columns: auto auto;
        align-items: center;
        column-gap: 8px;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
    }

    /* Toggle pill */
    .toggle {
        inline-size: 44px;
        block-size: 24px;
        border-radius: 999px;
        background: var(--surface);
        border: 1px solid var(--border);
        display: inline-grid;
        place-items: center;
        padding: 0;
        cursor: pointer;
        position: relative;
    }
    .toggle i {
        position: absolute;
        inset-inline-start: 3px;
        inset-block-start: 3px;
        inline-size: 18px;
        block-size: 18px;
        border-radius: 999px;
        background: var(--border);
        transition: transform 0.2s ease, background 0.2s ease;
    }
    .toggle.on {
        background: var(--primary);
        border-color: var(--primary);
    }
    .toggle.on i {
        transform: translateX(20px);
        background: var(--primary-contrast);
    }

    .btn,
    .ctrl input[type="range"] {
        height: 34px;
    }

    .btn {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 14px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }
    .btnLabel {
        white-space: nowrap;
    }

    .ctrl input[type="range"] {
        width: 180px;
        accent-color: var(--primary);
    }
    .ctrl em {
        font-style: normal;
        font-size: 12px;
        color: var(--text-muted);
        padding-inline-start: 6px;
    }
`;

const Stage = styled.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);

    .editor {
        display: grid;
        gap: var(--space-4);
    }
    label {
        color: var(--text-muted);
        font-size: 12px;
    }
    textarea {
        min-height: 160px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        padding: var(--space-4);
        outline: none;
        box-shadow: var(--shadow-sm);
    }
    textarea:focus {
        box-shadow: var(--shadow-sm), var(--focus-ring);
    }

    .status {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 6px 10px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        width: fit-content;
    }
    .status .dot {
        inline-size: 10px;
        block-size: 10px;
        border-radius: 999px;
        background: var(--border);
    }
`;

const Notes = styled.aside`
    color: var(--text-muted);
    h3 {
        color: var(--text);
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
    }
`;

/* Icon + pulse visuals for the Save button */
const IconStyles = styled.div`
    .iconWrap {
        position: relative;
        inline-size: 18px;
        block-size: 18px;
        display: inline-grid;
        place-items: center;
    }
    .iconWrap .glyph .svg {
        inline-size: 18px;
        block-size: 18px;
        display: block;
    }

    .iconWrap .ring {
        position: absolute;
        inset: -8px;
        border-radius: 999px;
        border: 2px solid currentColor;
        opacity: 0;
    }

    /* Color cues by state */
    .iconWrap.saving {
        color: var(--primary);
    }
    .iconWrap.saved {
        color: hsl(145 70% 45%);
    }
`;

export const Styled = { Wrapper, Header, Stage, Notes, IconStyles };
