import{r as c,u as L,j as r,d as N,A as I}from"./index-D8yAWZ_T.js";import{a as B,b as W,m as A,i as q,M as G}from"./proxy-DfzdIqFN.js";import{u as U}from"./use-motion-value-3H01X7V8.js";import{u as Y}from"./use-transform-BkTbxY83.js";const $=c.createContext(null);function Z(t,o,n,l){if(!l)return t;const d=t.findIndex(h=>h.value===o);if(d===-1)return t;const b=l>0?1:-1,f=t[d+b];if(!f)return t;const w=t[d],i=f.layout,g=B(i.min,i.max,.5);return b===1&&w.layout.max+n>g||b===-1&&w.layout.min+n<g?W(t,d,d+b):t}function Q({children:t,as:o="ul",axis:n="y",onReorder:l,values:d,...b},f){const w=L(()=>A[o]),i=[],g=c.useRef(!1),h={axis:n,registerItem:(m,x)=>{const u=i.findIndex(v=>m===v.value);u!==-1?i[u].layout=x[n]:i.push({value:m,layout:x[n]}),i.sort(ee)},updateOrder:(m,x,u)=>{if(g.current)return;const v=Z(i,m,x,u);i!==v&&(g.current=!0,l(v.map(X).filter(y=>d.indexOf(y)!==-1)))}};return c.useEffect(()=>{g.current=!1}),r.jsx(w,{...b,ref:f,ignoreStrict:!0,children:r.jsx($.Provider,{value:h,children:t})})}const J=c.forwardRef(Q);function X(t){return t.value}function ee(t,o){return t.layout.min-o.layout.min}function z(t,o=0){return q(t)?t:U(o)}function re({children:t,style:o={},value:n,as:l="li",onDrag:d,layout:b=!0,...f},w){const i=L(()=>A[l]),g=c.useContext($),h={x:z(o.x),y:z(o.y)},m=Y([h.x,h.y],([y,j])=>y||j?1:"unset"),{axis:x,registerItem:u,updateOrder:v}=g;return r.jsx(i,{drag:x,...f,dragSnapToOrigin:!0,style:{...o,x:h.x,y:h.y,zIndex:m},layout:b,onDrag:(y,j)=>{const{velocity:C}=j;C[x]&&v(n,h[x].get(),C[x]),d&&d(y,j)},onLayoutMeasure:y=>u(n,y),ref:w,ignoreStrict:!0,children:t})}const te=c.forwardRef(re),ae="82px",oe="66px",R={Wrapper:N.div`
        display: grid;
        gap: var(--space-6);
        padding: var(--space-6);
        max-width: 980px;
        margin: 0 auto;
        color: var(--text);
    `,Header:N.header`
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

        .search input {
            height: 34px;
            min-width: 220px;
            border: 1px solid var(--border);
            background: var(--surface);
            color: var(--text);
            border-radius: var(--radius-md);
            padding: 0 12px;
            box-shadow: var(--shadow-sm) inset;
        }

        .ctrl {
            display: grid;
            grid-template-columns: auto auto;
            align-items: center;
            column-gap: 8px;
        }
        .ctrl span {
            font-size: 12px;
            color: var(--text-muted);
        }
        .ctrl select {
            height: 34px;
            min-width: 160px;
            border: 1px solid var(--border);
            background: var(--surface);
            color: var(--text);
            border-radius: var(--radius-sm);
            padding: 0 10px;
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
            justify-content: center;
        }
        .btn.ghost {
            background: var(--surface);
        }
        .btn.danger {
            background: hsl(0 70% 50%);
            color: white;
            border-color: transparent;
        }
        .btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .sep {
            width: 1px;
            height: 34px;
            background: var(--border);
        }
    `,Stage:N.section`
        position: relative;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        overflow: hidden;

        .list {
            max-height: 560px;
            overflow: auto;
            padding: var(--space-6);
            display: grid;
            gap: var(--space-3);
            scrollbar-gutter: stable;

            scrollbar-width: thin;
            scrollbar-color: hsl(0 0% 50% / 0.35) transparent;
        }
        .list::-webkit-scrollbar {
            width: 12px;
        }
        .list::-webkit-scrollbar-thumb {
            background: hsl(0 0% 50% / 0.35);
            border-radius: 8px;
            border: 3px solid transparent;
            background-clip: content-box;
        }

        .row {
            --row-height: ${ae};
            height: var(--row-height);
            display: grid;
            grid-template-columns: 18px 24px 1fr auto;
            align-items: center;
            gap: var(--space-4);
            padding: 10px 12px;
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            background: linear-gradient(
                    0deg,
                    hsl(210 90% 56% / 0.04),
                    hsl(210 90% 62% / 0.03)
                ),
                var(--surface);
            box-shadow: var(--shadow-sm);
            color: var(--text);
            will-change: transform, opacity;
            position: relative;
        }

        [data-density="compact"] & .row {
            --row-height: ${oe};
            padding: 8px 10px;
        }

        .row.is-selected {
            outline: 2px solid hsl(210 90% 56% / 0.33);
        }
        .row.is-pulse {
            animation: pulse 1.2s ease-out 1;
        }
        @keyframes pulse {
            0% {
                box-shadow: 0 0 0 0 hsl(210 90% 56% / 0.35);
            }
            100% {
                box-shadow: 0 0 0 18px hsl(210 90% 56% / 0);
            }
        }

        .grab {
            width: 18px;
            height: 100%;
            background: radial-gradient(
                    2px 2px at 50% 8px,
                    hsl(0 0% 60% / 0.9),
                    transparent 60%
                ),
                radial-gradient(
                    2px 2px at 50% 18px,
                    hsl(0 0% 60% / 0.9),
                    transparent 60%
                ),
                radial-gradient(
                    2px 2px at 50% 28px,
                    hsl(0 0% 60% / 0.9),
                    transparent 60%
                ),
                radial-gradient(
                    2px 2px at 50% 38px,
                    hsl(0 0% 60% / 0.9),
                    transparent 60%
                );
            opacity: 0.7;
            border-right: 1px dashed var(--border);
            cursor: grab;
        }

        .check {
            position: relative;
            width: 24px;
            height: 24px;
            display: inline-grid;
            place-items: center;
        }
        .check input {
            position: absolute;
            opacity: 0;
            inset: 0;
            cursor: pointer;
        }
        .check span {
            width: 16px;
            height: 16px;
            border-radius: 4px;
            border: 1px solid var(--border);
            background: var(--card);
            display: inline-block;
            box-shadow: var(--shadow-sm) inset;
        }
        .row.is-selected .check span {
            background: var(--primary);
            border-color: transparent;
        }

        .main {
            overflow: hidden;
        }
        .t {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .t h3 {
            font-size: 16px;
            line-height: 1.2;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .note {
            color: var(--text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .prio {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
        }
        .prio.p2 {
            background: hsl(8 82% 55% / 0.16);
            color: hsl(8 82% 60%);
            border-color: hsl(8 82% 55% / 0.3);
        }
        .prio.p1 {
            background: hsl(38 95% 55% / 0.16);
            color: hsl(38 95% 50%);
            border-color: hsl(38 95% 55% / 0.3);
        }
        .prio.p0 {
            background: hsl(149 60% 45% / 0.16);
            color: hsl(149 60% 40%);
            border-color: hsl(149 60% 45% / 0.3);
        }

        .meta {
            display: grid;
            align-items: center;
            gap: 6px;
            justify-items: end;
        }
        .meta time {
            font-size: 12px;
            color: var(--text-muted);
        }
        .pill {
            height: 28px;
            padding: 0 10px;
            border-radius: 999px;
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            cursor: pointer;
        }
    `,Infobar:N.div`
        font-size: 12px;
        color: var(--text-muted);
        padding: 10px 14px;
        border-bottom: 1px dashed var(--border);
        background: var(--surface);
    `,BulkToolbar:N(A.div)`
        position: sticky;
        top: 0;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-4);
        padding: 10px 12px;
        background: linear-gradient(180deg, var(--surface), var(--card));
        border-bottom: 1px solid var(--border);

        .left {
            color: var(--text);
        }
        .right {
            display: flex;
            gap: var(--space-3);
        }
    `},O=(()=>{let t=0;return()=>`it-${++t}`})(),se=["Low","Medium","High"];function ne(t=12){const o=["Apollo","Nimbus","Vector","Quartz","Zephyr","Orchid","Atlas","Halo","Vertex","Nova","Sable","Polar","Indigo"];return Array.from({length:t},(n,l)=>({id:O(),title:`${o[l%o.length]} ${l+1}`,note:"Drag by the handle to reorder. Try search, sort, bulk select, and keyboard moves (Alt+↑/↓).",priority:l%3,createdAt:Date.now()-l*36e3,pulse:!1}))}function ie(t,o,n){const l=t.slice(),d=l.splice(o,1)[0];return l.splice(n,0,d),l}function he(){const[t,o]=c.useState(()=>ne(12)),[n,l]=c.useState(""),[d,b]=c.useState("manual"),[f,w]=c.useState("cozy"),[i,g]=c.useState(()=>new Set),h=c.useRef(null),m=c.useRef(null),x=c.useRef(0),u=d==="manual"&&!n.trim(),v=c.useMemo(()=>{const e=n.trim().toLowerCase();let a=e?t.filter(s=>(s.title+" "+s.note).toLowerCase().includes(e)):t.slice();return d==="title"?a.sort((s,p)=>s.title.localeCompare(p.title)):d==="priority"&&a.sort((s,p)=>p.priority-s.priority||s.title.localeCompare(p.title)),a},[t,n,d]),y=c.useCallback(e=>i.has(e),[i]),j=e=>g(a=>{const s=new Set(a);return s.has(e)?s.delete(e):s.add(e),s}),C=()=>g(new Set),T=()=>{const e={id:O(),title:`New Task ${t.length+1}`,note:"Freshly added. Reorder me!",priority:Math.floor(Math.random()*3),createdAt:Date.now(),pulse:!0};o(a=>[e,...a]),setTimeout(()=>o(a=>a.map(s=>s.id===e.id?{...s,pulse:!1}:s)),1200)},D=()=>{i.size&&(o(e=>e.filter(a=>!i.has(a.id))),C())},E=e=>{u&&o(e)};c.useEffect(()=>{const e=a=>{if(!(a.altKey&&(a.key==="ArrowUp"||a.key==="ArrowDown"))||!u||i.size!==1)return;a.preventDefault();const s=Array.from(i)[0],p=t.findIndex(k=>k.id===s);if(p<0)return;const M=a.key==="ArrowUp"?-1:1,S=Math.min(t.length-1,Math.max(0,p+M));S!==p&&o(k=>ie(k,p,S))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[t,i,u]);const H=c.useCallback(()=>{cancelAnimationFrame(m.current);const e=()=>{const a=h.current;if(!a)return;const s=a.getBoundingClientRect(),p=x.current,M=30,S=14;let k=0;p<s.top+M?k=-S:p>s.bottom-M&&(k=S),k&&(a.scrollTop+=k),m.current=requestAnimationFrame(e)};m.current=requestAnimationFrame(e)},[]),K=c.useCallback(()=>cancelAnimationFrame(m.current),[]),_=(e,a)=>{x.current=a.point.y,H()},F=(e,a)=>{x.current=a.point.y},P=()=>{K()},V=e=>se[e]||"Low";return r.jsx(G,{reducedMotion:"never",children:r.jsxs(R.Wrapper,{"data-density":f,children:[r.jsxs(R.Header,{children:[r.jsxs("div",{className:"heading",children:[r.jsx("h1",{children:"Drag / Reorder / Sort"}),r.jsx("p",{className:"muted",children:"Reorder with buttery springs. Search & sort. Bulk ops. Alt+↑/↓ to move."})]}),r.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Controls",children:[r.jsx("div",{className:"search",children:r.jsx("input",{type:"text",placeholder:"Search… (Ctrl/⌘ + K)",value:n,onChange:e=>l(e.target.value),onKeyDown:e=>{(e.ctrlKey||e.metaKey)&&(e.key==="k"||e.key==="K")&&(e.preventDefault(),e.currentTarget.select())}})}),r.jsxs("label",{className:"ctrl",children:[r.jsx("span",{children:"Sort"}),r.jsxs("select",{value:d,onChange:e=>b(e.target.value),children:[r.jsx("option",{value:"manual",children:"Manual (drag)"}),r.jsx("option",{value:"title",children:"Title A→Z"}),r.jsx("option",{value:"priority",children:"Priority High→Low"})]})]}),r.jsxs("label",{className:"ctrl",children:[r.jsx("span",{children:"Density"}),r.jsxs("select",{value:f,onChange:e=>w(e.target.value),children:[r.jsx("option",{value:"cozy",children:"Cozy"}),r.jsx("option",{value:"compact",children:"Compact"})]})]}),r.jsx("div",{className:"sep"}),r.jsx("button",{className:"btn ghost",onClick:T,children:"Add"}),r.jsx("button",{className:"btn ghost",onClick:D,disabled:i.size===0,children:"Remove"})]})]}),r.jsxs(R.Stage,{children:[!u&&r.jsx(R.Infobar,{role:"status",children:n?"Drag disabled while filtering. Clear search to reorder.":"Drag disabled in sorted view. Switch back to Manual to reorder."}),r.jsx(J,{as:"div",axis:"y",values:v,onReorder:E,className:"list",ref:h,layout:!0,children:r.jsx(I,{initial:!1,children:v.map(e=>{const a=y(e.id);return r.jsxs(te,{value:e,as:"article",className:`row ${a?"is-selected":""} ${e.pulse?"is-pulse":""}`,layout:!0,drag:u,dragListener:u,onDragStart:_,onDrag:F,onDragEnd:P,dragConstraints:h,dragElastic:.08,whileDrag:{scale:1.02,boxShadow:"0 10px 30px hsl(0 0% 0% / 0.25)"},initial:{opacity:0,y:-6},animate:{opacity:1,y:0,transition:{type:"spring",stiffness:420,damping:36,mass:.8}},exit:{opacity:0,y:8,scale:.98,transition:{duration:.16}},children:[r.jsx("div",{className:"grab","aria-hidden":!0,title:u?"Drag to reorder":"Reordering disabled"}),r.jsxs("label",{className:"check",children:[r.jsx("input",{type:"checkbox",checked:a,onChange:()=>j(e.id),"aria-label":`Select ${e.title}`}),r.jsx("span",{})]}),r.jsxs("div",{className:"main",children:[r.jsxs("header",{className:"t",children:[r.jsx("h3",{children:e.title}),r.jsx("span",{className:`prio p${e.priority}`,children:V(e.priority)})]}),r.jsx("p",{className:"note",children:e.note})]}),r.jsxs("div",{className:"meta",children:[r.jsx("time",{title:new Date(e.createdAt).toLocaleString(),children:le(e.createdAt)}),r.jsx("button",{className:"pill",onClick:()=>o(s=>s.map(p=>p.id===e.id?{...p,priority:(p.priority+1)%3}:p)),title:"Cycle priority",children:"Cycle"})]})]},e.id)})})}),r.jsx(I,{children:i.size>0&&r.jsxs(R.BulkToolbar,{initial:{y:-12,opacity:0},animate:{y:0,opacity:1,transition:{type:"spring",stiffness:300,damping:26}},exit:{y:-12,opacity:0,transition:{duration:.18}},children:[r.jsxs("div",{className:"left",children:[r.jsx("b",{children:i.size})," selected"]}),r.jsxs("div",{className:"right",children:[r.jsx("button",{className:"btn ghost",onClick:C,children:"Clear"}),r.jsx("button",{className:"btn danger",onClick:D,children:"Delete"})]})]})})]})]})})}function le(t){const o=Math.floor((Date.now()-t)/1e3);if(o<60)return`${o}s ago`;const n=Math.floor(o/60);if(n<60)return`${n}m ago`;const l=Math.floor(n/60);return l<24?`${l}h ago`:`${Math.floor(l/24)}d ago`}export{he as default};
