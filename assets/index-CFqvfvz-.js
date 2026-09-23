import{d as N,r as p,j as e,A as y}from"./index-D8yAWZ_T.js";import{M as W,m as o}from"./proxy-DfzdIqFN.js";const B=N.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    color: var(--text);
`,U=N.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    flex-wrap: wrap;

    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }

    .actions {
        display: flex;
        gap: var(--space-3);
    }

    .btn {
        height: 36px;
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
`,Y=N.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    .tableWrap {
        overflow: auto;
    }

    table.table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        font-size: 14px;
    }

    thead th {
        position: sticky;
        top: 0;
        background: var(--surface);
        color: var(--text);
        text-align: left;
        font-weight: 600;
        padding: 12px 14px;
        border-bottom: 1px solid var(--border);
        z-index: 1;
    }

    tbody tr {
        border-bottom: 1px solid var(--border);
        transition: background 0.2s ease;
    }
    tbody tr:hover {
        background: color-mix(in oklab, var(--surface) 70%, transparent);
    }
    tbody tr.isEditing {
        background: color-mix(in oklab, var(--primary) 12%, var(--card));
    }

    td {
        padding: 10px 14px;
        vertical-align: top;
    }

    .actionsCol {
        width: 210px;
        white-space: nowrap;
    }

    /* Cell internals */
    .cell {
        display: grid;
        align-items: center;
        gap: 6px;
    }

    .text {
        color: var(--text);
    }
    .mono {
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
    }

    .badge.role {
        display: inline-grid;
        place-items: center;
        height: 28px;
        padding: 0 10px;
        border-radius: 999px;
        background: var(--surface);
        border: 1px solid var(--border);
    }

    .chip {
        display: inline-grid;
        place-items: center;
        height: 26px;
        padding: 0 10px;
        border-radius: 999px;
        font-weight: 600;
        letter-spacing: 0.2px;
        border: 1px solid var(--border);
    }
    .chip.active {
        background: hsl(150 70% 40% / 0.15);
        color: hsl(150 70% 35%);
        border-color: hsl(150 60% 30% / 0.35);
    }
    .chip.pending {
        background: hsl(40 90% 50% / 0.18);
        color: hsl(40 80% 34%);
        border-color: hsl(40 70% 30% / 0.35);
    }
    .chip.suspended {
        background: hsl(355 80% 55% / 0.18);
        color: hsl(355 70% 40%);
        border-color: hsl(355 60% 38% / 0.35);
    }

    /* Fields */
    .field {
        display: grid;
        gap: 6px;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"],
    select {
        height: 34px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--surface);
        color: var(--text);
        padding: 0 10px;
        outline: none;
    }
    input:focus,
    select:focus {
        box-shadow: var(--focus-ring);
        border-color: color-mix(in oklab, var(--primary), var(--border));
    }
    [aria-invalid="true"] {
        border-color: hsl(355 80% 55% / 0.7);
        box-shadow: 0 0 0 3px hsl(355 80% 55% / 0.15);
    }

    .error {
        color: hsl(355 80% 60%);
        font-size: 12px;
    }

    .withEye {
        position: relative;
    }
    .masked {
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .eye,
    .eye.small {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        background: var(--card);
        border-radius: var(--radius-sm);
        cursor: pointer;
    }
    .eye.small {
        position: static;
        width: 28px;
        height: 28px;
        border-radius: 999px;
    }

    .btnGroup {
        display: inline-flex;
        gap: 8px;
    }
    .btn {
        height: 32px;
        padding: 0 12px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn.ghost {
        background: var(--card);
    }
    .btn.danger {
        background: hsl(355 80% 56%);
        color: #fff;
        border-color: transparent;
    }
`,q=N.div`
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

    .closeBtn,
    .btn {
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }

    /* Add-user form grid */
    .formGrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-4);
    }
    .formGrid label {
        display: grid;
        gap: 6px;
    }
    .formGrid label span {
        font-size: 12px;
        color: var(--text-muted);
    }

    .withEye .eyeWrap {
        position: relative;
    }
    .eyeWrap {
        display: flex;
        align-items: center;
    }
    .withEye input {
        width: 100%;
    }
    .withEye .eye {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        background: var(--card);
        border-radius: var(--radius-sm);
        cursor: pointer;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"],
    select {
        height: 36px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--surface);
        color: var(--text);
        padding: 0 10px;
        outline: none;
    }
    input:focus,
    select:focus {
        box-shadow: var(--focus-ring);
        border-color: color-mix(in oklab, var(--primary), var(--border));
    }

    .error {
        color: hsl(355 80% 60%);
        font-size: 12px;
    }

    @media (width < 640px) {
        .formGrid {
            grid-template-columns: 1fr;
        }
    }
