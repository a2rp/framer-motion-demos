import{d as n,r as d,j as e,A}from"./index-OJckmjHY.js";import{m as C}from"./pages-CvVyMsYv.js";import{M as R,m as b}from"./proxy-5eYXRWSd.js";const L=n.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);
`,S=n.header`
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
`,P=n.div`
    display: grid;
    grid-template-columns: auto 1fr auto auto auto;
    gap: var(--space-4);
    align-items: center;

    .spacer {
        width: 12px;
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

    .ctrl.toggle {
        grid-auto-flow: column;
        grid-auto-columns: max-content;
        gap: 8px;
        align-items: center;

        input {
            width: 16px;
            height: 16px;
        }
        span {
            color: var(--text);
            font-size: 14px;
        }
    }
`,T=n.section`
    position: relative;
    isolation: isolate;
    min-height: 320px;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: radial-gradient(
            900px 240px at 12% 0%,
            hsl(210 90% 60% / 0.08),
            transparent 60%
        ),
        var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    .bg {
        position: absolute;
        inset: 0;
        z-index: 1;
        pointer-events: none;
    }
    .glow {
        position: absolute;
        filter: blur(28px);
        opacity: 0.16;
    }
    .glow.g1 {
        width: 220px;
        height: 220px;
        left: -40px;
        top: -60px;
        background: hsl(210 90% 60%);
    }
    .glow.g2 {
        width: 200px;
        height: 200px;
        right: -60px;
        bottom: -40px;
        background: hsl(210 90% 62%);
    }

    .card {
        position: absolute;
        inset: 0;
        z-index: 2;
        display: grid;
        place-items: center;
        padding: var(--space-6);
    }

    .shape {
        width: min(100%, 780px);
        min-height: 230px;
        background: var(--surface);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-md);
        /* Corners are animated individually from React (borderTopLeftRadius, etc.) */
        border-radius: 16px;
        padding: var(--space-6);
        will-change: transform, opacity, border-radius;
    }

    .content {
        height: 100%;
        overflow: auto;
    }

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
`,B=n.aside`
    color: var(--text-muted);
    ul {
        padding-left: 18px;
    }
`;n.span``;const M=[{key:"lc1",title:"Liquid Corners",body:"Corners morph between asymmetric radii while the card subtly breathes. Great for featured tiles, hero cards, and delight-in-small doses.",bullets:["Border-radius per-corner animation","Subtle scale for a ‘liquid’ feel","Token themed; transform-only for perf"]},{key:"lc2",title:"Design Notes",body:"Use small deltas. Large radius jumps feel cartoonish. Aim for ‘soft glass’ rather than blob.",bullets:["Asymmetry looks organic","Scale ≤ 1.02","Short easing curves"]},{key:"lc3",title:"Implementation",body:"Animate individual corner radii (TL/TR/BR/BL). A tiny y-translate + drop shadow sells depth.",bullets:["border-*Radius props","Spring to center","Pointer-friendly"]}],p=C(M,5);function z(r,o){const t=o,s=c=>(r*7+c*11)%10/10,i=14;return{tl:i+Math.round(t*(.35+s(1))),tr:i+Math.round(t*(.15+s(2))),br:i+Math.round(t*(.45+s(3))),bl:i+Math.round(t*(.25+s(4)))}}function H(){const[r,o]=d.useState(0),[t,s]=d.useState(22),[i,c]=d.useState(!0),[f,h]=d.useState(1),x=p[r],m=r>0,u=r<p.length-1,v=()=>{m&&(h(-1),o(a=>a-1))},y=()=>{u&&(h(1),o(a=>a+1))},l=d.useMemo(()=>z(r,t),[r,t]),j=a=>({x:a>0?36:-36,opacity:.85,scale:.995}),w={x:0,opacity:1,scale:1,transition:{type:"spring",stiffness:260,damping:24,mass:.9}},N={borderTopLeftRadius:l.tl,borderTopRightRadius:l.tr,borderBottomRightRadius:l.br,borderBottomLeftRadius:l.bl,transition:{duration:.38,ease:[.22,1,.36,1]}},k=i?{scale:[1,1.012,1],y:[0,-2,0],transition:{duration:2,repeat:1/0,ease:"easeInOut"}}:{scale:1,y:0};return e.jsx(R,{reducedMotion:"never",children:e.jsxs(L,{children:[e.jsxs(S,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Liquid Corners"}),e.jsx("p",{className:"muted",children:"Border-radius morph + subtle breathing for a soft, liquid feel."})]}),e.jsxs(P,{role:"toolbar","aria-label":"LiquidCorners controls",children:[e.jsx("button",{className:"btn",onClick:v,disabled:!m,title:"Previous",children:"← Prev"}),e.jsx("div",{className:"dots","aria-hidden":!0,children:p.map((a,g)=>e.jsx("span",{className:`dot ${g===r?"active":""}`},g))}),e.jsx("button",{className:"btn primary",onClick:y,disabled:!u,title:"Next",children:"Next →"}),e.jsx("div",{className:"spacer"}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Amplitude"}),e.jsx("input",{type:"range",min:"8",max:"36",step:"1",value:t,onChange:a=>s(parseInt(a.target.value,10))}),e.jsxs("em",{children:[t,"px"]})]}),e.jsxs("label",{className:"ctrl toggle",children:[e.jsx("input",{type:"checkbox",checked:i,onChange:a=>c(a.target.checked)}),e.jsx("span",{children:"Breathing"})]})]})]}),e.jsxs(T,{"aria-live":"polite",children:[e.jsxs("div",{className:"bg",children:[e.jsx("div",{className:"glow g1"}),e.jsx("div",{className:"glow g2"})]}),e.jsx(A,{initial:!1,children:e.jsx(b.article,{className:"card",initial:j(f),animate:w,style:{},children:e.jsx(b.div,{className:"shape",animate:N,style:k,children:e.jsx(q,{page:x})})},`${x.id}-${t}-${i}`)})]}),e.jsxs(B,{children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Animate ",e.jsx("code",{children:"borderTopLeft/Right/Bottom*"})," radius individually for organic shapes."]}),e.jsx("li",{children:"Keep scale ≤ 1.02 and timing short for a premium feel."}),e.jsx("li",{children:"Prefer transforms + opacity; radius changes are cheap if the element isn’t huge."})]})]})]})})}function q({page:r}){var o;return e.jsxs("div",{className:"content",children:[e.jsxs("header",{className:"cardHead",children:[e.jsx("span",{className:"kicker",children:"Active"}),e.jsx("h2",{children:r.title})]}),e.jsx("p",{className:"body",children:r.body}),e.jsx("ul",{className:"bullets",children:(o=r.bullets)==null?void 0:o.map((t,s)=>e.jsx("li",{children:t},s))})]})}export{H as default};
