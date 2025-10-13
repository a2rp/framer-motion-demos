import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 760px;
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
        width: 180px;
        accent-color: var(--primary);
    }
    .ctrl em {
        font-style: normal;
        color: var(--text-muted);
        font-size: 12px;
    }

    .btn {
        height: 34px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.ghost {
        background: var(--surface);
    }
`;

const Stage = styled.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    padding: 48px 24px;
    display: grid;
    place-items: center;
`;

const RingWrap = styled.div`
    position: relative;
    width: 160px;
    height: 160px;
    display: grid;
    place-items: center;

    .ring {
        position: absolute;
        inset: 0;
    }

    .pressBtn {
        position: relative;
        z-index: 2;
        width: 112px;
        height: 112px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        display: grid;
        place-items: center;
        cursor: pointer;
        will-change: transform, opacity;
        transition: box-shadow 0.15s ease, background 0.15s ease;

        &:hover {
            box-shadow: 0 10px 28px hsl(0 0% 0% / 0.16);
        }
        &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px hsl(210 90% 56% / 0.35);
        }
    }

    .pressBtn .label {
        font-weight: 600;
        font-size: 13px;
        text-align: center;
        color: var(--text);
    }

    .pressBtn .check {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        font-size: 28px;
        font-weight: 700;
        color: var(--primary);
        pointer-events: none;
    }

    .pct {
        position: absolute;
        bottom: -28px;
        font-size: 12px;
        color: var(--text-muted);
    }
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

export const Styled = { Wrapper, Header, Stage, RingWrap, Notes };
