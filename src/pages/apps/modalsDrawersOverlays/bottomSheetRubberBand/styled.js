import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);

    /* 🔧 Container width */
    max-width: 1440px; /* was 1000px */
    width: 100%;
    margin: 0 auto;

    color: var(--text);
`;

const Header = styled.header`
    display: flex;
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
    .body {
        color: var(--text-muted);
    }
`;

/* -------- Modal parts -------- */

const Backdrop = styled.div`
    position: fixed;
    inset: 0;
    z-index: 40;
    background: hsl(0 0% 0% / 0.5);
    pointer-events: auto;
    will-change: opacity;
`;

const BackdropFilter = styled.div`
    position: fixed;
    inset: 0;
    z-index: 41;
    backdrop-filter: blur(8px);
    pointer-events: none;
    will-change: opacity, backdrop-filter;
`;

const Sheet = styled.section`
    position: fixed;
    inset: auto 0 0 0;
    z-index: 50;
    background: var(--card);
    color: var(--text);
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    max-height: min(78vh, 640px);
    contain: layout paint style;
    display: grid;
    grid-template-rows: auto minmax(0, 1fr) auto auto; /* header | content | footer | safe */
    will-change: transform, box-shadow, border-radius;
`;

const HeaderBar = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: var(--space-4);
    padding: 14px 16px 8px 16px;
    border-bottom: 1px solid var(--border);

    .rb-handle {
        grid-column: 1 / -1;
        justify-self: center;
        width: 44px;
        height: 5px;
        border-radius: 999px;
        background: var(--border);
        margin-bottom: 8px;
        backface-visibility: hidden;
    }

    .rb-titleWrap {
        display: grid;
        gap: 4px;
    }
    h2 {
        font-size: 18px;
        line-height: 1.2;
    }
    .muted {
        color: var(--text-muted);
        font-size: 12px;
    }

    .rb-close {
        height: 32px;
        width: 36px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
`;

const Content = styled.div`
    overflow: auto;
    padding: 8px 8px;
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0 8px 8px 8px;
    display: grid;
    gap: 6px;

    .rb-item {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--surface);
        color: var(--text);
        transition: transform 120ms ease, box-shadow 120ms ease,
            background 120ms ease;
    }
    .rb-item:hover {
        transform: translateY(-1px);
        box-shadow: var(--shadow-sm);
    }
    .rb-item .title {
        font-weight: 600;
        letter-spacing: 0.2px;
    }
    .rb-item .meta {
        color: var(--text-muted);
        font-size: 12px;
    }
`;

const Footer = styled.footer`
    display: flex;
    gap: var(--space-4);
    justify-content: flex-end;
    padding: 10px 16px;
    border-top: 1px solid var(--border);

    .rb-action {
        height: 34px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .rb-action.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .rb-action.ghost {
        background: var(--card);
    }
`;

const SafePad = styled.div`
    height: max(env(safe-area-inset-bottom, 0px), 10px);
`;

export const Styled = {
    Wrapper,
    Header,
    Stage,
    Backdrop,
    BackdropFilter,
    Sheet,
    HeaderBar,
    Content,
    List,
    Footer,
    SafePad,
};
