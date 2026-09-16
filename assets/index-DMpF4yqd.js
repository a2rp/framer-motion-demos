import{d as g,r as m,j as t,A as S}from"./index-Bg5Ft_Mu.js";import{u as U}from"./use-motion-value-gKvy5EH1.js";import{u as E}from"./use-spring-Bk9zEcz4.js";import{u as W}from"./use-transform-EGMn7WN4.js";import{M as B,m as y}from"./proxy-DHsq80Pc.js";import{L as F}from"./index-CG92HEr_.js";const e=a=>`var(${a})`,G=g.div`
    display: grid;
    gap: ${e("--space-6")};
    padding: ${e("--space-6")};
    max-width: 1100px;
    margin: 0 auto;
    color: ${e("--text")};
`,H=g.header`
    display: grid;
    gap: ${e("--space-4")};

    .brand h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .brand .muted {
        color: ${e("--text-muted")};
        margin-top: 6px;
    }

    .controls {
        display: grid;
        grid-template-columns: 1fr auto auto auto;
        align-items: center;
        gap: ${e("--space-4")};
        background: ${e("--card")};
        border: 1px solid ${e("--border")};
        border-radius: ${e("--radius-lg")};
        box-shadow: ${e("--shadow-sm")};
        padding: 12px;
    }

    .group {
        display: flex;
        align-items: center;
        gap: ${e("--space-4")};
        flex-wrap: wrap;
    }

    .field {
        display: grid;
        gap: 6px;
        align-items: center;
        span {
            font-size: 12px;
            color: ${e("--text-muted")};
        }
        input,
        select {
            height: 34px;
            border: 1px solid ${e("--border")};
            background: ${e("--surface")};
            color: ${e("--text")};
            border-radius: ${e("--radius-sm")};
            padding: 0 10px;
            min-width: 220px;
        }
    }

    .tags {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        align-items: center;
    }
    .tag {
        height: 30px;
        padding: 0 12px;
        border-radius: 999px;
        border: 1px solid ${e("--border")};
        background: ${e("--surface")};
        color: ${e("--text")};
        cursor: pointer;
        box-shadow: ${e("--shadow-sm")};
    }
    .tag.active {
        background: hsl(210 90% 56% / 0.15);
        border-color: hsl(210 90% 56% / 0.5);
    }
    .tag.ghost {
        opacity: 0.8;
    }

    .sep {
        width: 1px;
        height: 34px;
        background: ${e("--border")};
    }

    .actions {
        display: flex;
        gap: ${e("--space-3")};
    }
    .btn {
        height: 34px;
        padding: 0 14px;
        border-radius: ${e("--radius-md")};
        border: 1px solid ${e("--border")};
        background: ${e("--card")};
        color: ${e("--text")};
        box-shadow: ${e("--shadow-sm")};
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .btn.primary {
        background: ${e("--primary")};
        color: ${e("--primary-contrast")};
        border-color: transparent;
    }

    .count {
        display: grid;
        justify-items: end;
        gap: 6px;
    }
    .count .label {
        font-size: 12px;
        color: ${e("--text-muted")};
    }
    .count .num {
        font-family: "Antonio", ui-sans-serif, system-ui, -apple-system,
            Segoe UI, Roboto, Ubuntu;
        font-size: 28px;
        line-height: 1;
    }

    @media (width < 900px) {
        .controls {
            grid-template-columns: 1fr;
        }
        .sep {
            display: none;
        }
        .count {
            justify-items: start;
        }
    }
`,q=g.section`
    position: relative;
    border: 1px solid ${e("--border")};
    border-radius: ${e("--radius-lg")};
    background: ${e("--card")};
    box-shadow: ${e("--shadow-md")};
    overflow: hidden;

    .empty {
        display: grid;
        place-items: center;
        padding: ${e("--space-8")};
    }
    .emptyCard {
        background: ${e("--surface")};
        border: 1px solid ${e("--border")};
        border-radius: ${e("--radius-lg")};
        padding: ${e("--space-6")};
        box-shadow: ${e("--shadow-sm")};
        text-align: center;
    }
`,K=g.ul`
    list-style: none;
    padding: ${e("--space-6")};
    margin: 0;

    display: grid;
    gap: ${e("--space-4")};
    grid-template-columns: repeat(3, minmax(0, 1fr));

    @media (width < 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (width < 560px) {
        grid-template-columns: 1fr;
    }
`,Q="0 8px 24px hsl(0 0% 0% / .15)",V=g.aside`
    color: ${e("--text-muted")};
    h3 {
        color: ${e("--text")};
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
    }
`;g.div`
    .tile {
        position: relative;
        background: linear-gradient(
                180deg,
                hsl(var(--tile-hue, 210) 80% 62% / 0.1),
                hsl(var(--tile-hue, 210) 80% 62% / 0.06)
            ),
            ${e("--surface")};
        border: 1px solid ${e("--border")};
        border-radius: ${e("--radius-lg")};
        box-shadow: ${Q};
        overflow: hidden;
        will-change: transform, opacity, height;
    }

    /* Update/Add pulse ring (re-mounted via key) */
    .tile .pulse {
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: radial-gradient(
            120% 120% at 50% 50%,
            hsl(210 90% 56% / 0.25),
            transparent 60%
        );
        opacity: 0;
        animation: pulse 900ms ease-out forwards;
    }
    @keyframes pulse {
        0% {
            opacity: 0;
        }
        10% {
            opacity: 0.85;
        }
        100% {
            opacity: 0;
        }
    }

    .tile .head {
        display: grid;
        gap: 6px;
        padding: ${e("--space-4")} ${e("--space-4")} 0;
    }
    .tile .kicker {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 11px;
        color: ${e("--text-muted")};
    }
    .tile h3 {
        font-size: 18px;
    }

    .tile .desc {
        color: ${e("--text")};
        padding: 0 ${e("--space-4")};
        margin: 6px 0 ${e("--space-3")};
    }

    .tile .meta {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: end;
        gap: ${e("--space-4")};
        padding: 0 ${e("--space-4")} ${e("--space-4")};
    }

    .tile .tags {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
    }
    .tile .chip {
        height: 26px;
        padding: 0 10px;
        border-radius: 999px;
        border: 1px solid ${e("--border")};
        background: ${e("--card")};
        color: ${e("--text")};
        display: inline-flex;
        align-items: center;
    }

    .tile .right {
        display: flex;
        gap: ${e("--space-3")};
        align-items: center;
    }
    .tile .when {
        color: ${e("--text-muted")};
        font-size: 12px;
    }
    .tile .score {
        min-width: 38px;
        height: 28px;
        padding: 0 8px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: ${e("--radius-sm")};
        background: hsl(210 90% 56% / 0.15);
        color: ${e("--text")};
        border: 1px solid hsl(210 90% 56% / 0.45);
        box-shadow: ${e("--shadow-sm")};
        font-weight: 600;
    }

    /* Micro interaction */
    .tile:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 32px hsl(0 0% 0% / 0.18);
    }
`;const b={Wrapper:G,Header:H,Stage:q,List:K,Notes:V},w=["Design","Dev","Data","Ops"],Y=(()=>{let a=0;return()=>`diod-${++a}`})(),p=(a,n)=>Math.floor(Math.random()*(n-a+1))+a;function C(a){const n=p(1,2),o=Array.from({length:n},()=>w[p(0,w.length-1)]).filter((h,f,$)=>$.indexOf(h)===f),x=p(210,260),d=["Refactor","Prototype","Telemetry","Dashboard","Workflow","Schema","Lighthouse"][p(0,6)];return{id:Y(),title:`${d} #${a}`,desc:"Diff-in/diff-out with filters, search, sort & updates. Only transforms/opacity animate; height collapses on exit.",tags:o,score:p(40,99),date:Date.now()-p(0,1e3*60*60*24*12),hue:x}}function Z(a=16){return Array.from({length:Math.max(12,a)},(n,o)=>C(o+1))}function ie(){const[a,n]=m.useState(()=>Z(16)),[o,x]=m.useState(""),[d,h]=m.useState(new Set),[f,$]=m.useState("recent"),[A,M]=m.useState({}),c=m.useMemo(()=>{const s=o.trim().toLowerCase(),i=d;let r=a.filter(l=>{const u=!s||l.title.toLowerCase().includes(s)||l.desc.toLowerCase().includes(s)||l.tags.some(v=>v.toLowerCase().includes(s)),O=i.size===0||l.tags.some(v=>i.has(v));return u&&O});switch(f){case"title":r.sort((l,u)=>l.title.localeCompare(u.title));break;case"score":r.sort((l,u)=>u.score-l.score);break;default:r.sort((l,u)=>u.date-l.date);break}return r},[a,o,d,f]),T=s=>h(i=>{const r=new Set(i);return r.has(s)?r.delete(s):r.add(s),r}),L=()=>h(new Set),N=()=>{const s=c&&c.length?c:a;if(!s.length)return null;const i=s[p(0,s.length-1)];return(i==null?void 0:i.id)??null},k=s=>s&&M(i=>({...i,[s]:(i[s]||0)+1})),D=()=>{const s=C(a.length+1);if(d.size>0){const i=[...d][0];s.tags=Array.from(new Set([i,...s.tags]))}s.date=Date.now(),n(i=>[s,...i]),k(s.id)},z=()=>{const s=N();s&&n(i=>i.filter(r=>r.id!==s))},I=()=>{const s=N();s&&(n(i=>i.map(r=>r.id===s?{...r,score:Math.min(100,Math.max(0,r.score+p(-6,12))),date:Date.now()}:r)),k(s))},j=U(c.length),R=E(j,{stiffness:240,damping:28,mass:.9}),P=W(R,s=>Math.round(s));return m.useEffect(()=>{j.set(c.length)},[c.length,j]),t.jsx(B,{reducedMotion:"never",children:t.jsxs(b.Wrapper,{children:[t.jsxs(b.Header,{children:[t.jsxs("div",{className:"brand",children:[t.jsx("h1",{children:"Diff-in / Diff-out"}),t.jsxs("p",{className:"muted",children:["Animate list changes via ",t.jsx("code",{children:"AnimatePresence"})," and ",t.jsx("code",{children:"layout"}),". Filter, search, sort, add, remove, and update-everything stays silky."]})]}),t.jsxs("div",{className:"controls",role:"toolbar","aria-label":"List controls",children:[t.jsxs("div",{className:"group",children:[t.jsxs("label",{className:"field",children:[t.jsx("span",{children:"Search"}),t.jsx("input",{type:"text",placeholder:"type to filter…",value:o,onChange:s=>x(s.target.value)})]}),t.jsxs("label",{className:"field",children:[t.jsx("span",{children:"Sort"}),t.jsxs("select",{value:f,onChange:s=>$(s.target.value),children:[t.jsx("option",{value:"recent",children:"Recent"}),t.jsx("option",{value:"title",children:"Title A→Z"}),t.jsx("option",{value:"score",children:"Score"})]})]})]}),t.jsxs("div",{className:"tags",children:[w.map(s=>t.jsx("button",{className:`tag ${d.has(s)?"active":""}`,onClick:()=>T(s),children:s},s)),t.jsx("button",{className:"tag ghost",onClick:L,title:"Clear tags",children:"All"})]}),t.jsx("div",{className:"sep"}),t.jsxs("div",{className:"actions",children:[t.jsx("button",{className:"btn primary",onClick:D,children:"Add"}),t.jsx("button",{className:"btn",onClick:I,title:"Bump a visible item's score",children:"Update"}),t.jsx("button",{className:"btn",onClick:z,children:"Remove"})]}),t.jsxs("div",{className:"count",children:[t.jsx("span",{className:"label",children:"Matches"}),t.jsx(y.span,{className:"num","aria-live":"polite",children:P})]})]})]}),t.jsxs(b.Stage,{children:[t.jsx(F,{children:t.jsx(b.List,{as:y.ul,layout:!0,initial:!1,role:"list","aria-live":"polite",children:t.jsx(S,{initial:!1,children:c.map(s=>t.jsx(_,{item:s,pulseKey:A[s.id]||0},s.id))})})}),t.jsx(S,{children:c.length===0&&t.jsx(y.div,{className:"empty",initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.2},role:"status",children:t.jsxs("div",{className:"emptyCard",children:[t.jsx("h3",{children:"No matches"}),t.jsx("p",{children:"Try different tags or clear the search filter."})]})},"empty")})]}),t.jsxs(b.Notes,{children:[t.jsx("h3",{children:"Tech notes"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Target visibility:"})," actions operate on the ",t.jsx("i",{children:"currently visible"})," list so UI always changes."]}),t.jsxs("li",{children:[t.jsx("b",{children:"Reflow:"})," parent + items use ",t.jsx("code",{children:"layout"})," for buttery FLIP transitions."]}),t.jsxs("li",{children:[t.jsx("b",{children:"Exit height collapse"})," prevents ghost gaps during removal."]})]})]})]})})}function _({item:a,pulseKey:n}){const o=new Date(a.date),x=o.toLocaleDateString(void 0,{month:"short",day:"numeric"}),d=o.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return t.jsxs(y.li,{className:"tile",layout:!0,layoutId:a.id,style:{"--tile-hue":a.hue},initial:{opacity:0,scale:.96,y:6,height:"auto"},animate:{opacity:1,scale:1,y:0,height:"auto"},exit:{opacity:0,scale:.92,y:-6,height:0,marginTop:0,marginBottom:0,transition:{duration:.18}},transition:{layout:{type:"spring",stiffness:420,damping:38,mass:.8}},children:[t.jsx("div",{className:"pulse","aria-hidden":"true"},n),t.jsxs("header",{className:"head",children:[t.jsxs("span",{className:"kicker",children:["#",a.id.slice(-3)]}),t.jsx("h3",{children:a.title})]}),t.jsx("p",{className:"desc",children:a.desc}),t.jsxs("div",{className:"meta",children:[t.jsx("div",{className:"tags",children:a.tags.map(h=>t.jsx("span",{className:"chip",children:h},h))}),t.jsxs("div",{className:"right",children:[t.jsxs("span",{className:"when",title:o.toLocaleString(),children:[x," · ",d]}),t.jsx("span",{className:"score",title:"Score",children:a.score})]})]})]})}export{ie as default};
