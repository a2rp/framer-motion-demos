import{d as C,r as t,j as e,A as f}from"./index-B-21U0DQ.js";import{M as ie,m as c}from"./proxy-BihD2B5F.js";const oe=C.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    color: var(--text);

    /* BULK TOOLBAR lives OUTSIDE Stage → style it here */
    .bulk {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: color-mix(in oklab, var(--card) 85%, var(--primary) 15%);
        box-shadow: var(--shadow-sm);
        /* keep it visually attached to table */
        margin-top: -6px;
        margin-bottom: 6px;
    }
    .bulk .label {
        font-weight: 600;
        margin-right: 6px;
    }

    /* Buttons inside bulk bar */
    .bulk .btn {
        height: 30px;
        padding: 0 12px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        transition: background 0.2s ease, border-color 0.2s ease,
            box-shadow 0.2s ease, transform 0.08s ease;
    }
    .bulk .btn:hover {
        background: color-mix(in oklab, var(--surface) 85%, var(--primary) 15%);
        box-shadow: 0 4px 12px hsl(0 0% 0% / 0.12);
    }
    .bulk .btn:active {
        transform: translateY(1px);
    }
    .bulk .btn:focus-visible {
        outline: none;
        box-shadow: var(--shadow-sm), var(--focus-ring);
    }

    /* Clear */
    .bulk .btn.ghost {
        background: var(--surface);
        color: var(--text);
        border-color: var(--border);
    }
    .bulk .btn.ghost:hover {
        background: color-mix(in oklab, var(--surface) 80%, var(--primary) 20%);
        border-color: color-mix(
            in oklab,
            var(--border) 70%,
            var(--primary) 30%
        );
    }

    /* Delete */
    .bulk .btn.danger {
        background: hsl(6 78% 57%);
        color: #fff;
        border-color: transparent;
    }
    .bulk .btn.danger:hover {
        background: color-mix(in oklab, hsl(6 78% 57%) 85%, white 15%);
    }
    .bulk .btn.danger:active {
        background: color-mix(in oklab, hsl(6 78% 57%) 90%, black 10%);
    }
    .bulk .btn.danger:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`,le=C.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);

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
        flex-wrap: wrap;
        align-items: center;
        gap: var(--space-4);
    }

    .search input {
        width: 260px;
        max-width: 60vw;
        height: 36px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--surface);
        color: var(--text);
        padding: 0 12px;
        outline: none;
    }

    .size {
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        column-gap: 8px;
    }
    .size label {
        font-size: 12px;
        color: var(--text-muted);
    }
    .size select {
        height: 36px;
        min-width: 84px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--surface);
        color: var(--text);
        padding: 0 10px;
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
`,ne=C.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    .thead .row.head {
        display: grid;
        grid-template-columns: 40px 1.1fr 1.4fr 0.9fr 0.9fr 0.9fr auto;
        gap: 6px;
        align-items: center;
        padding: 12px;
        border-bottom: 1px solid var(--border);
        background: var(--surface);
        color: var(--text-muted);
    }
    .thead .cell.chk {
        display: grid;
        place-items: center;
    }
    .thead .cell.sort {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 10px;
        border-radius: var(--radius-sm);
        background: transparent;
        border: 1px solid transparent;
        color: var(--text);
        cursor: pointer;
    }
    .thead .cell.sort:hover {
        border-color: var(--border);
        background: color-mix(in oklab, var(--surface) 92%, var(--primary) 8%);
    }
    .thead .cell.sort.active {
        color: var(--text);
        border-color: var(--border);
    }
    .thead .sortIcon {
        display: inline-grid;
        place-items: center;
    }

    .tbody .page {
        position: relative;
    }
    .tbody .rows {
        display: grid;
    }
    .tbody .row.body {
        display: grid;
        grid-template-columns: 40px 1.1fr 1.4fr 0.9fr 0.9fr 0.9fr auto;
        gap: 6px;
        align-items: center;
        padding: 12px;
        border-bottom: 1px solid var(--border);
    }
    .tbody .row.body:hover {
        background: color-mix(in oklab, var(--surface) 90%, var(--primary) 10%);
    }
    .tbody .row.body.is-selected {
        background: color-mix(in oklab, var(--surface) 80%, var(--primary) 20%);
    }

    .cell {
        min-width: 0;
    }
    .cell b {
        display: block;
    }
    .cell .sub {
        color: var(--text-muted);
        font-size: 12px;
    }
    .cell.actions {
        display: inline-flex;
        gap: 8px;
        justify-content: flex-end;
    }
    .cell.actions .btn.sm {
        height: 30px;
        padding: 0 10px;
        border-radius: var(--radius-sm);
        background: var(--surface);
        color: var(--text);
        border: 1px solid var(--border);
        cursor: pointer;
    }

    .pill {
        display: inline-flex;
        align-items: center;
        height: 24px;
        padding: 0 10px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 600;
        border: 1px solid var(--border);
        background: var(--surface);
    }
    .pill.active {
        background: hsl(142 72% 28% / 0.12);
        color: hsl(142 70% 45%);
        border-color: hsl(142 40% 35% / 0.25);
    }
    .pill.invited {
        background: hsl(210 90% 56% / 0.12);
        color: hsl(210 90% 50%);
        border-color: hsl(210 60% 45% / 0.25);
    }
    .pill.suspended {
        background: hsl(6 78% 57% / 0.12);
        color: hsl(6 78% 50%);
        border-color: hsl(6 60% 45% / 0.25);
    }

    .empty {
        padding: 28px;
        color: var(--text-muted);
    }

    .tfoot .pager {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 12px;
        gap: 10px;
        border-top: 1px solid var(--border);
        background: var(--surface);
    }
    .tfoot .pager .btn {
        height: 34px;
        padding: 0 12px;
        border-radius: var(--radius-sm);
        background: var(--card);
        color: var(--text);
        border: 1px solid var(--border);
        cursor: pointer;
    }
    .tfoot .pager .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    .tfoot .pageInfo {
        color: var(--text-muted);
    }
