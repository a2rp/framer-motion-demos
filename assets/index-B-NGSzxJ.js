import{d as l,r as p,j as e,A as N}from"./index-CEdkCtCm.js";import{M as S,m as h}from"./proxy-KaJM56Od.js";import{L as C}from"./index-CXhjvNLw.js";const F=l.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1080px;
    margin: 0 auto;
    color: var(--text);
`,I=l.header`
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
`,L=l.div`
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
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
    .btn:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }

    .switch {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding-left: 8px;
        border-left: 1px solid var(--border);
        color: var(--text-muted);

        input {
            accent-color: var(--primary);
        }
    }
`,M=l.section`
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

    &[data-dense="true"] {
        --gap: 10px;
    }
`,A=l.ul`
    --gap: var(--space-4);
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--gap);

    @media (width < 980px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (width < 560px) {
        grid-template-columns: 1fr;
    }
`,P=l.li`
    list-style: none;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    padding: var(--space-4);
    color: var(--text);
    cursor: pointer;
    user-select: none;

    /* Micro interaction polish */
    transition: box-shadow 160ms ease, transform 160ms ease,
        border-color 160ms ease;
    will-change: transform;
    &:hover {
        box-shadow: var(--shadow-md);
        transform: translateY(-2px);
    }
    &:active {
        transform: translateY(0);
    }

    .cardHead {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 6px;
        align-items: baseline;
        margin-bottom: var(--space-3);
    }
    .kicker {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 11px;
        color: var(--text-muted);
    }
    h2 {
        font-size: 18px;
    }
    .metric {
        font-variant-numeric: tabular-nums;
        color: var(--text-muted);
    }

    .body {
        color: var(--text);
        margin-bottom: var(--space-3);
    }

    .details {
        overflow: hidden;
        border-top: 1px dashed var(--border);
        margin-top: var(--space-3);
        padding-top: var(--space-3);

        ul {
            margin-left: 16px;
            color: var(--text);
            display: grid;
            gap: 6px;
        }
    }

    &[data-open="true"] {
        border-color: color-mix(in oklab, var(--primary) 30%, var(--border));
        box-shadow: 0 8px 24px hsl(0 0% 0% / 0.12);
    }
`,R=l.aside`
    color: var(--text-muted);
    ul {
        padding-left: 18px;
    }
`,n={Wrapper:F,Header:I,Controls:L,Stage:M,Grid:A,Card:P,Notes:R};function $(d=8){const s=[{id:"A",title:"Alpha"},{id:"B",title:"Beta"},{id:"C",title:"Gamma"},{id:"D",title:"Delta"},{id:"E",title:"Epsilon"}],o=[];let c=0;for(;o.length<d;){const i=s[c%s.length];o.push({id:`${i.id}${Math.floor(o.length/s.length)||""}`,title:`${i.title}${Math.floor(o.length/s.length)?` ${Math.floor(o.length/s.length)+1}`:""}`,value:10+c*7%89,desc:"Layout (FLIP) reflow: smooth position swaps on reorder/resize. Only transforms & opacity animate."}),c++}return o}function G(){const[d,s]=p.useState(()=>$(8)),[o,c]=p.useState(()=>new Set),[i,m]=p.useState(0),[u,f]=p.useState(!1),v=p.useMemo(()=>{const a=[...d];return i===1&&a.sort((t,r)=>t.value-r.value),i===-1&&a.sort((t,r)=>r.value-t.value),a},[d,i]),b=a=>{c(t=>{const r=new Set(t);return r.has(a)?r.delete(a):r.add(a),r})},j=()=>{m(0),s(a=>{const t=[...a];for(let r=t.length-1;r>0;r--){const g=Math.floor(Math.random()*(r+1));[t[r],t[g]]=[t[g],t[r]]}return t})},w=()=>{m(a=>a===0?1:a===1?-1:0)},y=()=>{s(a=>{const t=`N${a.length+1}`;return[...a,{id:t,title:`New ${a.length+1}`,value:10+a.length*13%89,desc:"Newly added item; FLIP will reflow neighbors without jumps."}]})},k=()=>{s(a=>a.length>0?a.slice(0,-1):a)},x={type:"spring",stiffness:380,damping:32,mass:.85};return e.jsx(S,{reducedMotion:"never",children:e.jsxs(n.Wrapper,{children:[e.jsxs(n.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"FLIP Reflow"}),e.jsxs("p",{className:"muted",children:["Smooth position swaps on list reorder/resize using ",e.jsx("code",{children:"layout"}),". No manual keyframes—Framer computes transforms between states."]})]}),e.jsxs(n.Controls,{role:"toolbar","aria-label":"FLIP Reflow controls",children:[e.jsx("button",{className:"btn",onClick:j,title:"Shuffle",children:"Shuffle"}),e.jsxs("button",{className:"btn",onClick:w,title:"Cycle sort",children:["Sort: ",i===0?"none":i===1?"↑ asc":"↓ desc"]}),e.jsx("button",{className:"btn",onClick:y,title:"Add item",children:"Add"}),e.jsx("button",{className:"btn",onClick:k,title:"Remove last",disabled:d.length<=5,children:"Remove"}),e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:u,onChange:a=>f(a.target.checked)}),e.jsx("span",{children:"Tight grid"})]})]})]}),e.jsx(n.Stage,{"data-dense":u,children:e.jsx(C,{children:e.jsx(n.Grid,{as:h.ul,layout:!0,transition:x,role:"list","aria-label":"Card grid",children:e.jsx(N,{initial:!1,children:v.map(a=>{const t=o.has(a.id);return e.jsxs(n.Card,{as:h.li,layout:!0,initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.94,transition:{duration:.18}},transition:x,"data-open":t?"true":"false",onClick:()=>b(a.id),children:[e.jsxs("div",{className:"cardHead",children:[e.jsxs("span",{className:"kicker",children:["#",a.id]}),e.jsx("h2",{children:a.title}),e.jsx("span",{className:"metric",children:a.value})]}),e.jsx(h.p,{className:"body",layout:!0,initial:!1,animate:{opacity:t?1:.75},children:a.desc}),e.jsx(h.div,{className:"details",layout:!0,initial:!1,animate:{height:t?"auto":0,opacity:t?1:0},children:e.jsxs("ul",{children:[e.jsx("li",{children:"Click cards to expand/collapse (height changes reflow neighbors)."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"Shuffle"})," / ",e.jsx("code",{children:"Sort"})," / ",e.jsx("code",{children:"Add"})," / ",e.jsx("code",{children:"Remove"})," to watch FLIP in action."]}),e.jsx("li",{children:"Only transforms & opacity are animated; layout is computed."})]})})]},a.id)})})})})}),e.jsxs(n.Notes,{children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Add ",e.jsx("code",{children:"layout"})," to the container and each item. Framer calculates transform deltas (the “I” in FLIP) and animates them."]}),e.jsxs("li",{children:["For size changes inside an item (accordion), also mark those blocks with ",e.jsx("code",{children:"layout"}),"."]}),e.jsx("li",{children:"Keep shadows/borders light; heavy effects can make reflow feel sluggish."})]})]})]})})}export{G as default};
