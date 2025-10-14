import{d as m,r as a,j as e,A as S}from"./index-GOg7KvvH.js";import{M as z,m as l}from"./proxy-DRUkQ78w.js";const H=m.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 960px;
    margin: 0 auto;
    color: var(--text);
`,R=m.header`
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

    .triggerBtn {
        position: relative;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        height: 36px;
        padding: 0 12px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        isolation: isolate;

        .chipSurface {
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background: linear-gradient(
                    0deg,
                    hsl(210 90% 56% / 0.1),
                    hsl(210 90% 56% / 0.08)
                ),
                var(--surface);
            border: 1px solid var(--border);
            z-index: 0;
        }
        .dots {
            position: relative;
            z-index: 1;
            display: inline-grid;
            place-items: center;
        }
    }

    .triggerBtn:hover {
        filter: brightness(1.02);
    }
`,E=m.section`
    display: grid;
    gap: var(--space-4);

    .card {
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        padding: var(--space-6);
        outline: none;
    }
    .card:focus {
        box-shadow: var(--focus-ring);
    }

    .cardHead {
        display: grid;
        gap: 4px;
        margin-bottom: var(--space-4);
    }
    .kicker {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 11px;
        color: var(--text-muted);
    }
    .body {
        color: var(--text);
    }
    .meta {
        margin-left: 18px;
        color: var(--text-muted);
        display: grid;
        gap: 4px;
    }

    .hint {
        color: var(--text-muted);
    }
`,F=`
  border-radius: var(--radius-lg);
  background: var(--card);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-md);
`,B=m.div`
    position: fixed;
    inset: 0;
    z-index: 30;
    pointer-events: none;

    .backdrop {
        position: absolute;
        inset: 0;
        background: black;
        pointer-events: auto;
    }

    .menuAnchor {
        position: absolute;
        pointer-events: none;
    }

    .menuSurface {
        ${F}
        position: relative;
        min-width: 240px;
        padding: 8px;
        pointer-events: auto;
        will-change: transform, opacity;
        contain: layout paint;
    }

    nav {
        display: grid;
        gap: 4px;
    }

    .menuItem {
        display: grid;
        grid-template-columns: 20px 1fr auto;
        align-items: center;
        gap: 10px;
        height: 36px;
        border-radius: var(--radius-sm);
        padding: 0 10px;
        background: transparent;
        color: var(--text);
        border: 1px solid transparent;
        cursor: pointer;
    }
    .menuItem:hover {
        background: var(--surface);
        border-color: var(--border);
    }
    .menuItem:focus-visible {
        outline: none;
        box-shadow: var(--focus-ring);
    }
    .menuItem.danger {
        color: hsl(6 90% 60%);
    }
    .menuItem.danger:hover {
        background: hsl(6 90% 60% / 0.12);
        border-color: hsl(6 90% 60% / 0.35);
    }

    .ico {
        display: inline-grid;
        place-items: center;
    }
    .kbd {
        color: var(--text-muted);
        font-size: 12px;
    }
