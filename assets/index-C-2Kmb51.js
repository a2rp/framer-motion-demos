import{d,r as h,j as e,A as y}from"./index-h_xcPptR.js";import{m as c,M as w}from"./proxy-BBnnFU2D.js";import{L as k}from"./index-DeiISDP_.js";const N=d.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);
`,C=d.header`
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

    /* Base button */
    .btn,
    .outline,
    .ghost {
        height: 34px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0 14px;
        border-radius: var(--radius-md);
        cursor: pointer;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-sm);
    }

    /* ✅ Only the pure .btn (Add level) gets primary colors */
    .btn:not(.outline):not(.ghost) {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }

    /* Ghost/Outline stay readable on both themes */
    .ghost {
        background: var(--surface);
        color: var(--text);
    }
    .outline {
        background: var(--card);
        color: var(--text);
    }

    /* Hover/focus polish */
    .ghost:not(:disabled):hover,
    .outline:not(:disabled):hover {
        border-color: hsl(210 90% 56% / 0.45);
        box-shadow: var(--shadow-sm), 0 0 0 3px var(--focus-ring);
    }

    .btn:disabled,
    .ghost:disabled,
    .outline:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        color: var(--text-muted);
        box-shadow: var(--shadow-sm);
    }

    .sep {
        width: 1px;
        height: 34px;
        background: var(--border);
    }
`,A=d.section`
    display: grid;
    gap: var(--space-4);

    .bc {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 0;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        padding: 10px 12px;
        min-height: 48px;
    }

    .crumb {
        --pad-x: 8px;
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 6px var(--pad-x);
        color: var(--text);
        user-select: none;
        border-radius: var(--radius-sm);
        transition: background-color 0.18s ease;

        &:hover {
            background-color: hsl(210 90% 56% / 0.08);
        }
        &.ellipsis {
            color: var(--text-muted);
            cursor: pointer;
            &:hover {
                background: transparent;
            }
        }
        &.active {
            font-weight: 600;
        }
        &[role="link"] {
            cursor: pointer;
        }
    }

    .crumb .label {
        white-space: nowrap;
    }

    .crumb .sep::after {
        content: "›";
        color: var(--text-muted);
        opacity: 0.8;
    }

    .underline {
        position: absolute;
        left: var(--pad-x);
        right: var(--pad-x);
        bottom: 2px;
        height: 2px;
        border-radius: 2px;
        background: var(--primary);
    }
`,P=d.div`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--surface);
    padding: var(--space-4);
    box-shadow: var(--shadow-sm);

    h3 {
        margin-bottom: 6px;
    }
    .path {
        color: var(--text-muted);
        overflow: auto;
    }
`,S=d.aside`
    color: var(--text-muted);
    h3 {
        color: var(--text);
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
    }
`,B=d(c.div)`
    position: fixed;
    inset: 0;
    z-index: 60;
    background: hsl(0 0% 0% / 0.5);
    backdrop-filter: blur(1.5px);
`,E=d(c.div)`
    position: fixed;
    inset: 0;
    z-index: 61;
    display: grid;
    place-items: center;
    pointer-events: none;
    padding: var(--space-6);

    .panel {
        pointer-events: auto;
        width: min(720px, 92vw);
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        overflow: hidden;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 14px;
        border-bottom: 1px solid var(--border);
    }
    header h3 {
        font-size: 18px;
    }
    header .close {
        height: 32px;
        min-width: 32px;
        display: inline-grid;
        place-items: center;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        cursor: pointer;
    }

    .content {
        padding: var(--space-4);
        display: grid;
        gap: var(--space-4);
    }

    .preset {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--surface);
        padding: 10px 12px;
    }
    .preset .label {
        color: var(--text);
    }
    .preset .path {
        color: var(--text-muted);
        margin-top: 2px;
        font-size: 12px;
    }
    .preset .pick {
        height: 30px;
        padding: 0 10px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        cursor: pointer;
    }
