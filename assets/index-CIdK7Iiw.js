import{d as p,r as i,j as e,A as m}from"./index-Bg5Ft_Mu.js";import{M as j,m as d}from"./proxy-DHsq80Pc.js";import{a as k}from"./use-animation-DXhEZD1X.js";const S=p.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 900px;
    margin: 0 auto;
    color: var(--text);
`,w=p.header`
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

    .ctrl {
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        column-gap: 8px;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
    }

    /* Toggle pill */
    .toggle {
        inline-size: 44px;
        block-size: 24px;
        border-radius: 999px;
        background: var(--surface);
        border: 1px solid var(--border);
        display: inline-grid;
        place-items: center;
        padding: 0;
        cursor: pointer;
        position: relative;
    }
    .toggle i {
        position: absolute;
        inset-inline-start: 3px;
        inset-block-start: 3px;
        inline-size: 18px;
        block-size: 18px;
        border-radius: 999px;
        background: var(--border);
        transition: transform 0.2s ease, background 0.2s ease;
    }
    .toggle.on {
        background: var(--primary);
        border-color: var(--primary);
    }
    .toggle.on i {
        transform: translateX(20px);
        background: var(--primary-contrast);
    }

    .btn,
    .ctrl input[type="range"] {
        height: 34px;
    }

    .btn {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 14px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }
    .btnLabel {
        white-space: nowrap;
    }

    .ctrl input[type="range"] {
        width: 180px;
        accent-color: var(--primary);
    }
    .ctrl em {
        font-style: normal;
        font-size: 12px;
        color: var(--text-muted);
        padding-inline-start: 6px;
    }
