import styled from "styled-components";

/* Wrapper + header */
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
    justify-content: space-between;
    gap: var(--space-4);

    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`;

/* Grid of cards */
const Grid = styled.div`
    display: grid;
    gap: var(--space-4);
    grid-template-columns: repeat(3, minmax(0, 1fr));

    @media (width < 900px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (width < 560px) {
        grid-template-columns: 1fr;
    }

    .card {
        display: grid;
        grid-template-rows: 120px auto auto;
        gap: 10px;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        color: var(--text);
        text-align: left;
        padding: var(--space-4);
        cursor: pointer;
        box-shadow: var(--shadow-sm);
        transition: transform 140ms ease, box-shadow 140ms ease,
            border-color 140ms ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: color-mix(in oklab, var(--border), var(--accent) 18%);
        }

        .thumb {
            border-radius: var(--radius-md);
            background: radial-gradient(
                    600px 140px at 10% 0%,
                    var(--accentSoft),
                    transparent 60%
                ),
                linear-gradient(
                    135deg,
                    var(--accent),
                    color-mix(in oklab, var(--accent), white 22%)
                );
            box-shadow: inset 0 0 0 1px
                color-mix(in oklab, var(--accent), black 35% / 10%);
        }

        .title {
            font-size: 16px;
            line-height: 1.3;
        }

        .excerpt {
            color: var(--text-muted);
            font-size: 13px;
        }
    }
`;

/* Overlay */
const Backdrop = styled.div`
    position: fixed;
    inset: 0;
    background: hsl(0 0% 0% / 0.5);
    z-index: 1000;
`;

const DetailHolder = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1001;
    display: grid;
    place-items: center;
    padding: var(--space-6);
`;

const Detail = styled.article`
    width: min(920px, 96vw);
    max-height: min(82vh, 820px);
    display: grid;
    grid-template-rows: 200px auto auto auto;
    gap: var(--space-4);

    background: var(--card);
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);
    overflow: auto;

    .thumb.lg {
        border-radius: var(--radius-md);
        background: radial-gradient(
                1200px 280px at 10% 0%,
                var(--accentSoft),
                transparent 60%
            ),
            linear-gradient(
                135deg,
                var(--accent),
                color-mix(in oklab, var(--accent), white 18%)
            );
        box-shadow: inset 0 0 0 1px
                color-mix(in oklab, var(--accent), black 35% / 10%),
            0 16px 40px hsl(0 0% 0% / 0.2);
    }

    .title {
        font-size: 22px;
    }

    .body {
        color: var(--text);
    }

    .bullets {
        margin-left: 18px;
        display: grid;
        gap: 6px;
        color: var(--text);
    }
`;

const DetailFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--space-4);

    .nav {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .nav button {
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 6px 10px;
        cursor: pointer;

        &:disabled {
            opacity: 0.45;
            cursor: not-allowed;
        }
    }

    .count {
        color: var(--text-muted);
        font-size: 12px;
    }

    .close {
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        border-radius: var(--radius-md);
        padding: 8px 14px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
`;

export const Styled = {
    Wrapper,
    Header,
    Grid,
    Backdrop,
    DetailHolder,
    Detail,
    DetailFooter,
};
