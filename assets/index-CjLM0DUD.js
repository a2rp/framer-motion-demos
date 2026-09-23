import{d as m,r as i,j as e,A as E}from"./index-D8yAWZ_T.js";import{M as _,m as d}from"./proxy-DfzdIqFN.js";const q=m.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1100px;
    margin: 0 auto;
    color: var(--text);
`,D=m.header`
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
        min-width: 100px;
        height: 34px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 8px;
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
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn.subtle {
        background: var(--card);
        opacity: 0.9;
    }
    .btn:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }

    .sep {
        width: 1px;
        height: 28px;
        background: var(--border);
    }
`,Q=m.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    padding: var(--space-6);
    min-height: 380px;

    /* Y grid */
    .gridY {
        position: absolute;
        inset: var(--space-6) var(--space-6) var(--space-10, 72px)
            var(--space-6);
        display: grid;
        grid-template-rows: repeat(5, 1fr);
        pointer-events: none;
    }
    .gridY .line {
        border-top: 1px dashed
            color-mix(in oklab, var(--border) 80%, transparent);
    }

    .bars {
        position: relative;
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
        gap: 18px;
        align-items: end;
        height: 100%;
        padding-bottom: 56px; /* space for labels */
    }

    .barWrap {
        display: grid;
        grid-template-rows: 1fr auto;
        align-items: end;
        min-width: 22px;
    }

    .bar {
        position: relative;
        height: 100%;
        transform-origin: bottom;
        border-radius: 10px 10px 0 0;
        background: linear-gradient(
            180deg,
            hsl(var(--hue, 210) 90% 62% / 0.85),
            hsl(var(--hue, 210) 90% 56% / 0.85)
        );
        filter: saturate(1.05);
        /* mask creates “grow from baseline” look without stretching gradients weirdly */
        -webkit-mask: linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        padding-top: calc(
            100% - var(--h)
        ); /* top padding “reveals” the fill to desired height */
    }

    .barFill {
        width: 100%;
        height: 100%;
        border-radius: 10px 10px 0 0;
        box-shadow: inset 0 8px 14px hsl(0 0% 100% / 0.12),
            inset 0 -4px 10px hsl(0 0% 0% / 0.15);
    }

    .bar:hover {
        box-shadow: 0 12px 30px hsl(0 0% 0% / 0.18);
    }

    .barLabel {
        text-align: center;
        margin-top: 8px;
        color: var(--text-muted);
        font-weight: 600;
        letter-spacing: 0.2px;
    }

    /* Tooltip */
    .tooltip {
        position: absolute;
        translate: -50% -120%;
        padding: 8px 10px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        pointer-events: none;
        min-width: 44px;
        text-align: center;
        z-index: 2;
    }
    .tooltip .tLabel {
        font-size: 11px;
        color: var(--text-muted);
    }
    .tooltip .tValue {
        font-weight: 700;
    }

    @media (width < 640px) {
        padding: var(--space-4);
        .bars {
            gap: 12px;
            padding-bottom: 48px;
        }
    }
`,J=m.aside`
    color: var(--text-muted);
    h3 {
        color: var(--text);
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
    }
`,K=m.div`
    position: fixed;
    inset: 0;
    z-index: 50;
    background: color-mix(in oklab, var(--bg) 40%, #0000);
    backdrop-filter: blur(8px) saturate(1.1);
    display: grid;
    place-items: center;
    padding: var(--space-6);

    .modal {
        width: min(520px, 96vw);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        overflow: hidden;
        display: grid;
        gap: 0;
    }
    .mHead,
    .mFoot {
        padding: 14px 16px;
        border-bottom: 1px solid var(--border);
    }
    .mFoot {
        border-bottom: none;
        border-top: 1px solid var(--border);
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
    .mBody {
        padding: 16px;
        display: grid;
        gap: 12px;
    }
    .mHead h3 {
        font-size: 18px;
    }

    .muted {
        color: var(--text-muted);
        margin-bottom: 10px;
    }
    .details {
        margin-left: 18px;
        display: grid;
        gap: 6px;
    }

    .closeBtn {
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .closeBtn.ghost {
        background: var(--surface);
        color: var(--text);
    }

    /* Fields */
    .field {
        display: grid;
        gap: 6px;
    }
    .field > span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .field input {
        height: 36px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 10px;
        outline: none;
    }
    .field input[aria-invalid="true"] {
        border-color: hsl(0 80% 55%);
        box-shadow: 0 0 0 3px hsl(0 80% 55% / 0.15);
    }
    .field .err {
        color: hsl(0 80% 70%);
        font-style: normal;
        font-size: 12px;
    }

    .passWrap {
        position: relative;
    }
    .eyeBtn {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 40px;
        border: none;
        background: transparent;
        color: var(--text);
        display: grid;
        place-items: center;
        cursor: pointer;
    }
`,g={Wrapper:q,Header:D,Stage:Q,Notes:J},v=(r,s,o)=>Math.min(o,Math.max(s,r)),S=(r,s)=>Math.floor(Math.random()*(s-r+1))+r,H=(()=>{let r=0;return()=>`bar-${++r}`})(),f="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");function k(r=7){const s=v(r,5,16);return Array.from({length:s},(o,n)=>({id:H(),label:f[n%f.length],value:S(10,100)}))}function U(r){const s=r.map(o=>o.value).sort(()=>Math.random()-.5);return r.map((o,n)=>({...o,value:s[n]}))}function se(){const[r,s]=i.useState(()=>k(7)),[o,n]=i.useState(7),[c,p]=i.useState(null),[Y,y]=i.useState(!1),[w,C]=i.useState(""),[x,B]=i.useState(""),[j,M]=i.useState(!1),[l,z]=i.useState({}),F=i.useMemo(()=>Math.max(...r.map(a=>a.value),1),[r]);i.useEffect(()=>{const a=()=>p(null);return window.addEventListener("resize",a,{passive:!0}),()=>window.removeEventListener("resize",a)},[]);const P=()=>s(a=>a.map(t=>({...t,value:S(10,100)}))),W=()=>s(a=>U(a)),Z=()=>{n(7),s(k(7)),p(null)},V=a=>{const t=v(parseInt(a.target.value||"7",10),5,16);n(t),s(k(t)),p(null)},$=()=>{s(a=>{if(a.length>=16)return a;const t=a.length;return[...a,{id:H(),label:f[t%f.length],value:S(10,100)}]}),n(a=>v(a+1,5,16))},I=()=>{s(a=>a.length<=5?a:a.slice(0,-1)),n(a=>v(a-1,5,16))},R=i.useRef(null),N=(a,t)=>{var b;const h=(b=R.current)==null?void 0:b.getBoundingClientRect();h&&p({id:t.id,x:a.clientX-h.left,y:a.clientY-h.top,value:t.value,label:t.label})},O=N,L=()=>p(null),T=()=>y(!0),G=()=>{y(!1),z({})},X=()=>{const a={};return w.trim()||(a.name="Chart name is required."),x&&x.length<6&&(a.pwd="Password must be at least 6 characters."),z(a),Object.keys(a).length===0},A=a=>{a.preventDefault(),X()&&(y(!1),setTimeout(()=>{alert(`Shared "${w}" ${x?"(protected)":""}`),C(""),B(""),M(!1)},0))};return e.jsx(_,{reducedMotion:"never",children:e.jsxs(g.Wrapper,{children:[e.jsxs(g.Header,{as:d.header,initial:{opacity:0,y:-8},animate:{opacity:1,y:0,transition:{duration:.35}},children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Bar Chart - Grow from Baseline"}),e.jsx("p",{className:"muted",children:"Bars rise from the baseline with subtle spring timing. Hover to inspect values."})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Chart controls",children:[e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Bars"}),e.jsx("select",{value:o,onChange:V,"aria-label":"Bars count",children:Array.from({length:12},(a,t)=>5+t).map(a=>e.jsx("option",{value:a,children:a},a))})]}),e.jsx("button",{className:"btn",onClick:P,title:"Randomize values",children:"Randomize"}),e.jsx("button",{className:"btn",onClick:W,title:"Shuffle values",children:"Shuffle"}),e.jsx("div",{className:"sep"}),e.jsx("button",{className:"btn ghost",onClick:$,disabled:r.length>=16,title:"Add bar",children:"Add"}),e.jsx("button",{className:"btn ghost",onClick:I,disabled:r.length<=5,title:"Remove bar",children:"Remove"}),e.jsx("div",{className:"sep"}),e.jsx("button",{className:"btn primary",onClick:T,title:"Share chart",children:"Share"}),e.jsx("button",{className:"btn subtle",onClick:Z,title:"Reset",children:"Reset"})]})]}),e.jsxs(g.Stage,{ref:R,children:[e.jsx("div",{className:"gridY","aria-hidden":!0,children:Array.from({length:5}).map((a,t)=>e.jsx("div",{className:"line"},t))}),e.jsx("div",{className:"bars",children:r.map((a,t)=>{const h=a.value/F*100,b=210+t*16%120;return e.jsxs("div",{className:"barWrap",children:[e.jsx(d.div,{className:"bar",style:{"--h":`${h}%`,"--hue":b},initial:{scaleY:0,transformOrigin:"bottom"},animate:{scaleY:1,transition:{type:"spring",stiffness:260,damping:30,mass:.8}},whileHover:{scaleX:.96},onMouseEnter:u=>N(u,a),onMouseMove:u=>O(u,a),onMouseLeave:L,tabIndex:0,onFocus:u=>N(u,a),onBlur:L,"aria-label":`${a.label} value ${a.value}`,children:e.jsx(d.div,{className:"barFill",layout:!0})}),e.jsx("div",{className:"barLabel","aria-hidden":!0,children:a.label})]},a.id)})}),e.jsx(E,{children:c&&e.jsxs(d.div,{className:"tooltip",initial:{opacity:0,y:6,scale:.98},animate:{opacity:1,y:0,scale:1,transition:{duration:.18}},exit:{opacity:0,y:6,transition:{duration:.14}},style:{left:c.x,top:c.y},role:"status",children:[e.jsx("div",{className:"tLabel",children:c.label}),e.jsx("div",{className:"tValue",children:c.value})]},c.id)})]}),e.jsxs(g.Notes,{as:d.aside,initial:{opacity:0,y:6},animate:{opacity:1,y:0,transition:{duration:.3}},children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Bars use transform-only animation (scaleY from bottom) for crisp edges."}),e.jsx("li",{children:"Hover scales each bar slightly and shows a motion tooltip."}),e.jsx("li",{children:"Controls ensure 5–16 bars; reset brings back the default dataset."})]})]}),e.jsx(E,{children:Y&&e.jsx(K,{as:d.div,initial:{opacity:0},animate:{opacity:1,transition:{duration:.15}},exit:{opacity:0,transition:{duration:.12}},role:"dialog","aria-modal":"true","aria-labelledby":"share-title",children:e.jsxs(d.div,{className:"modal",initial:{y:12,opacity:0,scale:.98},animate:{y:0,opacity:1,scale:1,transition:{type:"spring",stiffness:320,damping:26}},exit:{y:8,opacity:0,transition:{duration:.12}},children:[e.jsxs("div",{className:"mHead",children:[e.jsx("h3",{id:"share-title",children:"Share chart"}),e.jsx("p",{className:"muted",children:"Name your chart and optionally protect it with a password."})]}),e.jsxs("form",{className:"mBody",onSubmit:A,noValidate:!0,children:[e.jsxs("label",{className:"field",children:[e.jsx("span",{children:"Chart name"}),e.jsx("input",{type:"text",value:w,onChange:a=>C(a.target.value),placeholder:"Q3 – Sales by Region","aria-invalid":!!l.name,"aria-describedby":l.name?"err-name":void 0,required:!0}),l.name&&e.jsx("em",{id:"err-name",className:"err",children:l.name})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{children:"Password (optional)"}),e.jsxs("div",{className:"passWrap",children:[e.jsx("input",{type:j?"text":"password",value:x,onChange:a=>B(a.target.value),placeholder:"Minimum 6 characters","aria-invalid":!!l.pwd,"aria-describedby":l.pwd?"err-pwd":void 0}),e.jsx("button",{type:"button",className:"eyeBtn","aria-label":j?"Hide password":"Show password",onClick:()=>M(a=>!a),children:j?e.jsx(ae,{}):e.jsx(ee,{})})]}),l.pwd&&e.jsx("em",{id:"err-pwd",className:"err",children:l.pwd})]})]}),e.jsxs("div",{className:"mFoot",children:[e.jsx("button",{className:"closeBtn ghost",type:"button",onClick:G,children:"Cancel"}),e.jsx("button",{className:"closeBtn",type:"button",onClick:A,children:"Share"})]})]})},"share")})]})})}function ee(r){return e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",...r,children:e.jsx("path",{fill:"currentColor",d:"M12 5c5.523 0 9.75 4.77 9.75 7s-4.227 7-9.75 7S2.25 14.23 2.25 12 6.477 5 12 5Zm0 2C7.86 7 4.75 10.28 4.75 12S7.86 17 12 17s7.25-3.28 7.25-5S16.14 7 12 7Zm0 2.25A2.75 2.75 0 1 1 9.25 12 2.75 2.75 0 0 1 12 9.25Z"})})}function ae(r){return e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",...r,children:e.jsx("path",{fill:"currentColor",d:"M3.28 2.22 21.78 20.7l-1.06 1.06-2.26-2.26A12.72 12.72 0 0 1 12 19c-6 0-9.75-5-9.75-7 0-1.16 1.27-3.03 3.35-4.62L2.22 3.28 3.28 2.22Zm4.2 5.26L8.9 8.9a2.75 2.75 0 0 0 3.19 3.19l1.43 1.43A4.25 4.25 0 0 1 7.5 9.25ZM12 7c4.14 0 7.25 3.28 7.25 5 0 .65-.45 1.7-1.45 2.82l-1.1-1.1c.55-.52.8-1.04.8-1.72 0-1.72-3.11-5-7.25-5-.8 0-1.57.1-2.31.3L6.5 6.29C8.13 5.98 10.03 5.8 12 5.8Z"})})}export{se as default};
