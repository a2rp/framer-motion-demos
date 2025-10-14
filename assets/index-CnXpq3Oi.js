import{d as r,r as n,j as e,A as v}from"./index-GOg7KvvH.js";import{m as j}from"./pages-CvVyMsYv.js";import{M as w,m as N}from"./proxy-DRUkQ78w.js";const k=r.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);
`,C=r.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-4);
    justify-content: space-between;
`,P=r.div`
    h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`,M=r.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: var(--space-4);
    align-items: center;

    .btn {
        justify-self: start;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 8px 14px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.primary {
        justify-self: end;
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }

    .dots {
        display: flex;
        justify-content: center;
        gap: 8px;
    }
    .dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: var(--border);
    }
    .dot.active {
        background: var(--primary);
    }
`,S=r.section`
    position: relative;
    isolation: isolate;
    min-height: 320px;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    padding: var(--space-6);

    .cf-backdrop {
        position: absolute;
        inset: 0;
        z-index: 0;
        pointer-events: none;
        background: radial-gradient(
                900px 220px at 12% 0%,
                hsl(210 90% 60% / 0.08),
                transparent 60%
            ),
            linear-gradient(
                180deg,
                transparent,
                transparent 60%,
                hsl(210 90% 56% / 0.07)
            );
    }
`,E=r.article`
    position: relative;
    z-index: 1;
    display: grid;
    place-items: stretch;
`,A=r.aside`
    color: var(--text-muted);

    ul {
        padding-left: 18px;
    }
`,a={Wrapper:k,Header:C,Heading:P,Controls:M,Stage:S,Page:E,Notes:A},T=[{key:"cf1",title:"Crossfade + Micro-scale",body:"Gentle opacity crossfade with a tiny scale settle (0.98 → 1.00). Feels premium, draws attention without shouting.",bullets:["Transforms + opacity only","Micro-scale: 0.98 → 1.00","Perfect for dense UI or detail swaps"]},{key:"cf2",title:"Design Notes",body:"Crossfades are versatile: use for detail panes, card swaps, or image galleries. Keep copy short so the motion reads cleanly.",bullets:["Durations 220–420ms","Easing with a soft landing","No layout thrash"]},{key:"cf3",title:"Implementation",body:"AnimatePresence mounts the new view while the old one fades. We use slight blur on enter/exit to hide texture pop.",bullets:["Variants per lifecycle","Exit is short","Initial is subtle"]}],d=j(T,5);function R(){const[s,i]=n.useState(0),o=n.useRef(null),[l,c]=n.useState(1),p=d[s],u=s>0,x=s<d.length-1,m=()=>{u&&(o.current=s,c(-1),i(t=>t-1))},f=()=>{x&&(o.current=s,c(1),i(t=>t+1))},g=n.useMemo(()=>({type:"spring",stiffness:260,damping:30,mass:.9}),[]),b=n.useMemo(()=>({duration:.22,ease:[.22,1,.36,1]}),[]),y={initial:t=>({opacity:0,scale:.98,y:t>0?6:-6,filter:"blur(2px)"}),enter:{opacity:1,scale:1,y:0,filter:"blur(0px)",transition:g},exit:t=>({opacity:0,scale:1,y:t>0?-6:6,filter:"blur(2px)",transition:b})};return e.jsx(w,{reducedMotion:"never",children:e.jsxs(a.Wrapper,{children:[e.jsxs(a.Header,{children:[e.jsxs(a.Heading,{children:[e.jsx("h1",{children:"Crossfade + Micro-scale"}),e.jsx("p",{className:"muted",children:"Opacity crossfade + tiny scale settle (0.98 → 1.00). Smooth, quiet, classy."})]}),e.jsxs(a.Controls,{role:"toolbar","aria-label":"Crossfade controls",children:[e.jsx("button",{className:"btn",onClick:m,disabled:!u,title:"Previous",children:"← Prev"}),e.jsx("div",{className:"dots","aria-hidden":!0,children:d.map((t,h)=>e.jsx("span",{className:`dot ${h===s?"active":""}`},h))}),e.jsx("button",{className:"btn primary",onClick:f,disabled:!x,title:"Next",children:"Next →"})]})]}),e.jsxs(a.Stage,{"aria-live":"polite",children:[e.jsx("div",{className:"cf-backdrop","aria-hidden":"true"}),e.jsx(v,{initial:!1,custom:l,children:e.jsx(a.Page,{as:N.article,className:"cf-page",custom:l,variants:y,initial:"initial",animate:"enter",exit:"exit",layout:!0,children:e.jsx(H,{page:p})},p.id)})]}),e.jsxs(a.Notes,{children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Crossfade is about restraint: short exit, cushy enter."}),e.jsx("li",{children:"Micro-scale stays near 1.00; big scales look tacky fast."}),e.jsxs("li",{children:["Only transforms/opacity; add ",e.jsx("code",{children:"layout"})," if size changes."]})]})]})]})})}function H({page:s}){var i;return e.jsxs("div",{className:"cf-card",children:[e.jsxs("header",{className:"cardHead",children:[e.jsx("span",{className:"kicker",children:"Active"}),e.jsx("h2",{children:s.title})]}),e.jsx("p",{className:"body",children:s.body}),e.jsx("ul",{className:"bullets",children:(i=s.bullets)==null?void 0:i.map((o,l)=>e.jsx("li",{children:o},l))})]})}export{R as default};
