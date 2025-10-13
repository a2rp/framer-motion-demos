import{d as t,r as n,j as e}from"./index-OJckmjHY.js";import{m as j}from"./pages-CvVyMsYv.js";import{M as w,m}from"./proxy-5eYXRWSd.js";const i={Wrapper:t.div`
        display: grid;
        gap: var(--space-6);
        padding: var(--space-6);
        max-width: 1080px;
        margin: 0 auto;
        color: var(--text);
    `,Header:t.header`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--space-4);
        justify-content: space-between;
    `,Heading:t.div`
        h1 {
            font-size: 24px;
            line-height: 1.2;
        }
        .muted {
            color: var(--text-muted);
            margin-top: 6px;
        }
    `,Controls:t.div`
        display: grid;
        grid-template-columns: auto 1fr auto auto;
        gap: var(--space-4);
        align-items: center;

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
        .btn.ghost {
            background: var(--surface);
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
    `,Stage:t.section`
        position: relative;
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
        padding: var(--space-6);

        .grid {
            display: grid;
            gap: var(--space-4);
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        @media (width < 1000px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (width < 560px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }

        .cell {
            list-style: none;
        }

        .card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: var(--space-4);
            min-height: 120px;
            display: grid;
            align-content: start;
            gap: 8px;
        }
        .cardHead {
            display: grid;
            gap: 4px;
        }
        .kicker {
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-size: 11px;
            color: var(--text-muted);
        }
        h3 {
            font-size: 18px;
        }
        .body {
            color: var(--text);
        }
    `,Notes:t.aside`
        color: var(--text-muted);
        h3 {
            color: var(--text);
            margin-bottom: 6px;
        }
        ul {
            padding-left: 18px;
        }
    `},k=[{key:"d1",title:"Snappy",body:"Classic drop-in: y:-40 → 0 with a spring overshoot. Good for dashboards and list reveals.",cfg:{items:8,stiffness:320,damping:22,mass:.9,stagger:.06}},{key:"d2",title:"Gentle",body:"Softer spring tuned for content-heavy screens. Still lively, never chaotic.",cfg:{items:10,stiffness:240,damping:28,mass:1,stagger:.05}},{key:"d3",title:"Buoyant",body:"A touch more bounce for playful UIs (marketing, cards). Keep it short.",cfg:{items:9,stiffness:260,damping:18,mass:.85,stagger:.07}}],d=j(k,5);function $(){const[o,c]=n.useState(0),[g,h]=n.useState(0),a=d[o].cfg??{items:8,stiffness:300,damping:22,mass:.9,stagger:.06},l=o>0,p=o<d.length-1,x=()=>l&&c(s=>s-1),u=()=>p&&c(s=>s+1),f=()=>h(s=>s+1),v=n.useMemo(()=>({hidden:{opacity:1},show:{opacity:1,transition:{staggerChildren:a.stagger,delayChildren:.02}}}),[a.stagger]),b=n.useMemo(()=>({hidden:{y:-40,opacity:0,scale:.98},show:{y:0,opacity:1,scale:1,transition:{type:"spring",stiffness:a.stiffness,damping:a.damping,mass:a.mass,velocity:2}}}),[a.stiffness,a.damping,a.mass]),y=n.useMemo(()=>Array.from({length:Math.max(5,a.items)}).map((s,r)=>({id:`cell-${r+1}`,title:`Card ${r+1}`,text:r%2?"Short copy keeps the bounce crisp.":"Use transforms + opacity only for performance."})),[a.items]);return e.jsx(w,{reducedMotion:"never",children:e.jsxs(i.Wrapper,{children:[e.jsxs(i.Header,{children:[e.jsxs(i.Heading,{children:[e.jsx("h1",{children:"Drop-In with Bounce"}),e.jsxs("p",{className:"muted",children:["Items enter from ",e.jsx("code",{children:"y:-40"})," with a tuned spring overshoot and stagger."]})]}),e.jsxs(i.Controls,{role:"toolbar","aria-label":"Drop-in controls",children:[e.jsx("button",{className:"btn",onClick:x,disabled:!l,title:"Previous",children:"← Prev"}),e.jsx("div",{className:"dots","aria-hidden":!0,children:d.map((s,r)=>e.jsx("span",{className:`dot ${r===o?"active":""}`},r))}),e.jsx("button",{className:"btn primary",onClick:u,disabled:!p,title:"Next",children:"Next →"}),e.jsx("button",{className:"btn ghost",onClick:f,title:"Replay animation",children:"Replay"})]})]}),e.jsx(i.Stage,{children:e.jsx(m.ul,{className:"grid",variants:v,initial:"hidden",animate:"show",children:y.map((s,r)=>e.jsx(m.li,{variants:b,className:"cell",children:e.jsxs("div",{className:"card",children:[e.jsxs("header",{className:"cardHead",children:[e.jsx("span",{className:"kicker",children:"Item"}),e.jsx("h3",{children:s.title})]}),e.jsx("p",{className:"body",children:s.text})]})},s.id))},`${o}-${g}-${a.items}-${a.stiffness}-${a.damping}`)}),e.jsxs(i.Notes,{children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("b",{children:"staggerChildren"})," and a spring with small overshoot; long durations feel rubbery."]}),e.jsxs("li",{children:["Keep initial ",e.jsx("code",{children:"y"})," small (≈ −40) and ",e.jsx("code",{children:"scale"})," ≈ 0.98 → 1 to avoid blur."]}),e.jsx("li",{children:"Respect reduced motion in production; this demo forces motion to showcase the effect."})]})]})]})})}export{$ as default};
