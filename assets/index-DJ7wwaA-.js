import{d as r,r as o,j as e,A as k}from"./index-CEdkCtCm.js";import{m as w}from"./pages-CvVyMsYv.js";import{M as N,m as P}from"./proxy-KaJM56Od.js";const S=r.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);
`,C=r.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-4);
    justify-content: space-between;
`,E=r.div`
    h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`,A=r.div`
    display: grid;
    grid-template-columns: auto 1fr auto auto auto;
    align-items: center;
    gap: var(--space-4);

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
    .btn.ghost {
        background: var(--surface);
    }
    .btn:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }
`,M=r.div`
    display: flex;
    justify-content: center;
    gap: 8px;

    .dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: var(--border);
    }
    .dot.active {
        background: var(--primary);
    }
`,H=r.section`
    position: relative;
    isolation: isolate;
    min-height: 320px;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    .ps-page {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: stretch;
        padding: var(--space-6);
        will-change: transform, opacity, filter;
        color: var(--text); /* 🔧 ensure text visible */
    }
`,D=r.article`
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    height: 100%;
    overflow: auto;
    color: var(--text); /* 🔧 explicit text color */

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
    }
    .bullets {
        margin-left: 18px;
        display: grid;
        gap: 6px;
    }

    @media (width < 560px) {
        padding: var(--space-4);
    }
`,O=r.aside`
    color: var(--text-muted);
    ul {
        padding-left: 18px;
    }
`,a={Wrapper:S,Header:C,Heading:E,Controls:A,Dots:M,Stage:H,Card:D,Notes:O},z=[{key:"ps1",title:"Pop & Settle",body:"A quick entrance that pops slightly above 1x scale, then settles—clean emphasis without chaos.",bullets:["Scale: 0.92 → 1.06 → 1.00","Micro y-nudge","Fast, tasteful timing"]},{key:"ps2",title:"Design Notes",body:"Use for first-time entrances or confirming focus changes. Keep overshoot tiny.",bullets:["Overshoot ≤ 1.06","Duration ~0.45–0.60s","Pairs well with crossfade"]},{key:"ps3",title:"Implementation",body:"Keyframes for scale & y create snap then settle. Exit does a quick fade + blur.",bullets:["Keyframes for scale/y","No layout thrash","Exit blur ~2px"]}],c=w(z,5);function $(){const[t,i]=o.useState(0),[n,l]=o.useState(0),d=c[t],p=t>0,u=t<c.length-1,m=()=>p&&i(s=>s-1),h=()=>u&&i(s=>s+1),b=()=>l(s=>s+1),g=o.useMemo(()=>({scale:{duration:.55,times:[0,.6,1],ease:[.2,.8,.2,1]},y:{duration:.55,times:[0,.6,1],ease:[.2,.8,.2,1]},opacity:{duration:.2,ease:"linear"},filter:{duration:.01}}),[]),v=o.useMemo(()=>({duration:.18,ease:"linear"}),[]),y={opacity:0,scale:.92,y:16,filter:"blur(0px)"},f={opacity:[0,1,1],scale:[.92,1.06,1],y:[16,-6,0],filter:["blur(0px)","blur(0px)","blur(0px)"],transition:g},j={opacity:0,scale:.98,y:-8,filter:"blur(2px)",transition:v};return e.jsx(N,{reducedMotion:"never",children:e.jsxs(a.Wrapper,{children:[e.jsxs(a.Header,{children:[e.jsxs(a.Heading,{children:[e.jsx("h1",{children:"Pop & Settle"}),e.jsx("p",{className:"muted",children:"Quick entrance with a tiny overshoot and gentle settle."})]}),e.jsxs(a.Controls,{role:"toolbar","aria-label":"Pop & Settle controls",children:[e.jsx("button",{className:"btn",onClick:m,disabled:!p,title:"Previous",children:"← Prev"}),e.jsx(a.Dots,{"aria-hidden":!0,children:c.map((s,x)=>e.jsx("span",{className:`dot ${x===t?"active":""}`},x))}),e.jsx("button",{className:"btn primary",onClick:h,disabled:!u,title:"Next",children:"Next →"}),e.jsx("span",{className:"spacer"}),e.jsx("button",{className:"btn ghost",onClick:b,title:"Replay",children:"Replay"})]})]}),e.jsx(a.Stage,{"aria-live":"polite",children:e.jsx(k,{mode:"wait",initial:!0,children:e.jsx(P.article,{className:"ps-page",initial:y,animate:f,exit:j,style:{transformOrigin:"50% 50%"},children:e.jsx(I,{page:d})},`${d.id}-${n}`)})}),e.jsxs(a.Notes,{children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Property-specific transitions ensure keyframes run reliably."}),e.jsx("li",{children:"Overshoot kept small for a premium feel."}),e.jsx("li",{children:"Exit fade + tiny blur avoids hard cuts."})]})]})]})})}function I({page:t}){var i;return e.jsxs(a.Card,{children:[e.jsxs("header",{className:"cardHead",children:[e.jsx("span",{className:"kicker",children:"Active"}),e.jsx("h2",{children:t.title})]}),e.jsx("p",{className:"body",children:t.body}),e.jsx("ul",{className:"bullets",children:(i=t.bullets)==null?void 0:i.map((n,l)=>e.jsx("li",{children:n},l))})]})}export{$ as default};
