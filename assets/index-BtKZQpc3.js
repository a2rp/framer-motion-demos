import{d as g,r as d,j as e,A as j}from"./index-BUutmlIb.js";import{M as w,m as f}from"./proxy-DSa7FBfm.js";const k="var(--space-4)",S="220px",N=g.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1100px;
    margin: 0 auto;
    color: var(--text);
`,A=g.header`
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

    /* Controls row — perfectly aligned */
    .controls {
        display: flex;
        align-items: center; /* ← centers everything on the baseline */
        gap: var(--space-4);
        flex-wrap: wrap;
    }

    /* Buttons & select share the same height for a clean row */
    .btn,
    .ctrl select {
        height: 34px;
    }

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 14px; /* ← vertical = 0 to lock height = 34px */
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center; /* ← centers text vertically inside button */
        justify-content: center;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    /* Inline label + select (no stacking), perfectly centered */
    .ctrl {
        display: grid;
        grid-template-columns: auto auto; /* label | select */
        align-items: center; /* vertical centering */
        column-gap: 8px;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
        margin: 0; /* remove any stray margin */
        line-height: 1; /* keeps label snug */
    }
    .ctrl select {
        min-width: 180px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 8px;
    }

    /* Divider that matches control height */
    .sep {
        width: 1px;
        height: 34px; /* ← same as controls */
        background: var(--border);
        align-self: center;
    }

    /* Stack on very small screens */
    @media (width < 560px) {
        .ctrl {
            grid-template-columns: 1fr;
            row-gap: 6px;
        }
        .sep {
            display: none;
        }
    }
