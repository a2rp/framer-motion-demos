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
    grid-template-columns: 1fr auto 1fr;
    gap: var(--space-4);
    align-items: center;

    .btn {
        justify-self: start;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 8px 14px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.primary {
        justify-self: end;
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }

    .dots {
        display: flex;
        justify-content: center;
        gap: 8px;
    }
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
    padding: var(--space-6);

    .cf-backdrop {
        position: absolute;
        inset: 0;
        z-index: 0;
        pointer-events: none;
        background: radial-gradient(
                900px 220px at 12% 0%,
                hsl(210 90% 60% / 0.08),
                transparent 60%
            ),
            linear-gradient(
                180deg,
                transparent,
                transparent 60%,
                hsl(210 90% 56% / 0.07)
            );
    }
`;

const Page = styled.article`
    position: relative;
    z-index: 1;
    display: grid;
    place-items: stretch;
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
    Stage,
    Page,
    Notes,
};
