import{d as x,r as n,j as e,A as S}from"./index-Cf_T-Gf1.js";import{M as P,m as l}from"./proxy-DKYKL-ar.js";import{L as T}from"./index-r-cytiEl.js";import{u as N}from"./use-motion-value-BFlRQmnU.js";import{u as B}from"./use-transform-BZBxOgLi.js";import{u as A}from"./use-spring-DcqOYls4.js";const C=x.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1200px;
    margin: 0 auto;
    color: var(--text);
`,M=x.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);

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
    }

    .btn,
    .closeBtn {
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.ghost {
        background: var(--surface);
        color: var(--text);
    }
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`,L=x.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: radial-gradient(
            1200px 600px at 20% -10%,
            hsl(210 90% 56% / 0.12),
            transparent 60%
        ),
        var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    padding: var(--space-6);

    .grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: var(--space-6);
    }

    @media (width < 1100px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (width < 720px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }

    /* 3D card */
    .card3d-wrap {
        perspective: 1200px;
    }

    .card3d {
        transform-style: preserve-3d;
        will-change: transform;
    }

    .card3d-inner {
        position: relative;
        height: 280px;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        overflow: hidden;
        box-shadow: var(--shadow-md);
        background: var(--surface);
        transform-style: preserve-3d;
    }

    .face {
        position: absolute;
        inset: 0;
        padding: var(--space-6);
        display: grid;
        align-content: start;
        gap: var(--space-4);
        backface-visibility: hidden;
    }
    .face-front {
        background: linear-gradient(
                180deg,
                hsl(210 90% 56% / 0.08),
                transparent 40%
            ),
            var(--surface);
    }
    .face-back {
        transform: rotateY(180deg);
        background: linear-gradient(
                180deg,
                hsl(210 90% 56% / 0.1),
                transparent 40%
            ),
            var(--surface);
    }

    .cHead {
        display: grid;
        gap: 6px;
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
    .body {
        color: var(--text);
    }

    .stats {
        display: grid;
        gap: 6px;
        color: var(--text);
    }
    .stats li b {
        margin-right: 6px;
    }

    .bullets {
        margin-left: 18px;
        display: grid;
        gap: 6px;
        color: var(--text);
    }

    .grid2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-6);
    }
    @media (width < 720px) {
        .grid2 {
            grid-template-columns: 1fr;
        }
    }

    .actions {
        display: flex;
        gap: var(--space-4);
        margin-top: auto;
    }
    .btn.ghost {
        background: var(--surface);
        color: var(--text);
    }
`,z=x.aside`
    color: var(--text-muted);
    h3 {
        color: var(--text);
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
    }