`,l={Wrapper:N,Header:C,Stage:A,Preview:P,Notes:S,Backdrop:B,Card:E},v=[["Home","Products","Laptops","Apple","MacBook Air (M2)"],["Home","Products","Phones","Android","Pixel 9 Pro"],["Home","Library","UI","Components","Breadcrumbs","Crumb Entrance"],["Home","Account","Billing","Invoices","#INV-42318"],["Home","Docs","Framer Motion","Transitions","Stagger Children"]];function M(a){if(a.length<=5)return a.map(s=>({t:s,ellipsis:!1}));const t={t:a[0],ellipsis:!1},i=a.slice(-3).map(s=>({t:s,ellipsis:!1}));return[t,{t:"…",ellipsis:!0},...i]}function H({onClose:a,onSelect:t}){return e.jsxs(e.Fragment,{children:[e.jsx(l.Backdrop,{initial:{opacity:0},animate:{opacity:1,transition:{duration:.18}},exit:{opacity:0,transition:{duration:.16}},onClick:a}),e.jsx(l.Card,{initial:{opacity:0,scale:.98,y:6},animate:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:480,damping:36}},exit:{opacity:0,scale:.98,y:6,transition:{duration:.14}},children:e.jsxs("div",{className:"panel",role:"dialog","aria-modal":"true","aria-label":"Choose a path",children:[e.jsxs("header",{children:[e.jsx("h3",{children:"Choose a quick path"}),e.jsx("button",{className:"close",onClick:a,title:"Close",children:"✕"})]}),e.jsx("div",{className:"content",children:v.map((i,s)=>e.jsxs("div",{className:"preset",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:i[i.length-1]}),e.jsx("div",{className:"path",children:i.join(" › ")})]}),e.jsx("button",{className:"pick",onClick:()=>t(i),children:"Use"})]},s))})]})})]})}function q(){const[a,t]=h.useState(v[0]),[i,s]=h.useState(!1),[g,p]=h.useState(!1);h.useEffect(()=>{let r=requestAnimationFrame(()=>{let o=requestAnimationFrame(()=>s(!0));s._r2=o});return()=>{cancelAnimationFrame(r),cancelAnimationFrame(s._r2||0)}},[]);const x=h.useMemo(()=>M(a),[a]),m=r=>{var u;const o=[...a];if((u=x[r])!=null&&u.ellipsis)return p(!0);let n=r;if(a.length>5&&r>0){if(r===1)return p(!0);n=a.length-(x.length-r)}t(o.slice(0,n+1))},f=()=>t(r=>[...r,`Level ${r.length+1}`]),j=()=>t(r=>r.length>1?r.slice(0,-1):r);return e.jsx(w,{reducedMotion:"never",children:e.jsxs(l.Wrapper,{children:[e.jsxs(l.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Breadcrumb — Crumb-by-Crumb Entrance"}),e.jsx("p",{className:"muted",children:"Each crumb slides in with a gentle stagger. Active underline glides via shared layout."})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Breadcrumb controls",children:[e.jsx("button",{className:"btn ghost",onClick:j,disabled:a.length<=1,title:"Go up one",children:"Up one"}),e.jsx("button",{className:"btn",onClick:f,title:"Add a level",children:"Add level"}),e.jsx("span",{className:"sep"}),e.jsx("button",{className:"btn outline",onClick:()=>p(!0),title:"Choose a quick path",children:"Choose path"})]})]}),e.jsxs(l.Stage,{children:[e.jsx(k,{id:"bc",children:i&&e.jsx(c.nav,{className:"bc","aria-label":"Breadcrumb",initial:"hidden",animate:"show",variants:{show:{transition:{staggerChildren:.06,delayChildren:.02}}},children:x.map((r,o)=>{const n=o===x.length-1,u=r.t;return e.jsxs(c.span,{className:`crumb ${r.ellipsis?"ellipsis":""} ${n?"active":""}`,onClick:()=>m(o),role:"link",tabIndex:0,onKeyDown:b=>(b.key==="Enter"||b.key===" ")&&m(o),"aria-current":n?"page":void 0,variants:{hidden:{y:6,opacity:0,scale:.98},show:{y:0,opacity:1,scale:1,transition:{type:"spring",stiffness:520,damping:36,mass:.75}}},whileHover:r.ellipsis?{}:{y:-1},whileTap:r.ellipsis?{}:{scale:.98},children:[e.jsx("span",{className:"label",children:u}),n&&!r.ellipsis&&e.jsx(c.span,{layoutId:"bc-underline",className:"underline"}),!n&&e.jsx(c.span,{className:"sep",layout:!0,"aria-hidden":"true"})]},`${u}-${o}`)})},a.join(" > "))}),e.jsxs(l.Preview,{children:[e.jsx("h3",{children:"Current Path"}),e.jsx("p",{className:"path",children:a.join(" › ")})]})]}),e.jsx(y,{children:g&&e.jsx(H,{onClose:()=>p(!1),onSelect:r=>{t(r),p(!1)}})}),e.jsxs(l.Notes,{children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Staggered entrance, refresh-safe mount (double ",e.jsx("code",{children:"requestAnimationFrame"}),")."]}),e.jsxs("li",{children:["Underline uses shared ",e.jsx("code",{children:"layoutId"})," to glide between crumbs."]}),e.jsx("li",{children:"Long paths collapse; “…” opens a self-made modal for quick selection."})]})]})]})})}export{q as default};
