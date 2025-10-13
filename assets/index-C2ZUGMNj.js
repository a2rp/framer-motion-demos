import{d as j,g as P,r as l,j as e,A as F}from"./index-h_xcPptR.js";import{m as w,M as K}from"./proxy-BBnnFU2D.js";const I=j.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);
`,L=j.header`
    display: flex;
    flex-wrap: wrap;
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

    .kbd {
        font: 12px/1.2 ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
        padding: 2px 6px;
        border: 1px solid var(--border);
        border-bottom-width: 2px;
        border-radius: 6px;
        background: var(--surface);
        color: var(--text);
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
`,B=j.section`
    .preview {
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: radial-gradient(
                600px 140px at 10% -20%,
                hsl(210 90% 56% / 0.12),
                transparent 60%
            ),
            var(--card);
        box-shadow: var(--shadow-md);
        min-height: 180px;
        display: grid;
        place-items: center;
        color: var(--text-muted);
    }
    .hint {
        border: 1px dashed var(--border);
        padding: 4px 10px;
        border-radius: 999px;
    }
`,H=j(w.div).attrs({className:"cp-backdrop"})`
    position: fixed;
    inset: 0;
    z-index: 1000;
    background: hsl(220 14% 10% / 0.35);
    backdrop-filter: blur(8px) saturate(120%);
    -webkit-backdrop-filter: blur(8px) saturate(120%);
`,T=j(w.div).attrs({className:"cp-dialog"})`
    position: fixed;
    inset: 0;
    z-index: 1010;
    display: grid;
    place-items: start center;
    padding-top: 10vh;

    .cp-card {
        width: min(720px, calc(100vw - 32px));
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: 0 30px 80px hsl(220 14% 5% / 0.45), var(--shadow-md);
        overflow: hidden;
    }

    .cp-search {
        display: grid;
        grid-template-columns: 24px 1fr auto;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border-bottom: 1px solid var(--border);
        background: linear-gradient(0deg, var(--card), var(--surface));
    }
    .cp-search .icon {
        width: 16px;
        height: 16px;
        color: var(--text-muted);
    }
    .cp-search input {
        height: 34px;
        border: none;
        outline: none;
        background: transparent;
        color: var(--text);
        font-size: 14px;
    }
    .kbdWrap .kbd {
        font: 12px/1.2 ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
        padding: 2px 6px;
        border: 1px solid var(--border);
        border-bottom-width: 2px;
        border-radius: 6px;
        background: var(--surface);
        color: var(--text-muted);
    }

    .cp-results {
        max-height: min(56vh, 520px);
        overflow: auto;
        padding: 6px 6px 10px;
        scroll-behavior: smooth;
    }
    .group {
        padding-top: 10px;
    }
    .groupLabel {
        position: sticky;
        top: 0;
        z-index: 1;
        font-size: 12px;
        color: var(--text-muted);
        background: linear-gradient(180deg, var(--card), rgba(0, 0, 0, 0));
        padding: 6px 10px;
        border-bottom: 1px dashed var(--border);
        backdrop-filter: blur(2px);
    }
    .items {
        list-style: none;
        margin: 0;
        padding: 6px;
        display: grid;
        gap: 6px;
    }

    .item {
        position: relative;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 10px;
        align-items: center;
        padding: 10px 12px;
        border: 1px solid transparent;
        border-radius: var(--radius-md);
        background: var(--surface);
        color: var(--text);
        cursor: pointer;
        overflow: hidden;
    }
    .item:hover {
        border-color: var(--border);
    }

    .item .highlight {
        position: absolute;
        inset: 0;
        border-radius: var(--radius-md);
        background: linear-gradient(
                0deg,
                hsl(210 90% 56% / 0.1),
                hsl(210 90% 56% / 0.05)
            ),
            var(--surface);
        border: 1px solid hsl(210 90% 56% / 0.35);
        box-shadow: 0 8px 24px hsl(0 0% 0% / 0.18);
        z-index: 0;
    }
    .item .meta {
        position: relative;
        z-index: 1;
    }
    .item .title {
        font-weight: 600;
    }
    .item .sub {
        font-size: 12px;
        color: var(--text-muted);
    }

    .shortcut {
        display: flex;
        gap: 6px;
        position: relative;
        z-index: 1;
    }
    .kbd {
        font: 12px/1.2 ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
        padding: 2px 6px;
        border: 1px solid var(--border);
        border-bottom-width: 2px;
        border-radius: 6px;
        background: var(--surface);
        color: var(--text);
        white-space: nowrap;
    }

    .empty {
        color: var(--text-muted);
        padding: 18px 16px 28px;
    }

    .cp-foot {
        border-top: 1px solid var(--border);
        background: var(--card);
        padding: 8px 12px;
    }
    .cp-foot .row {
        display: flex;
        gap: 18px;
        flex-wrap: wrap;
        color: var(--text-muted);
        font-size: 12px;
    }

    mark {
        background: hsl(51 100% 50% / 0.2);
        color: inherit;
        padding: 0 2px;
        border-radius: 3px;
    }

    @media (width < 560px) {
        padding-top: 6vh;
        .cp-results {
            max-height: 56vh;
        }
    }
`,y={Wrapper:I,Header:L,Stage:B,Backdrop:H,Dialog:T},O=[{id:"home",group:"Quick links",title:"Go to Home",subtitle:"Project landing",path:"/home",shortcut:["G","H"]},{id:"about",group:"Quick links",title:"Open About",subtitle:"Author & project notes",path:"/about",shortcut:["G","A"]},{id:"curtain",group:"Animations",title:"Curtain Reveal",subtitle:"Wipe overlay (transform/clip-path)",path:"/curtain-reveal"},{id:"book",group:"Animations",title:"Book-flip",subtitle:"Perspective rotateY",path:"/book-flip"},{id:"stack",group:"Animations",title:"Slide-over Stack",subtitle:"New page pushes previous",path:"/slide-over-stack"},{id:"para",group:"Animations",title:"Parallax Push",subtitle:"Foreground slides, bg drifts",path:"/parallax-push"},{id:"masonry",group:"Animations",title:"Masonry Shuffle",subtitle:"Variable-height grid reflow",path:"/masonry-shuffle"},{id:"copy",group:"Feedback",title:"Copy Flash",subtitle:"Row flash + pulse + check",path:"/copy-confirmation-flash"},{id:"theme",group:"Actions",title:"Toggle Theme",subtitle:"Light ↔ Dark",action:"toggleTheme",shortcut:["T"]}],N=(i="")=>i.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,""),W=(i,p)=>{if(!p)return 1;const s=N(`${i.title} ${i.subtitle} ${i.group}`),d=N(p);return s.startsWith(d)?20:s.includes(d)?10:d.split(/\s+/).filter(Boolean).every(a=>s.includes(a))?5:-1},$=(i,p)=>{const s=i.map(o=>({c:o,s:W(o,p)})).filter(o=>o.s>=0).sort((o,a)=>a.s-o.s||o.c.title.localeCompare(a.c.title)).map(o=>o.c),d=[];for(const o of s){let a=d.find(x=>x.group===o.group);a||(a={group:o.group,items:[]},d.push(a)),a.items.push(o)}return d};function A(i,p){if(!p)return[{t:i,m:!1}];const s=i,d=N(s),o=N(p),a=d.indexOf(o);if(a<0)return[{t:i,m:!1}];const x=s.slice(0,a),u=s.slice(a,a+p.length),b=s.slice(a+p.length);return[...x?[{t:x,m:!1}]:[],...u?[{t:u,m:!0}]:[],...b?A(b,""):[]]}function V(){var E;const i=P(),p=l.useId(),s=l.useRef(null),d=l.useRef(null),o=l.useRef(null),[a,x]=l.useState(!1),[u,b]=l.useState(""),[f,h]=l.useState(0),C=()=>{o.current=document.activeElement,x(!0),b(""),h(0)},v=()=>{x(!1),requestAnimationFrame(()=>{var t,r;return(r=(t=o.current)==null?void 0:t.focus)==null?void 0:r.call(t)})};l.useEffect(()=>{if(!a)return;const t=document.documentElement.style.overflow;document.documentElement.style.overflow="hidden";const r=requestAnimationFrame(()=>{var n;return(n=s.current)==null?void 0:n.focus()});return()=>{cancelAnimationFrame(r),document.documentElement.style.overflow=t}},[a]),l.useEffect(()=>{const t=r=>{if((r.metaKey||r.ctrlKey)&&(r.key==="k"||r.key==="K")){r.preventDefault(),a?v():C();return}if(r.key==="/"&&!a){r.preventDefault(),C();return}r.key==="Escape"&&a&&(r.preventDefault(),v())};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[a]);const M=l.useMemo(()=>$(O,u),[u]),m=l.useMemo(()=>M.flatMap(t=>t.items),[M]);l.useEffect(()=>h(0),[u]),l.useEffect(()=>{var S;const t=d.current,r=(S=m[f])==null?void 0:S.id;if(!t||!r)return;const n=t.querySelector(`[data-id="${r}"]`);if(!n)return;const{top:k,bottom:c}=t.getBoundingClientRect(),{top:g,bottom:R}=n.getBoundingClientRect();g<k?n.scrollIntoView({block:"nearest"}):R>c&&n.scrollIntoView({block:"nearest"})},[f,m]);const D=t=>{if(t.action==="toggleTheme"){const n=document.documentElement.classList.toggle("light")?"light":"dark";try{localStorage.setItem("prefers-theme",n)}catch{}v();return}t.path&&(i(t.path),v())},z=t=>{if(a){if(t.key==="ArrowDown")t.preventDefault(),h(r=>Math.min(r+1,m.length-1));else if(t.key==="ArrowUp")t.preventDefault(),h(r=>Math.max(r-1,0));else if(t.key==="PageDown")t.preventDefault(),h(r=>Math.min(r+6,m.length-1));else if(t.key==="PageUp")t.preventDefault(),h(r=>Math.max(r-6,0));else if(t.key==="Home")t.preventDefault(),h(0);else if(t.key==="End")t.preventDefault(),h(m.length-1);else if(t.key==="Enter"){t.preventDefault();const r=m[f];r&&D(r)}}};return e.jsx(K,{reducedMotion:"never",children:e.jsxs(y.Wrapper,{children:[e.jsxs(y.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Command Palette — Zoom-in"}),e.jsxs("p",{className:"muted",children:["Press ",e.jsx("kbd",{className:"kbd",children:"Ctrl"}),"/",e.jsx("kbd",{className:"kbd",children:"⌘"}),"+",e.jsx("kbd",{className:"kbd",children:"K"})," or ",e.jsx("kbd",{className:"kbd",children:"/"})," to open. Type to filter."]})]}),e.jsx("button",{className:"openBtn",onClick:C,title:"Open palette (Ctrl/Cmd+K)",children:"Open Palette"})]}),e.jsx(y.Stage,{children:e.jsx("div",{className:"preview",children:e.jsx("span",{className:"hint",children:"Keyboard first. This palette is fast."})})}),e.jsx(F,{children:a&&e.jsxs(e.Fragment,{children:[e.jsx(y.Backdrop,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:v,"aria-hidden":!0},"bk"),e.jsx(y.Dialog,{role:"dialog","aria-modal":"true","aria-labelledby":p,initial:{opacity:0,scale:.96,y:-8},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.98,y:-4},transition:{type:"spring",stiffness:420,damping:34,mass:.7},onKeyDown:z,onClick:t=>t.stopPropagation(),children:e.jsxs("div",{className:"cp-card",children:[e.jsxs("div",{className:"cp-search",children:[e.jsx("svg",{className:"icon",viewBox:"0 0 24 24","aria-hidden":!0,children:e.jsx("path",{fill:"currentColor",d:"M15.5 14h-.79l-.28-.27A6 6 0 1016 10a6 6 0 00-1.07 3.42l.27.28v.79l5 5 1.5-1.5-5-5zM10 14a4 4 0 110-8 4 4 0 010 8z"})}),e.jsx("input",{ref:s,type:"text",placeholder:"Search commands…",value:u,onChange:t=>b(t.target.value),"aria-autocomplete":"list","aria-controls":"cp-list","aria-activedescendant":((E=m[f])==null?void 0:E.id)||""}),e.jsx("div",{className:"kbdWrap",children:e.jsx("span",{className:"kbd",children:"Esc"})})]}),e.jsxs("div",{className:"cp-results",id:"cp-list",role:"listbox",ref:d,children:[m.length===0&&e.jsx("div",{className:"empty",children:"No results. Try “curtain”, “stack”, or “theme”."}),M.map(t=>e.jsxs("div",{className:"group",children:[e.jsx("div",{className:"groupLabel",children:t.group}),e.jsx(w.ul,{className:"items",initial:"hidden",animate:"show",variants:{hidden:{},show:{transition:{staggerChildren:.035,delayChildren:.02}}},children:t.items.map(r=>{const n=m.indexOf(r),k=n===f;return e.jsxs(w.li,{role:"option","aria-selected":k,"data-id":r.id,className:`item ${k?"active":""}`,onMouseMove:()=>h(n),onClick:()=>D(r),tabIndex:-1,variants:{hidden:{opacity:0,y:4},show:{opacity:1,y:0,transition:{duration:.18}}},children:[k&&e.jsx(w.div,{layoutId:"cpHighlight",className:"highlight"}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"title",children:A(r.title,u).map((c,g)=>c.m?e.jsx("mark",{children:c.t},g):e.jsx("span",{children:c.t},g))}),e.jsx("div",{className:"sub",children:A(r.subtitle,u).map((c,g)=>c.m?e.jsx("mark",{children:c.t},g):e.jsx("span",{children:c.t},g))})]}),r.shortcut&&e.jsx("div",{className:"shortcut",children:r.shortcut.map(c=>e.jsx("span",{className:"kbd",children:c},c))})]},r.id)})})]},t.group))]}),e.jsx("div",{className:"cp-foot",children:e.jsxs("div",{className:"row",children:[e.jsxs("span",{children:[e.jsx("b",{children:"↑/↓"})," Move"]}),e.jsxs("span",{children:[e.jsx("b",{children:"Enter"})," Run"]}),e.jsxs("span",{children:[e.jsx("b",{children:"Esc"})," Close"]})]})})]})},"dlg")]})})]})})}export{V as default};