`,E=x.div`
    position: fixed;
    inset: 0;
    z-index: 50;
    background: color-mix(in oklab, var(--bg) 40%, #0000);
    backdrop-filter: blur(8px) saturate(1.1);
    display: grid;
    place-items: center;
    padding: var(--space-6);

    .modal {
        width: min(520px, 96vw);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        overflow: hidden;
        display: grid;
        gap: 0;
    }
    .mHead,
    .mFoot {
        padding: 14px 16px;
        border-bottom: 1px solid var(--border);
    }
    .mFoot {
        border-bottom: none;
        border-top: 1px solid var(--border);
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
    .mBody {
        padding: 16px;
        display: grid;
        gap: 12px;
    }
    .mHead h3 {
        font-size: 18px;
    }
    .muted {
        color: var(--text-muted);
        margin-bottom: 10px;
    }

    .iconBtn {
        height: 32px;
        width: 36px;
        display: inline-grid;
        place-items: center;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        cursor: pointer;
    }

    .fLabel {
        display: grid;
        gap: 6px;
    }
    .fLabel span {
        font-size: 12px;
        color: var(--text-muted);
    }

    input {
        height: 36px;
        padding: 0 10px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--surface);
        color: var(--text);
        outline: none;
    }
    input[aria-invalid="true"] {
        border-color: hsl(0 75% 55%);
        box-shadow: 0 0 0 3px hsl(0 75% 55% / 0.15);
    }

    .pwWrap {
        position: relative;
        display: grid;
    }
    .eyeBtn {
        position: absolute;
        top: 50%;
        right: 6px;
        transform: translateY(-50%);
        height: 28px;
        width: 34px;
        display: inline-grid;
        place-items: center;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--card);
        color: var(--text);
        cursor: pointer;
    }

    .errors {
        display: grid;
        gap: 6px;
        color: hsl(0 75% 60%);
        padding: 6px 8px;
        border: 1px solid hsl(0 75% 60% / 0.4);
        border-radius: var(--radius-sm);
        background: hsl(0 75% 60% / 0.08);
    }
    .errors .sub {
        margin-left: 18px;
        display: grid;
        gap: 4px;
    }

    .details {
        margin-left: 18px;
        display: grid;
        gap: 6px;
    }

    .closeBtn {
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .closeBtn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`,f={Wrapper:C,Header:M,Stage:L,Notes:z},F=[{id:"c1",title:"Nebula Pass",subtitle:"Plan: Pro",body:"A premium card for interstellar explorers who like minimal UI and maximal speed.",stats:[{k:"Projects",v:"12"},{k:"Teams",v:"3"},{k:"Quota",v:"120 GB"}]},{id:"c2",title:"Quasar ID",subtitle:"Plan: Starter",body:"A simple identity card tuned for small squads and prototypes.",stats:[{k:"Projects",v:"4"},{k:"Teams",v:"1"},{k:"Quota",v:"12 GB"}]},{id:"c3",title:"Aurora Key",subtitle:"Plan: Business",body:"Security-forward. Strong defaults, strong coffee, stronger animations.",stats:[{k:"Projects",v:"34"},{k:"Teams",v:"8"},{k:"Quota",v:"1 TB"}]},{id:"c4",title:"Photon Prime",subtitle:"Plan: Enterprise",body:"For teams who ship faster than light-with governance that actually helps.",stats:[{k:"Projects",v:"120"},{k:"Teams",v:"24"},{k:"Quota",v:"Unlimited"}]},{id:"c5",title:"Comet Access",subtitle:"Plan: Free",body:"Great for learning and tinkering. No credit card. No dark patterns.",stats:[{k:"Projects",v:"2"},{k:"Teams",v:"-"},{k:"Quota",v:"2 GB"}]},{id:"c6",title:"Orbit Vault",subtitle:"Plan: Plus",body:"Encrypted by default. Your bits stay yours. Your vibes stay immaculate.",stats:[{k:"Projects",v:"18"},{k:"Teams",v:"5"},{k:"Quota",v:"240 GB"}]}],D=a=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a),I=a=>{const s=[];return a.length<8&&s.push("At least 8 characters"),/[A-Z]/.test(a)||s.push("One uppercase letter"),/[a-z]/.test(a)||s.push("One lowercase letter"),/[0-9]/.test(a)||s.push("One number"),s};function O({off:a=!1}){return a?e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",children:e.jsx("path",{fill:"currentColor",d:"M2 3.27L20.73 22l1.27-1.27L3.27 2 2 3.27zM10.6 7.61 8.97 6A10.86 10.86 0 0 1 12 6c5.05 0 9.27 3.11 10.93 7.5-.54 1.43-1.39 2.72-2.47 3.79l-2.86-2.86A5 5 0 0 0 12 7a5 5 0 0 0-1.4.61zM14.1 11.1a2 2 0 0 0-2.69-2.69l2.69 2.69zM5.12 7.76 6.57 9.2A10.2 10.2 0 0 0 2.07 13.5C3.73 17.89 7.95 21 13 21c1.27 0 2.49-.18 3.62-.5l-1.51-1.51A10.8 10.8 0 0 1 13 19c-4.15 0-7.78-2.4-9.34-5.5a9.78 9.78 0 0 1 1.46-2.24z"})}):e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",children:e.jsx("path",{fill:"currentColor",d:"M12 6c5.05 0 9.27 3.11 10.93 7.5C21.27 17.89 17.05 21 12 21S2.73 17.89 1.07 13.5C2.73 9.11 6.95 6 12 6zm0 2c-3.38 0-6.5 1.94-8.19 5.5C5.5 17.06 8.62 19 12 19s6.5-1.94 8.19-5.5C18.5 9.94 15.38 8 12 8zm0 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"})})}function Y(){return e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",children:e.jsx("path",{fill:"currentColor",d:"M18.3 5.71 12 12l6.3 6.29-1.41 1.41L10.59 13.41 4.29 19.7 2.88 18.3 9.17 12 2.88 5.71 4.29 4.3l6.3 6.29L16.88 4.3l1.41 1.41z"})})}function H({data:a,flipAllTick:s}){const[o,c]=n.useState(!1),t=N(0),h=N(0),p=N(0),j=B(p,[0,1],[1,1.02]),g=A(j,{stiffness:260,damping:24,mass:.8}),v=i=>{const d=i.currentTarget.getBoundingClientRect(),m=(i.clientX-d.left)/d.width,r=(.5-(i.clientY-d.top)/d.height)*12,u=(m-.5)*16;t.set(r),h.set(u)},y=()=>{p.set(0),t.set(0),h.set(0)};n.useEffect(()=>{c(i=>!i)},[s]);const b={front:{rotateY:0},back:{rotateY:180}};return e.jsx("div",{className:"card3d-wrap",style:{perspective:1200},children:e.jsx(l.div,{className:"card3d",style:{rotateX:t,rotateY:h,scale:g,transformStyle:"preserve-3d"},onPointerMove:v,onPointerEnter:()=>p.set(1),onPointerLeave:y,transition:{type:"spring",stiffness:300,damping:28},children:e.jsxs(l.div,{className:"card3d-inner",animate:o?"back":"front",variants:b,transition:{duration:.6,ease:[.22,1,.36,1]},style:{transformStyle:"preserve-3d"},children:[e.jsxs("div",{className:"face face-front",children:[e.jsxs("header",{className:"cHead",children:[e.jsx("span",{className:"kicker",children:a.subtitle}),e.jsx("h3",{children:a.title})]}),e.jsx("p",{className:"body",children:a.body}),e.jsx("ul",{className:"stats",children:a.stats.map(i=>e.jsxs("li",{children:[e.jsxs("b",{children:[i.k,":"]})," ",i.v]},i.k))}),e.jsx("div",{className:"actions",children:e.jsx(l.button,{whileTap:{scale:.98},className:"btn",onClick:()=>c(!0),"aria-label":`Flip ${a.title} to back`,children:"Flip"})})]}),e.jsxs("div",{className:"face face-back",children:[e.jsxs("header",{className:"cHead",children:[e.jsx("span",{className:"kicker",children:"Details"}),e.jsx("h3",{children:a.title})]}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"muted",children:"Includes"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Premium support"}),e.jsx("li",{children:"Unlimited viewers"}),e.jsx("li",{children:"SSO (SAML/OIDC)"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"muted",children:"Limits"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"API rate quotas"}),e.jsx("li",{children:"Audit log retention"}),e.jsx("li",{children:"Per-seat billing"})]})]})]}),e.jsx("div",{className:"actions",children:e.jsx(l.button,{whileTap:{scale:.98},className:"btn ghost",onClick:()=>c(!1),"aria-label":`Flip ${a.title} to front`,children:"Back"})})]})]})})})}function V({open:a,onClose:s}){const[o,c]=n.useState(""),[t,h]=n.useState(""),[p,j]=n.useState(!1),[g,v]=n.useState(!1),[y,b]=n.useState(!1),i=D(o),w=I(t),d=w.length===0,m=i&&d&&!g;n.useEffect(()=>{const r=u=>{u.key==="Escape"&&(s==null||s())};return a&&window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[a,s]);const k=r=>{var u;(u=r==null?void 0:r.preventDefault)==null||u.call(r),m&&(v(!0),setTimeout(()=>{v(!1),b(!0),setTimeout(()=>{b(!1),s==null||s()},900)},900))};return e.jsx(S,{children:a&&e.jsx(E,{as:l.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(l.div,{className:"modal",initial:{scale:.96,opacity:.8},animate:{scale:1,opacity:1},exit:{scale:.96,opacity:0},transition:{type:"spring",stiffness:320,damping:28},role:"dialog","aria-modal":"true","aria-labelledby":"secure-title",children:[e.jsxs("div",{className:"mHead",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[e.jsx("h3",{id:"secure-title",children:"Secure Settings"}),e.jsx(l.button,{whileTap:{scale:.96},className:"iconBtn",onClick:s,"aria-label":"Close modal",children:e.jsx(Y,{})})]}),e.jsx("p",{className:"muted",children:"Log in to change sensitive options for 3D flips, depth, and motion intensity."})]}),e.jsxs("form",{className:"mBody",onSubmit:k,noValidate:!0,children:[e.jsxs("label",{className:"fLabel",children:[e.jsx("span",{children:"Email"}),e.jsx("input",{type:"email",inputMode:"email",placeholder:"you@domain.com",value:o,onChange:r=>c(r.target.value),"aria-invalid":!i&&o.length>0,required:!0})]}),e.jsxs("label",{className:"fLabel",children:[e.jsx("span",{children:"Password"}),e.jsxs("div",{className:"pwWrap",children:[e.jsx("input",{type:p?"text":"password",placeholder:"••••••••",value:t,onChange:r=>h(r.target.value),"aria-invalid":!d&&t.length>0,required:!0}),e.jsx(l.button,{type:"button",whileTap:{scale:.96},className:"eyeBtn",onClick:()=>j(r=>!r),"aria-label":p?"Hide password":"Show password",children:e.jsx(O,{off:p})})]})]}),e.jsx(S,{initial:!1,children:!i&&o.length>0||!d&&t.length>0?e.jsxs(l.ul,{className:"errors",initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},children:[!i&&o.length>0&&e.jsx("li",{children:"Enter a valid email address"}),!d&&t.length>0&&e.jsxs("li",{children:["Password needs:",e.jsx("ul",{className:"sub",children:w.map(r=>e.jsx("li",{children:r},r))})]})]}):null})]}),e.jsx("div",{className:"mFoot",children:e.jsx(l.button,{whileTap:{scale:m?.98:1},className:"closeBtn",onClick:k,disabled:!m,children:g?"Verifying…":y?"Done!":"Continue"})})]})})})}function R(){const[a,s]=n.useState(0),[o,c]=n.useState(!1);return e.jsx(P,{reducedMotion:"never",children:e.jsxs(f.Wrapper,{children:[e.jsxs(f.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"3D Card Flip"}),e.jsx("p",{className:"muted",children:"Perspective-correct flips with hover tilt, buttery springs, and a secure settings modal."})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"3D Card controls",children:[e.jsx(l.button,{whileTap:{scale:.98},className:"btn",onClick:()=>s(t=>t+1),children:"Flip All"}),e.jsx(l.button,{whileTap:{scale:.98},className:"btn ghost",onClick:()=>c(!0),children:"Secure Settings"})]})]}),e.jsx(f.Stage,{children:e.jsx(T,{children:e.jsx("div",{className:"grid",children:F.map(t=>e.jsx(H,{data:t,flipAllTick:a},t.id))})})}),e.jsxs(f.Notes,{children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Perspective on wrapper; card preserves 3D; faces have ",e.jsx("code",{children:"backface-visibility: hidden"}),"."]}),e.jsxs("li",{children:["Pointer-driven ",e.jsx("code",{children:"rotateX/Y"})," + hover scale via ",e.jsx("code",{children:"MotionValue"})," → ",e.jsx("code",{children:"useSpring"}),"."]}),e.jsx("li",{children:"“Flip All” toggles each card with a LayoutGroup-friendly update."}),e.jsx("li",{children:"Modal: email/password validation, eye toggle, Escape to close, animated mount/unmount."})]})]}),e.jsx(V,{open:o,onClose:()=>c(!1)})]})})}export{R as default};
