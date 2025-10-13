import{d as m,r as n,j as e}from"./index-D8c9fCIL.js";import{M as b,m as f}from"./proxy-Cy2a_Fiw.js";const j=m.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 900px;
    margin: 0 auto;
    color: var(--text);
`,y=m.header`
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
        display: flex;
        align-items: center;
        gap: var(--space-4);
        flex-wrap: wrap;
    }

    .btn,
    .ctrl select {
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

    .ctrl {
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        column-gap: 8px;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
        line-height: 1;
    }
    .ctrl select {
        min-width: 140px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 8px;
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

    .ctrl.inline {
        display: inline-grid;
        grid-template-columns: auto auto;
        gap: 6px;
        align-items: center;
    }
    .ctrl.inline input {
        width: 16px;
        height: 16px;
    }

    .sep {
        width: 1px;
        height: 34px;
        background: var(--border);
        align-self: center;
    }

    @media (width < 560px) {
        .sep {
            display: none;
        }
    }
`,w=m.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    padding: var(--space-6);
    display: grid;
    gap: var(--space-6);

    .ticker {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        font-variant-numeric: tabular-nums; /* monospaced digits */
        line-height: 1;
        padding: 10px 14px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        font-size: 38px;
    }

    /* One column (digit) */
    .col {
        position: relative;
        width: 26px; /* controls digit width */
        overflow: hidden;
    }
    .colTrack {
        position: relative;
    }
    .cell {
        display: grid;
        place-items: center;
        width: 100%;
    }

    .sepChar {
        opacity: 0.8;
        padding: 0 2px;
    }

    .raw {
        display: flex;
        align-items: center;
        gap: var(--space-4);
    }
    .label {
        color: var(--text-muted);
    }
    .numInput {
        width: 180px;
        height: 34px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 8px;
    }
`,N=m.aside`
    color: var(--text-muted);
    h3 {
        color: var(--text);
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
    }
`,x={Wrapper:j,Header:y,Stage:w,Notes:N};function k(s,{locale:r="en-IN",style:t="decimal",currency:d}={}){const o=new Intl.NumberFormat(r,{style:t,currency:d,maximumFractionDigits:2,minimumFractionDigits:0}).format(s),i=[];for(const p of o)/\d/.test(p)?i.push({type:"digit",value:p}):i.push({type:"sep",value:p});return i}function C({digit:s,rowH:r=46,transition:t}){const d=n.useMemo(()=>-Number(s)*r,[s,r]);return e.jsx("div",{className:"col",style:{height:r},children:e.jsx(f.div,{className:"colTrack",animate:{y:d},transition:t,style:{willChange:"transform"},children:Array.from({length:10},(l,o)=>e.jsx("div",{className:"cell",style:{height:r},children:o},o))})})}function I(){const[s,r]=n.useState(12345),[t,d]=n.useState(.55),[l,o]=n.useState("spring"),[i,p]=n.useState(!1),h=n.useMemo(()=>l==="spring"?{type:"spring",stiffness:320,damping:34,mass:.8}:{duration:t,ease:[.22,1,.36,1]},[l,t]),g=n.useMemo(()=>k(s,{style:i?"currency":"decimal",currency:"INR"}),[s,i]),c=a=>r(u=>u+a),v=()=>r(()=>Math.floor(Math.random()*9e6)+1e3);return e.jsx(b,{reducedMotion:"never",children:e.jsxs(x.Wrapper,{children:[e.jsxs(x.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Number Ticker"}),e.jsx("p",{className:"muted",children:"Digits scroll vertically; separators stay static. Great for KPIs, counters, and live dashboards."})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Ticker controls",children:[e.jsx("button",{className:"btn",onClick:()=>c(-1e3),children:"-1000"}),e.jsx("button",{className:"btn",onClick:()=>c(-100),children:"-100"}),e.jsx("button",{className:"btn",onClick:()=>c(-1),children:"-1"}),e.jsx("button",{className:"btn ghost",onClick:()=>c(1),children:"+1"}),e.jsx("button",{className:"btn ghost",onClick:()=>c(100),children:"+100"}),e.jsx("button",{className:"btn ghost",onClick:()=>c(1e3),children:"+1000"}),e.jsx("div",{className:"sep"}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Mode"}),e.jsxs("select",{value:l,onChange:a=>o(a.target.value),children:[e.jsx("option",{value:"spring",children:"Spring"}),e.jsx("option",{value:"tween",children:"Tween"})]})]}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Duration"}),e.jsx("input",{type:"range",min:"0.25",max:"1.2",step:"0.05",value:t,onChange:a=>d(parseFloat(a.target.value)),disabled:l!=="tween"}),e.jsxs("em",{children:[t.toFixed(2),"s"]})]}),e.jsxs("label",{className:"ctrl inline",children:[e.jsx("input",{type:"checkbox",checked:i,onChange:a=>p(a.target.checked)}),e.jsx("span",{children:"Currency (₹)"})]}),e.jsx("button",{className:"btn",onClick:v,children:"Random"})]})]}),e.jsxs(x.Stage,{children:[e.jsx("div",{className:"ticker","aria-live":"polite","aria-label":"Animated value",children:g.map((a,u)=>a.type==="digit"?e.jsx(C,{digit:a.value,rowH:46,transition:h},`d-${u}`):e.jsx("span",{className:"sepChar",children:a.value},`s-${u}`))}),e.jsxs("div",{className:"raw",children:[e.jsx("span",{className:"label",children:"Value:"}),e.jsx("input",{className:"numInput",type:"number",value:s,onChange:a=>r(Number(a.target.value||0))})]})]}),e.jsxs(x.Notes,{children:[e.jsx("h3",{children:"Tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"spring"})," for playful counters; ",e.jsx("code",{children:"tween"})," for KPI polish."]}),e.jsxs("li",{children:["Prefix/suffix (₹, %, k) can be static ",e.jsx("code",{children:"sep"})," nodes around digit columns."]}),e.jsx("li",{children:"Keep row height consistent across breakpoints for crisp motion."})]})]})]})})}export{I as default};
