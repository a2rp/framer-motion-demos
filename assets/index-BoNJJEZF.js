import{d,r as s,j as e,A as f}from"./index-GOg7KvvH.js";import{M as j,m as h}from"./proxy-DRUkQ78w.js";const y=d.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 820px;
    margin: 0 auto;
    color: var(--text);
`,w=d.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);

    .heading h1 {
        font-size: 22px;
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

    .btn,
    .toggle {
        height: 34px;
    }

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 14px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .toggle {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: var(--text-muted);
        input {
            transform: translateY(1px);
        }
    }

    .sep {
        width: 1px;
        height: 34px;
        background: var(--border);
    }
`,k=d.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);

    display: grid;
    gap: var(--space-4);

    .chip {
        --chip-bg: var(--surface);
        --chip-border: var(--border);

        border: 1px solid var(--chip-border);
        background: var(--chip-bg);
        color: var(--text);
        border-radius: 999px;
        min-height: 44px;
        padding: 8px 14px;
        display: inline-flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        box-shadow: var(--shadow-sm);
        transition: background 0.2s ease, border-color 0.2s ease,
            transform 0.06s ease;

        &:hover {
            transform: translateY(-1px);
        }
        &:active {
            transform: translateY(0);
        }
    }

    .label {
        font-size: 12px;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.08em;
    }

    /* Count area clipped so the number can slide in/out vertically */
    .countSlot {
        position: relative;
        overflow: hidden;
        min-width: 96px; /* prevents layout jump as digits change */
        height: 24px; /* matches .count line-height for neat clipping */
        display: inline-grid;
        align-items: center;
    }

    .count {
        font-variant-numeric: tabular-nums; /* monospaced numerals */
        line-height: 24px;
        font-size: 18px;
        font-weight: 700;
        color: var(--text);
        display: inline-block;
    }

    .hint {
        color: var(--text-muted);
    }
`,l={Wrapper:y,Header:w,Stage:k},N=new Intl.NumberFormat(void 0,{maximumFractionDigits:0});function I(){const[a,i]=s.useState(1280),[n,u]=s.useState(!1),[m,x]=s.useState(0),o=s.useRef(a),p=Math.sign(a-o.current)||1;s.useEffect(()=>{a!==o.current&&(o.current=a,x(t=>t+1))},[a]);const g=s.useMemo(()=>({enter:t=>({y:t>0?6:-6,scale:.98,opacity:0}),center:{y:0,scale:1,opacity:1,transition:{type:"spring",stiffness:420,damping:30,mass:.7}},exit:t=>({y:t>0?-6:6,scale:.98,opacity:0,transition:{duration:.12}})}),[]);s.useEffect(()=>{if(!n)return;const t=setInterval(()=>i(r=>r+1),1200);return()=>clearInterval(t)},[n]);const c=(t=1)=>i(r=>r+t),b=(t=1)=>i(r=>Math.max(0,r-t)),v=()=>i(0);return e.jsx(j,{reducedMotion:"never",children:e.jsxs(l.Wrapper,{children:[e.jsxs(l.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"KPI Count Tick"}),e.jsx("p",{className:"muted",children:"A compact chip that ticks numbers with a subtle nudge + pop. Perfect for KPI tiles and badges."})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"KPI controls",children:[e.jsx("button",{className:"btn",onClick:()=>b(1),title:"Decrease",children:"−1"}),e.jsx("button",{className:"btn",onClick:()=>c(1),title:"Increase",children:"+1"}),e.jsx("button",{className:"btn ghost",onClick:()=>c(10),title:"Increase by 10",children:"+10"}),e.jsx("div",{className:"sep"}),e.jsx("button",{className:"btn ghost",onClick:v,title:"Reset",children:"Reset"}),e.jsxs("label",{className:"toggle",children:[e.jsx("input",{type:"checkbox",checked:n,onChange:t=>u(t.target.checked)}),e.jsx("span",{children:"Auto"})]})]})]}),e.jsxs(l.Stage,{children:[e.jsxs(h.button,{className:"chip",onClick:()=>c(1),title:"Click to increment",initial:{boxShadow:"0 0 0 0px hsl(210 90% 56% / 0)"},animate:{boxShadow:["0 0 0 0px hsl(210 90% 56% / 0)","0 0 0 6px hsl(210 90% 56% / 0.18)","0 0 0 0px hsl(210 90% 56% / 0)"]},transition:{duration:.6,times:[0,.25,1]},children:[e.jsx("span",{className:"label",children:"Active Users"}),e.jsx("span",{className:"countSlot","aria-live":"polite","aria-atomic":"true",children:e.jsx(f,{initial:!1,custom:p,mode:"popLayout",children:e.jsx(h.span,{className:"count",custom:p,variants:g,initial:"enter",animate:"center",exit:"exit",children:N.format(a)},a)})})]},`chip-${m}`),e.jsx("p",{className:"hint",children:"Tip: Use inside list rows, filters, or KPI cards. Motion is transform-only → smooth on big lists."})]})]})})}export{I as default};
