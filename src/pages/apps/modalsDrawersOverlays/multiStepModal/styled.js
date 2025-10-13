import styled from "styled-components";

/* Page shell */
const Wrapper = styled.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);
`;
const Header = styled.header`
    display: flex;
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
    .btn {
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
`;
const Placeholder = styled.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-sm);
    padding: var(--space-6);
    ul {
        padding-left: 18px;
        color: var(--text-muted);
    }
`;

/* Modal scaffolding */
const ModalHead = styled.header`
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: var(--space-4);
    .titleArea h2 {
        font-size: 20px;
    }
    .titleArea .muted {
        color: var(--text-muted);
        margin-top: 4px;
    }
    .iconBtn {
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        height: 36px;
        width: 36px;
        border-radius: var(--radius-md);
        display: grid;
        place-items: center;
        cursor: pointer;
    }
`;

const Progress = styled.div`
    position: relative;
    padding-top: var(--space-4);
    .bar {
        height: 4px;
        background: var(--primary);
        transform-origin: left center;
        border-radius: 999px;
        box-shadow: 0 1px 0 hsl(0 0% 0% / 0.1) inset;
    }
    .dots {
        display: flex;
        gap: 6px;
        margin-top: 10px;
        justify-content: center;
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

const StepArea = styled.section`
    margin-top: var(--space-4);
    .viewport {
        position: relative;
        min-height: 160px;
    }
    .step {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        padding: var(--space-4);
    }
    .form {
        display: grid;
        gap: var(--space-4);
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
        background: var(--card);
        color: var(--text);
        padding: 0 10px;
        outline: none;
    }
    .review ul {
        padding-left: 18px;
    }
`;

const Footer = styled.footer`
    margin-top: var(--space-6);
    display: grid;
    row-gap: var(--space-3);

    /* Buttons row */
    .actions {
        display: flex;
        align-items: center;
        gap: var(--space-4);
    }
    .spacer {
        flex: 1;
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
    .btn.success {
        background: hsl(150 60% 40%);
        color: white;
        border-color: transparent;
        position: absolute;
        width: 100px;
        margin: auto;
        top: calc(100% - 50px);
        left: calc(100% - 120px);
    }
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    /* Success banner (now above the buttons) */
    .success {
        display: flex;
        align-items: center;
        gap: 8px;
        background: hsl(150 60% 38% / 0.15);
        border: 1px solid hsl(150 60% 38% / 0.35);
        color: hsl(150 60% 28%);
        border-radius: var(--radius-md);
        padding: 8px 10px;
    }
    .success .tick {
        width: 18px;
        height: 18px;
        display: inline-grid;
        place-items: center;
        background: hsl(150 60% 38%);
        color: white;
        border-radius: 4px;
        font-weight: 700;
    }
`;

/* Success banner inside modal */
const Success = styled.div``;

/* Root modal styles (backdrop + panel) */
const GlobalModalBits = styled.div``; // (placeholder in case you add global styles)

/* Export group with modal root classes embedded */
export const Styled = {
    Wrapper,
    Header,
    Placeholder,
    ModalHead,
    Progress,
    StepArea,
    Footer,
};

/* ---- modalRoot styles (scoped via global CSS-in-JS here) ---- */
const styleEl =
    typeof document !== "undefined" ? document.createElement("style") : null;
if (styleEl && !styleEl.dataset.msmInjected) {
    styleEl.dataset.msmInjected = "true";
    styleEl.textContent = `
  .modalRoot {
    position: fixed; inset: 0; z-index: 9999;
    display: grid; place-items: center;
  }
  .modalRoot .backdrop {
    position: absolute; inset: 0; border: 0; padding: 0; margin: 0;
    background: hsl(220 15% 10% / 0.4); backdrop-filter: blur(6px); cursor: pointer;
  }
  .modalRoot .panel {
    position: relative; width: min(720px, calc(100vw - 32px));
    background: var(--card); color: var(--text);
    border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
    padding: 18px 18px 20px;
  }
  .modalRoot .focusAnchor { outline: none; }
  .modalRoot .success {
    position: absolute; top: 8px; left: 8px; right: 8px;
    display: flex; align-items: center; gap: 8px;
    background: hsl(150 60% 38% / 0.15);
    border: 1px solid hsl(150 60% 38% / 0.35);
    color: hsl(150 60% 30%);
    border-radius: var(--radius-md);
    padding: 8px 10px;
  }
  .modalRoot .success .tick {
    width: 18px; height: 18px; display: inline-grid; place-items: center;
    background: hsl(150 60% 38%); color: white; border-radius: 4px; font-weight: 700;
  }
  `;
    document.head.appendChild(styleEl);
}
