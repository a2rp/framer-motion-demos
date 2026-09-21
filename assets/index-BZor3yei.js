import{d as x,r as c,j as a,A as f}from"./index-Cf_T-Gf1.js";import{M as C,m as t}from"./proxy-DKYKL-ar.js";import{L as E}from"./index-r-cytiEl.js";const F=x.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1100px;
    margin: 0 auto;
    color: var(--text);

    .head .title h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .head .title .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`,M=x.div`
    display: grid;
    gap: var(--space-6);
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

    /* Card button */
    .card {
        position: relative;
        border-radius: var(--radius-lg);
        padding: 16px;
        display: grid;
        grid-template-columns: 72px 1fr;
        gap: 14px;
        align-items: center;
        text-align: left;
        cursor: pointer;
        outline: none;

        /* tint + surface */
        background: linear-gradient(
                180deg,
                hsl(var(--hue, 210) 32% 55% / 0.1),
                transparent 40%
            ),
            var(--card);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        color: var(--text);

        transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.22s ease, border-color 0.22s ease, background 0.3s ease;
    }

    /* Subtle glow wash on hover */
    .card::after {
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: inherit;
        pointer-events: none;
        background: radial-gradient(
            600px 140px at 10% 0%,
            hsl(var(--hue, 210) 90% 60% / 0.18),
            transparent 55%
        );
        opacity: 0;
        transition: opacity 0.25s ease;
    }

    .card:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-md);
        border-color: color-mix(
            in oklab,
            var(--border),
            hsl(var(--hue, 210) 90% 60%) 25%
        );
    }
    .card:hover::after {
        opacity: 1;
    }

    .card:active {
        transform: translateY(-1px) scale(0.99);
    }
    .card:focus-visible {
        box-shadow: var(--focus-ring);
    }

    /* Avatar chip */
    .avatarSurface.small {
        width: 64px;
        height: 64px;
        border-radius: 999px;
        display: grid;
        place-items: center;

        background: radial-gradient(
                600px 180px at 0% 0%,
                hsl(var(--hue, 210) 90% 56% / 0.22),
                transparent 60%
            ),
            linear-gradient(
                135deg,
                hsl(var(--hue, 210) 90% 58%),
                hsl(calc(var(--hue, 210) + 20) 90% 66%)
            );
        border: 1px solid color-mix(in oklab, var(--border), transparent 35%);
        box-shadow: 0 8px 26px hsl(var(--hue, 210) 90% 40% / 0.25);
    }
    .avatar {
        width: 48px;
        height: 48px;
        border-radius: 999px;
        display: grid;
        place-items: center;
        background: color-mix(in oklab, #fff 92%, transparent);
        color: #0a1b2a;
        font-weight: 800;
        letter-spacing: 0.3px;
    }

    /* Text */
    .meta h3 {
        font-size: 18px;
        line-height: 1.2;
        margin: 0;
        color: var(--text);
    }
    .meta .role {
        color: var(--text-muted);
        font-size: 13px;
        letter-spacing: 0.2px;
        margin-top: 2px;
    }
`,z=x.div`
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

    /* ===== FORM INPUTS - NEW POLISHED STYLES ===== */
    .mBody .form {
        display: grid;
        gap: 14px;
        margin-top: 6px;
    }
    .mBody .formRow {
        display: grid;
        gap: 6px;
    }
    .mBody label {
        font-size: 12px;
        color: var(--text-muted);
        letter-spacing: 0.2px;
    }

    /* Inputs (text/email/password) */
    .mBody input {
        width: 100%;
        height: 40px;
        padding: 0 12px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        outline: none;
        transition: border-color 0.15s ease, box-shadow 0.15s ease,
            background 0.2s ease;
    }
    .mBody input::placeholder {
        color: var(--text-muted);
        opacity: 0.85;
    }
    .mBody input:focus {
        background: var(--card);
        border-color: color-mix(in oklab, var(--border), var(--primary) 55%);
        box-shadow: var(--focus-ring);
    }
    .mBody input:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
    .mBody .formRow.hasError input {
        border-color: hsl(0 70% 55%);
        box-shadow: 0 0 0 3px hsl(0 70% 55% / 0.22);
    }
    .mBody .error {
        color: hsl(0 70% 65%);
        font-size: 12px;
    }

    /* Password eye toggle */
    .mBody .pwWrap {
        position: relative;
    }
    .mBody .pwWrap input {
        padding-right: 42px; /* space for eye button */
    }
    .mBody .eye {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        width: 34px;
        height: 34px;
        display: grid;
        place-items: center;
        border-radius: 8px;
        border: 1px solid transparent;
        background: transparent;
        color: var(--text);
        cursor: pointer;
    }
    .mBody .eye:hover {
        background: color-mix(in oklab, var(--surface), #fff 4%);
    }
    .mBody .eye:active {
        transform: translateY(-50%) scale(0.98);
    }
    .mBody .eye:focus-visible {
        box-shadow: var(--focus-ring);
    }

    /* Actions row */
    .mBody .formActions {
        display: flex;
        gap: 10px;
        margin-top: 8px;
    }

    .mBody .actions {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
        margin: 6px 0 12px;
    }

    .mBody .btn {
        --h: 36px;
        height: var(--h);
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;

        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        font-weight: 600;
        letter-spacing: 0.2px;

        transition: transform 0.12s ease, box-shadow 0.15s ease,
            background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
    }

    .mBody .btn:hover {
        transform: translateY(-1px);
        box-shadow: var(--shadow-md);
    }

    .mBody .btn:active {
        transform: translateY(0) scale(0.99);
    }

    .mBody .btn:focus-visible {
        box-shadow: var(--focus-ring);
    }

    /* Primary + Ghost variants (Follow toggles between these in your JSX) */
    .mBody .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }

    .mBody .btn.ghost {
        background: var(--card);
    }

    /* Pressed/Following state (aria-pressed="true") */
    .mBody .btn[aria-pressed="true"],
    .mBody .btn.active {
        background: color-mix(in oklab, var(--primary) 16%, var(--card));
        border-color: color-mix(in oklab, var(--border), var(--primary) 30%);
        color: var(--text);
    }

    /* Disabled safety */
    .mBody .btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
        box-shadow: var(--shadow-sm);
    }
