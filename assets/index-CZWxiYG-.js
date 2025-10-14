import{d as n,G as O,r as i,j as e,A as G}from"./index-GOg7KvvH.js";import{u as Y}from"./use-motion-value-DbWq_iYI.js";import{u as k}from"./use-transform-CLAk5m54.js";import{M as J,m as t}from"./proxy-DRUkQ78w.js";const Q=n.div`
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
`,D=n.main`
    display: grid;
    gap: var(--space-8);
    padding: var(--space-6);
    color: var(--text);
`,$=n.section`
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
`,q=n.section`
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
`,K=n.section`
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
`,U=n.section`
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
`;q.defaultProps={};n(q)`
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
`;const Z=n.div`
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
`,d={Wrapper:D,Progress:Q,Hero:$,Section:q,Gallery:K,CTA:U};function X(a){return O({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"},child:[]},{tag:"path",attr:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"},child:[]}]})(a)}function _(a){return O({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"},child:[]}]})(a)}const ee=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,re=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;function H(){return typeof document>"u"?null:document.querySelector("[data-scroll-root]")||window}function ae(){const a=H();if(!a)return;try{if(a===window){window.scrollTo({top:0,behavior:"smooth"});return}if(typeof a.scrollTo=="function"){a.scrollTo({top:0,behavior:"smooth"});return}}catch{}const N=a===window?window.scrollY||document.documentElement.scrollTop||0:a.scrollTop,z=500;let c;const S=o=>o*(2-o);function x(o){c||(c=o);const p=Math.min(1,(o-c)/z),l=Math.round(N*(1-S(p)));a===window?window.scrollTo(0,l):a.scrollTop=l,p<1&&requestAnimationFrame(x)}requestAnimationFrame(x)}const M={hidden:{y:28,opacity:0,filter:"blur(2px)"},visible:{y:0,opacity:1,filter:"blur(0px)",transition:{duration:.55,ease:[.22,1,.36,1]}}},B={hidden:{y:20,opacity:0,rotate:-1.5},visible:{y:0,opacity:1,rotate:0,transition:{duration:.5,ease:[.22,1,.36,1]}}};function ne(){const a=Y(0),N=i.useRef(null);i.useEffect(()=>{const r=H();if(!r)return;const s=()=>{let h,y,j;r===window?(h=window.scrollY||document.documentElement.scrollTop||0,y=document.documentElement.scrollHeight||1,j=window.innerHeight||1):(h=r.scrollTop,y=r.scrollHeight||1,j=r.clientHeight||1);const V=Math.max(0,Math.min(1,y-j>0?h/(y-j):0));a.set(V)};return s(),r.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s),()=>{r.removeEventListener("scroll",s),window.removeEventListener("resize",s)}},[a]);const z=k(a,[0,1],["0%","100%"]),c=k(a,[0,1],["0px","-80px"]),S=k(a,[0,1],["0px","-40px"]),x=k(a,[0,1],[.15,.35]),[o,p]=i.useState(!1),[l,I]=i.useState(!1),[u,P]=i.useState(""),[m,A]=i.useState(""),[g,v]=i.useState({email:!1,pwd:!1}),[L,C]=i.useState(!1),[W,E]=i.useState(!1),b=i.useMemo(()=>g.email?u?ee.test(u)?"":"Enter a valid email address.":"Email is required.":"",[u,g.email]),w=i.useMemo(()=>g.pwd?m?re.test(m)?"":"Min 8 chars, 1 uppercase, 1 lowercase, 1 number.":"Password is required.":"",[m,g.pwd]),T=!b&&!w&&u&&m&&!L;function R(){p(!0),E(!1)}function f(){p(!1),C(!1),E(!1),P(""),A(""),v({email:!1,pwd:!1})}async function F(r){r.preventDefault(),v({email:!0,pwd:!0}),T&&(C(!0),await new Promise(s=>setTimeout(s,700)),C(!1),E(!0))}return i.useEffect(()=>{if(!o)return;const r=s=>s.key==="Escape"&&f();return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[o]),e.jsx(J,{children:e.jsxs(d.Wrapper,{ref:N,children:[e.jsx(d.Progress,{"aria-hidden":"true",children:e.jsx(t.div,{className:"bar",style:{width:z}})}),e.jsx(d.Hero,{children:e.jsxs("div",{className:"heroInner",children:[e.jsx(t.div,{className:"bg",style:{y:c},"aria-hidden":!0}),e.jsxs(t.div,{className:"fg",style:{y:S},children:[e.jsx(t.h1,{initial:{y:18,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6,ease:[.22,1,.36,1]},children:"Reveal on Scroll"}),e.jsx(t.p,{className:"muted",initial:{y:18,opacity:0},animate:{y:0,opacity:1},transition:{delay:.08,duration:.55,ease:[.22,1,.36,1]},children:"Parallax hero, staggered sections, and a clean CTA modal — all theme-aware and buttery."}),e.jsxs(t.div,{className:"ctaRow",initial:{y:18,opacity:0},animate:{y:0,opacity:1},transition:{delay:.16,duration:.55,ease:[.22,1,.36,1]},children:[e.jsx("button",{className:"btn primary",onClick:R,children:"Get early access"}),e.jsx(t.span,{className:"gloss",style:{opacity:x}})]})]})]})}),e.jsxs(d.Section,{children:[e.jsx(t.h2,{variants:M,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},children:"Why this feels premium"}),e.jsx("div",{className:"grid",children:[["Transforms only","Opacity + transform → crisp GPU paths."],["Short timelines","Sub-600ms curves tuned for snappiness."],["Accessible","Reduced motion respected in real apps."],["Theme-aware","Dark/light tokens for every surface."],["Parallax lite","Tiny offsets — no wobble, just depth."],["Modals done right","Blurred overlay, centered, keyboard-friendly."]].map(([r,s],h)=>e.jsxs(t.article,{className:"card",variants:B,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},children:[e.jsx("h3",{children:r}),e.jsx("p",{children:s})]},h))})]}),e.jsx(d.Section,{children:e.jsxs(t.blockquote,{className:"quote",variants:M,initial:"hidden",whileInView:"visible",viewport:{amount:.4},children:[e.jsx("p",{children:"“Motion is seasoning. Overdo it and you ruin the dish; use it wisely and everything tastes better.”"}),e.jsx("footer",{children:"— A friendly senior engineer"})]})}),e.jsx(d.Gallery,{children:[1,2,3,4,5,6].map(r=>e.jsxs(t.figure,{className:"shot",variants:B,initial:"hidden",whileInView:"visible",viewport:{amount:.25},children:[e.jsx("div",{className:"img"}),e.jsxs("figcaption",{children:["Scene ",r]})]},r))}),e.jsx(d.CTA,{children:e.jsxs(t.div,{className:"ctaCard",variants:M,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.35},children:[e.jsx("h3",{children:"Like this pattern?"}),e.jsx("p",{className:"muted",children:"Join the early list for more animation recipes & code."}),e.jsxs("div",{className:"row",children:[e.jsx("button",{className:"btn primary",onClick:R,children:"Join waitlist"}),e.jsx("button",{className:"btn ghost",onClick:ae,children:"Back to top"})]})]})}),e.jsx(G,{children:o&&e.jsx(Z,{as:t.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:r=>r.target===r.currentTarget&&f(),children:e.jsxs(t.div,{className:"modal",initial:{y:24,scale:.98,opacity:0},animate:{y:0,scale:1,opacity:1,transition:{type:"spring",stiffness:280,damping:28}},exit:{y:12,scale:.98,opacity:0,transition:{duration:.2}},role:"dialog","aria-modal":"true","aria-labelledby":"m-title",children:[e.jsx("div",{className:"mHead",children:e.jsx("h3",{id:"m-title",children:"Join the waitlist"})}),e.jsx("div",{className:"mBody",children:W?e.jsxs("div",{className:"success",children:[e.jsx("h4",{children:"You're on the list 🎉"}),e.jsx("p",{className:"muted",children:"We’ll email you when new demos land."})]}):e.jsxs("form",{onSubmit:F,noValidate:!0,children:[e.jsx("p",{className:"muted",children:"Enter your email and create a password."}),e.jsxs("label",{className:"fld",children:[e.jsx("span",{children:"Email"}),e.jsx("input",{type:"email",value:u,onChange:r=>P(r.target.value),onBlur:()=>v(r=>({...r,email:!0})),placeholder:"you@example.com","aria-invalid":!!b,"aria-describedby":"err-email",required:!0}),b&&e.jsx("em",{id:"err-email",className:"err",children:b})]}),e.jsxs("label",{className:"fld",children:[e.jsx("span",{children:"Password"}),e.jsxs("div",{className:"pwWrap",children:[e.jsx("input",{type:l?"text":"password",value:m,onChange:r=>A(r.target.value),onBlur:()=>v(r=>({...r,pwd:!0})),placeholder:"********","aria-invalid":!!w,"aria-describedby":"err-pwd",required:!0}),e.jsx("button",{type:"button",className:"eye","aria-label":l?"Hide password":"Show password",onClick:()=>I(r=>!r),children:l?e.jsx(X,{size:18}):e.jsx(_,{size:18})})]}),w&&e.jsx("em",{id:"err-pwd",className:"err",children:w})]}),e.jsxs("div",{className:"btnRow",children:[e.jsx("button",{className:"btn primary",type:"submit",disabled:!T,"aria-disabled":!T,children:L?"Submitting…":"Join"}),e.jsx("button",{type:"button",className:"btn ghost",onClick:f,children:"Cancel"})]})]})}),e.jsx("div",{className:"mFoot",children:e.jsx("button",{className:"closeBtn",onClick:f,children:"Close"})})]})})})]})})}export{ne as default};
