import{d as g,r as t,j as e,A as c}from"./index-h8mEPUVo.js";import{u as Y}from"./use-animation-CcQutjzd.js";import{M as $,m as s}from"./proxy-CL9OJ6vV.js";const K=g.div`
    --ok: hsl(152 70% 35%);
    --err: hsl(0 70% 55%);

    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 820px;
    margin: 0 auto;
    color: var(--text);
`,U=g.header`
    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`,X=g.section`
    .form {
        display: grid;
        gap: var(--space-4);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        padding: var(--space-6);
    }

    .field {
        display: grid;
        gap: 8px;
    }

    .twoCol {
        grid-template-columns: 1fr;
    }

    label {
        font-size: 13px;
        color: var(--text-muted);
    }

    input[type="text"],
    input[type="email"],
    input[type="password"] {
        height: 40px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        padding: 0 12px;
        outline: none;
        box-shadow: var(--shadow-sm);
        transition: box-shadow 0.2s ease, border-color 0.2s ease,
            background 0.2s ease;
    }
    input::placeholder {
        color: color-mix(in oklab, var(--text-muted) 80%, transparent);
    }

    input:focus {
        border-color: transparent;
        box-shadow: var(--focus-ring);
        background: color-mix(in oklab, var(--surface) 70%, var(--card));
    }

    .withEye {
        position: relative;
        display: grid;
    }
    .withEye .eye {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        width: 34px;
        height: 34px;
        display: grid;
        place-items: center;
        border-radius: var(--radius-sm);
        border: 1px solid transparent;
        background: transparent;
        color: var(--text-muted);
        cursor: pointer;
    }
    .withEye .eye:hover {
        background: var(--surface);
        border-color: var(--border);
    }

    .hint {
        font-size: 12px;
        color: var(--text-muted);
    }

    .error {
        color: var(--err);
        font-size: 12px;
    }

    .agreeRow {
        display: grid;
        gap: 6px;
        margin-top: 2px;
    }

    .checkbox {
        display: inline-flex;
        gap: 10px;
        align-items: center;
        color: var(--text);
    }
    .checkbox input {
        width: 18px;
        height: 18px;
        accent-color: var(--primary);
    }
    .checkbox a {
        color: var(--primary);
        text-decoration: none;
    }
    .checkbox a:hover {
        text-decoration: underline;
    }

    .submitRow {
        display: flex;
        justify-content: flex-end;
        margin-top: 6px;
    }

    .submitBtn {
        border: 1px solid transparent;
        background: var(--primary);
        color: var(--primary-contrast);
        height: 44px;
        min-width: 44px; /* for circle state */
        padding: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        overflow: hidden;
    }
    .submitBtn:disabled {
        opacity: 0.75;
        cursor: not-allowed;
    }

    .btnContent {
        position: relative;
        display: grid;
        place-items: center;
        width: 100%;
        height: 100%;
    }
    .btnLabel {
        padding: 0 16px;
        font-weight: 600;
        letter-spacing: 0.15px;
    }
    .btnIcon {
        display: inline-grid;
        place-items: center;
    }

    .sr {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        white-space: nowrap;
    }
`,Z=g.div`
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
`,b={Wrapper:K,Header:U,Stage:X,ModalOverlay:Z},E=a=>e.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18","aria-hidden":!0,focusable:"false",...a,children:e.jsx("path",{fill:"currentColor",d:"M12 5c5.5 0 9.7 4.5 10.8 6-.9 1.3-5 6-10.8 6S2.3 12.3 1.2 11C2.3 9.5 6.5 5 12 5zm0 2c-4.6 0-8 3.8-9 4.9 1 1.1 4.4 5 9 5s8-3.9 9-5c-1-1.1-4.4-4.9-9-4.9zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"})}),z=a=>e.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18","aria-hidden":!0,focusable:"false",...a,children:e.jsx("path",{fill:"currentColor",d:"M3.3 2.6L2 3.9l4 4C4 9 2.6 10.6 1.9 11.5c.9 1.3 5 6 10.8 6 2.2 0 4.2-.6 5.8-1.5l3.5 3.5 1.3-1.3L3.3 2.6zM12 17.4c-4.6 0-8-3.9-9-5 .6-.7 1.7-2 3.3-3.2l2.2 2.2A3.5 3.5 0 0012 15.5c.7 0 1.3-.2 1.9-.5l2.1 2.1c-1.1.2-2.2.3-3.1.3zm9-5.9c-.8 1.2-2.2 2.8-4.2 4l-6-6a3.5 3.5 0 014.7 4.7l1.6 1.6c2.4-1.6 4.1-3.7 4.9-4.7-.7-1-4.1-4.9-9-4.9-.9 0-1.9.1-2.8.3l1.8 1.8c.3 0 .7-.1 1-.1 4.6 0 8 3.8 9 4.9z"})}),G=a=>e.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18","aria-hidden":!0,focusable:"false",...a,children:e.jsx("path",{fill:"currentColor",d:"M9.55 16.15l-3.7-3.7 1.4-1.4 2.3 2.29 7.1-7.1 1.41 1.41-8.5 8.5z"})}),J=a=>e.jsxs("svg",{viewBox:"0 0 50 50",width:"18",height:"18","aria-hidden":!0,focusable:"false",...a,children:[e.jsx("circle",{cx:"25",cy:"25",r:"20",stroke:"currentColor",strokeWidth:"5",fill:"none",opacity:"0.25"}),e.jsx(s.circle,{cx:"25",cy:"25",r:"20",stroke:"currentColor",strokeWidth:"5",fill:"none",strokeLinecap:"round",strokeDasharray:"100 80",strokeDashoffset:"0",animate:{rotate:360,strokeDashoffset:-180},transition:{repeat:1/0,duration:1,ease:"linear"},style:{originX:"50%",originY:"50%"}})]}),Q=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,_=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,ee={name:"",email:"",password:"",confirm:"",agree:!1};function ae(a){const o={};return a.name.trim()?a.name.trim().length<2&&(o.name="Name must be at least 2 characters."):o.name="Name is required.",a.email.trim()?Q.test(a.email)||(o.email="Enter a valid email."):o.email="Email is required.",a.password?_.test(a.password)||(o.password="Min 8 chars, 1 uppercase, 1 lowercase, 1 number."):o.password="Password is required.",a.confirm?a.confirm!==a.password&&(o.confirm="Passwords do not match."):o.confirm="Confirm your password.",a.agree||(o.agree="Please accept the terms."),o}function te(){const[a,o]=t.useState(ee),[r,I]=t.useState({}),[l,P]=t.useState({}),[y,F]=t.useState(!1),[w,A]=t.useState(!1),[m,p]=t.useState("idle"),[D,f]=t.useState(""),[H,j]=t.useState(!1),L=Y(),T=t.useRef(null),k=t.useRef(null),N=t.useRef(null),C=t.useRef(null),R=t.useRef(null),S=t.useRef(null),v=t.useMemo(()=>{const i=["name","email","password","confirm","agree"];for(const n of i)if(r[n])return n;return null},[r]);t.useEffect(()=>{var n,d,B;if(!v)return;(B=(d=(n={name:k,email:N,password:C,confirm:R,agree:S}[v])==null?void 0:n.current)==null?void 0:d.focus)==null||B.call(d)},[v]);const W={idle:{width:160,borderRadius:10,backgroundColor:"var(--primary)",transition:{type:"spring",stiffness:260,damping:22}},loading:{width:44,borderRadius:999,transition:{type:"spring",stiffness:260,damping:24}},success:{width:44,borderRadius:999,backgroundColor:"var(--ok, hsl(152 70% 35%))",transition:{type:"spring",stiffness:260,damping:22}},error:{width:160,borderRadius:10,backgroundColor:"var(--err, hsl(0 70% 55%))",transition:{type:"spring",stiffness:260,damping:22}}},M=async()=>{await L.start({x:[0,-8,8,-6,6,-3,3,0],transition:{duration:.5}})},h=(i,n)=>{o(d=>({...d,[i]:n}))},x=i=>P(n=>({...n,[i]:!0})),O=async i=>{i.preventDefault();const n=ae(a);if(I(n),Object.keys(n).length){p("error"),f("Please fix form errors."),M();return}p("loading"),f("Submitting…");try{await new Promise(d=>setTimeout(d,1100)),p("success"),f("Submitted successfully."),j(!0),setTimeout(()=>p("idle"),900)}catch{p("error"),f("Submission failed."),M()}},V=()=>j(!1),q="Create account",u=m==="loading";return e.jsx($,{reducedMotion:"never",children:e.jsxs(b.Wrapper,{children:[e.jsx(b.Header,{children:e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Submit Morph"}),e.jsx("p",{className:"muted",children:"A premium form with a morphing submit button, accessible validation, and a custom modal."})]})}),e.jsx(b.Stage,{children:e.jsxs("form",{ref:T,className:"form",onSubmit:O,noValidate:!0,children:[e.jsxs(s.div,{className:"field",animate:r.name&&l.name?{x:[0,-6,6,0]}:{x:0},children:[e.jsx("label",{htmlFor:"name",children:"Full name"}),e.jsx("input",{id:"name",ref:k,type:"text",placeholder:"e.g., Ashish Ranjan",value:a.name,onChange:i=>h("name",i.target.value),onBlur:()=>x("name"),"aria-invalid":!!r.name,"aria-describedby":r.name?"err-name":void 0,disabled:u}),e.jsx(c,{children:r.name&&l.name&&e.jsx(s.div,{id:"err-name",className:"error",initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},children:r.name})})]}),e.jsxs(s.div,{className:"field twoCol",animate:r.email&&l.email?{x:[0,-6,6,0]}:{x:0},children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{id:"email",ref:N,type:"email",placeholder:"you@example.com",value:a.email,onChange:i=>h("email",i.target.value),onBlur:()=>x("email"),"aria-invalid":!!r.email,"aria-describedby":r.email?"err-email":void 0,disabled:u,inputMode:"email",autoComplete:"email"}),e.jsx(c,{children:r.email&&l.email&&e.jsx(s.div,{id:"err-email",className:"error",initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},children:r.email})})]}),e.jsxs(s.div,{className:"field",animate:r.password&&l.password?{x:[0,-6,6,0]}:{x:0},children:[e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsxs("div",{className:"withEye",children:[e.jsx("input",{id:"password",ref:C,type:y?"text":"password",placeholder:"Min 8 chars, upper/lower/number",value:a.password,onChange:i=>h("password",i.target.value),onBlur:()=>x("password"),"aria-invalid":!!r.password,"aria-describedby":r.password?"err-password":"hint-password",disabled:u,autoComplete:"new-password"}),e.jsx("button",{type:"button",className:"eye","aria-label":y?"Hide password":"Show password",onClick:()=>F(i=>!i),tabIndex:-1,children:y?e.jsx(z,{}):e.jsx(E,{})})]}),e.jsx("div",{id:"hint-password",className:"hint",children:"Use at least 8 characters with a mix of letters and numbers."}),e.jsx(c,{children:r.password&&l.password&&e.jsx(s.div,{id:"err-password",className:"error",initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},children:r.password})})]}),e.jsxs(s.div,{className:"field",animate:r.confirm&&l.confirm?{x:[0,-6,6,0]}:{x:0},children:[e.jsx("label",{htmlFor:"confirm",children:"Confirm password"}),e.jsxs("div",{className:"withEye",children:[e.jsx("input",{id:"confirm",ref:R,type:w?"text":"password",placeholder:"Re-enter your password",value:a.confirm,onChange:i=>h("confirm",i.target.value),onBlur:()=>x("confirm"),"aria-invalid":!!r.confirm,"aria-describedby":r.confirm?"err-confirm":void 0,disabled:u,autoComplete:"new-password"}),e.jsx("button",{type:"button",className:"eye","aria-label":w?"Hide password":"Show password",onClick:()=>A(i=>!i),tabIndex:-1,children:w?e.jsx(z,{}):e.jsx(E,{})})]}),e.jsx(c,{children:r.confirm&&l.confirm&&e.jsx(s.div,{id:"err-confirm",className:"error",initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},children:r.confirm})})]}),e.jsxs(s.div,{className:"agreeRow",animate:r.agree&&l.agree?{x:[0,-6,6,0]}:{x:0},children:[e.jsxs("label",{className:"checkbox",children:[e.jsx("input",{ref:S,type:"checkbox",checked:a.agree,onChange:i=>h("agree",i.target.checked),onBlur:()=>x("agree"),"aria-invalid":!!r.agree,"aria-describedby":r.agree?"err-agree":void 0,disabled:u}),e.jsxs("span",{children:["I agree to the ",e.jsx("a",{href:"#",onClick:i=>i.preventDefault(),children:"Terms & Privacy"}),"."]})]}),e.jsx(c,{children:r.agree&&l.agree&&e.jsx(s.div,{id:"err-agree",className:"error",initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},children:r.agree})})]}),e.jsx("div",{className:"submitRow",children:e.jsx(s.button,{type:"submit",className:"submitBtn",variants:W,animate:m,whileTap:{scale:m==="idle"?.98:1},disabled:m==="loading",children:e.jsx("span",{className:"btnContent",children:e.jsx(c,{mode:"wait",initial:!1,children:m==="loading"?e.jsx(s.span,{className:"btnIcon",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:e.jsx(J,{})},"loader"):m==="success"?e.jsx(s.span,{className:"btnIcon",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:e.jsx(G,{})},"check"):e.jsx(s.span,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},className:"btnLabel",children:q},"label")})})})}),e.jsx("div",{className:"sr","aria-live":"polite",children:D})]})}),e.jsx(c,{children:H&&e.jsx(b.ModalOverlay,{as:s.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:e.jsxs(s.div,{className:"modal",initial:{y:20,scale:.98,opacity:0},animate:{y:0,scale:1,opacity:1,transition:{type:"spring",stiffness:280,damping:24}},exit:{y:10,opacity:0,transition:{duration:.2}},children:[e.jsx("header",{className:"mHead",children:e.jsx("h3",{id:"modal-title",children:"Welcome aboard!"})}),e.jsxs("div",{className:"mBody",children:[e.jsx("p",{className:"muted",children:"Your account has been created with:"}),e.jsxs("ul",{className:"details",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Name:"})," ",a.name]}),e.jsxs("li",{children:[e.jsx("b",{children:"Email:"})," ",a.email]}),e.jsxs("li",{children:[e.jsx("b",{children:"Password:"})," ","•".repeat(Math.max(8,a.password.length))]})]})]}),e.jsx("footer",{className:"mFoot",children:e.jsx("button",{className:"closeBtn",onClick:V,children:"Done"})})]})})})]})})}export{te as default};
