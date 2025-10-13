import styled from "styled-components";
import { motion } from "framer-motion";

/* ---------- Layout ---------- */

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
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

    /* Base button */
    .btn,
    .outline,
    .ghost {
        height: 34px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0 14px;
        border-radius: var(--radius-md);
        cursor: pointer;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-sm);
    }

    /* ✅ Only the pure .btn (Add level) gets primary colors */
    .btn:not(.outline):not(.ghost) {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }

    /* Ghost/Outline stay readable on both themes */
    .ghost {
        background: var(--surface);
        color: var(--text);
    }
    .outline {
        background: var(--card);
        color: var(--text);
    }

    /* Hover/focus polish */
    .ghost:not(:disabled):hover,
    .outline:not(:disabled):hover {
        border-color: hsl(210 90% 56% / 0.45);
        box-shadow: var(--shadow-sm), 0 0 0 3px var(--focus-ring);
    }

    .btn:disabled,
    .ghost:disabled,
    .outline:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        color: var(--text-muted);
        box-shadow: var(--shadow-sm);
    }

    .sep {
        width: 1px;
        height: 34px;
        background: var(--border);
    }
`;

const Stage = styled.section`
    display: grid;
    gap: var(--space-4);

    .bc {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 0;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        padding: 10px 12px;
        min-height: 48px;
    }

    .crumb {
        --pad-x: 8px;
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 6px var(--pad-x);
        color: var(--text);
        user-select: none;
        border-radius: var(--radius-sm);
        transition: background-color 0.18s ease;

        &:hover {
            background-color: hsl(210 90% 56% / 0.08);
        }
        &.ellipsis {
            color: var(--text-muted);
            cursor: pointer;
            &:hover {
                background: transparent;
            }
        }
        &.active {
            font-weight: 600;
        }
        &[role="link"] {
            cursor: pointer;
        }
    }

    .crumb .label {
        white-space: nowrap;
    }

    .crumb .sep::after {
        content: "›";
        color: var(--text-muted);
        opacity: 0.8;
    }

    .underline {
        position: absolute;
        left: var(--pad-x);
        right: var(--pad-x);
        bottom: 2px;
        height: 2px;
        border-radius: 2px;
        background: var(--primary);
    }
`;

const Preview = styled.div`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--surface);
    padding: var(--space-4);
    box-shadow: var(--shadow-sm);

    h3 {
        margin-bottom: 6px;
    }
    .path {
        color: var(--text-muted);
        overflow: auto;
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

/* ---------- Self-made Modal - styles only (no JSX here) ---------- */

const Backdrop = styled(motion.div)`
    position: fixed;
    inset: 0;
    z-index: 60;
    background: hsl(0 0% 0% / 0.5);
    backdrop-filter: blur(1.5px);
`;

const Card = styled(motion.div)`
    position: fixed;
    inset: 0;
    z-index: 61;
    display: grid;
    place-items: center;
    pointer-events: none;
    padding: var(--space-6);

    .panel {
        pointer-events: auto;
        width: min(720px, 92vw);
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        overflow: hidden;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 14px;
        border-bottom: 1px solid var(--border);
    }
    header h3 {
        font-size: 18px;
    }
    header .close {
        height: 32px;
        min-width: 32px;
        display: inline-grid;
        place-items: center;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        cursor: pointer;
    }

    .content {
        padding: var(--space-4);
        display: grid;
        gap: var(--space-4);
    }

    .preset {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--surface);
        padding: 10px 12px;
    }
    .preset .label {
        color: var(--text);
    }
    .preset .path {
        color: var(--text-muted);
        margin-top: 2px;
        font-size: 12px;
    }
    .preset .pick {
        height: 30px;
        padding: 0 10px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        cursor: pointer;
    }
`;

export const Styled = {
    Wrapper,
    Header,
    Stage,
    Preview,
    Notes,
    Backdrop,
    Card,
};
