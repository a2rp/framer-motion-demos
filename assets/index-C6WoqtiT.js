import{d,r as t,j as e,A as M}from"./index-GOg7KvvH.js";import{u as re}from"./use-motion-value-DbWq_iYI.js";import{u as ae}from"./use-spring-AGDvz4Vr.js";import{u as B}from"./use-transform-CLAk5m54.js";import{M as te,m as i}from"./proxy-DRUkQ78w.js";const ie=d.div`
    position: sticky;
    top: 0;
    z-index: 10;
    background: var(--card);
    border-bottom: 1px solid var(--border);
    box-shadow: var(--shadow-sm);

    .topInner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-4);
        padding: 12px var(--space-6);
    }
    .titles h1 {
        font-size: 22px;
        line-height: 1.2;
        color: var(--text);
    }
    .titles .muted {
        color: var(--text-muted);
    }
    .titles .activeLabel {
        color: var(--text);
        font-weight: 600;
    }

    .meta {
        display: inline-flex;
        gap: var(--space-4);
        align-items: center;
    }
    .timeLeft {
        display: inline-flex;
        gap: 8px;
        align-items: center;
        color: var(--text-muted);
        svg {
            opacity: 0.8;
        }
    }

    .btn {
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-md);
        height: 36px;
        padding: 0 14px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
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

    .track {
        position: relative;
        height: 6px;
        background: color-mix(in oklab, var(--border) 65%, transparent);
        overflow: visible;
    }

    .bar {
        position: absolute;
        inset: 0 0 0 0;
        transform-origin: left center;
        height: 100%;
        width: 100%;
        background: linear-gradient(
            90deg,
            hsl(210 90% 60% / 0.95),
            hsl(210 90% 56% / 0.95) 50%,
            hsl(210 90% 62% / 0.95) 100%
        );
        box-shadow: 0 0 12px hsl(210 90% 56% / 0.25);
    }

    .tick {
        position: absolute;
        top: 0;
        height: 100%;
        width: 2px;
        background: color-mix(in oklab, var(--primary) 50%, var(--border));
        transform: translateX(-1px);
        opacity: 0.6;
    }
    .tick.is-active {
        background: var(--primary);
        box-shadow: 0 0 10px hsl(210 90% 56% / 0.45);
        opacity: 1;
    }

    .chip {
        position: absolute;
        top: -24px;
        transform: translateX(-50%);
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: 999px;
        padding: 2px 8px;
        box-shadow: var(--shadow-sm);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 44px;
    }
    .chip b {
        color: var(--text);
    }
    .chip em {
        color: var(--text-muted);
        font-style: normal;
        margin-left: 2px;
    }
`,oe=d.div`
    color: var(--text);
    display: grid;
    gap: var(--space-6);

    .fab {
        position: fixed;
        right: 18px;
        bottom: 18px;
        width: 44px;
        height: 44px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-md);
        cursor: pointer;
    }
`,se=d.div`
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: var(--space-6);
    align-items: start;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;

    @media (width < 1080px) {
        grid-template-columns: 1fr;
    }
`,ne=d.article`
    max-width: 900px;
    padding: var(--space-6);

    .block {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        padding: var(--space-6);
        box-shadow: var(--shadow-sm);
        display: grid;
        gap: var(--space-3);
    }
    .block.is-active {
        outline: 2px solid color-mix(in oklab, var(--primary) 36%, transparent);
        outline-offset: -2px;
    }

    .bHead h2 {
        font-size: 20px;
    }

    p {
        color: var(--text);
        line-height: 1.8;
    }

    @media (width < 560px) {
        padding: var(--space-4);
        .block {
            padding: var(--space-4);
        }
    }
`,de=d.div`
    padding: var(--space-6) 0;

    .rule {
        height: 1px;
        background: var(--border);
        margin: var(--space-6) 0;
    }
    .cta {
        display: flex;
        justify-content: center;
    }
    .btn {
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        height: 36px;
        padding: 0 14px;
        cursor: pointer;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
`,le=d.aside`
    position: sticky;
    top: 70px; /* below your header */
    align-self: start;

    .railInner {
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-sm);
        padding: var(--space-4);
        display: grid;
        gap: var(--space-3);
    }
    h3 {
        font-size: 14px;
        color: var(--text-muted);
    }
    ul {
        list-style: none;
        display: grid;
        gap: 6px;
        padding: 0;
        margin: 0;
    }
    .railItem {
        width: 100%;
        display: grid;
        grid-template-columns: 14px 1fr;
        align-items: center;
        gap: 8px;
        border: 1px solid transparent;
        background: transparent;
        color: var(--text);
        border-radius: var(--radius-md);
        height: 34px;
        padding: 0 8px;
        cursor: pointer;
    }
    .railItem .dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: var(--border);
    }
    .railItem.active {
        border-color: var(--border);
        background: var(--surface);
        box-shadow: var(--shadow-sm);
    }
    .railItem.active .dot {
        background: var(--primary);
        box-shadow: 0 0 10px hsl(210 90% 56% / 0.45);
    }
`,ce=d.div`
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

    /* Form */
    .form {
        display: grid;
        gap: var(--space-4);
    }
    .field {
        display: grid;
        gap: 6px;
    }
    .field span {
        font-size: 12px;
        color: var(--text-muted);
    }
    input {
        height: 36px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--surface);
        color: var(--text);
        padding: 0 10px;
        outline: none;
    }
    input:focus {
        box-shadow: var(--focus-ring);
    }
    .pwWrap {
        position: relative;
        display: grid;
    }
    .pwWrap input {
        padding-right: 36px;
    }
    .eye {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        border: none;
        background: transparent;
        color: var(--text);
        width: 28px;
        height: 28px;
        border-radius: var(--radius-sm);
        display: grid;
        place-items: center;
        cursor: pointer;
    }
    .eye:focus-visible {
        outline: none;
        box-shadow: var(--focus-ring);
    }
    .error {
        color: hsl(0 70% 60%);
        font-size: 12px;
    }
    .actions {
        margin-top: 4px;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        height: 36px;
        padding: 0 14px;
        cursor: pointer;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .success {
        margin-top: 10px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: var(--text);
    }
    .success .dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: hsl(145 70% 45%);
    }
`,h={Wrapper:oe,TopBar:ie,Layout:se,Article:ne,Dividers:de,Rail:le},n=[{id:"intro",title:"Why reading progress bars work",body:"Progress indicators reduce uncertainty. They tell the reader how far they’ve come and how far they’ve yet to go. Used sparingly, they increase completion rates without nagging or gimmicks."},{id:"design",title:"Design principles",body:"Keep the bar thin, high-contrast, and free of text. Don’t hijack scroll. Avoid heavy shadows. Prefer transform-based animations for performance. Respect reduced motion in production."},{id:"impl",title:"Implementation notes",body:"Bind to the real scroll container—not the window—especially in SPA shells. Throttle work. Use transform scaleX for the fill. For scrollytelling, combine section reveals with stagger."},{id:"perf",title:"Performance & a11y",body:"Avoid expensive layout thrashing. Use passive listeners and MotionValue springs. Ensure headings are navigable and the content order remains logical for screen readers."},{id:"ux",title:"Time left & guidance",body:"A simple time-left indicator reduces abandonment. Estimate remaining time using a conservative baseline and current progress."},{id:"wrap",title:"When not to use",body:"If your content is non-linear, heavily interactive, or paginated, a linear progress bar may mislead. Don’t add decoration that suggests precision you don’t have."}];function pe(o){return(o.map(l=>`${l.title} ${l.body}`).join(" ").match(/\S+/g)||[]).length}const W=pe(n),me=200,R=Math.max(1,Math.ceil(W/me)),H=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,L=o=>typeof o=="string"&&o.length>=8&&/[A-Za-z]/.test(o)&&/\d/.test(o);function fe(){var A;const o=t.useRef(null);t.useEffect(()=>{o.current=document.querySelector("[data-scroll-root]")||document.scrollingElement||document.documentElement},[]);const s=re(0),l=ae(s,{stiffness:220,damping:24,mass:.6}),D=B(l,r=>Math.round(r*100)),$=B(l,r=>`${r*100}%`),u=t.useRef({}),[F,O]=t.useState([]),[x,V]=t.useState(n[0].id);t.useEffect(()=>{const r=o.current;if(!r)return;const a=()=>{const k=Math.max(1,r.scrollHeight-r.clientHeight),N=Math.min(1,Math.max(0,r.scrollTop/k));s.set(N);let m=x;const f=r.scrollTop+80;for(const y of n){const P=u.current[y.id];if(!P)continue;P.offsetTop<=f&&(m=y.id)}V(m)},p=()=>{const k=Math.max(1,r.scrollHeight-r.clientHeight),N=n.map(m=>{const f=u.current[m.id];if(!f)return{id:m.id,leftPct:0};const y=Math.min(1,Math.max(0,f.offsetTop/k));return{id:m.id,leftPct:y*100}});O(N)};a(),p();const E=()=>a(),I=()=>{p(),a()};r.addEventListener("scroll",E,{passive:!0}),window.addEventListener("resize",I,{passive:!0});const ee=requestAnimationFrame(()=>{p(),a()});return()=>{cancelAnimationFrame(ee),r.removeEventListener("scroll",E),window.removeEventListener("resize",I)}},[]);const[q,w]=t.useState(!1),[g,X]=t.useState(""),[v,U]=t.useState(""),[b,G]=t.useState(!1),[c,S]=t.useState({}),[K,T]=t.useState(!1),C=t.useMemo(()=>H.test(g)&&L(v),[g,v]),z=()=>{w(!0),T(!1),S({})},j=()=>w(!1),Y=r=>{r.preventDefault();const a={};H.test(g)||(a.email="Enter a valid email."),L(v)||(a.pw="Password must be 8+ chars with letters and numbers."),S(a),Object.keys(a).length===0&&(T(!0),setTimeout(()=>w(!1),900))},Z=t.useMemo(()=>{const r=Math.max(0,1-s.get());return Math.ceil(r*R)},[s]),_=r=>{const a=o.current,p=u.current[r];!a||!p||a.scrollTo({top:p.offsetTop-16,behavior:"smooth"})},J=()=>{(o.current||window).scrollTo({top:0,behavior:"smooth"})},Q={hidden:{y:16,opacity:0},show:{y:0,opacity:1,transition:{duration:.42,ease:[.22,1,.36,1]}}};return e.jsx(te,{reducedMotion:"never",children:e.jsxs(h.Wrapper,{children:[e.jsxs(h.TopBar,{children:[e.jsxs("div",{className:"topInner",children:[e.jsxs("div",{className:"titles",children:[e.jsx("h1",{children:"Reading Progress"}),e.jsxs("p",{className:"muted",children:["~",R," min read • ",W," words • ",e.jsx("span",{className:"activeLabel",children:(A=n.find(r=>r.id===x))==null?void 0:A.title})]})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("div",{className:"timeLeft",title:"Time left (estimate)",children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",children:e.jsx("path",{fill:"currentColor",d:"M12 1a11 11 0 1011 11A11.014 11.014 0 0012 1zm1 11H7V11h5V5h1z"})}),e.jsxs("span",{children:[Z," min left"]})]}),e.jsxs("button",{className:"btn ghost",onClick:z,title:"Bookmark",children:[e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":!0,children:e.jsx("path",{fill:"currentColor",d:"M6 2h12a2 2 0 012 2v18l-8-4-8 4V4a2 2 0 012-2z"})}),e.jsx("span",{children:"Bookmark"})]})]})]}),e.jsxs("div",{className:"track","aria-hidden":"true",children:[F.map(r=>e.jsx("span",{className:`tick ${r.id===x?"is-active":""}`,style:{left:`${r.leftPct}%`}},r.id)),e.jsx(i.div,{className:"bar",style:{scaleX:l}}),e.jsx(i.div,{className:"chip",style:{left:$},children:e.jsxs(i.span,{initial:{y:6,opacity:0},animate:{y:0,opacity:1},exit:{y:-6,opacity:0},children:[e.jsx(i.b,{children:D}),e.jsx("em",{children:"%"})]},"pct")})]})]}),e.jsxs(h.Layout,{children:[e.jsxs(h.Article,{children:[n.map(r=>e.jsxs(i.section,{ref:a=>u.current[r.id]=a,className:`block ${x===r.id?"is-active":""}`,variants:Q,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.35,margin:"0px 0px -60px 0px"},children:[e.jsx("header",{className:"bHead",children:e.jsx("h2",{id:r.id,children:r.title})}),e.jsx("p",{children:r.body})]},r.id)),e.jsxs(h.Dividers,{children:[e.jsx("div",{className:"rule"}),e.jsx("div",{className:"cta",children:e.jsx(i.button,{className:"btn primary",onClick:z,whileTap:{scale:.98},whileHover:{y:-1},children:"Save progress"})})]})]}),e.jsx(h.Rail,{children:e.jsxs("div",{className:"railInner",children:[e.jsx("h3",{children:"On this page"}),e.jsx("ul",{children:n.map(r=>e.jsx("li",{children:e.jsxs(i.button,{className:`railItem ${x===r.id?"active":""}`,onClick:()=>_(r.id),whileHover:{x:2},whileTap:{scale:.98},children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"label",children:r.title})]})},r.id))})]})})]}),e.jsx(M,{children:e.jsx(i.button,{className:"fab",onClick:J,initial:!1,animate:{opacity:s.get()>.25?1:0,y:s.get()>.25?0:20,pointerEvents:s.get()>.25?"auto":"none"},transition:{duration:.25},title:"Back to top",children:"↑"},"fab")}),e.jsx(M,{children:q&&e.jsx(ce,{as:i.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:r=>{r.target===r.currentTarget&&j()},"aria-modal":"true",role:"dialog","aria-labelledby":"bookmarkTitle",children:e.jsxs(i.div,{className:"modal",initial:{y:20,opacity:0,scale:.98},animate:{y:0,opacity:1,scale:1,transition:{duration:.32,ease:[.22,1,.36,1]}},exit:{y:8,opacity:0,scale:.98,transition:{duration:.2}},onClick:r=>r.stopPropagation(),children:[e.jsx("div",{className:"mHead",children:e.jsx("h3",{id:"bookmarkTitle",children:"Save your place"})}),e.jsxs("div",{className:"mBody",children:[e.jsx("p",{className:"muted",children:"We’ll remember where you left off on this device."}),e.jsxs("form",{onSubmit:Y,className:"form",children:[e.jsxs("label",{className:"field",children:[e.jsx("span",{children:"Email"}),e.jsx("input",{type:"email",value:g,onChange:r=>X(r.target.value),placeholder:"you@domain.com",autoComplete:"email",required:!0,"aria-invalid":!!c.email}),c.email&&e.jsx("em",{className:"error",children:c.email})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{children:"Password"}),e.jsxs("div",{className:"pwWrap",children:[e.jsx("input",{type:b?"text":"password",value:v,onChange:r=>U(r.target.value),placeholder:"8+ chars, letters & numbers",autoComplete:"current-password",required:!0,"aria-invalid":!!c.pw}),e.jsx("button",{type:"button",className:"eye","aria-label":b?"Hide password":"Show password",onClick:()=>G(r=>!r),title:b?"Hide":"Show",children:b?e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,children:e.jsx("path",{fill:"currentColor",d:"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zm10 3a3 3 0 100-6 3 3 0 000 6z"})}):e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,children:e.jsx("path",{fill:"currentColor",d:"M3.27 2L2 3.27l3.1 3.1A13.2 13.2 0 002 12s3.5 7 10 7a9.9 9.9 0 004.89-1.28l3.84 3.84L22 20.73 3.27 2zM12 17c-6.5 0-9-5-9-5a16.6 16.6 0 013.32-3.66l1.56 1.56A3.98 3.98 0 008 12a4 4 0 006.83 2.83l1.38 1.38A8.8 8.8 0 0112 17zm0-10c6.5 0 10 5 10 5a16.4 16.4 0 01-3.06 3.38l-2.2-2.2A3.98 3.98 0 0012 8a3.9 3.9 0 00-1.28.22l-1.6-1.6A10 10 0 0112 7z"})})})]}),c.pw&&e.jsx("em",{className:"error",children:c.pw})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{type:"button",className:"btn ghost",onClick:j,children:"Cancel"}),e.jsx(i.button,{type:"submit",className:"btn primary",disabled:!C,whileTap:{scale:.98},animate:C?{opacity:1}:{opacity:.6},children:"Save"})]})]}),e.jsx(M,{initial:!1,children:K&&e.jsxs(i.div,{className:"success",initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},transition:{duration:.25},role:"status",children:[e.jsx("span",{className:"dot"}),"Bookmark saved!"]})})]}),e.jsx("div",{className:"mFoot",children:e.jsx("button",{className:"closeBtn",onClick:j,children:"Close"})})]})},"bookmark-modal")})]})})}export{fe as default};
