import{d as v,r as u,j as e,A as $}from"./index-ChsZnzdL.js";import{F as q,a as T,b as I,c as K,d as R,e as O}from"./index-Ctf2T99F.js";import{M as H,m as F}from"./proxy-DJIhAgXk.js";import{u as V}from"./use-motion-value-BRK4VQpR.js";import{u as U}from"./use-transform-Dt0KVTZr.js";const _=v.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 820px;
    margin: 0 auto;
    color: var(--text);
`,Y=v.header`
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
        align-items: center;
        gap: var(--space-4);
        flex-wrap: wrap;
    }

    /* Segmented toggle */
    .seg {
        display: inline-flex;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: 999px;
        padding: 4px;
        box-shadow: var(--shadow-sm);
    }
    .segBtn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        height: 32px;
        padding: 0 12px;
        border-radius: 999px;
        color: var(--text);
        background: transparent;
        border: 0;
        cursor: pointer;
    }
    .segBtn .count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 20px;
        height: 20px;
        border-radius: 999px;
        font-size: 12px;
        padding: 0 6px;
        background: var(--surface);
        color: var(--text);
        border: 1px solid var(--border);
    }
    /* Active: ensure high contrast on blue chip */
    .segBtn.active {
        background: var(--primary);
        color: #fff;
    }
    .segBtn.active .count {
        color: #fff; /* always readable on blue */
        border-color: transparent;
        background: rgba(255, 255, 255, 0.22);
    }
    @supports (color: color-mix(in oklab, white 22%, transparent)) {
        .segBtn.active .count {
            background: color-mix(in oklab, white 22%, transparent);
        }
    }

    .btn {
        height: 34px;
        padding: 0 12px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.ghost {
        background: var(--card);
    }
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`,G=v.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
`,J=v.li`
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;

    .bg {
        position: absolute;
        inset: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        pointer-events: none;
        background: var(--card);
    }
    .bg .left,
    .bg .right {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0 var(--space-6);
        color: var(--primary-contrast);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        opacity: 0; /* controlled by motion values */
        user-select: none;
    }
    .bg .left {
        justify-content: flex-start;
        background: hsl(0 80% 50% / 0.16);
    }
    .bg .right {
        justify-content: flex-end;
        background: hsl(160 70% 40% / 0.18);
    }

    .card {
        position: relative;
        z-index: 1;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        margin: var(--space-4);
        padding: var(--space-4);
        box-shadow: var(--shadow-sm);
        touch-action: pan-y; /* drag horizontally without jank */
        will-change: transform;
    }

    .meta {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 8px;
        align-items: baseline;
    }
    .from {
        color: var(--text);
    }
    .title {
        color: var(--text-muted);
        font-size: 12px;
    }
    .preview {
        color: var(--text);
        margin-top: 4px;
        opacity: 0.9;
    }

    .rowActions {
        margin-top: 10px;
        display: flex;
        gap: 10px;
    }
    .rowActions .act {
        height: 28px;
        padding: 0 10px;
        border-radius: 8px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        display: inline-flex;
        align-items: center;
        gap: 6px;
        cursor: pointer;
    }
    .rowActions .act.danger {
        color: hsl(0 75% 55%);
        border-color: color-mix(in oklab, hsl(0 75% 55%) 60%, var(--border));
    }

    .collapse {
        height: 0;
    }
`,Q=v.div`
    display: grid;
    place-items: center;
    padding: var(--space-8);
    color: var(--text-muted);
`,X=v.div`
    position: fixed;
    inset: 0;
    background: radial-gradient(
            600px 200px at 10% -10%,
            hsl(210 90% 56% / 0.12),
            transparent 50%
        ),
        hsl(0 0% 0% / 0.45);
    backdrop-filter: blur(2px);
    z-index: 1000;
`,Z=v.div`
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
    z-index: 1001;
    pointer-events: none; /* clicks pass through except on .panel */
    padding: var(--space-6);

    .panel {
        width: min(520px, calc(100% - 2 * var(--space-6)));
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        padding: var(--space-6);
        pointer-events: auto; /* interactive */
    }

    .head {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: var(--space-3);
    }

    .icon {
        width: 38px;
        height: 38px;
        border-radius: 10px;
        display: grid;
        place-items: center;
        background: hsl(0 80% 55% / 0.12);
        color: hsl(0 75% 55%);
        flex: 0 0 38px;
    }

    h3 {
        margin: 0;
        font-size: 18px;
        color: var(--text);
    }

    .body {
        color: var(--text);
        margin: var(--space-3) 0 var(--space-6);
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        gap: var(--space-3);
    }

    .btn {
        height: 34px;
        padding: 0 12px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.ghost {
        background: var(--card);
    }
    .btn.danger {
        background: hsl(0 75% 55%);
        border-color: hsl(0 75% 55%);
        color: #fff;
    }
`,ee=v.aside`
    color: var(--text-muted);
    h3 {
        color: var(--text);
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
    }
`,b={Wrapper:_,Header:Y,Stage:G,RowWrapper:J,Empty:Q,ModalBackdrop:X,ModalDialog:Z,Notes:ee},te=Array.from({length:10}).map((p,r)=>({id:`mail-${r+1}`,from:["Maya","Karan","Ishan","Priya","Leena","Ravi","Aditi","Aarav","Nisha","Kabir"][r%10],title:["Weekly status & next steps","Design handoff","Invoice reminder","Invitation: Product review","Campaign results"][r%5],preview:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus..."}));function ie(){const[p,r]=u.useState([]);return{stack:p,push:n=>r(l=>[n,...l].slice(0,12)),pop:()=>{let n=null;return r(l=>(n=l[0]||null,l.slice(1))),n}}}function le(){const[p,r]=u.useState(te),[h,x]=u.useState([]),[n,l]=u.useState([]),[a,g]=u.useState("inbox"),{stack:f,push:d,pop:M}=ie(),[j,D]=u.useState({open:!1,item:null}),y=(i,t,s)=>{const o=i.findIndex(m=>m.id===s);if(o===-1)return[null,i];const E=i[o],c=[...i.slice(0,o),...i.slice(o+1)];return t(c),[E,c]},S=i=>{const[t]=y(p,r,i);t&&(x(s=>[t,...s]),d({item:t,action:"archive",from:"inbox"}))},C=i=>{const[t]=y(h,x,i);t&&(r(s=>[t,...s]),d({item:t,action:"unarchive",from:"archive"}))},P=(i,t)=>{if(t==="inbox"){const[s]=y(p,r,i);if(!s)return;l(o=>[{item:s,from:"inbox"},...o]),d({item:s,action:"delete",from:"inbox"})}else if(t==="archive"){const[s]=y(h,x,i);if(!s)return;l(o=>[{item:s,from:"archive"},...o]),d({item:s,action:"delete",from:"archive"})}},z=i=>{const t=n.findIndex(o=>o.item.id===i);if(t===-1)return;const s=n[t];l(o=>[...o.slice(0,t),...o.slice(t+1)]),s.from==="inbox"?r(o=>[s.item,...o]):x(o=>[s.item,...o]),d({item:s.item,action:"undelete",from:"deleted",to:s.from})},w=i=>{const t=n.findIndex(o=>o.item.id===i);if(t===-1)return;const s=n[t];l(o=>[...o.slice(0,t),...o.slice(t+1)]),d({item:s.item,action:"purge",from:"deleted"})},k=i=>{const t=n.find(s=>s.item.id===i);t&&D({open:!0,item:t.item})},N=()=>{j.item&&w(j.item.id),D({open:!1,item:null})},L=()=>D({open:!1,item:null}),A=()=>{const i=M();if(!i)return;const{item:t,action:s,from:o,to:E}=i;s==="archive"?(x(c=>c.filter(m=>m.id!==t.id)),r(c=>[t,...c])):s==="unarchive"?(r(c=>c.filter(m=>m.id!==t.id)),x(c=>[t,...c])):s==="delete"?(l(c=>c.filter(m=>m.item.id!==t.id)),o==="inbox"?r(c=>[t,...c]):x(c=>[t,...c])):s==="undelete"?(E==="inbox"?r(c=>c.filter(m=>m.id!==t.id)):x(c=>c.filter(m=>m.id!==t.id)),l(c=>[{item:t,from:E},...c])):s==="purge"&&l(c=>[{item:t,from:"unknown"},...c])},B=u.useMemo(()=>a==="inbox"?p:a==="archive"?h:n,[a,p,h,n]);return e.jsx(H,{reducedMotion:"never",children:e.jsxs(b.Wrapper,{children:[e.jsxs(b.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Swipe to Archive"}),e.jsxs("p",{className:"muted",children:[a==="inbox"&&e.jsxs(e.Fragment,{children:["Drag right to ",e.jsx("b",{children:"Archive"}),", left to ",e.jsx("b",{children:"Delete"}),"."]}),a==="archive"&&e.jsxs(e.Fragment,{children:["Drag right to ",e.jsx("b",{children:"Unarchive"}),", left to ",e.jsx("b",{children:"Delete"}),"."]}),a==="deleted"&&e.jsxs(e.Fragment,{children:["Drag right to ",e.jsx("b",{children:"Restore"}),", left to ",e.jsx("b",{children:"Purge"}),"."]})]})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Actions",children:[e.jsxs("div",{className:"seg",children:[e.jsxs("button",{className:`segBtn ${a==="inbox"?"active":""}`,onClick:()=>g("inbox"),title:"Inbox",children:[e.jsx(q,{})," Inbox ",e.jsx("span",{className:"count",children:p.length})]}),e.jsxs("button",{className:`segBtn ${a==="archive"?"active":""}`,onClick:()=>g("archive"),title:"Archived",children:[e.jsx(T,{})," Archived ",e.jsx("span",{className:"count",children:h.length})]}),e.jsxs("button",{className:`segBtn ${a==="deleted"?"active":""}`,onClick:()=>g("deleted"),title:"Deleted",children:[e.jsx(I,{})," Deleted ",e.jsx("span",{className:"count",children:n.length})]})]}),e.jsxs("button",{className:"btn ghost",onClick:A,disabled:!f.length,title:"Undo last",children:[e.jsx(K,{style:{marginRight:6}})," Undo"]})]})]}),e.jsx(b.Stage,{children:e.jsxs($,{initial:!1,mode:"popLayout",children:[a!=="deleted"&&B.map(i=>e.jsx(W,{item:i,mode:a,onArchive:()=>S(i.id),onUnarchive:()=>C(i.id),onDelete:()=>P(i.id,a)},i.id)),a==="deleted"&&n.map(i=>e.jsx(W,{item:i.item,mode:"deleted",onRestore:()=>z(i.item.id),onPurgeAsk:()=>k(i.item.id)},i.item.id)),(a==="inbox"&&p.length===0||a==="archive"&&h.length===0||a==="deleted"&&n.length===0)&&e.jsx(b.Empty,{children:e.jsxs("p",{children:[a==="inbox"&&"Inbox is empty. Bliss.",a==="archive"&&"No archived items. Fresh as dew.",a==="deleted"&&"Trash is empty. Clean slate."]})},"empty")]})}),e.jsx(re,{open:j.open,title:"Permanently delete?",message:e.jsxs(e.Fragment,{children:["This will ",e.jsx("b",{children:"permanently"})," remove",j.item?` “${j.item.title}”`:" this item",". You can’t undo this later."]}),confirmLabel:"Delete permanently",onConfirm:N,onCancel:L}),e.jsxs(b.Notes,{children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Modal uses ",e.jsx("code",{children:"AnimatePresence"})," with springy scale/opacity."]}),e.jsx("li",{children:"Esc/backdrop close; Enter on primary button for quick keyboard flow."}),e.jsx("li",{children:"Undo still reverses purge by restoring the item back into Deleted."})]})]})]})})}function W({item:p,mode:r,onArchive:h,onUnarchive:x,onDelete:n,onRestore:l,onPurgeAsk:a}){const g=u.useRef(null),f=V(0),[d,M]=u.useState(120);u.useEffect(()=>{const w=g.current;if(!w)return;const k=()=>M(Math.max(90,w.clientWidth*.28));k();const N=new ResizeObserver(k);return N.observe(w),()=>N.disconnect()},[]);const j=U(f,[0,d],[0,1]),D=U(f,[-d,0],[1,0]),y=(w,k)=>{const{velocity:N,offset:L}=k,A=L.x,B=Math.abs(N.x)>500;if(A>d||B&&A>d*.6){r==="inbox"&&h&&h(),r==="archive"&&x&&x(),r==="deleted"&&l&&l();return}if(A<-d||B&&A<-d*.6){(r==="inbox"||r==="archive")&&n&&n(),r==="deleted"&&a&&a();return}},S=r==="inbox"?"Archive":r==="archive"?"Unarchive":"Restore",C=r==="inbox"?e.jsx(T,{}):r==="archive"?e.jsx(R,{}):e.jsx(R,{}),P=r==="deleted"?"Purge":"Delete",z=e.jsx(I,{});return e.jsxs(b.RowWrapper,{as:F.li,layout:!0,ref:g,initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:8,transition:{duration:.12}},children:[e.jsxs("div",{className:"bg",children:[e.jsxs("div",{className:"left",style:{opacity:D},children:[z,e.jsx("span",{children:P})]}),e.jsxs("div",{className:"right",style:{opacity:j},children:[C,e.jsx("span",{children:S})]})]}),e.jsxs(F.div,{className:"card",drag:"x",dragConstraints:{left:0,right:0},dragElastic:.2,style:{x:f},onDragEnd:y,whileTap:{scale:.98},transition:{type:"spring",stiffness:500,damping:40,mass:.8},children:[e.jsxs("div",{className:"meta",children:[e.jsx("b",{className:"from",children:p.from}),e.jsx("span",{className:"title",children:p.title})]}),e.jsx("p",{className:"preview",children:p.preview}),e.jsx("div",{className:"rowActions",children:r==="deleted"?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"act danger",onClick:a,title:"Purge",children:[e.jsx(I,{})," Purge"]}),e.jsxs("button",{className:"act",onClick:l,title:"Restore",children:[e.jsx(R,{})," Restore"]})]}):r==="inbox"?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"act danger",onClick:n,title:"Delete",children:[e.jsx(I,{})," Delete"]}),e.jsxs("button",{className:"act",onClick:h,title:"Archive",children:[e.jsx(T,{})," Archive"]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"act danger",onClick:n,title:"Delete",children:[e.jsx(I,{})," Delete"]}),e.jsxs("button",{className:"act",onClick:x,title:"Unarchive",children:[e.jsx(R,{})," Unarchive"]})]})})]}),e.jsx(F.div,{className:"collapse",initial:{height:"auto"},animate:{height:"auto"},exit:{height:0,margin:0,padding:0},transition:{duration:.18,ease:[.33,1,.68,1]}})]})}function re({open:p,title:r,message:h,confirmLabel:x,onConfirm:n,onCancel:l}){const a=u.useRef(null);return u.useEffect(()=>{if(!p)return;const g=requestAnimationFrame(()=>{var d;(d=a.current)==null||d.focus()}),f=d=>{d.key==="Escape"&&(l==null||l()),d.key==="Enter"&&document.activeElement===a.current&&(n==null||n())};return window.addEventListener("keydown",f),()=>{cancelAnimationFrame(g),window.removeEventListener("keydown",f)}},[p,l,n]),e.jsx($,{children:p&&e.jsxs(e.Fragment,{children:[e.jsx(b.ModalBackdrop,{as:F.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:l}),e.jsx(b.ModalDialog,{as:F.div,role:"dialog","aria-modal":"true","aria-labelledby":"purge-title",initial:{opacity:0,scale:.96,y:8},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.96,y:8},transition:{type:"spring",stiffness:380,damping:34},children:e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"head",children:[e.jsx("div",{className:"icon",children:e.jsx(O,{size:22})}),e.jsx("h3",{id:"purge-title",children:r})]}),e.jsx("div",{className:"body",children:h}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btn ghost",onClick:l,children:"Cancel"}),e.jsx("button",{className:"btn danger",ref:a,onClick:n,children:x||"Delete permanently"})]})]})})]})})}export{le as default};
