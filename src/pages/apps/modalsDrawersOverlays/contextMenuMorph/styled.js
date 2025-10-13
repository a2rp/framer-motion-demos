import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 960px;
    margin: 0 auto;
    color: var(--text);
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    flex-wrap: wrap;

    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }

    .triggerBtn {
        position: relative;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        height: 36px;
        padding: 0 12px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        isolation: isolate;

        .chipSurface {
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background: linear-gradient(
                    0deg,
                    hsl(210 90% 56% / 0.1),
                    hsl(210 90% 56% / 0.08)
                ),
                var(--surface);
            border: 1px solid var(--border);
            z-index: 0;
        }
        .dots {
            position: relative;
            z-index: 1;
            display: inline-grid;
            place-items: center;
        }
    }

    .triggerBtn:hover {
        filter: brightness(1.02);
    }
`;

const Stage = styled.section`
    display: grid;
    gap: var(--space-4);

    .card {
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        padding: var(--space-6);
        outline: none;
    }
    .card:focus {
        box-shadow: var(--focus-ring);
    }

    .cardHead {
        display: grid;
        gap: 4px;
        margin-bottom: var(--space-4);
    }
    .kicker {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 11px;
        color: var(--text-muted);
    }
    .body {
        color: var(--text);
    }
    .meta {
        margin-left: 18px;
        color: var(--text-muted);
        display: grid;
        gap: 4px;
    }

    .hint {
        color: var(--text-muted);
    }
`;

const sharedSurface = `
  border-radius: var(--radius-lg);
  background: var(--card);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-md);
`;

const StyledOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 30;
    pointer-events: none;

    .backdrop {
        position: absolute;
        inset: 0;
        background: black;
        pointer-events: auto;
    }

    .menuAnchor {
        position: absolute;
        pointer-events: none;
    }

    .menuSurface {
        ${sharedSurface}
        position: relative;
        min-width: 240px;
        padding: 8px;
        pointer-events: auto;
        will-change: transform, opacity;
        contain: layout paint;
    }

    nav {
        display: grid;
        gap: 4px;
    }

    .menuItem {
        display: grid;
        grid-template-columns: 20px 1fr auto;
        align-items: center;
        gap: 10px;
        height: 36px;
        border-radius: var(--radius-sm);
        padding: 0 10px;
        background: transparent;
        color: var(--text);
        border: 1px solid transparent;
        cursor: pointer;
    }
    .menuItem:hover {
        background: var(--surface);
        border-color: var(--border);
    }
    .menuItem:focus-visible {
        outline: none;
        box-shadow: var(--focus-ring);
    }
    .menuItem.danger {
        color: hsl(6 90% 60%);
    }
    .menuItem.danger:hover {
        background: hsl(6 90% 60% / 0.12);
        border-color: hsl(6 90% 60% / 0.35);
    }

    .ico {
        display: inline-grid;
        place-items: center;
    }
    .kbd {
        color: var(--text-muted);
        font-size: 12px;
    }
`;

export const Styled = {
    Wrapper,
    Header,
    Stage,
    Overlay: StyledOverlay, // ✅ proper key rename (no 'as' syntax)
};
