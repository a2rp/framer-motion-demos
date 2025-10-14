import{d as g,r as c,j as e,p as re,A as V,q as se,s as te,t as ie}from"./index-BybwJ5J0.js";import{M as oe,m as u}from"./proxy-CWA0aJAx.js";import{L as ne}from"./index-0TZX3edp.js";const le=g.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    color: var(--text);
`,de=g.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);

    .title h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .title .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }

    .controls {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-4);
        align-items: center;
    }

    .search {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        padding: 0 10px;
        height: 36px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
    }
    .search input {
        background: transparent;
        border: none;
        outline: none;
        color: var(--text);
        min-width: 260px;
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
    .ctrl select {
        min-width: 160px;
        height: 36px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 8px;
    }

    @media (width < 720px) {
        .search input {
            min-width: 160px;
        }
    }
`,ce=g.section`
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
    }

    thead th {
        position: sticky;
        top: 0;
        z-index: 1;
        background: var(--surface);
        color: var(--text);
        text-align: left;
        font-weight: 600;
        padding: 12px 14px;
        border-bottom: 1px solid var(--border);
        white-space: nowrap;
    }

    tbody td {
        padding: 12px 14px;
        border-bottom: 1px solid var(--border);
        vertical-align: middle;
        color: var(--text);
    }

    tr.row {
        transition: background-color 0.2s ease;
    }
    tr.row:last-of-type td {
        border-bottom: none;
    }

    .cellUser {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .cellUser .avatar {
        --size: 28px;
        width: var(--size);
        height: var(--size);
        border-radius: 999px;
        background: hsl(var(--h, 210) 70% 60% / 0.8);
        box-shadow: 0 0 0 2px var(--surface) inset;
    }
    .cellUser .stack {
        display: grid;
    }
    .cellUser .name {
        font-weight: 600;
    }
    .cellUser .sub {
        font-size: 12px;
    }

    .chip {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 2px 8px;
        height: 24px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        font-size: 12px;
    }

    .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 2px 10px;
        height: 24px;
        border-radius: 999px;
        font-size: 12px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
    }
    .badge.active {
        background: color-mix(in oklab, var(--primary) 15%, var(--surface));
    }
    .badge.invited {
        background: color-mix(in oklab, #ffc107 22%, var(--surface));
    }
    .badge.suspended {
        background: color-mix(in oklab, #ef4444 18%, var(--surface));
    }

    .right {
        text-align: right;
    }

    .rowActions {
        display: inline-flex;
        gap: 8px;
        align-items: center;
    }

    .iconBtn {
        width: 28px;
        height: 28px;
        display: grid;
        place-items: center;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        cursor: pointer;
    }
    .iconBtn:hover {
        filter: brightness(1.05);
    }

    /* Expandable row */
    tr.expandRow td {
        background: color-mix(in oklab, var(--surface) 96%, #0000);
    }
    .expand {
        overflow: hidden;
        border-top: 1px dashed var(--border);
        background: color-mix(in oklab, var(--surface) 98%, #0000);
    }
    .expandInner {
        padding: 14px;
        display: grid;
        gap: 12px;
    }

    .kpis {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;
    }
    .kpi {
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--card);
        padding: 10px 12px;
        box-shadow: var(--shadow-sm);
    }
    .kicker {
        font-size: 11px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--text-muted);
    }
    .val {
        font-size: 16px;
    }

    .desc {
        color: var(--text-muted);
    }

    .actions {
        display: flex;
        gap: 10px;
    }

    .btn {
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        height: 34px;
        padding: 0 12px;
        box-shadow: var(--shadow-sm);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: var(--card);
        color: var(--text);
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
    .btn.sm {
        height: 30px;
        padding: 0 10px;
    }

    tr.empty td {
        text-align: center;
    }
    .emptyBox {
        padding: 24px;
        color: var(--text-muted);
    }

    @media (width < 880px) {
        .hide-sm {
            display: none;
        }
        .kpis {
            grid-template-columns: 1fr;
        }
    }
`,pe=g.div`
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

    .fgrid {
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
    .field input,
    .field select {
        height: 36px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 10px;
        outline: none;
    }
    .field.error input,
    .field.error select {
        border-color: #ef4444;
    }
    .field em {
        color: #ef4444;
        font-style: normal;
        font-size: 12px;
    }

    .pwWrap {
        position: relative;
        display: grid;
    }
    .pwWrap input {
        padding-right: 36px;
    }
    .pwToggle {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        width: 28px;
        height: 28px;
        border-radius: 8px;
        border: 1px solid var(--border);
        background: var(--surface);
        display: grid;
        place-items: center;
        cursor: pointer;
        color: var(--text);
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
    .btn.ghost {
        background: var(--surface);
        color: var(--text);
    }
`,v={Wrapper:le,Header:de,Stage:ce,ModalOverlay:pe},j=["Admin","Manager","Analyst","Viewer"],q=["Active","Invited","Suspended"];function xe(s=12){const i=(d,p)=>Math.floor(Math.random()*(p-d+1))+d,n=d=>d[i(0,d.length-1)],m=["Ashish Ranjan","Priya Mehta","Rohit Kumar","Aman Verma","Neha Gupta","Vikram Singh","Sana Khan","Arjun Iyer","Ritu Sharma","Kunal Desai","Meera Nair","Kabir Ali","Ananya Roy","Rhea Kapoor","Ishaan Joshi"],h=d=>d.toLowerCase().replace(/[^a-z]+/g,".")+"@example.com";return Array.from({length:s},(d,p)=>{const b=m[p%m.length];return{id:`u-${p+1}`,name:b,email:h(b),role:n(j),status:n(q),lastActive:Date.now()-i(1,30)*864e5,billable:!!(p%2),spend:+(i(1200,9800)+Math.random()).toFixed(2)}})}const K=s=>new Intl.DateTimeFormat("en-IN",{year:"numeric",month:"short",day:"2-digit"}).format(s),O=s=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(s);function ge(){var S,A,_,C,E,z,R,M,P,I,T,$,L,F,U,B,H,D,W;const[s,i]=c.useState(""),[n,m]=c.useState("all"),[h,d]=c.useState("date-desc"),[p,b]=c.useState(()=>xe(16)),[G,Y]=c.useState(null),[J,y]=c.useState(!1),[r,x]=c.useState(null),Q=a=>Y(o=>o===a?null:a),w=()=>(y(!1),x(null)),k=c.useMemo(()=>{const a=s.trim().toLowerCase();let o=p.filter(t=>{const l=`${t.name} ${t.email} ${t.role} ${t.status}`.toLowerCase(),ee=!a||l.includes(a),ae=n==="all"||t.status===n;return ee&&ae});switch(h){case"date-desc":o.sort((t,l)=>l.lastActive-t.lastActive);break;case"date-asc":o.sort((t,l)=>t.lastActive-l.lastActive);break;case"spend-desc":o.sort((t,l)=>l.spend-t.spend);break;case"spend-asc":o.sort((t,l)=>t.spend-l.spend);break;case"name":o.sort((t,l)=>t.name.localeCompare(l.name));break}return o},[p,s,n,h]),Z=a=>{x({id:a.id,name:a.name,email:a.email,role:a.role,password:"",showPw:!1}),y(!0)},N=()=>{const a={};if(r.name.trim()||(a.name="Name is required."),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email)||(a.email="Enter a valid email."),j.includes(r.role)||(a.role="Choose a role."),r.password&&r.password.length<8&&(a.password="Password must be at least 8 characters."),Object.keys(a).length){x(o=>({...o,_errors:a}));return}b(o=>o.map(t=>t.id===r.id?{...t,name:r.name.trim(),email:r.email.trim(),role:r.role}:t)),w()},X=()=>x(a=>({...a,showPw:!a.showPw})),f=c.useRef(null);return c.useEffect(()=>{var a;r!=null&&r._errors&&((a=f.current)==null||a.focus())},[r==null?void 0:r._errors]),e.jsx(oe,{reducedMotion:"never",children:e.jsxs(v.Wrapper,{children:[e.jsxs(v.Header,{children:[e.jsxs("div",{className:"title",children:[e.jsx("h1",{children:"Row Expand Preview"}),e.jsx("p",{className:"muted",children:"Click a row to expand details. Animates height/opacity, rotates caret, and keeps layout buttery with FLIP."})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Table controls",children:[e.jsxs("label",{className:"search",children:[e.jsx(re,{size:18,"aria-hidden":!0}),e.jsx("input",{type:"text",placeholder:"Search name, email, role, status",value:s,onChange:a=>i(a.target.value)})]}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Status"}),e.jsxs("select",{value:n,onChange:a=>m(a.target.value),children:[e.jsx("option",{value:"all",children:"All"}),q.map(a=>e.jsx("option",{value:a,children:a},a))]})]}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Sort"}),e.jsxs("select",{value:h,onChange:a=>d(a.target.value),children:[e.jsx("option",{value:"date-desc",children:"Last active ↓"}),e.jsx("option",{value:"date-asc",children:"Last active ↑"}),e.jsx("option",{value:"spend-desc",children:"Spend ↓"}),e.jsx("option",{value:"spend-asc",children:"Spend ↑"}),e.jsx("option",{value:"name",children:"Name A→Z"})]})]})]})]}),e.jsx(v.Stage,{children:e.jsx(ne,{id:"et",children:e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{className:"table","aria-label":"Users",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:42},"aria-label":"expand column"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Role"}),e.jsx("th",{children:"Status"}),e.jsx("th",{style:{textAlign:"right"},children:"Spend"}),e.jsx("th",{style:{width:140},children:"Last Active"}),e.jsx("th",{style:{width:100},"aria-label":"actions column"})]})}),e.jsxs("tbody",{children:[k.map(a=>{const o=G===a.id;return e.jsx(me,{row:a,isOpen:o,onToggle:()=>Q(a.id),onEdit:()=>Z(a)},a.id)}),k.length===0&&e.jsx("tr",{className:"empty",children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"emptyBox",children:"No results. Try a different search, filter, or sort."})})})]})]})})})}),e.jsx(V,{children:J&&r&&e.jsx(v.ModalOverlay,{as:u.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(u.div,{className:"modal",layout:!0,initial:{y:16,scale:.98,opacity:0},animate:{y:0,scale:1,opacity:1,transition:{type:"spring",stiffness:280,damping:26}},exit:{y:12,scale:.98,opacity:0,transition:{duration:.18}},children:[e.jsxs("div",{className:"mHead",children:[e.jsx("h3",{children:"Edit User"}),e.jsx("p",{className:"muted",children:"Update profile basics. Password is optional; leave empty to keep."})]}),e.jsx("div",{className:"mBody",children:e.jsx("form",{onSubmit:a=>{a.preventDefault(),N()},noValidate:!0,children:e.jsxs("div",{className:"fgrid",children:[e.jsxs("label",{className:`field ${(S=r._errors)!=null&&S.name?"error":""}`,children:[e.jsx("span",{children:"Name"}),e.jsx("input",{ref:(A=r._errors)!=null&&A.name?f:null,type:"text",value:r.name,onChange:a=>x({...r,name:a.target.value}),"aria-invalid":!!((_=r._errors)!=null&&_.name),"aria-describedby":(C=r._errors)!=null&&C.name?"err-name":void 0}),((E=r._errors)==null?void 0:E.name)&&e.jsx("em",{id:"err-name",children:r._errors.name})]}),e.jsxs("label",{className:`field ${(z=r._errors)!=null&&z.email?"error":""}`,children:[e.jsx("span",{children:"Email"}),e.jsx("input",{ref:!((R=r._errors)!=null&&R.email)||(M=r._errors)!=null&&M.name?null:f,type:"email",value:r.email,onChange:a=>x({...r,email:a.target.value}),"aria-invalid":!!((P=r._errors)!=null&&P.email),"aria-describedby":(I=r._errors)!=null&&I.email?"err-email":void 0}),((T=r._errors)==null?void 0:T.email)&&e.jsx("em",{id:"err-email",children:r._errors.email})]}),e.jsxs("label",{className:`field ${($=r._errors)!=null&&$.role?"error":""}`,children:[e.jsx("span",{children:"Role"}),e.jsxs("select",{value:r.role,onChange:a=>x({...r,role:a.target.value}),"aria-invalid":!!((L=r._errors)!=null&&L.role),"aria-describedby":(F=r._errors)!=null&&F.role?"err-role":void 0,children:[e.jsx("option",{value:"",children:"Select role"}),j.map(a=>e.jsx("option",{value:a,children:a},a))]}),((U=r._errors)==null?void 0:U.role)&&e.jsx("em",{id:"err-role",children:r._errors.role})]}),e.jsxs("label",{className:`field ${(B=r._errors)!=null&&B.password?"error":""}`,children:[e.jsx("span",{children:"Password (optional)"}),e.jsxs("div",{className:"pwWrap",children:[e.jsx("input",{type:r.showPw?"text":"password",value:r.password,onChange:a=>x({...r,password:a.target.value}),placeholder:"New password","aria-invalid":!!((H=r._errors)!=null&&H.password),"aria-describedby":(D=r._errors)!=null&&D.password?"err-pw":void 0}),e.jsx("button",{type:"button",className:"pwToggle",onClick:X,"aria-label":r.showPw?"Hide password":"Show password",children:r.showPw?e.jsx(se,{size:18}):e.jsx(te,{size:18})})]}),((W=r._errors)==null?void 0:W.password)&&e.jsx("em",{id:"err-pw",children:r._errors.password})]})]})})}),e.jsxs("div",{className:"mFoot",children:[e.jsx("button",{className:"btn ghost",type:"button",onClick:w,children:"Cancel"}),e.jsx("button",{className:"btn primary",type:"button",onClick:N,children:"Save"})]})]})})})]})})}function me({row:s,isOpen:i,onToggle:n,onEdit:m}){return e.jsxs(e.Fragment,{children:[e.jsxs(u.tr,{layout:!0,className:"row",initial:!1,whileHover:{backgroundColor:"color-mix(in oklab, var(--surface) 92%, #0000)"},transition:{layout:{type:"spring",stiffness:500,damping:40}},children:[e.jsx("td",{children:e.jsx("button",{className:"iconBtn",onClick:n,"aria-expanded":i,"aria-controls":`exp-${s.id}`,title:i?"Collapse":"Expand",children:e.jsx(u.span,{initial:!1,animate:{rotate:i?180:0},transition:{type:"spring",stiffness:300,damping:20},children:e.jsx(ie,{size:18})})})}),e.jsx("td",{children:e.jsxs("div",{className:"cellUser",children:[e.jsx("span",{className:"avatar",style:{"--h":he(s.id)},"aria-hidden":!0}),e.jsxs("div",{className:"stack",children:[e.jsx("b",{className:"name",children:s.name}),e.jsx("span",{className:"sub muted",children:s.email})]})]})}),e.jsx("td",{className:"hide-sm",children:s.email}),e.jsx("td",{children:e.jsx("span",{className:"chip",children:s.role})}),e.jsx("td",{children:e.jsx("span",{className:`badge ${s.status.toLowerCase()}`,children:s.status})}),e.jsx("td",{className:"right",children:O(s.spend)}),e.jsx("td",{children:K(s.lastActive)}),e.jsx("td",{children:e.jsx("div",{className:"rowActions",children:e.jsx("button",{className:"btn ghost sm",onClick:m,children:"Edit"})})})]}),e.jsx("tr",{className:"expandRow",children:e.jsx("td",{colSpan:8,style:{padding:0},children:e.jsx(V,{initial:!1,children:i&&e.jsx(u.div,{id:`exp-${s.id}`,className:"expand",initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.28,ease:[.22,1,.36,1]},children:e.jsxs("div",{className:"expandInner",children:[e.jsxs("div",{className:"kpis",children:[e.jsxs("div",{className:"kpi",children:[e.jsx("span",{className:"kicker",children:"Billable"}),e.jsx("b",{className:"val",children:s.billable?"Yes":"No"})]}),e.jsxs("div",{className:"kpi",children:[e.jsx("span",{className:"kicker",children:"Spend"}),e.jsx("b",{className:"val",children:O(s.spend)})]}),e.jsxs("div",{className:"kpi",children:[e.jsx("span",{className:"kicker",children:"Last Active"}),e.jsx("b",{className:"val",children:K(s.lastActive)})]})]}),e.jsx("div",{className:"desc muted",children:"This preview row is great for avoiding navigation: drop in notes, last activity, and quick actions without leaving the table."}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btn primary sm",onClick:m,children:"Edit"}),e.jsx("button",{className:"btn ghost sm",children:"Message"}),e.jsx("button",{className:"btn ghost sm",children:"View History"})]})]})})})})})]})}function he(s){let i=0;for(let n=0;n<s.length;n++)i=(i+s.charCodeAt(n)*17)%360;return i}export{ge as default};
