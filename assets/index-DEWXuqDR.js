import{d as h,r as o,j as e}from"./index-GOg7KvvH.js";import{u as j}from"./use-motion-value-DbWq_iYI.js";import{a as k}from"./index-7NDJQWjP.js";import{M as N,m as S}from"./proxy-DRUkQ78w.js";const E="var(--space-4)",M=h.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1100px;
    margin: 0 auto;
    color: var(--text);
`,C=h.header`
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
    .dot {
        height: 34px;
    }
    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 14px;
        box-shadow: var(--shadow-sm);
        display: inline-flex;
        align-items: center;
        justify-content: center;
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
        gap: 8px;
    }
    .dot {
        width: 10px;
        aspect-ratio: 1;
        border-radius: 999px;
        background: var(--border);
        border: 0;
        cursor: pointer;
    }
    .dot.active {
        background: var(--primary);
    }
`,D=h.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    padding: var(--space-6);
    position: relative;

    .viewport {
        overflow: hidden;
        border-radius: var(--radius-lg);
    }

    .track {
        display: flex;
        gap: ${E};
        will-change: transform;
        /* a bit of side padding so slides don't kiss the edges */
        padding-inline: 2px;
    }

    .slide {
        flex: 0 0 100%;
        display: grid;
        place-items: stretch;
        /* subtle hue-tinted background */
        --h: var(--hue, 210);
        background: radial-gradient(
                900px 220px at 10% -10%,
                hsl(var(--h) 90% 60% / 0.08),
                transparent 60%
            ),
            var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        overflow: hidden;
        transition: box-shadow 0.2s ease, transform 0.2s ease;
    }
    .slide.is-active {
        box-shadow: 0 10px 30px hsl(0 0% 0% / 0.18);
        transform: translateY(-2px);
    }

    .card {
        height: 100%;
        padding: var(--space-6);
        display: grid;
        gap: var(--space-4);
    }
    .kicker {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 11px;
        color: var(--text-muted);
    }
    h3 {
        font-size: 20px;
    }
    p {
        color: var(--text);
    }

    @media (width < 560px) {
        padding: var(--space-4);
        .card {
            padding: var(--space-4);
        }
    }
`,z=h.aside`
    color: var(--text-muted);
    h3 {
        color: var(--text);
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
    }
`,p={Wrapper:M,Header:C,Stage:D,Notes:z},L=(()=>{let i=0;return()=>`slide-${++i}`})();function R(i=5){const a=[{title:"Depth & Snap",body:"Drag with momentum; release to snap to the closest slide."},{title:"Touch Native",body:"Works great with touch—low dragElastic, no layout thrash."},{title:"Keyboard Too",body:"Use ← → to move. Dots + buttons are accessible controls."},{title:"GPU Friendly",body:"Only transforms/opacity. Smooth across devices."}],u=Math.max(i,a.length+2);return Array.from({length:u},(l,n)=>{const s=a[n%a.length],x=210+n*23%60;return{id:L(),hue:x,title:s.title,body:s.body}})}function P(){const i=o.useMemo(()=>R(5),[]),[a,u]=o.useState(0),l=o.useRef(null),n=j(0),[s,x]=o.useState(0);o.useLayoutEffect(()=>{const r=()=>{const c=l.current;if(!c)return;const v=c.getBoundingClientRect().width;x(v)};r();const t=new ResizeObserver(r);return l.current&&t.observe(l.current),window.addEventListener("resize",r,{passive:!0}),()=>{t.disconnect(),window.removeEventListener("resize",r)}},[]),o.useEffect(()=>{s&&n.set(-a*s)},[s]),o.useEffect(()=>{s&&k(n,-a*s,{type:"spring",stiffness:320,damping:36,mass:.9})},[a,s]);const m=i.length,g=-(m-1)*s,b=0,f=(r,t,c)=>Math.max(t,Math.min(c,r)),d=r=>u(f(r,0,m-1)),y=(r,t)=>{const v=-(n.get()+t.velocity.x*.35)/s,w=Math.round(v);d(w)};return o.useEffect(()=>{const r=t=>{t.key==="ArrowRight"&&d(a+1),t.key==="ArrowLeft"&&d(a-1)};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[a]),e.jsx(N,{reducedMotion:"never",children:e.jsxs(p.Wrapper,{children:[e.jsxs(p.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Drag-Snap Carousel"}),e.jsx("p",{className:"muted",children:"Drag horizontally. Momentum projects, then snaps to the nearest slide. Buttons and dots are synced."})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Carousel controls",children:[e.jsx("button",{className:"btn",onClick:()=>d(a-1),disabled:a===0,title:"Previous",children:"← Prev"}),e.jsx("div",{className:"dots","aria-live":"polite",children:i.map((r,t)=>e.jsx("button",{className:`dot ${t===a?"active":""}`,"aria-label":`Go to slide ${t+1}`,onClick:()=>d(t)},t))}),e.jsx("button",{className:"btn primary",onClick:()=>d(a+1),disabled:a===m-1,title:"Next",children:"Next →"})]})]}),e.jsx(p.Stage,{role:"region","aria-roledescription":"carousel","aria-label":"Demo carousel",children:e.jsx("div",{className:"viewport",ref:l,children:e.jsx(S.div,{className:"track",style:{x:n},drag:"x",dragMomentum:!1,dragElastic:.08,dragConstraints:{left:g,right:b},onDragEnd:y,children:i.map((r,t)=>e.jsx("article",{className:`slide ${t===a?"is-active":""}`,style:{"--hue":r.hue},"aria-current":t===a?"true":"false",children:e.jsxs("div",{className:"card",children:[e.jsxs("span",{className:"kicker",children:["Slide ",t+1]}),e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.body})]})},r.id))})})}),e.jsxs(p.Notes,{children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Drag the ",e.jsx("code",{children:"track"}),"; each slide is ",e.jsx("b",{children:"flex: 0 0 100%"})," of the viewport."]}),e.jsxs("li",{children:["On release, we ",e.jsx("b",{children:"project"})," by velocity and ",e.jsx("b",{children:"snap"})," to ",e.jsx("code",{children:"round(projected/width)"}),"."]}),e.jsx("li",{children:"Only transforms/opacity; theme via CSS variables. It’s buttery."})]})]})]})})}export{P as default};
