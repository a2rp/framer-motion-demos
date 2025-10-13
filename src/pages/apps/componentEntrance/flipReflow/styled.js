import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1080px;
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
`;

const Controls = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    align-items: center;

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 8px 14px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }

    .switch {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding-left: 8px;
        border-left: 1px solid var(--border);
        color: var(--text-muted);

        input {
            accent-color: var(--primary);
        }
    }
`;

const Stage = styled.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: radial-gradient(
            900px 220px at 10% 0%,
            hsl(210 90% 60% / 0.08),
            transparent 60%
        ),
        var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    padding: var(--space-6);

    &[data-dense="true"] {
        --gap: 10px;
    }
`;

const Grid = styled.ul`
    --gap: var(--space-4);
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--gap);

    @media (width < 980px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (width < 560px) {
        grid-template-columns: 1fr;
    }
`;

const Card = styled.li`
    list-style: none;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    padding: var(--space-4);
    color: var(--text);
    cursor: pointer;
    user-select: none;

    /* Micro interaction polish */
    transition: box-shadow 160ms ease, transform 160ms ease,
        border-color 160ms ease;
    will-change: transform;
    &:hover {
        box-shadow: var(--shadow-md);
        transform: translateY(-2px);
    }
    &:active {
        transform: translateY(0);
    }

    .cardHead {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 6px;
        align-items: baseline;
        margin-bottom: var(--space-3);
    }
    .kicker {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 11px;
        color: var(--text-muted);
    }
    h2 {
        font-size: 18px;
    }
    .metric {
        font-variant-numeric: tabular-nums;
        color: var(--text-muted);
    }

    .body {
        color: var(--text);
        margin-bottom: var(--space-3);
    }

    .details {
        overflow: hidden;
        border-top: 1px dashed var(--border);
        margin-top: var(--space-3);
        padding-top: var(--space-3);

        ul {
            margin-left: 16px;
            color: var(--text);
            display: grid;
            gap: 6px;
        }
    }

    &[data-open="true"] {
        border-color: color-mix(in oklab, var(--primary) 30%, var(--border));
        box-shadow: 0 8px 24px hsl(0 0% 0% / 0.12);
    }
`;

const Notes = styled.aside`
    color: var(--text-muted);
    ul {
        padding-left: 18px;
    }
`;

export const Styled = { Wrapper, Header, Controls, Stage, Grid, Card, Notes };
