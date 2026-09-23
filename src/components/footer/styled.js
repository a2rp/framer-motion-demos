import styled from "styled-components";

const Wrapper = styled.footer`
    margin-top: 50px;
    padding: var(--space-6) var(--space-4);
    border-top: 1px solid var(--border);
    background: var(--surface);
    color: var(--text-muted);

    .footerIntro,
    .footerBottom {
        width: min(1120px, 100%);
        margin: 0 auto;
    }

    .footerIntro {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .footerIntro img {
        width: 46px;
        height: 46px;
        padding: 6px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--card);
        object-fit: contain;
    }

    .footerIntro strong {
        color: var(--text);
        font-size: 15px;
    }

    .footerIntro p {
        margin-top: 2px;
        font-size: 12px;
    }

    .footerBottom {
        margin-top: var(--space-6);
        padding-top: var(--space-4);
        border-top: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-4);
        flex-wrap: wrap;
    }

    .footerBottom p {
        margin: 0;
        font-size: 12px;
    }

    .footerBottom p a {
        color: var(--text);
        font-weight: 700;
    }

    .footerLinks {
        display: flex;
        align-items: center;
        gap: 7px;
        flex-wrap: wrap;
    }

    .footerLinks a {
        width: 34px;
        height: 34px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        color: var(--text-muted);
        transition: border-color 0.18s ease, box-shadow 0.18s ease,
            color 0.18s ease;
    }

    .footerLinks a:hover,
    .footerLinks a:focus-visible {
        border-color: var(--primary);
        box-shadow: 0 0 16px hsl(210 90% 56% / 0.24);
        color: var(--text);
        outline: none;
    }

    @media (max-width: 700px) {
        .footerBottom {
            align-items: flex-start;
            flex-direction: column;
        }
    }
`;

export const Styled = { Wrapper };
