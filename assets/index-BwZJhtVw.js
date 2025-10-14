import{d as h,r as n,j as e,A as k}from"./index-BybwJ5J0.js";import{M as X,m as c}from"./proxy-CWA0aJAx.js";const $=h.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    color: var(--text);
`,_=h.header`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--space-4);
    flex-wrap: wrap;

    h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }

    .right {
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
    .ctrl select {
        min-width: 140px;
        height: 34px;
        padding: 0 10px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--surface);
        color: var(--text);
    }

    .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        height: 34px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        background: var(--card);
        color: var(--text);
    }
    .btn span {
        font-weight: 600;
        letter-spacing: 0.2px;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn.ghost {
        background: var(--surface);
    }
`,T=h.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    padding: var(--space-4);

    /* ghost line */
    .ghostLine {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--primary);
        box-shadow: 0 0 0 3px hsl(210 90% 56% / 0.18);
        z-index: 10;
        pointer-events: none;
    }
    .widthChip {
        position: absolute;
        top: 8px;
        transform: translateX(-50%);
        background: var(--card);
        color: var(--text);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        padding: 4px 8px;
        font-size: 12px;
        z-index: 11;
        white-space: nowrap;
    }

    .tableWrap {
        overflow: auto;
        border-radius: var(--radius-md);
    }

    table.table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        table-layout: fixed;
        color: var(--text);
    }
    thead tr {
        background: var(--surface);
    }
    tbody tr:nth-child(even) {
        background: color-mix(in oklab, var(--surface) 70%, transparent);
    }

    th.th,
    td.td {
        border-bottom: 1px solid var(--border);
        padding: 0; /* we'll manage inner paddings for density control */
        vertical-align: middle;
    }

    .th .thInner {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 8px 10px 12px;
    }
    .th .label {
        font-weight: 600;
        letter-spacing: 0.2px;
        user-select: none;
    }

    /* resize handle */
    .resizeHandle {
        position: absolute;
        top: 0;
        right: -2px;
        bottom: 0;
        width: 12px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: col-resize;
        background: transparent;
        border: 0;
        padding: 0;
        outline: none;
        opacity: 0.55;
    }
    .resizeHandle:hover,
    .resizeHandle:focus {
        opacity: 1;
    }
    .resizeHandle.active {
        opacity: 1;
    }
    .resizeHandle .grip {
        width: 2px;
        height: 20px;
        background: var(--border);
        border-radius: 2px;
    }

    /* cells */
    .td {
        padding: 0;
    }
    .td .cellTxt {
        display: block;
        padding: var(--cell-pad-y) 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .badge {
        display: inline-flex;
        align-items: center;
        height: 22px;
        padding: 0 8px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 600;
        margin: 4px 0 4px 12px;
        user-select: none;
        border: 1px solid var(--border);
        background: var(--surface);
    }
    .badge.ok {
        color: #1b8a3a;
        border-color: #1b8a3a33;
        background: #1b8a3a12;
    }
    .badge.warn {
        color: #8a6c1b;
        border-color: #8a6c1b33;
        background: #8a6c1b12;
    }
    .badge.danger {
        color: #8a1b2b;
        border-color: #8a1b2b33;
        background: #8a1b2b12;
    }

    /* density */
    &[data-density="comfort"] {
        --cell-pad-y: 12px;
    }
    &[data-density="compact"] {
        --cell-pad-y: 6px;
    }

    .footNotes {
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--text-muted);
        padding: 8px 4px 0 4px;
        font-size: 12px;
    }
    .footNotes .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--primary);
        display: inline-block;
        margin-right: 4px;
    }
    .footNotes .sp {
        width: 10px;
        display: inline-block;
    }
`,F=h.div`
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
        color: var(--text-muted);
        margin-top: 10px;
    }

    .field {
        display: grid;
        gap: 6px;
        margin-bottom: 10px;
    }
    .field span {
        font-size: 12px;
        color: var(--text-muted);
    }

    .pwdWrap {
        position: relative;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--surface);
    }
    .pwdWrap input {
        height: 36px;
        padding: 0 10px;
        color: var(--text);
        background: transparent;
        border: none;
        outline: none;
    }
    .pwdWrap .eyeBtn {
        height: 30px;
        width: 36px;
        margin-right: 4px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-sm);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-grid;
        place-items: center;
    }
    .pwdWrap.err {
        border-color: hsl(0 80% 60%);
    }
    .errMsg {
        color: hsl(0 80% 68%);
        font-size: 12px;
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
`,m={Wrapper:$,Header:_,Stage:T,ModalOverlay:F},W="et_column_widths_v1",P=(s,i,o)=>Math.min(Math.max(s,i),o),N=s=>`${Math.round(s)}px`,S=[{key:"id",label:"ID",min:80,max:180,width:100},{key:"name",label:"Name",min:160,max:420,width:240},{key:"email",label:"Email",min:220,max:520,width:320},{key:"role",label:"Role",min:140,max:320,width:180},{key:"team",label:"Team",min:140,max:360,width:180},{key:"status",label:"Status",min:120,max:220,width:140}],U=Array.from({length:12}).map((s,i)=>({id:1e3+i,name:["Anika Shah","Ravi Patel","Meera Singh","Kabir Rao","Ishita Nair","Neeraj Kulkarni"][i%6],email:`user${i}@example.com`,role:["Engineer","Designer","PM","QA","DevOps"][i%5],team:["Core","UI","Mobile","Ops","Data"][i%5],status:i%3===0?"Active":i%3===1?"Pending":"Suspended"})),G=s=>e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":!0,...s,children:e.jsx("path",{fill:"currentColor",d:"M10 2h4l1 3 3 1v4l-3 1-1 3h-4l-1-3-3-1V6l3-1 1-3zm2 12a4 4 0 100-8 4 4 0 000 8z"})}),q=s=>e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":!0,...s,children:e.jsx("path",{fill:"currentColor",d:"M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12a5 5 0 110-10 5 5 0 010 10z"})}),J=s=>e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":!0,...s,children:e.jsx("path",{fill:"currentColor",d:"M2 5.27L3.28 4 20 20.72 18.73 22l-2.61-2.61A10.94 10.94 0 0112 21C5 21 2 14 2 14s.87-1.93 2.56-3.93L2 7.73 3.27 6.5 5.7 8.93C7.69 7.69 9.78 7 12 7c7 0 10 7 10 7a12.26 12.26 0 01-5.1 5.67l-1.5-1.5A9.66 9.66 0 0020 14s-3-7-8-7c-1.8 0-3.43.46-4.86 1.26L6.5 9.62a5 5 0 006.88 6.88l-1.76-1.76a3 3 0 01-3.98-3.98L2 5.27z"})});function Z(){const[s,i]=n.useState("comfort"),[o,x]=n.useState(!1),[z,C]=n.useState(""),[u,M]=n.useState(!1),[g,b]=n.useState(""),[p,L]=n.useState(()=>{try{const a=JSON.parse(localStorage.getItem(W)||"null");if(a&&Array.isArray(a)&&a.length===S.length)return S.map((t,r)=>({...t,width:a[r].width??t.width}))}catch{}return S}),[d,v]=n.useState({active:!1,key:null,startX:0,startW:0,containerLeft:0,x:0}),A=n.useRef(null);n.useEffect(()=>{const a=p.map(({key:t,width:r})=>({key:t,width:r}));try{localStorage.setItem(W,JSON.stringify(a))}catch{}},[p]);const R=(a,t)=>{a.preventDefault(),a.stopPropagation();const r=A.current.getBoundingClientRect();v({active:!0,key:t.key,startX:a.clientX,startW:t.width,containerLeft:r.left,x:a.clientX-r.left}),window.addEventListener("mousemove",D,{passive:!1}),window.addEventListener("mouseup",E,{passive:!0})},D=a=>{a.preventDefault(),v(t=>{if(!t.active)return t;const r=p.find(w=>w.key===t.key);if(!r)return t;const y=a.clientX-t.startX,f=P(t.startW+y,r.min,r.max),l=a.clientX-t.containerLeft;return L(w=>w.map(j=>j.key===r.key?{...j,width:f}:j)),{...t,x:l}})},E=()=>{v(a=>({...a,active:!1})),window.removeEventListener("mousemove",D),window.removeEventListener("mouseup",E)},H=(a,t)=>{const r=a.shiftKey?10:2;if(a.key==="ArrowRight"||a.key==="ArrowLeft"){a.preventDefault();const y=a.key==="ArrowRight"?r:-r;L(f=>f.map(l=>l.key===t.key?{...l,width:P(l.width+y,l.min,l.max)}:l))}},O=()=>{C(""),b(""),M(!1),x(!0)},I=()=>x(!1),B=a=>{if(a==null||a.preventDefault(),z.trim().length<6){b("Password must be at least 6 characters.");return}b(""),x(!1)},K=s==="comfort"?"Comfort":"Compact";return e.jsx(X,{reducedMotion:"never",children:e.jsxs(m.Wrapper,{children:[e.jsxs(m.Header,{children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Column Resize — Ghost Line"}),e.jsx("p",{className:"muted",children:"Drag handles to resize. Ghost line follows the pointer. Widths persist locally. Keyboard: ←/→ (Shift for ×5)."})]}),e.jsxs("div",{className:"right",role:"toolbar","aria-label":"Table tools",children:[e.jsx("div",{className:"density",children:e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Density"}),e.jsxs("select",{value:s,onChange:a=>i(a.target.value),children:[e.jsx("option",{value:"comfort",children:"Comfort"}),e.jsx("option",{value:"compact",children:"Compact"})]})]})}),e.jsxs("button",{className:"btn primary",onClick:O,title:"Settings",children:[e.jsx(G,{}),e.jsx("span",{children:"Settings"})]})]})]}),e.jsxs(m.Stage,{ref:A,"data-density":s,children:[e.jsx(k,{children:d.active&&e.jsx(c.div,{className:"ghostLine",initial:{opacity:0,x:d.x},animate:{opacity:1,x:d.x},exit:{opacity:0},transition:{type:"spring",stiffness:500,damping:40,mass:.6}},"ghost")}),e.jsx(k,{children:d.active&&e.jsx(c.div,{className:"widthChip",initial:{opacity:0,y:-8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.18},style:{left:N(d.x+8)},children:(()=>{const a=p.find(t=>t.key===d.key);return a?`${Math.round(a.width)}px`:""})()},"chip")}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{className:"table",role:"table","aria-label":"Enterprise table with resizable columns",children:[e.jsx("thead",{children:e.jsx("tr",{children:p.map(a=>e.jsx(c.th,{className:"th",style:{width:N(a.width)},transition:{layout:{type:"spring",stiffness:400,damping:36,mass:.7}},layout:!0,children:e.jsxs("div",{className:"thInner",children:[e.jsx("span",{className:"label",children:a.label}),e.jsx(c.button,{type:"button","aria-label":`Resize column ${a.label}`,"aria-valuemin":a.min,"aria-valuemax":a.max,"aria-valuenow":Math.round(a.width),role:"slider",className:`resizeHandle${d.key===a.key&&d.active?" active":""}`,onMouseDown:t=>R(t,a),onKeyDown:t=>H(t,a),children:e.jsx("span",{className:"grip"})})]})},a.key))})}),e.jsx("tbody",{children:U.map((a,t)=>e.jsx("tr",{className:"tr",children:p.map(r=>e.jsx(c.td,{className:"td",style:{width:N(r.width)},layout:!0,transition:{layout:{type:"spring",stiffness:400,damping:36,mass:.7}},children:e.jsx(Q,{col:r,row:a})},r.key))},a.id))})]})}),e.jsxs("div",{className:"footNotes",children:[e.jsx("span",{className:"dot"})," Density: ",e.jsx("b",{children:K})," •",e.jsx("span",{className:"sp"})," Saved locally •",e.jsx("span",{className:"sp"})," Keyboard resize supported"]})]}),e.jsx(k,{children:o&&e.jsx(m.ModalOverlay,{as:c.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(c.div,{className:"modal",initial:{y:12,scale:.98,opacity:0},animate:{y:0,scale:1,opacity:1},exit:{y:8,scale:.98,opacity:0},transition:{type:"spring",stiffness:420,damping:32,mass:.7},role:"dialog","aria-modal":"true","aria-labelledby":"settings-title",children:[e.jsx("div",{className:"mHead",children:e.jsx("h3",{id:"settings-title",children:"Settings"})}),e.jsxs("form",{className:"mBody",onSubmit:B,children:[e.jsx("p",{className:"muted",children:"Admin confirmation required for unlocking advanced options."}),e.jsxs("label",{className:"field",children:[e.jsx("span",{children:"Admin Password"}),e.jsxs("div",{className:`pwdWrap ${g?"err":""}`,children:[e.jsx("input",{type:u?"text":"password",value:z,onChange:a=>C(a.target.value),placeholder:"Enter password",minLength:6,required:!0}),e.jsx("button",{type:"button",className:"eyeBtn","aria-label":u?"Hide password":"Show password",onClick:()=>M(a=>!a),children:u?e.jsx(J,{}):e.jsx(q,{})})]}),g&&e.jsx("div",{className:"errMsg",children:g})]}),e.jsxs("ul",{className:"details",children:[e.jsx("li",{children:"Min length: 6 characters."}),e.jsx("li",{children:"Password never leaves your device in this demo."})]}),e.jsxs("div",{className:"mFoot",children:[e.jsx("button",{type:"button",className:"btn ghost",onClick:I,children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn primary",children:"Confirm"})]})]})]})})})]})})}function Q({col:s,row:i}){const o=i[s.key];if(s.key==="status"){const x=o==="Active"?"ok":o==="Pending"?"warn":"danger";return e.jsx("span",{className:`badge ${x}`,children:o})}return e.jsx("span",{className:"cellTxt",children:String(o)})}export{Z as default};
