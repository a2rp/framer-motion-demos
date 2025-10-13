import styled from "styled-components";

/* Uses your global CSS variables (light/dark ready) */

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
        display: inline-flex;
        align-items: center;
        gap: var(--space-4);
        flex-wrap: wrap;
    }

    .ctrl.switch {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        user-select: none;
    }
    .ctrl.switch input {
        accent-color: var(--primary);
    }
    .ctrl.switch .t {
        font-size: 14px;
        color: var(--text);
    }

    .pill {
        display: inline-flex;
        align-items: center;
        height: 28px;
        padding: 0 10px;
        border-radius: 999px;
        font-size: 12px;
        border: 1px solid var(--border);
        background: var(--surface);
    }
    .pill.ok {
        color: hsl(152 67% 35%);
        border-color: hsl(152 30% 45% / 0.35);
    }
    .pill.bad {
        color: hsl(5 80% 55%);
        border-color: hsl(5 55% 50% / 0.35);
    }
`;

const Stage = styled.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    /* Pinned banner space */
    .banner {
        position: sticky;
        top: 0;
        z-index: 2;
        border-bottom: 1px solid var(--border);
        overflow: visible; /* allow subtle effects to breathe */
    }

    .banner.offline {
        background: linear-gradient(0deg, hsl(5 90% 55% / 0.12), transparent),
            var(--surface);
        color: hsl(0 100% 98%);
    }
    .banner.online {
        background: linear-gradient(0deg, hsl(152 60% 45% / 0.14), transparent),
            var(--surface);
        color: hsl(0 0% 98%);
    }

    .banner .content {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: var(--space-4);
        padding: 10px 14px;
    }

    .banner .icon {
        width: 26px;
        height: 26px;
        display: inline-grid;
        place-items: center;
        color: currentColor;
        filter: drop-shadow(0 1px 8px hsl(0 0% 0% / 0.25));
    }

    .banner .text {
        display: grid;
        gap: 2px;
        min-width: 0;
    }
    .banner .text strong {
        font-size: 14px;
        letter-spacing: 0.2px;
        color: var(--text);
    }
    .banner .text .sub {
        color: var(--text-muted);
        font-size: 12px;
    }

    .banner .actions {
        display: inline-flex;
        gap: 8px;
    }

    .btn {
        height: 32px;
        padding: 0 12px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .btn.ghost {
        background: var(--surface);
    }

    /* Auto-hide progress bar for "back online" */
    .autoHideBar {
        height: 2px;
        transform-origin: left center;
        background: hsl(152 70% 40%);
    }

    /* Demo content */
    .paper {
        padding: var(--space-6);
    }
    .paper h3 {
        margin-bottom: 8px;
    }
    .paper .list {
        margin-top: 10px;
        display: grid;
        gap: 8px;
    }
    .paper li {
        padding: 10px 12px;
        border-radius: var(--radius-sm);
        background: var(--surface);
        border: 1px solid var(--border);
        color: var(--text);
    }
`;

export const Styled = { Wrapper, Header, Stage };