`,g={Wrapper:B,Header:U,Stage:Y,ModalOverlay:q},j=(()=>{let r=0;return()=>`row-${++r}`})(),D=["Admin","Manager","Staff"],R=["Active","Pending","Suspended"],V=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;function _(r){const n={};return(!r.name||r.name.trim().length<2)&&(n.name="Name must be at least 2 characters."),(!r.email||!V.test(r.email))&&(n.email="Enter a valid email address."),D.includes(r.role)||(n.role="Choose a valid role."),R.includes(r.status)||(n.status="Choose a valid status."),(!r.password||r.password.length<8)&&(n.password="Password must be 8+ characters."),r.password&&!/\d/.test(r.password)&&(n.password="Password needs at least one number."),n}function J(r=8){return"•".repeat(Math.max(8,r))}function M({open:r=!1}){return r?e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,children:e.jsx("path",{fill:"currentColor",d:"M12 5c5.5 0 9.5 4.1 10.8 6.1.3.5.3 1.2 0 1.7C21.5 14.9 17.5 19 12 19s-9.5-4.1-10.8-6.1a1.6 1.6 0 010-1.7C2.5 9.1 6.5 5 12 5zm0 3a4 4 0 100 8 4 4 0 000-8z"})}):e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,children:e.jsx("path",{fill:"currentColor",d:"M3.7 2.3l18 18-1.4 1.4-2.9-2.9A12.6 12.6 0 0112 19C6.5 19 2.5 14.9 1.2 12.9a1.6 1.6 0 010-1.7c.9-1.3 3.2-3.7 6.4-5.1L2.3 3.7 3.7 2.3zM12 7a5 5 0 014.8 6.5L14.6 11a2 2 0 00-2.6-2.6L10.5 6.9A4.9 4.9 0 0112 7zm-3.8 1.8l1.6 1.6a2 2 0 002.8 2.8l1.6 1.6A5 5 0 018 12a5 5 0 01.8-3.2z"})})}function Q(){return[{id:j(),name:"Aisha Khan",email:"aisha.khan@example.com",role:"Manager",status:"Active",password:"passw0rd1"},{id:j(),name:"Ravi Patel",email:"ravi.patel@example.com",role:"Staff",status:"Pending",password:"demo1234"},{id:j(),name:"Meera Iyer",email:"meera.iyer@example.com",role:"Admin",status:"Active",password:"S3curePwd"},{id:j(),name:"Kabir Singh",email:"kabir.singh@example.com",role:"Staff",status:"Suspended",password:"lock3d321"}]}function ae(){const[r,n]=p.useState(Q),[h,k]=p.useState(null),[i,x]=p.useState(null),[t,v]=p.useState({}),[f,z]=p.useState({}),[C,S]=p.useState(null),[O,E]=p.useState(!1);p.useMemo(()=>r.find(a=>a.id===h)||null,[r,h]);const w=p.useRef(null);p.useEffect(()=>{var a,s;h&&w.current&&(w.current.focus(),(s=(a=w.current).select)==null||s.call(a))},[h]);const F=a=>{k(a.id),x({...a}),v({})},A=()=>{k(null),x(null),v({})},c=(a,s)=>{x(d=>({...d,[a]:s}))},I=a=>{z(s=>({...s,[a]:!s[a]}))},P=()=>{const a=_(i||{});v(a),!Object.keys(a).length&&(n(s=>s.map(d=>d.id===h?{...d,...i}:d)),k(null),x(null))},G=a=>S(a),K=()=>{n(a=>a.filter(s=>s.id!==C)),S(null),h===C&&A()},T=()=>{E(!0),x({id:j(),name:"",email:"",role:"Staff",status:"Pending",password:""}),v({})},$=()=>{E(!1),x(null),v({})},L=()=>{const a=_(i||{});v(a),!Object.keys(a).length&&(n(s=>[{...i},...s]),E(!1),x(null))},b=a=>{a.key==="Enter"&&P(),a.key==="Escape"&&A()};return e.jsx(W,{reducedMotion:"never",children:e.jsxs(g.Wrapper,{children:[e.jsxs(g.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Inline Edit Morph"}),e.jsx("p",{className:"muted",children:"Cells morph into inputs with springy layout. Validations included. Password field has an eye toggle."})]}),e.jsx("div",{className:"actions",children:e.jsx("button",{className:"btn primary",onClick:T,children:"+ Add User"})})]}),e.jsx(g.Stage,{children:e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{className:"table","aria-label":"Enterprise users",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Role"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Password"}),e.jsx("th",{className:"actionsCol",children:"Actions"})]})}),e.jsx("tbody",{children:e.jsx(y,{initial:!1,children:r.map(a=>{var H;const s=a.id===h,d=s?i:a,m=!!f[a.id];return e.jsxs(o.tr,{layout:!0,className:s?"isEditing":void 0,initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{type:"spring",stiffness:420,damping:36,mass:.8},children:[e.jsx("td",{children:e.jsx(o.div,{layoutId:`cell-${a.id}-name`,layout:!0,className:"cell",children:s?e.jsxs("div",{className:"field",children:[e.jsx("input",{ref:w,type:"text",value:d.name,onChange:l=>c("name",l.target.value),onKeyDown:b,placeholder:"Enter full name","aria-invalid":!!t.name}),e.jsx(u,{error:t.name})]}):e.jsx("span",{className:"text",children:a.name})})}),e.jsx("td",{children:e.jsx(o.div,{layoutId:`cell-${a.id}-email`,layout:!0,className:"cell",children:s?e.jsxs("div",{className:"field",children:[e.jsx("input",{type:"email",value:d.email,onChange:l=>c("email",l.target.value),onKeyDown:b,placeholder:"name@company.com","aria-invalid":!!t.email}),e.jsx(u,{error:t.email})]}):e.jsx("span",{className:"text mono",children:a.email})})}),e.jsx("td",{children:e.jsx(o.div,{layoutId:`cell-${a.id}-role`,layout:!0,className:"cell",children:s?e.jsxs("div",{className:"field",children:[e.jsx("select",{value:d.role,onChange:l=>c("role",l.target.value),onKeyDown:b,"aria-invalid":!!t.role,children:D.map(l=>e.jsx("option",{value:l,children:l},l))}),e.jsx(u,{error:t.role})]}):e.jsx("span",{className:"badge role",children:a.role})})}),e.jsx("td",{children:e.jsx(o.div,{layoutId:`cell-${a.id}-status`,layout:!0,className:"cell",children:s?e.jsxs("div",{className:"field",children:[e.jsx("select",{value:d.status,onChange:l=>c("status",l.target.value),onKeyDown:b,"aria-invalid":!!t.status,children:R.map(l=>e.jsx("option",{value:l,children:l},l))}),e.jsx(u,{error:t.status})]}):e.jsx(X,{status:a.status})})}),e.jsx("td",{children:e.jsx(o.div,{layoutId:`cell-${a.id}-password`,layout:!0,className:"cell",children:s?e.jsxs("div",{className:"field withEye",children:[e.jsx("input",{type:m?"text":"password",value:d.password,onChange:l=>c("password",l.target.value),onKeyDown:b,placeholder:"Min 8 chars, 1 number","aria-invalid":!!t.password}),e.jsx("button",{type:"button",className:"eye",onClick:()=>I(a.id),"aria-label":m?"Hide password":"Show password",title:m?"Hide":"Show",children:e.jsx(M,{open:m})}),e.jsx(u,{error:t.password})]}):e.jsxs("div",{className:"masked",children:[e.jsx("span",{className:"mono",children:m?a.password:J((H=a.password)==null?void 0:H.length)}),e.jsx("button",{type:"button",className:"eye small",onClick:()=>I(a.id),"aria-label":m?"Hide password":"Show password",title:m?"Hide":"Show",children:e.jsx(M,{open:m})})]})})}),e.jsx("td",{className:"actionsCol",children:e.jsx(o.div,{layout:!0,className:"actions",children:e.jsx(y,{initial:!1,mode:"popLayout",children:s?e.jsxs(o.div,{initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:6},className:"btnGroup",children:[e.jsx("button",{className:"btn primary",onClick:P,children:"Save"}),e.jsx("button",{className:"btn ghost",onClick:A,children:"Cancel"})]},"edit-actions"):e.jsxs(o.div,{initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:6},className:"btnGroup",children:[e.jsx("button",{className:"btn",onClick:()=>F(a),children:"Edit"}),e.jsx("button",{className:"btn danger",onClick:()=>G(a.id),children:"Delete"})]},"view-actions")})})})]},a.id)})})})]})})}),e.jsx(y,{children:O&&e.jsx(g.ModalOverlay,{as:o.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(o.div,{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"addUserTitle",initial:{scale:.96,y:12,opacity:0},animate:{scale:1,y:0,opacity:1,transition:{type:"spring",stiffness:360,damping:30}},exit:{scale:.98,y:8,opacity:0,transition:{duration:.18}},children:[e.jsxs("div",{className:"mHead",children:[e.jsx("h3",{id:"addUserTitle",children:"Add User"}),e.jsx("p",{className:"muted",children:"Create a new user. All fields are required."})]}),e.jsx("div",{className:"mBody",children:e.jsxs("div",{className:"formGrid",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Name"}),e.jsx("input",{type:"text",value:(i==null?void 0:i.name)||"",onChange:a=>c("name",a.target.value),"aria-invalid":!!t.name}),e.jsx(u,{error:t.name})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Email"}),e.jsx("input",{type:"email",value:(i==null?void 0:i.email)||"",onChange:a=>c("email",a.target.value),"aria-invalid":!!t.email}),e.jsx(u,{error:t.email})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Role"}),e.jsx("select",{value:(i==null?void 0:i.role)||"Staff",onChange:a=>c("role",a.target.value),"aria-invalid":!!t.role,children:D.map(a=>e.jsx("option",{value:a,children:a},a))}),e.jsx(u,{error:t.role})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Status"}),e.jsx("select",{value:(i==null?void 0:i.status)||"Pending",onChange:a=>c("status",a.target.value),"aria-invalid":!!t.status,children:R.map(a=>e.jsx("option",{value:a,children:a},a))}),e.jsx(u,{error:t.status})]}),e.jsxs("label",{className:"withEye",children:[e.jsx("span",{children:"Password"}),e.jsxs("div",{className:"eyeWrap",children:[e.jsx("input",{type:f.__add?"text":"password",value:(i==null?void 0:i.password)||"",onChange:a=>c("password",a.target.value),"aria-invalid":!!t.password,placeholder:"Min 8 chars, 1 number"}),e.jsx("div",{type:"button",className:"eye",onClick:()=>z(a=>({...a,__add:!a.__add})),"aria-label":f.__add?"Hide password":"Show password",children:e.jsx(M,{open:!!f.__add})})]}),e.jsx(u,{error:t.password})]})]})}),e.jsxs("div",{className:"mFoot",children:[e.jsx("button",{className:"btn ghost",onClick:$,children:"Cancel"}),e.jsx("button",{className:"btn primary",onClick:L,children:"Create"})]})]})})}),e.jsx(y,{children:C&&e.jsx(g.ModalOverlay,{as:o.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(o.div,{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"delTitle",initial:{scale:.96,y:12,opacity:0},animate:{scale:1,y:0,opacity:1,transition:{type:"spring",stiffness:360,damping:30}},exit:{scale:.98,y:8,opacity:0,transition:{duration:.18}},children:[e.jsx("div",{className:"mHead",children:e.jsx("h3",{id:"delTitle",children:"Delete user?"})}),e.jsx("div",{className:"mBody",children:e.jsx("p",{className:"muted",children:"This action removes the user row. You can’t undo this."})}),e.jsxs("div",{className:"mFoot",children:[e.jsx("button",{className:"btn ghost",onClick:()=>S(null),children:"Cancel"}),e.jsx("button",{className:"btn danger",onClick:K,children:"Delete"})]})]})})})]})})}function u({error:r}){return e.jsx(y,{initial:!1,children:r?e.jsx(o.div,{className:"error",initial:{opacity:0,y:-2},animate:{opacity:1,y:0},exit:{opacity:0,y:-2},transition:{duration:.18},role:"alert",children:r}):null})}function X({status:r}){return e.jsx(o.span,{className:`chip ${r.toLowerCase()}`,initial:{scale:.92,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:500,damping:28},children:r})}export{ae as default};
