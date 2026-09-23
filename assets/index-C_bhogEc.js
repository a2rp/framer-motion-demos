import{d as t,r as c,j as e}from"./index-D8yAWZ_T.js";import{m as f}from"./pages-CvVyMsYv.js";import{m as l,M as k}from"./proxy-DfzdIqFN.js";import{L as w}from"./index-Aw2nujL2.js";const N=t.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1100px;
    margin: 0 auto;
    color: var(--text);
`,T=t.header`
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
`,S=t.div`
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
`,C=t.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-6);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);

    @media (width < 860px) {
        grid-template-columns: 1fr;
    }
`,G=t.div`
    display: grid;
    align-content: start;
    gap: var(--space-4);
`,H=t.h2`
    font-size: 14px;
    color: var(--text-muted);
`,I=t.aside`
    color: var(--text-muted);
    ul {
        padding-left: 18px;
    }
`;t.div``;const P=`
.heroCard {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.heroArt {
  height: 140px;
  background-size: cover;
  background-position: center;
}

.heroText {
  padding: var(--space-4);
}
.heroText .kicker {
  text-transform: uppercase;
  letter-spacing: .08em;
  font-size: 11px;
  color: var(--text-muted);
}
.heroText h2 { font-size: 20px; }

.slot {
  height: 140px;
  border: 1px dashed var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
  opacity: .6;
}

.detail {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: var(--space-4);
}

.cardHead {
  display: grid; gap: 6px; margin-bottom: var(--space-3);
}

.cardHead .kicker {
  text-transform: uppercase;
  letter-spacing: .08em;
  font-size: 11px;
  color: var(--text-muted);
}

.detail .body { color: var(--text); margin-bottom: var(--space-3); }
.detail .bullets { color: var(--text); display: grid; gap: 6px; margin-left: 18px; }

/* Thumbs */
.thumbGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-3);
}
.thumb {
  height: 56px;
  border-radius: var(--radius-md);
  background:
    linear-gradient(135deg, hsl(210 90% 56% / .14), hsl(210 90% 62% / .08));
  border: 1px solid var(--border);
}
`;t.div`
    ${P}
`;const a={Wrapper:N,Header:T,Controls:S,Stage:C,Column:G,SectionTitle:H,Notes:I},A=[{key:"ht1",title:"Hero Teleport",body:"A shared-element transition where a hero moves between layouts using a common layoutId. Great for list→detail, dashboard→panel, or card→header morphs.",bullets:["One element, two places-Framer reconciles the geometry","No manual tweening-just consistent layoutId + layout containers","Works across nested trees inside a LayoutGroup"]},{key:"ht2",title:"Design Notes",body:"Use sparingly; it draws the eye. Keep motion short and the geometry change understandable.",bullets:["Prefer simple shapes","Avoid huge aspect jumps","Mind focus order & a11y"]},{key:"ht3",title:"Implementation",body:"Place the hero in one of multiple containers. On state change, render it in the new parent with the same layoutId.",bullets:["Wrap in <LayoutGroup>","Mark containers with layout","Give hero a stable layoutId"]}],h=f(A,5);function M(r){const o=[210,265,18,140,332,190,42],s=o[r%o.length];return`linear-gradient(135deg, hsl(${s} 90% 56%), hsl(${(s+24)%360} 90% 62%))`}function $(){var g;const[r,o]=c.useState(0),s=c.useRef(0),i=h[r],p=r>0,u=r<h.length-1,v=()=>{p&&(s.current=r,o(d=>d-1))},y=()=>{u&&(s.current=r,o(d=>d+1))},m=r%2===0?"left":"right",j=c.useMemo(()=>({type:"spring",stiffness:600,damping:50,mass:.8}),[]),x=e.jsxs(l.div,{layoutId:"hero",className:"heroCard",transition:j,layout:!0,children:[e.jsx("div",{className:"heroArt",style:{backgroundImage:M(r)}}),e.jsxs("div",{className:"heroText",children:[e.jsx("span",{className:"kicker",children:"Featured"}),e.jsx("h2",{children:i.title})]})]});return e.jsx(k,{reducedMotion:"never",children:e.jsx(w,{id:"hero-teleport",children:e.jsxs(a.Wrapper,{children:[e.jsxs(a.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Hero Teleport"}),e.jsxs("p",{className:"muted",children:["One hero, two places. The element morphs between containers via a shared ",e.jsx("code",{children:"layoutId"}),"."]})]}),e.jsxs(a.Controls,{role:"toolbar","aria-label":"HeroTeleport controls",children:[e.jsx("button",{className:"btn",onClick:v,disabled:!p,title:"Previous",children:"← Prev"}),e.jsx("div",{className:"dots","aria-hidden":!0,children:h.map((d,n)=>e.jsx("span",{className:`dot ${n===r?"active":""}`},n))}),e.jsx("button",{className:"btn primary",onClick:y,disabled:!u,title:"Next",children:"Next →"})]})]}),e.jsxs(a.Stage,{children:[e.jsxs(a.Column,{className:"left",as:l.div,layout:!0,children:[e.jsx(a.SectionTitle,{children:"Source"}),m==="left"?x:e.jsx(b,{}),e.jsx(z,{index:r})]}),e.jsxs(a.Column,{className:"right",as:l.div,layout:!0,children:[e.jsx(a.SectionTitle,{children:"Target"}),m==="right"?x:e.jsx(b,{}),e.jsxs(l.article,{className:"detail",layout:!0,children:[e.jsxs("header",{className:"cardHead",children:[e.jsx("span",{className:"kicker",children:"Active"}),e.jsx("h3",{children:i.title})]}),e.jsx("p",{className:"body",children:i.body}),e.jsx("ul",{className:"bullets",children:(g=i.bullets)==null?void 0:g.map((d,n)=>e.jsx("li",{children:d},n))})]})]})]}),e.jsxs(a.Notes,{children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Wrap both parents and the hero with ",e.jsx("code",{children:"<LayoutGroup>"}),"."]}),e.jsxs("li",{children:["Mark changing boxes with ",e.jsx("code",{children:"layout"})," so Framer measures before/after."]}),e.jsxs("li",{children:["Use a single, stable ",e.jsx("code",{children:"layoutId"})," (here: ",e.jsx("code",{children:'"hero"'}),")."]})]})]})]})})})}function b(){return e.jsx("div",{className:"slot","aria-hidden":!0})}function z({index:r}){return e.jsx("div",{className:"thumbGrid",children:Array.from({length:6}).map((o,s)=>e.jsx("div",{className:"thumb",style:{opacity:s===r%6?.85:.6}},s))})}export{$ as default};
