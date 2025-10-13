import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);

    @media (width < 560px) {
        padding: var(--space-4);
    }
`;

const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-4);
    justify-content: space-between;
`;

const Heading = styled.div`
    h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`;

const Controls = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto auto auto auto auto;
    gap: var(--space-4);
    align-items: center;

    .spacer {
        width: 12px;
    }

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 8px 14px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }

    .ctrl {
        display: grid;
        gap: 6px;
        align-items: center;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .ctrl select {
        min-width: 140px;
        height: 34px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 8px;
    }
    .ctrl input[type="range"] {
        width: 160px;
        accent-color: var(--primary);
    }
    .ctrl em {
        font-style: normal;
        color: var(--text-muted);
        font-size: 12px;
        padding-left: 6px;
    }

    @media (width < 900px) {
        grid-template-columns: 1fr 1fr;
        .spacer {
            display: none;
        }
    }
`;

const Dots = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    .dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: var(--border);
    }
    .dot.active {
        background: var(--primary);
    }
`;

const Stage = styled.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
`;

const Scene = styled.div`
    position: relative;
    isolation: isolate;
    min-height: 320px;
    perspective-origin: 50% 40%;
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

const Card = styled.div`
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    height: 100%;
    overflow: auto;

    .cardHead {
        display: grid;
        gap: 6px;
        margin-bottom: var(--space-4);
    }
    .kicker {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 11px;
        color: var(--text-muted);
    }
    h2 {
        font-size: 22px;
    }
    .body {
        margin-bottom: var(--space-4);
        color: var(--text);
    }
    .bullets {
        margin-left: 18px;
        display: grid;
        gap: 6px;
        color: var(--text);
    }
`;

/* The swinging page itself */
const Page = styled.article`
    position: absolute;
    inset: 0;
    z-index: 2;
    display: grid;
    place-items: stretch;
    padding: var(--space-6);
    will-change: transform, opacity;
    backface-visibility: hidden;

    @media (width < 560px) {
        padding: var(--space-4);
    }
`;

export const Styled = {
    Wrapper,
    Header,
    Heading,
    Controls,
    Dots,
    Stage,
    Scene,
    Page, // exported for optional reuse
    Card,
    Notes,
};
