import styled from "styled-components";

const bg = "var(--bg, #0b0b0b)";
const card = "var(--card, #111)";
const text = "var(--text, #e9e9e9)";
const muted = "var(--muted, #b7b7b7)";
const border = "var(--border, #222)";
const accent = "var(--accent, #22c55e)";
const radius = "var(--radius, 16px)";
const shadow = "var(--shadow, 0 8px 30px rgba(0, 0, 0, 0.25))";

export const Styled = {
    Overlay: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.55);
        z-index: 999; /* higher than sidebars */
        display: grid;
        place-items: center;
        padding: 24px;
        backdrop-filter: blur(2px);
    `,

    Dialog: styled.div`
        width: min(520px, 96vw);
        background: ${card};
        color: ${text};
        border: 1px solid ${border};
        border-radius: ${radius};
        box-shadow: ${shadow};
        padding: 18px 18px 14px;
        animation: scaleIn 120ms ease-out;

        &[data-variant="danger"] {
            border-color: color-mix(in srgb, #ff5858 40%, ${border});
            box-shadow: 0 10px 40px rgba(255, 0, 0, 0.12);
        }

        h3 {
            margin: 0 0 8px;
            font-size: clamp(18px, 3.6vw, 20px);
            line-height: 1.2;
        }

        p {
            margin: 0 0 14px;
            color: ${muted};
            font-size: 14px;
            line-height: 1.5;
            white-space: pre-line;
        }

        @keyframes scaleIn {
            from {
                transform: scale(0.97);
                opacity: 0;
            }
            to {
                transform: scale(1);
                opacity: 1;
            }
        }
    `,

    Actions: styled.div`
        display: flex;
        gap: 10px;
        justify-content: flex-end;

        button {
            background: ${accent};
            color: #051a0d;
            border: 1px solid ${accent};
            border-radius: 12px;
            padding: 10px 14px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.05s ease;
            &:active {
                transform: translateY(1px);
            }
            &:focus-visible {
                outline: 2px solid
                    color-mix(in srgb, ${accent} 40%, transparent);
                outline-offset: 2px;
            }
        }

        .ghost {
            background: transparent;
            color: ${text};
            border: 1px solid ${border};
        }

        .danger {
            background: #ff5858;
            color: #2b0e0e;
            border-color: #ff5858;
        }
    `,
};
