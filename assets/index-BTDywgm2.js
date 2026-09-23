import{d as h,r as s,j as e,A as l}from"./index-D8yAWZ_T.js";import{m as o,M as U}from"./proxy-DfzdIqFN.js";import{u as Z}from"./use-animation-BuKN9KEq.js";const G="hsl(0 84% 60%)",S="hsl(142 72% 45%)",J=h.div`
    --danger: ${G};
    --success: ${S};

    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 820px;
    margin: 0 auto;
    color: var(--text);
`,K=h.header`
    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`,Q=h.section`
    .form {
        display: grid;
        gap: var(--space-6);
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        padding: var(--space-6);
    }

    .field {
        display: grid;
        gap: var(--space-3);
    }

    label {
        font-size: 13px;
        color: var(--text-muted);
    }

    input[type="text"],
    input[type="email"],
    input[type="password"],
    input[type="search"],
    input[type="url"],
    input[type="tel"] {
        width: 100%;
        height: 40px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        padding: 0 12px;
        outline: none;
        box-shadow: var(--shadow-sm);
        transition: border-color 0.15s ease, box-shadow 0.15s ease,
            background 0.15s ease;
    }
    input::placeholder {
        color: color-mix(in oklab, var(--text-muted) 70%, transparent);
    }

    input:focus {
        border-color: var(--primary);
        box-shadow: 0 0 0 3px hsl(210 90% 56% / 0.25);
    }

    .field.invalid input {
        border-color: var(--danger);
        box-shadow: 0 0 0 2px
            color-mix(in oklab, var(--danger) 40%, transparent);
    }

    .error {
        color: var(--danger);
        font-size: 12px;
    }

    .hasSuffix .inputWrap {
        position: relative;
        display: grid;
    }

    .eyeBtn {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        height: 28px;
        min-width: 34px;
        padding: 0 8px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--card);
        color: var(--text);
        display: inline-grid;
        place-items: center;
        cursor: pointer;
        box-shadow: var(--shadow-sm);
    }
    .eyeBtn:hover {
        background: var(--surface);
    }

    /* strength meter */
    .meter {
        display: grid;
        gap: 6px;
        align-items: center;
    }
    .meter .bar {
        height: 6px;
        width: 0%;
        border-radius: 999px;
        background: color-mix(in oklab, var(--primary) 85%, white 0%);
        box-shadow: inset 0 0 0 1px var(--border);
    }
    .meter .bar.s1 {
        background: color-mix(in oklab, var(--danger) 80%, white 0%);
    }
    .meter .bar.s2 {
        background: color-mix(in oklab, orange 75%, white 0%);
    }
    .meter .bar.s3 {
        background: color-mix(in oklab, #f2c94c 80%, white 0%);
    }
    .meter .bar.s4 {
        background: color-mix(in oklab, var(--success) 85%, white 0%);
    }

    .meter .hint {
        display: flex;
        gap: 10px;
        align-items: center;
        font-size: 12px;
        color: var(--text-muted);
    }
    .meter .hint .link {
        font: inherit;
        background: transparent;
        border: none;
        color: var(--primary);
        text-decoration: underline;
        cursor: pointer;
        padding: 0;
    }

    /* terms */
    .terms {
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--text);
    }
    .terms input[type="checkbox"] {
        width: 16px;
        height: 16px;
        accent-color: var(--primary);
    }
    .terms.invalid span {
        color: var(--danger);
    }

    /* actions */
    .actions {
        display: flex;
        justify-content: flex-end;
    }
    .submitBtn {
        height: 38px;
        padding: 0 16px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    .submitBtn:hover {
        filter: brightness(1.05);
    }
`,X=h(o.div)`
    position: fixed;
    inset: 0;
    z-index: 80;
    display: grid;
    place-items: center;
    padding: var(--space-6);
    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: hsl(220 14% 10% / 0.35);
        backdrop-filter: blur(6px) saturate(1.1);
    }
`,M=h(o.div)`
    position: relative;
    z-index: 1;
    width: min(560px, 96vw);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);
    color: var(--text);
    .mHead h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }
    .mList {
        margin-left: 18px;
        display: grid;
        gap: 6px;
        color: var(--text);
    }
    .mActions {
        display: flex;
        justify-content: flex-end;
        margin-top: var(--space-4);
    }
    .ghost {
        height: 34px;
        padding: 0 12px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        cursor: pointer;
        box-shadow: var(--shadow-sm);
    }
`,_=h(M)`
    display: grid;
    justify-items: center;
    text-align: center;
    gap: var(--space-3);
    .badge {
        width: 42px;
        height: 42px;
        border-radius: 999px;
        display: grid;
        place-items: center;
        background: ${S};
        color: white;
        box-shadow: 0 8px 24px hsl(142 72% 45% / 0.35);
    }
    h3 {
        margin-top: 6px;
    }
    p {
        color: var(--text-muted);
    }
`,p={Wrapper:J,Header:K,Stage:Q,ModalRoot:X,ModalCard:M,SuccessCard:_},ee=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,$=/[A-Z]/,z=/[a-z]/,P=/\d/,A=/[^A-Za-z0-9]/;function ae(r){var v,y;const a={};(v=r.name)!=null&&v.trim()?r.name.trim().length<2&&(a.name="Name must be at least 2 characters."):a.name="Please enter your full name.",(y=r.email)!=null&&y.trim()?ee.test(r.email)||(a.email="Enter a valid email address."):a.email="Email is required.";const n=r.password||"",c={len:n.length>=8,upper:$.test(n),lower:z.test(n),digit:P.test(n),special:A.test(n)},d=Object.values(c).filter(Boolean).length;return n?d<3?a.password="Password is too weak.":c.len||(a.password="Use at least 8 characters."):a.password="Password is required.",r.confirm?r.confirm!==r.password&&(a.confirm="Passwords do not match."):a.confirm="Please confirm your password.",r.accept||(a.accept="You must accept the terms."),{errors:a}}function re(r){if(!r)return 0;let a=0;return r.length>=8&&a++,$.test(r)&&a++,z.test(r)&&a++,P.test(r)&&a++,A.test(r)&&a++,Math.min(4,Math.max(1,a))}function ie({off:r=!1}){return r?e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,children:e.jsx("path",{fill:"currentColor",d:"M2 5.27L3.28 4 20 20.72 18.73 22l-3.17-3.17A9.76 9.76 0 0 1 12 20C6.5 20 2.15 16.28 1 12c.41-1.49 1.23-2.9 2.33-4.08L2 5.27zM12 7a5 5 0 0 1 5 5c0 .66-.13 1.29-.36 1.86l-6.5-6.5C10.71 7.13 11.34 7 12 7zm10.99 5c-.56 2.05-2.09 3.98-4.11 5.36l-1.45-1.45C19.43 14.69 20.57 13.43 21 12 19.85 7.72 15.5 4 10 4c-1.07 0-2.1.13-3.08.36l-1.6-1.6C6.64 2.26 8.28 2 10 2c6.01 0 10.85 3.86 12.99 10z"})}):e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,children:e.jsx("path",{fill:"currentColor",d:"M12 4c6 0 10.85 3.86 13 10-2.15 6.14-7 10-13 10S1.15 20.14-1 14C1.15 7.86 6 4 12 4zm0 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"})})}function te(){return e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,children:e.jsx("path",{fill:"currentColor",d:"M9 16.17l-3.88-3.88L3.71 13.7 9 19l12-12-1.41-1.41z"})})}function b(r){const a=Z();return s.useEffect(()=>{r&&a.start({x:[0,-8,8,-6,6,-3,3,0],transition:{duration:.5,times:[0,.12,.24,.4,.6,.78,.9,1],ease:"easeInOut"}})},[r,a]),a}function de(){const r=s.useId(),a=s.useId(),n=s.useId(),c=s.useId(),[d,v]=s.useState({name:"",email:"",password:"",confirm:"",accept:!1}),[y,N]=s.useState({}),[I,B]=s.useState(0),[w,E]=s.useState(!1),[F,j]=s.useState(!1),[k,C]=s.useState(!1),{errors:u}=s.useMemo(()=>ae(d),[d]),m=s.useMemo(()=>re(d.password),[d.password]),x=t=>{const{name:g,value:W,type:q,checked:V}=t.target;v(Y=>({...Y,[g]:q==="checkbox"?V:W}))},f=t=>N(g=>({...g,[t.target.name]:!0})),i=t=>!!u[t]&&(y[t]||I>0),O=b(i("name")),R=b(i("email")),T=b(i("password")),L=b(i("confirm")),D=b(i("accept")),H=t=>{t.preventDefault(),B(g=>g+1),N({name:!0,email:!0,password:!0,confirm:!0,accept:!0}),Object.keys(u).length===0&&C(!0)};return s.useEffect(()=>{if(!k)return;const t=setTimeout(()=>C(!1),1600);return()=>clearTimeout(t)},[k]),e.jsx(U,{reducedMotion:"never",children:e.jsxs(p.Wrapper,{children:[e.jsx(p.Header,{children:e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Invalid Field Micro-Shake"}),e.jsx("p",{className:"muted",children:"Strict validation with a gentle shake on errors, animated hints, and a polished success modal."})]})}),e.jsx(p.Stage,{children:e.jsxs("form",{className:"form",noValidate:!0,onSubmit:H,children:[e.jsxs(o.div,{className:`field ${i("name")?"invalid":""}`,animate:O,children:[e.jsx("label",{htmlFor:r,children:"Full Name"}),e.jsx("input",{id:r,type:"text",name:"name",placeholder:"Jane Doe",value:d.name,onChange:x,onBlur:f,"aria-invalid":i("name"),"aria-describedby":i("name")?`${r}-err`:void 0,autoComplete:"name"}),e.jsx(l,{children:i("name")&&e.jsx(o.p,{id:`${r}-err`,className:"error",initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},children:u.name})})]}),e.jsxs(o.div,{className:`field ${i("email")?"invalid":""}`,animate:R,children:[e.jsx("label",{htmlFor:a,children:"Email"}),e.jsx("input",{id:a,type:"email",name:"email",placeholder:"jane@example.com",value:d.email,onChange:x,onBlur:f,"aria-invalid":i("email"),"aria-describedby":i("email")?`${a}-err`:void 0,autoComplete:"email",inputMode:"email"}),e.jsx(l,{children:i("email")&&e.jsx(o.p,{id:`${a}-err`,className:"error",initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},children:u.email})})]}),e.jsxs(o.div,{className:`field hasSuffix ${i("password")?"invalid":""}`,animate:T,children:[e.jsx("label",{htmlFor:n,children:"Password"}),e.jsxs("div",{className:"inputWrap",children:[e.jsx("input",{id:n,type:w?"text":"password",name:"password",placeholder:"••••••••",value:d.password,onChange:x,onBlur:f,"aria-invalid":i("password"),"aria-describedby":`${n}-help ${i("password")?`${n}-err`:""}`.trim(),autoComplete:"new-password"}),e.jsx("button",{type:"button",className:"eyeBtn","aria-label":w?"Hide password":"Show password",onClick:()=>E(t=>!t),children:e.jsx(l,{mode:"wait",initial:!1,children:e.jsx(o.span,{initial:{rotate:-10,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:10,opacity:0},transition:{duration:.2},children:e.jsx(ie,{off:w})},w?"eye-off":"eye")})})]}),e.jsxs("div",{className:"meter",id:`${n}-help`,"aria-live":"polite",children:[e.jsx(o.div,{className:`bar s${m}`,initial:!1,animate:{width:["0%",`${m/4*100}%`]},transition:{duration:.4,ease:[.22,1,.36,1]}}),e.jsxs("span",{className:"hint",children:[m>=4?"Strong":m===3?"Good":m===2?"Weak":m===1?"Very weak":"-",e.jsx("button",{type:"button",className:"link",onClick:()=>j(!0),children:"Password rules"})]})]}),e.jsx(l,{children:i("password")&&e.jsx(o.p,{id:`${n}-err`,className:"error",initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},children:"Password must be 8+ chars and mix cases, numbers, or symbols."})})]}),e.jsxs(o.div,{className:`field ${i("confirm")?"invalid":""}`,animate:L,children:[e.jsx("label",{htmlFor:c,children:"Confirm Password"}),e.jsx("input",{id:c,type:"password",name:"confirm",placeholder:"Repeat password",value:d.confirm,onChange:x,onBlur:f,"aria-invalid":i("confirm"),"aria-describedby":i("confirm")?`${c}-err`:void 0,autoComplete:"new-password"}),e.jsx(l,{children:i("confirm")&&e.jsx(o.p,{id:`${c}-err`,className:"error",initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},children:u.confirm})})]}),e.jsxs(o.label,{className:`terms ${i("accept")?"invalid":""}`,animate:D,children:[e.jsx("input",{type:"checkbox",name:"accept",checked:d.accept,onChange:x,onBlur:f,"aria-invalid":i("accept")}),e.jsx("span",{children:"I accept the terms & privacy policy."})]}),e.jsx("div",{className:"actions",children:e.jsx("button",{type:"submit",className:"submitBtn",children:e.jsx("span",{children:"Create Account"})})})]})}),e.jsx(l,{children:F&&e.jsx(p.ModalRoot,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:t=>{t.target===t.currentTarget&&j(!1)},children:e.jsxs(p.ModalCard,{initial:{opacity:0,y:16,scale:.98},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:8,scale:.98},transition:{duration:.22,ease:[.22,1,.36,1]},"aria-label":"Password rules",children:[e.jsx("header",{className:"mHead",children:e.jsx("h3",{children:"Password rules"})}),e.jsxs("ul",{className:"mList",children:[e.jsx("li",{children:"Minimum 8 characters"}),e.jsx("li",{children:"Mix of uppercase & lowercase letters"}),e.jsx("li",{children:"At least one number"}),e.jsx("li",{children:"At least one special character"})]}),e.jsx("div",{className:"mActions",children:e.jsx("button",{className:"ghost",onClick:()=>j(!1),children:"Close"})})]})})}),e.jsx(l,{children:k&&e.jsx(p.ModalRoot,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:t=>{t.target===t.currentTarget&&C(!1)},children:e.jsxs(p.SuccessCard,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.98},transition:{duration:.22,ease:[.22,1,.36,1]},role:"alertdialog","aria-label":"Account created",children:[e.jsx(o.span,{className:"badge",initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:320,damping:18},children:e.jsx(te,{})}),e.jsx("h3",{children:"Account created"}),e.jsx("p",{children:"All validations passed. You’re good to go!"})]})})})]})})}export{de as default};
