import{d as y,r as i,j as e,A as x}from"./index-D8c9fCIL.js";import{f as F,g as M,h as H,i as z,j as D,k as P,l as R}from"./index-fE857e_Y.js";import{M as K,m as s}from"./proxy-Cy2a_Fiw.js";const Y=y.div`
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
`,O=y.main`
    display: grid;
    align-content: start;
`,E={Shell:Y,Main:O};y.div``;const T=document.createElement("style");T.innerHTML=`
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
`;document.head.appendChild(T);const l=[{id:"home",label:"Home",icon:F,badge:null},{id:"browse",label:"Browse",icon:M,badge:"New"},{id:"projects",label:"Projects",icon:H,badge:12},{id:"saved",label:"Saved",icon:z,badge:null}],I="sideNav.collapsed",L="sideNav.active",_=260,$=72;function G(){const[c,o]=i.useState(()=>{try{return JSON.parse(localStorage.getItem(I)??"false")}catch{return!1}}),[n,u]=i.useState(()=>{try{const a=localStorage.getItem(L);return l.some(t=>t.id===a)?a:"home"}catch{return"home"}}),[b,p]=i.useState(!1),[A,m]=i.useState(!1),r=!c||b&&!A,[g,w]=i.useState({show:!1,x:0,y:0,label:""}),[k,j]=i.useState(!1);i.useEffect(()=>{try{localStorage.setItem(I,JSON.stringify(c))}catch{}},[c]),i.useEffect(()=>{try{localStorage.setItem(L,n)}catch{}},[n]);const N=i.useRef(null);i.useEffect(()=>{const a=t=>{var C;if((t.ctrlKey||t.metaKey)&&(t.key==="b"||t.key==="B")){t.preventDefault(),o(f=>!f),m(!0);return}if(!((C=N.current)!=null&&C.contains(document.activeElement)))return;const h=l.findIndex(f=>f.id===n);t.key==="ArrowDown"&&(t.preventDefault(),u(l[(h+1)%l.length].id)),t.key==="ArrowUp"&&(t.preventDefault(),u(l[(h-1+l.length)%l.length].id)),(t.key==="Enter"||t.key===" ")&&t.preventDefault()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[n]);const B=()=>{o(a=>!a),m(!0)},S=(a,t)=>{if(r)return;const d=t.getBoundingClientRect();w({show:!0,x:d.right+8,y:d.top+d.height/2,label:a})},v=()=>w(a=>({...a,show:!1}));return e.jsx(K,{reducedMotion:"never",children:e.jsxs(E.Shell,{style:{gridTemplateColumns:`${r?_:$}px 1fr`},children:[e.jsxs("aside",{className:`side ${r?"expanded":"collapsed"}`,onMouseEnter:()=>p(!0),onMouseLeave:()=>{p(!1),m(!1),v()},"aria-expanded":r,children:[e.jsxs("div",{className:"head",children:[e.jsxs(s.div,{className:"brand",layout:"position",children:[e.jsx("div",{className:"logo","aria-hidden":!0}),e.jsx(x,{initial:!1,mode:"wait",children:r&&e.jsx(s.span,{className:"brandText",initial:{opacity:0,x:-6},animate:{opacity:1,x:0},exit:{opacity:0,x:-6},transition:{duration:.18},children:"Motion Lab"},"brand-text")})]}),e.jsx("button",{className:"collapseBtn",onClick:B,"aria-label":r?"Collapse sidebar":"Expand sidebar",title:`${r?"Collapse":"Expand"} (Ctrl/Cmd+B)`,children:r?e.jsx(D,{}):e.jsx(P,{})})]}),e.jsx("nav",{className:"nav","aria-label":"Primary",children:e.jsx("ul",{ref:N,children:e.jsx(x,{initial:!1,children:l.map(a=>{const t=a.icon,d=n===a.id;return e.jsx("li",{children:e.jsxs("button",{className:`navItem ${d?"active":""}`,onClick:()=>u(a.id),onFocus:h=>S(a.label,h.currentTarget),onBlur:v,onMouseEnter:h=>S(a.label,h.currentTarget),onMouseLeave:v,"aria-current":d?"page":void 0,children:[d&&e.jsx(s.span,{layoutId:"nav-active",className:"activePill",transition:{type:"spring",stiffness:400,damping:36,mass:.6},"aria-hidden":"true"}),e.jsx("span",{className:"icon",children:e.jsx(t,{size:18})}),e.jsx(x,{initial:!1,mode:"popLayout",children:r&&e.jsx(s.span,{className:"label",initial:{opacity:0,x:-4},animate:{opacity:1,x:0},exit:{opacity:0,x:-4},transition:{duration:.16},children:a.label},"label")}),e.jsx(x,{initial:!1,mode:"popLayout",children:r&&a.badge!=null&&e.jsx(s.span,{className:"badge",initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.18},children:String(a.badge)},"badge")})]})},a.id)})})})}),e.jsx("div",{className:"foot",children:e.jsxs("button",{className:"settings",onClick:()=>j(!0),"aria-haspopup":"dialog","aria-expanded":k,children:[e.jsx("span",{className:"icon",children:e.jsx(R,{})}),e.jsx(x,{initial:!1,children:r&&e.jsx(s.span,{initial:{opacity:0,x:-4},animate:{opacity:1,x:0},exit:{opacity:0,x:-4},transition:{duration:.16},children:"Settings"},"settings-label")})]})})]}),e.jsxs(E.Main,{children:[e.jsxs("header",{className:"pageHead",children:[e.jsx("h1",{children:"Side-Nav Collapse"}),e.jsxs("p",{className:"muted",children:["Click chevron or press ",e.jsx("kbd",{children:"Ctrl/Cmd + B"}),". Grid track drives width, so the whole panel collapses."]})]}),e.jsx("section",{className:"content",children:e.jsx("p",{children:"Hover-peek works when collapsed; a click “locks” peek until the mouse leaves. Tooltips float so they aren’t clipped."})})]}),e.jsx(x,{children:!r&&g.show&&e.jsx(s.div,{className:"tooltipBase fixedTip",style:{top:g.y,left:g.x},initial:{opacity:0,x:6,scale:.98},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:6,scale:.98},transition:{duration:.16,ease:[.22,1,.36,1]},role:"tooltip",children:g.label})}),e.jsx(J,{open:k,onClose:()=>j(!1)})]})})}function J({open:c,onClose:o}){const n=i.useRef(null);return i.useEffect(()=>{if(!c)return;const u=p=>{p.key==="Escape"&&(o==null||o())};window.addEventListener("keydown",u);const b=requestAnimationFrame(()=>{var p;return(p=n.current)==null?void 0:p.focus()});return()=>{window.removeEventListener("keydown",u),cancelAnimationFrame(b)}},[c,o]),e.jsx(x,{children:c&&e.jsxs("div",{className:"modalRoot",role:"dialog","aria-modal":"true","aria-label":"Settings",children:[e.jsx(s.div,{className:"backdrop",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:o}),e.jsxs(s.div,{className:"dialog",initial:{opacity:0,y:16,scale:.98},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:8,scale:.98},transition:{type:"spring",stiffness:320,damping:30},children:[e.jsx("header",{className:"dHead",children:e.jsx("h3",{children:"Sidebar Settings"})}),e.jsxs("div",{className:"dBody",children:[e.jsxs("label",{className:"row",children:[e.jsx("input",{ref:n,type:"checkbox",defaultChecked:!0})," Reduce icon wobble"]}),e.jsxs("label",{className:"row",children:[e.jsx("input",{type:"checkbox",defaultChecked:!0})," Show badges"]}),e.jsxs("label",{className:"row",children:[e.jsx("input",{type:"checkbox"})," Compact density"]})]}),e.jsxs("footer",{className:"dFoot",children:[e.jsx("button",{className:"btn ghost",onClick:o,children:"Close"}),e.jsx("button",{className:"btn primary",onClick:o,children:"Save"})]})]})]})})}export{G as default};