`,M=g.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    padding: var(--space-6);

    /* Tunables read by JS for span math */
    --row-size: 8px;

    .masonry {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(${S}, 1fr));
        grid-auto-rows: var(--row-size);
        grid-auto-flow: dense; /* still useful for tiny leftovers */
        gap: ${k};
        align-items: start;
    }

    .tile {
        background: linear-gradient(
                0deg,
                hsl(
                    var(--tile-hue, 210) var(--tile-sat, 80%)
                        calc(var(--tile-light, 56%)) / 0.1
                ),
                hsl(
                    var(--tile-hue, 210) var(--tile-sat, 80%)
                        calc(var(--tile-light, 56%)) / 0.06
                )
            ),
            var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        overflow: hidden;
        color: var(--text);
        will-change: transform, opacity;
    }

    .tileInner {
        padding: var(--space-4);
        display: grid;
        gap: var(--space-3);
    }

    .tHead {
        display: grid;
        gap: 6px;
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

    .meta {
        margin-left: 18px;
        display: grid;
        gap: 4px;
        color: var(--text-muted);
    }

    .tile:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px hsl(0 0% 0% / 0.12);
    }

    @media (width < 560px) {
        padding: var(--space-4);
    }
`,z=g.aside`
    color: var(--text-muted);
    h3 {
        color: var(--text);
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
    }
`,m={Wrapper:N,Header:A,Stage:M,Notes:z},p=(s,r)=>Math.floor(Math.random()*(r-s+1))+s,C=(()=>{let s=0;return()=>`ms-${++s}`})();function y(s=14){const r="Masonry-style variable height. Reorder, shuffle, and add/remove to see FLIP reflow.";return Array.from({length:Math.max(12,s)},(a,n)=>{const o=p(2,7),l=p(210,258);return{id:C(),title:`Card ${n+1}`,lines:o,hue:l,sat:p(70,92),light:p(46,62),body:Array.from({length:o},()=>r).join(" ")}})}function R(s){const r=s.slice();for(let a=r.length-1;a>0;a--){const n=p(0,a);[r[a],r[n]]=[r[n],r[a]]}return r}const I=s=>[...s,...y(1)];function E(s){if(s.length<=6)return s;const r=s.slice();return r.splice(p(0,r.length-1),1),r}function x(s){if(!s)return;const r=getComputedStyle(s),a=parseFloat(r.getPropertyValue("--row-size"))||parseFloat(r.gridAutoRows),n=parseFloat(r.rowGap||r.gap||0);if(!a)return;s.querySelectorAll(".tile").forEach(l=>{const h=l.querySelector(".tileInner");if(!h)return;const v=h.getBoundingClientRect().height,u=Math.max(1,Math.ceil((v+n)/(a+n)));l.style.gridRowEnd=`span ${u}`,l.style.setProperty("--computed-span",u)})}function F(){const[s,r]=d.useState(()=>y(14)),[a,n]=d.useState("none"),o=d.useRef(null),l=d.useMemo(()=>{const t=s.slice();switch(a){case"tall":t.sort((i,c)=>c.lines-i.lines);break;case"short":t.sort((i,c)=>i.lines-c.lines);break;case"alpha":t.sort((i,c)=>i.title.localeCompare(c.title));break}return t},[s,a]);d.useLayoutEffect(()=>{const t=requestAnimationFrame(()=>x(o.current));return()=>cancelAnimationFrame(t)},[l.length,a]),d.useEffect(()=>{const t=o.current;if(!t)return;const i=()=>x(t);window.addEventListener("resize",i,{passive:!0});const c=new ResizeObserver(()=>x(t));return t.querySelectorAll(".tile .tileInner").forEach(b=>c.observe(b)),()=>{window.removeEventListener("resize",i),c.disconnect()}},[]);const h=()=>r(t=>R(t)),v=()=>r(t=>I(t)),u=()=>r(t=>E(t));return e.jsx(w,{reducedMotion:"never",children:e.jsxs(m.Wrapper,{children:[e.jsxs(m.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Masonry Shuffle"}),e.jsxs("p",{className:"muted",children:["True masonry: cards measure themselves via ",e.jsx("code",{children:"ResizeObserver"})," and set exact ",e.jsx("code",{children:"grid-row-end"})," spans. No more awkward holes."]})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Masonry controls",children:[e.jsx("button",{className:"btn",onClick:h,title:"Shuffle",children:"Shuffle"}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Sort"}),e.jsxs("select",{value:a,onChange:t=>n(t.target.value),children:[e.jsx("option",{value:"none",children:"None"}),e.jsx("option",{value:"tall",children:"Tall → Short"}),e.jsx("option",{value:"short",children:"Short → Tall"}),e.jsx("option",{value:"alpha",children:"A → Z"})]})]}),e.jsx("div",{className:"sep"}),e.jsx("button",{className:"btn ghost",onClick:v,title:"Add one",children:"Add"}),e.jsx("button",{className:"btn ghost",onClick:u,title:"Remove one",children:"Remove"})]})]}),e.jsx(m.Stage,{children:e.jsx(f.div,{className:"masonry",layout:!0,ref:o,children:e.jsx(j,{initial:!1,children:l.map(t=>e.jsx(f.article,{className:"tile",layout:!0,layoutId:t.id,style:{"--tile-hue":t.hue,"--tile-sat":`${t.sat}%`,"--tile-light":`${t.light}%`},initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.92,transition:{duration:.18}},transition:{layout:{type:"spring",stiffness:420,damping:38,mass:.8}},onLayoutAnimationComplete:()=>x(o.current),children:e.jsxs("div",{className:"tileInner",children:[e.jsxs("header",{className:"tHead",children:[e.jsx("span",{className:"kicker",children:"Card"}),e.jsx("h3",{children:t.title})]}),e.jsx("p",{className:"body",children:t.body}),e.jsxs("ul",{className:"meta",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Lines:"})," ",t.lines]}),e.jsxs("li",{children:[e.jsx("b",{children:"Span:"})," ",e.jsx("code",{style:{opacity:.8},children:"var(--computed-span)"})]})]})]})},t.id))})})}),e.jsxs(m.Notes,{children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Exact spans = ",e.jsx("code",{children:"ceil((contentHeight + gap) / (row + gap))"}),"."]}),e.jsx("li",{children:"Measured on mount, layout animation complete, and on content/window resize."}),e.jsxs("li",{children:[e.jsx("code",{children:"grid-auto-flow: dense"})," still helps pack small leftovers."]})]})]})]})})}export{F as default};
