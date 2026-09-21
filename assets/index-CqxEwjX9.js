import{d as o,r as l,j as e,A as k}from"./index-Cf_T-Gf1.js";import{u as f}from"./use-reduced-motion-TSg2FqVs.js";import{M as j,m as r}from"./proxy-DKYKL-ar.js";const y=o.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 720px;
    margin: 0 auto;
    color: var(--text);
`,w=o.header`
    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`,S=o.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);
`,N=o.div`
    display: grid;
    gap: var(--space-4);

    .btn {
        --ok: hsl(152 60% 40%); /* success color */
        --ok-contrast: white;
        --idle-bg: var(--primary);
        --idle-color: var(--primary-contrast);
        --loading-bg: var(--surface);
        --loading-color: var(--text);
        --ring: 0 0 0 3px hsl(210 90% 56% / 0.35);

        display: inline-flex;
        align-items: center;
        gap: 10px;
        height: 40px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--idle-bg);
        color: var(--idle-color);
        box-shadow: var(--shadow-sm);
        cursor: pointer;

        &:focus-visible {
            outline: none;
            box-shadow: var(--shadow-sm), var(--ring);
        }
        &:disabled {
            cursor: not-allowed;
            opacity: 0.7;
        }

        /* state colors */
        &[data-state="loading"] {
            background: var(--loading-bg);
            color: var(--loading-color);
        }
        &[data-state="success"] {
            background: var(--ok);
            color: var(--ok-contrast);
            border-color: transparent;
            transition: background 0.2s ease, color 0.2s ease,
                border-color 0.2s ease;
        }

        .icon {
            width: 22px;
            height: 22px;
            display: inline-grid;
            place-items: center;
        }
        .spinner {
            width: 20px;
            height: 20px;
        }
        .label {
            white-space: nowrap;
        }
    }

    .aux {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        color: var(--text-muted);
    }

    .link {
        border: none;
        background: transparent;
        color: var(--primary);
        cursor: pointer;
        padding: 0 2px;
        height: 28px;
        border-radius: 6px;

        &:hover {
            text-decoration: underline;
        }
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    }
`,M=o.aside`
    color: var(--text-muted);
    ul {
        padding-left: 18px;
    }
`,t={Wrapper:y,Header:w,Stage:S,Panel:N,Notes:M},a={idle:"idle",loading:"loading",success:"success"};function R(){const[s,n]=l.useState(a.idle),[u,c]=l.useState("Nothing to save yet."),h=f(),d=l.useRef(null);l.useEffect(()=>()=>clearTimeout(d.current),[]);async function x(){const v=1200+Math.floor(Math.random()*400);return new Promise(b=>setTimeout(b,v))}async function g(){s===a.idle&&(clearTimeout(d.current),n(a.loading),c("Saving…"),await x(),n(a.success),c("Saved!"),d.current=setTimeout(()=>{n(a.idle),c("Nothing to save yet.")},1800))}function m(){clearTimeout(d.current),n(a.idle),c("Reset.")}const i=s===a.loading,p=s===a.success;return e.jsx(j,{children:e.jsxs(t.Wrapper,{children:[e.jsx(t.Header,{children:e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Success Morph"}),e.jsx("p",{className:"muted",children:"Press the button to simulate a save. We morph from a spinner to a checkmark with a tidy color pop."})]})}),e.jsx(t.Stage,{children:e.jsxs(t.Panel,{role:"region","aria-label":"Save demo",children:[e.jsxs(r.button,{type:"button",className:"btn","data-state":s,onClick:g,disabled:i,"aria-busy":i||void 0,"aria-live":"polite",children:[e.jsx("span",{className:"icon",children:e.jsxs(k,{mode:"wait",initial:!1,children:[i&&e.jsxs(r.svg,{viewBox:"0 0 24 24",className:"spinner",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeDasharray:"44",strokeDashoffset:"28"}),!h&&e.jsx(r.g,{style:{transformOrigin:"12px 12px"},animate:{rotate:360},transition:{repeat:1/0,duration:1,ease:"linear"}})]},"spinner"),p&&e.jsx(r.svg,{viewBox:"0 0 24 24",initial:{scale:.7,opacity:0},animate:{scale:1,opacity:1},exit:{opacity:0},transition:{type:"spring",stiffness:500,damping:30},children:e.jsx(r.path,{d:"M6 12l4 4 8-8",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:{pathLength:0},animate:{pathLength:1},transition:{duration:.45,ease:"easeOut"}})},"check"),!i&&!p&&e.jsx(r.svg,{viewBox:"0 0 24 24",initial:{opacity:0},animate:{opacity:.6},exit:{opacity:0},children:e.jsx("path",{d:"M12 4v16M4 12h16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})},"idle")]})}),e.jsx("span",{className:"label",children:s===a.idle?"Save changes":s===a.loading?"Saving…":"Saved"})]}),e.jsxs("div",{className:"aux",children:[e.jsx("span",{className:"status","aria-live":"polite",children:u}),e.jsx("button",{className:"link",onClick:m,disabled:i,children:"Reset"})]})]})}),e.jsx(t.Notes,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:["Button disables during work and exposes ",e.jsx("code",{children:"aria-busy"}),"."]}),e.jsxs("li",{children:["Spinner respects ",e.jsx("code",{children:"prefers-reduced-motion"}),"; checkmark draws in ~450ms."]}),e.jsx("li",{children:"State colors are tokenized, so themes just work."})]})})]})})}export{R as default};
