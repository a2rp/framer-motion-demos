// themed footer: src/components/footer/styled.js
import styled from "styled-components";

const Wrapper = styled.div`
    background: var(--surface);
    color: var(--text-muted);
    margin-top: 50px;
    overflow: hidden;
    padding: var(--space-4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--border);

    @media (width < 900px) {
        padding: var(--space-4);
        flex-direction: column;
        gap: var(--space-3);
        align-items: flex-start;
    }
`;

const Col = styled.div`
    a {
        color: var(--text);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
        &:focus-visible {
            outline: var(--focus-ring);
            border-radius: var(--radius-sm);
        }

        img {
            width: 18px;
        }
    }
`;

export const Styled = { Wrapper, Col };
