import{d as u,r as s,j as e,A as X}from"./index-ChsZnzdL.js";import{u as S}from"./use-motion-value-BRK4VQpR.js";import{u as n}from"./use-transform-Dt0KVTZr.js";import{u as x}from"./use-spring-C_DgOOPV.js";import{u as V}from"./use-animation-s54GiMXV.js";import{M as q,m as o}from"./proxy-DJIhAgXk.js";const D=u.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1100px;
    margin: 0 auto;
    color: var(--text);

    a {
        color: var(--primary);
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    em {
        font-style: normal;
    }
`,$=u.header`
    display: grid;
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
        flex-wrap: wrap;
        gap: var(--space-4);
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
        font-size: 12px;
        color: var(--text-muted);
        padding-left: 6px;
    }

    .toggle {
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .toggle input {
        width: 18px;
        height: 18px;
    }

    .btn {
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
`,J=u.section`
    perspective: 1000px;

    .glassCard {
        position: relative;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: color-mix(
            in oklab,
            var(--card) 78%,
            hsl(210 90% 56% / 0.06)
        );
        box-shadow: var(--shadow-md);
        overflow: hidden;
        transform-style: preserve-3d;
        will-change: transform;
        padding: var(--space-6);
    }

    .glassBase {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 0;

        background: radial-gradient(
            400px 260px at var(--hx, 50%) var(--hy, 50%),
            hsl(210 90% 56% / 0.14),
            transparent 60%
        );

        backdrop-filter: blur(calc(6px + (14px * var(--condense, 0.6))))
            saturate(calc(1 + (0.4 * var(--condense, 0.6))))
            brightness(calc(1 - (0.06 * var(--condense, 0.6))));
        will-change: backdrop-filter, background;
    }

    .glassBase::after {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        mix-blend-mode: soft-light;
        background: linear-gradient(
                180deg,
                hsl(0 0% 100% / 0.1),
                transparent 60%
            ),
            radial-gradient(
                1000px 300px at 10% -10%,
                hsl(210 90% 56% / 0.1),
                transparent 60%
            );
        opacity: calc(0.1 + (0.55 * var(--condense, 0.6)));
    }

    .droplets {
        position: absolute;
        inset: -10%;
        z-index: 1;
        pointer-events: none;
        opacity: calc(0.25 + (0.45 * var(--condense, 0.6)));
    }

    .dropsInner {
        position: absolute;
        inset: 0;
        mix-blend-mode: overlay;
        filter: saturate(1.15);
        background: radial-gradient(
                    2px 2px at 14% 20%,
                    hsl(0 0% 100% / 0.35),
                    transparent 60%
                )
                repeat,
            radial-gradient(
                    2px 2px at 68% 70%,
                    hsl(0 0% 100% / 0.3),
                    transparent 60%
                )
                repeat,
            radial-gradient(
                    1.5px 1.5px at 34% 44%,
                    hsl(0 0% 100% / 0.28),
                    transparent 60%
                )
                repeat;
        background-size: 160px 160px, 220px 220px, 180px 180px;
    }

    .content {
        position: relative;
        z-index: 2;
        display: grid;
        gap: var(--space-4);
    }

    .cHead h2 {
        font-size: 20px;
    }
    .cHead .sub {
        color: var(--text-muted);
    }

    .form {
        display: grid;
        gap: var(--space-4);
    }
    .field {
        display: grid;
        gap: 6px;
    }
    .field > span {
        font-size: 12px;
        color: var(--text-muted);
    }

    .field input[type="email"],
    .field input[type="password"],
    .field input[type="text"] {
        height: 36px;
        border: 1px solid var(--border);
        background: color-mix(in oklab, var(--surface) 85%, #0000);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 10px;
        outline: none;
    }
    .field input:focus {
        box-shadow: var(--focus-ring);
        border-color: color-mix(in oklab, var(--primary) 65%, var(--border));
    }

    .pwd {
        position: relative;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 8px;
    }
    .pwd input {
        padding-right: 42px;
    }
    .eye {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        width: 34px;
        height: 28px;
        display: inline-grid;
        place-items: center;
        border-radius: var(--radius-sm);
        border: 1px solid transparent;
        background: transparent;
        color: var(--text);
        cursor: pointer;
    }
    .eye:hover {
        background: var(--surface);
        border-color: var(--border);
    }

    .err {
        color: hsl(6 78% 57%);
        font-size: 12px;
    }

    .actions {
        display: flex;
        gap: var(--space-4);
    }
    .btn {
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }

    .cFoot .hint {
        color: var(--text-muted);
    }
`,K=u.div`
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
    }
    .mHead h3 {
        font-size: 18px;
    }

    .muted {
        color: var(--text-muted);
        margin-bottom: 10px;
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
`,m={Wrapper:D,Header:$,Stage:J,ModalOverlay:K};function Q({...r}){return e.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18","aria-hidden":!0,focusable:"false",...r,children:e.jsx("path",{fill:"currentColor",d:"M12 5c5.5 0 9.5 5 9.5 7s-4 7-9.5 7S2.5 14 2.5 12 6.5 5 12 5zm0 2C8 7 4.9 10 4 12c.9 1.9 4 5 8 5s7.1-3.1 8-5c-.9-2-4-5-8-5zm0 2.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"})})}function U({...r}){return e.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18","aria-hidden":!0,focusable:"false",...r,children:e.jsx("path",{fill:"currentColor",d:"M3 4.3L4.3 3 21 19.7 19.7 21l-3.1-3.1A11.7 11.7 0 0112 19.5C6.5 19.5 2.5 14.5 2.5 12c0-1 .6-2.4 1.7-3.9L3 4.3zm7.3 7.3l2 2a2.5 2.5 0 01-2-2zM12 5c5.5 0 9.5 5 9.5 7 0 .8-.5 2-1.3 3.2l-1.5-1.5c.5-.7.8-1.3.8-1.7-1-2-4.1-5-7.5-5-1.2 0-2.3.3-3.3.8L7.7 5.9C9 5.3 10.5 5 12 5z"})})}function Z({...r}){return e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":!0,focusable:"false",...r,children:e.jsx("path",{fill:"currentColor",d:"M11 10h2v7h-2v-7zm0-4h2v2h-2V6zm1-4C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"})})}const _=r=>/\S+@\S+\.\S+/.test(String(r||"")),ee=r=>typeof r=="string"&&r.length>=6;function de(){const[r,z]=s.useState(.6),[g,ae]=s.useState(!0),[M,c]=s.useState(!1),B={motion:"never"},[v,b]=s.useState(""),[f,y]=s.useState(""),[h,I]=s.useState(!1),[t,j]=s.useState({email:"",pwd:""}),w=s.useRef(null),d=S(.5),l=S(.5),F=n(l,[0,1],[10,-10]),H=n(d,[0,1],[-12,12]),P=x(F,{stiffness:160,damping:18,mass:.8}),A=x(H,{stiffness:160,damping:18,mass:.8}),k=n(d,a=>`${(a*100).toFixed(2)}%`),N=n(l,a=>`${(a*100).toFixed(2)}%`),E=x(n(d,[0,1],[18,-18]),{stiffness:70,damping:18}),O=x(n(l,[0,1],[18,-18]),{stiffness:70,damping:18}),L=a=>{const i=w.current;if(!i)return;const p=i.getBoundingClientRect(),T=Math.min(Math.max((a.clientX-p.left)/p.width,0),1),W=Math.min(Math.max((a.clientY-p.top)/p.height,0),1);d.set(T),l.set(W)},R=()=>{d.set(.5),l.set(.5)},C=V(),Y=a=>{a.preventDefault();const i={email:"",pwd:""};if(_(v)||(i.email="Please enter a valid email address."),ee(f)||(i.pwd="Password must be at least 6 characters."),j(i),i.email||i.pwd){C.start({x:[0,-10,10,-6,6,-2,0],transition:{duration:.38,ease:"easeOut"}});return}c(!0)},G=s.useMemo(()=>({"--hx":k,"--hy":N,"--condense":r}),[k,N,r]);return e.jsx(q,{reducedMotion:B.motion,children:e.jsxs(m.Wrapper,{children:[e.jsxs(m.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Glass Card Condensation"}),e.jsxs("p",{className:"muted",children:["A premium glassmorphism panel with ",e.jsx("em",{children:"condensing"})," fog, droplets, tilt, and a mouse-tracked highlight. Fully theme-aware, accessible, and spring-tuned."]})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Glass controls",children:[e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Condensation"}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:r,onChange:a=>z(parseFloat(a.target.value))}),e.jsxs("em",{children:[(r*100).toFixed(0),"%"]})]}),e.jsxs("button",{className:"btn ghost",onClick:()=>c(!0),title:"What’s this?",children:[e.jsx(Z,{})," Details"]})]})]}),e.jsx(m.Stage,{children:e.jsxs(o.div,{ref:w,className:"glassCard",style:{rotateX:P,rotateY:A,...G},onMouseMove:L,onMouseLeave:R,children:[e.jsx("div",{className:"glassBase"}),e.jsx(o.div,{className:"droplets",style:{x:E,y:O},children:e.jsx(o.div,{className:"dropsInner",animate:g?{x:[0,6,-6,0],y:[0,-4,4,0]}:{x:0,y:0},transition:g?{duration:8,ease:"easeInOut",repeat:1/0}:{duration:.3,ease:"easeOut"}})}),e.jsxs(o.div,{className:"content",layout:!0,children:[e.jsxs("header",{className:"cHead",children:[e.jsx("h2",{children:"Sign in to continue"}),e.jsx("p",{className:"sub",children:"We’ll keep your session secure. No tracking pixels, just vibes."})]}),e.jsxs(o.form,{className:"form",onSubmit:Y,initial:!1,animate:C,children:[e.jsxs("label",{className:"field",children:[e.jsx("span",{children:"Email"}),e.jsx("input",{type:"email",placeholder:"you@domain.com",value:v,onChange:a=>b(a.target.value),"aria-invalid":!!t.email,"aria-describedby":t.email?"e-err":void 0,required:!0}),t.email&&e.jsx("em",{className:"err",id:"e-err",children:t.email})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{children:"Password"}),e.jsxs("div",{className:"pwd",children:[e.jsx("input",{type:h?"text":"password",placeholder:"••••••••",value:f,onChange:a=>y(a.target.value),"aria-invalid":!!t.pwd,"aria-describedby":t.pwd?"p-err":void 0,required:!0,minLength:6}),e.jsx("button",{type:"button",className:"eye","aria-label":h?"Hide password":"Show password",onClick:()=>I(a=>!a),children:h?e.jsx(U,{}):e.jsx(Q,{})})]}),t.pwd&&e.jsx("em",{className:"err",id:"p-err",children:t.pwd})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{type:"submit",className:"btn primary",children:"Continue"}),e.jsx("button",{type:"button",className:"btn",onClick:()=>{b(""),y(""),j({email:"",pwd:""})},children:"Reset"})]})]}),e.jsx("footer",{className:"cFoot",children:e.jsxs("p",{className:"hint",children:["By continuing you agree to our ",e.jsx("a",{href:"#t",children:"Terms"})," and ",e.jsx("a",{href:"#p",children:"Privacy"}),"."]})})]})]})}),e.jsx(X,{children:M&&e.jsx(o.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsx(m.ModalOverlay,{onClick:()=>c(!1),children:e.jsxs(o.div,{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"m-title",initial:{y:18,scale:.96,opacity:0},animate:{y:0,scale:1,opacity:1,transition:{type:"spring",stiffness:220,damping:22}},exit:{y:8,scale:.98,opacity:0,transition:{duration:.18}},onClick:a=>a.stopPropagation(),children:[e.jsx("div",{className:"mHead",children:e.jsx("h3",{id:"m-title",children:"About the Glass Effect"})}),e.jsxs("div",{className:"mBody",children:[e.jsx("p",{className:"muted",children:"This panel uses a layered stack: backdrop blur/saturate/brightness for fog, a highlight gradient pinned to your cursor, and a droplet layer with subtle parallax."}),e.jsxs("ul",{className:"details",children:[e.jsx("li",{children:"Transforms only for motion (no layout thrash)."}),e.jsx("li",{children:"Spring timing tuned for hardware cleanliness."}),e.jsx("li",{children:"Accessible form with inline validation & password toggle."})]})]}),e.jsx("div",{className:"mFoot",children:e.jsx("button",{className:"closeBtn",onClick:()=>c(!1),children:"Close"})})]})})},"modal")})]})})}export{de as default};
