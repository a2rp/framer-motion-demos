import{d as m,r as c,j as e}from"./index-D8c9fCIL.js";import{u as W}from"./use-motion-value-CM7FG8fP.js";import{u as B}from"./use-spring-CBvkgxxg.js";import{u as k}from"./use-transform-B1uUQLLn.js";import{M as X,m as g}from"./proxy-Cy2a_Fiw.js";const f=52,N=28,z=m.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);
`,A=m.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    flex-wrap: wrap;

    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }

    .pill {
        height: 36px;
        display: inline-grid;
        place-items: center;
        padding: 0 14px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: linear-gradient(
                90deg,
                hsl(var(--h, 210) 90% 60% / 0.18),
                transparent 60%
            ),
            var(--card);
        box-shadow: var(--shadow-sm);
    }
    .pill .k {
        font-weight: 600;
        letter-spacing: 0.02em;
    }
`,I=m.section`
    display: grid;
    gap: var(--space-6);
`,O=m.div`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 18px;
    background: var(--card);
    box-shadow: var(--shadow-md);

    &:focus-visible {
        outline: none;
        box-shadow: var(--shadow-md), var(--focus-ring);
    }

    .rail {
        position: relative;
        height: ${f}px;
        border-radius: ${f/2}px;
        background: linear-gradient(
                180deg,
                hsl(0 0% 100% / 0.04),
                hsl(0 0% 0% / 0.05)
            ),
            var(--surface);
        border: 1px solid var(--border);
        box-shadow: inset 0 1px 0 hsl(0 0% 100% / 0.04);
        overflow: hidden;
        cursor: pointer;
        isolation: isolate;
    }

    .fill {
        position: absolute;
        inset: 0 auto 0 0;
        width: 100%;
        transform: scaleX(0);
        background: radial-gradient(
                600px 120px at 0% 0%,
                hsl(210 90% 60% / 0.14),
                transparent 60%
            ),
            linear-gradient(90deg, hsl(210 90% 56%), hsl(280 90% 62%));
        mix-blend-mode: plus-lighter;
        will-change: transform, filter;
        pointer-events: none;
    }

    .ticks {
        position: absolute;
        inset: 0;
        pointer-events: none;
    }
    .tick {
        --w: 6px;
        pointer-events: auto;
        position: absolute;
        top: 50%;
        translate: calc(-0.5 * var(--w)) -50%;
        width: var(--w);
        height: 14px;
        border-radius: 999px;
        background: hsl(0 0% 100% / 0.18);
        border: 0;
        cursor: pointer;
        transition: transform 0.15s ease, background 0.15s ease;
    }
    .tick.active {
        height: 18px;
        background: hsl(0 0% 100% / 0.34);
        transform: translateY(-50%) scale(1.15);
    }
    .tick:hover {
        background: hsl(0 0% 100% / 0.5);
    }

    .ripple {
        position: absolute;
        top: 50%;
        translate: -50% -50%;
        width: ${f}px;
        height: ${f}px;
        border-radius: 999px;
        pointer-events: none;
        background: radial-gradient(
            circle,
            hsl(210 90% 60% / 0.35),
            transparent 55%
        );
        mix-blend-mode: screen;
    }

    .thumb {
        position: absolute;
        top: 50%;
        translate: -50% -50%;
        width: ${N}px;
        height: ${N}px;
        border-radius: 999px;
        background: var(--card);
        border: 1px solid var(--border);
        box-shadow: 0 6px 22px hsl(0 0% 0% / 0.22),
            inset 0 1px 0 hsl(0 0% 100% / 0.06);
        display: grid;
        place-items: center;
        cursor: grab;
        will-change: transform;
    }
    .thumb.dragging {
        cursor: grabbing;
    }

    .thumb .glow {
        position: absolute;
        inset: -18px;
        border-radius: 999px;
        pointer-events: none;
        background: radial-gradient(
            circle,
            hsl(var(--h, 210) 90% 60% / 0.18),
            transparent 60%
        );
        filter: blur(8px);
    }

    .thumb .tooltip {
        position: absolute;
        top: -36px;
        left: 50%;
        translate: -50% 0;
        padding: 6px 10px;
        border-radius: 10px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.02em;
        color: var(--primary-contrast);
        background: linear-gradient(
            180deg,
            hsl(var(--h, 210) 90% 60% / 0.95),
            hsl(var(--h, 210) 90% 56% / 0.95)
        );
        box-shadow: var(--shadow-sm);
        white-space: nowrap;
        pointer-events: none;
    }
`,U=m.article`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: radial-gradient(
            1000px 200px at 10% 0%,
            var(--h) / 0.1,
            transparent 60%
        ),
        var(--card);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);

    header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 8px;
    }
    .badge {
        display: inline-grid;
        place-items: center;
        height: 28px;
        padding: 0 10px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 600;
        color: var(--primary-contrast);
        background: var(--h);
        box-shadow: var(--shadow-sm);
    }

    h2 {
        font-size: 20px;
    }
    p {
        color: var(--text);
        margin: 8px 0 10px;
    }
    ul {
        color: var(--text-muted);
        padding-left: 18px;
    }
`,x={Wrapper:z,Header:A,Stage:I,Slider:O,Preview:U},b=[{key:"off",label:"Off",hue:210,desc:"Everything idle. Minimal processing."},{key:"eco",label:"Eco",hue:170,desc:"Power saver. Great battery life."},{key:"balanced",label:"Balanced",hue:200,desc:"Daily driver. Smooth and steady."},{key:"performance",label:"Performance",hue:230,desc:"Extra punch. Snappy response."},{key:"ludicrous",label:"Ludicrous",hue:280,desc:"Uncapped. Buckle up."}],i=b.length-1,p=(t,n,o)=>Math.min(o,Math.max(n,t)),R=(t,n=0)=>{const o=Math.sign(n)*.06,l=p(t+o,0,1);return p(Math.round(l*i),0,i)};function L(t){const[n,o]=c.useState(0);return c.useEffect(()=>{const l=t.current;if(!l)return;const d=new ResizeObserver(()=>o(l.clientWidth));return d.observe(l),o(l.clientWidth),()=>d.disconnect()},[]),n}function F(){const[t,n]=c.useState(2),[o,l]=c.useState(!1),d=c.useRef(null),h=L(d),j=W(0),S=B(j,{stiffness:640,damping:42,mass:.7}),v=k(S,a=>h?a/h:0),w=k(v,a=>{const r=b[0].hue,s=b[i].hue;return r+(s-r)*a}),D=k(v,a=>`saturate(${.8+a*.4})`);c.useEffect(()=>{h&&j.set(t/i*h)},[t,h]);const P=a=>{const r=d.current.getBoundingClientRect(),s=p(a.clientX-r.left,0,r.width),y=R(s/r.width,0);n(y)},$=a=>{if(a.altKey||a.ctrlKey||a.metaKey||a.shiftKey)return;let r=t;switch(a.key){case"ArrowLeft":r=p(t-1,0,i);break;case"ArrowRight":r=p(t+1,0,i);break;case"PageDown":r=p(t-2,0,i);break;case"PageUp":r=p(t+2,0,i);break;case"Home":r=0;break;case"End":r=i;break;default:return}a.preventDefault(),n(r)},C=(a,r)=>{l(!1);const s=d.current.getBoundingClientRect(),y=p(r.point.x-s.left,0,h),K=r.velocity.x/1e3,T=R(y/h,K);n(T)},[M,H]=c.useState({id:0,x:0}),E=a=>{var s;const r=((s=d.current)==null?void 0:s.getBoundingClientRect().left)??0;H({id:Date.now(),x:a-r})},u=c.useMemo(()=>b[t],[t]);return e.jsx(X,{reducedMotion:"never",children:e.jsxs(x.Wrapper,{children:[e.jsxs(x.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Rail Selector"}),e.jsx("p",{className:"muted",children:"Drag, click, or use keys. Thumb glides with velocity-aware snapping, ticks, tooltip, ripple, and full ARIA—all theme-aware."})]}),e.jsx("div",{className:"pill",style:{"--h":w},children:e.jsx("span",{className:"k",children:u.label})})]}),e.jsxs(x.Stage,{children:[e.jsx(x.Slider,{role:"slider","aria-label":"Performance mode","aria-valuemin":0,"aria-valuemax":i,"aria-valuenow":t,"aria-valuetext":u.label,tabIndex:0,onKeyDown:$,onClick:a=>{P(a),E(a.clientX)},children:e.jsxs("div",{className:"rail",ref:d,children:[e.jsx(g.div,{className:"fill",style:{scaleX:v,transformOrigin:"left center",filter:D}}),e.jsx("div",{className:"ticks",children:b.map((a,r)=>e.jsx("button",{className:`tick ${r===t?"active":""}`,style:{left:`${r/i*100}%`},onClick:s=>{s.stopPropagation(),n(r),E(s.clientX)},type:"button","aria-label":a.label},a.key))}),e.jsx(g.span,{className:"ripple",style:{left:M.x},initial:{scale:0,opacity:.35},animate:{scale:1,opacity:0},transition:{duration:.6,ease:"easeOut"},"aria-hidden":!0},M.id),e.jsxs(g.div,{className:`thumb ${o?"dragging":""}`,drag:"x",dragElastic:.12,dragMomentum:!1,dragConstraints:d,style:{x:S},onDragStart:()=>l(!0),onDragEnd:C,whileHover:{scale:1.02},whileTap:{scale:.98},onClick:a=>a.stopPropagation(),children:[e.jsx(g.div,{className:"glow",style:{"--h":w}}),e.jsx(g.div,{className:"tooltip",style:{"--h":w},initial:!1,animate:{y:o?-10:-6,opacity:1},transition:{type:"spring",stiffness:520,damping:36},children:u.label})]})]})}),e.jsxs(x.Preview,{style:{"--h":`hsl(${u.hue} 90% 60%)`},children:[e.jsxs("header",{children:[e.jsx("span",{className:"badge",children:u.label}),e.jsx("h2",{children:"Tuning"})]}),e.jsx("p",{children:u.desc}),e.jsxs("ul",{children:[e.jsx("li",{children:"Keyboard: ← → (±1), PgUp/PgDn (±2), Home/End"}),e.jsx("li",{children:"Click anywhere on the rail to seek"}),e.jsx("li",{children:"Springs tuned for snap without wobble"})]})]})]})]})})}export{F as default};
