import{d as h,r as s,j as e,A as D,z as E,B as $}from"./index-BybwJ5J0.js";import{m as V,n as Y,b as q}from"./index-BbOsRPB9.js";import{M as L,m as f}from"./proxy-CWA0aJAx.js";const Z=h.div`
    position: fixed;
    inset: 0;
    z-index: 10000; /* above app chrome, nav, and any local stacking contexts */

    background: color-mix(in oklab, var(--bg) 30%, #0000);
    backdrop-filter: blur(8px) saturate(1.05);

    display: flex;
    align-items: stretch;
    justify-content: flex-end;

    .sheetArea {
        width: var(--sheet-w, 520px);
        max-width: 96vw;
        height: 100%;
        perspective: 1200px;
        transform-style: preserve-3d;
        display: grid;
    }

    .drawer {
        height: 100%;
        border-left: 1px solid var(--border);
        background: var(--card);
        box-shadow: -24px 0 60px hsl(0 0% 0% / 0.25);
        will-change: transform, opacity;
        display: grid;
        grid-template-rows: auto 1fr auto;
        overflow: hidden;
    }

    .dHead,
    .dFoot {
        padding: 14px 16px;
        border-bottom: 1px solid var(--border);
        background: var(--card);
    }
    .dFoot {
        border-bottom: none;
        border-top: 1px solid var(--border);
    }
    .dHead h3 {
        font-size: 18px;
    }
    .muted {
        color: var(--text-muted);
    }

    .dBody {
        display: grid;
        gap: var(--space-4);
        padding: 16px;
        overflow: auto;

        /* vertical centering while there's room */
        align-content: center;
        justify-items: stretch;
        min-height: 0;
    }
    @media (max-height: 700px) {
        .dBody {
            align-content: start;
        }
    }

    .field {
        display: grid;
        gap: 8px;
    }
    .field > span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .field input {
        height: 38px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        padding: 0 12px;
        outline: none;
        box-shadow: inset 0 1px 0 hsl(0 0% 100% / 0.03);
    }
    .field input:focus {
        box-shadow: var(--focus-ring);
        border-color: color-mix(in oklab, var(--primary) 60%, var(--border));
    }
    .field.invalid input {
        border-color: hsl(5 80% 50%);
    }
    .field .err {
        color: hsl(5 80% 60%);
        font-size: 12px;
    }

    .passWrap {
        position: relative;
    }
    .passWrap input {
        width: 100%;
        padding-right: 40px;
    }
    .passWrap .eye {
        position: absolute;
        right: 4px;
        top: 3px;
        height: 32px;
        width: 32px;
        border-radius: 8px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        display: grid;
        place-items: center;
        cursor: pointer;
    }

    .meter {
        position: relative;
        height: 8px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 999rem;
        overflow: hidden;
    }
    .meter span {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 0%;
        background: linear-gradient(90deg, hsl(210 90% 56%), hsl(210 90% 60%));
        transition: width 220ms ease;
    }
    .meter[data-score="0"] span {
        width: 0%;
    }
    .meter[data-score="1"] span {
        width: 25%;
    }
    .meter[data-score="2"] span {
        width: 50%;
    }
    .meter[data-score="3"] span {
        width: 75%;
    }
    .meter[data-score="4"] span {
        width: 100%;
    }

    .hint {
        color: var(--text-muted);
        font-size: 12px;
    }

    .actions {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 6px;
    }
    .actions .spacer {
        flex: 1;
    }
    .actions .btn {
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .actions .btn.ghost {
        background: var(--surface);
    }
    .actions .btn.ghost.danger {
        color: hsl(5 80% 55%);
        border-color: hsl(5 60% 45% / 0.35);
    }
    .actions .btn.primary {
        background: var(--primary);
        border-color: transparent;
        color: var(--primary-contrast);
    }
    .actions .btn[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
    }

    @media (width < 560px) {
        .sheetArea {
            width: min(var(--sheet-w, 520px), 96vw);
        }
    }
`,_=h.div`
    position: fixed;
    inset: 0;
    z-index: 11000; /* above the drawer overlay */
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
`,G=h.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1100px;
    margin: 0 auto;
    color: var(--text);
