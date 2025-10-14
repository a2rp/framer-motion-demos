import styled from "styled-components";

const Wrapper = styled.div`
    color: var(--text);
    background: var(--bg);
`;

const Progress = styled.div`
    position: sticky;
    top: 0;
    z-index: 30;
    height: 4px;
    width: 100%;
    background: linear-gradient(to right, var(--surface), transparent);

    .bar {
        height: 100%;
        transform-origin: 0 50%;
        background: linear-gradient(90deg, var(--primary), hsl(210 90% 66%));
        box-shadow: 0 0 12px hsl(210 90% 56% / 0.35);
    }
`;

const Hero = styled.section`
    position: relative;
    min-height: 120vh; /* give space so parallax is obvious */
    display: grid;
    place-items: center;
    overflow: clip;
    border-bottom: 1px solid var(--border);

    .layer {
        position: absolute;
        inset: 0;
        pointer-events: none;
        will-change: transform;
    }

    .layer.back {
        .grad {
            position: absolute;
            filter: saturate(1.1);
        }
        .grad-1 {
            inset: -10% -10% 30% -10%;
            background: radial-gradient(
                1200px 600px at 10% 20%,
                hsl(210 90% 56% / 0.18),
                transparent 60%
            );
        }
        .grad-2 {
            inset: 30% -10% -20% 40%;
            background: radial-gradient(
                900px 520px at 80% 70%,
                hsl(260 80% 66% / 0.12),
                transparent 60%
            );
        }
    }

    .layer.mid {
        .blobs {
            position: absolute;
            inset: 0;
        }
        .blob {
            position: absolute;
            width: 240px;
            height: 240px;
            border-radius: 1000px;
            background: linear-gradient(
                135deg,
                hsl(210 90% 56% / 0.25),
                hsl(210 90% 62% / 0.25)
            );
            filter: blur(18px) saturate(1.1);
            opacity: 0.65;
            will-change: transform;
        }
        .b1 {
            top: 14%;
            left: 6%;
        }
        .b2 {
            top: 64%;
            left: 18%;
            width: 300px;
            height: 300px;
        }
        .b3 {
            top: 48%;
            right: 12%;
            width: 260px;
            height: 260px;
        }
    }

    .layer.fore {
        .rings {
            position: absolute;
            inset: 0;
        }
        .ring {
            position: absolute;
            border-radius: 1000px;
            border: 1px solid hsl(210 90% 56% / 0.25);
            box-shadow: inset 0 0 40px hsl(210 90% 56% / 0.12);
            will-change: transform;
        }
        .r1 {
            width: 84vmin;
            height: 84vmin;
            top: 6%;
            left: 50%;
            transform: translateX(-50%);
        }
        .r2 {
            width: 60vmin;
            height: 60vmin;
            top: 16%;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;

const HeroContent = styled.div`
    position: relative;
    text-align: center;
    padding: var(--space-8) var(--space-6);
    max-width: 880px;
    z-index: 1;
    color: var(--text);

    h1 {
        font-size: clamp(28px, 6vw, 56px);
        line-height: 1.08;
        letter-spacing: -0.02em;
    }
    .kicker {
        margin-top: 12px;
        color: var(--text-muted);
        font-size: clamp(14px, 2.2vw, 18px);
    }
    .ctas {
        margin-top: 20px;
        display: inline-flex;
        gap: 12px;
    }
    .btn {
        border: 1px solid var(--border);
        height: 40px;
        padding: 0 16px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        transition: transform 0.12s ease;
    }
    .btn:hover {
        transform: translateY(-1px);
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
`;

const Section = styled.section`
    padding: var(--space-8) var(--space-6);
    max-width: 1100px;
    margin: 0 auto;

    .sHead {
        margin-bottom: var(--space-6);
    }
    .sHead h2 {
        font-size: 24px;
    }
    .sHead .muted {
        color: var(--text-muted);
    }

    .grid {
        display: grid;
        gap: var(--space-4);
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .card {
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        padding: var(--space-6);
    }
    .card h3 {
        font-size: 18px;
        margin-bottom: 8px;
    }
    .card p {
        color: var(--text);
    }

    .bullets {
        margin-left: 18px;
        display: grid;
        gap: 6px;
        color: var(--text);
    }

    @media (width < 900px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (width < 600px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }
`;

const FabTop = styled.button`
    position: fixed;
    right: 16px;
    bottom: 16px;
    z-index: 40;
    width: 42px;
    height: 42px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--card);
    color: var(--text);
    box-shadow: var(--shadow-md);
    cursor: pointer;
`;

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

    /* Form styles */
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
        height: 38px;
        padding: 0 12px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        outline: none;
    }
    .field input:focus {
        box-shadow: var(--focus-ring);
    }
    .field.hasErr input {
        border-color: hsl(0 73% 55% / 0.9);
    }
    .field .err {
        color: hsl(0 73% 55%);
        font-size: 12px;
    }
    .field .hint {
        font-size: 12px;
    }

    .pwdWrap {
        position: relative;
    }
    .eyeBtn {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        width: 32px;
        height: 32px;
        border-radius: 6px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        display: grid;
        place-items: center;
        cursor: pointer;
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 6px;
    }
    .btn {
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .success {
        text-align: center;
        padding: 10px 6px;
    }
    .checkWrap {
        display: grid;
        place-items: center;
        color: var(--primary);
    }
    .check {
        width: 88px;
        height: 88px;
    }
    .success h4 {
        margin-top: 8px;
        font-size: 18px;
    }
`;

export const Styled = {
    Wrapper,
    Progress,
    Hero,
    HeroContent,
    Section,
    FabTop,
    ModalOverlay,
};
