import{d as o,r as i,j as e,A as f}from"./index-h8mEPUVo.js";import{M as v,m as h}from"./proxy-CL9OJ6vV.js";import{u as y}from"./use-motion-value-uHKQsk9s.js";import{u as x}from"./use-transform-ppc8qlrc.js";import{a as g}from"./index-E29FAJB7.js";const w=o.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);

    /* 🔧 Container width */
    max-width: 1440px; /* was 1000px */
    width: 100%;
    margin: 0 auto;

    color: var(--text);
`,j=o.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-4);

    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }

    .openBtn {
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
`,k=o.section`
    .body {
        color: var(--text-muted);
    }
`,C=o.div`
    position: fixed;
    inset: 0;
    z-index: 40;
    background: hsl(0 0% 0% / 0.5);
    pointer-events: auto;
    will-change: opacity;
`,S=o.div`
    position: fixed;
    inset: 0;
    z-index: 41;
    backdrop-filter: blur(8px);
    pointer-events: none;
    will-change: opacity, backdrop-filter;
`,E=o.section`
    position: fixed;
    inset: auto 0 0 0;
    z-index: 50;
    background: var(--card);
    color: var(--text);
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    max-height: min(78vh, 640px);
    contain: layout paint style;
    display: grid;
    grid-template-rows: auto minmax(0, 1fr) auto auto; /* header | content | footer | safe */
    will-change: transform, box-shadow, border-radius;
`,B=o.header`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: var(--space-4);
    padding: 14px 16px 8px 16px;
    border-bottom: 1px solid var(--border);

    .rb-handle {
        grid-column: 1 / -1;
        justify-self: center;
        width: 44px;
        height: 5px;
        border-radius: 999px;
        background: var(--border);
        margin-bottom: 8px;
        backface-visibility: hidden;
    }

    .rb-titleWrap {
        display: grid;
        gap: 4px;
    }
    h2 {
        font-size: 18px;
        line-height: 1.2;
    }
    .muted {
        color: var(--text-muted);
        font-size: 12px;
    }

    .rb-close {
        height: 32px;
        width: 36px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
`,N=o.div`
    overflow: auto;
    padding: 8px 8px;
`,R=o.ul`
    list-style: none;
    margin: 0;
    padding: 0 8px 8px 8px;
    display: grid;
    gap: 6px;

    .rb-item {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--surface);
        color: var(--text);
        transition: transform 120ms ease, box-shadow 120ms ease,
            background 120ms ease;
    }
    .rb-item:hover {
        transform: translateY(-1px);
        box-shadow: var(--shadow-sm);
    }
    .rb-item .title {
        font-weight: 600;
        letter-spacing: 0.2px;
    }
    .rb-item .meta {
        color: var(--text-muted);
        font-size: 12px;
    }
`,A=o.footer`
    display: flex;
    gap: var(--space-4);
    justify-content: flex-end;
    padding: 10px 16px;
    border-top: 1px solid var(--border);

    .rb-action {
        height: 34px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .rb-action.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .rb-action.ghost {
        background: var(--card);
    }
`,D=o.div`
    height: max(env(safe-area-inset-bottom, 0px), 10px);
`,a={Wrapper:w,Header:j,Stage:k,Backdrop:C,BackdropFilter:S,Sheet:E,HeaderBar:B,Content:N,List:R,Footer:A,SafePad:D},L=140,O=700;function P(){const[b,l]=i.useState(!1),[r,c]=i.useState(!1),p=i.useRef(null),u=i.useRef(null);return i.useEffect(()=>{if(!r)return;const d=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=d}},[r]),i.useEffect(()=>{let d=requestAnimationFrame(()=>{let t=requestAnimationFrame(()=>{l(!0),c(!0)});l._r2=t});return()=>{cancelAnimationFrame(d),cancelAnimationFrame(l._r2||0)}},[]),i.useEffect(()=>{const d=requestAnimationFrame(()=>{var t,m;(m=(t=r?u.current:p.current)==null?void 0:t.focus)==null||m.call(t)});return()=>cancelAnimationFrame(d)},[r]),e.jsx(v,{reducedMotion:"never",children:e.jsxs(a.Wrapper,{children:[e.jsxs(a.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Bottom Sheet - Rubber-Band"}),e.jsx("p",{className:"muted",children:"Drag down to dismiss. Overscroll stretches elastically, then snaps."})]}),e.jsx("button",{className:"openBtn",ref:p,onClick:()=>c(!0),title:"Open bottom sheet",children:"Open Sheet"})]}),e.jsx(a.Stage,{children:e.jsx("p",{className:"body",children:"Premium, theme-aware sheet with rubber-band dragging, ESC/backdrop to close, focus management, and body scroll lock."})}),e.jsx(f,{children:b&&r&&e.jsx(F,{onRequestClose:()=>c(!1),closeBtnRef:u})})]})})}function F({onRequestClose:b,closeBtnRef:l}){const r=y(0),c=x(r,[0,120],["var(--radius-lg)","28px"]),p=x(r,[0,140],["var(--shadow-md)","0 4px 18px hsl(0 0% 0% / 0.20)"]),u=x(r,[0,200],["blur(8px)","blur(2px)"]),d=x(r,[0,120],[1,.92]);i.useEffect(()=>{const s=Math.max(window.innerHeight*.6,480);return r.set(s),g(r,0,{type:"spring",stiffness:360,damping:34,mass:.9}).stop},[]);const t=()=>{const s=Math.max(window.innerHeight*.6,480);g(r,s,{type:"spring",stiffness:260,damping:30,onComplete:b})};i.useEffect(()=>{const s=n=>{n.key==="Escape"&&(n.preventDefault(),t())};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[]);const m=(s,n)=>{n.offset.y>L||n.velocity.y>O?t():g(r,0,{type:"spring",stiffness:420,damping:36})};return e.jsxs(e.Fragment,{children:[e.jsx(a.Backdrop,{as:h.div,initial:{opacity:0},animate:{opacity:1,transition:{duration:.22}},exit:{opacity:0,transition:{duration:.18}},onClick:t,"aria-hidden":"true"}),e.jsx(a.BackdropFilter,{as:h.div,style:{backdropFilter:u},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},"aria-hidden":"true"}),e.jsxs(a.Sheet,{as:h.section,role:"dialog","aria-modal":"true","aria-labelledby":"rb-title",style:{y:r,borderTopLeftRadius:c,borderTopRightRadius:c,boxShadow:p},drag:"y",dragConstraints:{top:0,bottom:0},dragElastic:{top:.08,bottom:.9},onDragEnd:m,children:[e.jsxs(a.HeaderBar,{children:[e.jsx(h.div,{className:"rb-handle",style:{scaleX:d},"aria-hidden":"true"}),e.jsxs("div",{className:"rb-titleWrap",children:[e.jsx("h2",{id:"rb-title",children:"Choose Destination"}),e.jsx("p",{className:"muted",children:"Drag down or tap backdrop to close"})]}),e.jsx("button",{ref:l,className:"rb-close",onClick:t,"aria-label":"Close",title:"Close",children:"✕"})]}),e.jsx(a.Content,{tabIndex:0,children:e.jsx(a.List,{children:["Bengaluru (BLR)","Hyderabad (HYD)","Pune (PNQ)","Delhi (DEL)","Mumbai (BOM)","Chennai (MAA)","Kolkata (CCU)","Ahmedabad (AMD)","Jaipur (JAI)","Kochi (COK)","Goa (GOX)","Lucknow (LKO)","Indore (IDR)","Chandigarh (IXC)","Nagpur (NAG)"].map((s,n)=>e.jsxs("li",{className:"rb-item",children:[e.jsx("div",{className:"title",children:s}),e.jsx("div",{className:"meta",children:"Tap to select"})]},n))})}),e.jsxs(a.Footer,{children:[e.jsx("button",{className:"rb-action primary",onClick:t,children:"Done"}),e.jsx("button",{className:"rb-action ghost",onClick:t,children:"Cancel"})]}),e.jsx(a.SafePad,{"aria-hidden":!0})]})]})}export{P as default};
