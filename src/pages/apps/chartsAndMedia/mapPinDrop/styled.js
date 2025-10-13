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
        display: inline-flex;
        align-items: center;
        gap: var(--space-4);
        flex-wrap: wrap;
    }

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 12px;
        height: 34px;
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
    .btn.danger {
        background: hsl(6 78% 57%);
        color: white;
        border-color: transparent;
    }

    .zoomRange {
        width: 180px;
        accent-color: var(--primary);
    }
    .zoomReadout {
        min-width: 62px;
        text-align: right;
        font-variant-numeric: tabular-nums;
        color: var(--text-muted);
    }

    .sep {
        width: 1px;
        height: 28px;
        background: var(--border);
    }
`;

const Stage = styled.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    height: 520px;

    .canvas {
        position: relative;
        inset: 0;
        width: 100%;
        height: 100%;
        cursor: crosshair;
        background: radial-gradient(
                1200px 260px at 10% 0%,
                hsl(210 90% 56% / 0.1),
                transparent 60%
            ),
            linear-gradient(180deg, var(--card), var(--surface));
    }

    /* the world gets sized to image*baseScale, then further scaled via transform by zoom */
    .world {
        position: absolute;
        left: 0;
        top: 0;
        transform-origin: 0 0; /* top-left origin keeps pan math simple */
        will-change: transform;
    }

    .worldSize {
        position: relative; /* anchor for absolute pins */
        width: 100%;
        height: 100%;
        overflow: visible;
        border-radius: 16px;
        box-shadow: inset 0 20px 30px -18px hsl(0 0% 0% / 0.15),
            inset 0 -20px 30px -18px hsl(0 0% 0% / 0.15);
    }

    .mapImg {
        width: 100%;
        height: 100%;
        object-fit: cover; /* cover-fit base sizing; extra zoom uses transform */
        display: block;
        border: 1px solid var(--border);
        border-radius: 16px;
        box-shadow: var(--shadow-sm);
        user-select: none;
        pointer-events: none; /* clicks pass through to canvas */
    }

    .gridOverlay {
        pointer-events: none;
        position: absolute;
        inset: 0;
        background: linear-gradient(
                0deg,
                color-mix(in oklab, var(--card) 92%, #000) 1px,
                transparent 1px
            ),
            linear-gradient(
                90deg,
                color-mix(in oklab, var(--card) 92%, #000) 1px,
                transparent 1px
            );
        background-size: 64px 64px, 64px 64px;
        mix-blend-mode: overlay;
        opacity: 0.4;
        border-radius: 16px;
    }

    .skeleton {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        color: var(--text-muted);
    }
    .skeleton .shine {
        position: absolute;
        inset: 0;
        background: linear-gradient(
            100deg,
            transparent 0%,
            hsl(0 0% 100% / 0.06) 40%,
            transparent 80%
        );
        background-size: 200% 100%;
        animation: shine-move 1.6s linear infinite;
    }
    .skeleton .hint {
        position: relative;
        z-index: 1;
        padding: 6px 10px;
        border-radius: 10px;
        background: color-mix(in oklab, var(--surface) 70%, #000);
        border: 1px solid var(--border);
    }
    @keyframes shine-move {
        to {
            background-position: -200% 0;
        }
    }

    /* pin */
    .pin {
        position: absolute;
        transform: translate(-50%, -100%); /* tip sits at coordinate */
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        isolation: isolate;
    }
    .pin .dot {
        width: 14px;
        height: 14px;
        border-radius: 999px;
        background: var(--primary);
        box-shadow: 0 0 0 2px var(--card), 0 10px 22px hsl(0 0% 0% / 0.25);
    }
    .pin .shadow {
        position: absolute;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%);
        width: 26px;
        height: 8px;
        border-radius: 100%;
        background: radial-gradient(
            closest-side,
            hsl(0 0% 0% / 0.25),
            transparent
        );
        filter: blur(1px);
        z-index: -1;
    }
    .pin .label {
        position: absolute;
        top: -8px;
        left: 10px;
        transform: translateY(-100%);
        font-size: 12px;
        line-height: 1;
        font-weight: 600;
        padding: 6px 8px;
        background: var(--surface);
        color: var(--text);
        border: 1px solid var(--border);
        border-radius: 10px;
        box-shadow: var(--shadow-sm);
        white-space: nowrap;
        pointer-events: none;
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
    .details {
        margin-left: 18px;
        display: grid;
        gap: 6px;
    }

    .btn,
    .closeBtn {
        border: 1px solid var(--border);
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn.ghost {
        background: var(--surface);
        color: var(--text);
    }
    .btn.danger {
        background: hsl(6 78% 57%);
        color: white;
        border-color: transparent;
    }

    .field {
        display: grid;
        gap: 8px;
        margin-bottom: 14px;
    }
    .field label {
        font-size: 12px;
        color: var(--text-muted);
    }
    .field .req {
        color: hsl(6 78% 57%);
    }
    .field input[type="text"],
    .field input[type="password"] {
        height: 36px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 10px;
        outline: none;
    }
    .field .pwd {
        position: relative;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
    }
    .field .pwd input {
        border-right: none;
        border-radius: var(--radius-md) 0 0 var(--radius-md);
    }
    .field .pwd .eye {
        height: 36px;
        width: 42px;
        border: 1px solid var(--border);
        border-left: none;
        background: var(--surface);
        color: var(--text);
        border-radius: 0 var(--radius-md) var(--radius-md) 0;
        display: inline-grid;
        place-items: center;
        cursor: pointer;
    }

    .err {
        color: hsl(6 78% 57%);
        font-size: 12px;
    }
`;

export const Styled = { Wrapper, Header, Stage };
