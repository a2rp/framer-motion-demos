import styled from "styled-components";

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

    .kbd {
        font: 12px/1.2 ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
        padding: 2px 6px;
        border: 1px solid var(--border);
        border-bottom-width: 2px;
        border-radius: 6px;
        background: var(--surface);
        color: var(--text);
    }

    .openBtn {
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
`;

const Stage = styled.section`
    .preview {
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: radial-gradient(
                600px 140px at 10% -20%,
                hsl(210 90% 56% / 0.12),
                transparent 60%
            ),
            var(--card);
        box-shadow: var(--shadow-md);
        min-height: 180px;
        display: grid;
        place-items: center;
        color: var(--text-muted);
    }
    .hint {
        border: 1px dashed var(--border);
        padding: 4px 10px;
        border-radius: 999px;
    }
`;

/* ---------- Modal ---------- */
const Backdrop = styled.div.attrs({ className: "cp-backdrop" })`
    position: fixed;
    inset: 0;
    z-index: 60;
    background: hsl(220 14% 10% / 0.35);
    backdrop-filter: blur(6px);
`;

const Dialog = styled.div.attrs({ className: "cp-dialog" })`
    position: fixed;
    inset: 0;
    z-index: 70;
    display: grid;
    place-items: start center;
    padding-top: 10vh; /* headroom for zoom-in */

    .cp-search {
        display: grid;
        grid-template-columns: 24px 1fr auto;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border-bottom: 1px solid var(--border);
        background: linear-gradient(0deg, var(--card), var(--surface));
    }
    .cp-search .icon {
        width: 16px;
        height: 16px;
        color: var(--text-muted);
    }
    .cp-search input {
        height: 34px;
        border: none;
        outline: none;
        background: transparent;
        color: var(--text);
        font-size: 14px;
    }
    .kbdWrap .kbd {
        font: 12px/1.2 ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
        padding: 2px 6px;
        border: 1px solid var(--border);
        border-bottom-width: 2px;
        border-radius: 6px;
        background: var(--surface);
        color: var(--text-muted);
    }

    /* Card shell */
    & {
        max-height: 100dvh;
    }
    & > * {
        width: min(720px, calc(100vw - 32px));
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: 0 30px 80px hsl(220 14% 5% / 0.45), var(--shadow-md);
        overflow: hidden;
    }

    .cp-results {
        max-height: min(56vh, 520px);
        overflow: auto;
        scroll-behavior: smooth;
        padding: 6px 6px 10px;
    }

    .group {
        padding-top: 10px;
    }
    .groupLabel {
        position: sticky;
        top: 0;
        z-index: 1;
        font-size: 12px;
        color: var(--text-muted);
        background: linear-gradient(
            180deg,
            var(--card),
            color-mix(in oklab, var(--card) 80%, transparent)
        );
        padding: 6px 10px;
        border-bottom: 1px dashed var(--border);
        backdrop-filter: blur(2px);
    }

    .items {
        list-style: none;
        margin: 0;
        padding: 6px;
        display: grid;
        gap: 6px;
    }

    .item {
        position: relative;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 10px;
        align-items: center;
        padding: 10px 12px;
        border: 1px solid transparent;
        border-radius: var(--radius-md);
        background: var(--surface);
        color: var(--text);
        cursor: pointer;
        overflow: hidden;
    }
    .item:hover {
        border-color: var(--border);
    }

    .item .highlight {
        position: absolute;
        inset: 0;
        border-radius: var(--radius-md);
        background: linear-gradient(
                0deg,
                hsl(210 90% 56% / 0.12),
                hsl(210 90% 56% / 0.06)
            ),
            color-mix(in oklab, var(--surface) 90%, transparent);
        border: 1px solid hsl(210 90% 56% / 0.35);
        box-shadow: 0 8px 24px hsl(0 0% 0% / 0.18);
        z-index: 0;
    }

    .item .meta {
        position: relative;
        z-index: 1;
    }
    .item .title {
        font-weight: 600;
    }
    .item .sub {
        font-size: 12px;
        color: var(--text-muted);
    }

    .shortcut {
        display: flex;
        gap: 6px;
        position: relative;
        z-index: 1;
    }
    .kbd {
        font: 12px/1.2 ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
        padding: 2px 6px;
        border: 1px solid var(--border);
        border-bottom-width: 2px;
        border-radius: 6px;
        background: var(--surface);
        color: var(--text);
        white-space: nowrap;
    }

    .empty {
        color: var(--text-muted);
        padding: 18px 16px 28px;
    }

    @media (width < 560px) {
        padding-top: 6vh;
    }
`;

export const Styled = { Wrapper, Header, Stage, Backdrop, Dialog };
