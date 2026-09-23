import{d as m,r as c,j as e}from"./index-D8yAWZ_T.js";import{M as se,m as $}from"./proxy-DfzdIqFN.js";import{u as N}from"./use-motion-value-3H01X7V8.js";import{u as M}from"./use-spring-BrCeeyfL.js";import{u as P}from"./use-transform-BkTbxY83.js";const ne="min(320px, 92vw)",ie="200px",oe=m.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1200px;
    margin: 0 auto;
    color: var(--text);
`,ce=m.header`
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
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .ctrl input[type="range"] {
        width: 180px;
        accent-color: var(--primary);
    }
    .ctrl em {
        font-style: normal;
        font-size: 12px;
        color: var(--text-muted);
    }

    .switch {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 6px 10px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--card);
    }
    .switch input {
        accent-color: var(--primary);
    }
`,le=m.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${ne}, 1fr));
    gap: var(--space-6);
`,de=m.div`
    perspective: 1100px;
    will-change: transform;
`,pe=m.aside`
    color: var(--text-muted);
    h3 {
        color: var(--text);
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
    }
`,he=`
  position: relative;
  width: 100%;
  height: ${ie};
  border-radius: var(--radius-lg);
  transform-style: preserve-3d;
  isolation: isolate;
  will-change: transform;
  outline: none;

  /* Accent fallbacks */
  --accent-h: 210;
  --accent-s: 80%;
  --accent-l: 56%;
`,xe=m.div.attrs({className:"tilt"})`
    ${he}

    /* Background & shadow fed via CSS vars from the component */
  background: var(--tilt-bg,
    linear-gradient(
      180deg,
      hsl(var(--accent-h,210) var(--accent-s,80%) calc(var(--accent-l,56%) + 16%) / 0.16) 0%,
      hsl(var(--accent-h,210) var(--accent-s,80%) calc(var(--accent-l,56%) + 6%)  / 0.10) 40%,
      transparent 100%
    ),
    var(--card)
  );

    border: 1px solid
        color-mix(
            in oklab,
            hsl(var(--accent-h) var(--accent-s) var(--accent-l)) 22%,
            var(--border)
        );

    box-shadow: var(
        --tilt-shadow,
        0 1px 0 hsl(0 0% 100% / 0.06) inset,
        0 16px 34px hsl(0 0% 0% / 0.22),
        0 10px 28px hsl(var(--accent-h) var(--accent-s) var(--accent-l) / 0.2)
    );

    /* Common layer baseline */
    .bgLayer,
    .midLayer,
    .content,
    .glare,
    .outline,
    .shadow {
        position: absolute;
        inset: 0;
        pointer-events: none;
        border-radius: inherit;
    }

    /* Background texture */
    .bgLayer {
        overflow: hidden;
        transform: translateZ(0);
    }
    .bgGradient {
        position: absolute;
        inset: -40%;
        background: conic-gradient(
            from 0deg at 30% 30%,
            hsl(
                var(--accent-h) var(--accent-s) calc(var(--accent-l) + 10%) /
                    0.08
            ),
            transparent 25%,
            transparent 75%,
            hsl(
                var(--accent-h) var(--accent-s) calc(var(--accent-l) + 4%) /
                    0.08
            )
        );
        filter: saturate(1.05);
    }
    .bgNoise {
        position: absolute;
        inset: 0;
        background-image: radial-gradient(
            hsl(0 0% 0% / 0.08) 1px,
            transparent 1px
        );
        background-size: 3px 3px;
        mix-blend-mode: overlay;
        opacity: 0.45;
    }

    /* Mid ornaments */
    .midLayer {
        transform: translateZ(30px);
    }
    .ring {
        position: absolute;
        width: 140px;
        height: 140px;
        border-radius: 999px;
        border: 1px dashed hsl(210 14% 60% / 0.35);
        top: 16px;
        right: 16px;
        filter: drop-shadow(0 2px 6px hsl(0 0% 0% / 0.25));
    }
    .orbs .orb {
        position: absolute;
        width: 18px;
        height: 18px;
        border-radius: 999px;
        background: hsl(var(--accent-h) var(--accent-s) var(--accent-l) / 0.7);
        box-shadow: 0 4px 14px
            hsl(var(--accent-h) var(--accent-s) var(--accent-l) / 0.5);
    }
    .orb.a {
        left: 18px;
        bottom: 22px;
    }
    .orb.b {
        left: 46px;
        bottom: 48px;
    }

    /* Foreground content */
    .content {
        transform: translateZ(60px);
        padding: 16px 18px;
        display: grid;
        gap: 8px;
        align-content: start;
    }
    .kicker {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 11px;
        color: var(--text-muted);
    }
    .title {
        font-size: 22px;
        color: var(--text);
        text-shadow: 0 2px 8px hsl(0 0% 0% / 0.18);
    }
    .meta {
        display: inline-flex;
        gap: 10px;
        align-items: center;
        color: var(--text-muted);
    }
    .emoji {
        font-size: 16px;
        transform: translateZ(30px);
    }

    /* Glare tied to pointer */
    .glare {
        --gx: 50%;
        --gy: 50%;
        --ga: 0deg;
        background: radial-gradient(
                320px 120px at var(--gx) var(--gy),
                hsl(0 0% 100% / 0.25),
                transparent 60%
            ),
            conic-gradient(
                from var(--ga),
                hsl(0 0% 100% / 0.12),
                transparent 30%
            );
        mix-blend-mode: overlay;
        opacity: 0.9;
        transform: translateZ(90px);
    }

    /* Inner outline */
    .outline {
        box-shadow: inset 0 0 0 1px hsl(0 0% 100% / 0.05),
            inset 0 0 0 2px
                hsl(var(--accent-h) var(--accent-s) var(--accent-l) / 0.12);
        transform: translateZ(100px);
    }

    /* Extra shadow layer (subtle) */
    .shadow {
        filter: drop-shadow(0 28px 40px hsl(0 0% 0% / 0.22));
        opacity: 0;
    }

    /* Elevation bump on hover/focus */
    &:hover,
    &:focus-visible {
        box-shadow: 0 1px 0 hsl(0 0% 100% / 0.06) inset,
            0 22px 48px hsl(0 0% 0% / 0.28),
            0 14px 36px
                hsl(var(--accent-h) var(--accent-s) var(--accent-l) / 0.26);
        outline: none;
    }
`,x={Wrapper:oe,Header:ce,Grid:le,TiltWrap:de,Notes:pe,Tilt:xe},h=(a,l,s)=>Math.min(s,Math.max(l,a)),me=()=>typeof window<"u"&&window.matchMedia&&window.matchMedia("(hover: hover) and (pointer: fine)").matches,ge=[{id:"hp-1",title:"Aurora",tag:"3D Tilt + Parallax",emoji:"🟣",accent:{h:268,s:82,l:56}},{id:"hp-2",title:"Nebula",tag:"Animated Glare",emoji:"🟢",accent:{h:150,s:70,l:54}},{id:"hp-3",title:"Quasar",tag:"Magnetic Hover",emoji:"🔵",accent:{h:206,s:86,l:56}},{id:"hp-4",title:"Ion",tag:"Depth Layers",emoji:"🟠",accent:{h:28,s:92,l:58}},{id:"hp-5",title:"Photon",tag:"GPU Smooth",emoji:"🟡",accent:{h:46,s:92,l:60}},{id:"hp-6",title:"Zenith",tag:"Keyboard A11y",emoji:"🟤",accent:{h:18,s:35,l:46}}];function ue({item:a,intensity:l=1,glare:s=!0,spring:n={stiffness:360,damping:34,mass:.9}}){var H,V,z;const r=c.useRef(null),X=me(),g=N(0),u=N(0),v=N(0),f=N(0),A=N(1),R=M(g,n),T=M(u,n),b=M(v,n),y=M(f,n),D=M(A,n),B=P(b,t=>t*-.35),W=P(y,t=>t*-.35),Y=P(b,t=>t*.25),_=P(y,t=>t*.25),[K,E]=c.useState({"--gx":"50%","--gy":"50%","--ga":"0deg"}),d=14*l,p=18*l,i=c.useRef(0);function U(t){const C=r.current;if(!C)return;const o=C.getBoundingClientRect(),te=o.left+o.width/2,ae=o.top+o.height/2,I=t.clientX-te,Z=t.clientY-ae,L=h(I/(o.width/2),-1,1),S=h(Z/(o.height/2),-1,1);if(g.set(h(-S*d,-d,d)),u.set(h(L*d,-d,d)),v.set(h(L*p,-p,p)),f.set(h(S*p,-p,p)),s){const re=Math.atan2(Z,I)*(180/Math.PI)+90;E({"--gx":`${(L+1)/2*100}%`,"--gy":`${(S+1)/2*100}%`,"--ga":`${re.toFixed(2)}deg`})}}function q(t){X&&(i.current&&cancelAnimationFrame(i.current),i.current=requestAnimationFrame(()=>U(t)))}function G(){A.set(1.02)}function F(){i.current&&cancelAnimationFrame(i.current),g.set(0),u.set(0),v.set(0),f.set(0),A.set(1),s&&E({"--gx":"50%","--gy":"50%","--ga":"0deg"})}function O(t){t.key==="ArrowLeft"&&(u.set(T.get()-2.5),v.set(b.get()-3.5)),t.key==="ArrowRight"&&(u.set(T.get()+2.5),v.set(b.get()+3.5)),t.key==="ArrowUp"&&(g.set(R.get()-2.5),f.set(y.get()-3.5)),t.key==="ArrowDown"&&(g.set(R.get()+2.5),f.set(y.get()+3.5)),t.key==="Escape"&&F(),t.key==="Enter"&&A.set(D.get()>1.01?1:1.02)}c.useEffect(()=>()=>i.current&&cancelAnimationFrame(i.current),[]);const j=((H=a.accent)==null?void 0:H.h)??210,w=((V=a.accent)==null?void 0:V.s)??80,k=((z=a.accent)==null?void 0:z.l)??56,Q=c.useMemo(()=>({"--accent-h":j,"--accent-s":`${w}%`,"--accent-l":`${k}%`}),[j,w,k]),J=`
    linear-gradient(
      180deg,
      hsl(${j} ${w}% ${Math.min(k+16,96)}% / 0.16) 0%,
      hsl(${j} ${w}% ${Math.min(k+6,96)}% / 0.10) 40%,
      transparent 100%
    ),
    var(--card)
  `,ee=`
    0 1px 0 hsl(0 0% 100% / .06) inset,
    0 16px 34px hsl(0 0% 0% / .22),
    0 10px 28px hsl(${j} ${w}% ${k}% / .22)
  `;return e.jsx(x.TiltWrap,{children:e.jsxs(x.Tilt,{as:$.div,ref:r,style:{rotateX:R,rotateY:T,scale:D,...Q,"--tilt-bg":J,"--tilt-shadow":ee},onPointerMove:q,onPointerEnter:G,onPointerLeave:F,onFocus:G,onBlur:F,onKeyDown:O,role:"button",tabIndex:0,"aria-label":`${a.title} - ${a.tag}`,children:[e.jsxs($.div,{className:"bgLayer",style:{x:B,y:W},"aria-hidden":!0,children:[e.jsx("div",{className:"bgGradient"}),e.jsx("div",{className:"bgNoise"})]}),e.jsxs($.div,{className:"midLayer",style:{x:Y,y:_},"aria-hidden":!0,children:[e.jsx("div",{className:"ring"}),e.jsxs("div",{className:"orbs",children:[e.jsx("span",{className:"orb a"}),e.jsx("span",{className:"orb b"})]})]}),e.jsxs($.div,{className:"content",style:{x:b,y},children:[e.jsx("div",{className:"kicker",children:a.tag}),e.jsx("h3",{className:"title",children:a.title}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"emoji","aria-hidden":!0,children:a.emoji}),e.jsx("span",{children:"Hover or use arrow keys"})]})]}),e.jsx("div",{className:"glare",style:K,"aria-hidden":!0}),e.jsx("div",{className:"outline","aria-hidden":!0}),e.jsx("div",{className:"shadow","aria-hidden":!0})]})})}function we(){const[a,l]=c.useState(1),[s,n]=c.useState(!0);return e.jsx(se,{reducedMotion:"never",children:e.jsxs(x.Wrapper,{children:[e.jsxs(x.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Hover Peek Tilt"}),e.jsx("p",{className:"muted",children:"Pointer-aware 3D tilt with parallax layers, animated glare, per-card accent background, premium shadows, and keyboard support."})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Tilt controls",children:[e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Intensity"}),e.jsx("input",{type:"range",min:"0.6",max:"1.6",step:"0.05",value:a,onChange:r=>l(parseFloat(r.target.value))}),e.jsxs("em",{children:[a.toFixed(2),"×"]})]}),e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:s,onChange:r=>n(r.target.checked)}),e.jsx("span",{children:"Glare"})]})]})]}),e.jsx(x.Grid,{children:ge.map(r=>e.jsx(ue,{item:r,intensity:a,glare:s},r.id))}),e.jsxs(x.Notes,{children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Transform-only; rAF-throttled pointer; ",e.jsx("code",{children:"useSpring"})," for natural easing."]}),e.jsx("li",{children:"Accent-tinted backgrounds + layered shadows per card."}),e.jsx("li",{children:"Light/Dark theme tokens respected; keyboard a11y built-in."})]})]})]})})}export{we as default};
