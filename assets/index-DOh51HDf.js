import{d as y,r as s,j as a,A as f}from"./index-BybwJ5J0.js";import{u as Q}from"./use-motion-value-BDGo4E3a.js";import{u as Z}from"./use-spring-Dk0Zec21.js";import{M as U,m as p}from"./proxy-CWA0aJAx.js";import"./use-transform-Bv2NVkTi.js";const ee=y.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1200px;
    margin: 0 auto;
    color: var(--text);
    outline: none; /* focus handled by children */
`,ae=y.header`
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
    .btn {
        height: 34px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn.ghost {
        background: var(--surface);
    }

    .sep {
        width: 1px;
        height: 28px;
        background: var(--border);
    }

    /* Autoplay switch */
    .switch {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }
    .switch input {
        position: absolute;
        inset: 0;
        opacity: 0;
    }
    .switch .track {
        width: 46px;
        height: 24px;
        border-radius: 999px;
        background: var(--surface);
        border: 1px solid var(--border);
        display: inline-flex;
        align-items: center;
        padding: 2px;
    }
    .switch .thumb {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--primary);
        transform: translateX(0);
        transition: transform 180ms cubic-bezier(0.22, 1, 0.36, 1);
    }
    .switch input:checked + .track .thumb {
        transform: translateX(22px);
    }
    .switch .label {
        color: var(--text-muted);
        font-size: 12px;
    }
`,re=y.section`
    position: relative; /* ⬅️ creates stacking context for dots */
    display: grid;
    gap: var(--space-4);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);
    overflow: hidden;

    .dots {
        position: relative; /* ⬅️ allow z-index to apply */
        z-index: 20; /* ⬅️ above ring/drag layer */
        display: flex;
        justify-content: center;
        gap: 10px;
        padding-top: var(--space-4);
    }
    .dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: var(--border);
        border: none;
        cursor: pointer;
    }
    .dot.active {
        background: var(--primary);
    }
`,te=y.div`
    position: relative;
    width: 100%;
    min-height: 440px;
    perspective: 1000px;
    perspective-origin: 50% 40%;
    transform-style: preserve-3d;
    overflow: visible;

    .ring {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        will-change: transform;
    }

    .slide {
        position: absolute;
        top: 50%;
        left: 50%;
        width: clamp(220px, 28vw, 320px);
        height: clamp(260px, 34vw, 360px);
        transform-style: preserve-3d;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--surface);
        box-shadow: var(--shadow-sm);
        color: var(--text);
        display: grid;
        grid-template-rows: 1fr auto auto;
        align-items: end;
        padding: 14px;
        translate: -50% -50%;
        backface-visibility: hidden;
        overflow: hidden;
        pointer-events: none;
        cursor: default;
    }

    .slide .art {
        position: absolute;
        inset: 0;
        background: radial-gradient(
                140% 80% at 10% 0%,
                hsl(var(--hue) 90% 60% / 0.25),
                transparent 50%
            ),
            radial-gradient(
                120% 80% at 100% 100%,
                hsl(var(--hue) 90% 60% / 0.18),
                transparent 40%
            ),
            linear-gradient(
                135deg,
                hsl(var(--hue) 90% 56%),
                hsl(var(--hue) 90% 62%)
            );
        filter: saturate(1.03) brightness(1.02);
        opacity: 0.18;
    }

    .slide .halo {
        position: absolute;
        inset: 0;
        background: radial-gradient(
            120% 60% at 50% 60%,
            hsl(0 0% 100% / 0.2),
            transparent 60%
        );
        pointer-events: none;
    }

    .slide .cardHead {
        position: relative;
        z-index: 1;
    }
    .slide .kicker {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 11px;
        color: var(--text-muted);
    }
    .slide h3 {
        font-size: 20px;
        margin-top: 4px;
    }
    .slide .desc {
        position: relative;
        z-index: 1;
        color: var(--text);
        font-size: 14px;
        line-height: 1.6;
    }

    .slide.active {
        box-shadow: 0 30px 80px hsl(0 0% 0% / 0.25), var(--shadow-sm);
        outline: 1px solid hsl(210 90% 56% / 0.35);
    }

    /* Drag layer stays under dots */
    .dragLayer {
        position: absolute;
        inset: 0;
        cursor: grab;
        z-index: 5; /* ⬅️ below dots (z:20) */
        background: transparent;
    }
    .dragLayer:active {
        cursor: grabbing;
    }