`,K=h.header`
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
    .ctrl {
        display: grid;
        gap: 6px;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .ctrl input[type="range"] {
        width: 160px;
        accent-color: var(--primary);
    }
    .ctrl .row {
        display: grid;
        grid-template-columns: 90px 90px;
        gap: 8px;
    }
    .ctrl input[type="number"] {
        height: 34px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 8px;
        outline: none;
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
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
`,U=h.section`
    display: grid;
    gap: var(--space-4);
    .lead {
        color: var(--text);
    }
    .bullet {
        margin-left: 18px;
        color: var(--text-muted);
        display: grid;
        gap: 4px;
    }
`,x={Wrapper:G,Header:K,Stage:U,Overlay:Z,ModalOverlay:_};function A({children:t,id:a="drawer-portal"}){const i=s.useRef(null);if(!i.current){const l=document.createElement("div");l.setAttribute("id",a),i.current=l}return s.useEffect(()=>{const l=i.current;return document.body.appendChild(l),()=>{try{document.body.removeChild(l)}catch{}}},[]),$.createPortal(t,i.current)}const X=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;function J(t){var v,c;const a={};(v=t.name)!=null&&v.trim()?t.name.trim().length<2&&(a.name="Name must be at least 2 characters."):a.name="Name is required.",(c=t.email)!=null&&c.trim()?X.test(t.email.trim())||(a.email="Enter a valid email."):a.email="Email is required.";const i=t.password||"",u=[[/.{8,}/,"≥ 8 chars"],[/[A-Z]/,"1 uppercase"],[/[a-z]/,"1 lowercase"],[/[0-9]/,"1 number"]].filter(([m])=>!m.test(i));return i&&u.length&&(a.password="Password must include: "+u.map(([,m])=>m).join(", ")+"."),a}function B(t){let a=0;return/.{8,}/.test(t)&&a++,/[A-Z]/.test(t)&&a++,/[a-z]/.test(t)&&a++,/[0-9]/.test(t)&&a++,a}function re(){const[t,a]=s.useState(!1),[i,l]=s.useState(520),[u,v]=s.useState(10),[c,m]=s.useState(340),[y,H]=s.useState(30),[n,F]=s.useState({name:"",email:"",password:""}),[p,w]=s.useState({}),[g,P]=s.useState(!1),d=s.useMemo(()=>J(n),[n]),O=Object.keys(d).length===0&&n.name&&n.email,[j,b]=s.useState(!1),z=s.useRef(null);s.useEffect(()=>{if(t){const r=requestAnimationFrame(()=>{var o;return(o=z.current)==null?void 0:o.focus()});return document.body.style.overflow="hidden",()=>{cancelAnimationFrame(r),document.body.style.overflow=""}}},[t]),s.useEffect(()=>{const r=o=>{o.key==="Escape"&&(j?b(!1):t&&a(!1))};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[t,j]);const R={initial:{opacity:0},animate:{opacity:1,transition:{duration:.18}},exit:{opacity:0,transition:{duration:.14}}},W={closed:{x:"100%",rotateY:-u,opacity:1,transition:{type:"spring",stiffness:c,damping:y}},open:{x:0,rotateY:0,opacity:1,transition:{type:"spring",stiffness:c,damping:y}}},N=r=>{const{name:o,value:C}=r.target;F(S=>({...S,[o]:C}))},k=r=>w(o=>({...o,[r.target.name]:!0})),M=()=>{F({name:"",email:"",password:""}),w({}),P(!1)},T=r=>{if(r.preventDefault(),w({name:!0,email:!0,password:!0}),!O){E.error("Please fix the highlighted fields.");return}E.success("Profile saved"),a(!1)},I=(r,o)=>{const C=o.offset.x,S=o.velocity.x||0;(C>120||S>800)&&a(!1)};return e.jsx(L,{reducedMotion:"never",children:e.jsxs(x.Wrapper,{children:[e.jsxs(x.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Drawer Fold (Right Overlay + Blur)"}),e.jsx("p",{className:"muted",children:"Portaled overlay sits above everything. Drag to dismiss, Esc to close. Fully validated form, password eye toggle, and a blurred confirm modal."})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Sheet controls",children:[e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Width"}),e.jsx("input",{type:"range",min:"360",max:"720",step:"10",value:i,onChange:r=>l(parseInt(r.target.value||"520",10))}),e.jsxs("em",{children:[i,"px"]})]}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Spring"}),e.jsxs("div",{className:"row",children:[e.jsx("input",{type:"number",min:"120",max:"600",step:"10",value:c,onChange:r=>m(parseInt(r.target.value||"340",10)),"aria-label":"Stiffness"}),e.jsx("input",{type:"number",min:"10",max:"60",step:"2",value:y,onChange:r=>H(parseInt(r.target.value||"30",10)),"aria-label":"Damping"})]}),e.jsx("em",{children:"stiff / damp"})]}),e.jsx("button",{className:"btn primary",type:"button",onClick:()=>a(!0),children:"Open Drawer"})]})]}),e.jsxs(x.Stage,{children:[e.jsxs("p",{className:"lead",children:["The overlay is now rendered via a ",e.jsx("code",{children:"Portal"})," to ",e.jsx("code",{children:"document.body"}),", so it can’t be trapped by any parent stacking contexts (like ",e.jsx("code",{children:"transform"})," or ",e.jsx("code",{children:"filter"}),")."]}),e.jsxs("ul",{className:"bullet",children:[e.jsx("li",{children:"Overlay blurs + dims the page, click outside to close."}),e.jsxs("li",{children:["Sheet emerges with ",e.jsx("code",{children:"translateX"})," + ",e.jsx("code",{children:"rotateY"}),"."]}),e.jsx("li",{children:"Drag-to-dismiss: fling to the right or drag ~120px."})]})]}),e.jsx(D,{children:t&&e.jsx(A,{id:"drawer-overlay-root",children:e.jsx(x.Overlay,{as:f.div,...R,onClick:()=>a(!1),role:"dialog","aria-modal":"true","aria-labelledby":"sheet-title",children:e.jsx("div",{className:"sheetArea",onClick:r=>r.stopPropagation(),style:{"--sheet-w":`${i}px`},children:e.jsxs(f.aside,{className:"drawer",initial:"closed",animate:"open",exit:"closed",variants:W,style:{transformOrigin:"right center"},drag:"x",dragConstraints:{left:0,right:0},dragElastic:.04,onDragEnd:I,children:[e.jsxs("header",{className:"dHead",children:[e.jsx("h3",{id:"sheet-title",children:"Profile Settings"}),e.jsx("p",{className:"muted",children:"Update your info. Password is optional, but validated if entered."})]}),e.jsxs("form",{className:"dBody",onSubmit:T,noValidate:!0,children:[e.jsxs("label",{className:`field ${p.name&&d.name?"invalid":""}`,children:[e.jsx("span",{children:"Name"}),e.jsx("input",{ref:z,name:"name",type:"text",placeholder:"Your name",value:n.name,onChange:N,onBlur:k,autoComplete:"name"}),p.name&&d.name&&e.jsx("i",{className:"err",children:d.name})]}),e.jsxs("label",{className:`field ${p.email&&d.email?"invalid":""}`,children:[e.jsx("span",{children:"Email"}),e.jsx("input",{name:"email",type:"email",placeholder:"you@example.com",value:n.email,onChange:N,onBlur:k,autoComplete:"email"}),p.email&&d.email&&e.jsx("i",{className:"err",children:d.email})]}),e.jsxs("label",{className:`field ${p.password&&d.password?"invalid":""}`,children:[e.jsx("span",{children:"Password"}),e.jsxs("div",{className:"passWrap",children:[e.jsx("input",{name:"password",type:g?"text":"password",placeholder:"New password (optional)",value:n.password,onChange:N,onBlur:k,autoComplete:"new-password"}),e.jsx("button",{type:"button",className:"eye","aria-label":g?"Hide password":"Show password",title:g?"Hide password":"Show password",onClick:()=>P(r=>!r),children:g?e.jsx(V,{}):e.jsx(Y,{})})]}),e.jsx("div",{className:"meter","data-score":B(n.password),children:e.jsx("span",{})}),n.password&&e.jsxs("p",{className:"hint",children:["Strength:"," ",e.jsx("b",{children:["Very weak","Weak","Fair","Good","Strong"][B(n.password)]})]}),p.password&&d.password&&e.jsx("i",{className:"err",children:d.password})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{type:"button",className:"btn ghost danger",onClick:()=>b(!0),title:"Clear all fields",children:[e.jsx(q,{})," Reset Form"]}),e.jsx("div",{className:"spacer"}),e.jsx("button",{type:"button",className:"btn",onClick:()=>a(!1),children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn primary",disabled:!O,children:"Save"})]})]}),e.jsx("footer",{className:"dFoot",children:e.jsx("small",{className:"muted",children:"Tip: keep depth ≤ 12° and damping ~30 for premium, non-toy motion."})})]})})})})}),e.jsx(D,{children:j&&e.jsx(A,{id:"drawer-modal-root",children:e.jsx(x.ModalOverlay,{as:f.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.18}},role:"dialog","aria-modal":"true","aria-labelledby":"reset-title",children:e.jsxs(f.div,{className:"modal",initial:{y:-14,opacity:.6,scale:.98},animate:{y:0,opacity:1,scale:1,transition:{type:"spring",stiffness:320,damping:26}},exit:{y:-12,opacity:0,transition:{duration:.16}},children:[e.jsx("div",{className:"mHead",children:e.jsx("h3",{id:"reset-title",children:"Reset form?"})}),e.jsxs("div",{className:"mBody",children:[e.jsx("p",{className:"muted",children:"This clears all fields and cannot be undone."}),e.jsxs("ul",{className:"details",children:[e.jsx("li",{children:"Name, email, and password will be wiped."}),e.jsx("li",{children:"This action is immediate."})]})]}),e.jsxs("div",{className:"mFoot",children:[e.jsx("button",{className:"closeBtn",onClick:()=>b(!1),children:"Cancel"}),e.jsx("button",{className:"closeBtn",onClick:()=>{M(),b(!1),E.info("Form cleared.")},style:{background:"hsl(5 80% 50%)"},title:"Confirm reset",children:"Confirm"})]})]})})})})]})})}export{re as default};
