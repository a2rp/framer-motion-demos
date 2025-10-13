import{d as g,g as C,r as s,j as e,A as M}from"./index-Cw4uPab2.js";import{M as A,m as x}from"./proxy-Bw5QJHtJ.js";const z=g.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);
`,S=g.header`
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
`,E=g.section`
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
`;g.div.attrs({className:"cp-backdrop"})`
    position: fixed;
    inset: 0;
    z-index: 60;
    background: hsl(220 14% 10% / 0.35);
    backdrop-filter: blur(6px);
`;g.div.attrs({className:"cp-dialog"})`
    position: fixed;
    inset: 0;
    z-index: 70;
    display: grid;
    place-items: start center;
    padding-top: 10vh; /* headroom for zoom-in */

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

    /* Card shell */
    & {
        max-height: 100dvh;
    }
    & > * {
        width: min(720px, calc(100vw - 32px));
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: 0 30px 80px hsl(220 14% 5% / 0.45), var(--shadow-md);
        overflow: hidden;
    }

    .cp-results {
        max-height: min(56vh, 520px);
        overflow: auto;
        scroll-behavior: smooth;
        padding: 6px 6px 10px;
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
        background: linear-gradient(
            180deg,
            var(--card),
            color-mix(in oklab, var(--card) 80%, transparent)
        );
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
                hsl(210 90% 56% / 0.12),
                hsl(210 90% 56% / 0.06)
            ),
            color-mix(in oklab, var(--surface) 90%, transparent);
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

    @media (width < 560px) {
        padding-top: 6vh;
    }
