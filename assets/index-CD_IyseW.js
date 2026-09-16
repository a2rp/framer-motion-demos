import{d as Z,r as i,j as e,A as H}from"./index-Bg5Ft_Mu.js";import{u as E}from"./use-motion-value-gKvy5EH1.js";import{M as q,m as b}from"./proxy-DHsq80Pc.js";const U=Z.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1100px;
    margin: 0 auto;
    color: var(--text);
`,G=Z.header`
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
        display: inline-flex;
        align-items: center;
        gap: var(--space-4);
        flex-wrap: wrap;
    }

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 12px;
        height: 34px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn.danger {
        background: hsl(6 78% 57%);
        color: white;
        border-color: transparent;
    }

    .zoomRange {
        width: 180px;
        accent-color: var(--primary);
    }
    .zoomReadout {
        min-width: 62px;
        text-align: right;
        font-variant-numeric: tabular-nums;
        color: var(--text-muted);
    }

    .sep {
        width: 1px;
        height: 28px;
        background: var(--border);
    }
`,J=Z.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    height: 520px;

    .canvas {
        position: relative;
        inset: 0;
        width: 100%;
        height: 100%;
        cursor: crosshair;
        background: radial-gradient(
                1200px 260px at 10% 0%,
                hsl(210 90% 56% / 0.1),
                transparent 60%
            ),
            linear-gradient(180deg, var(--card), var(--surface));
    }

    /* the world gets sized to image*baseScale, then further scaled via transform by zoom */
    .world {
        position: absolute;
        left: 0;
        top: 0;
        transform-origin: 0 0; /* top-left origin keeps pan math simple */
        will-change: transform;
    }

    .worldSize {
        position: relative; /* anchor for absolute pins */
        width: 100%;
        height: 100%;
        overflow: visible;
        border-radius: 16px;
        box-shadow: inset 0 20px 30px -18px hsl(0 0% 0% / 0.15),
            inset 0 -20px 30px -18px hsl(0 0% 0% / 0.15);
    }

    .mapImg {
        width: 100%;
        height: 100%;
        object-fit: cover; /* cover-fit base sizing; extra zoom uses transform */
        display: block;
        border: 1px solid var(--border);
        border-radius: 16px;
        box-shadow: var(--shadow-sm);
        user-select: none;
        pointer-events: none; /* clicks pass through to canvas */
    }

    .gridOverlay {
        pointer-events: none;
        position: absolute;
        inset: 0;
        background: linear-gradient(
                0deg,
                color-mix(in oklab, var(--card) 92%, #000) 1px,
                transparent 1px
            ),
            linear-gradient(
                90deg,
                color-mix(in oklab, var(--card) 92%, #000) 1px,
                transparent 1px
            );
        background-size: 64px 64px, 64px 64px;
        mix-blend-mode: overlay;
        opacity: 0.4;
        border-radius: 16px;
    }

    .skeleton {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        color: var(--text-muted);
    }
    .skeleton .shine {
        position: absolute;
        inset: 0;
        background: linear-gradient(
            100deg,
            transparent 0%,
            hsl(0 0% 100% / 0.06) 40%,
            transparent 80%
        );
        background-size: 200% 100%;
        animation: shine-move 1.6s linear infinite;
    }
    .skeleton .hint {
        position: relative;
        z-index: 1;
        padding: 6px 10px;
        border-radius: 10px;
        background: color-mix(in oklab, var(--surface) 70%, #000);
        border: 1px solid var(--border);
    }
    @keyframes shine-move {
        to {
            background-position: -200% 0;
        }
    }

    /* pin */
    .pin {
        position: absolute;
        transform: translate(-50%, -100%); /* tip sits at coordinate */
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        isolation: isolate;
    }
    .pin .dot {
        width: 14px;
        height: 14px;
        border-radius: 999px;
        background: var(--primary);
        box-shadow: 0 0 0 2px var(--card), 0 10px 22px hsl(0 0% 0% / 0.25);
    }
    .pin .shadow {
        position: absolute;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%);
        width: 26px;
        height: 8px;
        border-radius: 100%;
        background: radial-gradient(
            closest-side,
            hsl(0 0% 0% / 0.25),
            transparent
        );
        filter: blur(1px);
        z-index: -1;
    }
    .pin .label {
        position: absolute;
        top: -8px;
        left: 10px;
        transform: translateY(-100%);
        font-size: 12px;
        line-height: 1;
        font-weight: 600;
        padding: 6px 8px;
        background: var(--surface);
        color: var(--text);
        border: 1px solid var(--border);
        border-radius: 10px;
        box-shadow: var(--shadow-sm);
        white-space: nowrap;
        pointer-events: none;
    }
`,K=Z.div`
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

    .btn,
    .closeBtn {
        border: 1px solid var(--border);
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
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
        color: var(--text);
    }
    .btn.danger {
        background: hsl(6 78% 57%);
        color: white;
        border-color: transparent;
    }

    .field {
        display: grid;
        gap: 8px;
        margin-bottom: 14px;
    }
    .field label {
        font-size: 12px;
        color: var(--text-muted);
    }
    .field .req {
        color: hsl(6 78% 57%);
    }
    .field input[type="text"],
    .field input[type="password"] {
        height: 36px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 10px;
        outline: none;
    }
    .field .pwd {
        position: relative;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
    }
    .field .pwd input {
        border-right: none;
        border-radius: var(--radius-md) 0 0 var(--radius-md);
    }
    .field .pwd .eye {
        height: 36px;
        width: 42px;
        border: 1px solid var(--border);
        border-left: none;
        background: var(--surface);
        color: var(--text);
        border-radius: 0 var(--radius-md) var(--radius-md) 0;
        display: inline-grid;
        place-items: center;
        cursor: pointer;
    }

    .err {
        color: hsl(6 78% 57%);
        font-size: 12px;
    }
`,R={Wrapper:U,Header:G,Stage:J},j=(o,t,r)=>Math.min(Math.max(o,t),r),Q=(()=>{let o=0;return()=>`pin-${++o}`})(),ee="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2048px-World_map_-_low_resolution.svg.png",ae=o=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":!0,...o,children:e.jsx("path",{fill:"currentColor",d:"M9 3h6l1 2h4v2H4V5h4l1-2Zm1 7h2v7h-2v-7Zm4 0h2v7h-2v-7ZM7 10h2v7H7v-7Z"})}),te=o=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":!0,...o,children:e.jsx("path",{fill:"currentColor",d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5ZM10 14a4 4 0 110-8 4 4 0 010 8Zm1-5V7H9v2H7v2h2v2h2v-2h2V9h-2Z"})}),se=o=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":!0,...o,children:e.jsx("path",{fill:"currentColor",d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5ZM10 14a4 4 0 110-8 4 4 0 010 8ZM7 9v2h6V9H7Z"})}),re=o=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":!0,...o,children:e.jsx("path",{fill:"currentColor",d:"M12 5c5 0 9.27 3.11 11 7-1.73 3.89-6 7-11 7S2.73 15.89 1 12c1.73-3.89 6-7 11-7zm0 2C8.13 7 4.83 9.06 3.31 12 4.83 14.94 8.13 17 12 17s7.17-2.06 8.69-5C19.17 9.06 15.87 7 12 7zm0 2a3 3 0 110 6 3 3 0 010-6z"})}),oe=o=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":!0,...o,children:e.jsx("path",{fill:"currentColor",d:"M2.1 3.51 3.5 2.1l18.4 18.4-1.41 1.41-2.54-2.54A12.86 12.86 0 0112 19c-5 0-9.27-3.11-11-7a13.74 13.74 0 013.64-4.81L2.1 3.5Zm8.86 8.86a2 2 0 002.67 2.67l-2.67-2.67Zm-5.3-5.3L8 8.41a5 5 0 016.59 6.58l1.54 1.54C18.77 15.54 20 13.88 20.69 12 19.17 9.06 15.87 7 12 7c-1.1 0-2.17.16-3.17.46Z"})});function ne({open:o,initial:t,onClose:r,onSave:v,onDelete:l}){const[m,h]=i.useState((t==null?void 0:t.label)??""),[c,d]=i.useState((t==null?void 0:t.pass)??""),[x,C]=i.useState(!1),[f,g]=i.useState({label:"",pass:""});i.useEffect(()=>{o&&(h((t==null?void 0:t.label)??""),d((t==null?void 0:t.pass)??""),g({label:"",pass:""}),C(!1))},[o,t]);const L=()=>{const n={label:"",pass:""};return m.trim()||(n.label="Label is required."),c&&c.length<4&&(n.pass="Passcode must be at least 4 characters."),g(n),!n.label&&!n.pass},S=()=>{L()&&v({label:m.trim(),pass:c})};return e.jsx(H,{children:o&&e.jsx(K,{as:b.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(b.div,{className:"modal",role:"dialog","aria-modal":"true","aria-label":"Pin details",initial:{y:20,scale:.98,opacity:.8},animate:{y:0,scale:1,opacity:1},exit:{y:10,scale:.98,opacity:0},transition:{type:"spring",stiffness:300,damping:26},children:[e.jsx("div",{className:"mHead",children:e.jsx("h3",{children:t!=null&&t.id?"Edit Pin":"Add Pin"})}),e.jsxs("div",{className:"mBody",children:[e.jsx("p",{className:"muted",children:"Give your pin a short label. Optionally protect it with a passcode."}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Label ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"text",value:m,onChange:n=>h(n.target.value),placeholder:"e.g. Café, Meeting Point"}),f.label&&e.jsx("div",{className:"err",children:f.label})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Passcode (optional)"}),e.jsxs("div",{className:"pwd",children:[e.jsx("input",{type:x?"text":"password",value:c,onChange:n=>d(n.target.value),placeholder:"Set a passcode (min 4 chars)"}),e.jsx("button",{type:"button",className:"eye",onClick:()=>C(n=>!n),"aria-label":x?"Hide passcode":"Show passcode",title:x?"Hide passcode":"Show passcode",children:x?e.jsx(oe,{}):e.jsx(re,{})})]}),f.pass&&e.jsx("div",{className:"err",children:f.pass})]}),e.jsx("div",{className:"details",children:e.jsxs("small",{className:"muted",children:["Position: ",Math.round((t==null?void 0:t.x)??0),"% × ",Math.round((t==null?void 0:t.y)??0),"%"]})})]}),e.jsxs("div",{className:"mFoot",children:[(t==null?void 0:t.id)&&e.jsxs("button",{className:"btn danger",onClick:l,title:"Delete pin",children:[e.jsx(ae,{})," Remove"]}),e.jsx("div",{style:{flex:1}}),e.jsx("button",{className:"btn ghost",onClick:r,children:"Cancel"}),e.jsx("button",{className:"btn primary",onClick:S,children:"Save"})]})]})})})}function pe(){const o=i.useRef(null),t=i.useRef(null),[r,v]=i.useState({w:0,h:0,ok:!1}),[l,m]=i.useState({w:0,h:0}),h=E(0),c=E(0),d=E(1),[x,C]=i.useState({left:0,right:0,top:0,bottom:0}),[f,g]=i.useState([]),[L,S]=i.useState(!1),[n,w]=i.useState(null),[_,k]=i.useState(!1),[O,B]=i.useState(null),y=i.useMemo(()=>{if(!r.ok||!l.w||!l.h)return 1;const a=l.w/r.w,s=l.h/r.h;return Math.max(a,s)},[r,l]),z=i.useCallback((a={center:!1})=>{if(!r.ok)return;const s=y*d.get(),p=r.w*s,u=r.h*s,N=Math.min(0,l.w-p),M=Math.min(0,l.h-u);if(C({left:N,right:0,top:M,bottom:0}),a.center){const V=(N+0)/2,F=(M+0)/2;h.set(V),c.set(F)}else h.set(j(h.get(),N,0)),c.set(j(c.get(),M,0))},[r,l,y,h,c,d]),D=()=>{const a=t.current;a&&v({w:a.naturalWidth,h:a.naturalHeight,ok:!0})};i.useEffect(()=>{const a=o.current;if(!a)return;const s=new ResizeObserver(p=>{const u=p[0].contentRect;m({w:Math.round(u.width),h:Math.round(u.height)})});return s.observe(a),()=>s.disconnect()},[]),i.useEffect(()=>{r.ok&&l.w&&l.h&&z({center:!0})},[r,l,z]),i.useEffect(()=>{const a=d.on("change",()=>{z({center:!1})});return()=>a==null?void 0:a()},[d,z]);const P=a=>{const s=j(d.get()+a,1,2);d.set(s)},A=a=>{const s=j(parseFloat(a.target.value)/100,1,2);d.set(s)},W=i.useCallback(a=>{if(!r.ok)return{xPct:50,yPct:50};const s=o.current.getBoundingClientRect(),p=y*d.get(),u=(a.clientX-s.left-h.get())/p,N=(a.clientY-s.top-c.get())/p,M=j(u/r.w*100,0,100),I=j(N/r.h*100,0,100);return{xPct:M,yPct:I}},[r,y,d,h,c]),X=a=>{if(L||!r.ok)return;const{xPct:s,yPct:p}=W(a);w({id:null,label:"",pass:"",x:s,y:p}),k(!0)},Y=(a,s)=>{s.stopPropagation(),w(a),k(!0)},$=a=>{if(n!=null&&n.id)g(s=>s.map(p=>p.id===n.id?{...p,...a}:p));else{const s=Q(),p={id:s,...n,...a};g(u=>[...u,p]),B(s),setTimeout(()=>B(null),1e3)}k(!1),w(null)},T=()=>{n!=null&&n.id&&(g(a=>a.filter(s=>s.id!==n.id)),k(!1),w(null))};return i.useEffect(()=>{const a=s=>{(s.key==="="||s.key==="+")&&P(.05),(s.key==="-"||s.key==="_")&&P(-.05)};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[]),e.jsx(q,{reducedMotion:"never",children:e.jsxs(R.Wrapper,{children:[e.jsxs(R.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Map Pin Drop"}),e.jsx("p",{className:"muted",children:"Real image background, true pan & zoom (cover-fit), and pins that bounce to life."})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Map controls",children:[e.jsxs("button",{className:"btn",onClick:()=>P(-.1),title:"Zoom out",children:[e.jsx(se,{})," Zoom–"]}),e.jsxs("div",{className:"zoomReadout","aria-hidden":!0,children:[Math.round(d.get()*100),"%"]}),e.jsx("input",{className:"zoomRange",type:"range",min:"100",max:"200",step:"1",onChange:A,value:Math.round(d.get()*100),"aria-label":"Zoom"}),e.jsxs("button",{className:"btn",onClick:()=>P(.1),title:"Zoom in",children:[e.jsx(te,{})," Zoom+"]}),e.jsx("div",{className:"sep"}),e.jsx("button",{className:"btn ghost",onClick:()=>{g([]),w(null)},title:"Clear all pins",children:"Clear"})]})]}),e.jsx(R.Stage,{children:e.jsxs("div",{className:"canvas",ref:o,onClick:X,children:[e.jsx(b.div,{className:"world",style:{x:h,y:c,scale:d,originX:0,originY:0},drag:!0,dragMomentum:!1,dragElastic:0,dragConstraints:x,onDragStart:()=>S(!0),onDragEnd:()=>setTimeout(()=>S(!1),0),transition:{type:"tween",ease:[.22,1,.36,1],duration:.2},children:e.jsxs("div",{className:"worldSize",style:{width:r.ok?`${r.w*y}px`:"100%",height:r.ok?`${r.h*y}px`:"100%"},children:[e.jsx("img",{ref:t,src:ee,alt:"World map",className:"mapImg",onLoad:D,onError:()=>v(a=>({...a,ok:!1})),draggable:!1}),e.jsx("div",{className:"gridOverlay","aria-hidden":!0}),e.jsx(H,{initial:!1,children:f.map(a=>e.jsx(ie,{pin:a,justAdded:O===a.id,onClick:Y},a.id))})]})}),!r.ok&&e.jsxs("div",{className:"skeleton",children:[e.jsx("div",{className:"shine"}),e.jsx("p",{className:"hint",children:"Loading map… you can still click to add pins."})]})]})}),e.jsx(ne,{open:_,initial:n,onClose:()=>{k(!1),w(null)},onSave:$,onDelete:T})]})})}function ie({pin:o,justAdded:t,onClick:r}){const{id:v,label:l,x:m,y:h}=o,c={initial:{y:-30,scaleY:.9,opacity:0},animate:{y:0,scaleY:1,opacity:1,transition:{type:"spring",stiffness:700,damping:18,mass:.6}}},d={scale:1.08,y:-2};return e.jsxs(b.button,{className:"pin",style:{left:`${m}%`,top:`${h}%`},onClick:x=>r(o,x),initial:t?c.initial:!1,animate:t?c.animate:{opacity:1},whileHover:d,whileTap:{scale:.98},title:l||"Untitled pin",children:[e.jsx(b.span,{className:"dot",layoutId:`dot-${v}`,transition:{type:"spring",stiffness:600,damping:24}}),e.jsx(b.span,{className:"shadow",initial:t?{scaleX:.6,opacity:.15}:{opacity:.22},animate:t?{scaleX:[.6,1.15,1],opacity:[.15,.25,.22]}:{opacity:.22},transition:{duration:t?.5:.2,ease:[.22,1,.36,1]},"aria-hidden":!0}),e.jsx(H,{children:l&&e.jsx(b.span,{className:"label",initial:{y:6,opacity:0},animate:{y:0,opacity:1},exit:{y:6,opacity:0},transition:{duration:.18},children:l})})]})}export{pe as default};
