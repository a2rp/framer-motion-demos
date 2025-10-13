import styled from "styled-components";

/* Page shell */
const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1200px;
    margin: 0 auto;
    color: var(--text);
`;

const Header = styled.header`
    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`;

/* Thumbs grid */
const Grid = styled.div`
    display: grid;
    gap: var(--space-4);
    grid-template-columns: repeat(6, minmax(0, 1fr));

    @media (width < 1100px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (width < 800px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (width < 560px) {
        grid-template-columns: repeat(2, 1fr);
    }

    .thumb {
        position: relative;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--card);
        box-shadow: var(--shadow-sm);
        overflow: hidden;
        cursor: zoom-in;
        display: grid;
        padding: 0;
    }

    .thumb .img {
        width: 100%;
        height: 160px;
        object-fit: cover;
        display: block;
    }

    .cap {
        position: absolute;
        inset: auto 0 0 0;
        background: linear-gradient(180deg, transparent, hsl(0 0% 0% / 0.35));
        color: #fff;
        padding: 8px 10px;
        display: grid;
        gap: 2px;
    }
    .cap .title {
        font-size: 12px;
    }
`;

/* Lightbox overlay */
const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 50;
    background: color-mix(in oklab, var(--bg) 45%, #0000);
    backdrop-filter: blur(8px) saturate(1.1);
    display: grid;
    place-items: center;
    padding: var(--space-6);

    .stage {
        position: relative;
        width: min(96vw, 1200px);
        height: min(90vh, 800px);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        overflow: hidden;
    }

    .full {
        position: absolute;
        inset: 0;
        margin: auto;
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
        user-select: none;
        -webkit-user-drag: none;
        will-change: transform;
        z-index: 1;
    }

    .loading {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        background: linear-gradient(
            180deg,
            var(--card),
            color-mix(in oklab, var(--card) 86%, #000)
        );
        z-index: 4;
    }
    .loading .muted {
        color: var(--text-muted);
        margin-top: 8px;
    }

    .spinner {
        display: inline-grid;
        grid-auto-flow: column;
        gap: 6px;
        align-items: center;
    }
    .spinner .dot {
        width: 8px;
        height: 8px;
        border-radius: 10px;
        background: var(--primary);
        animation: blink 0.9s infinite ease-in-out alternate;
    }
    .spinner .dot:nth-child(2) {
        animation-delay: 0.15s;
    }
    .spinner .dot:nth-child(3) {
        animation-delay: 0.3s;
    }
    @keyframes blink {
        to {
            opacity: 0.2;
            transform: translateY(2px);
        }
    }

    .toolbar {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        gap: 10px;
        padding: 10px;
        background: linear-gradient(
            180deg,
            transparent,
            color-mix(in oklab, var(--card) 85%, #000)
        );
        color: var(--text);
        z-index: 3;
    }
    .toolbar .left,
    .toolbar .right {
        display: flex;
        gap: 8px;
        align-items: center;
        z-index: 99999;
        position: relative;
    }
    .toolbar .center {
        text-align: center;
    }
    .toolbar .caption {
        font-size: 13px;
        color: var(--text-muted);
    }

    .tool {
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        height: 32px;
        padding: 0 12px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .tool.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .tool.ghost {
        background: var(--card);
    }
    .tool.danger {
        background: hsl(5 85% 55%);
        color: #fff;
        border-color: transparent;
    }

    .nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 44px;
        height: 44px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: color-mix(in oklab, var(--card) 80%, #0000);
        backdrop-filter: blur(6px);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        z-index: 2; /* 👈 layer 2 (above image, below toolbar/loading) */
        pointer-events: auto; /* ensure clicks land here */
    }
    .nav.prev {
        left: 14px;
    }
    .nav.next {
        right: 14px;
    }
`;

/* Modal overlay, as requested */
export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 60;
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

    .form {
        display: grid;
        gap: 12px;
    }
    .field {
        display: grid;
        gap: 6px;
    }
    .field span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .pwWrap {
        position: relative;
        display: grid;
    }
    .pwWrap input {
        height: 38px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        padding: 0 36px 0 10px;
        background: var(--surface);
        color: var(--text);
    }
    .pwWrap .eye {
        position: absolute;
        top: 0;
        right: 0;
        height: 38px;
        width: 36px;
        border: none;
        background: transparent;
        color: var(--text);
        cursor: pointer;
    }
    .error {
        color: hsl(5 85% 55%);
        font-style: normal;
        font-size: 12px;
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
    .closeBtn.ghost {
        background: var(--surface);
        color: var(--text);
    }
`;

export const Styled = { Wrapper, Header, Grid, Overlay };
