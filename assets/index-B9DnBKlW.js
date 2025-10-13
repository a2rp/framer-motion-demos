import{d as p,r as n,j as r,A as v}from"./index-OJckmjHY.js";import{M as y,m as f}from"./proxy-5eYXRWSd.js";const j=p.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    color: var(--text);
`,k=p.header`
    display: flex;
    flex-wrap: wrap;
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

    .controls {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        flex-wrap: wrap;
    }
    .ctrl {
        display: grid;
        grid-template-columns: auto auto auto;
        align-items: center;
        column-gap: 8px;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .ctrl input[type="range"] {
        width: 160px;
        accent-color: var(--primary);
    }
    .ctrl em {
        font-size: 12px;
        color: var(--text-muted);
    }

    .btn {
        height: 34px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
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
`,w=p.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    .content {
        padding: var(--space-6);
        color: var(--text);
    }
    kbd {
        background: var(--surface);
        border: 1px solid var(--border);
        border-bottom-width: 2px;
        padding: 0 6px;
        border-radius: 6px;
        font-family: ui-monospace, Menlo, Consolas, monospace;
    }
`,E=p.div`
    position: fixed;
    inset: 0;
    z-index: 999;
    display: grid;
    place-items: center;
    padding: var(--space-6);

    /* Frosted backdrop (with graceful fallback) */
    background: hsl(220 14% 10% / 0.35); /* baseline scrim (works everywhere) */
    @supports (backdrop-filter: blur(2px)) {
        background: hsl(220 14% 10% / 0.18);
        backdrop-filter: blur(var(--blur, 12px)) saturate(1.15);
    }

    /* Safari/WebKit helpers for first frame stability */
    will-change: opacity;
    contain: layout paint;
`,M=p.div`
    width: min(720px, 92vw);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border);
    overflow: hidden;
    color: var(--text);
    box-shadow: 0 20px 60px hsl(0 0% 0% / 0.25), var(--shadow-md);

    /* Frosted card surface */
    background: linear-gradient(
            180deg,
            hsl(0 0% 100% / 0.06),
            hsl(0 0% 100% / 0.02)
        ),
        var(--card);
    @media (prefers-color-scheme: dark) {
        background: linear-gradient(
                180deg,
                hsl(0 0% 100% / 0.04),
                hsl(0 0% 100% / 0.01)
            ),
            var(--card);
    }

    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: var(--space-4) var(--space-6);
        border-bottom: 1px solid var(--border);
        h2 {
            font-size: 20px;
        }
        .iconBtn {
            width: 34px;
            height: 34px;
            border-radius: var(--radius-md);
            display: inline-grid;
            place-items: center;
            cursor: pointer;
            border: 1px solid var(--border);
            background: var(--surface);
            color: var(--text);
            box-shadow: var(--shadow-sm);
        }
    }

    .body {
        padding: var(--space-6);
        display: grid;
        gap: var(--space-3);
        p {
            color: var(--text);
        }
        ul {
            margin-left: 18px;
            color: var(--text);
        }
    }

    .actions {
        padding: var(--space-4) var(--space-6);
        border-top: 1px solid var(--border);
        display: flex;
        justify-content: flex-end;
        gap: var(--space-3);

        .btn {
            height: 34px;
            padding: 0 14px;
            border-radius: var(--radius-md);
            border: 1px solid var(--border);
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
    }
`,l={Wrapper:j,Header:k,Stage:w,Overlay:E,Dialog:M},S=["a[href]","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])","[tabindex]:not([tabindex='-1'])"].join(",");function N(a){n.useLayoutEffect(()=>{const e=document.documentElement,t=e.style.overflow;return a&&(e.style.overflow="hidden"),()=>{e.style.overflow=t}},[a])}function A(a,e){if(a.key!=="Tab")return;const t=e.querySelectorAll(S);if(!t.length)return;const d=t[0],c=t[t.length-1],s=document.activeElement;if(a.shiftKey&&(s===d||s===e)){a.preventDefault(),c.focus();return}if(!a.shiftKey&&s===c){a.preventDefault(),d.focus();return}}function F({open:a,onClose:e,title:t,children:d,blur:c=12}){const s=n.useRef(null),u=n.useRef(null),b="fgm-heading",x="fgm-desc";N(a),n.useEffect(()=>{if(!a)return;const o=i=>{i.key==="Escape"?(i.stopPropagation(),e==null||e()):i.key==="Tab"&&A(i,s.current)};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[a,e]),n.useEffect(()=>{if(!a)return;const o=requestAnimationFrame(()=>{const i=requestAnimationFrame(()=>{var h;(h=u.current||s.current)==null||h.focus()});(u.current||s.current)._r2=i});return()=>{var i;cancelAnimationFrame(o),cancelAnimationFrame(((i=u.current||s.current)==null?void 0:i._r2)||0)}},[a]);const m=n.useMemo(()=>({initial:{opacity:0},animate:{opacity:1,transition:{duration:.22}},exit:{opacity:0,transition:{duration:.18}}}),[]),g=n.useMemo(()=>({initial:{opacity:0,y:14,scale:.98},animate:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:420,damping:36,mass:.85}},exit:{opacity:0,y:10,scale:.985,transition:{duration:.18}}}),[]);return r.jsx(v,{children:a&&r.jsx(l.Overlay,{as:f.div,...m,ref:s,role:"dialog","aria-modal":"true","aria-labelledby":b,"aria-describedby":x,tabIndex:-1,style:{"--blur":`${c}px`},onMouseDown:o=>{o.target===o.currentTarget&&(e==null||e())},children:r.jsxs(l.Dialog,{as:f.div,...g,children:[r.jsxs("header",{className:"head",children:[r.jsx("h2",{id:b,children:t}),r.jsx("button",{ref:u,className:"iconBtn",onClick:e,"aria-label":"Close modal",children:r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,children:r.jsx("path",{fill:"currentColor",d:"M18.3 5.71L12 12.01l-6.29-6.3-1.42 1.42 6.3 6.29-6.3 6.29 1.42 1.42 6.29-6.3 6.29 6.3 1.42-1.42-6.3-6.29 6.3-6.29z"})})})]}),r.jsx("div",{id:x,className:"body",children:d}),r.jsxs("footer",{className:"actions",children:[r.jsx("button",{className:"btn ghost",onClick:e,children:"Cancel"}),r.jsx("button",{className:"btn primary",onClick:e,children:"Confirm"})]})]})},"overlay")})}function z(){const[a,e]=n.useState(!1),[t,d]=n.useState(12);return r.jsxs(y,{reducedMotion:"never",children:[r.jsxs(l.Wrapper,{"aria-hidden":a?"true":"false",children:[r.jsxs(l.Header,{children:[r.jsxs("div",{className:"heading",children:[r.jsx("h1",{children:"Frosted Glass Modal"}),r.jsx("p",{className:"muted",children:"Backdrop blur + soft, springy dialog. ESC / backdrop click to close. Focus trapped. Scroll locked."})]}),r.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Modal controls",children:[r.jsxs("label",{className:"ctrl",children:[r.jsx("span",{children:"Blur"}),r.jsx("input",{type:"range",min:"6",max:"20",step:"1",value:t,onChange:c=>d(parseInt(c.target.value,10))}),r.jsxs("em",{children:[t,"px"]})]}),r.jsx("button",{className:"btn primary",onClick:()=>e(!0),children:"Open Modal"})]})]}),r.jsx(l.Stage,{children:r.jsx("div",{className:"content",children:r.jsxs("p",{children:["This area represents your app. When the modal opens, background scroll locks and focus is captured within the dialog. Try pressing ",r.jsx("kbd",{children:"Esc"})," or clicking outside the card. Use ",r.jsx("kbd",{children:"Tab"}),"/",r.jsx("kbd",{children:"Shift+Tab"})," to cycle focus."]})})})]}),r.jsxs(F,{open:a,onClose:()=>e(!1),title:"Enable premium mode?",blur:t,children:[r.jsx("p",{children:"This is a frosted card floating above a blurred backdrop. It respects your design tokens and prefers transform-only animations for performance."}),r.jsxs("ul",{children:[r.jsx("li",{children:"Backdrop blur with graceful fallback"}),r.jsx("li",{children:"Spring-tuned entrance/exit"}),r.jsxs("li",{children:["Accessible: ",r.jsx("code",{children:'role="dialog"'}),", labelled/ described, focus trap"]})]})]})]})}export{z as default};
