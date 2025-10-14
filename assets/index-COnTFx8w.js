import{d,r as o,j as e,A as f}from"./index-BybwJ5J0.js";import{M as T,m as n}from"./proxy-CWA0aJAx.js";const D=d.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 920px;
    margin: 0 auto;
    color: var(--text);
`,V=d.header`
    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`,G=d.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);
`,U=d.form`
    display: grid;
    gap: var(--space-6);

    .actions {
        display: flex;
        justify-content: flex-end;
    }

    .btn.primary {
        height: 40px;
        padding: 0 18px;
        border-radius: var(--radius-md);
        border: 1px solid transparent;
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.primary:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`,Y=d.div`
    display: grid;
    gap: 8px;

    .label {
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .label .req {
        color: hsl(0 72% 56%);
    }

    .inlineLabel {
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
        color: var(--text-muted);
        padding: 2px 8px;
        border-radius: 999px;
        background: var(--surface);
        border: 1px solid var(--border);
    }

    .control {
        position: relative;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--surface);
        padding: 10px 12px;
        box-shadow: var(--shadow-sm);
        overflow: hidden; /* ring stays neat inside */
    }

    .ring {
        position: absolute;
        inset: -1.5px; /* just outside the border for a nicer glow edge */
        border-radius: calc(var(--radius-md) + 2px);
        pointer-events: none;
        background: radial-gradient(
                180px 30px at 10% 0%,
                hsl(210 90% 60% / 0.18),
                transparent
            ),
            radial-gradient(
                180px 30px at 90% 100%,
                hsl(210 90% 60% / 0.18),
                transparent
            );
        box-shadow: 0 0 0 2px hsl(210 90% 56% / 0.25),
            0 8px 22px hsl(210 90% 40% / 0.18);
        z-index: 0;
    }

    input,
    select {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 28px;
        border: none;
        outline: none;
        background: transparent;
        color: var(--text);
        font-size: 14px;
        font-family: inherit;
    }

    select {
        height: 32px;

        option {
            background-color: var(--card); /* list row bg */
            color: var(--text); /* list row text */
        }
    }

    .iconBtn {
        position: relative;
        z-index: 1;
        display: inline-grid;
        place-items: center;
        width: 36px;
        height: 32px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        cursor: pointer;
    }

    .meta {
        min-height: 18px;
    }
    .hint {
        color: var(--text-muted);
        font-size: 12px;
    }
    .error {
        color: hsl(0 72% 60%);
        font-size: 12px;
        font-weight: 600;
    }

    /* Password strength bar */
    .pwBar {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 10px;
    }
    .pwBar .bar {
        height: 6px;
        border-radius: 999px;
        background: linear-gradient(
            90deg,
            hsl(0 80% 60% / 0.8),
            hsl(30 90% 55% / 0.9),
            hsl(120 70% 45% / 0.9)
        );
        box-shadow: inset 0 0 0 1px hsl(0 0% 0% / 0.15);
    }
    .pwBar .label {
        color: var(--text-muted);
        font-size: 12px;
    }
`,Z=d.div`
    display: grid;
    gap: 6px;

    .checkbox {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        user-select: none;
    }

    .checkbox input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }
    .checkbox .box {
        width: 18px;
        height: 18px;
        border-radius: 6px;
        border: 1px solid var(--border);
        background: var(--surface);
        box-shadow: var(--shadow-sm);
        position: relative;
    }
    .checkbox input:checked + .box {
        border-color: hsl(210 90% 56%);
        background: linear-gradient(180deg, hsl(210 90% 62%), hsl(210 90% 56%));
    }
    .checkbox input:checked + .box::after {
        content: "";
        position: absolute;
        inset: 0;
        background: conic-gradient(
            from 0deg,
            transparent 0 250deg,
            var(--primary-contrast) 0 360deg
        );
        -webkit-mask: radial-gradient(
            7px at 50% 50%,
            transparent 6px,
            black 6.5px
        );
        mask: radial-gradient(7px at 50% 50%, transparent 6px, black 6.5px);
        opacity: 0.9;
    }

    .error {
        color: hsl(0 72% 60%);
        font-size: 12px;
        font-weight: 600;
    }
`;d.div.attrs({className:"modal-backdrop"})`
    position: fixed;
    inset: 0;
    z-index: 40;
    background: hsl(220 18% 5% / 0.45);
    backdrop-filter: blur(0px);
`;d.div.attrs({className:"modal-card"})`
    position: fixed;
    inset: 0;
    z-index: 41;
    display: grid;
    place-items: center;
    pointer-events: none;
    > div {
        pointer-events: auto;
    }
    & {
        /* inner card */
    }
    .check {
        display: grid;
        place-items: center;
        width: 48px;
        height: 48px;
        border-radius: 999px;
        background: var(--surface);
        border: 1px solid var(--border);
        color: hsl(140 60% 45%);
        margin: 0 auto var(--space-4);
    }
    .modal-card {
        position: relative;
    }
`;d.div`
    background: var(--card);
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    width: min(480px, 92vw);
    padding: var(--space-6);
    text-align: center;

    h3 {
        font-size: 20px;
        margin-bottom: 8px;
    }
    p {
        color: var(--text-muted);
        margin-bottom: var(--space-4);
    }

    .btn.primary {
        height: 36px;
        padding: 0 16px;
        border-radius: var(--radius-md);
        border: 1px solid transparent;
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
`;const m={Wrapper:D,Header:V,Stage:G,Form:U,Field:Y,CheckRow:Z},F=i=>e.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18","aria-hidden":!0,...i,children:e.jsx("path",{fill:"currentColor",d:"M12 5c4.5 0 8.5 2.6 10 7-1.5 4.4-5.5 7-10 7S3.5 16.4 2 12c1.5-4.4 5.5-7 10-7zm0 2C8.6 7 5.7 8.9 4.4 12 5.7 15.1 8.6 17 12 17s6.3-1.9 7.6-5C18.3 8.9 15.4 7 12 7zm0 2.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5z"})}),M=i=>e.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18","aria-hidden":!0,...i,children:e.jsx("path",{fill:"currentColor",d:"M2.4 1.7 20 19.3l-1.4 1.4-3.1-3.1A10.7 10.7 0 0 1 12 19c-4.5 0-8.5-2.6-10-7a12.8 12.8 0 0 1 4.3-5.7L1 3.1 2.4 1.7zM12 7c3.4 0 6.3 1.9 7.6 5a11.2 11.2 0 0 1-3.3 4.2l-2-2a4 4 0 0 0-5.5-5.5l-2-2A12.7 12.7 0 0 1 12 7zm0 3a2 2 0 0 1 2 2l-3.4-3.4c.4-.4.9-.6 1.4-.6z"})}),J=i=>e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":!0,...i,children:e.jsx("path",{fill:"currentColor",d:"M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm0 4.8a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM10.9 18h2.2v-7h-2.2v7z"})}),K=i=>e.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":!0,...i,children:e.jsx("path",{fill:"currentColor",d:"M9.2 16.6 5.4 12.8l1.4-1.4 2.4 2.3 7.9-7.9 1.4 1.4-9.3 9.4z"})}),Q=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,A=/[A-Z]/,q=/[a-z]/,$=/[0-9]/,E=/[^A-Za-z0-9]/;function X(i){let s=0;return i.length>=8&&s++,A.test(i)&&s++,q.test(i)&&s++,$.test(i)&&s++,E.test(i)&&s++,Math.min(s,5)}const P=i=>["Very Weak","Weak","Okay","Good","Strong"][Math.max(0,i-1)]||"Very Weak";function v({id:i,label:s,children:x,hint:c,error:p,required:w}){const[r,y]=o.useState(!1),N={initial:{opacity:0,scale:.97},focus:{opacity:1,scale:1,transition:{duration:.18}},blur:{opacity:0,scale:.98,transition:{duration:.2}}},j={initial:{borderColor:"var(--border)"},focus:{borderColor:"hsl(210 90% 56%)",transition:{duration:.18}},error:{borderColor:"hsl(0 72% 56%)",transition:{duration:.18}}},b=p?"error":r?"focus":"initial";return e.jsxs(m.Field,{onFocusCapture:()=>y(!0),onBlurCapture:k=>{k.currentTarget.contains(k.relatedTarget)||y(!1)},children:[e.jsxs("label",{htmlFor:i,className:"label",children:[s," ",w&&e.jsx("span",{className:"req","aria-hidden":!0,children:"*"})]}),e.jsxs(n.div,{className:"control",variants:j,animate:b,layout:!0,children:[e.jsx(n.span,{className:"ring",variants:N,animate:r?"focus":"blur","aria-hidden":"true"}),x]}),e.jsx("div",{className:"meta",children:e.jsx(f,{initial:!1,children:p?e.jsx(n.div,{className:"error",initial:{y:-6,opacity:0},animate:{y:0,opacity:1},exit:{y:-6,opacity:0},transition:{duration:.18},children:p},"err"):c?e.jsx(n.div,{className:"hint",initial:{opacity:0},animate:{opacity:.9},exit:{opacity:0},transition:{duration:.2},children:c},"hint"):null})})]})}function _({open:i,onClose:s}){return e.jsx(f,{children:i&&e.jsxs(e.Fragment,{children:[e.jsx(n.div,{className:"modal-backdrop",initial:{opacity:0},animate:{opacity:1,backdropFilter:"blur(4px)"},exit:{opacity:0,backdropFilter:"blur(0px)"},transition:{duration:.25,ease:[.22,1,.36,1]},onClick:s}),e.jsxs(n.div,{className:"modal-card",role:"dialog","aria-modal":"true","aria-labelledby":"success-title",initial:{y:30,opacity:0,scale:.98},animate:{y:0,opacity:1,scale:1},exit:{y:20,opacity:0,scale:.98},transition:{duration:.25,ease:[.22,1,.36,1]},children:[e.jsx("div",{className:"check",children:e.jsx(n.span,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:400,damping:22},children:e.jsx(K,{})})}),e.jsx("h3",{id:"success-title",children:"All set!"}),e.jsx("p",{children:"Your demo form validated successfully."}),e.jsx("button",{className:"btn primary",onClick:s,children:"Close"})]})]})})}function re(){const i=o.useId(),s=o.useId(),x=o.useId(),c=o.useId(),p=o.useId(),w=o.useId(),[r,y]=o.useState({name:"",email:"",password:"",confirm:"",role:"",terms:!1}),[N,j]=o.useState({}),[b,k]=o.useState(!1),[z,W]=o.useState(!1),[S,I]=o.useState(!1),[H,B]=o.useState(!1),C=X(r.password),L=C/5*100,l=o.useMemo(()=>{const a={};return r.name.trim()?r.name.trim().length<2&&(a.name="Name should be at least 2 characters."):a.name="Your full name is required.",Q.test(r.email)||(a.email="Enter a valid email address."),r.password?r.password.length<8?a.password="Use at least 8 characters.":A.test(r.password)&&q.test(r.password)?$.test(r.password)?E.test(r.password)||(a.password="Include at least one symbol."):a.password="Include at least one number.":a.password="Use both uppercase and lowercase letters.":a.password="Create a password.",r.confirm!==r.password&&(a.confirm="Passwords do not match."),r.role||(a.role="Select a role."),r.terms||(a.terms="You must accept the terms."),a},[r]),t=a=>N[a]&&l[a],u=(a,g)=>y(R=>({...R,[a]:g})),h=a=>j(g=>({...g,[a]:!0}));async function O(a){a.preventDefault(),j({name:!0,email:!0,password:!0,confirm:!0,role:!0,terms:!0}),!Object.keys(l).length&&(I(!0),await new Promise(g=>setTimeout(g,700)),I(!1),B(!0))}return e.jsx(T,{reducedMotion:"never",children:e.jsxs(m.Wrapper,{children:[e.jsx(m.Header,{children:e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Field Focus Glow"}),e.jsxs("p",{className:"muted",children:["Premium focus ring with ",e.jsx("code",{children:"Framer Motion"})," + accessible validation, animated error hints, and password strength meter."]})]})}),e.jsx(m.Stage,{children:e.jsxs(m.Form,{onSubmit:O,noValidate:!0,children:[e.jsx(v,{id:i,label:"Full name",required:!0,hint:"As it appears on official ID.",error:t("name")&&l.name,children:e.jsx("input",{id:i,type:"text",autoComplete:"name",value:r.name,onChange:a=>u("name",a.target.value),onBlur:()=>h("name"),"aria-invalid":!!t("name"),"aria-describedby":t("name")?`${i}-err`:void 0})}),e.jsx(v,{id:s,label:"Email",required:!0,hint:"We’ll never share your email.",error:t("email")&&l.email,children:e.jsx("input",{id:s,type:"email",autoComplete:"email",value:r.email,onChange:a=>u("email",a.target.value),onBlur:()=>h("email"),"aria-invalid":!!t("email"),"aria-describedby":t("email")?`${s}-err`:void 0})}),e.jsxs(v,{id:x,label:e.jsxs("span",{className:"inlineLabel",children:["Password",e.jsx("span",{className:"req","aria-hidden":!0,children:"*"}),e.jsxs("span",{className:"badge",children:[e.jsx(J,{})," rules"]})]}),required:!0,error:t("password")&&l.password,hint:e.jsxs("div",{className:"pwBar",role:"img","aria-label":`Password strength: ${P(C)}`,children:[e.jsx(n.div,{className:`bar s${C}`,initial:{width:0},animate:{width:`${L}%`},transition:{type:"spring",stiffness:220,damping:26}}),e.jsx("span",{className:"label",children:P(C)})]}),children:[e.jsx("input",{id:x,type:b?"text":"password",autoComplete:"new-password",value:r.password,onChange:a=>u("password",a.target.value),onBlur:()=>h("password"),"aria-invalid":!!t("password"),"aria-describedby":t("password")?`${x}-err`:void 0}),e.jsx("button",{type:"button",className:"iconBtn","aria-label":b?"Hide password":"Show password",onClick:()=>k(a=>!a),children:e.jsx(f,{mode:"wait",initial:!1,children:b?e.jsx(n.span,{initial:{rotate:-15,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:10,opacity:0},transition:{duration:.2},children:e.jsx(M,{})},"eye-off"):e.jsx(n.span,{initial:{rotate:-15,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:10,opacity:0},transition:{duration:.2},children:e.jsx(F,{})},"eye")})})]}),e.jsxs(v,{id:c,label:"Confirm password",required:!0,error:t("confirm")&&l.confirm,children:[e.jsx("input",{id:c,type:z?"text":"password",autoComplete:"new-password",value:r.confirm,onChange:a=>u("confirm",a.target.value),onBlur:()=>h("confirm"),"aria-invalid":!!t("confirm"),"aria-describedby":t("confirm")?`${c}-err`:void 0}),e.jsx("button",{type:"button",className:"iconBtn","aria-label":z?"Hide password":"Show password",onClick:()=>W(a=>!a),children:e.jsx(f,{mode:"wait",initial:!1,children:z?e.jsx(n.span,{initial:{rotate:-15,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:10,opacity:0},transition:{duration:.2},children:e.jsx(M,{})},"eye-off-c"):e.jsx(n.span,{initial:{rotate:-15,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:10,opacity:0},transition:{duration:.2},children:e.jsx(F,{})},"eye-c")})})]}),e.jsx(v,{id:p,label:"Role",required:!0,error:t("role")&&l.role,children:e.jsxs("select",{id:p,value:r.role,onChange:a=>u("role",a.target.value),onBlur:()=>h("role"),"aria-invalid":!!t("role"),children:[e.jsx("option",{value:"",children:"Select role…"}),e.jsx("option",{value:"designer",children:"Designer"}),e.jsx("option",{value:"developer",children:"Developer"}),e.jsx("option",{value:"pm",children:"Product Manager"})]})}),e.jsxs(m.CheckRow,{children:[e.jsxs("label",{htmlFor:w,className:"checkbox",children:[e.jsx("input",{id:w,type:"checkbox",checked:r.terms,onChange:a=>u("terms",a.target.checked),onBlur:()=>h("terms"),"aria-invalid":!!t("terms")}),e.jsx("span",{className:"box","aria-hidden":!0}),e.jsx("span",{children:"I agree to the terms & privacy policy."})]}),e.jsx(f,{initial:!1,children:t("terms")&&e.jsx(n.div,{className:"error",initial:{y:-6,opacity:0},animate:{y:0,opacity:1},exit:{y:-6,opacity:0},transition:{duration:.18},children:l.terms})})]}),e.jsx("div",{className:"actions",children:e.jsx(n.button,{className:"btn primary",type:"submit",disabled:S,whileTap:{scale:.98},whileHover:{y:-2},children:S?"Submitting…":"Create account"})})]})}),e.jsx(_,{open:H,onClose:()=>B(!1)})]})})}export{re as default};