`,p={Wrapper:H,Header:R,Stage:E,Overlay:B},L=n=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",...n,children:[e.jsx("circle",{cx:"5",cy:"12",r:"2",fill:"currentColor"}),e.jsx("circle",{cx:"12",cy:"12",r:"2",fill:"currentColor"}),e.jsx("circle",{cx:"19",cy:"12",r:"2",fill:"currentColor"})]}),V=n=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",...n,children:e.jsx("path",{fill:"currentColor",d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})}),D=n=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",...n,children:e.jsx("path",{fill:"currentColor",d:"M16 1H4a2 2 0 00-2 2v12h2V3h12V1zm3 4H8a2 2 0 00-2 2v14h13a2 2 0 002-2V7a2 2 0 00-2-2z"})}),q=n=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",...n,children:e.jsx("path",{fill:"currentColor",d:"M18 16a3 3 0 00-2.24 1.03L8.91 13.7a3.02 3.02 0 000-3.4l6.85-3.33A3 3 0 1015 5a3 3 0 001.24.26l-6.85 3.33a3 3 0 100 7l6.85 3.33A3 3 0 1018 16z"})}),O=n=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",...n,children:e.jsx("path",{fill:"currentColor",d:"M13 5l4 4h-3v6h-2V9H9l4-4zM4 19h16v2H4z"})}),W=n=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",...n,children:[e.jsx("path",{fill:"currentColor",d:"M6 7h12v14H6z",opacity:".4"}),e.jsx("path",{fill:"currentColor",d:"M8 7V5h8v2h5v2H3V7h5z"})]}),f=[{id:"rename",label:"Rename",icon:V},{id:"duplicate",label:"Duplicate",icon:D},{id:"share",label:"Share…",icon:q},{id:"move",label:"Move to…",icon:O},{id:"delete",label:"Delete",icon:W,danger:!0}];function _(n,o,d,c,i=8){const x=window.innerWidth,g=window.innerHeight,u=Math.min(Math.max(i,n),Math.max(i,x-d-i)),h=Math.min(Math.max(i,o),Math.max(i,g-c-i));return{x:u,y:h}}function $(){const[n,o]=a.useState(!1),[d,c]=a.useState(!1),[i,x]=a.useState({x:0,y:0}),[g,u]=a.useState("Right-click the card or use the ⋯ button."),h=a.useRef(null),b=a.useRef(null),v=a.useRef(null);a.useLayoutEffect(()=>{let r=requestAnimationFrame(()=>{let t=requestAnimationFrame(()=>c(!0));c._r2=t});return()=>{cancelAnimationFrame(r),cancelAnimationFrame(c._r2||0)}},[]),a.useEffect(()=>{if(!n)return;const r=s=>s.key==="Escape"&&o(!1),t=s=>{v.current&&(v.current.contains(s.target)||o(!1))};return window.addEventListener("keydown",r),window.addEventListener("mousedown",t),()=>{window.removeEventListener("keydown",r),window.removeEventListener("mousedown",t)}},[n]),a.useEffect(()=>{if(n){const r=requestAnimationFrame(()=>{var t;return(t=b.current)==null?void 0:t.focus()});return()=>cancelAnimationFrame(r)}},[n]);function y(r,t){const M=44*f.length+16,{x:C,y:A}=_(r,t,240,M,12);let N=requestAnimationFrame(()=>{let I=requestAnimationFrame(()=>{x({x:C,y:A}),o(!0)});o._r2=I});return()=>{cancelAnimationFrame(N),cancelAnimationFrame(o._r2||0)}}const j=()=>{var t;const r=(t=h.current)==null?void 0:t.getBoundingClientRect();r&&y(r.left+r.width,r.top+r.height)},w=r=>{r.preventDefault(),y(r.clientX,r.clientY),u("Nice. You can also use the ⋯ button.")},k=r=>{var t;o(!1),u(`Action: ${(t=f.find(s=>s.id===r))==null?void 0:t.label}`)};return e.jsx(z,{reducedMotion:"never",children:e.jsxs(p.Wrapper,{children:[e.jsxs(p.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Context Menu Morph"}),e.jsxs("p",{className:"muted",children:["A tiny trigger “chip” morphs into a full menu via ",e.jsx("code",{children:"layoutId"}),". Right-click the card or use the button."]})]}),e.jsxs("button",{ref:h,className:"triggerBtn",onClick:j,"aria-haspopup":"menu","aria-expanded":n,title:"Open menu",children:[d&&e.jsx(l.span,{layoutId:"cm-bubble",className:"chipSurface"}),e.jsx("span",{className:"dots",children:e.jsx(L,{})})]})]}),e.jsxs(p.Stage,{children:[e.jsxs("div",{className:"card",onContextMenu:w,tabIndex:0,"aria-label":"Demo card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx("h3",{children:"Project Spec"}),e.jsx("p",{className:"kicker",children:"Right-click anywhere on this card"})]}),e.jsx("p",{className:"body",children:"Context menus shine for quick actions in dense UIs. Morphing the trigger into the menu gives a sense of continuity and place."}),e.jsxs("ul",{className:"meta",children:[e.jsx("li",{children:"Lightweight • No portal needed"}),e.jsx("li",{children:"Escape to close • Click outside to dismiss"}),e.jsx("li",{children:"Keyboard friendly • Arrow/Tab to navigate"})]})]}),e.jsx("p",{className:"hint",children:g})]}),e.jsx(S,{children:n&&d&&e.jsxs(p.Overlay,{as:l.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsx(l.div,{className:"backdrop",initial:{opacity:0},animate:{opacity:.06},exit:{opacity:0},transition:{duration:.18},"aria-hidden":"true"}),e.jsx("div",{className:"menuAnchor",style:{left:i.x,top:i.y},children:e.jsx(l.div,{layoutId:"cm-bubble",className:"menuSurface",ref:v,initial:!1,children:e.jsx("nav",{"aria-label":"Context menu",children:f.map((r,t)=>{const s=r.icon;return e.jsxs(l.button,{ref:t===0?b:void 0,className:`menuItem ${r.danger?"danger":""}`,role:"menuitem",onClick:()=>k(r.id),initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0,y:6},transition:{duration:.18,delay:.04+t*.03},children:[e.jsx("span",{className:"ico",children:e.jsx(s,{})}),e.jsx("span",{className:"label",children:r.label}),e.jsx("span",{className:"kbd",children:r.id==="delete"?"⌫":r.id==="rename"?"F2":""})]},r.id)})})})})]})})]})})}export{$ as default};
