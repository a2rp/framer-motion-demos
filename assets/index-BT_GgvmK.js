import{d as v,r as o,j as e,A as O}from"./index-B-21U0DQ.js";import{u as H}from"./use-scroll-YTw2CLgq.js";import{u as P}from"./use-spring-kVpEELvh.js";import{u as s}from"./use-transform-Cylj3xKs.js";import{M as W,m as d}from"./proxy-BihD2B5F.js";import"./use-motion-value-DG1npRlY.js";const q=v.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);
`,K=v.header`
    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`,L=v.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: color-mix(in oklab, var(--card) 92%, transparent);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    .scroller {
        max-height: min(72vh, 780px);
        overflow: auto;
        position: relative;
        scroll-behavior: smooth !important;
        /* Scrollbar that doesn’t shift layout */
        scrollbar-gutter: stable;
    }

    /* Sticky header that shrinks */
    .sticky {
        position: sticky;
        top: 0;
        z-index: 5;
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: var(--space-4);
        border-bottom: 1px solid var(--border);
        background: color-mix(in oklab, var(--card) 80%, transparent);
        /* Make backdrop filters pop on supporting browsers */
        -webkit-backdrop-filter: saturate(1.1);
        backdrop-filter: saturate(1.1);
    }

    .left {
        display: inline-grid;
        grid-auto-flow: column;
        align-items: center;
        gap: 10px;
    }
    .logoDot {
        width: 14px;
        height: 14px;
        border-radius: 99px;
        background: var(--primary);
        box-shadow: 0 0 0 3px
            color-mix(in oklab, var(--primary) 32%, transparent);
    }
    .title {
        font-weight: 700;
        letter-spacing: 0.2px;
        color: var(--text);
        line-height: 1.1;
    }

    .tabs {
        display: flex;
        align-items: center;
        gap: 2px;
        justify-content: center;
    }
    .tab {
        position: relative;
        border: none;
        background: transparent;
        color: var(--text-muted);
        padding: 10px 12px;
        border-radius: var(--radius-sm);
        cursor: pointer;
        font-weight: 600;
    }
    .tab:hover {
        color: var(--text);
    }
    .tab.active {
        color: var(--text);
    }
    .tab .underline {
        position: absolute;
        left: 8px;
        right: 8px;
        bottom: 6px;
        height: 2px;
        border-radius: 2px;
        background: var(--primary);
        box-shadow: 0 0 0 2px
            color-mix(in oklab, var(--primary) 22%, transparent);
    }

    .right {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .aboutBtn {
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        height: 34px;
        padding: 0 12px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }

    .content {
        padding: var(--space-6);
        display: grid;
        gap: var(--space-6);
        padding-top: 100px;
    }

    .block {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        padding: var(--space-6);
        color: var(--text);
    }
    .blockTitle {
        font-size: 18px;
        margin-bottom: var(--space-3);
        color: var(--text);
    }
    .block p {
        color: var(--text);
    }
    .block ul {
        margin-left: 18px;
        color: var(--text);
    }
    .callout {
        margin-top: var(--space-4);
        padding: var(--space-4);
        border: 1px dashed var(--border);
        background: color-mix(in oklab, var(--primary) 8%, var(--surface));
        border-radius: var(--radius-md);
    }

    /* ---- Modal ---- */
    .modalWrap {
        position: fixed;
        inset: 0;
        z-index: 30;
        display: grid;
        place-items: center;
    }
    .backdrop {
        position: absolute;
        inset: 0;
        background: hsl(0 0% 0% / 0.5);
        border: 0;
        padding: 0;
        margin: 0;
        cursor: default;
    }
    .modal {
        position: relative;
        width: min(560px, calc(100vw - 32px));
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-md);
        overflow: hidden;
    }
    .modal header,
    .modal footer,
    .modal .body {
        padding: var(--space-4) var(--space-6);
    }
    .modal header {
        border-bottom: 1px solid var(--border);
    }
    .modal footer {
        border-top: 1px solid var(--border);
        display: flex;
        justify-content: flex-end;
    }
    .closeBtn {
        height: 34px;
        padding: 0 12px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .xBtn {
        position: absolute;
        top: 8px;
        right: 10px;
        border: none;
        background: transparent;
        color: var(--text-muted);
        font-size: 24px;
        cursor: pointer;
    }

    @media (width < 560px) {
        .scroller {
            max-height: min(70vh, 720px);
        }
        .tabs {
            display: none;
        } /* keep compact in small screens */
    }
`,g={Wrapper:q,Header:K,Stage:L},c=[{id:"overview",title:"Overview"},{id:"design",title:"Design Notes"},{id:"behavior",title:"Behavior & UX"},{id:"a11y",title:"Accessibility"},{id:"perf",title:"Performance"},{id:"impl",title:"Implementation Tips"}];function S(n){try{n==null||n.focus()}catch{}}function G(){const n=o.useRef(null),{scrollYProgress:N}=H({container:n}),l=P(N,{stiffness:240,damping:28,mass:.9}),A=s(l,[0,.22],[96,56]),T=s(l,[0,.22],[20,12]),R=s(l,[0,.22],[1,.86]),I=s(l,[0,.22],[0,-2]),C=s(l,[0,.22],[22,18]),M=s(l,[0,.22],[0,8]),B=s(l,[0,.22],[.06,.18]),E=s(B,r=>`0 10px 30px hsl(0 0% 0% / ${r})`),f=s(M,r=>`saturate(1.1) blur(${r}px)`),[y,h]=o.useState(c[0].id),m=o.useRef({});o.useEffect(()=>{const r=n.current;if(!r)return;const t=new IntersectionObserver(a=>{const i=a.filter(p=>p.isIntersecting).sort((p,D)=>D.intersectionRatio-p.intersectionRatio);i[0]&&h(i[0].target.id)},{root:r,threshold:[.25,.5,.75],rootMargin:"-10% 0px -70% 0px"});return c.forEach(a=>{const i=m.current[a.id];i&&t.observe(i)}),()=>t.disconnect()},[]);const k=o.useRef({}),F=r=>{if(r.key!=="ArrowRight"&&r.key!=="ArrowLeft")return;r.preventDefault();const t=c.findIndex(p=>p.id===y),a=r.key==="ArrowRight"?Math.min(c.length-1,t+1):Math.max(0,t-1),i=c[a].id;h(i),S(k.current[i]),j(i)},j=r=>{const t=n.current,a=m.current[r];if(!t||!a)return;const i=a.offsetTop-8;t.scrollTo({top:i,behavior:"smooth"})},[x,u]=o.useState(!1),w=o.useRef(null);o.useEffect(()=>{if(x){const r=requestAnimationFrame(()=>S(w.current));return()=>cancelAnimationFrame(r)}},[x]);const[z,b]=o.useState(!1);return o.useEffect(()=>{let r=requestAnimationFrame(()=>{let t=requestAnimationFrame(()=>b(!0));b._r2=t});return()=>{cancelAnimationFrame(r),cancelAnimationFrame(b._r2||0)}},[]),e.jsx(W,{reducedMotion:"never",children:e.jsxs(g.Wrapper,{children:[e.jsx(g.Header,{children:e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Section Header — Sticky Shrink"}),e.jsx("p",{className:"muted",children:"Large title collapses into a compact bar as you scroll the section. Tabs get an animated underline."})]})}),e.jsx(g.Stage,{children:e.jsxs("div",{className:"scroller",ref:n,"aria-label":"Demo scroller with sticky header",children:[e.jsxs(d.div,{className:"sticky",style:{height:A,paddingInline:T,boxShadow:E,WebkitBackdropFilter:f,backdropFilter:f},"data-mounted":z,children:[e.jsxs("div",{className:"left",children:[e.jsx(d.span,{className:"logoDot",style:{scale:R},"aria-hidden":"true"}),e.jsx(d.h2,{className:"title",style:{y:I,fontSize:C},children:"Motion Patterns"})]}),e.jsx("nav",{className:"tabs",role:"tablist","aria-label":"Sections",onKeyDown:F,children:c.map(r=>{const t=y===r.id;return e.jsxs("button",{role:"tab","aria-selected":t,tabIndex:t?0:-1,ref:a=>k.current[r.id]=a,className:`tab ${t?"active":""}`,onClick:()=>{h(r.id),j(r.id)},title:r.title,children:[e.jsx("span",{children:r.title}),t&&e.jsx(d.div,{className:"underline",layoutId:"tab-underline",transition:{type:"spring",stiffness:600,damping:34,mass:.6}})]},r.id)})}),e.jsx("div",{className:"right",children:e.jsx(d.button,{whileTap:{scale:.96},className:"aboutBtn",onClick:()=>u(!0),"aria-haspopup":"dialog","aria-controls":"about-modal",title:"About this pattern",children:"About"})})]}),e.jsx("div",{className:"content",children:c.map((r,t)=>e.jsxs("section",{className:"block",children:[e.jsx("h3",{id:r.id,ref:a=>m.current[r.id]=a,className:"blockTitle",children:r.title}),e.jsx("p",{children:"This sticky-shrink pattern mirrors iOS large titles: generous at the top for scanning, compressing to a compact bar once you commit to the content. Keep motion minimal: values are tiny and spring-tuned so it feels deliberate, not floaty."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Transforms only (height via MotionValue on the wrapper; no layout thrash)."}),e.jsx("li",{children:"Blur ramps in as the header shrinks to separate it from scrollable content."}),e.jsxs("li",{children:["Tabs use ",e.jsx("code",{children:"layoutId"})," underline for delightful, consistent feedback."]})]}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel augue a mi interdum luctus. Mauris vehicula lectus sed nibh egestas, at facilisis orci facilisis. Nulla facilisi. Sed nam erat at dui tincidunt euismod. Integer pretium, erat a finibus sodales, turpis lectus porttitor justo, id rhoncus velit arcu et lectus."}),t===2&&e.jsxs("div",{className:"callout",children:[e.jsx("b",{children:"Tip:"})," keep the header background simple; avoid heavy images or shadows."]})]},r.id))})]})}),e.jsx(O,{children:x&&e.jsxs(d.div,{id:"about-modal",role:"dialog","aria-modal":"true","aria-label":"About sticky header pattern",className:"modalWrap",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsxs(d.div,{className:"modal",initial:{y:12,opacity:0,scale:.98},animate:{y:0,opacity:1,scale:1},exit:{y:8,opacity:0,scale:.98},transition:{duration:.22,ease:[.22,1,.36,1]},children:[e.jsx("header",{children:e.jsx("h4",{children:"About this pattern"})}),e.jsxs("div",{className:"body",children:[e.jsx("p",{children:"Use sticky-shrink headers when the content scrolls within a self-contained region (cards, modals, side panels). The large title helps orientation; the compact state saves space."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Animate tiny deltas (scale < 1.0, translate < 4px)."}),e.jsx("li",{children:"Prefer springs; they de-noise trackpad scroll micro-deltas."}),e.jsx("li",{children:"Respect reduced motion in production; demo forces motion for visibility."})]})]}),e.jsx("footer",{children:e.jsx("button",{ref:w,className:"closeBtn",onClick:()=>u(!1),children:"Close"})}),e.jsx("button",{className:"xBtn","aria-label":"Close",title:"Close",onClick:()=>u(!1),children:"×"})]}),e.jsx("button",{className:"backdrop",onClick:()=>u(!1),"aria-hidden":"true"})]})})]})})}export{G as default};
