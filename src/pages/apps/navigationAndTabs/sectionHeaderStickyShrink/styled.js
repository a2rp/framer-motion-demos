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
    background: color-mix(in oklab, var(--card) 92%, transparent);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    .scroller {
        max-height: min(72vh, 780px);
        overflow: auto;
        position: relative;
        scroll-behavior: smooth !important;
        /* Scrollbar that doesn’t shift layout */
        scrollbar-gutter: stable;
    }

    /* Sticky header that shrinks */
    .sticky {
        position: sticky;
        top: 0;
        z-index: 5;
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: var(--space-4);
        border-bottom: 1px solid var(--border);
        background: color-mix(in oklab, var(--card) 80%, transparent);
        /* Make backdrop filters pop on supporting browsers */
        -webkit-backdrop-filter: saturate(1.1);
        backdrop-filter: saturate(1.1);
    }

    .left {
        display: inline-grid;
        grid-auto-flow: column;
        align-items: center;
        gap: 10px;
    }
    .logoDot {
        width: 14px;
        height: 14px;
        border-radius: 99px;
        background: var(--primary);
        box-shadow: 0 0 0 3px
            color-mix(in oklab, var(--primary) 32%, transparent);
    }
    .title {
        font-weight: 700;
        letter-spacing: 0.2px;
        color: var(--text);
        line-height: 1.1;
    }

    .tabs {
        display: flex;
        align-items: center;
        gap: 2px;
        justify-content: center;
    }
    .tab {
        position: relative;
        border: none;
        background: transparent;
        color: var(--text-muted);
        padding: 10px 12px;
        border-radius: var(--radius-sm);
        cursor: pointer;
        font-weight: 600;
    }
    .tab:hover {
        color: var(--text);
    }
    .tab.active {
        color: var(--text);
    }
    .tab .underline {
        position: absolute;
        left: 8px;
        right: 8px;
        bottom: 6px;
        height: 2px;
        border-radius: 2px;
        background: var(--primary);
        box-shadow: 0 0 0 2px
            color-mix(in oklab, var(--primary) 22%, transparent);
    }

    .right {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .aboutBtn {
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        height: 34px;
        padding: 0 12px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }

    .content {
        padding: var(--space-6);
        display: grid;
        gap: var(--space-6);
        padding-top: 100px;
    }

    .block {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        padding: var(--space-6);
        color: var(--text);
    }
    .blockTitle {
        font-size: 18px;
        margin-bottom: var(--space-3);
        color: var(--text);
    }
    .block p {
        color: var(--text);
    }
    .block ul {
        margin-left: 18px;
        color: var(--text);
    }
    .callout {
        margin-top: var(--space-4);
        padding: var(--space-4);
        border: 1px dashed var(--border);
        background: color-mix(in oklab, var(--primary) 8%, var(--surface));
        border-radius: var(--radius-md);
    }

    /* ---- Modal ---- */
    .modalWrap {
        position: fixed;
        inset: 0;
        z-index: 30;
        display: grid;
        place-items: center;
    }
    .backdrop {
        position: absolute;
        inset: 0;
        background: hsl(0 0% 0% / 0.5);
        border: 0;
        padding: 0;
        margin: 0;
        cursor: default;
    }
    .modal {
        position: relative;
        width: min(560px, calc(100vw - 32px));
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-md);
        overflow: hidden;
    }
    .modal header,
    .modal footer,
    .modal .body {
        padding: var(--space-4) var(--space-6);
    }
    .modal header {
        border-bottom: 1px solid var(--border);
    }
    .modal footer {
        border-top: 1px solid var(--border);
        display: flex;
        justify-content: flex-end;
    }
    .closeBtn {
        height: 34px;
        padding: 0 12px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .xBtn {
        position: absolute;
        top: 8px;
        right: 10px;
        border: none;
        background: transparent;
        color: var(--text-muted);
        font-size: 24px;
        cursor: pointer;
    }

    @media (width < 560px) {
        .scroller {
            max-height: min(70vh, 720px);
        }
        .tabs {
            display: none;
        } /* keep compact in small screens */
    }
`;

export const Styled = { Wrapper, Header, Stage };
