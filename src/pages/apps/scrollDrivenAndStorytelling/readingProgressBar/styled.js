import styled from "styled-components";

/* Sticky top bar */
const TopBar = styled.div`
    position: sticky;
    top: 0;
    z-index: 10;
    background: var(--card);
    border-bottom: 1px solid var(--border);
    box-shadow: var(--shadow-sm);

    .topInner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-4);
        padding: 12px var(--space-6);
    }
    .titles h1 {
        font-size: 22px;
        line-height: 1.2;
        color: var(--text);
    }
    .titles .muted {
        color: var(--text-muted);
    }
    .titles .activeLabel {
        color: var(--text);
        font-weight: 600;
    }

    .meta {
        display: inline-flex;
        gap: var(--space-4);
        align-items: center;
    }
    .timeLeft {
        display: inline-flex;
        gap: 8px;
        align-items: center;
        color: var(--text-muted);
        svg {
            opacity: 0.8;
        }
    }

    .btn {
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-md);
        height: 36px;
        padding: 0 14px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
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

    .track {
        position: relative;
        height: 6px;
        background: color-mix(in oklab, var(--border) 65%, transparent);
        overflow: visible;
    }

    .bar {
        position: absolute;
        inset: 0 0 0 0;
        transform-origin: left center;
        height: 100%;
        width: 100%;
        background: linear-gradient(
            90deg,
            hsl(210 90% 60% / 0.95),
            hsl(210 90% 56% / 0.95) 50%,
            hsl(210 90% 62% / 0.95) 100%
        );
        box-shadow: 0 0 12px hsl(210 90% 56% / 0.25);
    }

    .tick {
        position: absolute;
        top: 0;
        height: 100%;
        width: 2px;
        background: color-mix(in oklab, var(--primary) 50%, var(--border));
        transform: translateX(-1px);
        opacity: 0.6;
    }
    .tick.is-active {
        background: var(--primary);
        box-shadow: 0 0 10px hsl(210 90% 56% / 0.45);
        opacity: 1;
    }

    .chip {
        position: absolute;
        top: -24px;
        transform: translateX(-50%);
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: 999px;
        padding: 2px 8px;
        box-shadow: var(--shadow-sm);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 44px;
    }
    .chip b {
        color: var(--text);
    }
    .chip em {
        color: var(--text-muted);
        font-style: normal;
        margin-left: 2px;
    }
`;

/* Page wrapper & layout */
const Wrapper = styled.div`
    color: var(--text);
    display: grid;
    gap: var(--space-6);

    .fab {
        position: fixed;
        right: 18px;
        bottom: 18px;
        width: 44px;
        height: 44px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-md);
        cursor: pointer;
    }
`;

const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: var(--space-6);
    align-items: start;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;

    @media (width < 1080px) {
        grid-template-columns: 1fr;
    }
`;

const Article = styled.article`
    max-width: 900px;
    padding: var(--space-6);

    .block {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        padding: var(--space-6);
        box-shadow: var(--shadow-sm);
        display: grid;
        gap: var(--space-3);
    }
    .block.is-active {
        outline: 2px solid color-mix(in oklab, var(--primary) 36%, transparent);
        outline-offset: -2px;
    }

    .bHead h2 {
        font-size: 20px;
    }

    p {
        color: var(--text);
        line-height: 1.8;
    }

    @media (width < 560px) {
        padding: var(--space-4);
        .block {
            padding: var(--space-4);
        }
    }
`;

const Dividers = styled.div`
    padding: var(--space-6) 0;

    .rule {
        height: 1px;
        background: var(--border);
        margin: var(--space-6) 0;
    }
    .cta {
        display: flex;
        justify-content: center;
    }
    .btn {
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        height: 36px;
        padding: 0 14px;
        cursor: pointer;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
`;

/* Right TOC rail */
const Rail = styled.aside`
    position: sticky;
    top: 70px; /* below your header */
    align-self: start;

    .railInner {
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-sm);
        padding: var(--space-4);
        display: grid;
        gap: var(--space-3);
    }
    h3 {
        font-size: 14px;
        color: var(--text-muted);
    }
    ul {
        list-style: none;
        display: grid;
        gap: 6px;
        padding: 0;
        margin: 0;
    }
    .railItem {
        width: 100%;
        display: grid;
        grid-template-columns: 14px 1fr;
        align-items: center;
        gap: 8px;
        border: 1px solid transparent;
        background: transparent;
        color: var(--text);
        border-radius: var(--radius-md);
        height: 34px;
        padding: 0 8px;
        cursor: pointer;
    }
    .railItem .dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: var(--border);
    }
    .railItem.active {
        border-color: var(--border);
        background: var(--surface);
        box-shadow: var(--shadow-sm);
    }
    .railItem.active .dot {
        background: var(--primary);
        box-shadow: 0 0 10px hsl(210 90% 56% / 0.45);
    }
`;

/* Modal overlay (as requested) */
const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 50;
    background: color-mix(in oklab, var(--bg) 40%, #0000);
    backdrop-filter: blur(8px) saturate(1.1);
    display: grid;
    place-items: center;
    padding: var(--space-6);

    .modal {
        width: min(520px, 96vw);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        overflow: hidden;
        display: grid;
        gap: 0;
    }
    .mHead,
    .mFoot {
        padding: 14px 16px;
        border-bottom: 1px solid var(--border);
    }
    .mFoot {
        border-bottom: none;
        border-top: 1px solid var(--border);
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
    .mBody {
        padding: 16px;
    }
    .mHead h3 {
        font-size: 18px;
    }

    .muted {
        color: var(--text-muted);
        margin-bottom: 10px;
    }
    .details {
        margin-left: 18px;
        display: grid;
        gap: 6px;
    }

    .closeBtn {
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }

    /* Form */
    .form {
        display: grid;
        gap: var(--space-4);
    }
    .field {
        display: grid;
        gap: 6px;
    }
    .field span {
        font-size: 12px;
        color: var(--text-muted);
    }
    input {
        height: 36px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--surface);
        color: var(--text);
        padding: 0 10px;
        outline: none;
    }
    input:focus {
        box-shadow: var(--focus-ring);
    }
    .pwWrap {
        position: relative;
        display: grid;
    }
    .pwWrap input {
        padding-right: 36px;
    }
    .eye {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        border: none;
        background: transparent;
        color: var(--text);
        width: 28px;
        height: 28px;
        border-radius: var(--radius-sm);
        display: grid;
        place-items: center;
        cursor: pointer;
    }
    .eye:focus-visible {
        outline: none;
        box-shadow: var(--focus-ring);
    }
    .error {
        color: hsl(0 70% 60%);
        font-size: 12px;
    }
    .actions {
        margin-top: 4px;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        height: 36px;
        padding: 0 14px;
        cursor: pointer;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .success {
        margin-top: 10px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: var(--text);
    }
    .success .dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: hsl(145 70% 45%);
    }
`;

export const Styled = {
    Wrapper,
    TopBar,
    Layout,
    Article,
    Dividers,
    Rail,
};
export { ModalOverlay };
