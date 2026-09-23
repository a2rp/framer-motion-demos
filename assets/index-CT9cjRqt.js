import{d as n,r as t,j as e,A as V,N as Y,O as G}from"./index-D8yAWZ_T.js";import{u as J}from"./use-motion-value-3H01X7V8.js";import{u as k}from"./use-transform-BkTbxY83.js";import{M as D,m as i}from"./proxy-DfzdIqFN.js";const $=n.div`
    position: sticky;
    top: 0;
    z-index: 30;
    height: 4px;
    background: linear-gradient(90deg, transparent, transparent);
    .bar {
        height: 100%;
        background: linear-gradient(90deg, hsl(210 90% 56%), hsl(210 90% 62%));
        box-shadow: 0 0 12px hsl(210 90% 56% / 0.45);
        width: 0%;
        will-change: width;
    }
`,K=n.main`
    display: grid;
    gap: var(--space-8);
    padding: var(--space-6);
    color: var(--text);
`,Q=n.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    .heroInner {
        position: relative;
        min-height: 320px;
        display: grid;
        place-items: center;
        padding: clamp(24px, 5vw, 64px);
        isolation: isolate;
    }

    .bg {
        position: absolute;
        inset: -10%;
        background: radial-gradient(
                600px 200px at 8% 0%,
                hsl(210 90% 60% / 0.15),
                transparent 60%
            ),
            radial-gradient(
                800px 300px at 92% 100%,
                hsl(210 90% 62% / 0.12),
                transparent 60%
            ),
            linear-gradient(
                120deg,
                hsl(210 50% 52% / 0.15),
                transparent 45%,
                hsl(210 90% 56% / 0.14)
            );
        filter: saturate(1.05);
        z-index: 0;
    }

    .fg {
        position: relative;
        z-index: 1;
        text-align: center;
        max-width: 840px;
    }

    h1 {
        font-size: clamp(26px, 4vw, 40px);
        line-height: 1.1;
    }
    .muted {
        color: var(--text-muted);
        margin-top: 10px;
    }

    .ctaRow {
        display: inline-grid;
        place-items: center;
        gap: 14px;
        margin-top: 18px;
        position: relative;
    }
    .gloss {
        position: absolute;
        inset: auto auto -6px 0;
        height: 3px;
        width: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            hsl(210 90% 56%),
            transparent
        );
        border-radius: 999px;
        filter: blur(1px);
        pointer-events: none;
    }

    .btn {
        height: 40px;
        padding: 0 16px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
`,P=n.section`
    display: grid;
    gap: var(--space-4);

    h2 {
        font-size: 22px;
        line-height: 1.25;
    }

    .grid {
        display: grid;
        gap: var(--space-4);
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (width < 900px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (width < 560px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }

    .card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        padding: var(--space-4);
    }
    .card h3 {
        font-size: 16px;
        margin-bottom: 6px;
    }
    .card p {
        color: var(--text-muted);
    }
`,U=n.section`
    display: grid;
    gap: var(--space-4);
    grid-template-columns: repeat(6, minmax(0, 1fr));
    @media (width < 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (width < 560px) {
        grid-template-columns: repeat(2, 1fr);
    }

    .shot {
        display: grid;
        gap: 6px;
        text-align: center;
    }
    .img {
        aspect-ratio: 4/3;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: linear-gradient(
                0deg,
                hsl(210 90% 56% / 0.1),
                hsl(210 90% 56% / 0.04)
            ),
            var(--card);
        box-shadow: var(--shadow-sm);
    }
    figcaption {
        color: var(--text-muted);
        font-size: 12px;
    }
`,Z=n.section`
    .ctaCard {
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        padding: var(--space-6);
        display: grid;
        gap: var(--space-3);
        text-align: center;
    }
    .muted {
        color: var(--text-muted);
    }
    .row {
        display: flex;
        gap: 12px;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 6px;
    }
    .btn {
        height: 38px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn.ghost {
        background: var(--surface);
    }
`;P.defaultProps={};n(P)`
    .quote {
        border-left: 4px solid var(--border);
        padding-left: var(--space-4);
        color: var(--text);
    }
    .quote p {
        font-size: 18px;
    }
    .quote footer {
        color: var(--text-muted);
        margin-top: 8px;
    }
`;const X=n.div`
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

    /* Form controls */
    form {
        display: grid;
        gap: 14px;
    }
    .fld {
        display: grid;
        gap: 6px;
    }
    .fld span {
        font-size: 12px;
        color: var(--text-muted);
    }
    input[type="email"],
    input[type="password"],
    input[type="text"] {
        height: 38px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 12px;
        outline: none;
    }
    input:focus {
        box-shadow: var(--focus-ring);
        border-color: transparent;
    }
    .pwWrap {
        position: relative;
    }
    .pwWrap input {
        width: 100%;
        padding-right: 40px;
    }
    .eye {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        height: 28px;
        width: 28px;
        border-radius: 8px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        display: grid;
        place-items: center;
        cursor: pointer;
    }

    .err {
        color: hsl(8 80% 58%);
        font-size: 12px;
    }

    .btnRow {
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        margin-top: 6px;
    }
    .btn {
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }

    .success {
        display: grid;
        gap: 6px;
    }
    .success h4 {
        font-size: 18px;
    }
`,d={Wrapper:K,Progress:$,Hero:Q,Section:P,Gallery:U,CTA:Z},_=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,ee=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;function B(){return typeof document>"u"?null:document.querySelector("[data-scroll-root]")||window}function re(){const a=B();if(!a)return;try{if(a===window){window.scrollTo({top:0,behavior:"smooth"});return}if(typeof a.scrollTo=="function"){a.scrollTo({top:0,behavior:"smooth"});return}}catch{}const N=a===window?window.scrollY||document.documentElement.scrollTop||0:a.scrollTop,S=500;let c;const E=o=>o*(2-o);function x(o){c||(c=o);const p=Math.min(1,(o-c)/S),l=Math.round(N*(1-E(p)));a===window?window.scrollTo(0,l):a.scrollTop=l,p<1&&requestAnimationFrame(x)}requestAnimationFrame(x)}const M={hidden:{y:28,opacity:0,filter:"blur(2px)"},visible:{y:0,opacity:1,filter:"blur(0px)",transition:{duration:.55,ease:[.22,1,.36,1]}}},H={hidden:{y:20,opacity:0,rotate:-1.5},visible:{y:0,opacity:1,rotate:0,transition:{duration:.5,ease:[.22,1,.36,1]}}};function oe(){const a=J(0),N=t.useRef(null);t.useEffect(()=>{const r=B();if(!r)return;const s=()=>{let h,y,j;r===window?(h=window.scrollY||document.documentElement.scrollTop||0,y=document.documentElement.scrollHeight||1,j=window.innerHeight||1):(h=r.scrollTop,y=r.scrollHeight||1,j=r.clientHeight||1);const L=Math.max(0,Math.min(1,y-j>0?h/(y-j):0));a.set(L)};return s(),r.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s),()=>{r.removeEventListener("scroll",s),window.removeEventListener("resize",s)}},[a]);const S=k(a,[0,1],["0%","100%"]),c=k(a,[0,1],["0px","-80px"]),E=k(a,[0,1],["0px","-40px"]),x=k(a,[0,1],[.15,.35]),[o,p]=t.useState(!1),[l,F]=t.useState(!1),[u,R]=t.useState(""),[m,q]=t.useState(""),[g,v]=t.useState({email:!1,pwd:!1}),[O,T]=t.useState(!1),[W,z]=t.useState(!1),b=t.useMemo(()=>g.email?u?_.test(u)?"":"Enter a valid email address.":"Email is required.":"",[u,g.email]),f=t.useMemo(()=>g.pwd?m?ee.test(m)?"":"Min 8 chars, 1 uppercase, 1 lowercase, 1 number.":"Password is required.":"",[m,g.pwd]),C=!b&&!f&&u&&m&&!O;function A(){p(!0),z(!1)}function w(){p(!1),T(!1),z(!1),R(""),q(""),v({email:!1,pwd:!1})}async function I(r){r.preventDefault(),v({email:!0,pwd:!0}),C&&(T(!0),await new Promise(s=>setTimeout(s,700)),T(!1),z(!0))}return t.useEffect(()=>{if(!o)return;const r=s=>s.key==="Escape"&&w();return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[o]),e.jsx(D,{children:e.jsxs(d.Wrapper,{ref:N,children:[e.jsx(d.Progress,{"aria-hidden":"true",children:e.jsx(i.div,{className:"bar",style:{width:S}})}),e.jsx(d.Hero,{children:e.jsxs("div",{className:"heroInner",children:[e.jsx(i.div,{className:"bg",style:{y:c},"aria-hidden":!0}),e.jsxs(i.div,{className:"fg",style:{y:E},children:[e.jsx(i.h1,{initial:{y:18,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6,ease:[.22,1,.36,1]},children:"Reveal on Scroll"}),e.jsx(i.p,{className:"muted",initial:{y:18,opacity:0},animate:{y:0,opacity:1},transition:{delay:.08,duration:.55,ease:[.22,1,.36,1]},children:"Parallax hero, staggered sections, and a clean CTA modal - all theme-aware and buttery."}),e.jsxs(i.div,{className:"ctaRow",initial:{y:18,opacity:0},animate:{y:0,opacity:1},transition:{delay:.16,duration:.55,ease:[.22,1,.36,1]},children:[e.jsx("button",{className:"btn primary",onClick:A,children:"Get early access"}),e.jsx(i.span,{className:"gloss",style:{opacity:x}})]})]})]})}),e.jsxs(d.Section,{children:[e.jsx(i.h2,{variants:M,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},children:"Why this feels premium"}),e.jsx("div",{className:"grid",children:[["Transforms only","Opacity + transform → crisp GPU paths."],["Short timelines","Sub-600ms curves tuned for snappiness."],["Accessible","Reduced motion respected in real apps."],["Theme-aware","Dark/light tokens for every surface."],["Parallax lite","Tiny offsets - no wobble, just depth."],["Modals done right","Blurred overlay, centered, keyboard-friendly."]].map(([r,s],h)=>e.jsxs(i.article,{className:"card",variants:H,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},children:[e.jsx("h3",{children:r}),e.jsx("p",{children:s})]},h))})]}),e.jsx(d.Section,{children:e.jsxs(i.blockquote,{className:"quote",variants:M,initial:"hidden",whileInView:"visible",viewport:{amount:.4},children:[e.jsx("p",{children:"“Motion is seasoning. Overdo it and you ruin the dish; use it wisely and everything tastes better.”"}),e.jsx("footer",{children:"- A friendly senior engineer"})]})}),e.jsx(d.Gallery,{children:[1,2,3,4,5,6].map(r=>e.jsxs(i.figure,{className:"shot",variants:H,initial:"hidden",whileInView:"visible",viewport:{amount:.25},children:[e.jsx("div",{className:"img"}),e.jsxs("figcaption",{children:["Scene ",r]})]},r))}),e.jsx(d.CTA,{children:e.jsxs(i.div,{className:"ctaCard",variants:M,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.35},children:[e.jsx("h3",{children:"Like this pattern?"}),e.jsx("p",{className:"muted",children:"Join the early list for more animation recipes & code."}),e.jsxs("div",{className:"row",children:[e.jsx("button",{className:"btn primary",onClick:A,children:"Join waitlist"}),e.jsx("button",{className:"btn ghost",onClick:re,children:"Back to top"})]})]})}),e.jsx(V,{children:o&&e.jsx(X,{as:i.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:r=>r.target===r.currentTarget&&w(),children:e.jsxs(i.div,{className:"modal",initial:{y:24,scale:.98,opacity:0},animate:{y:0,scale:1,opacity:1,transition:{type:"spring",stiffness:280,damping:28}},exit:{y:12,scale:.98,opacity:0,transition:{duration:.2}},role:"dialog","aria-modal":"true","aria-labelledby":"m-title",children:[e.jsx("div",{className:"mHead",children:e.jsx("h3",{id:"m-title",children:"Join the waitlist"})}),e.jsx("div",{className:"mBody",children:W?e.jsxs("div",{className:"success",children:[e.jsx("h4",{children:"You're on the list 🎉"}),e.jsx("p",{className:"muted",children:"We’ll email you when new demos land."})]}):e.jsxs("form",{onSubmit:I,noValidate:!0,children:[e.jsx("p",{className:"muted",children:"Enter your email and create a password."}),e.jsxs("label",{className:"fld",children:[e.jsx("span",{children:"Email"}),e.jsx("input",{type:"email",value:u,onChange:r=>R(r.target.value),onBlur:()=>v(r=>({...r,email:!0})),placeholder:"you@example.com","aria-invalid":!!b,"aria-describedby":"err-email",required:!0}),b&&e.jsx("em",{id:"err-email",className:"err",children:b})]}),e.jsxs("label",{className:"fld",children:[e.jsx("span",{children:"Password"}),e.jsxs("div",{className:"pwWrap",children:[e.jsx("input",{type:l?"text":"password",value:m,onChange:r=>q(r.target.value),onBlur:()=>v(r=>({...r,pwd:!0})),placeholder:"********","aria-invalid":!!f,"aria-describedby":"err-pwd",required:!0}),e.jsx("button",{type:"button",className:"eye","aria-label":l?"Hide password":"Show password",onClick:()=>F(r=>!r),children:l?e.jsx(Y,{size:18}):e.jsx(G,{size:18})})]}),f&&e.jsx("em",{id:"err-pwd",className:"err",children:f})]}),e.jsxs("div",{className:"btnRow",children:[e.jsx("button",{className:"btn primary",type:"submit",disabled:!C,"aria-disabled":!C,children:O?"Submitting…":"Join"}),e.jsx("button",{type:"button",className:"btn ghost",onClick:w,children:"Cancel"})]})]})}),e.jsx("div",{className:"mFoot",children:e.jsx("button",{className:"closeBtn",onClick:w,children:"Close"})})]})})})]})})}export{oe as default};
