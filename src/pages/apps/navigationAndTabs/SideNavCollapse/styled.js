import styled from "styled-components";

/* Grid track width is driven inline from the component. */
const Shell = styled.div`
    display: grid;
    /* default; component overrides via style={{ gridTemplateColumns: '…' }} */
    grid-template-columns: 260px 1fr;
    gap: 0;
    min-height: 520px;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    /* Smooth column resize */
    transition: grid-template-columns 260ms cubic-bezier(0.22, 1, 0.36, 1);

    /* Sidebar */
    .side {
        position: relative;
        background: var(--surface);
        border-right: 1px solid var(--border);
        display: grid;
        grid-template-rows: auto 1fr auto;
        width: 100%; /* fills the grid track */
    }
    .side.expanded {
        overflow: visible;
    }
    .side.collapsed {
        overflow: hidden;
    } /* ⟵ clip everything when collapsed */

    .head {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        padding: 10px;
        gap: 10px;
        border-bottom: 1px solid var(--border);
        background: var(--card);
    }

    .brand {
        display: inline-flex;
        align-items: center;
        gap: 10px;
    }
    .logo {
        width: 28px;
        height: 28px;
        border-radius: 8px;
        background: radial-gradient(
                12px 12px at 30% 30%,
                hsl(210 90% 56% / 0.35),
                transparent 60%
            ),
            linear-gradient(135deg, hsl(210 90% 56%), hsl(210 90% 62%));
        box-shadow: var(--shadow-sm);
    }
    .brandText {
        font-weight: 700;
        letter-spacing: 0.2px;
        color: var(--text);
    }

    .collapseBtn {
        height: 36px;
        width: 36px;
        display: grid;
        place-items: center;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        cursor: pointer;
        box-shadow: var(--shadow-sm);
    }
    .collapseBtn:hover {
        filter: brightness(1.02);
    }

    .nav {
        padding: 8px;
        overflow: auto;

        /* Stable hover scrollbar – no layout shift */
        scrollbar-gutter: stable;
        scrollbar-width: thin;
        scrollbar-color: transparent transparent;
    }
    .nav:hover {
        scrollbar-color: #666 transparent;
    }
    .nav::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }
    .nav::-webkit-scrollbar-thumb {
        background: transparent;
        border-radius: 8px;
        border: 3px solid transparent;
        background-clip: content-box;
    }
    .nav:hover::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #3a3a3a, #666);
    }

    .nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        gap: 6px;
    }

    .navItem {
        position: relative;
        width: 100%;
        display: grid;
        grid-template-columns: 36px 1fr auto;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        border-radius: var(--radius-md);
        border: 1px solid transparent; /* focus ring overlay */
        background: transparent;
        color: var(--text);
        cursor: pointer;
        text-align: left;
        isolation: isolate;
    }
    .navItem:hover {
        background: var(--card);
    }
    .navItem:focus-visible {
        outline: none;
        box-shadow: var(--focus-ring);
    }

    .navItem .icon {
        display: grid;
        place-items: center;
        color: var(--text);
    }
    .navItem .label {
        color: var(--text);
    }
    .navItem .badge {
        color: var(--primary-contrast);
        background: var(--primary);
        border-radius: 999px;
        font-size: 12px;
        padding: 2px 8px;
        line-height: 1.4;
    }

    /* Active pill (shared layoutId target) */
    .activePill {
        position: absolute;
        inset: 0;
        border-radius: var(--radius-md);
        background: linear-gradient(
                0deg,
                hsl(210 90% 56% / 0.1),
                hsl(210 90% 56% / 0.06)
            ),
            var(--surface);
        border: 1px solid hsl(210 90% 56% / 0.35);
        z-index: -1;
    }

    /* Tooltip base style (used by fixed floating tip too) */
    .tooltipBase {
        background: var(--card);
        color: var(--text);
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        padding: 6px 10px;
        white-space: nowrap;
        box-shadow: var(--shadow-sm);
        pointer-events: none;
    }
    /* In-list absolute tooltip (not used when collapsed anymore) */
    .tooltip {
        position: absolute;
        left: calc(100% + 8px);
        top: 50%;
        transform: translateY(-50%);
    }
    /* Floating tooltip (position: fixed) – not clipped by collapsed .side */
    .fixedTip {
        position: fixed;
        transform: translateY(-50%);
        z-index: 60;
    }
    .tooltipArrow,
    .fixedTip::after {
        content: "";
        position: absolute;
        left: -6px;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-right: 6px solid var(--card);
        filter: drop-shadow(0 0 0 var(--border));
    }

    .foot {
        border-top: 1px solid var(--border);
        padding: 8px;
        background: var(--card);
        display: grid;
    }
    .settings {
        display: grid;
        grid-template-columns: 24px 1fr;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        cursor: pointer;
    }
    .settings .icon {
        display: grid;
        place-items: center;
    }

    /* Main content */
    .pageHead {
        padding: 20px 24px 8px;
    }
    .pageHead h1 {
        font-size: 22px;
        margin: 0 0 6px;
        color: var(--text);
    }
    .pageHead .muted {
        color: var(--text-muted);
    }
    .content {
        padding: 0 24px 24px;
        color: var(--text);
    }
`;

const Main = styled.main`
    display: grid;
    align-content: start;
`;

export const Styled = { Shell, Main };

/* ---------- Modal styles (same tiny helper) ---------- */
export const ModalStyles = styled.div``;

const style = document.createElement("style");
style.innerHTML = `
.modalRoot{position:fixed;inset:0;z-index:50}
.backdrop{position:absolute;inset:0;background:hsl(0 0% 0% /.45);backdrop-filter:saturate(1.1) blur(2px)}
.dialog{
  position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
  width:min(560px,92vw);background:var(--card);color:var(--text);
  border:1px solid var(--border);border-radius:var(--radius-lg);box-shadow:var(--shadow-md);
  display:grid;grid-template-rows:auto 1fr auto;overflow:hidden;
}
.dHead{padding:14px 16px;border-bottom:1px solid var(--border)}
.dHead h3{margin:0;font-size:16px}
.dBody{padding:14px 16px;display:grid;gap:10px}
.row{display:flex;align-items:center;gap:10px}
.dFoot{padding:12px 16px;border-top:1px solid var(--border);display:flex;gap:10px;justify-content:flex-end}
.btn{height:34px;padding:0 12px;border-radius:var(--radius-sm);border:1px solid var(--border);background:var(--surface);color:var(--text);box-shadow:var(--shadow-sm);cursor:pointer}
.btn.primary{background:var(--primary);color:var(--primary-contrast);border-color:transparent}
.btn.ghost{background:var(--surface)}
`;
document.head.appendChild(style);
