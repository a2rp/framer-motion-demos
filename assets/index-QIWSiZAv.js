import{d as S,r as c,j as t,A as de}from"./index-h_xcPptR.js";import{u as xe}from"./use-reduced-motion-Dip9r_rx.js";import{M as me,m as h}from"./proxy-BBnnFU2D.js";import{u as w}from"./use-motion-value-wRYBaFGP.js";import{u as l}from"./use-spring-CYxReyo2.js";import{u as o}from"./use-transform-CD_5jMDW.js";const he="58px",ue="30px",L="999px",ge=S.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1100px;
    margin: 0 auto;
    color: var(--text);

    /* Mode-specific subtle tints */
    &[data-mode="aurora"] {
        --mb-accent: var(--primary);
    }
    &[data-mode="neon"] {
        --mb-accent: hsl(290 90% 60%);
    }
    &[data-mode="minimal"] {
        --mb-accent: hsl(210 16% 60%);
    }
`,ve=S.header`
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
        align-items: center;
        gap: 6px;
    }
    .ctrl.inline {
        grid-template-columns: auto auto;
        column-gap: 8px;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .ctrl select {
        min-width: 140px;
        height: 34px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        padding: 0 8px;
    }
    .ctrl input[type="range"] {
        width: 160px;
        accent-color: var(--mb-accent);
    }
    .ctrl em {
        font-style: normal;
        font-size: 12px;
        color: var(--text-muted);
    }
`,fe=S.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    padding: clamp(var(--space-6), 6vw, 120px);
    display: grid;
    place-items: center;

    /* faint noise */
    &::after {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        mix-blend-mode: soft-light;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.02'/%3E%3C/svg%3E");
    }
`,be=S.div`
    position: relative;
    width: min(680px, 92vw);
    height: 300px;
    display: grid;
    place-items: center;
    isolation: isolate;
    perspective: 900px;

    /* Aurora background layer */
    .aurora {
        position: absolute;
        inset: -20%;
        background: radial-gradient(
                1000px 600px at 10% -10%,
                hsl(210 90% 56% / 0.15),
                transparent 60%
            ),
            radial-gradient(
                1000px 800px at 110% -10%,
                hsl(290 90% 62% / 0.12),
                transparent 60%
            ),
            radial-gradient(
                1200px 800px at 50% 110%,
                hsl(140 90% 52% / 0.09),
                transparent 60%
            );
        filter: blur(22px);
        opacity: 0.8;
        pointer-events: none;
        transition: background-position 0.08s linear; /* updated via framer */
        z-index: 0;
    }

    /* Spotlight that follows pointer */
    .spotlight {
        position: absolute;
        width: 300px;
        height: 300px;
        border-radius: 999px;
        background: radial-gradient(
            closest-side,
            color-mix(in oklab, var(--mb-accent), white 10%) 0%,
            transparent 62%
        );
        filter: blur(22px);
        mix-blend-mode: screen;
        pointer-events: none;
        z-index: 1;
    }

    /* Sparkles orbit container */
    .sparkles {
        position: absolute;
        inset: 0;
        z-index: 2;
        pointer-events: none;
    }
    .sp {
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 999px;
        background: color-mix(in oklab, var(--mb-accent), white 22%);
        filter: drop-shadow(
            0 0 6px color-mix(in oklab, var(--mb-accent), white 35%)
        );
        animation: spin 16s linear infinite;
        opacity: 0.9;
    }
    /* Distribute sparkles on concentric rings with phase offsets */
    ${Array.from({length:12}).map((A,s)=>{const u=s%3,p=[80,110,140][u],j=[16,22,28][u],r=[6,5,4][u],f=-(s*1.2);return`
      .s${s+1} {
        width: ${r}px; height: ${r}px;
        transform-origin: center;
        left: calc(50% - ${r/2}px); top: calc(50% - ${r/2}px);
        animation-duration: ${j}s; animation-delay: ${f}s;
      }
      .s${s+1}::before {
        content:""; position:absolute; inset:0; border-radius:inherit;
        transform: translate(${p}px, 0);
      }
    `}).join(`
`)}

    @keyframes spin {
        to {
            transform: rotate(1turn);
        }
    }

    /* Trailing ghosts */
    .ghost {
        position: absolute;
        width: 180px;
        height: 180px;
        border-radius: 999px;
        filter: blur(28px);
        mix-blend-mode: screen;
        pointer-events: none;
        background: radial-gradient(
            closest-side,
            color-mix(in oklab, var(--mb-accent), white 14%),
            transparent 70%
        );
        z-index: 1;
    }
    .g1 {
        width: 200px;
        height: 200px;
    }
    .g2 {
        width: 160px;
        height: 160px;
    }

    /* Button */
    .magnetBtn {
        position: relative;
        z-index: 3;
        height: ${he};
        padding: 0 ${ue};
        border-radius: ${L};
        border: 1px solid color-mix(in oklab, var(--mb-accent), black 35%);
        color: var(--text);
        cursor: pointer;
        outline: none;
        transform-style: preserve-3d;
        will-change: transform;

        /* Glass base */
        background: linear-gradient(
                180deg,
                color-mix(in oklab, var(--card), white 6%),
                color-mix(in oklab, var(--card), black 8%)
            ),
            radial-gradient(
                120% 200% at 30% 0%,
                color-mix(in oklab, var(--mb-accent), white 18%) 0%,
                transparent 60%
            );
        box-shadow: 0 18px 50px hsl(0 0% 0% / 0.35),
            inset 0 1px 0 hsl(0 0% 100% / 0.35),
            inset 0 -1px 0 hsl(0 0% 0% / 0.25);

        display: inline-grid;
        place-items: center;

        &:focus-visible {
            box-shadow: 0 0 0 4px
                    color-mix(in oklab, var(--mb-accent), transparent 70%),
                0 18px 50px hsl(0 0% 0% / 0.35),
                inset 0 1px 0 hsl(0 0% 100% / 0.35),
                inset 0 -1px 0 hsl(0 0% 0% / 0.25);
        }

        @media (hover: hover) {
            &:hover {
                filter: saturate(1.04);
            }
        }

        .label {
            font-weight: 700;
            letter-spacing: 0.02em;
            color: color-mix(in oklab, var(--primary-contrast), white 12%);
            text-shadow: 0 1px 0 hsl(0 0% 0% / 0.25);
            transform: translateZ(32px);
        }

        /* Neon charge ring */
        .ring {
            position: absolute;
            inset: -3px;
            border-radius: ${L};
            box-shadow: 0 0 0 2px
                    color-mix(in oklab, var(--mb-accent), white 10%) inset,
                0 0 24px color-mix(in oklab, var(--mb-accent), white 15%),
                0 0 48px color-mix(in oklab, var(--mb-accent), white 8%);
            filter: saturate(1.2);
            pointer-events: none;
        }

        /* Moving highlight */
        .shine {
            position: absolute;
            inset: -6px -10px -10px -6px;
            border-radius: ${L};
            background: radial-gradient(
                    260px 120px at 18% -10%,
                    hsl(0 0% 100% / 0.16),
                    transparent 60%
                ),
                radial-gradient(
                    220px 140px at 82% -20%,
                    hsl(0 0% 100% / 0.1),
                    transparent 60%
                );
            mix-blend-mode: screen;
            pointer-events: none;
            transform: translateZ(40px);
        }

        /* Ripple */
        .ripple {
            position: absolute;
            width: 24px;
            height: 24px;
            border-radius: 999px;
            background: color-mix(in oklab, var(--mb-accent), white 10%);
            mix-blend-mode: screen;
            pointer-events: none;
            will-change: transform, opacity;
            transform: translateZ(50px);
        }
    }
`,ye=S.aside`
    color: var(--text-muted);
    h3 {
        color: var(--text);
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
    }
`,C={Wrapper:ge,Header:ve,Stage:fe,MagnetZone:be,Notes:ye},N={Aurora:{radius:180,strength:.75,tilt:12,intensity:.9},Neon:{radius:220,strength:.9,tilt:14,intensity:1},Minimal:{radius:120,strength:.55,tilt:7,intensity:.65}};function Se(){const A=xe(),[s,u]=c.useState("Aurora"),[p,j]=c.useState(N.Aurora.radius),[r,f]=c.useState(N.Aurora.strength),[m,d]=c.useState(N.Aurora.tilt),[i,g]=c.useState(N.Aurora.intensity),x=c.useMemo(()=>({radius:`${p}px`,strength:r.toFixed(2),tilt:`${m}°`,glow:`${Math.round(i*100)}%`}),[p,r,m,i]),b=n=>{const y=N[n];u(n),j(y.radius),f(y.strength),d(y.tilt),g(y.intensity)};return t.jsx(me,{reducedMotion:"never",children:t.jsxs(C.Wrapper,{"data-mode":s.toLowerCase(),children:[t.jsxs(C.Header,{children:[t.jsxs("div",{className:"heading",children:[t.jsx("h1",{children:"Magnetic Button — Ultra"}),t.jsx("p",{className:"muted",children:"Aurora + spotlight + orbiting sparkles. Proper 3D tilt, parallax ghosts, and a neon charge ring."})]}),t.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Magnetic controls",children:[t.jsxs("label",{className:"ctrl inline",children:[t.jsx("span",{children:"Mode"}),t.jsx("select",{value:s,onChange:n=>b(n.target.value),children:Object.keys(N).map(n=>t.jsx("option",{value:n,children:n},n))})]}),t.jsxs("label",{className:"ctrl",children:[t.jsx("span",{children:"Radius"}),t.jsx("input",{type:"range",min:"80",max:"280",step:"10",value:p,onChange:n=>j(+n.target.value)}),t.jsx("em",{children:x.radius})]}),t.jsxs("label",{className:"ctrl",children:[t.jsx("span",{children:"Strength"}),t.jsx("input",{type:"range",min:"0.2",max:"1",step:"0.02",value:r,onChange:n=>f(+n.target.value)}),t.jsx("em",{children:x.strength})]}),t.jsxs("label",{className:"ctrl",children:[t.jsx("span",{children:"Tilt"}),t.jsx("input",{type:"range",min:"0",max:"20",step:"1",value:m,onChange:n=>d(+n.target.value)}),t.jsx("em",{children:x.tilt})]}),t.jsxs("label",{className:"ctrl",children:[t.jsx("span",{children:"Glow"}),t.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:i,onChange:n=>g(+n.target.value)}),t.jsx("em",{children:x.glow})]})]})]}),t.jsx(C.Stage,{children:t.jsx(we,{label:"Launch",radius:p,strength:r,tiltDeg:m,intensity:i,reduced:A})}),t.jsxs(C.Notes,{children:[t.jsx("h3",{children:"Tech notes"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Only transforms/opacity animate. Everything is GPU-friendly."}),t.jsx("li",{children:"Pointer → translate/rotate/scale via springs; spotlight + aurora drift from same source."}),t.jsx("li",{children:"Sparkles are CSS-driven with subtle parallax; ripples clean up via AnimatePresence."})]})]})]})})}function we({label:A,radius:s,strength:u,tiltDeg:p,intensity:j,reduced:r}){const f=c.useRef(null),m=c.useRef(null),d=w(0),i=w(0),g=w(0),x=w(0),b=w(1),n=w(0),y=w(0),$=l(d,{stiffness:360,damping:30,mass:.8}),M=l(i,{stiffness:360,damping:30,mass:.8}),G=l(g,{stiffness:260,damping:26}),q=l(x,{stiffness:260,damping:26}),I=l(b,{stiffness:320,damping:26}),R=l(n,{stiffness:220,damping:22}),K=l(y,{stiffness:320,damping:26}),W=l(d,{stiffness:160,damping:20}),V=l(i,{stiffness:160,damping:20}),J=l(d,{stiffness:90,damping:16}),Q=l(i,{stiffness:90,damping:16}),ee=o([$,M,G,q,I,K],([e,a,v,k,B,z])=>`translate3d(${e}px, ${a}px, 0) rotateX(${v}deg) rotateY(${k}deg) scale(${B-z*.02})`),U=o(R,e=>e*j),te=o([$,M],([e,a])=>`${-e*.6}px ${-a*.6}px`),ne=o($,e=>e*1.2),ae=o(M,e=>e*1.2),[se,Y]=c.useState([]),F=(e,a)=>{const v=Math.random().toString(36).slice(2);Y(k=>[...k,{id:v,x:e,y:a}])},re=e=>Y(a=>a.filter(v=>v.id!==e)),E=c.useCallback(()=>{d.set(0),i.set(0),g.set(0),x.set(0),b.set(1),n.set(0)},[d,i,g,x,b,n]);c.useEffect(()=>{const e=f.current;if(!e||r)return E();let a=0;const v=26*u,k=z=>{cancelAnimationFrame(a),a=requestAnimationFrame(()=>{const Z=m.current;if(!Z)return;const T=Z.getBoundingClientRect(),ce=T.left+T.width/2,pe=T.top+T.height/2,X=z.clientX-ce,D=z.clientY-pe,_=Math.hypot(X,D);if(_<s){const H=Math.max(0,1-_/s);d.set(X/s*v),i.set(D/s*v),g.set(-D/s*p),x.set(X/s*p),b.set(1+.065*H),n.set(Math.min(1,H*1.15))}else E()})},B=()=>{cancelAnimationFrame(a),E()};return e.addEventListener("pointermove",k,{passive:!0}),e.addEventListener("pointerleave",B),()=>{e.removeEventListener("pointermove",k),e.removeEventListener("pointerleave",B),cancelAnimationFrame(a)}},[s,u,p,r,E,d,i,g,x,b,n]);const P=e=>y.set(e?1:0),ie=e=>{P(!0);const a=m.current.getBoundingClientRect();F(e.clientX-a.left,e.clientY-a.top)},O=()=>P(!1),oe=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),P(!0);const a=m.current.getBoundingClientRect();F(a.width/2,a.height/2)}},le=e=>{(e.key==="Enter"||e.key===" ")&&P(!1)};return t.jsxs(C.MagnetZone,{ref:f,children:[t.jsx(h.div,{className:"aurora",style:{backgroundPosition:te},"aria-hidden":"true"}),t.jsx(h.div,{className:"spotlight",style:{x:ne,y:ae,opacity:U},"aria-hidden":"true"}),t.jsx(h.div,{className:"sparkles",style:{x:o($,e=>e*.15),y:o(M,e=>e*.15)},"aria-hidden":"true",children:Array.from({length:12}).map((e,a)=>t.jsx("span",{className:`sp s${a+1}`},a))}),t.jsx(h.div,{className:"ghost g1",style:{x:W,y:V,opacity:o(R,e=>e*.4)},"aria-hidden":"true"}),t.jsx(h.div,{className:"ghost g2",style:{x:J,y:Q,opacity:o(R,e=>e*.25)},"aria-hidden":"true"}),t.jsxs(h.button,{ref:m,className:"magnetBtn",style:{transform:ee},onPointerDown:ie,onPointerUp:O,onPointerCancel:O,onKeyDown:oe,onKeyUp:le,children:[t.jsx(h.span,{className:"ring",style:{opacity:U,scale:o(R,e=>1+e*.04)},"aria-hidden":"true"}),t.jsx("span",{className:"label",children:A}),t.jsx(h.span,{className:"shine",style:{x:o($,e=>e*.4),y:o(M,e=>e*.4)},"aria-hidden":"true"}),t.jsx(de,{children:se.map(e=>t.jsx(h.span,{className:"ripple",initial:{opacity:.4,scale:0,x:e.x-12,y:e.y-12},animate:{opacity:0,scale:10},exit:{opacity:0},transition:{duration:.65,ease:[.22,1,.36,1]},onAnimationComplete:()=>re(e.id),"aria-hidden":"true"},e.id))})]})]})}export{Se as default};
