import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: grid;
        gap: var(--space-6);
        padding: var(--space-6);
        max-width: 880px;
        margin: 0 auto;
        color: var(--text);
    `,

    Header: styled.header`
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
            display: grid;
            grid-auto-flow: column;
            align-items: center;
            gap: var(--space-4);
        }

        .btn {
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            border-radius: var(--radius-md);
            padding: 8px 14px;
            box-shadow: var(--shadow-sm);
            cursor: pointer;
        }
        .btn.primary {
            background: var(--primary);
            color: var(--primary-contrast);
            border-color: transparent;
        }
        .btn:disabled {
            opacity: 0.45;
            cursor: not-allowed;
        }

        .count {
            color: var(--text-muted);
            min-width: 64px;
            text-align: center;
            font-variant-numeric: tabular-nums;
        }
    `,

    List: styled.div`
        display: grid;
        gap: var(--space-3);
    `,

    Item: styled.div`
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-sm);
        overflow: hidden;
    `,

    Trigger: styled.button`
        all: unset;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: var(--space-3);
        width: 100%;
        padding: var(--space-4) var(--space-6);
        cursor: pointer;
        background: var(--card);
        color: var(--text);

        &:hover {
            background: var(--surface);
        }
        &:focus-visible {
            outline: var(--focus-ring);
            border-radius: var(--radius-lg);
        }
    `,

    Title: styled.span`
        font-weight: 600;
    `,

    Icon: styled.span`
        display: inline-grid;
        place-items: center;
        width: 28px;
        height: 28px;
        color: var(--text-muted);
    `,

    Panel: styled.div`
        /* grid trick: this container animates 0fr -> 1fr nicely */
        display: grid;
        grid-template-rows: 0fr;
        transition: background 120ms ease;

        .panelInner {
            overflow: hidden; /* required for the grid trick */
            padding: 0 var(--space-6) var(--space-6);
            background: var(--card);
            color: var(--text);
        }

        .body {
            color: var(--text);
            margin-bottom: var(--space-3);
        }
        .bullets {
            margin-left: 18px;
            display: grid;
            gap: 6px;
            color: var(--text);
        }
    `,

    Notes: styled.aside`
        color: var(--text-muted);
        border-top: 1px solid var(--border);
        padding-top: var(--space-4);

        h3 {
            color: var(--text);
            margin-bottom: var(--space-2);
        }
        ul {
            padding-left: 18px;
        }
    `,
};
