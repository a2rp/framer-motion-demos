import{d as o,r as s,j as e,A as b}from"./index-D8yAWZ_T.js";import{M as w,m as c}from"./proxy-DfzdIqFN.js";const p={Wrapper:o.div`
        display: grid;
        gap: var(--space-6);
        padding: var(--space-6);
        max-width: 980px;
        margin: 0 auto;
        color: var(--text);
    `,Header:o.header`
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
    `,TabsCard:o.div`
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
    `,PanelArea:o.section`
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
    `};o.div``;o.div``;const m=document.createElement("style");m.innerHTML=`
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
`;typeof document<"u"&&!document.getElementById("underline-glide-modal-style")&&(m.id="underline-glide-modal-style",document.head.appendChild(m));const N=[{id:"overview",label:"Overview"},{id:"design",label:"Design"},{id:"api",label:"API"},{id:"examples",label:"Examples"},{id:"changelog",label:"Changelog"},{id:"about",label:"About"}],A={overview:{title:"Underline Glide",body:"A shared layout underline that glides between tabs. The trick is a single motion.div with a stable layoutId rendered under the active tab.",bullets:["layoutId for underline","Keyboard accessible","Scrollable tab bar"]},design:{title:"Design Notes",body:"Use short labels, keep the underline thin (2–3px), and animate only transforms/opacity.",bullets:["Underline height: 2–3px","Ease: [0.22,1,0.36,1]","Short durations"]},api:{title:"API",body:"You usually just need value, onChange, and an array of { id, label }. Here we also expose keyboard handlers.",bullets:["value, onChange","Arrow keys, Home/End","aria-* roles"]},examples:{title:"Examples",body:"Place this on product pages, dashboards, or settings. The shared underline makes navigation feel snappy.",bullets:["Dashboards","Settings","Docs navigation"]},changelog:{title:"Changelog",body:"v1: Shared underline with layoutId. v1.1: Added modal, focus management, and scroll-into-view for the active tab.",bullets:["v1.0 core","v1.1 polish","v1.2 TBD"]},about:{title:"About",body:"This demo is theme-aware and uses your CSS tokens. It avoids first-paint flicker and respects reduced motion if you want it to.",bullets:["Theme tokens","No first-paint jank","A11y-first"]}};function x(r){try{r==null||r.focus({preventScroll:!0})}catch{}}function E(){const[r]=s.useState(N),[i,n]=s.useState(r[0].id),[v,f]=s.useState(!1),[y,u]=s.useState(!1),k=s.useRef(null),d=s.useRef({});s.useEffect(()=>{const a=requestAnimationFrame(()=>f(!0));return()=>cancelAnimationFrame(a)},[]),s.useEffect(()=>{const a=d.current[i];a==null||a.scrollIntoView({block:"nearest",inline:"center",behavior:"smooth"})},[i]);const g=s.useMemo(()=>r.findIndex(a=>a.id===i),[r,i]),j=a=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(a.key))return;a.preventDefault();const t=r.length-1;if(a.key==="Home"){n(r[0].id),x(d.current[r[0].id]);return}if(a.key==="End"){n(r[t].id),x(d.current[r[t].id]);return}const l=a.key==="ArrowRight"?Math.min(g+1,t):Math.max(g-1,0);n(r[l].id),x(d.current[r[l].id])},h=A[i];return e.jsx(w,{reducedMotion:"never",children:e.jsxs(p.Wrapper,{children:[e.jsxs(p.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Underline Glide"}),e.jsx("p",{className:"muted",children:"Shared layout underline that smoothly glides between tabs."})]}),e.jsx("div",{className:"actions",children:e.jsx("button",{className:"btn ghost",onClick:()=>u(!0),children:"Shortcuts & Tips"})})]}),e.jsxs(p.TabsCard,{children:[e.jsx("div",{className:"scrollMask left","aria-hidden":!0}),e.jsx("div",{className:"scrollMask right","aria-hidden":!0}),e.jsx("div",{className:"tablist",ref:k,role:"tablist","aria-label":"Underline Glide tabs",onKeyDown:j,children:r.map(a=>{const t=a.id===i;return e.jsxs("button",{ref:l=>d.current[a.id]=l,role:"tab","aria-selected":t,"aria-controls":`panel-${a.id}`,id:`tab-${a.id}`,className:`tab ${t?"active":""}`,onClick:()=>n(a.id),children:[e.jsx("span",{className:"label",children:a.label}),e.jsx(b,{initial:!1,children:v&&t&&e.jsx(c.span,{layoutId:"underline",className:"underline",transition:{type:"spring",stiffness:500,damping:40}})})]},a.id)})})]}),e.jsx(p.PanelArea,{children:e.jsx(b,{mode:"wait",initial:!1,children:e.jsxs(c.section,{id:`panel-${i}`,role:"tabpanel","aria-labelledby":`tab-${i}`,className:"panel",initial:{y:8,opacity:.75},animate:{y:0,opacity:1,transition:{duration:.28,ease:[.22,1,.36,1]}},exit:{y:-8,opacity:0,transition:{duration:.18,ease:"easeOut"}},children:[e.jsxs("header",{className:"pHead",children:[e.jsx("span",{className:"kicker",children:"Section"}),e.jsx("h2",{children:h.title})]}),e.jsx("p",{className:"body",children:h.body}),e.jsx("ul",{className:"bullets",children:h.bullets.map((a,t)=>e.jsx("li",{children:a},t))})]},i)})}),e.jsx(b,{children:y&&e.jsxs(e.Fragment,{children:[e.jsx(c.div,{className:"modalBackdrop",initial:{opacity:0},animate:{opacity:1,transition:{duration:.18}},exit:{opacity:0,transition:{duration:.16}},onClick:()=>u(!1),"aria-hidden":!0}),e.jsx(c.div,{role:"dialog","aria-modal":"true","aria-labelledby":"tips-title",className:"modal",initial:{y:18,opacity:.8,scale:.98},animate:{y:0,opacity:1,scale:1,transition:{type:"spring",stiffness:420,damping:34}},exit:{y:6,opacity:0,scale:.985,transition:{duration:.16}},children:e.jsxs("div",{className:"modalCard",children:[e.jsx("header",{className:"mHead",children:e.jsx("h3",{id:"tips-title",children:"Shortcuts & Tips"})}),e.jsx("div",{className:"mBody",children:e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("kbd",{children:"←"}),"/",e.jsx("kbd",{children:"→"})," to change tabs."]}),e.jsxs("li",{children:[e.jsx("kbd",{children:"Home"}),"/",e.jsx("kbd",{children:"End"})," to jump to first/last."]}),e.jsxs("li",{children:["The underline uses a shared ",e.jsx("code",{children:"layoutId"})," for a buttery glide."]})]})}),e.jsx("footer",{className:"mFoot",children:e.jsx("button",{className:"btn",onClick:()=>u(!1),children:"Got it"})})]})})]})})]})})}export{E as default};
