import styled from "styled-components";

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
    .actions {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        flex-wrap: wrap;
    }
    .btn {
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }
`;

const Stage = styled.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    min-height: 420px;

    .backdrop {
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: radial-gradient(
                1200px 500px at -10% -20%,
                hsl(210 90% 56% / 0.12),
                transparent 60%
            ),
            radial-gradient(
                1000px 420px at 110% 120%,
                hsl(260 90% 60% / 0.12),
                transparent 60%
            ),
            var(--card);
    }
    .sun {
        position: absolute;
        top: -140px;
        left: 60%;
        width: 320px;
        height: 320px;
        border-radius: 50%;
        background: radial-gradient(
            circle at 50% 50%,
            hsl(50 95% 60% / 0.35),
            transparent 70%
        );
        filter: blur(8px);
    }
    .lines {
        position: absolute;
        inset: -1px;
        opacity: 0.12;
        background: repeating-linear-gradient(
            -12deg,
            color-mix(in srgb, var(--text) 20%, transparent) 0 2px,
            transparent 2px 10px
        );
        mix-blend-mode: overlay;
    }
    .noise {
        position: absolute;
        inset: 0;
        opacity: 0.05;
        background-image: repeating-linear-gradient(
            0deg,
            #000 0 1px,
            transparent 1px 2px
        );
        mix-blend-mode: overlay;
    }

    .ts-canvas {
        position: relative;
        isolation: isolate;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .streakLayer {
        position: absolute;
        inset: 0;
        transform: rotate(var(--tilt));
        will-change: transform;
    }

    /* ✅ Lightness slider fix: use *1% inside calc so var becomes a valid percentage */
    .streak {
        position: absolute;
        left: -20%;
        width: 140%;
        height: var(--th);

        --h: calc(var(--hueA) * (1 - var(--mix)) + var(--hueB) * var(--mix));

        background: linear-gradient(
            90deg,
            hsl(var(--h) 92% calc((var(--light) + 4) * 1%) / 0),
            hsl(
                var(--h) 96% calc((var(--light) + 8) * 1%) /
                    max(0.18, var(--alpha))
            ),
            hsl(var(--h) 92% calc((var(--light) + 4) * 1%) / 0)
        );

        box-shadow: 0 6px 24px hsl(0 0% 0% / 0.1),
            0 0 18px hsl(var(--h) 100% 60% / calc(var(--alpha) + 0.18));

        mix-blend-mode: plus-lighter;
        filter: saturate(1.15) contrast(1.04);
        border-radius: 999px;
        will-change: transform, opacity;
    }
    @supports not (mix-blend-mode: plus-lighter) {
        .streak {
            mix-blend-mode: screen;
        }
    }

    .glassCard {
        position: absolute;
        right: 16px;
        bottom: 16px;
        width: min(720px, 96%);
        max-height: calc(100% - 32px);
        overflow: auto;
        overscroll-behavior: contain;
        background: color-mix(in oklab, var(--card) 72%, #ffffff10);
        backdrop-filter: blur(6px) saturate(1.05);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        padding: var(--space-6);
        color: var(--text);
        z-index: 2;
    }
    @media (width < 640px) {
        .glassCard {
            inset: auto 8px 8px 8px;
            width: auto;
            right: 8px;
            left: 8px;
        }
    }
    .glassCard h2 {
        font-size: 18px;
        margin-bottom: var(--space-4);
    }
    .glassCard .hint {
        color: var(--text-muted);
        margin-top: var(--space-3);
    }

    .grid {
        display: grid;
        gap: var(--space-4);
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (width < 860px) {
        .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }
    @media (width < 560px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }

    .ctrl {
        display: grid;
        gap: 6px;
        align-items: center;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .ctrl input[type="number"],
    .ctrl input[type="range"] {
        width: 100%;
        height: 36px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        padding: 0 8px;
        accent-color: var(--primary);
    }
    .ctrl input[type="number"] {
        -moz-appearance: textfield;
    }
    .ctrl input[type="number"]::-webkit-outer-spin-button,
    .ctrl input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .ctrl em {
        font-style: normal;
        font-size: 12px;
        color: var(--text-muted);
        justify-self: end;
    }

    .ctrl input[type="range"] {
        -webkit-appearance: none;
        background: transparent;
        padding: 0;
        height: 24px;
    }
    .ctrl input[type="range"]::-webkit-slider-runnable-track {
        height: 6px;
        border-radius: 999px;
        background: linear-gradient(
            90deg,
            var(--primary),
            color-mix(in srgb, var(--primary) 30%, var(--border))
        );
    }
    .ctrl input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        margin-top: -6px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--primary);
        border: 2px solid color-mix(in srgb, var(--primary) 30%, #fff);
        box-shadow: var(--shadow-sm);
    }
    .ctrl input[type="range"]::-moz-range-track {
        height: 6px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--primary) 60%, var(--border));
    }
    .ctrl input[type="range"]::-moz-range-thumb {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--primary);
        border: 2px solid color-mix(in srgb, var(--primary) 30%, #fff);
        box-shadow: var(--shadow-sm);
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
        display: grid;
        gap: 6px;
    }
`;

/* Modal (same API) */
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

    .form {
        display: grid;
        gap: var(--space-4);
        margin: 10px 0 14px;
    }
    .fCtrl {
        display: grid;
        gap: 6px;
    }
    .fCtrl span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .fCtrl input[type="text"],
    .fCtrl input[type="email"],
    .fCtrl input[type="password"],
    .fCtrl input[type="search"],
    .fCtrl input[type="tel"] {
        width: 100%;
        height: 36px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 10px;
        outline: none;
    }
    .fCtrl input[aria-invalid="true"] {
        border-color: hsl(6 84% 58%);
        box-shadow: 0 0 0 3px hsl(6 84% 58% / 0.15);
    }
    .fCtrl em {
        color: hsl(6 84% 68%);
        font-size: 12px;
    }
    .pwd {
        position: relative;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
    }
    .pwd input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .eye {
        height: 36px;
        width: 40px;
        border: 1px solid var(--border);
        border-left: none;
        background: var(--surface);
        color: var(--text);
        border-top-right-radius: var(--radius-sm);
        border-bottom-right-radius: var(--radius-sm);
        display: grid;
        place-items: center;
        cursor: pointer;
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
    .closeBtn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const Styled = { Wrapper, Header, Stage, Notes, ModalOverlay };
