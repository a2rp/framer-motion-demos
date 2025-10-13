import{d as r,r as s,j as e,A as z}from"./index-D8c9fCIL.js";import{m as M}from"./pages-CvVyMsYv.js";import{M as R,m as T}from"./proxy-Cy2a_Fiw.js";const I=r.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);

    @media (width < 560px) {
        padding: var(--space-4);
    }
`,B=r.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-4);
    justify-content: space-between;
`,W=r.div`
    h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`,G=r.div`
    display: grid;
    grid-template-columns: auto 1fr auto auto auto auto auto;
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
    .btn.ghost {
        background: var(--surface);
    }
    .btn:disabled {
        opacity: 0.45;
        cursor: not-allowed;
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
    .ctrl select {
        min-width: 140px;
        height: 34px;
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

    @media (width < 900px) {
        grid-template-columns: 1fr 1fr;
        .spacer {
            display: none;
        }
    }
`,L=r.div`
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
`,O=r.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
`,U=r.div`
    position: relative;
    isolation: isolate;
    min-height: 320px;
    perspective-origin: 50% 40%;
`,K=r.aside`
    color: var(--text-muted);
    h3 {
        color: var(--text);
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
    }
`,_=r.div`
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    height: 100%;
    overflow: auto;

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
`;r.article`
    position: absolute;
    inset: 0;
    z-index: 2;
    display: grid;
    place-items: stretch;
    padding: var(--space-6);
    will-change: transform, opacity;
    backface-visibility: hidden;

    @media (width < 560px) {
        padding: var(--space-4);
    }
`;const a={Wrapper:I,Header:B,Heading:W,Controls:G,Dots:L,Stage:O,Scene:U,Card:_,Notes:K},q=[{key:"ds1",title:"Door Swing",body:"Page swings on a hinge using rotateY with scene perspective. Great for detail flows, story screens, or places you want a tactile 'open' feel.",bullets:["Uses perspective on the scene","Transform origin = hinge","Enter/Exit rotateY"]},{key:"ds2",title:"Design Notes",body:"Keep angles modest (55–75°). Bigger angles feel gimmicky and can cause perspective warping.",bullets:["Angle ~70° sweet spot","Short/firm spring","Consider a subtle shadow/edge"]},{key:"ds3",title:"Implementation",body:"We use AnimatePresence with mode='wait' so exit finishes before enter—no flicker. Hinge is controlled by transform-origin.",bullets:["mode='wait' for clean swaps","Only transforms/opacity","Backface hidden"]}],g=M(q,5);function V(){var f;const[i,h]=s.useState(0),[d,m]=s.useState(1),[o,j]=s.useState("left"),[n,y]=s.useState(70),[p,w]=s.useState(1e3),[k,N]=s.useState(0),u=s.useRef(null),c=g[i],v=i>0,b=i<g.length-1,S=()=>{v&&(u.current=i,m(-1),h(t=>t-1))},C=()=>{b&&(u.current=i,m(1),h(t=>t+1))},P=()=>N(t=>t+1),H=s.useMemo(()=>({type:"spring",stiffness:280,damping:28,mass:.9}),[]),A=s.useMemo(()=>({duration:.24,ease:[.22,1,.36,1]}),[]),x=o==="left"?-1:1,D=`${o} center`,E=t=>({rotateY:x*n,opacity:.7,x:t>0?20:-20,scale:.995}),Y={rotateY:0,opacity:1,x:0,scale:1,transition:H},$=t=>({rotateY:-x*n*.8,opacity:0,x:t>0?-12:12,transition:A});return e.jsx(R,{reducedMotion:"never",children:e.jsxs(a.Wrapper,{children:[e.jsxs(a.Header,{children:[e.jsxs(a.Heading,{children:[e.jsx("h1",{children:"Door Swing"}),e.jsx("p",{className:"muted",children:"Hinge on left/right, rotateY into view with perspective. Subtle and tactile."})]}),e.jsxs(a.Controls,{role:"toolbar","aria-label":"Door Swing controls",children:[e.jsx("button",{className:"btn",onClick:S,disabled:!v,title:"Previous",children:"← Prev"}),e.jsx(a.Dots,{"aria-hidden":!0,children:g.map((t,l)=>e.jsx("span",{className:`dot ${l===i?"active":""}`},l))}),e.jsx("button",{className:"btn primary",onClick:C,disabled:!b,title:"Next",children:"Next →"}),e.jsx("span",{className:"spacer"}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Hinge"}),e.jsxs("select",{value:o,onChange:t=>j(t.target.value),children:[e.jsx("option",{value:"left",children:"Left"}),e.jsx("option",{value:"right",children:"Right"})]})]}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Angle"}),e.jsx("input",{type:"range",min:"40",max:"85",step:"1",value:n,onChange:t=>y(parseInt(t.target.value,10))}),e.jsxs("em",{children:[n,"°"]})]}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Perspective"}),e.jsx("input",{type:"range",min:"600",max:"1500",step:"50",value:p,onChange:t=>w(parseInt(t.target.value,10))}),e.jsxs("em",{children:[p,"px"]})]}),e.jsx("button",{className:"btn ghost",onClick:P,title:"Replay animation",children:"Replay"})]})]}),e.jsx(a.Stage,{children:e.jsx(a.Scene,{style:{perspective:`${p}px`},children:e.jsx(z,{mode:"wait",initial:!1,custom:{dir:d,sign:x,angle:n},children:e.jsx(T.article,{className:"ds-page",initial:E(d),animate:Y,exit:$(d),style:{transformOrigin:D},children:e.jsxs(a.Card,{children:[e.jsxs("header",{className:"cardHead",children:[e.jsx("span",{className:"kicker",children:"Active"}),e.jsx("h2",{children:c.title})]}),e.jsx("p",{className:"body",children:c.body}),e.jsx("ul",{className:"bullets",children:(f=c.bullets)==null?void 0:f.map((t,l)=>e.jsx("li",{children:t},l))})]})},`${c.id}-${o}-${n}-${k}`)})})}),e.jsxs(a.Notes,{children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("b",{children:"transform-origin"})," to set the hinge (",e.jsx("code",{children:"left center"})," / ",e.jsx("code",{children:"right center"}),")."]}),e.jsxs("li",{children:["Scene sets ",e.jsx("code",{children:"perspective"}),"; child rotates on ",e.jsx("code",{children:"Y"})," with ",e.jsx("code",{children:"backface-visibility: hidden"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:'mode="wait"'})," ensures exit completes before enter to avoid flicker."]})]})]})]})})}export{V as default};
