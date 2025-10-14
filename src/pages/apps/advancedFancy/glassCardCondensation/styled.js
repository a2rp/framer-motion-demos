import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1100px;
    margin: 0 auto;
    color: var(--text);

    a {
        color: var(--primary);
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    em {
        font-style: normal;
    }
`;

const Header = styled.header`
    display: grid;
    gap: var(--space-4);

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
        flex-wrap: wrap;
        gap: var(--space-4);
    }

    .ctrl {
        display: grid;
        align-items: center;
        gap: 6px;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .ctrl input[type="range"] {
        width: 180px;
        accent-color: var(--primary);
    }
    .ctrl em {
        font-size: 12px;
        color: var(--text-muted);
        padding-left: 6px;
    }

    .toggle {
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .toggle input {
        width: 18px;
        height: 18px;
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
`;

const Stage = styled.section`
    perspective: 1000px;

    .glassCard {
        position: relative;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: color-mix(
            in oklab,
            var(--card) 78%,
            hsl(210 90% 56% / 0.06)
        );
        box-shadow: var(--shadow-md);
        overflow: hidden;
        transform-style: preserve-3d;
        will-change: transform;
        padding: var(--space-6);
    }

    .glassBase {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 0;

        background: radial-gradient(
            400px 260px at var(--hx, 50%) var(--hy, 50%),
            hsl(210 90% 56% / 0.14),
            transparent 60%
        );

        backdrop-filter: blur(calc(6px + (14px * var(--condense, 0.6))))
            saturate(calc(1 + (0.4 * var(--condense, 0.6))))
            brightness(calc(1 - (0.06 * var(--condense, 0.6))));
        will-change: backdrop-filter, background;
    }

    .glassBase::after {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        mix-blend-mode: soft-light;
        background: linear-gradient(
                180deg,
                hsl(0 0% 100% / 0.1),
                transparent 60%
            ),
            radial-gradient(
                1000px 300px at 10% -10%,
                hsl(210 90% 56% / 0.1),
                transparent 60%
            );
        opacity: calc(0.1 + (0.55 * var(--condense, 0.6)));
    }

    .droplets {
        position: absolute;
        inset: -10%;
        z-index: 1;
        pointer-events: none;
        opacity: calc(0.25 + (0.45 * var(--condense, 0.6)));
    }

    .dropsInner {
        position: absolute;
        inset: 0;
        mix-blend-mode: overlay;
        filter: saturate(1.15);
        background: radial-gradient(
                    2px 2px at 14% 20%,
                    hsl(0 0% 100% / 0.35),
                    transparent 60%
                )
                repeat,
            radial-gradient(
                    2px 2px at 68% 70%,
                    hsl(0 0% 100% / 0.3),
                    transparent 60%
                )
                repeat,
            radial-gradient(
                    1.5px 1.5px at 34% 44%,
                    hsl(0 0% 100% / 0.28),
                    transparent 60%
                )
                repeat;
        background-size: 160px 160px, 220px 220px, 180px 180px;
    }

    .content {
        position: relative;
        z-index: 2;
        display: grid;
        gap: var(--space-4);
    }

    .cHead h2 {
        font-size: 20px;
    }
    .cHead .sub {
        color: var(--text-muted);
    }

    .form {
        display: grid;
        gap: var(--space-4);
    }
    .field {
        display: grid;
        gap: 6px;
    }
    .field > span {
        font-size: 12px;
        color: var(--text-muted);
    }

    .field input[type="email"],
    .field input[type="password"],
    .field input[type="text"] {
        height: 36px;
        border: 1px solid var(--border);
        background: color-mix(in oklab, var(--surface) 85%, #0000);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 10px;
        outline: none;
    }
    .field input:focus {
        box-shadow: var(--focus-ring);
        border-color: color-mix(in oklab, var(--primary) 65%, var(--border));
    }

    .pwd {
        position: relative;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 8px;
    }
    .pwd input {
        padding-right: 42px;
    }
    .eye {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        width: 34px;
        height: 28px;
        display: inline-grid;
        place-items: center;
        border-radius: var(--radius-sm);
        border: 1px solid transparent;
        background: transparent;
        color: var(--text);
        cursor: pointer;
    }
    .eye:hover {
        background: var(--surface);
        border-color: var(--border);
    }

    .err {
        color: hsl(6 78% 57%);
        font-size: 12px;
    }

    .actions {
        display: flex;
        gap: var(--space-4);
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
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }

    .cFoot .hint {
        color: var(--text-muted);
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
`;

export const Styled = { Wrapper, Header, Stage, ModalOverlay };
