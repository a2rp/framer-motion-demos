import styled from "styled-components";

const GAP = "var(--space-4)";

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1100px;
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

    .btn,
    .dot {
        height: 34px;
    }
    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 14px;
        box-shadow: var(--shadow-sm);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .btn.primary {
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
        gap: 8px;
    }
    .dot {
        width: 10px;
        aspect-ratio: 1;
        border-radius: 999px;
        background: var(--border);
        border: 0;
        cursor: pointer;
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
    padding: var(--space-6);
    position: relative;

    .viewport {
        overflow: hidden;
        border-radius: var(--radius-lg);
    }

    .track {
        display: flex;
        gap: ${GAP};
        will-change: transform;
        /* a bit of side padding so slides don't kiss the edges */
        padding-inline: 2px;
    }

    .slide {
        flex: 0 0 100%;
        display: grid;
        place-items: stretch;
        /* subtle hue-tinted background */
        --h: var(--hue, 210);
        background: radial-gradient(
                900px 220px at 10% -10%,
                hsl(var(--h) 90% 60% / 0.08),
                transparent 60%
            ),
            var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        overflow: hidden;
        transition: box-shadow 0.2s ease, transform 0.2s ease;
    }
    .slide.is-active {
        box-shadow: 0 10px 30px hsl(0 0% 0% / 0.18);
        transform: translateY(-2px);
    }

    .card {
        height: 100%;
        padding: var(--space-6);
        display: grid;
        gap: var(--space-4);
    }
    .kicker {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 11px;
        color: var(--text-muted);
    }
    h3 {
        font-size: 20px;
    }
    p {
        color: var(--text);
    }

    @media (width < 560px) {
        padding: var(--space-4);
        .card {
            padding: var(--space-4);
        }
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

export const Styled = { Wrapper, Header, Stage, Notes };
