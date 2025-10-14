import{d as p,r as t,j as e,A as P}from"./index-BybwJ5J0.js";import{u as B}from"./use-scroll-BvN1bobO.js";import{u as I}from"./use-transform-Bv2NVkTi.js";import{M as T,m as i}from"./proxy-CWA0aJAx.js";import"./use-motion-value-BDGo4E3a.js";const M="480px",O=p.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1200px;
    margin: 0 auto;
    color: var(--text);
`,W=p.header`
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

    .actions {
        display: flex;
        gap: var(--space-4);
    }
    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        height: 36px;
        padding: 0 14px;
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
`,G=p.div`
    height: 6px;
    border-radius: 999px;
    background: var(--surface);
    border: 1px solid var(--border);
    overflow: hidden;
    box-shadow: var(--shadow-sm);

    .bar {
        height: 100%;
        background: linear-gradient(90deg, hsl(210 90% 56%), hsl(210 90% 62%));
        will-change: width;
    }
`,$=p.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    .shell {
        display: grid;
        grid-template-columns: 1fr minmax(420px, 46%);
        gap: var(--space-6);
        padding: var(--space-6);
        height: 100%;
        max-height: none;
        /* This element acts as a scroll container for useScroll (optional).
       Remove these 2 lines if you want the window scroll instead. */
        overflow: auto;
        max-height: calc(100vh - 260px);
    }

    @media (width < 980px) {
        .shell {
            grid-template-columns: 1fr;
            overflow: visible;
            max-height: none;
        }
    }

    .stepsCol {
        display: grid;
        gap: 16vh; /* generous spacing between steps */
        align-content: start;
    }

    .step {
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--surface);
        box-shadow: var(--shadow-sm);
        padding: var(--space-6);
        min-height: 40vh;
        display: grid;
        gap: var(--space-3);
    }
    .sHead {
        display: grid;
        gap: 6px;
    }
    .kicker {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 11px;
        color: var(--text-muted);
    }
    .step h2 {
        font-size: 22px;
    }
    .step .body {
        color: var(--text);
    }

    .cta {
        margin-top: var(--space-6);
    }
    .cta .btn {
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        border-radius: var(--radius-md);
        height: 38px;
        padding: 0 16px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }

    .visualCol {
        position: relative;
        display: grid;
        align-content: start;
        gap: var(--space-4);
    }

    .stickyBox {
        position: sticky;
        top: var(--space-6);
        min-height: ${M};
    }

    .visual {
        position: relative;
        height: ${M};
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        overflow: hidden;
        box-shadow: var(--shadow-md);
        background: radial-gradient(
                1200px 300px at 0% 0%,
                hsl(var(--v-hue, 210) 90% 60% / 0.18),
                transparent 60%
            ),
            linear-gradient(
                135deg,
                hsl(var(--v-hue, 210) 90% 56%),
                hsl(var(--v-hue, 210) 90% 62%)
            );
        display: grid;
        place-items: center;
        isolation: isolate;
    }

    /* layered shapes for subtle motion depth */
    .visual .layer {
        position: absolute;
        inset: 0;
        pointer-events: none;
    }
    .visual .back {
        background: radial-gradient(
                40% 40% at 80% 20%,
                hsl(var(--v-hue, 210) 90% 85% / 0.14),
                transparent 60%
            ),
            radial-gradient(
                30% 30% at 20% 80%,
                hsl(var(--v-hue, 210) 90% 85% / 0.1),
                transparent 60%
            );
        filter: saturate(1.05);
    }
    .visual .mid {
        background: radial-gradient(
                120px 120px at 30% 30%,
                hsl(var(--v-hue, 210) 90% 70% / 0.22),
                transparent 70%
            ),
            radial-gradient(
                140px 140px at 70% 70%,
                hsl(var(--v-hue, 210) 90% 70% / 0.18),
                transparent 70%
            );
        mix-blend-mode: overlay;
    }
    .visual .front {
        background: radial-gradient(
                18px 18px at 24% 36%,
                hsl(var(--v-hue, 210) 90% 98% / 0.65),
                transparent 60%
            ),
            radial-gradient(
                22px 22px at 78% 62%,
                hsl(var(--v-hue, 210) 90% 98% / 0.55),
                transparent 60%
            );
        opacity: 0.9;
    }

    .visual .label {
        position: absolute;
        left: 16px;
        bottom: 12px;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: var(--primary-contrast);
        text-shadow: 0 2px 8px hsl(0 0% 0% / 0.35);
        letter-spacing: 0.4px;
    }
    .visual .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--primary-contrast);
    }

    .dotsNav {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
    }
    .dotsNav .dot {
        width: 10px;
        height: 10px;
        border-radius: 999px;
        background: var(--border);
        border: 1px solid var(--border);
        cursor: pointer;
    }
    .dotsNav .dot.active {
        background: var(--primary);
        border-color: transparent;
    }

    @media (width < 560px) {
        .step {
            min-height: 36vh;
        }
        .visual {
            height: 360px;
        }
        .stickyBox {
            min-height: 360px;
        }
    }
`,L=p.div`
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

    /* form styles */
    .form {
        display: grid;
        gap: 12px;
    }
    .field {
        display: grid;
        gap: 6px;
    }
    .field span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .field input {
        height: 36px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        padding: 0 10px;
        outline: none;
    }
    .field input:focus {
        box-shadow: var(--focus-ring);
    }

    .pwdWrap {
        position: relative;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
    }
    .pwdWrap input {
        padding-right: 40px;
    }
    .eye {
        position: absolute;
        right: 6px;
        height: 28px;
        width: 32px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-sm);
        cursor: pointer;
    }

    .hint {
        color: var(--text-muted);
        font-size: 12px;
    }
    .error {
        color: hsl(0 78% 55%);
        font-size: 12px;
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 6px;
    }
    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        height: 36px;
        padding: 0 14px;
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
`,c={Wrapper:O,Header:W,Progress:G,Stage:$,ModalOverlay:L},x=[{id:"s1",kicker:"Chapter 1",title:"Set the stage",body:"Introduce your scene. Keep motion subtle so users feel guided, not dragged. We’ll parallax the background and ease text in as you scroll.",hue:210},{id:"s2",kicker:"Chapter 2",title:"Focus the subject",body:"Use gentle scale to imply attention. The sticky panel changes atmosphere while text content enters and exits with reduced-motion fallbacks.",hue:260},{id:"s3",kicker:"Chapter 3",title:"Reveal a detail",body:"Crossfade layers; avoid harsh wipes. Small y-offsets and opacity ramps keep things premium without feeling animated for animation’s sake.",hue:180},{id:"s4",kicker:"Chapter 4",title:"Shift perspective",body:"Drag the visual background slightly versus the copy to create tasteful depth. Transforms only. No costly filters. GPU is your friend.",hue:28},{id:"s5",kicker:"Finale",title:"Land the message",body:"End with a clear call-to-action. We’ll open a small modal where folks can subscribe to the full PDF—fully accessible, with validation and a password eye toggle.",hue:330}],U=(s,o,h)=>Math.max(o,Math.min(h,s)),V=s=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s).trim()),q=s=>/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(s);function J(){const[s,o]=t.useState(!1),[h,w]=t.useState(""),[k,j]=t.useState(""),[u,E]=t.useState(!1),[d,F]=t.useState({}),N=t.useRef(null),[v,z]=t.useState(0),l=t.useRef([]);l.current=[];const R=a=>{a&&!l.current.includes(a)&&l.current.push(a)},g=t.useRef(null),{scrollYProgress:D}=B({container:g}),H=I(D,[0,1],["0%","100%"]);t.useEffect(()=>{if(!s)return;const a=requestAnimationFrame(()=>{var r;(r=N.current)==null||r.focus()});return()=>cancelAnimationFrame(a)},[s]),t.useEffect(()=>{const r={root:g.current||void 0,rootMargin:"0px 0px -55% 0px",threshold:.1},n=new IntersectionObserver(y=>{y.forEach(C=>{if(C.isIntersecting){const m=l.current.findIndex(f=>f===C.target);m!==-1&&z(f=>(m>f,m))}})},r);return l.current.forEach(y=>n.observe(y)),()=>n.disconnect()},[]);const b=t.useMemo(()=>x[U(v,0,x.length-1)],[v]),S=()=>o(!1),A=a=>{a.preventDefault();const r={};V(h)||(r.email="Please enter a valid email (e.g., name@domain.com)."),q(k)||(r.pwd="Use at least 8 characters with a letter and a number."),F(r),Object.keys(r).length===0&&(o(!1),setTimeout(()=>{w(""),j("")},200))};return t.useEffect(()=>{if(!s)return;const a=r=>{r.key==="Escape"&&o(!1)};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[s]),e.jsx(T,{reducedMotion:"never",children:e.jsxs(c.Wrapper,{children:[e.jsxs(c.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Scrollytelling Steps"}),e.jsx("p",{className:"muted",children:"Sticky visual + scroll-triggered copy. Dots, progress bar, smooth crossfades."})]}),e.jsx("div",{className:"actions",children:e.jsx("button",{className:"btn ghost",onClick:()=>o(!0),title:"Get the PDF",children:"Get the PDF"})})]}),e.jsx(c.Progress,{children:e.jsx(i.div,{className:"bar",style:{width:H}})}),e.jsx(c.Stage,{children:e.jsxs("div",{className:"shell",ref:g,children:[e.jsxs("div",{className:"stepsCol",children:[x.map((a,r)=>e.jsxs(i.section,{ref:R,className:"step",initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{amount:.6,margin:"0px 0px -10% 0px",once:!1},transition:{duration:.36,ease:[.22,1,.36,1]},children:[e.jsxs("header",{className:"sHead",children:[e.jsx("span",{className:"kicker",children:a.kicker}),e.jsx("h2",{children:a.title})]}),e.jsx("p",{className:"body",children:a.body})]},a.id)),e.jsx("div",{className:"cta",children:e.jsx("button",{className:"btn primary",onClick:()=>o(!0),title:"Open modal",children:"Download full PDF"})})]}),e.jsxs("div",{className:"visualCol",children:[e.jsx("div",{className:"stickyBox",children:e.jsx(P,{mode:"wait",children:e.jsxs(i.div,{className:"visual",initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.98},transition:{duration:.45,ease:[.22,1,.36,1]},style:{"--v-hue":b.hue},children:[e.jsx(i.div,{className:"layer back",initial:{x:24,opacity:.7},animate:{x:0,opacity:.9},transition:{duration:.6,ease:[.22,1,.36,1]}}),e.jsx(i.div,{className:"layer mid",initial:{x:-18,opacity:.85},animate:{x:0,opacity:1},transition:{duration:.6,ease:[.22,1,.36,1]}}),e.jsx(i.div,{className:"layer front",initial:{y:18,opacity:.8},animate:{y:0,opacity:1},transition:{duration:.6,ease:[.22,1,.36,1]}}),e.jsxs("div",{className:"label",children:[e.jsx("span",{className:"dot"}),e.jsx("b",{children:b.title})]})]},b.id)})}),e.jsx("div",{className:"dotsNav","aria-hidden":"true",children:x.map((a,r)=>e.jsx(i.button,{className:`dot ${r===v?"active":""}`,whileHover:{scale:1.1},whileTap:{scale:.95},onClick:()=>{const n=l.current[r];n==null||n.scrollIntoView({block:"center",behavior:"smooth"})},title:`Go to step ${r+1}`},r))})]})]})}),e.jsx(P,{children:s&&e.jsx(c.ModalOverlay,{as:i.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:a=>{a.target===a.currentTarget&&o(!1)},role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:e.jsxs(i.div,{className:"modal",initial:{y:24,scale:.98,opacity:0},animate:{y:0,scale:1,opacity:1},exit:{y:12,scale:.98,opacity:0},transition:{duration:.28,ease:[.22,1,.36,1]},children:[e.jsx("div",{className:"mHead",children:e.jsx("h3",{id:"modal-title",children:"Get the PDF"})}),e.jsxs("div",{className:"mBody",children:[e.jsx("p",{className:"muted",children:"Pop in your email and a password to create a lightweight account."}),e.jsxs("form",{className:"form",onSubmit:A,noValidate:!0,autoComplete:"off",children:[e.jsxs("label",{className:"field",children:[e.jsx("span",{children:"Email"}),e.jsx("input",{ref:N,type:"email",inputMode:"email",placeholder:"you@example.com",value:h,onChange:a=>w(a.target.value),"aria-invalid":!!d.email,"aria-describedby":d.email?"err-email":void 0,required:!0}),d.email&&e.jsx("em",{id:"err-email",className:"error",children:d.email})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{children:"Password"}),e.jsxs("div",{className:"pwdWrap",children:[e.jsx("input",{type:u?"text":"password",placeholder:"At least 8 characters",value:k,onChange:a=>j(a.target.value),"aria-invalid":!!d.pwd,"aria-describedby":d.pwd?"err-pwd":"pwd-help",required:!0}),e.jsx("button",{type:"button",className:"eye","aria-pressed":u,"aria-label":u?"Hide password":"Show password",onClick:()=>E(a=>!a),children:e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{fill:"currentColor",d:"M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 11a4 4 0 110-8 4 4 0 010 8z"}),u?e.jsx("path",{fill:"currentColor",d:"M2 2l20 20-1.4 1.4L.6 3.4 2 2z"}):null]})})]}),e.jsx("small",{id:"pwd-help",className:"hint",children:"At least 8 chars, include a letter and a number."}),d.pwd&&e.jsx("em",{id:"err-pwd",className:"error",children:d.pwd})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{type:"button",className:"btn ghost",onClick:S,children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn primary",children:"Get PDF"})]})]})]}),e.jsx("div",{className:"mFoot",children:e.jsx("button",{className:"closeBtn",onClick:S,children:"Close"})})]})})})]})})}export{J as default};
