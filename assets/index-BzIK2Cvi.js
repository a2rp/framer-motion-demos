import{d as y,r as i,j as e,A as v}from"./index-BybwJ5J0.js";import{u as O}from"./use-motion-value-BDGo4E3a.js";import{u as T}from"./use-spring-Dk0Zec21.js";import{u as S}from"./use-transform-Bv2NVkTi.js";import{M as I,m as l}from"./proxy-CWA0aJAx.js";const q=y.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 880px;
    margin: 0 auto;
    color: var(--text);
`,Z=y.header`
    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`,$=y.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);

    .form {
        display: grid;
        gap: var(--space-6);
    }
    .field {
        display: grid;
        gap: var(--space-3);
    }
    label {
        font-weight: 600;
        color: var(--text);
    }

    .inputWrap {
        position: relative;
        display: grid;
    }

    input {
        width: 100%;
        height: 42px;
        padding: 0 44px 0 12px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        outline: none;
        transition: box-shadow 0.15s ease, border-color 0.15s ease;
    }
    input::placeholder {
        color: var(--text-muted);
    }
    input:focus {
        border-color: hsl(210 90% 56% / 0.6);
        box-shadow: 0 0 0 3px hsl(210 90% 56% / 0.18);
    }
    input[aria-invalid="true"] {
        border-color: hsl(8 80% 55%);
        box-shadow: 0 0 0 3px hsl(8 80% 55% / 0.18);
    }

    /* Eye button — vertically centered without transforms */
    .eyeBtn {
        position: absolute;
        right: 6px;
        top: 0;
        bottom: 0;
        margin-block: auto;
        height: 32px;
        width: 32px;
        border-radius: 999px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        cursor: pointer;
        box-shadow: var(--shadow-sm);
        line-height: 0;
        transform: none;
    }
    .eyeBtn svg {
        display: block;
    }

    /* strength meter */
    .meter {
        margin-top: 10px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 999px;
        height: 10px;
        position: relative;
        overflow: hidden;
    }
    .meter .bar {
        height: 100%;
        width: 0%;
        background: var(--primary);
    }
    .meter .label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--text-muted);
        font-size: 12px;
        margin-top: 6px;
    }
    .meter .label .score {
        font-variant-numeric: tabular-nums;
        color: var(--text);
    }

    .criteria {
        display: grid;
        gap: 8px;
        margin-top: 6px;
        list-style: none;
        padding: 0;
    }
    .criteria li {
        display: grid;
        grid-template-columns: 20px 1fr;
        gap: 8px;
        align-items: center;
        color: var(--text);
    }
    .criteria li .dotWrap {
        position: relative;
        width: 16px;
        height: 16px;
    }
    .criteria li .dot {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: var(--border);
    }
    .criteria li .check {
        position: absolute;
        inset: 0;
        background: radial-gradient(
                closest-side,
                var(--primary) 60%,
                transparent 61%
            )
            center/100% 100% no-repeat;
        mask: linear-gradient(#000 0 0) padding-box,
            radial-gradient(6px at 50% 55%, transparent 98%, #000 100%);
    }
    .criteria li.ok .text {
        color: var(--text);
    }
    .criteria li.bad .text {
        color: var(--text-muted);
    }

    .error {
        color: hsl(8 80% 60%);
        font-size: 13px;
    }

    .actions {
        display: flex;
        gap: var(--space-4);
        justify-content: flex-end;
        align-items: center;
    }
    .btn {
        height: 40px;
        border-radius: var(--radius-md);
        padding: 0 16px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
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
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`,V=y.div`
    position: fixed;
    inset: 0;
    z-index: 50;
    background: color-mix(in oklab, var(--bg) 40%, #0000);
    backdrop-filter: blur(8px) saturate(1.1);
    -webkit-backdrop-filter: blur(8px) saturate(1.1);
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
`,f={Wrapper:q,Header:Z,Stage:$,ModalOverlay:V},G=/[A-Z]/,Y=/[a-z]/,J=/[0-9]/,Q=/[^A-Za-z0-9]/;function X(r=""){let t=0;const o=r.length,u=G.test(r),d=Y.test(r),m=J.test(r),c=Q.test(r);o>=16?t+=40:o>=12?t+=28:o>=10?t+=20:o>=8&&(t+=12);const w=[u,d,m,c].filter(Boolean).length;t+=w*12,/\s/.test(r)&&(t-=10),/(.)\1{2,}/.test(r)&&(t-=6),t=Math.max(0,Math.min(100,t));let p="Weak";return t>=80?p="Excellent":t>=60?p="Strong":t>=40&&(p="Fair"),{score:t,label:p,hasUpper:u,hasLower:d,hasNumber:m,hasSymbol:c,len:o}}function _(r){return e.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18","aria-hidden":!0,focusable:"false",...r,children:e.jsx("path",{fill:"currentColor",d:"M12 5c5.5 0 9.5 4.5 10.7 6-.9 1.2-4.9 6-10.7 6S2.5 12.2 1.3 11C2.5 9.5 6.5 5 12 5zm0 2c-4.2 0-7.6 3.2-8.9 4 1.2.9 4.7 4 8.9 4s7.6-3.1 8.9-4C19.6 10.2 16.2 7 12 7zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"})})}function ee(r){return e.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18","aria-hidden":!0,focusable:"false",...r,children:e.jsx("path",{fill:"currentColor",d:"M3.3 2l18.4 18.4-1.3 1.3L2 3.3 3.3 2zM12 7c-1 0-1.9.3-2.7.9l1.5 1.5c.4-.2.8-.4 1.2-.4a3 3 0 013 3c0 .4-.2.8-.4 1.2l1.5 1.5c.6-.8.9-1.7.9-2.7a5 5 0 00-5-5zM12 5c5.5 0 9.5 4.5 10.7 6-.4.5-1.6 1.9-3.3 3.3l-1.5-1.5c1.3-1.1 2.3-2.2 2.8-2.8C19.6 10.2 16.2 7 12 7c-.8 0-1.6.1-2.3.3L8.2 6.8A12 12 0 0112 5zM4.1 8.7C5.8 7.2 8.7 5 12 5c.5 0 1 .1 1.5.1l-1.7-1.7C10.9 3.2 10.5 3 10 3 4.5 3 .5 7.5-.7 9c.4.5 1.6 1.9 3.3 3.3.4.3.9.7 1.4 1L5.7 11C5 10.3 4.5 9.5 4.1 8.7z"})})}function oe(){const r=i.useId(),t=i.useId(),[o,u]=i.useState(""),[d,m]=i.useState(""),[c,w]=i.useState(!1),[p,x]=i.useState(!1),s=i.useMemo(()=>X(o),[o]),j=d.length?d===o:!1,k=s.len>=8&&s.hasUpper&&s.hasLower&&s.hasNumber&&s.hasSymbol&&j,N=O(0),C=T(N,{stiffness:260,damping:32,mass:.8}),F=S(C,[0,100],[4,140]),R=S(F,a=>`hsl(${a} 90% 56%)`),W=S(C,a=>`${Math.max(0,Math.min(100,a)).toFixed(0)}%`);i.useEffect(()=>{N.set(s.score)},[s.score,N]);const H=a=>{a.preventDefault(),k&&x(!0)},[E,U]=i.useState(0),D=()=>{w(a=>!a),U(a=>a+1)},M=i.useRef(null),z=i.useRef(null),b=i.useRef(null);return i.useEffect(()=>{if(!p)return;const{overflow:a}=document.body.style;document.body.style.overflow="hidden",b.current=document.activeElement;const K=requestAnimationFrame(()=>{var n;return(n=z.current)==null?void 0:n.focus()}),B=n=>{if(n.key==="Escape")n.preventDefault(),x(!1);else if(n.key==="Tab"){const P=M.current;if(!P)return;const g=P.querySelectorAll('a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])');if(!g.length)return;const A=g[0],L=g[g.length-1];n.shiftKey&&document.activeElement===A?(n.preventDefault(),L.focus()):!n.shiftKey&&document.activeElement===L&&(n.preventDefault(),A.focus())}};return window.addEventListener("keydown",B),()=>{window.removeEventListener("keydown",B),document.body.style.overflow=a,cancelAnimationFrame(K),b.current&&b.current.focus&&b.current.focus()}},[p]),e.jsx(I,{reducedMotion:"never",children:e.jsxs(f.Wrapper,{children:[e.jsx(f.Header,{children:e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Password — Eye Toggle + Bounce"}),e.jsx("p",{className:"muted",children:"Animated reveal/hide with a bouncy eye icon, live strength meter, and realtime validations."})]})}),e.jsx(f.Stage,{children:e.jsxs("form",{className:"form",onSubmit:H,noValidate:!0,children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:r,children:"New Password"}),e.jsxs("div",{className:"inputWrap",children:[e.jsx("input",{id:r,type:c?"text":"password",autoComplete:"new-password",placeholder:"Create a strong password",value:o,onChange:a=>u(a.target.value),"aria-describedby":"pw-help",required:!0}),e.jsx("button",{type:"button",className:"eyeBtn",onClick:D,title:c?"Hide password":"Show password","aria-label":c?"Hide password":"Show password",children:e.jsx(l.span,{className:"eyeBounce",initial:!1,animate:{y:[0,-3,0],scale:[1,.96,1]},transition:{duration:.35,times:[0,.5,1],ease:[.22,1,.36,1]},children:e.jsx(v,{mode:"wait",initial:!1,children:c?e.jsx(l.span,{initial:{rotate:-15,opacity:0,scale:.9},animate:{rotate:0,opacity:1,scale:1},exit:{rotate:15,opacity:0,scale:.9},transition:{duration:.22},"aria-hidden":"true",children:e.jsx(_,{})},"open-"+E):e.jsx(l.span,{initial:{rotate:-15,opacity:0,scale:.9},animate:{rotate:0,opacity:1,scale:1},exit:{rotate:15,opacity:0,scale:.9},transition:{duration:.22},"aria-hidden":"true",children:e.jsx(ee,{})},"closed-"+E)})})})]}),e.jsxs("div",{className:"meter","aria-live":"polite",children:[e.jsx(l.div,{className:"bar",style:{width:W,background:R}}),e.jsxs("div",{className:"label",children:[e.jsx("span",{children:s.label}),e.jsxs("span",{className:"score",children:[s.score,"%"]})]})]}),e.jsxs("ul",{className:"criteria",id:"pw-help",children:[e.jsx(h,{ok:s.len>=8,text:"At least 8 characters"}),e.jsx(h,{ok:s.hasUpper,text:"Uppercase (A–Z)"}),e.jsx(h,{ok:s.hasLower,text:"Lowercase (a–z)"}),e.jsx(h,{ok:s.hasNumber,text:"Number (0–9)"}),e.jsx(h,{ok:s.hasSymbol,text:"Symbol (!@#$…)"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:t,children:"Confirm Password"}),e.jsx("div",{className:"inputWrap",children:e.jsx("input",{id:t,type:c?"text":"password",autoComplete:"new-password",placeholder:"Re-type your password",value:d,onChange:a=>m(a.target.value),"aria-invalid":d.length>0&&!j})}),e.jsx(v,{initial:!1,children:d.length>0&&!j&&e.jsx(l.p,{className:"error",initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},children:"Passwords don’t match."})})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btn ghost",type:"button",onClick:()=>{u(""),m("")},children:"Reset"}),e.jsx(l.button,{className:"btn primary",type:"submit",disabled:!k,whileTap:{scale:.98},animate:k?{boxShadow:"0 8px 24px hsl(210 90% 56% / 0.35)"}:{boxShadow:"var(--shadow-sm)"},transition:{type:"spring",stiffness:300,damping:24},children:"Save Password"})]})]})}),e.jsx(v,{children:p&&e.jsx(f.ModalOverlay,{as:l.div,role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",onClick:a=>{a.target===a.currentTarget&&x(!1)},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(l.div,{ref:M,className:"modal",initial:{y:12,opacity:0,scale:.98},animate:{y:0,opacity:1,scale:1},exit:{y:8,opacity:0,scale:.98},transition:{type:"spring",stiffness:300,damping:26},onClick:a=>a.stopPropagation(),children:[e.jsxs("div",{className:"mHead",children:[e.jsx("h3",{id:"modal-title",children:"Password Updated"}),e.jsx("p",{className:"muted",children:"Everything meets the policy. You’re good to go."})]}),e.jsxs("div",{className:"mBody",children:[e.jsx("p",{className:"muted",children:"Summary"}),e.jsxs("ul",{className:"details",children:[e.jsxs("li",{children:["Strength: ",e.jsx("b",{children:s.label})," (",s.score,"%)"]}),e.jsxs("li",{children:["Length: ",e.jsx("b",{children:s.len})," characters"]})]})]}),e.jsx("div",{className:"mFoot",children:e.jsx("button",{className:"closeBtn",ref:z,onClick:()=>x(!1),children:"Done"})})]})})})]})})}function h({ok:r,text:t}){return e.jsxs("li",{className:r?"ok":"bad",children:[e.jsxs("span",{className:"dotWrap","aria-hidden":"true",children:[e.jsx(l.span,{className:"dot",layout:!0,initial:!1,animate:r?{scale:1,background:"var(--primary)"}:{scale:1,background:"var(--border)"},transition:{type:"spring",stiffness:500,damping:30}}),e.jsx(v,{initial:!1,children:r&&e.jsx(l.span,{className:"check",initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},exit:{scale:0,opacity:0},transition:{type:"spring",stiffness:500,damping:30}},"check")})]}),e.jsx("span",{className:"text",children:t})]})}export{oe as default};
