import styled from "styled-components";

const CARD_W = "min(320px, 92vw)";
const CARD_H = "200px";

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
        font-style: normal;
        font-size: 12px;
        color: var(--text-muted);
    }

    .switch {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 6px 10px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--card);
    }
    .switch input {
        accent-color: var(--primary);
    }
`;

const Grid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${CARD_W}, 1fr));
    gap: var(--space-6);
`;

const TiltWrap = styled.div`
    perspective: 1100px;
    will-change: transform;
`;

const Notes = styled.aside`
    color: var(--text-muted);
    h3 {
        color: var(--text);
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
    }
`;

/* ---- Tilt Card with accent-tinted background and layered shadows ---- */
const tiltBase = `
  position: relative;
  width: 100%;
  height: ${CARD_H};
  border-radius: var(--radius-lg);
  transform-style: preserve-3d;
  isolation: isolate;
  will-change: transform;
  outline: none;

  /* Accent fallbacks */
  --accent-h: 210;
  --accent-s: 80%;
  --accent-l: 56%;
`;

const Tilt = styled.div.attrs({ className: "tilt" })`
    ${tiltBase}

    /* Background & shadow fed via CSS vars from the component */
  background: var(--tilt-bg,
    linear-gradient(
      180deg,
      hsl(var(--accent-h,210) var(--accent-s,80%) calc(var(--accent-l,56%) + 16%) / 0.16) 0%,
      hsl(var(--accent-h,210) var(--accent-s,80%) calc(var(--accent-l,56%) + 6%)  / 0.10) 40%,
      transparent 100%
    ),
    var(--card)
  );

    border: 1px solid
        color-mix(
            in oklab,
            hsl(var(--accent-h) var(--accent-s) var(--accent-l)) 22%,
            var(--border)
        );

    box-shadow: var(
        --tilt-shadow,
        0 1px 0 hsl(0 0% 100% / 0.06) inset,
        0 16px 34px hsl(0 0% 0% / 0.22),
        0 10px 28px hsl(var(--accent-h) var(--accent-s) var(--accent-l) / 0.2)
    );

    /* Common layer baseline */
    .bgLayer,
    .midLayer,
    .content,
    .glare,
    .outline,
    .shadow {
        position: absolute;
        inset: 0;
        pointer-events: none;
        border-radius: inherit;
    }

    /* Background texture */
    .bgLayer {
        overflow: hidden;
        transform: translateZ(0);
    }
    .bgGradient {
        position: absolute;
        inset: -40%;
        background: conic-gradient(
            from 0deg at 30% 30%,
            hsl(
                var(--accent-h) var(--accent-s) calc(var(--accent-l) + 10%) /
                    0.08
            ),
            transparent 25%,
            transparent 75%,
            hsl(
                var(--accent-h) var(--accent-s) calc(var(--accent-l) + 4%) /
                    0.08
            )
        );
        filter: saturate(1.05);
    }
    .bgNoise {
        position: absolute;
        inset: 0;
        background-image: radial-gradient(
            hsl(0 0% 0% / 0.08) 1px,
            transparent 1px
        );
        background-size: 3px 3px;
        mix-blend-mode: overlay;
        opacity: 0.45;
    }

    /* Mid ornaments */
    .midLayer {
        transform: translateZ(30px);
    }
    .ring {
        position: absolute;
        width: 140px;
        height: 140px;
        border-radius: 999px;
        border: 1px dashed hsl(210 14% 60% / 0.35);
        top: 16px;
        right: 16px;
        filter: drop-shadow(0 2px 6px hsl(0 0% 0% / 0.25));
    }
    .orbs .orb {
        position: absolute;
        width: 18px;
        height: 18px;
        border-radius: 999px;
        background: hsl(var(--accent-h) var(--accent-s) var(--accent-l) / 0.7);
        box-shadow: 0 4px 14px
            hsl(var(--accent-h) var(--accent-s) var(--accent-l) / 0.5);
    }
    .orb.a {
        left: 18px;
        bottom: 22px;
    }
    .orb.b {
        left: 46px;
        bottom: 48px;
    }

    /* Foreground content */
    .content {
        transform: translateZ(60px);
        padding: 16px 18px;
        display: grid;
        gap: 8px;
        align-content: start;
    }
    .kicker {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 11px;
        color: var(--text-muted);
    }
    .title {
        font-size: 22px;
        color: var(--text);
        text-shadow: 0 2px 8px hsl(0 0% 0% / 0.18);
    }
    .meta {
        display: inline-flex;
        gap: 10px;
        align-items: center;
        color: var(--text-muted);
    }
    .emoji {
        font-size: 16px;
        transform: translateZ(30px);
    }

    /* Glare tied to pointer */
    .glare {
        --gx: 50%;
        --gy: 50%;
        --ga: 0deg;
        background: radial-gradient(
                320px 120px at var(--gx) var(--gy),
                hsl(0 0% 100% / 0.25),
                transparent 60%
            ),
            conic-gradient(
                from var(--ga),
                hsl(0 0% 100% / 0.12),
                transparent 30%
            );
        mix-blend-mode: overlay;
        opacity: 0.9;
        transform: translateZ(90px);
    }

    /* Inner outline */
    .outline {
        box-shadow: inset 0 0 0 1px hsl(0 0% 100% / 0.05),
            inset 0 0 0 2px
                hsl(var(--accent-h) var(--accent-s) var(--accent-l) / 0.12);
        transform: translateZ(100px);
    }

    /* Extra shadow layer (subtle) */
    .shadow {
        filter: drop-shadow(0 28px 40px hsl(0 0% 0% / 0.22));
        opacity: 0;
    }

    /* Elevation bump on hover/focus */
    &:hover,
    &:focus-visible {
        box-shadow: 0 1px 0 hsl(0 0% 100% / 0.06) inset,
            0 22px 48px hsl(0 0% 0% / 0.28),
            0 14px 36px
                hsl(var(--accent-h) var(--accent-s) var(--accent-l) / 0.26);
        outline: none;
    }
`;

export const Styled = {
    Wrapper,
    Header,
    Grid,
    TiltWrap,
    Notes,
    Tilt,
};
