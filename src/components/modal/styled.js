import styled from "styled-components";

export const Styled = {
    Scrim: styled.div`
        position: fixed;
        inset: 0;
        background: hsl(0 0% 0% / 0.55);
        display: grid;
        place-items: center;
        padding: 24px;
        z-index: 130;
    `,

    Card: styled.div`
        width: min(100%, 560px);
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-md);
        outline: none;

        &[data-size="sm"] {
            width: min(100%, 420px);
        }
        &[data-size="lg"] {
            width: min(100%, 720px);
        }
    `,

    Header: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-4) var(--space-6) var(--space-3);
        border-bottom: 1px solid var(--border);
    `,

    Title: styled.h3`
        margin: 0;
        font-size: 20px;
        line-height: 1.25;
    `,

    Close: styled.button`
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        width: 32px;
        height: 32px;
        line-height: 1;
        font-size: 20px;
        display: grid;
        place-items: center;
        cursor: pointer;
        &:focus-visible {
            box-shadow: var(--focus-ring);
            outline: none;
        }
    `,

    Body: styled.div`
        padding: var(--space-6);
        color: var(--text);
    `,

    Footer: styled.div`
        padding: var(--space-4) var(--space-6);
        border-top: 1px solid var(--border);
        display: flex;
        gap: var(--space-3);
        justify-content: flex-end;
    `,
};
