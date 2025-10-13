import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: grid;
        gap: var(--space-6);
        padding: var(--space-6);
        max-width: 980px;
        margin: 0 auto;
        color: var(--text);
    `,

    Header: styled.header`
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
            gap: var(--space-3);
            align-items: center;
        }
        .btn {
            height: 34px;
            padding: 0 12px;
            border-radius: var(--radius-sm);
            border: 1px solid var(--border);
            background: var(--surface);
            color: var(--text);
            box-shadow: var(--shadow-sm);
            cursor: pointer;
        }
        .btn.ghost {
            background: var(--card);
        }
    `,

    TabsCard: styled.div`
        position: relative;
        border: 1px solid var(--border);
        background: var(--card);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        overflow: hidden;

        .tablist {
            position: relative;
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: max-content;
            gap: 6px;
            overflow-x: auto;
            padding: 10px;
            scrollbar-width: thin;
            scrollbar-color: transparent transparent;
        }

        .tab {
            position: relative;
            border: 1px solid transparent;
            background: transparent;
            color: var(--text);
            border-radius: var(--radius-md);
            padding: 10px 14px;
            cursor: pointer;
            white-space: nowrap;
            transition: background 140ms ease, color 140ms ease;
            outline: none;
        }
        .tab:hover {
            background: var(--surface);
        }
        .tab:focus-visible {
            box-shadow: var(--focus-ring);
        }
        .tab.active {
            color: var(--text);
        }

        .label {
            position: relative;
            z-index: 1;
        }

        /* The shared underline */
        .underline {
            position: absolute;
            left: 8px;
            right: 8px;
            bottom: 4px;
            height: 3px;
            border-radius: 2px;
            background: var(--primary);
            box-shadow: 0 2px 8px hsl(210 90% 56% / 0.35);
        }

        /* Subtle gradient edges for scroll affordance */
        .scrollMask.left,
        .scrollMask.right {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 18px;
            pointer-events: none;
        }
        .scrollMask.left {
            left: 0;
            background: linear-gradient(90deg, var(--card), transparent);
        }
        .scrollMask.right {
            right: 0;
            background: linear-gradient(270deg, var(--card), transparent);
        }
    `,

    PanelArea: styled.section`
        position: relative;

        .panel {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            padding: var(--space-6);
        }

        .pHead {
            display: grid;
            gap: 6px;
            margin-bottom: var(--space-4);
        }
        .kicker {
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-size: 11px;
            color: var(--text-muted);
        }
        h2 {
            font-size: 22px;
        }
        .body {
            color: var(--text);
        }
        .bullets {
            margin-top: var(--space-3);
            margin-left: 18px;
            display: grid;
            gap: 6px;
            color: var(--text);
        }
    `,

    /* Minimal, self-made modal */
    // Using the same component for both backdrop and card
    // so we keep the code tidy and theme-consistent.
    // It’s not a full focus-trap—kept intentionally simple.
};

export const ModalStyles = styled.div``; /* (reserved if you want to split later) */

/* Global-ish (scoped here via Styled.Wrapper ancestor) */
export const GlobalModalBits = styled.div``;

/* Inline CSS for modal classes used above */
const modalBase = document.createElement("style");
modalBase.innerHTML = `
.modalBackdrop{
  position:fixed; inset:0;
  background:hsl(220 10% 5% / 0.55);
  backdrop-filter:blur(2px);
  z-index:50;
}
.modal{
  position:fixed; inset:0; padding:24px;       /* padding for small screens */
  display:grid; place-items:center;            /* center the card */
  z-index:51; pointer-events:none;             /* backdrop clicks handled outside */
}
.modalCard{
  pointer-events:auto;                         /* receive clicks */
  width:min(560px, calc(100vw - 48px));
  max-height:min(70vh, 560px);
  background:var(--card);
  border:1px solid var(--border);
  border-radius:var(--radius-lg);
  box-shadow:var(--shadow-md);
  display:flex; flex-direction:column;
  overflow:hidden;                             /* header/footer fixed; body scrolls */
  padding: 15px;
}
.mHead,.mFoot{ padding:14px 18px; }
.mHead{ border-bottom:1px solid var(--border); }
.mBody{
  padding:14px 18px;
  overflow:auto;                               /* content scroll if tall */
}
.mFoot{
  border-top:1px solid var(--border);
  display:flex; justify-content:flex-end; gap:8px;
}
.modal .btn{
  height:34px; padding:0 12px; border-radius:var(--radius-sm);
  border:1px solid var(--border); background:var(--primary);
  color:var(--primary-contrast); box-shadow:var(--shadow-sm); cursor:pointer;
}
.modal kbd{
  background:var(--surface);
  border:1px solid var(--border); border-bottom-width:2px;
  padding:0 6px; border-radius:6px; font-size:12px;
}
`;

if (
    typeof document !== "undefined" &&
    !document.getElementById("underline-glide-modal-style")
) {
    modalBase.id = "underline-glide-modal-style";
    document.head.appendChild(modalBase);
}