`,N=p.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);

    .editor {
        display: grid;
        gap: var(--space-4);
    }
    label {
        color: var(--text-muted);
        font-size: 12px;
    }
    textarea {
        min-height: 160px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        padding: var(--space-4);
        outline: none;
        box-shadow: var(--shadow-sm);
    }
    textarea:focus {
        box-shadow: var(--shadow-sm), var(--focus-ring);
    }

    .status {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 6px 10px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        width: fit-content;
    }
    .status .dot {
        inline-size: 10px;
        block-size: 10px;
        border-radius: 999px;
        background: var(--border);
    }
`,A=p.aside`
    color: var(--text-muted);
    h3 {
        color: var(--text);
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
    }
`;p.div`
    .iconWrap {
        position: relative;
        inline-size: 18px;
        block-size: 18px;
        display: inline-grid;
        place-items: center;
    }
    .iconWrap .glyph .svg {
        inline-size: 18px;
        block-size: 18px;
        display: block;
    }

    .iconWrap .ring {
        position: absolute;
        inset: -8px;
        border-radius: 999px;
        border: 2px solid currentColor;
        opacity: 0;
    }

    /* Color cues by state */
    .iconWrap.saving {
        color: var(--primary);
    }
    .iconWrap.saved {
        color: hsl(145 70% 45%);
    }
`;const v={Wrapper:S,Header:w,Stage:N,Notes:A},t={IDLE:"idle",DIRTY:"dirty",SAVING:"saving",SAVED:"saved"};function W(){const[s,c]=i.useState(""),[a,o]=i.useState(t.IDLE),[n,h]=i.useState(!0),[u,b]=i.useState(1),g=i.useRef(null),y=r=>{const l=r.target.value;c(l),o(t.DIRTY),n&&(g.current&&clearTimeout(g.current),g.current=setTimeout(()=>{x()},800))},x=i.useCallback(()=>{if(a===t.SAVING)return;o(t.SAVING);const r=setTimeout(()=>{o(t.SAVED)},Math.max(200,u*1e3));return()=>clearTimeout(r)},[a,u]);i.useEffect(()=>{const r=l=>{(l.metaKey||l.ctrlKey)&&(l.key==="s"||l.key==="S")&&(l.preventDefault(),x())};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[x]);const f=i.useMemo(()=>{switch(a){case t.DIRTY:return"Unsaved changes";case t.SAVING:return"Saving…";case t.SAVED:return"Saved";default:return"All up to date"}},[a]);return e.jsx(j,{reducedMotion:"never",children:e.jsxs(v.Wrapper,{children:[e.jsxs(v.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Save Pulse"}),e.jsx("p",{className:"muted",children:"Tactile feedback for saves: ring pulse while saving, icon swap to a check, subtle color and scale."})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Save controls",children:[e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Auto-save"}),e.jsx("button",{className:`toggle ${n?"on":""}`,onClick:()=>h(r=>!r),"aria-pressed":n,title:"Toggle auto-save",children:e.jsx("i",{})})]}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Latency"}),e.jsx("input",{type:"range",min:"0.4",max:"1.8",step:"0.1",value:u,onChange:r=>b(parseFloat(r.target.value))}),e.jsxs("em",{children:[u.toFixed(1),"s"]})]}),e.jsxs("button",{className:"btn",onClick:x,disabled:a===t.SAVING,title:"Save now",children:[e.jsx(z,{state:a}),e.jsx("span",{className:"btnLabel",children:a===t.SAVING?"Saving…":"Save"})]})]})]}),e.jsx(v.Stage,{children:e.jsxs("div",{className:"editor",children:[e.jsx("label",{htmlFor:"notes",children:"Notes"}),e.jsx("textarea",{id:"notes",placeholder:"Type something… (Ctrl/Cmd+S to save)",value:s,onChange:y}),e.jsxs("div",{className:`status ${a}`,children:[e.jsx(C,{state:a}),e.jsx("span",{"aria-live":"polite",children:f})]})]})}),e.jsxs(v.Notes,{children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Ring pulses are three ",e.jsx("code",{children:"<motion.span>"})," circles with staggered keyframes."]}),e.jsxs("li",{children:["Button uses a tiny scale pop on transition to ",e.jsx("b",{children:"Saved"}),"."]}),e.jsxs("li",{children:["Accessible updates via ",e.jsx("code",{children:"aria-live"})," on the status label."]})]})]})]})})}function z({state:s}){const c=[0,1,2],a={initial:{opacity:0,scale:.6},animate:n=>({opacity:[0,.85,0],scale:[.6,1.25,1.6],transition:{duration:1.2,delay:n*.2,repeat:1/0,ease:[.22,1,.36,1]}})},o=k();return i.useEffect(()=>{s==="saved"&&o.start({scale:[1,1.08,1],transition:{duration:.35,ease:[.22,1,.36,1]}})},[s,o]),e.jsxs("span",{className:`iconWrap ${s}`,children:[e.jsx(m,{mode:"popLayout",initial:!1,children:s==="saving"&&c.map(n=>e.jsx(d.span,{className:"ring",variants:a,initial:"initial",animate:"animate",custom:n},n))}),e.jsx(d.span,{className:"glyph",animate:o,children:e.jsx(m,{mode:"wait",initial:!1,children:s==="saved"?e.jsx(d.svg,{viewBox:"0 0 24 24",className:"svg",initial:{opacity:0,rotate:-10,scale:.9},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:10,scale:.9},transition:{duration:.18},children:e.jsx("path",{d:"M20 6L9 17l-5-5",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})},"check"):e.jsxs(d.svg,{viewBox:"0 0 24 24",className:"svg",initial:{opacity:0,y:2},animate:{opacity:1,y:0},exit:{opacity:0,y:-2},transition:{duration:.18},children:[e.jsx("path",{d:"M5 3h10l4 4v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",fill:"none",stroke:"currentColor",strokeWidth:"1.8"}),e.jsx("path",{d:"M7 3h8v6H7z",fill:"currentColor"}),e.jsx("path",{d:"M7 18h10",stroke:"currentColor",strokeWidth:"1.8"})]},"disk")})})]})}function C({state:s}){const c={idle:{background:"var(--border)"},dirty:{background:"hsl(32 95% 55%)"},saving:{background:"hsl(210 90% 56%)"},saved:{background:"hsl(145 70% 45%)"}};return e.jsx(d.i,{className:"dot",variants:c,animate:s})}export{W as default};
