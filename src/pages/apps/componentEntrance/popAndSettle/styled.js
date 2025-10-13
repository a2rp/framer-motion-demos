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
    grid-template-columns: auto 1fr auto auto auto;
    align-items: center;
    gap: var(--space-4);

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
    position: relative;
    isolation: isolate;
    min-height: 320px;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    .ps-page {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: stretch;
        padding: var(--space-6);
        will-change: transform, opacity, filter;
        color: var(--text); /* 🔧 ensure text visible */
    }
`;

const Card = styled.article`
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    height: 100%;
    overflow: auto;
    color: var(--text); /* 🔧 explicit text color */

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
    }
    .bullets {
        margin-left: 18px;
        display: grid;
        gap: 6px;
    }

    @media (width < 560px) {
        padding: var(--space-4);
    }
`;

const Notes = styled.aside`
    color: var(--text-muted);
    ul {
        padding-left: 18px;
    }
`;

export const Styled = {
    Wrapper,
    Header,
    Heading,
    Controls,
    Dots,
    Stage,
    Card,
    Notes,
};