`,se=y.div`
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

    form {
        display: grid;
        gap: 12px;
    }
    .field {
        display: grid;
        gap: 6px;
    }
    .field.error input {
        border-color: hsl(0 80% 60%);
        box-shadow: 0 0 0 3px hsl(0 80% 60% / 0.15);
    }
    label {
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
    input::placeholder {
        color: color-mix(in oklab, var(--text-muted) 80%, #0000);
    }

    .pass .passWrap {
        position: relative;
    }
    .pass .eye {
        position: absolute;
        right: 6px;
        top: 50%;
        translate: 0 -50%;
        width: 30px;
        height: 30px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: 8px;
        cursor: pointer;
    }

    .err {
        color: hsl(0 80% 62%);
        font-size: 12px;
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
    .closeBtn.ghost {
        background: var(--surface);
        color: var(--text);
    }
`,C={Wrapper:ee,Header:ae,Stage:re,Scene:te},ie=(c,o,i)=>Math.max(o,Math.min(i,c)),oe=(c,o)=>(c%o+o)%o;function ne(c=5){const o=[{key:"aurora",title:"Aurora",kicker:"Visual",desc:"Soft gradients and glass highlights.",hue:210},{key:"nebula",title:"Nebula",kicker:"Depth",desc:"Layers, parallax and subtle glow.",hue:270},{key:"sonic",title:"Sonic",kicker:"Motion",desc:"Timing curves with intent.",hue:195},{key:"velvet",title:"Velvet",kicker:"Pattern",desc:"Texture without noise.",hue:330},{key:"quartz",title:"Quartz",kicker:"Clarity",desc:"Crisp edges, no blur jank.",hue:15}],i=Math.max(c,o.length);return Array.from({length:i},(E,m)=>{const u=o[m%o.length],t=Math.floor(m/o.length),x=t===0?u.title:`${u.title} ${t+1}`;return{id:`${u.key}-${m+1}`,title:x,kicker:u.kicker,desc:u.desc,hue:u.hue}})}function he(){const c=s.useMemo(()=>ne(6),[]),o=c.length,i=360/o,E=s.useRef(null),[m,u]=s.useState(300);s.useEffect(()=>{const e=E.current;if(!e)return;const r=()=>{const h=e.clientWidth||800;u(ie(Math.round(h/2.6),200,520))};r();const l=new ResizeObserver(r);return l.observe(e),window.addEventListener("orientationchange",r,{passive:!0}),()=>{l.disconnect(),window.removeEventListener("orientationchange",r)}},[]);const t=Q(0),x=Z(t,{stiffness:220,damping:28,mass:.9}),[g,F]=s.useState(0);s.useEffect(()=>x.on("change",r=>{const l=oe(Math.round(-r/i),o);F(l)}),[o,i,x]);const W=1,B=1,M=s.useRef(!1),I=.25,[w,k]=s.useState(!0),[A,P]=s.useState(!1),[j,N]=s.useState(!1),_=()=>{M.current=!0,k(!1)},O=(e,r)=>{t.set(t.get()+W*r.delta.x*I)},V=()=>{M.current=!1;const e=t.get(),r=Math.round(e/i)*i;t.set(r)},X=s.useCallback(e=>{const r=-e*i;t.set(r),k(!1)},[i,t]),R=()=>t.set(t.get()-i),L=()=>t.set(t.get()+i),Y=e=>X(e),$=s.useRef(null);s.useEffect(()=>{const e=$.current;if(!e)return;const r=l=>{l.key==="ArrowRight"&&(l.preventDefault(),R()),l.key==="ArrowLeft"&&(l.preventDefault(),L())};return e.addEventListener("keydown",r),()=>e.removeEventListener("keydown",r)},[]);const S=s.useRef(0),q=40,G=e=>{var l;if(j)return;const r=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY;if(S.current+=r,Math.abs(S.current)>=q){const h=Math.sign(S.current);t.set(t.get()+h*i*B),S.current=0,(l=e.preventDefault)==null||l.call(e)}};s.useEffect(()=>{if(!w||A||M.current||j||document.hidden)return;const e=setInterval(()=>{t.set(t.get()-i)},3e3);return()=>clearInterval(e)},[w,A,j,i,t]),s.useEffect(()=>{const e=()=>{document.hidden&&k(!1)};return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)},[]);const[n,v]=s.useState({name:"",email:"",password:"",showPass:!1}),[d,T]=s.useState({}),[b,D]=s.useState("idle"),J=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,K=()=>{const e={};return(!n.name||n.name.trim().length<2)&&(e.name="Please enter your full name."),J.test(n.email)||(e.email="Enter a valid email address."),(!n.password||n.password.length<6)&&(e.password="Password must be 6+ characters."),T(e),Object.keys(e).length===0},H=e=>{e.preventDefault(),K()&&(D("sending"),setTimeout(()=>{D("ok"),setTimeout(()=>{N(!1),D("idle"),v({name:"",email:"",password:"",showPass:!1}),T({})},900)},800))},z=c[g];return a.jsx(U,{reducedMotion:"never",children:a.jsxs(C.Wrapper,{ref:$,tabIndex:0,"aria-roledescription":"3D ring carousel","aria-label":`Active: ${(z==null?void 0:z.title)??"slide"}`,children:[a.jsxs(C.Header,{children:[a.jsxs("div",{className:"heading",children:[a.jsx("h1",{children:"3D Ring Carousel"}),a.jsx("p",{className:"muted",children:"Drag, scroll, click dots, or use arrow keys. Snaps to center. Autoplay pauses on hover."})]}),a.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Carousel controls",children:[a.jsx("button",{className:"btn",onClick:L,"aria-label":"Previous slide",children:"← Prev"}),a.jsx("button",{className:"btn primary",onClick:R,"aria-label":"Next slide",children:"Next →"}),a.jsx("div",{className:"sep"}),a.jsxs("label",{className:"switch",title:"Toggle autoplay",children:[a.jsx("input",{type:"checkbox",checked:w,onChange:e=>k(e.target.checked)}),a.jsx("span",{className:"track",children:a.jsx("span",{className:"thumb"})}),a.jsx("span",{className:"label",children:w?"Autoplay: On":"Autoplay: Off"})]}),a.jsx("button",{className:"btn ghost",onClick:()=>N(!0),children:"Save Carousel"})]})]}),a.jsxs(C.Stage,{onMouseEnter:()=>P(!0),onMouseLeave:()=>P(!1),children:[a.jsxs(C.Scene,{ref:E,onWheel:G,children:[a.jsx(p.div,{className:"ring",style:{rotateY:x},children:c.map((e,r)=>{const l=r*i,h=r===g;return a.jsxs(p.article,{className:`slide ${h?"active":""}`,style:{transform:`rotateY(${l}deg) translateZ(${m}px)`},children:[a.jsx("div",{className:"art",style:{"--hue":e.hue},"aria-hidden":"true"}),a.jsxs("header",{className:"cardHead",children:[a.jsx("span",{className:"kicker",children:e.kicker}),a.jsx("h3",{children:e.title})]}),a.jsx("p",{className:"desc",children:e.desc}),a.jsx(f,{initial:!1,children:h&&a.jsx(p.div,{className:"halo",initial:{opacity:0,scale:.92},animate:{opacity:.6,scale:1},exit:{opacity:0},transition:{duration:.35,ease:[.22,1,.36,1]},"aria-hidden":"true"},"halo")})]},e.id)})}),a.jsx(p.div,{className:"dragLayer",drag:"x",onDragStart:_,onDrag:O,onDragEnd:V,dragConstraints:{left:0,right:0}})]}),a.jsx("div",{className:"dots",role:"tablist","aria-label":"Slides",children:c.map((e,r)=>a.jsx("button",{className:`dot ${r===g?"active":""}`,onClick:()=>Y(r),role:"tab","aria-selected":r===g,"aria-controls":`slide-${r}`,tabIndex:r===g?0:-1},r))})]}),a.jsx(f,{children:j&&a.jsx(se,{as:p.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e=>{e.target===e.currentTarget&&N(!1)},children:a.jsxs(p.div,{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"saveTitle",initial:{y:30,opacity:0,scale:.98},animate:{y:0,opacity:1,scale:1},exit:{y:10,opacity:0,scale:.98},transition:{duration:.25,ease:[.22,1,.36,1]},children:[a.jsxs("div",{className:"mHead",children:[a.jsx("h3",{id:"saveTitle",children:"Save Carousel"}),a.jsx("p",{className:"muted",children:"Create an account to save preferences and autoplay settings."})]}),a.jsxs("form",{className:"mBody",onSubmit:H,noValidate:!0,children:[a.jsxs("div",{className:`field ${d.name?"error":""}`,children:[a.jsx("label",{htmlFor:"name",children:"Full name"}),a.jsx("input",{id:"name",name:"name",type:"text",autoComplete:"name",value:n.name,onChange:e=>v({...n,name:e.target.value}),placeholder:"Jane Doe","aria-invalid":!!d.name,"aria-describedby":"err-name"}),a.jsx(f,{children:d.name&&a.jsx(p.div,{id:"err-name",className:"err",initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},children:d.name})})]}),a.jsxs("div",{className:`field ${d.email?"error":""}`,children:[a.jsx("label",{htmlFor:"email",children:"Email"}),a.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",value:n.email,onChange:e=>v({...n,email:e.target.value}),placeholder:"jane@example.com","aria-invalid":!!d.email,"aria-describedby":"err-email"}),a.jsx(f,{children:d.email&&a.jsx(p.div,{id:"err-email",className:"err",initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},children:d.email})})]}),a.jsxs("div",{className:`field pass ${d.password?"error":""}`,children:[a.jsx("label",{htmlFor:"password",children:"Password"}),a.jsxs("div",{className:"passWrap",children:[a.jsx("input",{id:"password",name:"password",type:n.showPass?"text":"password",autoComplete:"new-password",value:n.password,onChange:e=>v({...n,password:e.target.value}),placeholder:"Create a password","aria-invalid":!!d.password,"aria-describedby":"err-password"}),a.jsx("button",{type:"button",className:"eye","aria-label":n.showPass?"Hide password":"Show password",onClick:()=>v(e=>({...e,showPass:!e.showPass})),children:n.showPass?"🙈":"👁️"})]}),a.jsx(f,{children:d.password&&a.jsx(p.div,{id:"err-password",className:"err",initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},children:d.password})})]})]}),a.jsxs("div",{className:"mFoot",children:[a.jsx("button",{className:"closeBtn ghost",onClick:()=>N(!1),children:"Cancel"}),a.jsxs(p.button,{className:"closeBtn",onClick:H,disabled:b==="sending"||b==="ok",whileTap:{scale:.98},children:[b==="idle"&&"Create Account",b==="sending"&&"Saving…",b==="ok"&&"Saved ✓"]})]})]})})})]})})}export{he as default};
