import{d as b,r as p,j as e,A as k}from"./index-OJckmjHY.js";import{M as I,m as l}from"./proxy-5eYXRWSd.js";const D=b.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1200px;
    margin: 0 auto;
    color: var(--text);

    /* density affects card padding */
    --pad-card: calc(var(--space-4) * 1);
    &[data-density="compact"] {
        --pad-card: 10px;
    }
`,F=b.header`
    display: grid;
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
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-4);
        align-items: center;
        background: radial-gradient(
                900px 160px at 0% 0%,
                hsl(210 90% 60% / 0.1),
                transparent 60%
            ),
            var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        padding: 10px 12px;
        box-shadow: var(--shadow-sm);
    }

    .searchBox {
        position: relative;
        width: clamp(220px, 28vw, 360px);
    }
    .searchBox input {
        width: 100%;
        height: 34px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 34px 0 12px;
        outline: none;
    }
    .searchBox .x {
        position: absolute;
        right: 6px;
        top: 0;
        height: 34px;
        width: 24px;
        display: grid;
        place-items: center;
        border: 0;
        background: transparent;
        color: var(--text-muted);
        cursor: pointer;
    }

    .chipRow {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
    }
    .chip {
        position: relative;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: 999px;
        padding: 6px 12px;
        cursor: pointer;
        box-shadow: var(--shadow-sm);
        transition: transform 0.15s ease, background 0.15s ease;
    }
    .chip.active {
        background: linear-gradient(
                0deg,
                hsl(210 90% 56% / 0.18),
                hsl(210 90% 56% / 0.1)
            ),
            var(--surface);
        border-color: hsl(210 90% 56% / 0.65);
    }
    .chip .dot {
        position: absolute;
        right: 6px;
        top: 6px;
        width: 6px;
        height: 6px;
        border-radius: 99px;
        background: var(--primary);
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
    .ctrl select {
        min-width: 160px;
        height: 34px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 8px;
    }

    .sep {
        width: 1px;
        height: 34px;
        background: var(--border);
    }

    .btn {
        height: 34px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn.clear {
        background: hsl(0 90% 60% / 0.12);
        border-color: hsl(0 90% 60% / 0.35);
    }
`,E=b.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--space-3);

    .result {
        display: inline-flex;
        align-items: center;
        gap: 10px;
    }
    .result span {
        color: var(--text-muted);
    }
    .countBadge {
        min-width: 30px;
        height: 26px;
        padding: 0 8px;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: var(--surface);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        color: var(--text);
        font-weight: 600;
    }

    .summary {
        color: var(--text-muted);
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
    }
    .summary .tag {
        background: var(--surface);
        border: 1px solid var(--border);
        color: var(--text);
        padding: 2px 8px;
        border-radius: 999px;
    }
    .summary .pill {
        cursor: pointer;
    }
`,H=b.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: radial-gradient(
            1200px 220px at 8% -10%,
            hsl(210 90% 60% / 0.1),
            transparent 60%
        ),
        var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    padding: var(--space-6);

    .grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: var(--space-4);
        align-items: start;
    }

    .card {
        background: radial-gradient(
                400px 120px at 0% 0%,
                hsl(var(--tint-h, 210) 80% 58% / 0.14),
                transparent 60%
            ),
            var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        color: var(--text);
        overflow: hidden;
        will-change: transform, opacity, filter;
    }
    .inner {
        padding: var(--pad-card);
        display: grid;
        gap: 10px;
    }

    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }
    .title {
        display: grid;
        gap: 4px;
    }
    .kicker {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 10px;
        color: var(--text-muted);
    }
    h3 {
        font-size: 18px;
    }

    .price {
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: 999px;
        padding: 2px 10px;
        font-weight: 600;
        box-shadow: var(--shadow-sm);
        min-width: 64px;
        text-align: center;
    }

    .desc {
        color: var(--text);
        opacity: 0.9;
    }

    .foot {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }
    .cats {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
    }
    .cat {
        background: var(--card);
        border: 1px solid var(--border);
        color: var(--text);
        border-radius: 6px;
        padding: 2px 8px;
        font-size: 12px;
        cursor: pointer;
    }

    .rating {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: var(--text-muted);
    }
    .stars {
        font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
            "Helvetica Neue", Arial;
        letter-spacing: 2px;
        background: linear-gradient(
            90deg,
            var(--primary) var(--p, 0%),
            var(--border) var(--p, 0%)
        );
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
    .empty {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        text-align: center;
        gap: 8px;
        color: var(--text-muted);
        background: linear-gradient(180deg, transparent, hsl(0 0% 0% / 0.02));
    }
    .empty .bubble {
        width: 48px;
        height: 48px;
        border-radius: 24px;
        display: grid;
        place-items: center;
        background: var(--surface);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        font-size: 24px;
    }

    @media (width < 560px) {
        padding: var(--space-4);
    }
`,v={Wrapper:D,Header:F,MetaRow:E,Stage:H},g=["UI","Data","Auth","Media","UX","DevOps"],h=(s,d)=>Math.floor(Math.random()*(d-s+1))+s,K=(()=>{let s=0;return()=>`fm-${++s}`})();function R(s){const d=g[h(0,g.length-1)],i=Math.random()<.35?g[h(0,g.length-1)]:null,u=h(19,399),n=h(60,100)/20,m=Date.now()-h(0,1e3*60*60*24*180);return{id:K(),title:`Module ${s}`,desc:"Composable utility with sensible defaults. Works out-of-the-box and plays nice with your stack.",cats:i&&i!==d?[d,i]:[d],price:u,rating:n,createdAt:m,hue:h(210,255)}}function L(s=24){return Array.from({length:s},(d,i)=>R(i+1))}function O({value:s}){return e.jsx(l.span,{className:"countBadge",initial:{y:10,opacity:0},animate:{y:0,opacity:1},transition:{type:"spring",stiffness:360,damping:20,mass:.6},children:s},s)}function q(){const[s,d]=p.useState(()=>L(28)),[i,u]=p.useState(""),[n,m]=p.useState([]),[x,N]=p.useState("newest"),[C,M]=p.useState("cozy"),y=p.useRef(null);p.useEffect(()=>{const a=r=>{var o,t;(r.ctrlKey||r.metaKey)&&(r.key==="k"||r.key==="K")&&(r.preventDefault(),(o=y.current)==null||o.focus(),(t=y.current)==null||t.select())};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[]);const A=i.trim().length>0||n.length>0||x!=="newest",f=p.useMemo(()=>{const a=i.trim().toLowerCase(),r=a?a.split(/\s+/).filter(Boolean):[];let o=s.filter(t=>{const c=`${t.title} ${t.desc} ${t.cats.join(" ")}`.toLowerCase(),$=r.length===0||r.every(j=>c.includes(j)),B=n.length===0||t.cats.some(j=>n.includes(j));return $&&B});switch(x){case"price":o.sort((t,c)=>t.price-c.price);break;case"rating":o.sort((t,c)=>c.rating-t.rating);break;case"title":o.sort((t,c)=>t.title.localeCompare(c.title));break;default:o.sort((t,c)=>c.createdAt-t.createdAt)}return o},[s,i,n,x]),w=a=>m(r=>r.includes(a)?r.filter(o=>o!==a):[...r,a]),S=()=>{u(""),m([]),N("newest")},T=()=>d(a=>[R(a.length+1),...a]),z=()=>d(a=>a.length>0?a.slice(0,a.length-1):a);return e.jsx(I,{reducedMotion:"never",children:e.jsxs(v.Wrapper,{"data-density":C,children:[e.jsxs(v.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Filtered “Melt-Away” List"}),e.jsxs("p",{className:"muted",children:["Items that don’t match your filters ",e.jsx("b",{children:"melt away"})," (opacity + blur), while matches flow into place with springy layout transitions."]})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Filter controls",children:[e.jsxs("div",{className:"searchBox",children:[e.jsx("input",{ref:y,type:"search",placeholder:"Search modules (Ctrl + K)",value:i,onChange:a=>u(a.target.value)}),i&&e.jsx("button",{className:"x",onClick:()=>u(""),"aria-label":"Clear search",children:"×"})]}),e.jsx("div",{className:"chipRow",role:"group","aria-label":"Categories",children:g.map(a=>e.jsxs(l.button,{className:`chip ${n.includes(a)?"active":""}`,onClick:()=>w(a),whileTap:{scale:.96},whileHover:{y:-1},title:n.includes(a)?`Remove ${a}`:`Filter by ${a}`,children:[a,n.includes(a)&&e.jsx(l.span,{layoutId:"chipDot",className:"dot"})]},a))}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Sort"}),e.jsxs("select",{value:x,onChange:a=>N(a.target.value),children:[e.jsx("option",{value:"newest",children:"Newest"}),e.jsx("option",{value:"price",children:"Price (low → high)"}),e.jsx("option",{value:"rating",children:"Rating (high → low)"}),e.jsx("option",{value:"title",children:"Title (A → Z)"})]})]}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Density"}),e.jsxs("select",{value:C,onChange:a=>M(a.target.value),children:[e.jsx("option",{value:"cozy",children:"Cozy"}),e.jsx("option",{value:"compact",children:"Compact"})]})]}),e.jsx("div",{className:"sep"}),e.jsx("button",{className:"btn ghost",onClick:T,title:"Add one",children:"Add"}),e.jsx("button",{className:"btn ghost",onClick:z,title:"Remove one",children:"Remove"}),e.jsx(k,{children:A&&e.jsx(l.button,{className:"btn clear",onClick:S,initial:{opacity:0,x:12},animate:{opacity:1,x:0},exit:{opacity:0,x:12},title:"Clear all filters",children:"Clear"})})]})]}),e.jsxs(v.MetaRow,{children:[e.jsxs("div",{className:"result",children:[e.jsx("span",{children:"Results"})," ",e.jsx(O,{value:f.length})]}),A?e.jsxs(l.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0,y:6},className:"summary",children:[e.jsx("b",{children:"Active:"}),i&&e.jsxs("code",{className:"tag",children:["“",i,"”"]}),n.map(a=>e.jsxs("button",{className:"tag pill",onClick:()=>w(a),title:"Remove filter",children:[a," ×"]},a)),x!=="newest"&&e.jsx("span",{className:"tag",children:x})]},"active"):e.jsx(l.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0,y:6},className:"summary",children:"Try combining a search and a couple of category chips."},"none")]}),e.jsxs(v.Stage,{children:[e.jsx(l.ul,{className:"grid",layout:!0,children:e.jsx(k,{initial:!1,children:f.map(a=>e.jsx(l.li,{layout:!0,className:"card",initial:{opacity:0,y:8,scale:.98,filter:"blur(2px)"},animate:{opacity:1,y:0,scale:1,filter:"blur(0px)"},exit:{opacity:0,y:8,scale:.98,filter:"blur(8px)",transition:{duration:.22,ease:[.22,1,.36,1]}},transition:{layout:{type:"spring",stiffness:420,damping:36,mass:.8}},style:{"--tint-h":a.hue},whileHover:{translateY:-2},children:e.jsxs("article",{className:"inner",children:[e.jsxs("header",{className:"head",children:[e.jsxs("div",{className:"title",children:[e.jsx("span",{className:"kicker",children:"Module"}),e.jsx("h3",{children:a.title})]}),e.jsxs("div",{className:"price",children:["₹",a.price]})]}),e.jsx("p",{className:"desc",children:a.desc}),e.jsxs("footer",{className:"foot",children:[e.jsx("div",{className:"cats",children:a.cats.map(r=>e.jsx("span",{className:"cat",onClick:()=>w(r),title:`Toggle ${r}`,children:r},r))}),e.jsxs("div",{className:"rating",title:"Rating",children:[e.jsx("div",{className:"stars",style:{"--p":a.rating/5*100+"%"},children:"★★★★★"}),e.jsx("span",{children:a.rating.toFixed(1)})]})]})]})},a.id))})}),e.jsx(k,{children:f.length===0&&e.jsxs(l.div,{className:"empty",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsx(l.div,{className:"bubble",animate:{y:[0,-4,0]},transition:{repeat:1/0,duration:2.6,ease:"easeInOut"},children:"🔎"}),e.jsx("h4",{children:"No matches"}),e.jsx("p",{children:"Try different keywords or clear a few chips."})]})})]})]})})}export{q as default};
