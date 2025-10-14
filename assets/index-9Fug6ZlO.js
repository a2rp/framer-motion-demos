import{d as s,r as a,j as e}from"./index-BybwJ5J0.js";import{m as S}from"./pages-CvVyMsYv.js";import{u as y}from"./use-animation-DuZ2qaqi.js";import{M as P,m as c}from"./proxy-CWA0aJAx.js";const C=s.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);

    @media (width < 560px) {
        padding: var(--space-4);
    }
`,M=s.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-4);
    justify-content: space-between;
`,T=s.div`
    h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`,A=s.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: var(--space-4);
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
`,z=s.section`
    position: relative;
    isolation: isolate;
    min-height: 320px;
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

    .page {
        position: relative;
        z-index: 1;
        padding: var(--space-6);
        height: 100%;
        display: grid;
    }

    .card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        padding: var(--space-6);
        height: 100%;
        overflow: auto;
    }

    .head {
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

    @media (width < 560px) {
        .page {
            padding: var(--space-4);
        }
        .card {
            padding: var(--space-4);
        }
    }
`,E=s.div`
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none; /* keep UI responsive, we disable buttons while animating */

    .half {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 50%;
        will-change: transform, opacity;
        backface-visibility: hidden;
        transform: translateZ(0);

        /* Brand gradient so it feels “physical” */
        background: linear-gradient(135deg, hsl(210 90% 56%), hsl(210 90% 62%));
        box-shadow: 0 0 0 1px hsl(0 0% 100% / 0.05) inset;
    }

    .left {
        left: 0;
        border-right: 1px solid var(--border);
    }
    .right {
        right: 0;
        border-left: 1px solid var(--border);
    }

    .seam {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 1px;
        transform: translateX(-0.5px);
        background: hsl(0 0% 0% / 0.25);
        mix-blend-mode: multiply;
        pointer-events: none;
    }
`,I=s.aside`
    color: var(--text-muted);
    ul {
        padding-left: 18px;
    }
`,R=[{key:"sp1",title:"Split Transition",body:"Two panels meet to cover, content swaps, then they split outward to reveal. A bold, cinematic transition—use to punctuate section changes.",bullets:["Cover → swap → reveal (sequenced)","Transform-only for crisp edges","Disable inputs during the split"]},{key:"sp2",title:"Design Notes",body:"Reserve for major transitions (e.g., workspace switch, section gateway). Smaller contexts should use subtler motion.",bullets:["Keep durations short","Use the brand color","Mind contrast in both themes"]},{key:"sp3",title:"Implementation",body:"We drive the two halves with independent animation controls. Midpoint callback swaps the page under full cover.",bullets:["useAnimationControls()","Promise.all sequencing","Pointer-events: none on overlay"]}],p=S(R,5);function U(){const[t,i]=a.useState(0),[r,n]=a.useState(!1),[D,j]=a.useState(1),l=y(),d=y(),h=a.useRef(null),m=p[t],x=t>0,u=t<p.length-1,v=a.useMemo(()=>({duration:.22,ease:[.22,1,.36,1]}),[]),g=a.useMemo(()=>({duration:.28,ease:[.22,1,.36,1]}),[]),w=a.useMemo(()=>({type:"spring",stiffness:260,damping:26,mass:.9}),[]);async function b(f,o){r||(n(!0),j(o),h.current=f,await Promise.all([l.start({x:"0%",transition:v}),d.start({x:"0%",transition:v})]),i(h.current),await Promise.all([l.start({x:"-100%",transition:g}),d.start({x:"100%",transition:g})]),n(!1))}const k=()=>{x&&b(t-1,-1)},N=()=>{u&&b(t+1,1)};return e.jsx(P,{reducedMotion:"never",children:e.jsxs(C,{children:[e.jsxs(M,{children:[e.jsxs(T,{children:[e.jsx("h1",{children:"Split Transition"}),e.jsx("p",{className:"muted",children:"Panels meet, swap content, then split outward. Bold and fast."})]}),e.jsxs(A,{role:"toolbar","aria-label":"Split controls",children:[e.jsx("button",{className:"btn",onClick:k,disabled:!x||r,title:"Previous",children:"← Prev"}),e.jsx("div",{className:"dots","aria-hidden":!0,children:p.map((f,o)=>e.jsx("span",{className:`dot ${o===t?"active":""}`},o))}),e.jsx("button",{className:"btn primary",onClick:N,disabled:!u||r,title:"Next",children:"Next →"})]})]}),e.jsxs(z,{"aria-live":"polite",children:[e.jsx(c.article,{className:"page",initial:{opacity:0,y:8,scale:.995},animate:{opacity:1,y:0,scale:1,transition:w},children:e.jsx(q,{page:m})},m.id),e.jsxs(E,{"aria-hidden":"true",children:[e.jsx(c.div,{className:"half left",initial:{x:"-100%"},animate:l}),e.jsx(c.div,{className:"half right",initial:{x:"100%"},animate:d}),e.jsx("div",{className:"seam"})]})]}),e.jsxs(I,{children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Sequence: ",e.jsx("b",{children:"cover"})," → swap → ",e.jsx("b",{children:"reveal"})," with two animation controls."]}),e.jsxs("li",{children:["Overlay has ",e.jsx("code",{children:"pointer-events: none"}),"; inputs are disabled while animating."]}),e.jsx("li",{children:"Keep brand color in halves; seam adds a physical snap at center."})]})]})]})})}function q({page:t}){var i;return e.jsxs("div",{className:"card",children:[e.jsxs("header",{className:"head",children:[e.jsx("span",{className:"kicker",children:"Active"}),e.jsx("h2",{children:t.title})]}),e.jsx("p",{className:"body",children:t.body}),e.jsx("ul",{className:"bullets",children:(i=t.bullets)==null?void 0:i.map((r,n)=>e.jsx("li",{children:r},n))})]})}export{U as default};
