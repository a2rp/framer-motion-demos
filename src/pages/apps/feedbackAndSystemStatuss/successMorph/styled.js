import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 720px;
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

const Panel = styled.div`
    display: grid;
    gap: var(--space-4);

    .btn {
        --ok: hsl(152 60% 40%); /* success color */
        --ok-contrast: white;
        --idle-bg: var(--primary);
        --idle-color: var(--primary-contrast);
        --loading-bg: var(--surface);
        --loading-color: var(--text);
        --ring: 0 0 0 3px hsl(210 90% 56% / 0.35);

        display: inline-flex;
        align-items: center;
        gap: 10px;
        height: 40px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--idle-bg);
        color: var(--idle-color);
        box-shadow: var(--shadow-sm);
        cursor: pointer;

        &:focus-visible {
            outline: none;
            box-shadow: var(--shadow-sm), var(--ring);
        }
        &:disabled {
            cursor: not-allowed;
            opacity: 0.7;
        }

        /* state colors */
        &[data-state="loading"] {
            background: var(--loading-bg);
            color: var(--loading-color);
        }
        &[data-state="success"] {
            background: var(--ok);
            color: var(--ok-contrast);
            border-color: transparent;
            transition: background 0.2s ease, color 0.2s ease,
                border-color 0.2s ease;
        }

        .icon {
            width: 22px;
            height: 22px;
            display: inline-grid;
            place-items: center;
        }
        .spinner {
            width: 20px;
            height: 20px;
        }
        .label {
            white-space: nowrap;
        }
    }

    .aux {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        color: var(--text-muted);
    }

    .link {
        border: none;
        background: transparent;
        color: var(--primary);
        cursor: pointer;
        padding: 0 2px;
        height: 28px;
        border-radius: 6px;

        &:hover {
            text-decoration: underline;
        }
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    }
`;

const Notes = styled.aside`
    color: var(--text-muted);
    ul {
        padding-left: 18px;
    }
`;

export const Styled = { Wrapper, Header, Stage, Panel, Notes };
