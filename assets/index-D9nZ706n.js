import{d as f,r as i,j as a,A as S}from"./index-Cf_T-Gf1.js";import{u as z}from"./use-motion-value-BFlRQmnU.js";import{u as B}from"./use-motion-value-event-Dcjh6oXT.js";import{u as O}from"./use-transform-BZBxOgLi.js";import{M as T,m as l}from"./proxy-DKYKL-ar.js";import{a as d}from"./index-Cz94B1Qr.js";const Z=f.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1200px;
    margin: 0 auto;
    color: var(--text);
`,X=f.header`
    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`,Y=f.div`
    display: grid;
    gap: var(--space-4);
    grid-template-columns: repeat(6, minmax(0, 1fr));

    @media (width < 1100px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (width < 800px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (width < 560px) {
        grid-template-columns: repeat(2, 1fr);
    }

    .thumb {
        position: relative;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--card);
        box-shadow: var(--shadow-sm);
        overflow: hidden;
        cursor: zoom-in;
        display: grid;
        padding: 0;
    }

    .thumb .img {
        width: 100%;
        height: 160px;
        object-fit: cover;
        display: block;
    }

    .cap {
        position: absolute;
        inset: auto 0 0 0;
        background: linear-gradient(180deg, transparent, hsl(0 0% 0% / 0.35));
        color: #fff;
        padding: 8px 10px;
        display: grid;
        gap: 2px;
    }
    .cap .title {
        font-size: 12px;
    }
`,G=f.div`
    position: fixed;
    inset: 0;
    z-index: 50;
    background: color-mix(in oklab, var(--bg) 45%, #0000);
    backdrop-filter: blur(8px) saturate(1.1);
    display: grid;
    place-items: center;
    padding: var(--space-6);

    .stage {
        position: relative;
        width: min(96vw, 1200px);
        height: min(90vh, 800px);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        overflow: hidden;
    }

    .full {
        position: absolute;
        inset: 0;
        margin: auto;
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
        user-select: none;
        -webkit-user-drag: none;
        will-change: transform;
        z-index: 1;
    }

    .loading {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        background: linear-gradient(
            180deg,
            var(--card),
            color-mix(in oklab, var(--card) 86%, #000)
        );
        z-index: 4;
    }
    .loading .muted {
        color: var(--text-muted);
        margin-top: 8px;
    }

    .spinner {
        display: inline-grid;
        grid-auto-flow: column;
        gap: 6px;
        align-items: center;
    }
    .spinner .dot {
        width: 8px;
        height: 8px;
        border-radius: 10px;
        background: var(--primary);
        animation: blink 0.9s infinite ease-in-out alternate;
    }
    .spinner .dot:nth-child(2) {
        animation-delay: 0.15s;
    }
    .spinner .dot:nth-child(3) {
        animation-delay: 0.3s;
    }
    @keyframes blink {
        to {
            opacity: 0.2;
            transform: translateY(2px);
        }
    }

    .toolbar {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        gap: 10px;
        padding: 10px;
        background: linear-gradient(
            180deg,
            transparent,
            color-mix(in oklab, var(--card) 85%, #000)
        );
        color: var(--text);
        z-index: 3;
    }
    .toolbar .left,
    .toolbar .right {
        display: flex;
        gap: 8px;
        align-items: center;
        z-index: 99999;
        position: relative;
    }
    .toolbar .center {
        text-align: center;
    }
    .toolbar .caption {
        font-size: 13px;
        color: var(--text-muted);
    }

    .tool {
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        height: 32px;
        padding: 0 12px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .tool.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .tool.ghost {
        background: var(--card);
    }
    .tool.danger {
        background: hsl(5 85% 55%);
        color: #fff;
        border-color: transparent;
    }

    .nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 44px;
        height: 44px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: color-mix(in oklab, var(--card) 80%, #0000);
        backdrop-filter: blur(6px);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        z-index: 2; /* 👈 layer 2 (above image, below toolbar/loading) */
        pointer-events: auto; /* ensure clicks land here */
    }
    .nav.prev {
        left: 14px;
    }
    .nav.next {
        right: 14px;
    }
`,_=f.div`
    position: fixed;
    inset: 0;
    z-index: 60;
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

    .form {
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
    .pwWrap {
        position: relative;
        display: grid;
    }
    .pwWrap input {
        height: 38px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        padding: 0 36px 0 10px;
        background: var(--surface);
        color: var(--text);
    }
    .pwWrap .eye {
        position: absolute;
        top: 0;
        right: 0;
        height: 38px;
        width: 36px;
        border: none;
        background: transparent;
        color: var(--text);
        cursor: pointer;
    }
    .error {
        color: hsl(5 85% 55%);
        font-style: normal;
        font-size: 12px;
    }

    .closeBtn {
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .closeBtn.ghost {
        background: var(--surface);
        color: var(--text);
    }
`,k={Wrapper:Z,Header:X,Grid:Y,Overlay:G},V=[{id:"alps",src:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",alt:"Snowy mountains at sunrise",w:1600,h:1067},{id:"forest",src:"https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=1600&auto=format&fit=crop",alt:"Misty forest path",w:1600,h:1067},{id:"desert",src:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",alt:"Desert dunes with long shadows",w:1600,h:1067},{id:"city",src:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",alt:"City skyline at dusk",w:1600,h:1067},{id:"coast",src:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",alt:"Rocky coastline and sea spray",w:1600,h:1067},{id:"aurora",src:"https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1600&auto=format&fit=crop",alt:"Aurora borealis over a lake",w:1600,h:1067}],I=(n,o,u)=>{const g=o-n+1;return((u-n)%g+g)%g+n},L="open-sesame";function $(){return a.jsxs("div",{className:"spinner","aria-hidden":!0,children:[a.jsx("div",{className:"dot"}),a.jsx("div",{className:"dot"}),a.jsx("div",{className:"dot"})]})}function ta(){const[n]=i.useState(V),[o,u]=i.useState(null),[g,b]=i.useState(!1),[D,c]=i.useState(!1),[j,v]=i.useState(""),[M,s]=i.useState(""),[N,y]=i.useState(!1),t=z(1),p=z(0),m=z(0),[q,x]=i.useState(!1);B(t,"change",e=>x(e>1.02));const F=O(t,e=>e>1.02?"grab":"zoom-in"),W=e=>()=>{u(e),b(!1),t.set(1),p.set(0),m.set(0),x(!1)},w=i.useCallback(()=>{u(null),c(!1),v(""),s(""),y(!1)},[]),C=i.useCallback(()=>{if(o==null)return;const e=I(0,n.length-1,o+1);u(e),b(!1),t.set(1),p.set(0),m.set(0),x(!1)},[o,n.length,t,p,m]),E=i.useCallback(()=>{if(o==null)return;const e=I(0,n.length-1,o-1);u(e),b(!1),t.set(1),p.set(0),m.set(0),x(!1)},[o,n.length,t,p,m]);i.useEffect(()=>{if(o==null)return;const e=r=>{if(r.key==="Escape")return w();if(r.key==="ArrowRight")return C();if(r.key==="ArrowLeft")return E();(r.key==="+"||r.key==="=")&&d(t,Math.min(4,t.get()+.2),{duration:.15}),(r.key==="-"||r.key==="_")&&d(t,Math.max(1,t.get()-.2),{duration:.15}),r.key.toLowerCase()==="i"&&c(!0)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o,w,C,E,t]);const A=e=>{e.preventDefault();const r=Math.sign(e.deltaY)*-1,R=Math.max(1,Math.min(4,t.get()+r*.25));d(t,R,{duration:.15})},P=()=>{d(t,1,{duration:.18}),d(p,0,{duration:.18}),d(m,0,{duration:.18}),x(!1)},H=()=>c(!0),h=o!=null?n[o]:null;return a.jsx(T,{reducedMotion:"never",children:a.jsxs(k.Wrapper,{children:[a.jsx(k.Header,{children:a.jsxs("div",{className:"heading",children:[a.jsx("h1",{children:"Image Lightbox Zoom"}),a.jsx("p",{className:"muted",children:"Shared-element zoom from grid → lightbox. Drag to pan, wheel to zoom, arrows to navigate."})]})}),a.jsx(k.Grid,{children:n.map((e,r)=>a.jsxs(l.button,{className:"thumb",onClick:W(r),layout:!0,whileHover:{y:-2},whileTap:{scale:.98},children:[a.jsx(l.img,{src:e.src,alt:e.alt,loading:"lazy",layoutId:`img-${e.id}`,className:"img"}),a.jsx("div",{className:"cap",children:a.jsx("span",{className:"title",children:e.alt})})]},e.id))}),a.jsx(S,{children:o!=null&&a.jsx(k.Overlay,{as:l.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e=>{e.currentTarget===e.target&&w()},children:a.jsxs(l.div,{className:"stage",initial:{scale:.98,opacity:.5},animate:{scale:1,opacity:1},exit:{scale:.98,opacity:0},transition:{duration:.2,ease:[.22,1,.36,1]},children:[a.jsx("button",{className:"nav prev",onClick:E,"aria-label":"Previous image",children:"‹"}),a.jsx("button",{className:"nav next",onClick:C,"aria-label":"Next image",children:"›"}),a.jsx(l.img,{src:h.src,alt:h.alt,className:"full",layoutId:`img-${h.id}`,style:{scale:t,x:p,y:m,cursor:F},onLoad:()=>b(!0),drag:q,dragPropagation:!1,dragElastic:.12,dragMomentum:!1,whileDrag:{cursor:"grabbing"},onWheel:A,onDoubleClick:P},h.id),!g&&a.jsxs("div",{className:"loading",children:[a.jsx($,{}),a.jsx("span",{className:"muted",children:"Loading…"})]}),a.jsxs(l.div,{className:"toolbar",initial:{y:20,opacity:0},animate:{y:0,opacity:1},exit:{y:20,opacity:0},transition:{duration:.2},children:[a.jsxs("div",{className:"left",children:[a.jsx("button",{className:"tool",onClick:P,title:"Reset zoom (double-click also)",children:"Reset"}),a.jsx("button",{className:"tool",onClick:()=>d(t,Math.min(4,t.get()+.3),{duration:.12}),title:"Zoom in (+)",children:"+"}),a.jsx("button",{className:"tool",onClick:()=>d(t,Math.max(1,t.get()-.3),{duration:.12}),title:"Zoom out (-)",children:"−"})]}),a.jsx("div",{className:"center",children:a.jsx("span",{className:"caption",children:h.alt})}),a.jsxs("div",{className:"right",children:[a.jsx("button",{className:"tool ghost",onClick:H,title:"Protected EXIF (i)",children:"EXIF"}),a.jsx("a",{className:"tool primary",href:h.src,target:"_blank",rel:"noreferrer",title:"Open original",children:"Open"}),a.jsx("button",{className:"tool danger",onClick:w,title:"Close (Esc)",children:"Close"})]})]})]})},"overlay")}),a.jsx(S,{children:D&&a.jsx(_,{as:l.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e=>{e.currentTarget===e.target&&(c(!1),v(""),s(""),y(!1))},children:a.jsxs(l.div,{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"m-title",initial:{y:18,scale:.98,opacity:0},animate:{y:0,scale:1,opacity:1},exit:{y:18,scale:.98,opacity:0},transition:{duration:.18,ease:[.22,1,.36,1]},children:[a.jsx("div",{className:"mHead",children:a.jsx("h3",{id:"m-title",children:"Protected EXIF"})}),a.jsxs("div",{className:"mBody",children:[a.jsx("p",{className:"muted",children:"Enter password to reveal extra metadata."}),a.jsx("form",{onSubmit:e=>{e.preventDefault();const r=j.trim();if(!r)return s("Password is required.");if(r.length<4)return s("Must be at least 4 characters.");if(r!==L)return s("Incorrect password.");s(""),c(!1),alert("Protected EXIF unlocked ✅")},className:"form",children:a.jsxs("label",{className:"field",children:[a.jsx("span",{children:"Password"}),a.jsxs("div",{className:"pwWrap",children:[a.jsx("input",{type:N?"text":"password",value:j,onChange:e=>{v(e.target.value),s("")},placeholder:"Enter password",autoFocus:!0,minLength:4,required:!0}),a.jsx("button",{type:"button",className:"eye","aria-label":N?"Hide password":"Show password",onClick:()=>y(e=>!e),children:N?"🙈":"👁️"})]}),M&&a.jsx("em",{className:"error",children:M})]})})]}),a.jsxs("div",{className:"mFoot",children:[a.jsx("button",{className:"closeBtn ghost",type:"button",onClick:()=>{c(!1),v(""),s(""),y(!1)},children:"Cancel"}),a.jsx("button",{className:"closeBtn",type:"button",onClick:e=>{const r=j.trim();if(!r)return s("Password is required.");if(r.length<4)return s("Must be at least 4 characters.");if(r!==L)return s("Incorrect password.");s(""),c(!1),alert("Protected EXIF unlocked ✅")},children:"Unlock"})]})]})},"modal")})]})})}export{ta as default};
