import{d as b,G as A,r as u,j as e,A as V}from"./index-CdN9zR5x.js";import{M as $,m as M}from"./proxy-Cg-EgVc2.js";import{u as q}from"./use-motion-value-Dhz9y7o8.js";import{u as U}from"./use-transform-KubEnx-7.js";const K=b.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 820px;
    margin: 0 auto;
    color: var(--text);
`,O=b.header`
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
`,G=b.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
`,_=b.li`
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
`,Y=b.div`
    display: grid;
    place-items: center;
    padding: var(--space-8);
    color: var(--text-muted);
`,J=b.div`
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
`,Q=b.div`
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
`,X=b.aside`
    color: var(--text-muted);
    h3 {
        color: var(--text);
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
    }
`,v={Wrapper:K,Header:O,Stage:G,RowWrapper:_,Empty:Y,ModalBackdrop:J,ModalDialog:Q,Notes:X};function Z(n){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(n)}function T(n){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"21 8 21 21 3 21 3 8"},child:[]},{tag:"rect",attr:{x:"1",y:"3",width:"22",height:"5"},child:[]},{tag:"line",attr:{x1:"10",y1:"12",x2:"14",y2:"12"},child:[]}]})(n)}function F(n){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 14 4 9 9 4"},child:[]},{tag:"path",attr:{d:"M20 20v-7a4 4 0 0 0-4-4H4"},child:[]}]})(n)}function ee(n){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(n)}function te(n){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"1 4 1 10 7 10"},child:[]},{tag:"path",attr:{d:"M3.51 15a9 9 0 1 0 2.13-9.36L1 10"},child:[]}]})(n)}function I(n){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(n)}const ie=Array.from({length:10}).map((n,r)=>({id:`mail-${r+1}`,from:["Maya","Karan","Ishan","Priya","Leena","Ravi","Aditi","Aarav","Nisha","Kabir"][r%10],title:["Weekly status & next steps","Design handoff","Invoice reminder","Invitation: Product review","Campaign results"][r%5],preview:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus..."}));function re(){const[n,r]=u.useState([]);return{stack:n,push:o=>r(d=>[o,...d].slice(0,12)),pop:()=>{let o=null;return r(d=>(o=d[0]||null,d.slice(1))),o}}}function ce(){const[n,r]=u.useState(ie),[x,h]=u.useState([]),[o,d]=u.useState([]),[s,m]=u.useState("inbox"),{stack:f,push:p,pop:E}=re(),[y,B]=u.useState({open:!1,item:null}),j=(i,t,a)=>{const l=i.findIndex(g=>g.id===a);if(l===-1)return[null,i];const D=i[l],c=[...i.slice(0,l),...i.slice(l+1)];return t(c),[D,c]},R=i=>{const[t]=j(n,r,i);t&&(h(a=>[t,...a]),p({item:t,action:"archive",from:"inbox"}))},S=i=>{const[t]=j(x,h,i);t&&(r(a=>[t,...a]),p({item:t,action:"unarchive",from:"archive"}))},z=(i,t)=>{if(t==="inbox"){const[a]=j(n,r,i);if(!a)return;d(l=>[{item:a,from:"inbox"},...l]),p({item:a,action:"delete",from:"inbox"})}else if(t==="archive"){const[a]=j(x,h,i);if(!a)return;d(l=>[{item:a,from:"archive"},...l]),p({item:a,action:"delete",from:"archive"})}},P=i=>{const t=o.findIndex(l=>l.item.id===i);if(t===-1)return;const a=o[t];d(l=>[...l.slice(0,t),...l.slice(t+1)]),a.from==="inbox"?r(l=>[a.item,...l]):h(l=>[a.item,...l]),p({item:a.item,action:"undelete",from:"deleted",to:a.from})},k=i=>{const t=o.findIndex(l=>l.item.id===i);if(t===-1)return;const a=o[t];d(l=>[...l.slice(0,t),...l.slice(t+1)]),p({item:a.item,action:"purge",from:"deleted"})},w=i=>{const t=o.find(a=>a.item.id===i);t&&B({open:!0,item:t.item})},N=()=>{y.item&&k(y.item.id),B({open:!1,item:null})},W=()=>B({open:!1,item:null}),L=()=>{const i=E();if(!i)return;const{item:t,action:a,from:l,to:D}=i;a==="archive"?(h(c=>c.filter(g=>g.id!==t.id)),r(c=>[t,...c])):a==="unarchive"?(r(c=>c.filter(g=>g.id!==t.id)),h(c=>[t,...c])):a==="delete"?(d(c=>c.filter(g=>g.item.id!==t.id)),l==="inbox"?r(c=>[t,...c]):h(c=>[t,...c])):a==="undelete"?(D==="inbox"?r(c=>c.filter(g=>g.id!==t.id)):h(c=>c.filter(g=>g.id!==t.id)),d(c=>[{item:t,from:D},...c])):a==="purge"&&d(c=>[{item:t,from:"unknown"},...c])},C=u.useMemo(()=>s==="inbox"?n:s==="archive"?x:o,[s,n,x,o]);return e.jsx($,{reducedMotion:"never",children:e.jsxs(v.Wrapper,{children:[e.jsxs(v.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Swipe to Archive"}),e.jsxs("p",{className:"muted",children:[s==="inbox"&&e.jsxs(e.Fragment,{children:["Drag right to ",e.jsx("b",{children:"Archive"}),", left to ",e.jsx("b",{children:"Delete"}),"."]}),s==="archive"&&e.jsxs(e.Fragment,{children:["Drag right to ",e.jsx("b",{children:"Unarchive"}),", left to ",e.jsx("b",{children:"Delete"}),"."]}),s==="deleted"&&e.jsxs(e.Fragment,{children:["Drag right to ",e.jsx("b",{children:"Restore"}),", left to ",e.jsx("b",{children:"Purge"}),"."]})]})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Actions",children:[e.jsxs("div",{className:"seg",children:[e.jsxs("button",{className:`segBtn ${s==="inbox"?"active":""}`,onClick:()=>m("inbox"),title:"Inbox",children:[e.jsx(ee,{})," Inbox ",e.jsx("span",{className:"count",children:n.length})]}),e.jsxs("button",{className:`segBtn ${s==="archive"?"active":""}`,onClick:()=>m("archive"),title:"Archived",children:[e.jsx(T,{})," Archived ",e.jsx("span",{className:"count",children:x.length})]}),e.jsxs("button",{className:`segBtn ${s==="deleted"?"active":""}`,onClick:()=>m("deleted"),title:"Deleted",children:[e.jsx(I,{})," Deleted ",e.jsx("span",{className:"count",children:o.length})]})]}),e.jsxs("button",{className:"btn ghost",onClick:L,disabled:!f.length,title:"Undo last",children:[e.jsx(te,{style:{marginRight:6}})," Undo"]})]})]}),e.jsx(v.Stage,{children:e.jsxs(V,{initial:!1,mode:"popLayout",children:[s!=="deleted"&&C.map(i=>e.jsx(H,{item:i,mode:s,onArchive:()=>R(i.id),onUnarchive:()=>S(i.id),onDelete:()=>z(i.id,s)},i.id)),s==="deleted"&&o.map(i=>e.jsx(H,{item:i.item,mode:"deleted",onRestore:()=>P(i.item.id),onPurgeAsk:()=>w(i.item.id)},i.item.id)),(s==="inbox"&&n.length===0||s==="archive"&&x.length===0||s==="deleted"&&o.length===0)&&e.jsx(v.Empty,{children:e.jsxs("p",{children:[s==="inbox"&&"Inbox is empty. Bliss.",s==="archive"&&"No archived items. Fresh as dew.",s==="deleted"&&"Trash is empty. Clean slate."]})},"empty")]})}),e.jsx(ne,{open:y.open,title:"Permanently delete?",message:e.jsxs(e.Fragment,{children:["This will ",e.jsx("b",{children:"permanently"})," remove",y.item?` “${y.item.title}”`:" this item",". You can’t undo this later."]}),confirmLabel:"Delete permanently",onConfirm:N,onCancel:W}),e.jsxs(v.Notes,{children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Modal uses ",e.jsx("code",{children:"AnimatePresence"})," with springy scale/opacity."]}),e.jsx("li",{children:"Esc/backdrop close; Enter on primary button for quick keyboard flow."}),e.jsx("li",{children:"Undo still reverses purge by restoring the item back into Deleted."})]})]})]})})}function H({item:n,mode:r,onArchive:x,onUnarchive:h,onDelete:o,onRestore:d,onPurgeAsk:s}){const m=u.useRef(null),f=q(0),[p,E]=u.useState(120);u.useEffect(()=>{const k=m.current;if(!k)return;const w=()=>E(Math.max(90,k.clientWidth*.28));w();const N=new ResizeObserver(w);return N.observe(k),()=>N.disconnect()},[]);const y=U(f,[0,p],[0,1]),B=U(f,[-p,0],[1,0]),j=(k,w)=>{const{velocity:N,offset:W}=w,L=W.x,C=Math.abs(N.x)>500;if(L>p||C&&L>p*.6){r==="inbox"&&x&&x(),r==="archive"&&h&&h(),r==="deleted"&&d&&d();return}if(L<-p||C&&L<-p*.6){(r==="inbox"||r==="archive")&&o&&o(),r==="deleted"&&s&&s();return}},R=r==="inbox"?"Archive":r==="archive"?"Unarchive":"Restore",S=r==="inbox"?e.jsx(T,{}):r==="archive"?e.jsx(F,{}):e.jsx(F,{}),z=r==="deleted"?"Purge":"Delete",P=e.jsx(I,{});return e.jsxs(v.RowWrapper,{as:M.li,layout:!0,ref:m,initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:8,transition:{duration:.12}},children:[e.jsxs("div",{className:"bg",children:[e.jsxs("div",{className:"left",style:{opacity:B},children:[P,e.jsx("span",{children:z})]}),e.jsxs("div",{className:"right",style:{opacity:y},children:[S,e.jsx("span",{children:R})]})]}),e.jsxs(M.div,{className:"card",drag:"x",dragConstraints:{left:0,right:0},dragElastic:.2,style:{x:f},onDragEnd:j,whileTap:{scale:.98},transition:{type:"spring",stiffness:500,damping:40,mass:.8},children:[e.jsxs("div",{className:"meta",children:[e.jsx("b",{className:"from",children:n.from}),e.jsx("span",{className:"title",children:n.title})]}),e.jsx("p",{className:"preview",children:n.preview}),e.jsx("div",{className:"rowActions",children:r==="deleted"?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"act danger",onClick:s,title:"Purge",children:[e.jsx(I,{})," Purge"]}),e.jsxs("button",{className:"act",onClick:d,title:"Restore",children:[e.jsx(F,{})," Restore"]})]}):r==="inbox"?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"act danger",onClick:o,title:"Delete",children:[e.jsx(I,{})," Delete"]}),e.jsxs("button",{className:"act",onClick:x,title:"Archive",children:[e.jsx(T,{})," Archive"]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"act danger",onClick:o,title:"Delete",children:[e.jsx(I,{})," Delete"]}),e.jsxs("button",{className:"act",onClick:h,title:"Unarchive",children:[e.jsx(F,{})," Unarchive"]})]})})]}),e.jsx(M.div,{className:"collapse",initial:{height:"auto"},animate:{height:"auto"},exit:{height:0,margin:0,padding:0},transition:{duration:.18,ease:[.33,1,.68,1]}})]})}function ne({open:n,title:r,message:x,confirmLabel:h,onConfirm:o,onCancel:d}){const s=u.useRef(null);return u.useEffect(()=>{if(!n)return;const m=requestAnimationFrame(()=>{var p;(p=s.current)==null||p.focus()}),f=p=>{p.key==="Escape"&&(d==null||d()),p.key==="Enter"&&document.activeElement===s.current&&(o==null||o())};return window.addEventListener("keydown",f),()=>{cancelAnimationFrame(m),window.removeEventListener("keydown",f)}},[n,d,o]),e.jsx(V,{children:n&&e.jsxs(e.Fragment,{children:[e.jsx(v.ModalBackdrop,{as:M.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:d}),e.jsx(v.ModalDialog,{as:M.div,role:"dialog","aria-modal":"true","aria-labelledby":"purge-title",initial:{opacity:0,scale:.96,y:8},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.96,y:8},transition:{type:"spring",stiffness:380,damping:34},children:e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"head",children:[e.jsx("div",{className:"icon",children:e.jsx(Z,{size:22})}),e.jsx("h3",{id:"purge-title",children:r})]}),e.jsx("div",{className:"body",children:x}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btn ghost",onClick:d,children:"Cancel"}),e.jsx("button",{className:"btn danger",ref:s,onClick:o,children:h||"Delete permanently"})]})]})})]})})}export{ce as default};
