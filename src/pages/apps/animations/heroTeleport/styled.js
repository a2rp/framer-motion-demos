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
`;

const Controls = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: var(--space-4);
    align-items: center;

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 8px 14px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }

    .dots {
        display: flex;
        justify-content: center;
        gap: 8px;
    }
    .dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: var(--border);
    }
    .dot.active {
        background: var(--primary);
    }
`;

const Stage = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-6);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);

    @media (width < 860px) {
        grid-template-columns: 1fr;
    }
`;

const Column = styled.div`
    display: grid;
    align-content: start;
    gap: var(--space-4);
`;

const SectionTitle = styled.h2`
    font-size: 14px;
    color: var(--text-muted);
`;

const Notes = styled.aside`
    color: var(--text-muted);
    ul {
        padding-left: 18px;
    }
`;

/* Card / hero visuals (scoped via class names used in JSX) */
const _scoped = styled.div``; // placeholder; classes below:

/* hero in either column */
const _globalStyles = `
.heroCard {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.heroArt {
  height: 140px;
  background-size: cover;
  background-position: center;
}

.heroText {
  padding: var(--space-4);
}
.heroText .kicker {
  text-transform: uppercase;
  letter-spacing: .08em;
  font-size: 11px;
  color: var(--text-muted);
}
.heroText h2 { font-size: 20px; }

.slot {
  height: 140px;
  border: 1px dashed var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
  opacity: .6;
}

.detail {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: var(--space-4);
}

.cardHead {
  display: grid; gap: 6px; margin-bottom: var(--space-3);
}

.cardHead .kicker {
  text-transform: uppercase;
  letter-spacing: .08em;
  font-size: 11px;
  color: var(--text-muted);
}

.detail .body { color: var(--text); margin-bottom: var(--space-3); }
.detail .bullets { color: var(--text); display: grid; gap: 6px; margin-left: 18px; }

/* Thumbs */
.thumbGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-3);
}
.thumb {
  height: 56px;
  border-radius: var(--radius-md);
  background:
    linear-gradient(135deg, hsl(210 90% 56% / .14), hsl(210 90% 62% / .08));
  border: 1px solid var(--border);
}
`;

const Global = styled.div`
    ${_globalStyles}
`;

export const Styled = {
    Wrapper,
    Header,
    Controls,
    Stage,
    Column,
    SectionTitle,
    Notes,
    Global, // optional: render once if you want these classes injected here
};
