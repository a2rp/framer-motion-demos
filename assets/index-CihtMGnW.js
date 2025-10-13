import{d as p,r as o,j as e,A as v}from"./index-BUutmlIb.js";import{M as C,m as f}from"./proxy-DSa7FBfm.js";const E=p.div`
    --hl-strong: hsl(50 100% 50% / 0.35);
    --hl-mid: hsl(50 100% 50% / 0.22);
    --hl-weak: hsl(50 100% 50% / 0.1);

    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    color: var(--text);
    max-width: 880px;
    margin: 0 auto;
`,M=p.header`
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

    .switch {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: var(--text-muted);
        input {
            transform: translateY(1px);
        }
    }

    .btn {
        height: 34px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        padding: 0 14px;
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn.ghost {
        background: var(--surface);
    }

    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .total {
        padding-left: 6px;
        color: var(--text-muted);
    }
`,L=p.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
`,T=p.div`
    display: grid;
    grid-template-columns: 80px 1fr 80px 140px;
    gap: var(--space-4);
    padding: 12px var(--space-6);
    border-bottom: 1px solid var(--border);
    background: var(--surface);
    color: var(--text-muted);
    font-size: 12px;

    .right {
        justify-self: end;
    }
`,q=p.div`
    max-height: 420px;
    overflow: auto;
    padding: 6px var(--space-6) var(--space-6);
`,I=p.div`
    display: grid;
    grid-template-columns: 80px 1fr 80px 140px;
    gap: var(--space-4);
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px dashed var(--border);
    border-radius: var(--radius-sm);

    .muted {
        color: var(--text-muted);
    }
    .right {
        justify-self: end;
    }

    &:hover {
        background: hsl(0 0% 100% / 0.02);
    }
`,z=p.div`
    padding: 24px;
    text-align: center;
    color: var(--text-muted);
`,F=p.div`
    position: fixed;
    inset: 0;
    z-index: 999;
    background: hsl(220 14% 10% / 0.55);
    backdrop-filter: blur(2px);
