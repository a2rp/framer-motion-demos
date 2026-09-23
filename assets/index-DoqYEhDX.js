import{d as l,r as t,j as e,A as B}from"./index-D8yAWZ_T.js";import{u as L}from"./use-scroll-D7Rma7R8.js";import{u as E}from"./use-spring-BrCeeyfL.js";import{u as d}from"./use-transform-BkTbxY83.js";import{M as G,m as r}from"./proxy-DfzdIqFN.js";import"./use-motion-value-3H01X7V8.js";const X=l.div`
    color: var(--text);
    background: var(--bg);
`,K=l.div`
    position: sticky;
    top: 0;
    z-index: 30;
    height: 4px;
    width: 100%;
    background: linear-gradient(to right, var(--surface), transparent);

    .bar {
        height: 100%;
        transform-origin: 0 50%;
        background: linear-gradient(90deg, var(--primary), hsl(210 90% 66%));
        box-shadow: 0 0 12px hsl(210 90% 56% / 0.35);
    }
`,Z=l.section`
    position: relative;
    min-height: 120vh; /* give space so parallax is obvious */
    display: grid;
    place-items: center;
    overflow: clip;
    border-bottom: 1px solid var(--border);

    .layer {
        position: absolute;
        inset: 0;
        pointer-events: none;
        will-change: transform;
    }

    .layer.back {
        .grad {
            position: absolute;
            filter: saturate(1.1);
        }
        .grad-1 {
            inset: -10% -10% 30% -10%;
            background: radial-gradient(
                1200px 600px at 10% 20%,
                hsl(210 90% 56% / 0.18),
                transparent 60%
            );
        }
        .grad-2 {
            inset: 30% -10% -20% 40%;
            background: radial-gradient(
                900px 520px at 80% 70%,
                hsl(260 80% 66% / 0.12),
                transparent 60%
            );
        }
    }

    .layer.mid {
        .blobs {
            position: absolute;
            inset: 0;
        }
        .blob {
            position: absolute;
            width: 240px;
            height: 240px;
            border-radius: 1000px;
            background: linear-gradient(
                135deg,
                hsl(210 90% 56% / 0.25),
                hsl(210 90% 62% / 0.25)
            );
            filter: blur(18px) saturate(1.1);
            opacity: 0.65;
            will-change: transform;
        }
        .b1 {
            top: 14%;
            left: 6%;
        }
        .b2 {
            top: 64%;
            left: 18%;
            width: 300px;
            height: 300px;
        }
        .b3 {
            top: 48%;
            right: 12%;
            width: 260px;
            height: 260px;
        }
    }

    .layer.fore {
        .rings {
            position: absolute;
            inset: 0;
        }
        .ring {
            position: absolute;
            border-radius: 1000px;
            border: 1px solid hsl(210 90% 56% / 0.25);
            box-shadow: inset 0 0 40px hsl(210 90% 56% / 0.12);
            will-change: transform;
        }
        .r1 {
            width: 84vmin;
            height: 84vmin;
            top: 6%;
            left: 50%;
            transform: translateX(-50%);
        }
        .r2 {
            width: 60vmin;
            height: 60vmin;
            top: 16%;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`,Q=l.div`
    position: relative;
    text-align: center;
    padding: var(--space-8) var(--space-6);
    max-width: 880px;
    z-index: 1;
    color: var(--text);

    h1 {
        font-size: clamp(28px, 6vw, 56px);
        line-height: 1.08;
        letter-spacing: -0.02em;
    }
    .kicker {
        margin-top: 12px;
        color: var(--text-muted);
        font-size: clamp(14px, 2.2vw, 18px);
    }
    .ctas {
        margin-top: 20px;
        display: inline-flex;
        gap: 12px;
    }
    .btn {
        border: 1px solid var(--border);
        height: 40px;
        padding: 0 16px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        transition: transform 0.12s ease;
    }
    .btn:hover {
        transform: translateY(-1px);
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn.ghost {
        background: var(--surface);
        color: var(--text);
    }
`,_=l.section`
    padding: var(--space-8) var(--space-6);
    max-width: 1100px;
    margin: 0 auto;

    .sHead {
        margin-bottom: var(--space-6);
    }
    .sHead h2 {
        font-size: 24px;
    }
    .sHead .muted {
        color: var(--text-muted);
    }

    .grid {
        display: grid;
        gap: var(--space-4);
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .card {
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        padding: var(--space-6);
    }
    .card h3 {
        font-size: 18px;
        margin-bottom: 8px;
    }
    .card p {
        color: var(--text);
    }

    .bullets {
        margin-left: 18px;
        display: grid;
        gap: 6px;
        color: var(--text);
    }

    @media (width < 900px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (width < 600px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }
`;l.button`
    position: fixed;
    right: 16px;
    bottom: 16px;
    z-index: 40;
    width: 42px;
    height: 42px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--card);
    color: var(--text);
    box-shadow: var(--shadow-md);
    cursor: pointer;
`;const ee=l.div`
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

    /* Form styles */
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
        height: 38px;
        padding: 0 12px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        outline: none;
    }
    .field input:focus {
        box-shadow: var(--focus-ring);
    }
    .field.hasErr input {
        border-color: hsl(0 73% 55% / 0.9);
    }
    .field .err {
        color: hsl(0 73% 55%);
        font-size: 12px;
    }
    .field .hint {
        font-size: 12px;
    }

    .pwdWrap {
        position: relative;
    }
    .eyeBtn {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        width: 32px;
        height: 32px;
        border-radius: 6px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        display: grid;
        place-items: center;
        cursor: pointer;
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 6px;
    }
    .btn {
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .success {
        text-align: center;
        padding: 10px 6px;
    }
    .checkWrap {
        display: grid;
        place-items: center;
        color: var(--primary);
    }
    .check {
        width: 88px;
        height: 88px;
    }
    .success h4 {
        margin-top: 8px;
        font-size: 18px;
    }
`,n={Wrapper:X,Progress:K,Hero:Z,HeroContent:Q,Section:_,ModalOverlay:ee},M=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,R=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/;function ae(o){return e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",...o,children:e.jsx("path",{fill:"currentColor",d:"M12 5c5.5 0 9.5 5 10 6-.5 1-4.5 6-10 6S2.5 12 2 11c.5-1 4.5-6 10-6zm0 2C8 7 4.9 10 4 11c.9 1 4 4 8 4s7.1-3 8-4c-.9-1-4-4-8-4zm0 2.25A3.75 3.75 0 1 1 8.25 13 3.75 3.75 0 0 1 12 9.25m0 1.5A2.25 2.25 0 1 0 14.25 13 2.25 2.25 0 0 0 12 10.75z"})})}function re(o){return e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",...o,children:e.jsx("path",{fill:"currentColor",d:"M21.2 21.2 2.8 2.8l1.4-1.4 18.4 18.4-1.4 1.4zM9.5 7.78l1.03 1.04A3.75 3.75 0 0 1 15.18 12l1.08 1.08A5.25 5.25 0 0 0 12 6.75c-.88 0-1.7.2-2.5.53zM4.27 6.55l1.2 1.2C3.8 9.1 2.6 10.5 2 11c.5 1 4.5 6 10 6 1.29 0 2.49-.25 3.6-.64l1.19 1.19c-1.49.62-3.07.95-4.79.95C6.5 18.5 2.5 13.5 2 12.5c.3-.64 1.76-2.44 3.78-3.95l-1.5-2z"})})}function de(){const o=t.useRef(null),[k,W]=t.useState(!1);t.useLayoutEffect(()=>{const a=document.querySelector("[data-scroll-root]");a&&(o.current=a,W(!0))},[]);const{scrollYProgress:A}=L({container:k?o:void 0}),g=E(A,{stiffness:180,damping:28,mass:.7}),N=t.useRef(null),{scrollYProgress:F}=L({container:k?o:void 0,target:N,offset:["start start","end start"]}),p=E(F,{stiffness:200,damping:30,mass:.7}),T=d(p,[0,1],[0,-200]),O=d(p,[0,1],[0,-120]),Y=d(p,[0,1],[0,-60]),q=d(p,[0,1],[0,8]),I=d(g,[.05,.12],[0,1]),$=d(g,[.05,.12],[.9,1]),[b,C]=t.useState(!1),[i,S]=t.useState({name:"",email:"",password:""}),[m,f]=t.useState({name:!1,email:!1,password:!1}),[h,P]=t.useState(!1),[v,y]=t.useState(!1),[J,z]=t.useState(!1),s=t.useMemo(()=>{const a={name:"",email:"",password:""};return m.name&&i.name.trim().length<2&&(a.name="Name must be at least 2 characters."),m.email&&!M.test(i.email)&&(a.email="Enter a valid email address."),m.password&&!R.test(i.password)&&(a.password="Password must be 8+ chars with a letter and a number."),a},[i,m]),H=i.name.trim().length>=2&&M.test(i.email)&&R.test(i.password),U=()=>C(!0),x=()=>C(!1);t.useEffect(()=>{b||(S({name:"",email:"",password:""}),f({name:!1,email:!1,password:!1}),y(!1),z(!1),P(!1))},[b]);const w=a=>c=>S(u=>({...u,[a]:c.target.value})),j=a=>()=>f(c=>({...c,[a]:!0})),V=a=>{a.preventDefault(),f({name:!0,email:!0,password:!0}),!(!H||v)&&(y(!0),setTimeout(()=>{z(!0),y(!1)},800))},D=()=>{var a;return(a=document.querySelector("#features"))==null?void 0:a.scrollIntoView({behavior:"smooth",block:"start"})};return e.jsx(G,{children:e.jsxs(n.Wrapper,{children:[e.jsx(n.Progress,{children:e.jsx(r.div,{className:"bar",style:{scaleX:g}})}),e.jsxs(n.Hero,{ref:N,children:[e.jsxs(r.div,{className:"layer back",style:{y:T},"aria-hidden":!0,children:[e.jsx("div",{className:"grad grad-1"}),e.jsx("div",{className:"grad grad-2"})]}),e.jsx(r.div,{className:"layer mid",style:{y:O},"aria-hidden":!0,children:e.jsxs("div",{className:"blobs",children:[e.jsx("span",{className:"blob b1"}),e.jsx("span",{className:"blob b2"}),e.jsx("span",{className:"blob b3"})]})}),e.jsx(r.div,{className:"layer fore",style:{y:Y,rotate:q},"aria-hidden":!0,children:e.jsxs("div",{className:"rings",children:[e.jsx("span",{className:"ring r1"}),e.jsx("span",{className:"ring r2"})]})}),e.jsxs(n.HeroContent,{children:[e.jsx(r.h1,{initial:{y:18,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6,ease:[.22,1,.36,1]},children:"Parallax Hero Layers"}),e.jsx(r.p,{className:"kicker",initial:{y:18,opacity:0},animate:{y:0,opacity:1},transition:{delay:.05,duration:.6,ease:[.22,1,.36,1]},children:"Foreground glides, background drifts - silky, GPU-friendly, and accessible."}),e.jsxs(r.div,{className:"ctas",initial:{y:18,opacity:0},animate:{y:0,opacity:1},transition:{delay:.1,duration:.6,ease:[.22,1,.36,1]},children:[e.jsx("button",{className:"btn primary",onClick:U,children:"Get early access"}),e.jsx("button",{className:"btn ghost",onClick:D,children:"Learn more"})]})]})]}),e.jsxs(n.Section,{id:"features",children:[e.jsxs("header",{className:"sHead",children:[e.jsx("h2",{children:"Why this pattern works"}),e.jsx("p",{className:"muted",children:"Depth cues, subtle motion, and clean layering make content feel premium without distraction."})]}),e.jsx("div",{className:"grid",children:[["Crisp & Performant","Only transforms & opacity, spring-tuned to avoid layout thrash."],["Reduced Motion-friendly","Respects OS preference; content still shines without motion."],["Composable","Layers are plain divs - swap colors, shapes, or add images."],["Tiny API Surface","Just useScroll + useTransform + a couple of springs."],["No Jank","GPU-friendly, no filters in the scroll path."],["Accessible","Readable contrast, large hit targets, semantic HTML."]].map(([a,c],u)=>e.jsxs(r.article,{className:"card",initial:{y:16,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0,margin:"-10% 0px -10% 0px"},transition:{duration:.5,ease:[.22,1,.36,1],delay:u*.03},children:[e.jsx("h3",{children:a}),e.jsx("p",{children:c})]},u))})]}),e.jsxs(n.Section,{children:[e.jsxs("header",{className:"sHead",children:[e.jsx("h2",{children:"Implementation tips"}),e.jsx("p",{className:"muted",children:"Parallax ratios: back −200px, mid −120px, fore −60px across hero scroll."})]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Bind ",e.jsx("code",{children:"useScroll"})," to your scroll container (",e.jsx("code",{children:"[data-scroll-root]"}),")."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"target: heroRef"})," with offsets to scope parallax to the hero."]}),e.jsx("li",{children:"Keep durations short; premium motion is subtle."}),e.jsx("li",{children:"Avoid animating heavy filters during scroll; they’re expensive."})]})]}),e.jsx(r.button,{className:"fabTop",onClick:()=>o.current?o.current.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"}),style:{opacity:I,scale:$},title:"Back to top","aria-label":"Back to top",children:"↑"}),e.jsx(B,{children:b&&e.jsx(n.ModalOverlay,{as:r.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},"aria-modal":"true",role:"dialog",onClick:a=>{a.target===a.currentTarget&&x()},children:e.jsxs(r.div,{className:"modal",initial:{y:24,opacity:0,scale:.98},animate:{y:0,opacity:1,scale:1},exit:{y:24,opacity:0,scale:.98},transition:{duration:.28,ease:[.22,1,.36,1]},children:[e.jsxs("div",{className:"mHead",children:[e.jsx("h3",{children:"Early access"}),e.jsx("p",{className:"muted",children:"Join the preview list. No spam. We’ll email you a private link."})]}),e.jsx("div",{className:"mBody",children:e.jsx(B,{mode:"wait",initial:!1,children:J?e.jsxs(r.div,{className:"success",initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},children:[e.jsx("div",{className:"checkWrap","aria-hidden":!0,children:e.jsxs(r.svg,{viewBox:"0 0 120 120",className:"check",children:[e.jsx(r.circle,{cx:"60",cy:"60",r:"52",fill:"none",stroke:"currentColor",strokeWidth:"8",opacity:"0.25",initial:{pathLength:0},animate:{pathLength:1},transition:{duration:.45}}),e.jsx(r.path,{d:"M34 62 L54 78 L88 42",fill:"none",stroke:"currentColor",strokeWidth:"10",strokeLinecap:"round",strokeLinejoin:"round",initial:{pathLength:0},animate:{pathLength:1},transition:{delay:.35,duration:.45,ease:"easeInOut"}})]})}),e.jsx("h4",{children:"You're in!"}),e.jsx("p",{className:"muted",children:"We’ll email you as soon as the preview opens."}),e.jsx("div",{className:"actions",children:e.jsx("button",{className:"btn primary",onClick:x,children:"Close"})})]},"done"):e.jsxs(r.form,{onSubmit:V,initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},className:"form",noValidate:!0,children:[e.jsxs("label",{className:`field ${s.name?"hasErr":""}`,children:[e.jsx("span",{children:"Name"}),e.jsx("input",{type:"text",name:"name",autoComplete:"name",placeholder:"Your name",value:i.name,onChange:w("name"),onBlur:j("name"),"aria-invalid":!!s.name,"aria-describedby":s.name?"err-name":void 0,required:!0}),s.name&&e.jsx("em",{id:"err-name",className:"err",children:s.name})]}),e.jsxs("label",{className:`field ${s.email?"hasErr":""}`,children:[e.jsx("span",{children:"Email"}),e.jsx("input",{type:"email",name:"email",autoComplete:"email",placeholder:"you@example.com",value:i.email,onChange:w("email"),onBlur:j("email"),"aria-invalid":!!s.email,"aria-describedby":s.email?"err-email":void 0,required:!0}),s.email&&e.jsx("em",{id:"err-email",className:"err",children:s.email})]}),e.jsxs("label",{className:`field ${s.password?"hasErr":""}`,children:[e.jsx("span",{children:"Password"}),e.jsxs("div",{className:"pwdWrap",children:[e.jsx("input",{type:h?"text":"password",name:"password",autoComplete:"new-password",placeholder:"Create a strong password",value:i.password,onChange:w("password"),onBlur:j("password"),"aria-invalid":!!s.password,"aria-describedby":s.password?"err-password":void 0,required:!0}),e.jsx("button",{type:"button",className:"eyeBtn",onClick:()=>P(a=>!a),"aria-label":h?"Hide password":"Show password",title:h?"Hide password":"Show password",children:h?e.jsx(re,{}):e.jsx(ae,{})})]}),s.password&&e.jsx("em",{id:"err-password",className:"err",children:s.password}),e.jsx("p",{className:"hint muted",children:"Use at least 8 characters, including a letter and a number."})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{type:"button",className:"btn ghost",onClick:x,children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn primary",disabled:!H||v,children:v?"Submitting…":"Join waitlist"})]})]},"form")})}),e.jsx("div",{className:"mFoot",children:e.jsx("button",{className:"closeBtn",onClick:x,children:"Close"})})]})},"modal")})]})})}export{de as default};
