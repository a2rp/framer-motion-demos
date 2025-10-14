import{d as S,r as o,j as e,A as N}from"./index-ChsZnzdL.js";import{M as W,m}from"./proxy-DJIhAgXk.js";const Z=`
  scrollbar-gutter: stable;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar { width: 12px; height: 12px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: transparent; border-radius: 8px; border: 3px solid transparent; background-clip: content-box;
  }
  @media (hover: hover) {
    &:hover { scrollbar-color: #666 transparent; }
    &:hover::-webkit-scrollbar-thumb { background: linear-gradient(180deg,#3a3a3a,#666); }
    &::-webkit-scrollbar-thumb:hover { background: #808080; }
  }
  @media (hover: none) {
    scrollbar-width: thin; scrollbar-color: #555 transparent;
    &::-webkit-scrollbar-thumb { background: #555; }
  }
`,V=S.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    color: var(--text);
`,U=S.header`
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
        align-items: center;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .ctrl input[type="text"] {
        width: 260px;
        height: 34px;
        padding: 0 10px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--surface);
        color: var(--text);
        outline: none;
    }
    .ctrl select {
        min-width: 160px;
        height: 34px;
        padding: 0 8px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--surface);
        color: var(--text);
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
        gap: 8px;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn.danger {
        background: hsl(0 80% 45% / 0.1);
        color: hsl(0 80% 60%);
        border-color: hsl(0 80% 45% / 0.35);
    }
