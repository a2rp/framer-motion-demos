import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: grid;
        gap: var(--space-6);
        padding: var(--space-6);
        max-width: 720px;
        margin: 0 auto;
        color: var(--text);
    `,

    Header: styled.header`
        .heading h1 {
            font-size: 24px;
            line-height: 1.2;
        }
        .heading .muted {
            color: var(--text-muted);
            margin-top: 6px;
        }
    `,

    Stage: styled.section`
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        padding: var(--space-6);

        form {
            display: grid;
            gap: var(--space-4);
        }

        .field {
            display: grid;
            gap: 8px;
            padding: var(--space-4);
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            background: var(--surface);
            /* animation will temporarily add a focus ring/box-shadow */
            will-change: transform, box-shadow;
        }

        label {
            font-size: 13px;
            color: var(--text-muted);
        }

        input {
            height: 38px;
            padding: 0 12px;
            color: var(--text);
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-sm);
            outline: none;
        }
        input:focus {
            box-shadow: var(--focus-ring);
            border-color: var(--primary);
        }

        .hint {
            font-size: 12px;
            color: var(--text-muted);
        }

        .actions {
            display: flex;
            gap: var(--space-4);
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
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
        .btn.primary {
            background: var(--primary);
            color: var(--primary-contrast);
            border-color: transparent;
        }
        .btn.ghost {
            background: var(--surface);
        }

        .messages {
            min-height: 24px;
        }
        .error {
            margin-top: 4px;
            color: hsl(0 85% 60%);
            font-weight: 600;
        }
        .ok {
            margin-top: 4px;
            color: hsl(150 60% 45%);
            font-weight: 600;
        }
    `,

    Notes: styled.aside`
        color: var(--text-muted);
        h3 {
            color: var(--text);
            margin-bottom: 6px;
        }
        ul {
            padding-left: 18px;
        }
    `,
};