`;C.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 40;
    border: 1px solid var(--border);
    background: var(--card);
    color: var(--text);
    padding: 10px 14px;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
`;const F=C.div`
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
        display: grid;
        gap: 12px;
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
        height: 36px;
        padding: 0 14px;
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
        background: var(--surface);
    }
    .btn.danger {
        background: hsl(6 78% 57%);
        border-color: transparent;
        color: white;
    }

    .field {
        display: grid;
        gap: 6px;
    }
    .field.hasErr input,
    .field.hasErr select {
        border-color: hsl(6 78% 57%);
    }
    .field label {
        font-size: 12px;
        color: var(--text-muted);
    }
    .field input,
    .field select {
        height: 36px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--surface);
        color: var(--text);
        padding: 0 12px;
        outline: none;
    }
    .field .err {
        color: hsl(6 78% 57%);
        font-size: 12px;
    }

    .grid2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-4);
    }
    .withEye .eyeWrap {
        position: relative;
    }
    .withEye input {
        padding-right: 34px;
    }
    .withEye .eyeBtn {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        width: 28px;
        height: 28px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        border-radius: 8px;
        background: var(--card);
        cursor: pointer;
        color: var(--text);
    }

    .kv {
        display: grid;
        grid-template-columns: 120px 1fr;
        column-gap: 12px;
        row-gap: 8px;
        align-items: center;
    }
    .kv dt {
        color: var(--text-muted);
        font-size: 12px;
    }
    .kv dd {
        margin: 0;
    }

    @media (width < 640px) {
        .grid2 {
            grid-template-columns: 1fr;
        }
        .kv {
            grid-template-columns: 1fr;
        }
    }
`,V={Wrapper:oe,Header:le,Stage:ne},M=["Admin","Manager","Editor","Viewer"],P=["Active","Invited","Suspended"],W=(()=>{let l=1e3;return()=>++l})();function de(l=57){const y=["Ava","Noah","Liam","Mia","Ivy","Zara","Leo","Aria","Evan","Nina","Theo","Emma"],b=["Patel","Khan","Sharma","Singh","Das","Roy","Mehta","Kapoor","Gupta","Bose","Joshi","Nair"],S=[];for(let n=0;n<l;n++){const z=`${y[n%y.length]} ${b[n*7%b.length]}`,x=`${z.toLowerCase().replace(/\s+/g,".")}@example.com`,E=M[(n*5+3)%M.length],T=P[(n*11+2)%P.length],j=new Date(Date.now()-(n+1)*864e5);S.push({id:W(),name:z,email:x,role:E,status:T,createdAt:j})}return S}const ce=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,pe=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,he=({dir:l})=>e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",children:[e.jsx("path",{fill:"currentColor",d:"M7 14l5 5 5-5H7z",opacity:l==="asc"?.25:1}),e.jsx("path",{fill:"currentColor",d:"M7 10l5-5 5 5H7z",opacity:l==="desc"?.25:1})]}),q=l=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",...l,children:e.jsx("path",{fill:"currentColor",d:"M12 5c5 0 9.27 3.11 10.78 7.5C21.27 16.89 17 20 12 20s-9.27-3.11-10.78-7.5C2.73 8.11 7 5 12 5zm0 2C8.03 7 4.53 9.28 3.1 12.5 4.53 15.72 8.03 18 12 18s7.47-2.28 8.9-5.5C19.47 9.28 15.97 7 12 7zm0 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"})}),K=l=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",...l,children:e.jsx("path",{fill:"currentColor",d:"M2 4.27L3.28 3 21 20.72 19.73 22l-3.1-3.1A10.52 10.52 0 0112 20C7 20 2.73 16.89 1.22 12.5c.78-2.26 2.36-4.17 4.37-5.5L2 4.27zM7.12 9.4a3.5 3.5 0 004.48 4.48l-4.48-4.48zM12 7c1 0 1.94.24 2.77.66l-1.5 1.5A3.5 3.5 0 008.84 13l-1.5 1.5A8.46 8.46 0 013.1 12.5C4.53 9.28 8.03 7 12 7zm8.9 5.5c-.57 1.29-1.49 2.43-2.64 3.35L16.77 14a6.5 6.5 0 00.37-2 6.5 6.5 0 00-.74-3l1.26-1.26c1.55.98 2.79 2.33 3.24 3.76z"})});function xe(){const[l,y]=t.useState(()=>de()),[b,S]=t.useState(""),[n,z]=t.useState("createdAt"),[x,E]=t.useState("desc"),[T,j]=t.useState(0),[g,Y]=t.useState(10),[m,w]=t.useState(()=>new Set),[Z,L]=t.useState(!1),[G,A]=t.useState(!1),[J,I]=t.useState(!1),[p,Q]=t.useState(null),[D,k]=t.useState(""),[r,u]=t.useState({name:"",email:"",role:"Viewer",status:"Invited",password:"",confirm:"",showPass:!1,showConfirm:!1}),[i,R]=t.useState({}),O=t.useMemo(()=>{const a=b.trim().toLowerCase();return a?l.filter(s=>s.name.toLowerCase().includes(a)||s.email.toLowerCase().includes(a)||s.role.toLowerCase().includes(a)||s.status.toLowerCase().includes(a)):l},[l,b]),B=t.useMemo(()=>{const a=O.slice();return a.sort((s,o)=>{let d=s[n],h=o[n];return d instanceof Date&&(d=d.getTime()),h instanceof Date&&(h=h.getTime()),typeof d=="string"&&(d=d.toLowerCase()),typeof h=="string"&&(h=h.toLowerCase()),d<h?x==="asc"?-1:1:d>h?x==="asc"?1:-1:0}),a},[O,n,x]),$=Math.max(1,Math.ceil(B.length/g)),v=Math.min(T,$-1),N=t.useMemo(()=>{const a=v*g;return B.slice(a,a+g)},[B,v,g]);t.useEffect(()=>{j(0)},[b,g]);const X=a=>{w(s=>{const o=new Set(s);return o.has(a)?o.delete(a):o.add(a),o})},_=()=>{const a=N.map(o=>o.id),s=a.every(o=>m.has(o));w(o=>{const d=new Set(o);return a.forEach(h=>s?d.delete(h):d.add(h)),d})},ee=a=>{z(s=>(E(s===a?o=>o==="asc"?"desc":"asc":"asc"),a))},ae=()=>{const a={};return(!r.name||r.name.trim().length<2)&&(a.name="Please enter at least 2 characters."),ce.test(r.email)||(a.email="Please enter a valid email."),M.includes(r.role)||(a.role="Select a valid role."),P.includes(r.status)||(a.status="Select a valid status."),pe.test(r.password)||(a.password="Min 8 chars with at least 1 letter and 1 number."),r.confirm!==r.password&&(a.confirm="Passwords do not match."),R(a),Object.keys(a).length===0},U=a=>{if(a.preventDefault(),!ae())return;const s={id:W(),name:r.name.trim(),email:r.email.trim().toLowerCase(),role:r.role,status:r.status,createdAt:new Date};y(o=>[s,...o]),L(!1),u({name:"",email:"",role:"Viewer",status:"Invited",password:"",confirm:"",showPass:!1,showConfirm:!1}),R({}),k("User added")},re=()=>{y(a=>a.filter(s=>!m.has(s.id))),w(new Set),A(!1),k("Deleted selected")},se=a=>{Q(a),I(!0)},H=t.useRef(0);t.useEffect(()=>{if(D)return clearTimeout(H.current),H.current=setTimeout(()=>k(""),1600),()=>clearTimeout(H.current)},[D]);const te=`${v}-${g}-${n}-${x}`;return e.jsx(ie,{reducedMotion:"never",children:e.jsxs(V.Wrapper,{children:[e.jsxs(V.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Paged Table Transition"}),e.jsx("p",{className:"muted",children:"Professional data grid with springy page swaps, sorting, search, bulk actions, and an add-user modal."})]}),e.jsxs("div",{className:"controls",role:"toolbar",children:[e.jsx("div",{className:"search",children:e.jsx("input",{type:"search",placeholder:"Search name, email, role, status…",value:b,onChange:a=>S(a.target.value),"aria-label":"Search users"})}),e.jsxs("div",{className:"size",children:[e.jsx("label",{children:"Rows"}),e.jsx("select",{value:g,onChange:a=>Y(parseInt(a.target.value,10)),"aria-label":"Rows per page",children:[10,20,30].map(a=>e.jsx("option",{value:a,children:a},a))})]}),e.jsx("button",{className:"btn primary",onClick:()=>L(!0),children:"+ Add User"})]})]}),e.jsx(f,{initial:!1,children:m.size>0&&e.jsxs(c.div,{className:"bulk",initial:{y:-12,opacity:0},animate:{y:0,opacity:1},exit:{y:-8,opacity:0},transition:{duration:.22,ease:[.22,1,.36,1]},children:[e.jsxs("span",{className:"label",children:[m.size," selected"]}),e.jsx("button",{className:"btn ghost",onClick:()=>w(new Set),children:"Clear"}),e.jsx("button",{className:"btn danger",onClick:()=>A(!0),children:"Delete"})]})}),e.jsxs(V.Stage,{children:[e.jsx("div",{className:"thead",role:"rowgroup",children:e.jsxs("div",{className:"row head",role:"row",children:[e.jsx("div",{className:"cell chk",role:"columnheader","aria-label":"Select all",children:e.jsx("input",{type:"checkbox",checked:N.length>0&&N.every(a=>m.has(a.id)),onChange:_,"aria-label":"Toggle all rows on this page"})}),[{key:"name",label:"Name"},{key:"email",label:"Email"},{key:"role",label:"Role"},{key:"status",label:"Status"},{key:"createdAt",label:"Created"}].map(a=>e.jsxs("button",{className:`cell sort ${n===a.key?"active":""}`,role:"columnheader",onClick:()=>ee(a.key),title:`Sort by ${a.label}`,children:[e.jsx("span",{children:a.label}),e.jsx(c.span,{className:"sortIcon",animate:{rotate:n===a.key&&x==="desc"?180:0},transition:{duration:.18},children:e.jsx(he,{dir:x})})]},a.key)),e.jsx("div",{className:"cell actions headOnly",role:"columnheader",children:"Actions"})]})}),e.jsx("div",{className:"tbody",role:"rowgroup",children:e.jsx(f,{mode:"wait",initial:!1,children:e.jsxs(c.div,{className:"page",initial:{y:12,opacity:0},animate:{y:0,opacity:1,transition:{duration:.26,ease:[.22,1,.36,1]}},exit:{y:-12,opacity:0,transition:{duration:.2}},children:[e.jsx(c.div,{className:"rows",initial:"init",animate:"show",variants:{show:{transition:{staggerChildren:.035}}},children:N.map(a=>e.jsxs(c.div,{className:`row body ${m.has(a.id)?"is-selected":""}`,variants:{init:{opacity:0,y:10},show:{opacity:1,y:0,transition:{duration:.22,ease:[.2,.8,.2,1]}}},layout:!0,role:"row",children:[e.jsx("div",{className:"cell chk",role:"gridcell",children:e.jsx("input",{type:"checkbox",checked:m.has(a.id),onChange:()=>X(a.id),"aria-label":`Select ${a.name}`})}),e.jsxs("div",{className:"cell name",role:"gridcell",children:[e.jsx("b",{children:a.name}),e.jsx("span",{className:"sub",children:a.email})]}),e.jsx("div",{className:"cell email",role:"gridcell",children:a.email}),e.jsx("div",{className:"cell role",role:"gridcell",children:a.role}),e.jsx("div",{className:"cell status",role:"gridcell",children:e.jsx("span",{className:`pill ${a.status.toLowerCase()}`,children:a.status})}),e.jsx("div",{className:"cell created",role:"gridcell",children:new Intl.DateTimeFormat("en-IN",{year:"numeric",month:"short",day:"2-digit"}).format(a.createdAt)}),e.jsxs("div",{className:"cell actions",role:"gridcell",children:[e.jsx("button",{className:"btn ghost sm",onClick:()=>se(a),children:"View"}),e.jsx("button",{className:"btn ghost sm",onClick:()=>{w(new Set([a.id])),A(!0)},children:"Delete"})]})]},a.id))}),N.length===0&&e.jsx("div",{className:"empty",children:"No results. Try adjusting your search or filters."})]},te)})}),e.jsx("div",{className:"tfoot",role:"rowgroup",children:e.jsxs("div",{className:"pager",children:[e.jsx("button",{className:"btn",onClick:()=>j(a=>Math.max(0,a-1)),disabled:v===0,title:"Previous page",children:"← Prev"}),e.jsxs("div",{className:"pageInfo",children:["Page ",e.jsx("b",{children:v+1})," of ",e.jsx("b",{children:$})]}),e.jsx("button",{className:"btn",onClick:()=>j(a=>Math.min($-1,a+1)),disabled:v>=$-1,title:"Next page",children:"Next →"})]})})]}),e.jsx(f,{children:D&&e.jsx(c.div,{className:"toast",initial:{y:16,opacity:0},animate:{y:0,opacity:1},exit:{y:8,opacity:0},transition:{duration:.22},children:D})}),e.jsx(f,{children:J&&p&&e.jsx(F,{as:c.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onMouseDown:a=>{a.target===a.currentTarget&&I(!1)},children:e.jsxs(c.div,{className:"modal",initial:{y:20,scale:.98,opacity:0},animate:{y:0,scale:1,opacity:1,transition:{type:"spring",stiffness:300,damping:28}},exit:{y:10,opacity:0,transition:{duration:.18}},role:"dialog","aria-modal":"true","aria-labelledby":"view-user-title",children:[e.jsx("div",{className:"mHead",children:e.jsx("h3",{id:"view-user-title",children:"User Details"})}),e.jsx("div",{className:"mBody",children:e.jsxs("div",{className:"kv",children:[e.jsxs("div",{className:"section",children:[e.jsx("dt",{children:"ID"}),e.jsx("dd",{children:e.jsx("code",{children:p.id})})]}),e.jsxs("div",{className:"section",children:[e.jsx("dt",{children:"Name"}),e.jsx("dd",{children:p.name})]}),e.jsxs("div",{className:"section",children:[e.jsx("dt",{children:"Email"}),e.jsx("dd",{children:e.jsx("a",{href:`mailto:${p.email}`,children:p.email})})]}),e.jsxs("div",{className:"section",children:[e.jsx("dt",{children:"Role"}),e.jsx("dd",{children:p.role})]}),e.jsxs("div",{className:"section",children:[e.jsx("dt",{children:"Status"}),e.jsx("dd",{children:e.jsx("span",{className:`pill ${p.status.toLowerCase()}`,children:p.status})})]}),e.jsxs("div",{className:"section",children:[e.jsx("dt",{children:"Created"}),e.jsx("dd",{children:new Intl.DateTimeFormat("en-IN",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(p.createdAt)})]})]})}),e.jsxs("div",{className:"mFoot",children:[e.jsx("button",{className:"btn ghost",onClick:()=>I(!1),children:"Close"}),e.jsx("button",{className:"btn primary",onClick:async()=>{try{await navigator.clipboard.writeText(`${p.name} <${p.email}>`),k("Copied contact")}catch{k("Copy failed")}},children:"Copy Contact"})]})]})})}),e.jsx(f,{children:Z&&e.jsx(F,{as:c.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(c.div,{className:"modal",initial:{y:20,scale:.98,opacity:0},animate:{y:0,scale:1,opacity:1,transition:{type:"spring",stiffness:300,damping:28}},exit:{y:10,opacity:0,transition:{duration:.18}},role:"dialog","aria-modal":"true","aria-labelledby":"add-user-title",children:[e.jsx("div",{className:"mHead",children:e.jsx("h3",{id:"add-user-title",children:"Add User"})}),e.jsxs("form",{className:"mBody",onSubmit:U,noValidate:!0,children:[e.jsxs("div",{className:`field ${i.name?"hasErr":""}`,children:[e.jsx("label",{children:"Name"}),e.jsx("input",{type:"text",value:r.name,onChange:a=>u({...r,name:a.target.value}),placeholder:"Full name",required:!0}),i.name&&e.jsx("span",{className:"err",children:i.name})]}),e.jsxs("div",{className:`field ${i.email?"hasErr":""}`,children:[e.jsx("label",{children:"Email"}),e.jsx("input",{type:"email",value:r.email,onChange:a=>u({...r,email:a.target.value}),placeholder:"name@example.com",required:!0}),i.email&&e.jsx("span",{className:"err",children:i.email})]}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:`field ${i.role?"hasErr":""}`,children:[e.jsx("label",{children:"Role"}),e.jsx("select",{value:r.role,onChange:a=>u({...r,role:a.target.value}),children:M.map(a=>e.jsx("option",{value:a,children:a},a))}),i.role&&e.jsx("span",{className:"err",children:i.role})]}),e.jsxs("div",{className:`field ${i.status?"hasErr":""}`,children:[e.jsx("label",{children:"Status"}),e.jsx("select",{value:r.status,onChange:a=>u({...r,status:a.target.value}),children:P.map(a=>e.jsx("option",{value:a,children:a},a))}),i.status&&e.jsx("span",{className:"err",children:i.status})]})]}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:`field withEye ${i.password?"hasErr":""}`,children:[e.jsx("label",{children:"Password"}),e.jsxs("div",{className:"eyeWrap",children:[e.jsx("input",{type:r.showPass?"text":"password",value:r.password,onChange:a=>u({...r,password:a.target.value}),placeholder:"••••••••",required:!0}),e.jsx("button",{type:"button",className:"eyeBtn",onClick:()=>u({...r,showPass:!r.showPass}),"aria-label":r.showPass?"Hide password":"Show password",children:r.showPass?e.jsx(K,{}):e.jsx(q,{})})]}),i.password&&e.jsx("span",{className:"err",children:i.password})]}),e.jsxs("div",{className:`field withEye ${i.confirm?"hasErr":""}`,children:[e.jsx("label",{children:"Confirm Password"}),e.jsxs("div",{className:"eyeWrap",children:[e.jsx("input",{type:r.showConfirm?"text":"password",value:r.confirm,onChange:a=>u({...r,confirm:a.target.value}),placeholder:"••••••••",required:!0}),e.jsx("button",{type:"button",className:"eyeBtn",onClick:()=>u({...r,showConfirm:!r.showConfirm}),"aria-label":r.showConfirm?"Hide confirmation":"Show confirmation",children:r.showConfirm?e.jsx(K,{}):e.jsx(q,{})})]}),i.confirm&&e.jsx("span",{className:"err",children:i.confirm})]})]})]}),e.jsxs("div",{className:"mFoot",children:[e.jsx("button",{className:"btn ghost",onClick:()=>{L(!1),R({})},children:"Cancel"}),e.jsx("button",{className:"btn primary",onClick:U,children:"Save"})]})]})})}),e.jsx(f,{children:G&&e.jsx(F,{as:c.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(c.div,{className:"modal",initial:{y:20,scale:.98,opacity:0},animate:{y:0,scale:1,opacity:1,transition:{type:"spring",stiffness:300,damping:28}},exit:{y:10,opacity:0,transition:{duration:.18}},role:"dialog","aria-modal":"true","aria-labelledby":"del-title",children:[e.jsx("div",{className:"mHead",children:e.jsx("h3",{id:"del-title",children:"Delete users?"})}),e.jsxs("div",{className:"mBody",children:[e.jsxs("p",{className:"muted",children:["You’re about to delete ",e.jsx("b",{children:m.size})," user(s). This action cannot be undone."]}),e.jsx("ul",{className:"details",children:[...m].map(a=>{const s=l.find(o=>o.id===a);return s?e.jsxs("li",{children:[s.name," <",s.email,">"]},a):null})})]}),e.jsxs("div",{className:"mFoot",children:[e.jsx("button",{className:"btn ghost",onClick:()=>A(!1),children:"Cancel"}),e.jsx("button",{className:"btn danger",onClick:re,children:"Delete"})]})]})})})]})})}export{xe as default};