`,Y=S.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    .tableWrap {
        max-height: min(68vh, 820px);
        overflow: auto;
        ${Z};
    }

    table.table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        font-size: 14px;
    }

    thead th {
        text-align: left;
        position: sticky;
        top: 0;
        z-index: 3;
        background: var(--surface);
        color: var(--text);
        border-bottom: 1px solid var(--border);
        padding: 10px 12px;
        font-weight: 600;
    }
    thead th.actions {
        text-align: right;
    }

    tbody tr {
        border-bottom: 1px solid var(--border);
        transition: background-color 0.25s ease;
    }
    tbody tr:hover {
        background: color-mix(in oklab, var(--surface) 70%, var(--primary) 5%);
    }

    td {
        padding: 10px 12px;
        vertical-align: middle;
        color: var(--text);
        border-bottom: 1px solid var(--border);
    }
    td.mono {
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
        font-size: 13px;
    }

    td .cell-main {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .avatar {
        width: 28px;
        height: 28px;
        border-radius: 999px;
        display: grid;
        place-items: center;
        font-weight: 700;
        font-size: 13px;
        color: var(--primary-contrast);
        background: linear-gradient(135deg, hsl(210 90% 56%), hsl(210 90% 62%));
        box-shadow: var(--shadow-sm);
    }
    .text {
        display: grid;
    }
    .text .name {
        font-weight: 600;
    }
    .text .sub {
        color: var(--text-muted);
        font-size: 12px;
    }

    .badge {
        display: inline-flex;
        align-items: center;
        height: 26px;
        padding: 0 10px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 600;
        border: 1px solid var(--border);
        background: var(--surface);
    }
    .badge.active {
        color: hsl(145 60% 40%);
        border-color: hsl(145 50% 40% / 0.35);
        background: hsl(145 60% 40% / 0.08);
    }
    .badge.invited {
        color: hsl(210 80% 50%);
        border-color: hsl(210 80% 50% / 0.35);
        background: hsl(210 80% 50% / 0.08);
    }
    .badge.suspended {
        color: hsl(0 70% 55%);
        border-color: hsl(0 70% 55% / 0.35);
        background: hsl(0 70% 55% / 0.08);
    }

    td.actions {
        text-align: right;
    }
    td.actions .btn {
        height: 30px;
        padding: 0 10px;
    }
    td.actions .btn span {
        display: inline-block;
        margin-left: 6px;
    }

    /* Row toast pinned inside the stage */
    .rowToast {
        position: absolute;
        right: 12px; /* top set inline */
        z-index: 5;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-md);
        display: inline-flex;
        align-items: center;
        gap: 10px;
        height: 36px;
        padding: 0 12px;
        pointer-events: none;
    }
    .rowToast .ok {
        width: 22px;
        height: 22px;
        display: inline-grid;
        place-items: center;
        color: hsl(145 60% 45%);
    }
    .rowToast .msg {
        font-weight: 600;
        font-size: 13px;
    }

    @media (width < 720px) {
        .tableWrap {
            max-height: min(70vh, 80vh);
        }
        thead {
            display: none;
        }
        table.table,
        tbody,
        tr,
        td {
            display: block;
            width: 100%;
        }
        tbody tr {
            border-bottom: none;
            border-top: 1px solid var(--border);
        }
        td {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 6px;
            align-items: baseline;
            border-bottom: none;
        }
        td::before {
            content: attr(data-title);
            color: var(--text-muted);
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.06em;
        }
        td.actions {
            grid-template-columns: 1fr;
        }
    }
`,K=S.div`
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

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
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
    .btn.ghost {
        background: var(--surface);
    }
    .btn.danger {
        background: hsl(0 80% 45%);
        color: white;
        border-color: hsl(0 80% 45%);
    }

    /* Form */
    .form .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-4);
    }
    @media (width < 560px) {
        .form .grid {
            grid-template-columns: 1fr;
        }
    }

    .field {
        display: grid;
        gap: 6px;
    }
    .field span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .field input,
    .field select {
        height: 36px;
        padding: 0 10px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--surface);
        color: var(--text);
        outline: none;
    }
    .field.invalid input,
    .field.invalid select {
        border-color: hsl(0 80% 50%);
        box-shadow: 0 0 0 3px hsl(0 80% 50% / 0.15);
    }
    .err {
        color: hsl(0 80% 55%);
        font-size: 12px;
    }

    .field.pw .pwWrap {
        position: relative;
        display: grid;
    }
    .field.pw .eye {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        width: 28px;
        height: 28px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        border-radius: 6px;
        background: var(--card);
        color: var(--text);
        cursor: pointer;
    }
`,b={Wrapper:V,Header:U,Stage:Y,ModalOverlay:K},g=(()=>{let t=0;return()=>`row-${++t}`})(),C=["Developer","Designer","Manager","Analyst","Support"],T=["Active","Invited","Suspended"],Q=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function _(t){const l={};if((!t.name||t.name.trim().length<2)&&(l.name="Please enter at least 2 characters."),Q.test(t.email||"")||(l.email="Please enter a valid email address."),C.includes(t.role)||(l.role="Please select a role."),!t.password)l.password="Password is required.";else{const s=t.password;/.{8,}/.test(s)&&/[A-Z]/.test(s)&&/[a-z]/.test(s)&&/[0-9]/.test(s)&&/[^A-Za-z0-9]/.test(s)||(l.password="Use 8+ chars with upper, lower, number, and a symbol.")}return l}function G(t){try{const l=new Intl.DateTimeFormat("en-IN",{dateStyle:"medium",timeStyle:"short",hour12:!1,timeZone:"Asia/Kolkata"}).formatToParts(t),s=v=>{var x;return((x=l.find(A=>A.type===v))==null?void 0:x.value)||""};return`${s("day")} ${s("month")} ${s("year")} ${s("hour")}:${s("minute")}`}catch{return t.toLocaleString()}}const J=t=>e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":!0,focusable:"false",...t,children:e.jsx("path",{fill:"currentColor",d:"M9.55 16.15l-3.7-3.7 1.4-1.4 2.3 2.29 7.1-7.1 1.41 1.41-8.5 8.5z"})}),X=t=>e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":!0,focusable:"false",...t,children:e.jsx("path",{fill:"currentColor",d:"M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})}),ee=t=>e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":!0,focusable:"false",...t,children:e.jsx("path",{fill:"currentColor",d:"M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12a5 5 0 110-10 5 5 0 010 10z"})}),ae=t=>e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":!0,focusable:"false",...t,children:e.jsx("path",{fill:"currentColor",d:"M2 4.27L3.28 3 21 20.72 19.73 22l-3.1-3.1A10.9 10.9 0 0112 19c-7 0-10-7-10-7a19.1 19.1 0 015.27-6.16L2 4.27zM9.9 7.15A5 5 0 0117 12c0 .83-.2 1.6-.54 2.28l-1.5-1.5c.04-.25.04-.51.04-.78a3 3 0 00-3-3c-.27 0-.53 0-.78.04L9.9 7.15zM12 7a5 5 0 00-1.76.32L8.68 5.76A10.9 10.9 0 0112 5c7 0 10 7 10 7a19.2 19.2 0 01-3.07 4.25l-1.41-1.41A17.2 17.2 0 0022 12s-3-7-10-7z"})});function te(){const t=new Date;return[{id:g(),name:"Aarav Sharma",email:"aarav@acme.dev",role:"Developer",status:"Active",createdAt:t},{id:g(),name:"Isha Verma",email:"isha@acme.dev",role:"Designer",status:"Invited",createdAt:t},{id:g(),name:"Rohan Mehta",email:"rohan@acme.dev",role:"Manager",status:"Active",createdAt:t},{id:g(),name:"Neha Singh",email:"neha@acme.dev",role:"Analyst",status:"Suspended",createdAt:t}]}function oe(){const[t,l]=o.useState(()=>te()),[s,v]=o.useState(""),[x,A]=o.useState("createdAt-desc"),[q,f]=o.useState(!1),[R,E]=o.useState(!1),[d,u]=o.useState({name:"",email:"",role:C[0],status:T[0],password:""}),[i,I]=o.useState({}),[h,w]=o.useState({open:!1,row:null}),$=o.useRef(null),L=o.useRef(null),D=o.useRef(new Map),[j,B]=o.useState({show:!1,top:0,text:"",key:0}),H=o.useMemo(()=>{const a=s.trim().toLowerCase();let r=t.filter(p=>!a||p.name.toLowerCase().includes(a)||p.email.toLowerCase().includes(a)||p.role.toLowerCase().includes(a)||p.status.toLowerCase().includes(a));const[n,c]=x.split("-");return r.sort((p,z)=>{const y=p[n],k=z[n];return y<k?c==="asc"?-1:1:y>k?c==="asc"?1:-1:0}),r},[t,s,x]),O=(a,r)=>{const n=D.current.get(a),c=L.current,p=$.current;if(!n||!c||!p)return;const z=n.getBoundingClientRect(),y=c.getBoundingClientRect(),k=z.top-y.top+c.scrollTop;n.scrollIntoView({block:"center",behavior:"smooth"}),B(M=>({show:!0,top:Math.max(8,k-8),text:r,key:M.key+1})),window.setTimeout(()=>{B(M=>({...M,show:!1}))},1500)},P=a=>{l(r=>r.filter(n=>n.id!==a))},F=a=>{a.preventDefault();const r=_(d);if(I(r),Object.keys(r).length)return;const n=g(),c={id:n,name:d.name.trim(),email:d.email.trim(),role:d.role,status:d.status,createdAt:new Date};l(p=>[c,...p]),f(!1),u({name:"",email:"",role:C[0],status:T[0],password:""}),E(!1),I({}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{O(n,`Added ${c.name} as ${c.role}`)})})};return e.jsx(W,{reducedMotion:"never",children:e.jsxs(b.Wrapper,{children:[e.jsxs(b.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Row Insert Toast"}),e.jsx("p",{className:"muted",children:"Insert a row via modal; the table reflows with a highlight, and a contextual toast appears next to the newly added row."})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Table controls",children:[e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Search"}),e.jsx("input",{type:"text",placeholder:"Name, email, role, status…",value:s,onChange:a=>v(a.target.value)})]}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Sort"}),e.jsxs("select",{value:x,onChange:a=>A(a.target.value),children:[e.jsx("option",{value:"createdAt-desc",children:"Newest"}),e.jsx("option",{value:"createdAt-asc",children:"Oldest"}),e.jsx("option",{value:"name-asc",children:"Name A–Z"}),e.jsx("option",{value:"name-desc",children:"Name Z–A"}),e.jsx("option",{value:"role-asc",children:"Role A–Z"}),e.jsx("option",{value:"role-desc",children:"Role Z–A"})]})]}),e.jsx("button",{className:"btn primary",onClick:()=>f(!0),children:"+ Add Row"})]})]}),e.jsxs(b.Stage,{ref:$,children:[e.jsx("div",{className:"tableWrap",ref:L,children:e.jsxs("table",{className:"table",role:"grid",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Name"}),e.jsx("th",{scope:"col",children:"Email"}),e.jsx("th",{scope:"col",children:"Role"}),e.jsx("th",{scope:"col",children:"Status"}),e.jsx("th",{scope:"col",children:"Created"}),e.jsx("th",{scope:"col",className:"actions",children:"Actions"})]})}),e.jsx(m.tbody,{layout:!0,children:e.jsx(N,{initial:!1,children:H.map(a=>e.jsxs(m.tr,{layout:!0,ref:r=>D.current.set(a.id,r),initial:{opacity:0,y:-12,backgroundColor:"hsl(210 90% 56% / 0.14)"},animate:{opacity:1,y:0,backgroundColor:"transparent"},exit:{opacity:0,y:-8,transition:{duration:.18}},transition:{layout:{type:"spring",stiffness:420,damping:38,mass:.8},duration:.6},children:[e.jsx("td",{"data-title":"Name",children:e.jsxs("div",{className:"cell-main",children:[e.jsx("div",{className:"avatar","aria-hidden":"true",children:a.name.charAt(0).toUpperCase()}),e.jsxs("div",{className:"text",children:[e.jsx("b",{className:"name",children:a.name}),e.jsx("span",{className:"sub",children:a.email})]})]})}),e.jsx("td",{"data-title":"Email",className:"mono",children:a.email}),e.jsx("td",{"data-title":"Role",children:a.role}),e.jsx("td",{"data-title":"Status",children:e.jsx("span",{className:`badge ${a.status.toLowerCase()}`,children:a.status})}),e.jsx("td",{"data-title":"Created",title:a.createdAt.toISOString(),children:G(a.createdAt)}),e.jsx("td",{className:"actions",children:e.jsxs("button",{className:"btn ghost danger",title:"Delete",onClick:()=>w({open:!0,row:a}),children:[e.jsx(X,{}),e.jsx("span",{children:"Delete"})]})})]},a.id))})})]})}),e.jsx(N,{children:j.show&&e.jsxs(m.div,{className:"rowToast",style:{top:j.top},initial:{x:24,opacity:0},animate:{x:0,opacity:1},exit:{x:16,opacity:0},transition:{type:"spring",stiffness:320,damping:28},role:"status","aria-live":"polite",children:[e.jsx("span",{className:"ok",children:e.jsx(J,{})}),e.jsx("span",{className:"msg",children:j.text})]},j.key)})]}),e.jsx(N,{children:q&&e.jsx(b.ModalOverlay,{as:m.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:a=>{a.target===a.currentTarget&&f(!1)},children:e.jsxs(m.div,{className:"modal",initial:{scale:.96,y:6,opacity:0},animate:{scale:1,y:0,opacity:1,transition:{type:"spring",stiffness:300,damping:28}},exit:{scale:.98,y:8,opacity:0,transition:{duration:.18}},role:"dialog","aria-modal":"true","aria-labelledby":"m-title",children:[e.jsx("div",{className:"mHead",children:e.jsx("h3",{id:"m-title",children:"Create New Row"})}),e.jsx("form",{className:"mBody form",onSubmit:F,noValidate:!0,children:e.jsxs("div",{className:"grid",children:[e.jsxs("label",{className:`field ${i.name?"invalid":""}`,children:[e.jsx("span",{children:"Name"}),e.jsx("input",{type:"text",value:d.name,onChange:a=>u(r=>({...r,name:a.target.value})),placeholder:"Enter full name",required:!0}),i.name&&e.jsx("em",{className:"err",children:i.name})]}),e.jsxs("label",{className:`field ${i.email?"invalid":""}`,children:[e.jsx("span",{children:"Email"}),e.jsx("input",{type:"email",value:d.email,onChange:a=>u(r=>({...r,email:a.target.value})),placeholder:"name@example.com",required:!0}),i.email&&e.jsx("em",{className:"err",children:i.email})]}),e.jsxs("label",{className:`field ${i.role?"invalid":""}`,children:[e.jsx("span",{children:"Role"}),e.jsx("select",{value:d.role,onChange:a=>u(r=>({...r,role:a.target.value})),required:!0,children:C.map(a=>e.jsx("option",{value:a,children:a},a))}),i.role&&e.jsx("em",{className:"err",children:i.role})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{children:"Status"}),e.jsx("select",{value:d.status,onChange:a=>u(r=>({...r,status:a.target.value})),children:T.map(a=>e.jsx("option",{value:a,children:a},a))})]}),e.jsxs("label",{className:`field pw ${i.password?"invalid":""}`,children:[e.jsx("span",{children:"Password"}),e.jsxs("div",{className:"pwWrap",children:[e.jsx("input",{type:R?"text":"password",value:d.password,onChange:a=>u(r=>({...r,password:a.target.value})),placeholder:"Strong password",required:!0}),e.jsx("button",{type:"button",className:"eye",onClick:()=>E(a=>!a),"aria-label":R?"Hide password":"Show password",children:R?e.jsx(ae,{}):e.jsx(ee,{})})]}),i.password&&e.jsx("em",{className:"err",children:i.password})]})]})}),e.jsxs("div",{className:"mFoot",children:[e.jsx("button",{className:"btn ghost",onClick:()=>f(!1),children:"Cancel"}),e.jsx("button",{className:"btn primary",onClick:F,children:"Create"})]})]})})}),e.jsx(N,{children:h.open&&h.row&&e.jsx(b.ModalOverlay,{as:m.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:a=>{a.target===a.currentTarget&&w({open:!1,row:null})},children:e.jsxs(m.div,{className:"modal",initial:{scale:.96,y:6,opacity:0},animate:{scale:1,y:0,opacity:1,transition:{type:"spring",stiffness:320,damping:28}},exit:{scale:.98,y:8,opacity:0,transition:{duration:.18}},role:"dialog","aria-modal":"true","aria-labelledby":"cd-title",children:[e.jsx("div",{className:"mHead",children:e.jsx("h3",{id:"cd-title",children:"Delete Row?"})}),e.jsxs("div",{className:"mBody",children:[e.jsx("p",{className:"muted",children:"You are about to delete the following user. This action cannot be undone."}),e.jsxs("ul",{className:"details",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Name:"})," ",h.row.name]}),e.jsxs("li",{children:[e.jsx("b",{children:"Email:"})," ",h.row.email]}),e.jsxs("li",{children:[e.jsx("b",{children:"Role/Status:"})," ",h.row.role," / ",h.row.status]})]})]}),e.jsxs("div",{className:"mFoot",children:[e.jsx("button",{className:"btn ghost",onClick:()=>w({open:!1,row:null}),autoFocus:!0,children:"Cancel"}),e.jsx("button",{className:"btn danger",onClick:()=>{const a=h.row.id;w({open:!1,row:null}),P(a)},children:"Delete"})]})]})})})]})})}export{oe as default};
