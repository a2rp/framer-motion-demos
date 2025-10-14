import styled from "styled-components";

/* Sticky reading progress */
const Progress = styled.div`
    position: sticky;
    top: 0;
    z-index: 30;
    height: 4px;
    background: linear-gradient(90deg, transparent, transparent);
    .bar {
        height: 100%;
        background: linear-gradient(90deg, hsl(210 90% 56%), hsl(210 90% 62%));
        box-shadow: 0 0 12px hsl(210 90% 56% / 0.45);
        width: 0%;
        will-change: width;
    }
`;

/* Page wrapper */
const Wrapper = styled.main`
    display: grid;
    gap: var(--space-8);
    padding: var(--space-6);
    color: var(--text);
`;

/* Parallax hero */
const Hero = styled.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    .heroInner {
        position: relative;
        min-height: 320px;
        display: grid;
        place-items: center;
        padding: clamp(24px, 5vw, 64px);
        isolation: isolate;
    }

    .bg {
        position: absolute;
        inset: -10%;
        background: radial-gradient(
                600px 200px at 8% 0%,
                hsl(210 90% 60% / 0.15),
                transparent 60%
            ),
            radial-gradient(
                800px 300px at 92% 100%,
                hsl(210 90% 62% / 0.12),
                transparent 60%
            ),
            linear-gradient(
                120deg,
                hsl(210 50% 52% / 0.15),
                transparent 45%,
                hsl(210 90% 56% / 0.14)
            );
        filter: saturate(1.05);
        z-index: 0;
    }

    .fg {
        position: relative;
        z-index: 1;
        text-align: center;
        max-width: 840px;
    }

    h1 {
        font-size: clamp(26px, 4vw, 40px);
        line-height: 1.1;
    }
    .muted {
        color: var(--text-muted);
        margin-top: 10px;
    }

    .ctaRow {
        display: inline-grid;
        place-items: center;
        gap: 14px;
        margin-top: 18px;
        position: relative;
    }
    .gloss {
        position: absolute;
        inset: auto auto -6px 0;
        height: 3px;
        width: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            hsl(210 90% 56%),
            transparent
        );
        border-radius: 999px;
        filter: blur(1px);
        pointer-events: none;
    }

    .btn {
        height: 40px;
        padding: 0 16px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
`;

/* General section */
const Section = styled.section`
    display: grid;
    gap: var(--space-4);

    h2 {
        font-size: 22px;
        line-height: 1.25;
    }

    .grid {
        display: grid;
        gap: var(--space-4);
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (width < 900px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (width < 560px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }

    .card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        padding: var(--space-4);
    }
    .card h3 {
        font-size: 16px;
        margin-bottom: 6px;
    }
    .card p {
        color: var(--text-muted);
    }
`;

/* Quote */
const Gallery = styled.section`
    display: grid;
    gap: var(--space-4);
    grid-template-columns: repeat(6, minmax(0, 1fr));
    @media (width < 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (width < 560px) {
        grid-template-columns: repeat(2, 1fr);
    }

    .shot {
        display: grid;
        gap: 6px;
        text-align: center;
    }
    .img {
        aspect-ratio: 4/3;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: linear-gradient(
                0deg,
                hsl(210 90% 56% / 0.1),
                hsl(210 90% 56% / 0.04)
            ),
            var(--card);
        box-shadow: var(--shadow-sm);
    }
    figcaption {
        color: var(--text-muted);
        font-size: 12px;
    }
`;

const CTA = styled.section`
    .ctaCard {
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        padding: var(--space-6);
        display: grid;
        gap: var(--space-3);
        text-align: center;
    }
    .muted {
        color: var(--text-muted);
    }
    .row {
        display: flex;
        gap: 12px;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 6px;
    }
    .btn {
        height: 38px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
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

/* Quote section style (re-using Section wrapper) */
Section.defaultProps = {};
const SectionStyles = styled(Section)`
    .quote {
        border-left: 4px solid var(--border);
        padding-left: var(--space-4);
        color: var(--text);
    }
    .quote p {
        font-size: 18px;
    }
    .quote footer {
        color: var(--text-muted);
        margin-top: 8px;
    }
`;
// export alias to keep API tidy
export { SectionStyles as Section };

/* Modal overlay — as requested */
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

    /* Form controls */
    form {
        display: grid;
        gap: 14px;
    }
    .fld {
        display: grid;
        gap: 6px;
    }
    .fld span {
        font-size: 12px;
        color: var(--text-muted);
    }
    input[type="email"],
    input[type="password"],
    input[type="text"] {
        height: 38px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 12px;
        outline: none;
    }
    input:focus {
        box-shadow: var(--focus-ring);
        border-color: transparent;
    }
    .pwWrap {
        position: relative;
    }
    .pwWrap input {
        width: 100%;
        padding-right: 40px;
    }
    .eye {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        height: 28px;
        width: 28px;
        border-radius: 8px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        display: grid;
        place-items: center;
        cursor: pointer;
    }

    .err {
        color: hsl(8 80% 58%);
        font-size: 12px;
    }

    .btnRow {
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        margin-top: 6px;
    }
    .btn {
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }

    .success {
        display: grid;
        gap: 6px;
    }
    .success h4 {
        font-size: 18px;
    }
`;

export const Styled = { Wrapper, Progress, Hero, Section, Gallery, CTA };