`;const f={Wrapper:z,Header:S,Stage:E},D=[{id:"home",group:"Quick links",title:"Go to Home",subtitle:"Project landing",path:"/home",shortcut:["G","H"]},{id:"about",group:"Quick links",title:"Open About",subtitle:"Author & project notes",path:"/about",shortcut:["G","A"]},{id:"curtain",group:"Animations",title:"Curtain Reveal",subtitle:"Wipe overlay (transform/clip-path)",path:"/curtain-reveal"},{id:"book",group:"Animations",title:"Book-flip",subtitle:"Perspective rotateY",path:"/book-flip"},{id:"stack",group:"Animations",title:"Slide-over Stack",subtitle:"New page pushes previous",path:"/slide-over-stack"},{id:"para",group:"Animations",title:"Parallax Push",subtitle:"Foreground slides, bg drifts",path:"/parallax-push"},{id:"masonry",group:"Animations",title:"Masonry Shuffle",subtitle:"Variable-height grid reflow",path:"/masonry-shuffle"},{id:"copy",group:"Feedback",title:"Copy Flash",subtitle:"Row flash + pulse + check",path:"/copy-confirmation-flash"},{id:"theme",group:"Actions",title:"Toggle Theme",subtitle:"Light ↔ Dark",action:"toggleTheme",shortcut:["T"]}];function j(n=""){return n.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,"")}function K(n,p){if(!p)return 1;const d=j(`${n.title} ${n.subtitle} ${n.group}`),o=j(p);return d.startsWith(o)?20:d.includes(o)?10:o.split(/\s+/).filter(Boolean).every(c=>d.includes(c))?5:-1}function L(n,p){const d=n.map(r=>({c:r,s:K(r,p)})).filter(r=>r.s>=0).sort((r,i)=>i.s-r.s||r.c.title.localeCompare(i.c.title)).map(r=>r.c),o=[];for(const r of d){let i=o.find(c=>c.group===r.group);i||(i={group:r.group,items:[]},o.push(i)),i.items.push(r)}return o}function P(){var y;const n=C(),p=s.useId(),d=s.useRef(null),[o,r]=s.useState(!1),[i,c]=s.useState(""),[b,l]=s.useState(0);s.useEffect(()=>{if(!o)return;const t=document.body.style.overflow;document.body.style.overflow="hidden";const a=requestAnimationFrame(()=>{var h;return(h=d.current)==null?void 0:h.focus()});return()=>{cancelAnimationFrame(a),document.body.style.overflow=t}},[o]),s.useEffect(()=>{const t=a=>{if((a.metaKey||a.ctrlKey)&&(a.key==="k"||a.key==="K")){a.preventDefault(),r(m=>!m),c(""),l(0);return}a.key==="Escape"&&o&&(a.preventDefault(),r(!1))};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[o]);const v=s.useMemo(()=>L(D,i),[i]),u=s.useMemo(()=>v.flatMap(t=>t.items),[v]);s.useEffect(()=>{l(0)},[i]);const k=t=>{if(t.action==="toggleTheme"){document.documentElement.classList.toggle("light"),localStorage.setItem("prefers-theme",document.documentElement.classList.contains("light")?"light":"dark"),r(!1);return}t.path&&(n(t.path),r(!1))},N=t=>{if(o){if(t.key==="ArrowDown")t.preventDefault(),l(a=>Math.min(a+1,u.length-1));else if(t.key==="ArrowUp")t.preventDefault(),l(a=>Math.max(a-1,0));else if(t.key==="Home")t.preventDefault(),l(0);else if(t.key==="End")t.preventDefault(),l(u.length-1);else if(t.key==="Enter"){t.preventDefault();const a=u[b];a&&k(a)}}};return e.jsx(A,{reducedMotion:"never",children:e.jsxs(f.Wrapper,{children:[e.jsxs(f.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Command Palette — Zoom-in"}),e.jsxs("p",{className:"muted",children:["Press ",e.jsx("kbd",{className:"kbd",children:"Ctrl"}),"/",e.jsx("kbd",{className:"kbd",children:"⌘"}),"+",e.jsx("kbd",{className:"kbd",children:"K"})," to open. Type to filter, ",e.jsx("kbd",{className:"kbd",children:"↑"}),"/",e.jsx("kbd",{className:"kbd",children:"↓"})," to move, ",e.jsx("kbd",{className:"kbd",children:"Enter"})," to run."]})]}),e.jsx("button",{className:"openBtn",onClick:()=>r(!0),title:"Open palette (Ctrl/Cmd+K)",children:"Open Palette"})]}),e.jsx(f.Stage,{children:e.jsx("div",{className:"preview",children:e.jsx("span",{className:"hint",children:"Try the keyboard: Ctrl/Cmd+K"})})}),e.jsx(M,{children:o&&e.jsxs(e.Fragment,{children:[e.jsx(x.div,{className:"cp-backdrop",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.18},onClick:()=>r(!1),"aria-hidden":!0}),e.jsxs(x.div,{role:"dialog","aria-modal":"true","aria-labelledby":p,className:"cp-dialog",initial:{opacity:0,scale:.96,y:-8},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.98,y:-4},transition:{type:"spring",stiffness:400,damping:34,mass:.7},onKeyDown:N,children:[e.jsxs("div",{className:"cp-search",children:[e.jsx("svg",{className:"icon",viewBox:"0 0 24 24","aria-hidden":!0,children:e.jsx("path",{fill:"currentColor",d:"M15.5 14h-.79l-.28-.27A6 6 0 1016 10a6 6 0 00-1.07 3.42l.27.28v.79l5 5 1.5-1.5-5-5zM10 14a4 4 0 110-8 4 4 0 010 8z"})}),e.jsx("input",{ref:d,type:"text",placeholder:"Search commands…",value:i,onChange:t=>c(t.target.value),"aria-autocomplete":"list","aria-controls":"cp-list","aria-activedescendant":((y=u[b])==null?void 0:y.id)||""}),e.jsx("div",{className:"kbdWrap",children:e.jsx("span",{className:"kbd",children:"Esc"})})]}),e.jsxs("div",{className:"cp-results",id:"cp-list",role:"listbox",children:[u.length===0&&e.jsx("div",{className:"empty",children:"No results. Try “curtain”, “stack”, or “theme”."}),v.map(t=>e.jsxs("div",{className:"group",children:[e.jsx("div",{className:"groupLabel",children:t.group}),e.jsx(x.ul,{className:"items",initial:"hidden",animate:"show",variants:{hidden:{},show:{transition:{staggerChildren:.035,delayChildren:.02}}},children:t.items.map(a=>{const h=u.indexOf(a),m=h===b;return e.jsxs(x.li,{role:"option","aria-selected":m,className:`item ${m?"active":""}`,onMouseMove:()=>l(h),onClick:()=>k(a),tabIndex:-1,variants:{hidden:{opacity:0,y:4},show:{opacity:1,y:0,transition:{duration:.2}}},children:[m&&e.jsx(x.div,{layoutId:"cpHighlight",className:"highlight"}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"title",children:a.title}),e.jsx("div",{className:"sub",children:a.subtitle})]}),a.shortcut&&e.jsx("div",{className:"shortcut",children:a.shortcut.map(w=>e.jsx("span",{className:"kbd",children:w},w))})]},a.id)})})]},t.group))]})]})]})})]})})}export{P as default};
