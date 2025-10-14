import styled from "styled-components";

/* ----------- Shared tokens assumed from your index.css :root ----------- */

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1200px;
    margin: 0 auto;
    color: var(--text);
    outline: none; /* focus handled by children */
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
    .btn {
        height: 34px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn.ghost {
        background: var(--surface);
    }

    .sep {
        width: 1px;
        height: 28px;
        background: var(--border);
    }

    /* Autoplay switch */
    .switch {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }
    .switch input {
        position: absolute;
        inset: 0;
        opacity: 0;
    }
    .switch .track {
        width: 46px;
        height: 24px;
        border-radius: 999px;
        background: var(--surface);
        border: 1px solid var(--border);
        display: inline-flex;
        align-items: center;
        padding: 2px;
    }
    .switch .thumb {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--primary);
        transform: translateX(0);
        transition: transform 180ms cubic-bezier(0.22, 1, 0.36, 1);
    }
    .switch input:checked + .track .thumb {
        transform: translateX(22px);
    }
    .switch .label {
        color: var(--text-muted);
        font-size: 12px;
    }
`;

const Stage = styled.section`
    position: relative; /* ⬅️ creates stacking context for dots */
    display: grid;
    gap: var(--space-4);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);
    overflow: hidden;

    .dots {
        position: relative; /* ⬅️ allow z-index to apply */
        z-index: 20; /* ⬅️ above ring/drag layer */
        display: flex;
        justify-content: center;
        gap: 10px;
        padding-top: var(--space-4);
    }
    .dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: var(--border);
        border: none;
        cursor: pointer;
    }
    .dot.active {
        background: var(--primary);
    }
`;

const Scene = styled.div`
    position: relative;
    width: 100%;
    min-height: 440px;
    perspective: 1000px;
    perspective-origin: 50% 40%;
    transform-style: preserve-3d;
    overflow: visible;

    .ring {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        will-change: transform;
    }

    .slide {
        position: absolute;
        top: 50%;
        left: 50%;
        width: clamp(220px, 28vw, 320px);
        height: clamp(260px, 34vw, 360px);
        transform-style: preserve-3d;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--surface);
        box-shadow: var(--shadow-sm);
        color: var(--text);
        display: grid;
        grid-template-rows: 1fr auto auto;
        align-items: end;
        padding: 14px;
        translate: -50% -50%;
        backface-visibility: hidden;
        overflow: hidden;
        pointer-events: none;
        cursor: default;
    }

    .slide .art {
        position: absolute;
        inset: 0;
        background: radial-gradient(
                140% 80% at 10% 0%,
                hsl(var(--hue) 90% 60% / 0.25),
                transparent 50%
            ),
            radial-gradient(
                120% 80% at 100% 100%,
                hsl(var(--hue) 90% 60% / 0.18),
                transparent 40%
            ),
            linear-gradient(
                135deg,
                hsl(var(--hue) 90% 56%),
                hsl(var(--hue) 90% 62%)
            );
        filter: saturate(1.03) brightness(1.02);
        opacity: 0.18;
    }

    .slide .halo {
        position: absolute;
        inset: 0;
        background: radial-gradient(
            120% 60% at 50% 60%,
            hsl(0 0% 100% / 0.2),
            transparent 60%
        );
        pointer-events: none;
    }

    .slide .cardHead {
        position: relative;
        z-index: 1;
    }
    .slide .kicker {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 11px;
        color: var(--text-muted);
    }
    .slide h3 {
        font-size: 20px;
        margin-top: 4px;
    }
    .slide .desc {
        position: relative;
        z-index: 1;
        color: var(--text);
        font-size: 14px;
        line-height: 1.6;
    }

    .slide.active {
        box-shadow: 0 30px 80px hsl(0 0% 0% / 0.25), var(--shadow-sm);
        outline: 1px solid hsl(210 90% 56% / 0.35);
    }

    /* Drag layer stays under dots */
    .dragLayer {
        position: absolute;
        inset: 0;
        cursor: grab;
        z-index: 5; /* ⬅️ below dots (z:20) */
        background: transparent;
    }
    .dragLayer:active {
        cursor: grabbing;
    }
`;

export const ModalOverlay = styled.div`
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

    form {
        display: grid;
        gap: 12px;
    }
    .field {
        display: grid;
        gap: 6px;
    }
    .field.error input {
        border-color: hsl(0 80% 60%);
        box-shadow: 0 0 0 3px hsl(0 80% 60% / 0.15);
    }
    label {
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
    input::placeholder {
        color: color-mix(in oklab, var(--text-muted) 80%, #0000);
    }

    .pass .passWrap {
        position: relative;
    }
    .pass .eye {
        position: absolute;
        right: 6px;
        top: 50%;
        translate: 0 -50%;
        width: 30px;
        height: 30px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: 8px;
        cursor: pointer;
    }

    .err {
        color: hsl(0 80% 62%);
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

export const Styled = { Wrapper, Header, Stage, Scene };
