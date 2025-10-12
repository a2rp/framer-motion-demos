import{r as o,u as N,L as y,j as e,d}from"./index-xwafa6jT.js";import{m as C}from"./pages-CvVyMsYv.js";import{f as T,m,M as G}from"./proxy-C2Zzruag.js";const I=o.createContext(null);function S(){const r=o.useRef(!1);return N(()=>(r.current=!0,()=>{r.current=!1}),[]),r}function M(){const r=S(),[t,s]=o.useState(0),a=o.useCallback(()=>{r.current&&s(t+1)},[t]);return[o.useCallback(()=>T.postRender(a),[a]),t]}const L=r=>!r.isLayoutDirty&&r.willUpdate(!1);function j(){const r=new Set,t=new WeakMap,s=()=>r.forEach(L);return{add:a=>{r.add(a),t.set(a,a.addEventListener("willUpdate",s))},remove:a=>{r.delete(a);const i=t.get(a);i&&(i(),t.delete(a)),s()},dirty:s}}const w=r=>r===!0,R=r=>w(r===!0)||r==="id",H=({children:r,id:t,inherit:s=!0})=>{const a=o.useContext(y),i=o.useContext(I),[p,x]=M(),u=o.useRef(null),l=a.id||i;u.current===null&&(R(s)&&l&&(t=t?l+"-"+t:l),u.current={id:t,group:w(s)&&a.group||j()});const g=o.useMemo(()=>({...u.current,forceRender:p}),[x]);return e.jsx(y.Provider,{value:g,children:r})},P=d.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1100px;
    margin: 0 auto;
    color: var(--text);
`,A=d.header`
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
`,E=d.div`
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
`,F=d.div`
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
`,z=d.div`
    display: grid;
    align-content: start;
    gap: var(--space-4);
`,W=d.h2`
    font-size: 14px;
    color: var(--text-muted);
`,U=d.aside`
    color: var(--text-muted);
    ul {
        padding-left: 18px;
    }
`;d.div``;const $=`
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
`;d.div`
    ${$}
`;const n={Wrapper:P,Header:A,Controls:E,Stage:F,Column:z,SectionTitle:W,Notes:U},D=[{key:"ht1",title:"Hero Teleport",body:"A shared-element transition where a hero moves between layouts using a common layoutId. Great for list→detail, dashboard→panel, or card→header morphs.",bullets:["One element, two places—Framer reconciles the geometry","No manual tweening—just consistent layoutId + layout containers","Works across nested trees inside a LayoutGroup"]},{key:"ht2",title:"Design Notes",body:"Use sparingly; it draws the eye. Keep motion short and the geometry change understandable.",bullets:["Prefer simple shapes","Avoid huge aspect jumps","Mind focus order & a11y"]},{key:"ht3",title:"Implementation",body:"Place the hero in one of multiple containers. On state change, render it in the new parent with the same layoutId.",bullets:["Wrap in <LayoutGroup>","Mark containers with layout","Give hero a stable layoutId"]}],b=C(D,5);function O(r){const t=[210,265,18,140,332,190,42],s=t[r%t.length];return`linear-gradient(135deg, hsl(${s} 90% 56%), hsl(${(s+24)%360} 90% 62%))`}function J(){var f;const[r,t]=o.useState(0),s=o.useRef(0),a=b[r],i=r>0,p=r<b.length-1,x=()=>{i&&(s.current=r,t(c=>c-1))},u=()=>{p&&(s.current=r,t(c=>c+1))},l=r%2===0?"left":"right",g=o.useMemo(()=>({type:"spring",stiffness:600,damping:50,mass:.8}),[]),v=e.jsxs(m.div,{layoutId:"hero",className:"heroCard",transition:g,layout:!0,children:[e.jsx("div",{className:"heroArt",style:{backgroundImage:O(r)}}),e.jsxs("div",{className:"heroText",children:[e.jsx("span",{className:"kicker",children:"Featured"}),e.jsx("h2",{children:a.title})]})]});return e.jsx(G,{reducedMotion:"never",children:e.jsx(H,{id:"hero-teleport",children:e.jsxs(n.Wrapper,{children:[e.jsxs(n.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Hero Teleport"}),e.jsxs("p",{className:"muted",children:["One hero, two places. The element morphs between containers via a shared ",e.jsx("code",{children:"layoutId"}),"."]})]}),e.jsxs(n.Controls,{role:"toolbar","aria-label":"HeroTeleport controls",children:[e.jsx("button",{className:"btn",onClick:x,disabled:!i,title:"Previous",children:"← Prev"}),e.jsx("div",{className:"dots","aria-hidden":!0,children:b.map((c,h)=>e.jsx("span",{className:`dot ${h===r?"active":""}`},h))}),e.jsx("button",{className:"btn primary",onClick:u,disabled:!p,title:"Next",children:"Next →"})]})]}),e.jsxs(n.Stage,{children:[e.jsxs(n.Column,{className:"left",as:m.div,layout:!0,children:[e.jsx(n.SectionTitle,{children:"Source"}),l==="left"?v:e.jsx(k,{}),e.jsx(_,{index:r})]}),e.jsxs(n.Column,{className:"right",as:m.div,layout:!0,children:[e.jsx(n.SectionTitle,{children:"Target"}),l==="right"?v:e.jsx(k,{}),e.jsxs(m.article,{className:"detail",layout:!0,children:[e.jsxs("header",{className:"cardHead",children:[e.jsx("span",{className:"kicker",children:"Active"}),e.jsx("h3",{children:a.title})]}),e.jsx("p",{className:"body",children:a.body}),e.jsx("ul",{className:"bullets",children:(f=a.bullets)==null?void 0:f.map((c,h)=>e.jsx("li",{children:c},h))})]})]})]}),e.jsxs(n.Notes,{children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Wrap both parents and the hero with ",e.jsx("code",{children:"<LayoutGroup>"}),"."]}),e.jsxs("li",{children:["Mark changing boxes with ",e.jsx("code",{children:"layout"})," so Framer measures before/after."]}),e.jsxs("li",{children:["Use a single, stable ",e.jsx("code",{children:"layoutId"})," (here: ",e.jsx("code",{children:'"hero"'}),")."]})]})]})]})})})}function k(){return e.jsx("div",{className:"slot","aria-hidden":!0})}function _({index:r}){return e.jsx("div",{className:"thumbGrid",children:Array.from({length:6}).map((t,s)=>e.jsx("div",{className:"thumb",style:{opacity:s===r%6?.85:.6}},s))})}export{J as default};
