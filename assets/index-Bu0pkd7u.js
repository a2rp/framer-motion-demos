import{d as a,r as o,j as e}from"./index-h_xcPptR.js";import{m as k}from"./pages-CvVyMsYv.js";import{M as N,m as u}from"./proxy-BBnnFU2D.js";const t={Wrapper:a.div`
        display: grid;
        gap: var(--space-6);
        padding: var(--space-6);
        max-width: 880px;
        margin: 0 auto;
        color: var(--text);
    `,Header:a.header`
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

        .controls {
            display: grid;
            grid-auto-flow: column;
            align-items: center;
            gap: var(--space-4);
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

        .count {
            color: var(--text-muted);
            min-width: 64px;
            text-align: center;
            font-variant-numeric: tabular-nums;
        }
    `,List:a.div`
        display: grid;
        gap: var(--space-3);
    `,Item:a.div`
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-sm);
        overflow: hidden;
    `,Trigger:a.button`
        all: unset;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: var(--space-3);
        width: 100%;
        padding: var(--space-4) var(--space-6);
        cursor: pointer;
        background: var(--card);
        color: var(--text);

        &:hover {
            background: var(--surface);
        }
        &:focus-visible {
            outline: var(--focus-ring);
            border-radius: var(--radius-lg);
        }
    `,Title:a.span`
        font-weight: 600;
    `,Icon:a.span`
        display: inline-grid;
        place-items: center;
        width: 28px;
        height: 28px;
        color: var(--text-muted);
    `,Panel:a.div`
        /* grid trick: this container animates 0fr -> 1fr nicely */
        display: grid;
        grid-template-rows: 0fr;
        transition: background 120ms ease;

        .panelInner {
            overflow: hidden; /* required for the grid trick */
            padding: 0 var(--space-6) var(--space-6);
            background: var(--card);
            color: var(--text);
        }

        .body {
            color: var(--text);
            margin-bottom: var(--space-3);
        }
        .bullets {
            margin-left: 18px;
            display: grid;
            gap: 6px;
            color: var(--text);
        }
    `,Notes:a.aside`
        color: var(--text-muted);
        border-top: 1px solid var(--border);
        padding-top: var(--space-4);

        h3 {
            color: var(--text);
            margin-bottom: var(--space-2);
        }
        ul {
            padding-left: 18px;
        }
    `},T=[{key:"acc-1",title:"What is Elastic Accordion?",body:"A single-open accordion with springy height and a rotating caret. Animations are transform/opacity-only for smoothness; height is simulated via grid.",bullets:["Single item open at a time","Springy caret rotation","Grid-rows trick for height"]},{key:"acc-2",title:"When to use",body:"Use for compact FAQs, preference groups, or anything where you want tasteful disclosure.",bullets:["Short, scannable titles","Keep copy tight","Prefer subtle motion"]},{key:"acc-3",title:"Implementation details",body:"We animate grid-template-rows (0fr → 1fr) for the panel and rotate the caret 0→90°. This avoids layout thrash and keeps edges crisp.",bullets:["No JS measurements","No clip-path blur","Tokenized theme"]}],l=k(T,5);function S(){const[i,d]=o.useState(0),c=i>0,p=i<l.length-1,x=o.useCallback(r=>d(s=>s===r?-1:r),[]),v=()=>{c&&d(r=>r-1)},b=()=>{p&&d(r=>r+1)},f=o.useMemo(()=>({type:"spring",stiffness:520,damping:32,mass:.75}),[]),y=o.useMemo(()=>({type:"spring",stiffness:220,damping:28,mass:.9}),[]);return e.jsx(N,{reducedMotion:"never",children:e.jsxs(t.Wrapper,{children:[e.jsxs(t.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Elastic Accordion"}),e.jsx("p",{className:"muted",children:"Single-open accordion with springy height and a rotating caret."})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Accordion controls",children:[e.jsx("button",{className:"btn",onClick:v,disabled:!c,title:"Previous item",children:"← Prev"}),e.jsxs("span",{className:"count",children:[i<0?"0":i+1," / ",l.length]}),e.jsx("button",{className:"btn primary",onClick:b,disabled:!p,title:"Next item",children:"Next →"})]})]}),e.jsx(t.List,{role:"list",children:l.map((r,s)=>{var m;const n=i===s,g=`acc-panel-${r.id}`,h=`acc-btn-${r.id}`;return e.jsxs(t.Item,{role:"listitem",children:[e.jsxs(t.Trigger,{id:h,type:"button","aria-expanded":n,"aria-controls":g,onClick:()=>x(s),children:[e.jsx(t.Title,{children:r.title}),e.jsx(t.Icon,{as:u.span,animate:{rotate:n?90:0},transition:f,"aria-hidden":"true",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M8 5l8 7-8 7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),e.jsx(t.Panel,{as:u.div,initial:!1,animate:{gridTemplateRows:n?"1fr":"0fr",opacity:n?1:.5},transition:y,id:g,role:"region","aria-labelledby":h,children:e.jsxs("div",{className:"panelInner",children:[e.jsx("p",{className:"body",children:r.body}),!!((m=r.bullets)!=null&&m.length)&&e.jsx("ul",{className:"bullets",children:r.bullets.map((j,w)=>e.jsx("li",{children:j},w))})]})})]},r.id)})}),e.jsxs(t.Notes,{children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Panel height is animated by ",e.jsx("code",{children:"grid-template-rows"})," (no measurements)."]}),e.jsx("li",{children:"Caret rotates with a stiff spring for an elastic snap."}),e.jsx("li",{children:"Tokens keep it themeable across light/dark."})]})]})]})})}export{S as default};
