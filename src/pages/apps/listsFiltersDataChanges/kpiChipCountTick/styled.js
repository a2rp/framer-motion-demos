import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 820px;
    margin: 0 auto;
    color: var(--text);
`;

const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);

    .heading h1 {
        font-size: 22px;
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

    .btn,
    .toggle {
        height: 34px;
    }

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 14px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .toggle {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: var(--text-muted);
        input {
            transform: translateY(1px);
        }
    }

    .sep {
        width: 1px;
        height: 34px;
        background: var(--border);
    }
`;

const Stage = styled.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);

    display: grid;
    gap: var(--space-4);

    .chip {
        --chip-bg: var(--surface);
        --chip-border: var(--border);

        border: 1px solid var(--chip-border);
        background: var(--chip-bg);
        color: var(--text);
        border-radius: 999px;
        min-height: 44px;
        padding: 8px 14px;
        display: inline-flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        box-shadow: var(--shadow-sm);
        transition: background 0.2s ease, border-color 0.2s ease,
            transform 0.06s ease;

        &:hover {
            transform: translateY(-1px);
        }
        &:active {
            transform: translateY(0);
        }
    }

    .label {
        font-size: 12px;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.08em;
    }

    /* Count area clipped so the number can slide in/out vertically */
    .countSlot {
        position: relative;
        overflow: hidden;
        min-width: 96px; /* prevents layout jump as digits change */
        height: 24px; /* matches .count line-height for neat clipping */
        display: inline-grid;
        align-items: center;
    }

    .count {
        font-variant-numeric: tabular-nums; /* monospaced numerals */
        line-height: 24px;
        font-size: 18px;
        font-weight: 700;
        color: var(--text);
        display: inline-block;
    }

    .hint {
        color: var(--text-muted);
    }
`;

export const Styled = { Wrapper, Header, Stage };
