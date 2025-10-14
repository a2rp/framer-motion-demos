import{d as o,r as s,j as e,A as w}from"./index-GOg7KvvH.js";import{m as N}from"./pages-CvVyMsYv.js";import{M as k,m as S}from"./proxy-DRUkQ78w.js";const P="0 6px 28px hsl(0 0% 0% / 0.18), 0 1px 0 0 hsl(0 0% 100% / 0.02) inset",A=o.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);
`,D=o.header`
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
        display: grid;
        grid-template-columns: auto 1fr auto auto;
        gap: var(--space-4);
        align-items: center;
    }

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 8px 14px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.primary {
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

    .ctrl {
        display: grid;
        gap: 6px;
        align-items: center;
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
        font-style: normal;
        color: var(--text-muted);
        font-size: 12px;
        padding-left: 6px;
    }
`,M=o.section`
    position: relative;
    isolation: isolate;
    min-height: 320px;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: radial-gradient(
            900px 220px at 10% 0%,
            hsl(210 90% 60% / 0.08),
            transparent 60%
        ),
        var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    .page {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: stretch;
        padding: var(--space-6);
        will-change: transform, opacity, filter;
    }
`,C=o.div`
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    height: 100%;
    overflow: auto;
    box-shadow: ${P};

    .cardHead {
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
        margin-bottom: var(--space-4);
        color: var(--text);
    }
    .bullets {
        margin-left: 18px;
        display: grid;
        gap: 6px;
        color: var(--text);
    }
`,E=o.aside`
    color: var(--text-muted);
    ul {
        padding-left: 18px;
    }
`,i={Wrapper:A,Header:D,Stage:M,Card:C,Notes:E},z=[{key:"b1",title:"Blur → Sharp",body:"Enter with a soft blur and micro-scale, then settle to perfect sharpness. Great for progressive data loads and modal/page entrances.",bullets:["filter blur animates to 0","micro-scale 0.98 → 1","tiny directional offset"]},{key:"b2",title:"Design Notes",body:"Keep blur low (6–10px) and duration short. The effect should feel like a camera focusing, not a fog machine.",bullets:["Blur: 6–10px","Duration: 240–420ms","Offset: 8–12px"]},{key:"b3",title:"Implementation",body:"Animate transforms + opacity + filter only. Use AnimatePresence to ensure exit finishes cleanly.",bullets:["Variants w/ direction","Only GPU-friendly props","Mode 'wait' when composing routes"]}],d=N(z,5);function G(){var g;const[a,c]=s.useState(0),[p,x]=s.useState(1),[t,f]=s.useState(.34),u=s.useRef(null),n=d[a],m=a>0,h=a<d.length-1,b=()=>{m&&(u.current=a,x(-1),c(r=>r-1))},v=()=>{h&&(u.current=a,x(1),c(r=>r+1))},y=s.useMemo(()=>({duration:t,ease:[.22,1,.36,1]}),[t]),j={enter:r=>({x:r>0?12:-12,y:8,opacity:0,scale:.98,filter:"blur(10px)"}),center:{x:0,y:0,opacity:1,scale:1,filter:"blur(0px)",transition:y},exit:r=>({x:r>0?-12:12,y:-6,opacity:0,scale:.985,filter:"blur(6px)",transition:{duration:Math.max(.18,t*.6),ease:[.33,1,.68,1]}})};return e.jsx(k,{reducedMotion:"never",children:e.jsxs(i.Wrapper,{children:[e.jsxs(i.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Blur-Down to Sharp"}),e.jsx("p",{className:"muted",children:"Starts soft and slightly small, resolves to crisp at rest."})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Blur controls",children:[e.jsx("button",{className:"btn",onClick:b,disabled:!m,title:"Previous",children:"← Prev"}),e.jsx("div",{className:"dots","aria-hidden":!0,children:d.map((r,l)=>e.jsx("span",{className:`dot ${l===a?"active":""}`},l))}),e.jsx("button",{className:"btn primary",onClick:v,disabled:!h,title:"Next",children:"Next →"}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Duration"}),e.jsx("input",{type:"range",min:"0.22",max:"0.6",step:"0.02",value:t,onChange:r=>f(parseFloat(r.target.value))}),e.jsxs("em",{children:[t.toFixed(2),"s"]})]})]})]}),e.jsx(i.Stage,{"aria-live":"polite",children:e.jsx(w,{custom:p,mode:"wait",children:e.jsx(S.article,{className:"page",custom:p,variants:j,initial:"enter",animate:"center",exit:"exit",children:e.jsxs(i.Card,{children:[e.jsxs("header",{className:"cardHead",children:[e.jsx("span",{className:"kicker",children:"Active"}),e.jsx("h2",{children:n.title})]}),e.jsx("p",{className:"body",children:n.body}),e.jsx("ul",{className:"bullets",children:(g=n.bullets)==null?void 0:g.map((r,l)=>e.jsx("li",{children:r},l))})]})},n.id)})}),e.jsxs(i.Notes,{children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Animates ",e.jsx("code",{children:"opacity"}),", ",e.jsx("code",{children:"scale"}),", ",e.jsx("code",{children:"filter: blur()"}),", and tiny ",e.jsx("code",{children:"x/y"})," offsets."]}),e.jsx("li",{children:"Use with skeleton loaders → crossfade to crisp content for a natural “focus” feel."}),e.jsxs("li",{children:["When used as a route transition, prefer ",e.jsx("code",{children:'mode="wait"'})," to avoid overlap artifacts."]})]})]})]})})}export{G as default};
