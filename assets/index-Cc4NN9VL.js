import{d as s,r as o,j as a}from"./index-Cu2CtuUC.js";import{M as b,m as c}from"./proxy-C66yDUOO.js";const t={Wrapper:s.div`
        display: grid;
        gap: var(--space-6);
        padding: var(--space-6);
        max-width: 1080px;
        margin: 0 auto;
        color: var(--text);
    `,Header:s.header`
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
    `,Controls:s.div`
        display: flex;
        align-items: center;
        gap: var(--space-4);
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        padding: 10px 12px;
        box-shadow: var(--shadow-sm);

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
            min-width: 36px;
            text-align: right;
        }

        .btn {
            height: 34px;
            padding: 0 12px;
            border-radius: var(--radius-sm);
            border: 1px solid var(--border);
            background: var(--primary);
            color: var(--primary-contrast);
            box-shadow: var(--shadow-sm);
            cursor: pointer;
            white-space: nowrap;
        }
    `,Stage:s.section`
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

        .grid {
            display: grid;
            gap: var(--space-4);
            padding: var(--space-6);
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        @media (width < 1100px) {
            .grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        @media (width < 800px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (width < 560px) {
            .grid {
                grid-template-columns: 1fr;
                padding: var(--space-4);
            }
        }

        .card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: var(--space-4);
            box-shadow: var(--shadow-sm);
            color: var(--text);
            will-change: transform, opacity;
            transition: box-shadow 160ms ease, border-color 160ms ease;
        }
        .card:hover {
            box-shadow: var(--shadow-md);
            border-color: color-mix(
                in oklab,
                var(--border),
                var(--primary) 35%
            );
        }

        .cardHead {
            display: grid;
            gap: 6px;
            margin-bottom: var(--space-3);
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

        .blurb {
            color: var(--text);
            margin-bottom: var(--space-3);
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .tag {
            font-size: 12px;
            padding: 2px 8px;
            border-radius: var(--radius-sm);
            background: var(--surface);
            border: 1px solid var(--border);
            color: var(--text-muted);
        }
    `,Notes:s.aside`
        color: var(--text-muted);

        ul {
            padding-left: 18px;
        }
    `};function j(){const[d,p]=o.useState(12),[i,g]=o.useState(.06),[n,m]=o.useState(0),l=o.useMemo(()=>Array.from({length:Math.max(5,d)},(r,e)=>({id:`card-${n}-${e+1}`,title:`Card ${e+1}`,blurb:"A small, reusable card. The entrance is a springy y: 20 → 0 with opacity fade.",tags:e%3===0?["UI","Motion"]:e%3===1?["Patterns"]:["Demo"]})),[d,n]),x={hidden:{},show:{transition:{staggerChildren:i,delayChildren:.05}}},h={hidden:{y:20,opacity:0,scale:.98},show:{y:0,opacity:1,scale:1,transition:{type:"spring",stiffness:260,damping:22,mass:.9}}},u=()=>m(r=>r+1);return a.jsx(b,{reducedMotion:"never",children:a.jsxs(t.Wrapper,{children:[a.jsxs(t.Header,{children:[a.jsxs("div",{className:"heading",children:[a.jsx("h1",{children:"Staggered Card Rise"}),a.jsxs("p",{className:"muted",children:["Cards rise from ",a.jsx("code",{children:"y: 20"})," with a spring. Container uses"," ",a.jsx("code",{children:"staggerChildren"})," for a clean cascade."]})]}),a.jsxs(t.Controls,{role:"toolbar","aria-label":"Stagger controls",children:[a.jsxs("label",{className:"ctrl",children:[a.jsx("span",{children:"Cards"}),a.jsx("input",{type:"range",min:"6",max:"24",step:"2",value:d,onChange:r=>p(parseInt(r.target.value,10))}),a.jsx("em",{children:Math.max(5,d)})]}),a.jsxs("label",{className:"ctrl",children:[a.jsx("span",{children:"Stagger (s)"}),a.jsx("input",{type:"range",min:"0",max:"0.2",step:"0.01",value:i,onChange:r=>g(parseFloat(r.target.value))}),a.jsx("em",{children:i.toFixed(2)})]}),a.jsx("button",{className:"btn primary",onClick:u,title:"Replay",children:"Replay"})]})]}),a.jsx(t.Stage,{children:a.jsx(c.div,{className:"grid",variants:x,initial:"hidden",animate:"show",children:l.map(r=>a.jsxs(c.article,{className:"card",variants:h,whileHover:{y:-2},children:[a.jsxs("header",{className:"cardHead",children:[a.jsx("span",{className:"kicker",children:"Item"}),a.jsx("h3",{children:r.title})]}),a.jsx("p",{className:"blurb",children:r.blurb}),a.jsx("div",{className:"tags",children:r.tags.map((e,v)=>a.jsx("span",{className:"tag",children:e},v))})]},r.id))},`${n}-${i}-${l.length}`)}),a.jsx(t.Notes,{children:a.jsxs("ul",{children:[a.jsx("li",{children:"Keep stagger small (0.04–0.08s). Longer staggers feel sluggish."}),a.jsx("li",{children:"Transforms + opacity only; layout stays stable."}),a.jsxs("li",{children:["Use ",a.jsx("code",{children:"whileInView"})," instead of mount if you want reveal-on-scroll."]})]})})]})})}export{j as default};