`;x.div`
    .heroSurface {
        border-radius: var(--radius-lg);
        border: 1px solid color-mix(in oklab, var(--border), transparent 30%);
        background: radial-gradient(
                900px 300px at 10% 0%,
                hsl(var(--hue, 210) 90% 56% / 0.14),
                transparent 60%
            ),
            linear-gradient(
                135deg,
                hsl(var(--hue, 210) 90% 56%),
                hsl(calc(var(--hue, 210) + 22) 90% 62%)
            );
        box-shadow: 0 16px 36px hsl(0 0% 0% / 0.16) inset;
        height: 160px;
        display: grid;
        align-content: end;
        padding: 14px 16px;
        color: var(--primary-contrast);
    }
    .heroContent h3 {
        font-size: 22px;
        margin: 0;
    }
    .heroContent .role {
        opacity: 0.85;
        margin-top: 2px;
    }
`;x.div`
    .columns {
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
    }
    .col h4 {
        font-size: 14px;
        margin-bottom: 8px;
    }
    .actions {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        transition: transform 0.12s ease, box-shadow 0.12s ease,
            background 0.2s ease;
    }
    .btn:hover {
        box-shadow: var(--shadow-md);
        transform: translateY(-1px);
    }
    .btn:active {
        transform: translateY(0);
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn.ghost {
        background: var(--surface);
    }

    .about {
        margin-top: 8px;
    }
    .about .details {
        margin-top: 6px;
    }
`;x.form`
    display: grid;
    gap: 12px;
    margin-top: 6px;

    .formRow {
        display: grid;
        gap: 6px;
    }
    label {
        font-size: 12px;
        color: var(--text-muted);
    }
    input {
        height: 36px;
        padding: 0 12px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        outline: none;
        transition: box-shadow 0.15s ease, border-color 0.15s ease,
            background 0.2s ease;
    }
    input:focus {
        box-shadow: var(--focus-ring);
    }
    .formRow.hasError input {
        border-color: hsl(0 70% 55%);
    }
    .error {
        color: hsl(0 70% 65%);
        font-size: 12px;
    }

    .pwWrap {
        position: relative;
    }
    .pwWrap input {
        width: 100%;
    }
    .eye {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        width: 32px;
        height: 32px;
        display: grid;
        place-items: center;
        border-radius: 8px;
        cursor: pointer;
        background: transparent;
        border: none;
        color: var(--text);
    }

    .formActions {
        display: flex;
        gap: 10px;
        margin-top: 6px;
    }
`;const v={Wrapper:F,Grid:M,ModalOverlay:z},y=[{id:"u1",name:"Ashish Ranjan",title:"Frontend Engineer",email:"ashish@example.com",hue:210},{id:"u2",name:"Priya Sharma",title:"Product Designer",email:"priya@example.com",hue:270},{id:"u3",name:"Rahul Verma",title:"Mobile Developer",email:"rahul@example.com",hue:180},{id:"u4",name:"Neha Kapoor",title:"Data Scientist",email:"neha@example.com",hue:330},{id:"u5",name:"Karan Mehta",title:"Backend Engineer",email:"karan@example.com",hue:35},{id:"u6",name:"Anita Bose",title:"Engineering Manager",email:"anita@example.com",hue:145}],A=r=>a.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18","aria-hidden":!0,focusable:"false",...r,children:[a.jsx("path",{fill:"currentColor",d:"M12 5c5.5 0 9.5 4.5 10.5 6-1 1.5-5 6-10.5 6S2.5 12.5 1.5 11C2.5 9.5 6.5 5 12 5zm0 10a4 4 0 100-8 4 4 0 000 8z"}),a.jsx("circle",{fill:"currentColor",cx:"12",cy:"11",r:"2.2"})]}),P=r=>a.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18","aria-hidden":!0,focusable:"false",...r,children:a.jsx("path",{fill:"currentColor",d:"M2.1 3.5l1.4-1.4 19 19-1.4 1.4-3.2-3.2A12.6 12.6 0 0112 17c-5.5 0-9.5-4.5-10.5-6 .5-.76 1.9-2.43 4-3.86L2.1 3.5zM12 7a4 4 0 013.9 3.2l-1.7-1.7A2.1 2.1 0 0012 8.9c-.2 0-.4 0-.6.1L9.9 7.6c.6-.4 1.3-.6 2.1-.6zm8.6 3c.6.56.9 1.04.9 1.04S18.5 16 12 16c-1.1 0-2.1-.15-3.1-.4l1.8-1.8c.4.13.8.2 1.3.2a4 4 0 003.9-3.3l4.7-4.6 1.4 1.4-1.4 1.4z"})}),T=r=>r.split(" ").filter(Boolean).slice(0,2).map(n=>{var i;return(i=n[0])==null?void 0:i.toUpperCase()}).join(""),R=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,Y=/[\d\W]/;function $(){const[r,n]=c.useState(null),i=c.useMemo(()=>y.find(s=>s.id===r)||null,[r]);return c.useEffect(()=>{if(!i)return;const s=o=>o.key==="Escape"&&n(null);return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[i]),a.jsx(C,{reducedMotion:"never",children:a.jsx(E,{children:a.jsxs(v.Wrapper,{children:[a.jsx("header",{className:"head",children:a.jsxs("div",{className:"title",children:[a.jsx("h1",{children:"Shared Avatar Morph"}),a.jsx("p",{className:"muted",children:"Click a person: the small circular avatar morphs into a wide profile header inside a modal. Text and controls animate into place. Clean, subtle, premium motion."})]})}),a.jsx(v.Grid,{children:y.map(s=>a.jsxs(t.button,{className:"card",layout:!0,onClick:()=>n(s.id),whileHover:{y:-2,boxShadow:"0 12px 36px hsl(0 0% 0% / 0.16)"},whileTap:{scale:.98},style:{"--hue":s.hue},children:[a.jsx(t.div,{className:"avatarSurface small",layoutId:`surface-${s.id}`,transition:{layout:{type:"spring",stiffness:600,damping:42}},children:a.jsx("div",{className:"avatar",children:T(s.name)})}),a.jsxs("div",{className:"meta",children:[a.jsx(t.h3,{layoutId:`name-${s.id}`,children:s.name}),a.jsx("p",{className:"role",children:s.title})]})]},s.id))}),a.jsx(f,{children:i&&a.jsx(v.ModalOverlay,{as:t.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>n(null),children:a.jsx(t.div,{className:"modal",initial:{y:20,opacity:0},animate:{y:0,opacity:1},exit:{y:12,opacity:0},transition:{type:"spring",stiffness:280,damping:26},onClick:s=>s.stopPropagation(),children:a.jsx(I,{user:i,onClose:()=>n(null)})})})})]})})})}function I({user:r,onClose:n}){const[i,s]=c.useState(!1),[o,l]=c.useState({name:r.name,email:r.email,password:"",confirm:""}),[p,m]=c.useState({pw:!1,confirm:!1}),[h,k]=c.useState({}),[b,g]=c.useState("idle"),u=(e,d)=>l(B=>({...B,[e]:d})),N=()=>{const e={};return(!o.name||o.name.trim().length<2)&&(e.name="Please enter your full name."),R.test(o.email)||(e.email="Enter a valid email address."),o.password.length&&(o.password.length<8||!Y.test(o.password))&&(e.password="Min 8 chars, include a number or symbol."),o.password!==o.confirm&&(e.confirm="Passwords do not match."),e},S=e=>{e.preventDefault();const d=N();k(d),!(Object.keys(d).length>0)&&(g("saving"),setTimeout(()=>g("success"),650),setTimeout(()=>g("idle"),1600))};return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"mHead",children:a.jsx(t.div,{className:"heroSurface",layoutId:`surface-${r.id}`,style:{"--hue":r.hue},transition:{layout:{type:"spring",stiffness:600,damping:42}},children:a.jsxs("div",{className:"heroContent",children:[a.jsx(t.h3,{layoutId:`name-${r.id}`,children:r.name}),a.jsx("p",{className:"role",children:r.title})]})})}),a.jsx("div",{className:"mBody",children:a.jsxs("div",{className:"columns",children:[a.jsxs("section",{className:"col colA",children:[a.jsx("h4",{children:"Quick Actions"}),a.jsxs("div",{className:"actions",children:[a.jsx(t.button,{className:`btn ${i?"ghost":"primary"}`,onClick:()=>s(e=>!e),whileTap:{scale:.98},"aria-pressed":i,children:i?"Following":"Follow"}),a.jsx(t.button,{className:"btn",whileTap:{scale:.98},children:"Message"}),a.jsx(t.button,{className:"btn ghost",whileTap:{scale:.98},children:"Share Profile"})]}),a.jsxs("div",{className:"about",children:[a.jsxs("p",{className:"muted",children:["This modal demonstrates ",a.jsx("b",{children:"shared layout"})," between grid and detail views. The small circle avatar becomes a wide, elegant header surface."]}),a.jsxs("ul",{className:"details",children:[a.jsx("li",{children:"Transforms & opacity only"}),a.jsx("li",{children:"Spring-tuned for crispness"}),a.jsx("li",{children:"Theme-aware via tokens"})]})]})]}),a.jsxs("section",{className:"col colB",children:[a.jsx("h4",{children:"Edit Account"}),a.jsxs("form",{className:"form",onSubmit:S,noValidate:!0,children:[a.jsx(w,{id:"name",label:"Full name",value:o.name,onChange:e=>u("name",e),error:h.name,placeholder:"Your full name"}),a.jsx(w,{id:"email",label:"Email",type:"email",value:o.email,onChange:e=>u("email",e),error:h.email,placeholder:"you@example.com"}),a.jsx(j,{id:"password",label:"New password",value:o.password,onChange:e=>u("password",e),error:h.password,show:p.pw,setShow:e=>m(d=>({...d,pw:e})),placeholder:"••••••••"}),a.jsx(j,{id:"confirm",label:"Confirm password",value:o.confirm,onChange:e=>u("confirm",e),error:h.confirm,show:p.confirm,setShow:e=>m(d=>({...d,confirm:e})),placeholder:"Repeat password"}),a.jsxs("div",{className:"formActions",children:[a.jsx(t.button,{className:"btn primary",type:"submit",whileTap:{scale:.98},disabled:b==="saving",children:b==="saving"?"Saving…":b==="success"?"Saved ✓":"Save changes"}),a.jsx(t.button,{className:"btn ghost",type:"button",onClick:n,whileTap:{scale:.98},children:"Close"})]})]})]})]})}),a.jsxs("div",{className:"mFoot",children:[a.jsxs("span",{className:"muted",children:["Press ",a.jsx("kbd",{children:"Esc"})," to close"]}),a.jsx("div",{className:"spacer"}),a.jsx("button",{className:"closeBtn",onClick:n,children:"Close"})]})]})}function w({id:r,label:n,value:i,onChange:s,error:o,type:l="text",placeholder:p}){return a.jsxs("div",{className:`formRow ${o?"hasError":""}`,children:[a.jsx("label",{htmlFor:r,children:n}),a.jsx(t.input,{id:r,type:l,value:i,onChange:m=>s(m.target.value),placeholder:p,whileFocus:{boxShadow:"var(--focus-ring)"},transition:{type:"tween",duration:.15}}),a.jsx(f,{children:o&&a.jsx(t.div,{className:"error",initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},children:o})})]})}function j({id:r,label:n,value:i,onChange:s,error:o,show:l,setShow:p,placeholder:m}){return a.jsxs("div",{className:`formRow ${o?"hasError":""}`,children:[a.jsx("label",{htmlFor:r,children:n}),a.jsxs("div",{className:"pwWrap",children:[a.jsx(t.input,{id:r,type:l?"text":"password",value:i,onChange:h=>s(h.target.value),placeholder:m,whileFocus:{boxShadow:"var(--focus-ring)"},transition:{type:"tween",duration:.15}}),a.jsx("button",{type:"button",className:"eye","aria-label":l?"Hide password":"Show password",onClick:()=>p(!l),title:l?"Hide":"Show",children:l?a.jsx(P,{}):a.jsx(A,{})})]}),a.jsx(f,{children:o&&a.jsx(t.div,{className:"error",initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},children:o})})]})}export{$ as default};
