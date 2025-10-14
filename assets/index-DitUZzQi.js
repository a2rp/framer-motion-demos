import{d as w,r as l,j as e,v as I,w as O,A as S,x as P,y as T,z as E,n as V,o as B,m as H}from"./index-BybwJ5J0.js";import{M as K,m as k}from"./proxy-CWA0aJAx.js";const W=w.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    color: var(--text);
`,Z=w.header`
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

    .tools {
        display: flex;
        align-items: center;
        gap: var(--space-4);
    }

    .search {
        position: relative;
        display: grid;
        grid-template-columns: 22px 1fr 30px;
        align-items: center;
        width: min(360px, 80vw);
        border: 1px solid var(--border);
        background: var(--card);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        overflow: hidden;
        padding: 0 6px 0 8px;
        height: 38px;
    }
    .search svg {
        color: var(--text-muted);
    }
    .search input {
        border: none;
        outline: none;
        background: transparent;
        color: var(--text);
        height: 100%;
        padding: 0 8px;
        width: 100%;
    }
    .search .clear {
        border: none;
        background: transparent;
        color: var(--text-muted);
        cursor: pointer;
        height: 100%;
        display: grid;
        place-items: center;
    }
`,q=w.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
`,G=w.div`
    --row-h: 56px;

    display: grid;

    .thead {
        position: sticky;
        top: 0;
        z-index: 2;
        background: var(--surface);
        border-bottom: 1px solid var(--border);
    }

    .tr {
        display: grid;
        grid-template-columns: 48px 1.2fr 1.6fr 1fr 1fr 120px;
        align-items: center;
        min-height: var(--row-h);
        gap: 0;
        padding: 0 8px;
        border-bottom: 1px solid var(--border);
        will-change: transform, opacity;
    }

    .th,
    .td {
        padding: 6px 8px;
        color: var(--text);
    }

    .tbody .tr:hover {
        background: color-mix(in oklab, var(--surface) 70%, #0000);
    }

    .tbody .tr.selected {
        background: color-mix(in oklab, var(--primary) 8%, var(--card));
        box-shadow: inset 0 0 0 1px
            color-mix(in oklab, var(--primary) 28%, #0000);
    }

    /* cells */
    .check {
        display: grid;
        place-items: center;
    }
    input[type="checkbox"] {
        width: 18px;
        height: 18px;
        accent-color: var(--primary);
        cursor: pointer;
    }

    .name .user {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .avatar {
        width: 28px;
        height: 28px;
        border-radius: 8px;
        display: grid;
        place-items: center;
        font-weight: 700;
        color: var(--primary-contrast);
        background: linear-gradient(135deg, hsl(210 90% 56%), hsl(210 90% 62%));
        box-shadow: var(--shadow-sm);
    }
    .meta .nm {
        font-weight: 600;
    }
    .muted {
        color: var(--text-muted);
    }

    .email a {
        color: var(--text);
        text-decoration: none;
    }
    .email a:hover {
        text-decoration: underline;
    }

    .pill {
        display: inline-block;
        padding: 2px 8px;
        border-radius: 999px;
        background: var(--surface);
        border: 1px solid var(--border);
        font-size: 12px;
    }

    .status {
        padding: 2px 8px;
        border-radius: 8px;
        font-size: 12px;
        border: 1px solid var(--border);
    }
    .status.active {
        background: color-mix(in oklab, var(--primary) 10%, var(--surface));
    }
    .status.invited {
        background: color-mix(in oklab, #ffc107 20%, var(--surface));
    }
    .status.suspended {
        background: color-mix(in oklab, #ef4444 18%, var(--surface));
    }
`,J=w.div`
    position: sticky;
    bottom: 0;
    inset-inline: 0;
    z-index: 3;
    background: var(--card);
    border-top: 1px solid var(--border);
    box-shadow: 0 -8px 24px hsl(0 0% 0% / 0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    padding: 10px 12px;

    .count {
        font-weight: 600;
    }

    .link {
        border: none;
        background: transparent;
        color: var(--primary);
        cursor: pointer;
        text-decoration: underline;
        margin-left: 10px;
    }

    .right {
        display: flex;
        align-items: center;
        gap: var(--space-3);
    }

    .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn.danger {
        background: color-mix(in oklab, #ef4444 22%, var(--surface));
        color: var(--text);
        border-color: color-mix(in oklab, #ef4444 40%, var(--border));
    }
`,Q=w.div`
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

    .field {
        display: grid;
        gap: 6px;
        margin: 12px 0;
    }
    .field label {
        font-weight: 600;
    }
    .field input[type="text"],
    .field input[type="password"] {
        height: 38px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        padding: 0 10px;
        background: var(--surface);
        color: var(--text);
        outline: none;
    }
    .field input[aria-invalid="true"] {
        border-color: #ef4444;
    }

    .pwd {
        position: relative;
    }
    .pwd input {
        width: 100%;
        padding-right: 40px;
    }
    .pwd .eye {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 38px;
        border: none;
        background: transparent;
        color: var(--text);
        display: grid;
        place-items: center;
        cursor: pointer;
    }

    .error {
        color: #ef4444;
        font-size: 12px;
    }

    .btn {
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .btn.ghost {
        background: var(--surface);
        color: var(--text);
    }
    .btn.danger {
        background: color-mix(in oklab, #ef4444 22%, var(--surface));
        color: var(--text);
        border-color: color-mix(in oklab, #ef4444 40%, var(--border));
    }
`,j={Wrapper:W,Header:Z,Stage:q,Table:G,Toolbar:J},C=["Admin","Manager","Editor","Viewer"],D=["Active","Invited","Suspended"];function Y(x=24){const u=["Ava","Isha","Rahul","Karan","Neha","Rey","Mira","Arjun","Zoya","Kabir","Tia","Ira"],d=["Singh","Sharma","Joshi","Patel","Roy","Mehta","Kapoor","Gupta","Iyer","Bose","Khan","Das"],h=[];for(let r=0;r<x;r++){const c=u[r%u.length],o=d[r*3%d.length],b=`${c} ${o}`,n=`${c}.${o}${r%7+1}`.toLowerCase()+"@example.com",v=C[r%C.length],s=D[r*2%D.length],g=new Date(Date.now()-r*864e5).toISOString().slice(0,10);h.push({id:`u-${r+1}`,name:b,email:n,role:v,status:s,createdAt:g})}return h}function X(x,u="export.csv"){const d=["id","name","email","role","status","createdAt"],h=[d.join(",")].concat(x.map(b=>d.map(n=>String(b[n]).replace(/"/g,'""')).map(n=>`"${n}"`).join(","))).join(`
`),r=new Blob([h],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(r),o=document.createElement("a");o.href=c,o.download=u,o.click(),URL.revokeObjectURL(c)}function re(){const[x,u]=l.useState(()=>Y(24)),[d,h]=l.useState(""),[r,c]=l.useState(()=>new Set),[o,b]=l.useState(!1),n=l.useRef(null),v=l.useMemo(()=>{const a=d.trim().toLowerCase();return a?x.filter(t=>{const p=`${t.name} ${t.email} ${t.role} ${t.status}`.toLowerCase();return a.split(/\s+/).every(N=>p.includes(N))}):x},[x,d]),s=r.size,g=l.useMemo(()=>v.map(a=>a.id),[v]),m=g.every(a=>r.has(a)),f=g.some(a=>r.has(a));l.useEffect(()=>{n.current&&(n.current.indeterminate=!m&&f)},[m,f]);const i=()=>{c(a=>{const t=new Set(a);return m?g.forEach(p=>t.delete(p)):g.forEach(p=>t.add(p)),t})},y=a=>{c(t=>{const p=new Set(t);return p.has(a)?p.delete(a):p.add(a),p})},L=()=>c(new Set),$=()=>{if(!s)return;const a=x.filter(t=>r.has(t.id));X(a,`users-${s}.csv`),E.success(`Exported ${s} row${s>1?"s":""}`)},z=({password:a,confirmText:t})=>{const p=t.trim().toUpperCase()==="DELETE",N=a.length>=6;if(!p||!N)return!1;const U=x.filter(F=>!r.has(F.id));return u(U),c(new Set),b(!1),E.success("Deleted selected users"),!0},M={initial:{opacity:0},animate:{opacity:1,transition:{staggerChildren:.025,delayChildren:.05}}},R={initial:{opacity:0,y:8,scale:.995},animate:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:420,damping:34,mass:.8}}};function A(a){try{const t=new Date(a.length<=10?`${a}T00:00:00Z`:a);return new Intl.DateTimeFormat("en-US",{month:"short",day:"2-digit",year:"numeric"}).format(t)}catch{return a}}return e.jsx(K,{reducedMotion:"never",children:e.jsxs(j.Wrapper,{children:[e.jsxs(j.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Users"}),e.jsx("p",{className:"muted",children:"Bulk-select rows; a smart toolbar appears with actions."})]}),e.jsx("div",{className:"tools",children:e.jsxs("div",{className:"search",children:[e.jsx(I,{size:18,"aria-hidden":!0}),e.jsx("input",{type:"search",placeholder:"Search name, email, role…",value:d,onChange:a=>h(a.target.value),"aria-label":"Search users"}),d&&e.jsx("button",{className:"clear",title:"Clear",onClick:()=>h(""),"aria-label":"Clear search",children:e.jsx(O,{size:18})})]})})]}),e.jsx(j.Stage,{children:e.jsxs(j.Table,{role:"table","aria-label":"Users",children:[e.jsx("div",{className:"thead",role:"rowgroup",children:e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"th check",role:"columnheader","aria-label":"Select all",children:e.jsx("input",{ref:n,type:"checkbox",checked:m&&v.length>0,onChange:i,"aria-checked":m?"true":f?"mixed":"false"})}),e.jsx("div",{className:"th name",role:"columnheader",children:"Name"}),e.jsx("div",{className:"th email",role:"columnheader",children:"Email"}),e.jsx("div",{className:"th role",role:"columnheader",children:"Role"}),e.jsx("div",{className:"th status",role:"columnheader",children:"Status"}),e.jsx("div",{className:"th created",role:"columnheader",children:"Created"})]})}),e.jsx(k.div,{className:"tbody",role:"rowgroup",variants:M,initial:"initial",animate:"animate",children:e.jsx(S,{initial:!1,children:v.map(a=>{const t=r.has(a.id);return e.jsxs(k.div,{className:`tr ${t?"selected":""}`,role:"row",variants:R,layout:!0,children:[e.jsx("div",{className:"td check",role:"cell",children:e.jsx("input",{type:"checkbox",checked:t,onChange:()=>y(a.id),"aria-label":`Select ${a.name}`})}),e.jsx("div",{className:"td name",role:"cell",children:e.jsxs("div",{className:"user",children:[e.jsx("div",{className:"avatar","aria-hidden":!0,children:a.name.slice(0,1)}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"nm",children:a.name}),e.jsx("div",{className:"muted",children:a.id})]})]})}),e.jsx("div",{className:"td email",role:"cell",children:e.jsx("a",{href:`mailto:${a.email}`,children:a.email})}),e.jsx("div",{className:"td role",role:"cell",children:e.jsx("span",{className:"pill",children:a.role})}),e.jsx("div",{className:"td status",role:"cell",children:e.jsx("span",{className:`status ${a.status.toLowerCase()}`,children:a.status})}),e.jsx("div",{className:"td created",role:"cell",children:e.jsx("time",{dateTime:a.createdAt,title:a.createdAt,children:A(a.createdAt)})})]},a.id)})})})]})}),e.jsx(S,{children:s>0&&e.jsxs(j.Toolbar,{as:k.div,initial:{y:24,opacity:0},animate:{y:0,opacity:1,transition:{type:"spring",stiffness:420,damping:30}},exit:{y:24,opacity:0,transition:{duration:.15}},role:"region","aria-label":"Bulk actions",children:[e.jsxs("div",{className:"left",children:[e.jsxs("span",{className:"count",children:[s," selected"]}),e.jsx("button",{className:"link",onClick:L,children:"Clear selection"})]}),e.jsxs("div",{className:"right",children:[e.jsxs("button",{className:"btn ghost",onClick:$,title:"Export CSV",children:[e.jsx(P,{size:18}),e.jsx("span",{children:"Export"})]}),e.jsxs("button",{className:"btn danger",onClick:()=>b(!0),title:"Delete selected",children:[e.jsx(T,{size:18}),e.jsx("span",{children:"Delete"})]})]})]})}),e.jsx(S,{children:o&&e.jsx(_,{open:o,onClose:()=>b(!1),onConfirm:z,count:s})})]})})}function _({open:x,onClose:u,onConfirm:d,count:h}){const[r,c]=l.useState(""),[o,b]=l.useState(""),[n,v]=l.useState(!1),[s,g]=l.useState({text:"",pwd:""}),m=r.trim().toUpperCase()==="DELETE"&&o.length>=6,f=()=>{const i={text:"",pwd:""};if(r.trim().toUpperCase()!=="DELETE"&&(i.text='Type "DELETE" to confirm.'),o.length<6&&(i.pwd="Password must be at least 6 characters."),g(i),i.text||i.pwd)return;d({password:o,confirmText:r})||g({text:"Validation failed.",pwd:"Check password."})};return l.useEffect(()=>{const i=y=>{y.key==="Escape"&&u(),y.key==="Enter"&&m&&f()};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[m]),e.jsx(Q,{as:k.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.12}},"aria-modal":"true",role:"dialog","aria-label":"Confirm deletion",children:e.jsxs(k.div,{className:"modal",initial:{y:24,scale:.98,opacity:0},animate:{y:0,scale:1,opacity:1,transition:{type:"spring",stiffness:420,damping:34}},exit:{y:12,opacity:0,transition:{duration:.12}},children:[e.jsx("div",{className:"mHead",children:e.jsxs("h3",{children:["Delete ",h," selected ",h>1?"users":"user","?"]})}),e.jsxs("div",{className:"mBody",children:[e.jsxs("p",{className:"muted",children:["This action cannot be undone. For safety, please type ",e.jsx("b",{children:"DELETE"})," and enter your password."]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Confirmation"}),e.jsx("input",{type:"text",placeholder:'Type "DELETE"',value:r,onChange:i=>c(i.target.value),"aria-invalid":!!s.text}),s.text&&e.jsx("div",{className:"error",children:s.text})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Password"}),e.jsxs("div",{className:"pwd",children:[e.jsx("input",{type:n?"text":"password",placeholder:"Your password",value:o,onChange:i=>b(i.target.value),"aria-invalid":!!s.pwd}),e.jsx("button",{className:"eye",onClick:()=>v(i=>!i),type:"button","aria-label":n?"Hide password":"Show password",title:n?"Hide password":"Show password",children:n?e.jsx(V,{size:18}):e.jsx(B,{size:18})})]}),s.pwd&&e.jsx("div",{className:"error",children:s.pwd})]}),e.jsxs("ul",{className:"details",children:[e.jsxs("li",{children:["Type ",e.jsx("code",{children:"DELETE"})," exactly."]}),e.jsx("li",{children:"Password must be 6+ characters."})]})]}),e.jsxs("div",{className:"mFoot",children:[e.jsxs("button",{className:"btn ghost",onClick:u,children:[e.jsx(H,{size:18})," Cancel"]}),e.jsxs("button",{className:"btn danger",onClick:f,disabled:!m,title:m?"Delete now":"Complete the fields",children:[e.jsx(T,{size:18})," Delete"]})]})]})})}export{re as default};
