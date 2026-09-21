import{d as u,r as s,j as e,A as I}from"./index-Cf_T-Gf1.js";import{M as oe,m as i}from"./proxy-DKYKL-ar.js";const ne=u.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1100px;
    margin: 0 auto;
    color: var(--text);
`,de=u.header`
    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`,le=u.section`
    position: relative;
    min-height: 80px;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(0deg, hsl(0 0% 100% / 0.02), transparent),
            repeating-linear-gradient(
                90deg,
                hsl(0 0% 0% / 0.04) 0 1px,
                transparent 1px 40px
            ),
            repeating-linear-gradient(
                0deg,
                hsl(0 0% 0% / 0.04) 0 1px,
                transparent 1px 40px
            );
        pointer-events: none;
    }

    .fab {
        position: absolute;
        right: 20px;
        bottom: 20px;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 12px 16px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        outline: none;
        font-weight: 600;
    }
    .fab .label {
        display: inline;
    }
    @media (width < 560px) {
        .fab .label {
            display: none;
        }
    }

    .sentPill {
        position: absolute;
        right: 20px;
        bottom: 74px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: var(--surface);
        color: var(--text);
        border: 1px solid var(--border);
        border-radius: 999px;
        padding: 6px 10px;
        box-shadow: var(--shadow-sm);
        pointer-events: none;
    }

    .overlay {
        position: fixed;
        inset: 0;
        z-index: 40;
        background: color-mix(in oklab, var(--bg) 40%, #0000);
        backdrop-filter: blur(8px) saturate(1.05);
    }
`,ce=u.div`
    position: fixed;
    inset: 0;
    z-index: 50;
    background: color-mix(in oklab, var(--bg) 40%, #0000);
    backdrop-filter: blur(8px) saturate(1.1);
    display: grid;
    place-items: center;
    padding: var(--space-6);

    .modal {
        width: min(720px, 96vw);
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
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }
    .mFoot {
        border-bottom: none;
        border-top: 1px solid var(--border);
        justify-content: flex-end;
        gap: 10px;
    }
    .mBody {
        padding: 16px;
        display: grid;
        gap: var(--space-4);
    }
    .mHead h3 {
        font-size: 18px;
    }
    .title .muted {
        color: var(--text-muted);
    }

    .iconBtn {
        width: 34px;
        height: 34px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-md);
        cursor: pointer;
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
    .btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .btn .spinner {
        width: 16px;
        height: 16px;
        border-radius: 999px;
        border: 2px solid hsl(0 0% 100% / 0.4);
        border-top-color: var(--primary-contrast);
        animation: spin 0.8s linear infinite;
    }
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    .twoCol {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-4);
    }
    @media (width < 720px) {
        .twoCol {
            grid-template-columns: 1fr;
        }
    }

    .field {
        display: grid;
        gap: 6px;
    }
    .field label {
        font-size: 12px;
        color: var(--text-muted);
    }
    .field input[type="text"],
    .field input[type="password"],
    .field input[type="file"],
    .field textarea {
        width: 100%;
        min-height: 36px;
        padding: 8px 10px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        outline: none;
    }
    .field textarea {
        resize: vertical;
    }
    .field input[aria-invalid="true"],
    .field textarea[aria-invalid="true"] {
        border-color: hsl(3 90% 62%);
        box-shadow: 0 0 0 3px hsl(3 90% 62% / 0.15);
    }
    .error {
        color: hsl(3 90% 62%);
        font-size: 12px;
    }
    .hint {
        color: var(--text-muted);
        font-size: 12px;
    }

    .attach {
        align-self: start;
    }
    .attachRow {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .attachBtn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 6px 10px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        cursor: pointer;
    }
    .attach input[type="file"] {
        display: none;
    }
    .attach .meta {
        color: var(--text-muted);
        font-size: 12px;
    }
    .fileList {
        margin: 6px 0 0 0;
        padding-left: 18px;
        display: grid;
        gap: 4px;
    }
    .fileList li {
        display: flex;
        gap: 8px;
        color: var(--text);
    }
    .fileList .size {
        color: var(--text-muted);
    }

    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .checkbox {
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .checkbox input {
        width: 16px;
        height: 16px;
    }

    .protect {
        display: grid;
        gap: 10px;
        align-content: start;
    }
    .pwRow {
        display: grid;
        gap: 6px;
    }
    .pwWrap {
        position: relative;
        display: grid;
    }
    .pwWrap .iconBtn.eye {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        background: var(--card);
    }
`,pe=u.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    .muted {
        color: var(--text-muted);
    }
    .btn {
        height: 34px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`,he=u.div`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);

    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space-4);

    @media (width < 980px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (width < 640px) {
        grid-template-columns: 1fr;
    }

    .empty {
        grid-column: 1 / -1;
        color: var(--text-muted);
    }

    .card {
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--surface);
        box-shadow: var(--shadow-sm);
        color: var(--text);
        display: grid;
        gap: 10px;
        padding: var(--space-4);
    }
    .cHead {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        align-items: baseline;
    }
    .cHead h3 {
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .cHead .date {
        color: var(--text-muted);
        font-size: 12px;
        white-space: nowrap;
    }

    .chips {
        gap: 8px;
        display: flex;
        flex-wrap: wrap;
    }
    .chip {
        border: 1px solid var(--border);
        background: var(--card);
        border-radius: 999px;
        padding: 2px 8px;
        font-size: 12px;
        color: var(--text);
    }
    .chip.more {
        color: var(--text-muted);
    }

    .snippet {
        color: var(--text);
        opacity: 0.9;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    }
    .badges {
        display: inline-flex;
        gap: 8px;
        flex-wrap: wrap;
    }
    .badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: 999px;
        padding: 2px 8px;
        font-size: 12px;
    }
    .badge.lock {
        background: hsl(210 90% 56% / 0.1);
    }
    .badge.attach {
        background: hsl(210 90% 56% / 0.06);
    }

    .iconBtn.danger {
        width: 32px;
        height: 32px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        background: var(--surface);
        color: hsl(3 90% 62%);
        border-radius: var(--radius-md);
        cursor: pointer;
    }
`,me=u.div`
    position: fixed;
    inset: 0;
    z-index: 60; /* above compose modal */
    background: color-mix(in oklab, var(--bg) 40%, #0000);
    backdrop-filter: blur(8px) saturate(1.1);
    display: grid;
    place-items: center;
    padding: var(--space-6);

    .modal {
        width: min(480px, 96vw);
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
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }
    .mFoot {
        border-bottom: none;
        border-top: 1px solid var(--border);
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
    .btn.ghost {
        background: var(--surface);
    }
    .btn.danger {
        background: hsl(3 90% 58%);
        color: #fff;
        border-color: transparent;
    }
`,x={Wrapper:ne,Header:de,Stage:le,ModalOverlay:ce,SentHeader:pe,SentGrid:he,ConfirmOverlay:me},xe=t=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",...t,children:e.jsx("path",{fill:"currentColor",d:"M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"})}),ue=t=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",...t,children:e.jsx("path",{fill:"currentColor",d:"M3.4 20.4l17.2-8.4L3.4 3.6l-.4 6.7 10.3 1.7-10.3 1.7.4 6.7z"})}),ge=t=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",...t,children:e.jsx("path",{fill:"currentColor",d:"M18.3 5.7L12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3 10.6 10.6 16.9 4.3z"})}),be=t=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",...t,children:e.jsx("path",{fill:"currentColor",d:"M7 13.5V7a5 5 0 0 1 10 0v6.5a3.5 3.5 0 1 1-7 0V7h2v6.5a1.5 1.5 0 1 0 3 0V7a3 3 0 0 0-6 0v6.5a5.5 5.5 0 1 0 11 0V7h2v6.5a7.5 7.5 0 1 1-15 0z"})}),fe=t=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",...t,children:e.jsx("path",{fill:"currentColor",d:"M12 5c5.5 0 10 4.5 10 7s-4.5 7-10 7S2 14.5 2 12s4.5-7 10-7zm0 2C7.6 7 4.2 10 4.2 12S7.6 17 12 17s7.8-3 7.8-5S16.4 7 12 7zm0 2.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5z"})}),ve=t=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",...t,children:e.jsx("path",{fill:"currentColor",d:"M2 3.3 3.3 2 22 20.7 20.7 22l-3.5-3.5A12.5 12.5 0 0 1 12 19C6.5 19 2 14.5 2 12a9.7 9.7 0 0 1 3.5-5.8L2 3.3zM7.2 8.5 9 10.3a2.5 2.5 0 0 0 3.2 3.2l1.8 1.8a4.5 4.5 0 0 1-6.8-6.8zM12 5c5.5 0 10 4.5 10 7 0 1.2-.8 2.8-2.1 4.3l-1.4-1.4c.8-1 1.5-2.1 1.5-2.9 0-2-3.4-5-7.8-5-1 0-2 .2-2.9.5L7.7 5.1A12.2 12.2 0 0 1 12 5z"})}),ye=t=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",...t,children:e.jsx("path",{fill:"currentColor",d:"M9.2 16.6L4.6 12l1.4-1.4 3.2 3.2 8.8-8.8 1.4 1.4z"})}),je=t=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":!0,focusable:"false",...t,children:e.jsx("path",{fill:"currentColor",d:"M9 3h6l1 2h5v2H3V5h5l1-2zm1 6h2v9h-2V9zm4 0h2v9h-2V9zM7 9h2v9H7V9z"})}),we=/^[^\s@]+@[^\s@]+\.[^\s@]+$/i,Z=t=>t.split(/[,\s]+/).map(l=>l.trim()).filter(Boolean),X="fm_fab_compose_sent_v1",Ne=t=>{try{const l=new Date(t);return new Intl.DateTimeFormat("en-IN",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:"Asia/Kolkata"}).format(l)}catch{return t}};function ke({to:t,subject:l,message:M,protect:N,password:m,files:g}){const n={},y=Z(t);if(y.length===0?n.to="At least one recipient required.":y.some(c=>!we.test(c))&&(n.to="One or more emails are invalid."),l.trim()||(n.subject="Subject is required."),M.trim().length<10&&(n.message="Message should be at least 10 characters."),N&&(m?m.length<6&&(n.password="Min 6 characters."):n.password="Password required."),g&&g.length>3&&(n.files="Max 3 attachments."),g){for(const c of g)if(c.size>2*1024*1024){n.files="Each file must be ≤ 2MB.";break}}return n}function ze(){const[t,l]=s.useState(!1),[M,N]=s.useState(!1),[m,g]=s.useState(""),[n,y]=s.useState(""),[c,T]=s.useState(""),[b,L]=s.useState([]),[j,P]=s.useState(!1),[B,O]=s.useState(""),[F,R]=s.useState(!1),[p,f]=s.useState({}),[v,V]=s.useState(!1),[w,k]=s.useState([]),[d,A]=s.useState({open:!1,mode:null,id:null}),D=s.useId(),W=s.useId(),K=s.useId(),E=s.useId(),_=s.useId(),q=s.useRef(null),H=s.useRef([]);s.useEffect(()=>{try{const a=localStorage.getItem(X);a&&k(JSON.parse(a))}catch{}},[]),s.useEffect(()=>{try{localStorage.setItem(X,JSON.stringify(w))}catch{}},[w]);const G=s.useMemo(()=>({to:m,subject:n,message:c,files:b,protect:j,password:B}),[m,n,c,b,j,B]),o=s.useMemo(()=>ke(G),[G]),$=Object.keys(o).length===0,Q=()=>l(!0),C=()=>{v||l(!1)};s.useEffect(()=>{if(!t)return;const a=requestAnimationFrame(()=>{var h;return(h=q.current)==null?void 0:h.focus()}),r=h=>{h.key==="Escape"&&C()};return window.addEventListener("keydown",r),()=>{cancelAnimationFrame(a),window.removeEventListener("keydown",r)}},[t]),s.useEffect(()=>()=>H.current.forEach(clearTimeout),[]);const U=a=>{const r=Array.from(a.target.files||[]);L(r),f(h=>({...h,files:!0}))},ee=async()=>{f({to:!0,subject:!0,message:!0,password:!0,files:!0}),$&&(V(!0),H.current.push(setTimeout(()=>{V(!1),l(!1),N(!0);const a={id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,date:new Date().toISOString(),to:Z(m),subject:n.trim(),message:c.trim(),protect:!!j,attachments:(b||[]).slice(0,3).map(r=>({name:r.name,size:r.size}))};k(r=>[a,...r]),y(""),T(""),L([]),P(!1),O(""),R(!1),H.current.push(setTimeout(()=>N(!1),1800))},1100)))},ae=a=>A({open:!0,mode:"delete",id:a}),se=()=>A({open:!0,mode:"clearAll",id:null}),S=()=>A({open:!1,mode:null,id:null}),te=()=>{d.mode==="delete"&&d.id&&k(a=>a.filter(r=>r.id!==d.id)),d.mode==="clearAll"&&k([]),S()};s.useEffect(()=>{if(!d.open)return;const a=r=>{r.key==="Escape"&&S()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[d.open]);const J={type:"spring",stiffness:380,damping:32,mass:.8},Y={duration:.22,ease:[.22,1,.36,1]},re={hidden:{opacity:0,y:6},show:{opacity:1,y:0,transition:{staggerChildren:.04,delayChildren:.02}}},z={hidden:{opacity:0,y:6},show:{opacity:1,y:0}};return e.jsx(oe,{reducedMotion:"never",children:e.jsxs(x.Wrapper,{children:[e.jsx(x.Header,{children:e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"FAB → Compose Morph"}),e.jsxs("p",{className:"muted",children:["Floating action button morphs into a compose card using a shared ",e.jsx("code",{children:"layoutId"}),". Includes validation, attachments, optional password with eye toggle, and a polished send flow."]})]})}),e.jsxs(x.Stage,{children:[e.jsxs(i.button,{type:"button",className:"fab",layoutId:"compose",onClick:Q,whileHover:{scale:1.06},whileTap:{scale:.98},transition:J,"aria-label":"Compose message",children:[e.jsx(xe,{}),e.jsx("span",{className:"label",children:"Compose"})]}),e.jsx(I,{children:M&&e.jsxs(i.div,{className:"sentPill",initial:{opacity:0,y:10,scale:.98},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.98},transition:{duration:.28,ease:[.22,1,.36,1]},children:[e.jsx(ye,{})," Sent"]})}),e.jsx(I,{children:t&&e.jsx(i.div,{className:"overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:Y,onClick:a=>{a.currentTarget===a.target&&C()},"aria-hidden":"true",children:e.jsx(x.ModalOverlay,{as:i.div,layout:!0,children:e.jsxs(i.div,{className:"modal",layoutId:"compose",transition:J,children:[e.jsxs("div",{className:"mHead",children:[e.jsxs("div",{className:"title",children:[e.jsx("h3",{children:"New Message"}),e.jsx("p",{className:"muted",children:"All fields with * are mandatory."})]}),e.jsx("button",{className:"iconBtn",onClick:C,"aria-label":"Close",children:e.jsx(ge,{})})]}),e.jsxs(i.div,{className:"mBody",variants:re,initial:"hidden",animate:"show",children:[e.jsxs(i.div,{className:"field",variants:z,children:[e.jsx("label",{htmlFor:D,children:"To*"}),e.jsx("input",{id:D,ref:q,type:"text",placeholder:"name@example.com, other@domain.com",value:m,onChange:a=>g(a.target.value),onBlur:()=>f(a=>({...a,to:!0})),"aria-invalid":!!(p.to&&o.to)}),p.to&&o.to&&e.jsx("div",{className:"error",children:o.to}),e.jsx("div",{className:"hint",children:"Separate multiple emails with comma or space."})]}),e.jsxs(i.div,{className:"twoCol",variants:z,children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:W,children:"Subject*"}),e.jsx("input",{id:W,type:"text",placeholder:"Subject",value:n,onChange:a=>y(a.target.value),onBlur:()=>f(a=>({...a,subject:!0})),"aria-invalid":!!(p.subject&&o.subject)}),p.subject&&o.subject&&e.jsx("div",{className:"error",children:o.subject})]}),e.jsxs("div",{className:"field attach",children:[e.jsx("label",{htmlFor:E,children:"Attachments"}),e.jsxs("div",{className:"attachRow",children:[e.jsxs("label",{className:"attachBtn",htmlFor:E,children:[e.jsx(be,{})," Add files"]}),e.jsx("input",{id:E,type:"file",multiple:!0,onChange:U}),e.jsxs("span",{className:"meta",children:[b.length," selected (max 3, ≤ 2MB each)"]})]}),p.files&&o.files&&e.jsx("div",{className:"error",children:o.files}),b.length>0&&e.jsx("ul",{className:"fileList",children:b.map((a,r)=>e.jsxs("li",{children:[e.jsx("span",{className:"name",children:a.name}),e.jsxs("span",{className:"size",children:[(a.size/1024).toFixed(0)," KB"]})]},r))})]})]}),e.jsxs(i.div,{className:"field",variants:z,children:[e.jsx("label",{htmlFor:K,children:"Message*"}),e.jsx("textarea",{id:K,rows:6,placeholder:"Write your message…",value:c,onChange:a=>T(a.target.value),onBlur:()=>f(a=>({...a,message:!0})),"aria-invalid":!!(p.message&&o.message)}),e.jsx("div",{className:"row",children:p.message&&o.message?e.jsx("div",{className:"error",children:o.message}):e.jsxs("div",{className:"hint",children:[c.trim().length,"/10"]})})]}),e.jsxs(i.div,{className:"protect",variants:z,children:[e.jsxs("label",{className:"checkbox",children:[e.jsx("input",{type:"checkbox",checked:j,onChange:a=>P(a.target.checked)}),e.jsx("span",{children:"Protect with password"})]}),j&&e.jsx("div",{className:"pwRow",children:e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:_,children:"Password*"}),e.jsxs("div",{className:"pwWrap",children:[e.jsx("input",{id:_,type:F?"text":"password",placeholder:"Min 6 characters",value:B,onChange:a=>O(a.target.value),onBlur:()=>f(a=>({...a,password:!0})),"aria-invalid":!!(p.password&&o.password)}),e.jsx("button",{type:"button",className:"iconBtn eye","aria-label":F?"Hide password":"Show password",onClick:()=>R(a=>!a),children:F?e.jsx(ve,{}):e.jsx(fe,{})})]}),p.password&&o.password&&e.jsx("div",{className:"error",children:o.password})]})})]})]}),e.jsxs("div",{className:"mFoot",children:[e.jsx("button",{className:"btn ghost",onClick:C,disabled:v,children:"Cancel"}),e.jsxs(i.button,{className:"btn primary",onClick:ee,disabled:!$||v,whileTap:{scale:.98},animate:v?{scale:.98}:{scale:1},transition:{type:"spring",stiffness:400,damping:28},children:[e.jsx("span",{className:"icon",children:v?e.jsx("span",{className:"spinner","aria-hidden":!0}):e.jsx(ue,{})}),e.jsx("span",{children:v?"Sending…":"Send"})]})]})]})})})})]}),e.jsxs(x.SentHeader,{children:[e.jsxs("div",{className:"left",children:[e.jsx("h2",{children:"Sent Items"}),e.jsx("p",{className:"muted",children:"Messages you’ve sent are saved offline (localStorage)."})]}),e.jsx("div",{className:"right",children:e.jsx("button",{className:"btn ghost",onClick:se,disabled:w.length===0,children:"Clear All"})})]}),e.jsx(x.SentGrid,{as:i.div,layout:!0,children:e.jsx(I,{initial:!1,children:w.length===0?e.jsx(i.div,{className:"empty",initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:8},transition:{duration:.25},children:"No sent messages yet. Compose one using the FAB."},"empty"):w.map(a=>{var r;return e.jsxs(i.article,{className:"card",layout:!0,initial:{opacity:0,scale:.98,y:6},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.98,y:6},transition:{duration:.25},children:[e.jsxs("header",{className:"cHead",children:[e.jsx("h3",{title:a.subject||"(no subject)",children:a.subject||"(no subject)"}),e.jsx("time",{className:"date",dateTime:a.date,children:Ne(a.date)})]}),e.jsxs("div",{className:"row chips",children:[a.to.slice(0,3).map((h,ie)=>e.jsx("span",{className:"chip",title:h,children:h},ie)),a.to.length>3&&e.jsxs("span",{className:"chip more",children:["+",a.to.length-3," more"]})]}),e.jsx("p",{className:"snippet",children:a.message}),e.jsxs("div",{className:"row meta",children:[e.jsxs("div",{className:"badges",children:[a.protect&&e.jsx("span",{className:"badge lock",children:"🔒 Protected"}),((r=a.attachments)==null?void 0:r.length)>0&&e.jsxs("span",{className:"badge attach",children:["📎 ",a.attachments.length," file(s)"]})]}),e.jsx("button",{className:"iconBtn danger",onClick:()=>ae(a.id),"aria-label":"Delete",children:e.jsx(je,{})})]})]},a.id)})})}),e.jsx(I,{children:d.open&&e.jsx(x.ConfirmOverlay,{as:i.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:Y,onClick:a=>{a.currentTarget===a.target&&S()},children:e.jsxs(i.div,{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title","aria-describedby":"confirm-desc",initial:{scale:.96,opacity:0,y:8},animate:{scale:1,opacity:1,y:0},exit:{scale:.98,opacity:0,y:8},transition:{duration:.2,ease:[.22,1,.36,1]},children:[e.jsx("div",{className:"mHead",children:e.jsx("h3",{id:"confirm-title",children:d.mode==="delete"?"Delete message?":"Clear all sent items?"})}),e.jsx("div",{className:"mBody",children:e.jsx("p",{id:"confirm-desc",className:"muted",children:d.mode==="delete"?"This will permanently remove the selected message from Sent Items.":"This will permanently remove all messages from Sent Items."})}),e.jsxs("div",{className:"mFoot",children:[e.jsx("button",{className:"btn ghost",onClick:S,children:"Cancel"}),e.jsx("button",{className:"btn danger",onClick:te,children:d.mode==="delete"?"Delete":"Clear All"})]})]})})})]})})}export{ze as default};
