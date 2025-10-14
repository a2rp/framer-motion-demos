import styled from "styled-components";

/* Sticky visual height; adjust as needed */
const VISUAL_MIN_H = "480px";

const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1200px;
    margin: 0 auto;
    color: var(--text);
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    flex-wrap: wrap;

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
        gap: var(--space-4);
    }
    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        height: 36px;
        padding: 0 14px;
        box-shadow: var(--shadow-sm);
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
`;

const Progress = styled.div`
    height: 6px;
    border-radius: 999px;
    background: var(--surface);
    border: 1px solid var(--border);
    overflow: hidden;
    box-shadow: var(--shadow-sm);

    .bar {
        height: 100%;
        background: linear-gradient(90deg, hsl(210 90% 56%), hsl(210 90% 62%));
        will-change: width;
    }
`;

const Stage = styled.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    .shell {
        display: grid;
        grid-template-columns: 1fr minmax(420px, 46%);
        gap: var(--space-6);
        padding: var(--space-6);
        height: 100%;
        max-height: none;
        /* This element acts as a scroll container for useScroll (optional).
       Remove these 2 lines if you want the window scroll instead. */
        overflow: auto;
        max-height: calc(100vh - 260px);
    }

    @media (width < 980px) {
        .shell {
            grid-template-columns: 1fr;
            overflow: visible;
            max-height: none;
        }
    }

    .stepsCol {
        display: grid;
        gap: 16vh; /* generous spacing between steps */
        align-content: start;
    }

    .step {
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--surface);
        box-shadow: var(--shadow-sm);
        padding: var(--space-6);
        min-height: 40vh;
        display: grid;
        gap: var(--space-3);
    }
    .sHead {
        display: grid;
        gap: 6px;
    }
    .kicker {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 11px;
        color: var(--text-muted);
    }
    .step h2 {
        font-size: 22px;
    }
    .step .body {
        color: var(--text);
    }

    .cta {
        margin-top: var(--space-6);
    }
    .cta .btn {
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        border-radius: var(--radius-md);
        height: 38px;
        padding: 0 16px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }

    .visualCol {
        position: relative;
        display: grid;
        align-content: start;
        gap: var(--space-4);
    }

    .stickyBox {
        position: sticky;
        top: var(--space-6);
        min-height: ${VISUAL_MIN_H};
    }

    .visual {
        position: relative;
        height: ${VISUAL_MIN_H};
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        overflow: hidden;
        box-shadow: var(--shadow-md);
        background: radial-gradient(
                1200px 300px at 0% 0%,
                hsl(var(--v-hue, 210) 90% 60% / 0.18),
                transparent 60%
            ),
            linear-gradient(
                135deg,
                hsl(var(--v-hue, 210) 90% 56%),
                hsl(var(--v-hue, 210) 90% 62%)
            );
        display: grid;
        place-items: center;
        isolation: isolate;
    }

    /* layered shapes for subtle motion depth */
    .visual .layer {
        position: absolute;
        inset: 0;
        pointer-events: none;
    }
    .visual .back {
        background: radial-gradient(
                40% 40% at 80% 20%,
                hsl(var(--v-hue, 210) 90% 85% / 0.14),
                transparent 60%
            ),
            radial-gradient(
                30% 30% at 20% 80%,
                hsl(var(--v-hue, 210) 90% 85% / 0.1),
                transparent 60%
            );
        filter: saturate(1.05);
    }
    .visual .mid {
        background: radial-gradient(
                120px 120px at 30% 30%,
                hsl(var(--v-hue, 210) 90% 70% / 0.22),
                transparent 70%
            ),
            radial-gradient(
                140px 140px at 70% 70%,
                hsl(var(--v-hue, 210) 90% 70% / 0.18),
                transparent 70%
            );
        mix-blend-mode: overlay;
    }
    .visual .front {
        background: radial-gradient(
                18px 18px at 24% 36%,
                hsl(var(--v-hue, 210) 90% 98% / 0.65),
                transparent 60%
            ),
            radial-gradient(
                22px 22px at 78% 62%,
                hsl(var(--v-hue, 210) 90% 98% / 0.55),
                transparent 60%
            );
        opacity: 0.9;
    }

    .visual .label {
        position: absolute;
        left: 16px;
        bottom: 12px;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: var(--primary-contrast);
        text-shadow: 0 2px 8px hsl(0 0% 0% / 0.35);
        letter-spacing: 0.4px;
    }
    .visual .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--primary-contrast);
    }

    .dotsNav {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
    }
    .dotsNav .dot {
        width: 10px;
        height: 10px;
        border-radius: 999px;
        background: var(--border);
        border: 1px solid var(--border);
        cursor: pointer;
    }
    .dotsNav .dot.active {
        background: var(--primary);
        border-color: transparent;
    }

    @media (width < 560px) {
        .step {
            min-height: 36vh;
        }
        .visual {
            height: 360px;
        }
        .stickyBox {
            min-height: 360px;
        }
    }
`;

/* Modal overlay from user spec, with a couple of additions for form */
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

    /* form styles */
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
    .field input {
        height: 36px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        padding: 0 10px;
        outline: none;
    }
    .field input:focus {
        box-shadow: var(--focus-ring);
    }

    .pwdWrap {
        position: relative;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
    }
    .pwdWrap input {
        padding-right: 40px;
    }
    .eye {
        position: absolute;
        right: 6px;
        height: 28px;
        width: 32px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-sm);
        cursor: pointer;
    }

    .hint {
        color: var(--text-muted);
        font-size: 12px;
    }
    .error {
        color: hsl(0 78% 55%);
        font-size: 12px;
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 6px;
    }
    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        height: 36px;
        padding: 0 14px;
        box-shadow: var(--shadow-sm);
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
`;

export const Styled = {
    Wrapper,
    Header,
    Progress,
    Stage,
    ModalOverlay,
};