`,H=p.div`
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: grid;
    place-items: center; /* ← center on page */
    padding: 24px;

    .panel {
        background: var(--card);
        color: var(--text);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        width: min(520px, 92vw);
        max-height: min(80vh, 640px);
        padding: 18px;
        display: grid;
        align-content: start;
        gap: 12px;
    }

    h3 {
        font-size: 18px;
        margin: 0;
    }
    .body {
        color: var(--text-muted);
    }

    .actions {
        display: grid;
        grid-auto-flow: column;
        justify-content: end;
        gap: var(--space-4);
        margin-top: 6px;
    }

    .btn {
        height: 34px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        padding: 0 14px;
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn.danger {
        background: hsl(0 80% 56%);
        color: #fff;
        border-color: transparent;
    }
`,c={Wrapper:E,Header:M,Stage:L,TableHeader:T,Table:q,Row:I,Empty:z,ModalBackdrop:F,ModalDialog:H},y=(()=>{let a=0;return()=>`nr-${++a}`})(),h=(a,d)=>Math.floor(Math.random()*(d-a+1))+a,w=["Riya","Kabir","Aanya","Imran","Meera","Dev","Zoya","Vivaan","Ishaan","Tara"],j=a=>a[h(0,a.length-1)];function $(a=8){return Array.from({length:a},(d,u)=>({id:y(),name:`${j(w)} ${h(1,99)}`,qty:h(1,8),amount:h(150,2500)}))}function K(){const[a,d]=o.useState(()=>$(8)),[u,m]=o.useState(null),[x,l]=o.useState(!0),[r,g]=o.useState(!1),s=o.useRef(null),i=o.useRef(null),k=o.useMemo(()=>a.reduce((t,n)=>t+n.amount,0),[a]),N=()=>{const t={id:y(),name:`${j(w)} ${h(1,99)}`,qty:h(1,8),amount:h(150,2500),isNew:!0};d(n=>x?[t,...n]:[...n,t]),m(t.id),requestAnimationFrame(()=>{var b;const n=(b=i.current)==null?void 0:b.querySelector(`[data-id="${t.id}"]`);n==null||n.scrollIntoView({block:"nearest",behavior:"smooth"})})},R=()=>g(!0),A=()=>{d([]),m(null),g(!1),requestAnimationFrame(()=>{var t;return(t=s.current)==null?void 0:t.focus()})},S=()=>{g(!1),requestAnimationFrame(()=>{var t;return(t=s.current)==null?void 0:t.focus()})};return e.jsx(C,{reducedMotion:"never",children:e.jsxs(c.Wrapper,{children:[e.jsxs(c.Header,{"aria-hidden":r,children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"New Row Highlight"}),e.jsx("p",{className:"muted",children:"When a row is added, it inserts with a tiny rise and a warm pulse, then settles."})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Row controls",children:[e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:x,onChange:t=>l(t.target.checked)}),e.jsx("span",{children:"Insert at top"})]}),e.jsx("button",{className:"btn primary",onClick:N,children:"Add row"}),e.jsx("button",{ref:s,className:"btn ghost",onClick:R,disabled:!a.length,children:"Clear"}),e.jsxs("div",{className:"total",children:[e.jsx("b",{children:"Total:"})," ₹",k.toLocaleString()]})]})]}),e.jsxs(c.Stage,{"aria-hidden":r,children:[e.jsxs(c.TableHeader,{role:"row",children:[e.jsx("span",{children:"#"}),e.jsx("span",{children:"Name"}),e.jsx("span",{children:"Qty"}),e.jsx("span",{className:"right",children:"Amount"})]}),e.jsxs(c.Table,{as:f.div,ref:i,layout:!0,role:"list","aria-live":"polite",children:[e.jsx(v,{initial:!1,children:a.map((t,n)=>e.jsx(D,{row:t,index:n,isLastNew:t.id===u,onPulseEnd:()=>{t.id===u&&m(null)}},t.id))}),!a.length&&e.jsx(c.Empty,{children:"List is empty. Add a row to see the highlight."})]})]}),e.jsx(P,{open:r,title:"Clear all rows?",body:"This will remove all rows from the list. You can’t undo this action.",confirmLabel:"Clear",cancelLabel:"Cancel",onConfirm:A,onCancel:S})]})})}function D({row:a,index:d,isLastNew:u,onPulseEnd:m}){const x={opacity:1,y:0,scale:1,backgroundColor:"transparent"},l=a.isNew?{opacity:0,y:-6,scale:.995}:{opacity:0,y:0,scale:1},r=u?{opacity:1,y:0,scale:1,backgroundColor:["var(--hl-strong)","var(--hl-mid)","var(--hl-weak)","transparent"],transition:{layout:{type:"spring",stiffness:420,damping:38,mass:.8},duration:1.2,times:[0,.35,.7,1]}}:{...x,transition:{layout:{type:"spring",stiffness:420,damping:38,mass:.8}}};return e.jsxs(c.Row,{as:f.div,role:"listitem",layout:!0,initial:l,animate:r,exit:{opacity:0,scale:.98,transition:{duration:.18}},onAnimationComplete:m,"data-id":a.id,children:[e.jsxs("span",{className:"muted",children:["#",String(d+1).padStart(2,"0")]}),e.jsx("span",{children:a.name}),e.jsx("span",{children:a.qty}),e.jsxs("span",{className:"right",children:["₹",a.amount.toLocaleString()]})]})}function P({open:a,title:d,body:u,confirmLabel:m="Confirm",cancelLabel:x="Cancel",onConfirm:l,onCancel:r}){const g=o.useRef(null);return o.useEffect(()=>{if(!a)return;const s=requestAnimationFrame(()=>{var i;return(i=g.current)==null?void 0:i.focus()});return()=>cancelAnimationFrame(s)},[a]),o.useEffect(()=>{if(!a)return;const s=i=>{i.key==="Escape"&&(i.stopPropagation(),r==null||r()),i.key==="Enter"&&(i.preventDefault(),l==null||l())};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[a,r,l]),e.jsx(v,{children:a&&e.jsxs(e.Fragment,{children:[e.jsx(c.ModalBackdrop,{as:f.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:r,"aria-hidden":"true"},"backdrop"),e.jsx(c.ModalDialog,{as:f.div,role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",initial:{opacity:0,scale:.96,y:8},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.98,y:6,transition:{duration:.16}},transition:{type:"spring",stiffness:420,damping:34,mass:.8},children:e.jsxs("div",{className:"panel",onClick:s=>s.stopPropagation(),children:[e.jsx("h3",{id:"confirm-title",children:d}),e.jsx("p",{className:"body",children:u}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btn ghost",onClick:r,children:x}),e.jsx("button",{ref:g,className:"btn danger",onClick:l,children:m})]})]})},"dialog")]})})}export{K as default};
