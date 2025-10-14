import{d as n,r as o,j as r,A as C}from"./index-B-21U0DQ.js";import{u as F}from"./use-scroll-YTw2CLgq.js";import{u as x}from"./use-transform-Cylj3xKs.js";import{M as z,m as l}from"./proxy-BihD2B5F.js";import"./use-motion-value-DG1npRlY.js";const H=n.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);
`,M=n.header`
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

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 8px 14px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
`,P=n.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);
    overflow: hidden;

    .block {
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--surface);
        padding: var(--space-6);
        box-shadow: var(--shadow-sm);
        & + .block {
            margin-top: var(--space-6);
        }
    }

    .bHead {
        display: grid;
        gap: 6px;
        margin-bottom: var(--space-4);
    }
    .kicker {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 11px;
        color: var(--text-muted);
    }
    h2 {
        font-size: 20px;
    }
    .body {
        color: var(--text);
        margin-bottom: var(--space-3);
    }
    .bullets {
        margin-left: 18px;
        display: grid;
        gap: 6px;
        color: var(--text);
    }

    /* ---- FAB ---- */
    .fab {
        position: fixed; /* pinned to viewport; works with container scroll too */
        right: calc(24px + env(safe-area-inset-right, 0px));
        bottom: calc(24px + env(safe-area-inset-bottom, 0px));
        width: 48px;
        height: 48px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: 0 8px 24px hsl(0 0% 0% / 0.25);
        cursor: pointer;
        display: grid;
        place-items: center;
        isolation: isolate; /* make tooltip and ring layers sane */
        transform-origin: center;
        outline: none;
    }

    .fab:focus-visible {
        box-shadow: 0 8px 24px hsl(0 0% 0% / 0.25), var(--focus-ring);
    }

    .fab .icon {
        position: relative;
        z-index: 2;
        font-size: 18px;
        line-height: 1;
    }

    /* Progress ring (SVG circles) */
    .ring {
        position: absolute;
        inset: 0;
        z-index: 1;
    }
    .track {
        fill: none;
        stroke: hsl(0 0% 100% / 0.25);
        stroke-width: 4;
    }
    .progress {
        fill: none;
        stroke: var(--primary-contrast);
        stroke-linecap: round;
        stroke-width: 4;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
        filter: drop-shadow(0 1px 2px hsl(0 0% 0% / 0.2));
    }

    /* Tooltip */
    .tooltip {
        position: absolute;
        right: 56px;
        bottom: 8px;
        padding: 6px 10px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        opacity: 0;
        transform: translateY(4px);
        transition: opacity 0.18s ease, transform 0.18s ease;
        pointer-events: none;
        white-space: nowrap;
        z-index: 3;
    }
    .fab:hover .tooltip {
        opacity: 1;
        transform: translateY(0);
    }
`,D=n.div`
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

    .form {
        display: grid;
        gap: 12px;
        margin-top: 8px;
    }
    .field {
        display: grid;
        gap: 6px;
    }
    .field label {
        font-size: 13px;
        color: var(--text);
    }
    .field input {
        height: 36px;
        padding: 0 10px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        outline: none;
    }
    .field input:focus {
        box-shadow: var(--focus-ring);
    }

    .pwWrap {
        position: relative;
        display: grid;
    }
    .pwWrap .eye {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        height: 28px;
        min-width: 28px;
        display: grid;
        place-items: center;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        cursor: pointer;
    }

    .err {
        color: hsl(6 78% 57%);
        font-size: 12px;
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 6px;
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
    .primaryBtn {
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
`,h={Wrapper:H,Header:M,Stage:P};function g(){return typeof document>"u"?null:document.querySelector("[data-scroll-root]")||document.getElementById("scroll-root")||null}function V(){const c=o.useRef(g()),{scrollYProgress:p}=F({container:c}),v=x(p,[.03,.1],[.7,1]),f=x(p,[.03,.1],[0,1]),m=14,u=2*Math.PI*m,w=x(p,[0,1],[u,0]),[y,t]=o.useState(!1),[i,b]=o.useState({email:"",password:""}),[d,j]=o.useState(!1),[e,k]=o.useState({email:"",password:""}),N=()=>{const a={email:"",password:""};return(!i.email.trim()||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.email))&&(a.email="Please enter a valid email."),(!i.password||i.password.length<6)&&(a.password="Password must be at least 6 characters."),k(a),!a.email&&!a.password},S=a=>{a.preventDefault(),N()&&t(!1)},B=()=>{const a=c.current;try{a&&"scrollTo"in a?a.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}catch{a?a.scrollTop=0:window.scrollTo(0,0)}};o.useEffect(()=>{c.current=g()},[]);const T=o.useMemo(()=>Array.from({length:7}).map((a,s)=>({id:`sect-${s+1}`,title:`Section ${s+1}`,body:"Scroll to see the FAB appear. The circular ring fills as you progress. Click the button to smoothly return to the top. This long text ensures a comfortable, realistic demo.",bullets:["Progress ring uses strokeDashoffset bound to scrollYProgress.","FAB scales and fades in after ~3–10% scroll.","Container-aware scrolling (uses data-scroll-root)."]})),[]);return r.jsx(z,{reducedMotion:"never",children:r.jsxs(h.Wrapper,{children:[r.jsxs(h.Header,{children:[r.jsxs("div",{className:"heading",children:[r.jsx("h1",{children:"Back-to-Top FAB"}),r.jsx("p",{className:"muted",children:"A scroll-aware floating action button with a circular progress ring and springy motion."})]}),r.jsx("div",{className:"controls",role:"toolbar","aria-label":"FAB controls",children:r.jsx("button",{className:"btn",onClick:()=>t(!0),title:"About & Settings",children:"About / Settings"})})]}),r.jsxs(h.Stage,{children:[T.map(a=>r.jsxs("article",{id:a.id,className:"block",children:[r.jsxs("header",{className:"bHead",children:[r.jsx("span",{className:"kicker",children:"Demo"}),r.jsx("h2",{children:a.title})]}),r.jsx("p",{className:"body",children:a.body}),r.jsx("ul",{className:"bullets",children:a.bullets.map((s,A)=>r.jsx("li",{children:s},A))})]},a.id)),r.jsxs(l.button,{className:"fab",onClick:B,"aria-label":"Back to top",style:{scale:v,opacity:f},whileHover:{y:-2},whileTap:{scale:.96},children:[r.jsxs("svg",{className:"ring",width:"40",height:"40",viewBox:"0 0 40 40","aria-hidden":"true",children:[r.jsx("circle",{className:"track",cx:"20",cy:"20",r:m}),r.jsx(l.circle,{className:"progress",cx:"20",cy:"20",r:m,strokeDasharray:u,style:{strokeDashoffset:w}})]}),r.jsx(l.span,{className:"icon",initial:{y:4,opacity:0},animate:{y:0,opacity:1},transition:{duration:.25},"aria-hidden":"true",children:"↑"}),r.jsx("span",{className:"tooltip",role:"tooltip",children:"Back to top"})]})]}),r.jsx(C,{children:y&&r.jsx(D,{as:l.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:a=>{a.target===a.currentTarget&&t(!1)},children:r.jsxs(l.div,{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"aboutTitle",initial:{y:24,scale:.98,opacity:.9},animate:{y:0,scale:1,opacity:1},exit:{y:12,opacity:0},transition:{type:"spring",stiffness:320,damping:28},children:[r.jsx("div",{className:"mHead",children:r.jsx("h3",{id:"aboutTitle",children:"About this demo"})}),r.jsxs("div",{className:"mBody",children:[r.jsx("p",{className:"muted",children:"This page showcases a back-to-top FAB built with Framer Motion. It tracks scroll progress from your app’s main content container and animates a circular ring."}),r.jsxs("ul",{className:"details",children:[r.jsxs("li",{children:["Container-aware progress via ",r.jsxs("code",{children:["useScroll(","{ container }",")"]}),"."]}),r.jsx("li",{children:"Springy scale-in and subtle hover/tap feedback."}),r.jsx("li",{children:"Theme tokens for colors, radius, shadows."})]}),r.jsx("hr",{className:"rule"}),r.jsxs("form",{className:"form",onSubmit:S,noValidate:!0,children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{htmlFor:"email",children:"Email"}),r.jsx("input",{id:"email",type:"email",placeholder:"you@example.com",value:i.email,onChange:a=>b(s=>({...s,email:a.target.value})),"aria-invalid":!!e.email,"aria-describedby":e.email?"email-err":void 0}),e.email&&r.jsx("div",{className:"err",id:"email-err",role:"alert",children:e.email})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{htmlFor:"pw",children:"Password"}),r.jsxs("div",{className:"pwWrap",children:[r.jsx("input",{id:"pw",type:d?"text":"password",placeholder:"At least 6 characters",value:i.password,onChange:a=>b(s=>({...s,password:a.target.value})),"aria-invalid":!!e.password,"aria-describedby":e.password?"pw-err":void 0}),r.jsx("button",{type:"button",className:"eye","aria-label":d?"Hide password":"Show password",onClick:()=>j(a=>!a),title:d?"Hide":"Show",children:d?"🙈":"👁️"})]}),e.password&&r.jsx("div",{className:"err",id:"pw-err",role:"alert",children:e.password})]}),r.jsxs("div",{className:"actions",children:[r.jsx("button",{type:"button",className:"closeBtn",onClick:()=>t(!1),children:"Close"}),r.jsx("button",{type:"submit",className:"primaryBtn",children:"Save"})]})]})]}),r.jsx("div",{className:"mFoot",children:r.jsx("button",{className:"closeBtn",onClick:()=>t(!1),children:"Done"})})]})})})]})})}export{V as default};
