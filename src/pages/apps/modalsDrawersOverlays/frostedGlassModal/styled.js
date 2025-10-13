import styled from "styled-components";

/* Page shell */
const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    color: var(--text);
`;

const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
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
        display: flex;
        align-items: center;
        gap: var(--space-4);
        flex-wrap: wrap;
    }
    .ctrl {
        display: grid;
        grid-template-columns: auto auto auto;
        align-items: center;
        column-gap: 8px;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .ctrl input[type="range"] {
        width: 160px;
        accent-color: var(--primary);
    }
    .ctrl em {
        font-size: 12px;
        color: var(--text-muted);
    }

    .btn {
        height: 34px;
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
`;

const Stage = styled.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    .content {
        padding: var(--space-6);
        color: var(--text);
    }
    kbd {
        background: var(--surface);
        border: 1px solid var(--border);
        border-bottom-width: 2px;
        padding: 0 6px;
        border-radius: 6px;
        font-family: ui-monospace, Menlo, Consolas, monospace;
    }
`;

/* Modal pieces */
const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 999;
    display: grid;
    place-items: center;
    padding: var(--space-6);

    /* Frosted backdrop (with graceful fallback) */
    background: hsl(220 14% 10% / 0.35); /* baseline scrim (works everywhere) */
    @supports (backdrop-filter: blur(2px)) {
        background: hsl(220 14% 10% / 0.18);
        backdrop-filter: blur(var(--blur, 12px)) saturate(1.15);
    }

    /* Safari/WebKit helpers for first frame stability */
    will-change: opacity;
    contain: layout paint;
`;

const Dialog = styled.div`
    width: min(720px, 92vw);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border);
    overflow: hidden;
    color: var(--text);
    box-shadow: 0 20px 60px hsl(0 0% 0% / 0.25), var(--shadow-md);

    /* Frosted card surface */
    background: linear-gradient(
            180deg,
            hsl(0 0% 100% / 0.06),
            hsl(0 0% 100% / 0.02)
        ),
        var(--card);
    @media (prefers-color-scheme: dark) {
        background: linear-gradient(
                180deg,
                hsl(0 0% 100% / 0.04),
                hsl(0 0% 100% / 0.01)
            ),
            var(--card);
    }

    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: var(--space-4) var(--space-6);
        border-bottom: 1px solid var(--border);
        h2 {
            font-size: 20px;
        }
        .iconBtn {
            width: 34px;
            height: 34px;
            border-radius: var(--radius-md);
            display: inline-grid;
            place-items: center;
            cursor: pointer;
            border: 1px solid var(--border);
            background: var(--surface);
            color: var(--text);
            box-shadow: var(--shadow-sm);
        }
    }

    .body {
        padding: var(--space-6);
        display: grid;
        gap: var(--space-3);
        p {
            color: var(--text);
        }
        ul {
            margin-left: 18px;
            color: var(--text);
        }
    }

    .actions {
        padding: var(--space-4) var(--space-6);
        border-top: 1px solid var(--border);
        display: flex;
        justify-content: flex-end;
        gap: var(--space-3);

        .btn {
            height: 34px;
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
    }
`;

export const Styled = { Wrapper, Header, Stage, Overlay, Dialog };
