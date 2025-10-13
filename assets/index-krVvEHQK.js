import{i as oe,u as ae,r as f,c as le,d as P,j as n,A as ce}from"./index-Cw4uPab2.js";import{r as de,y as ue,f as W,j as J,w as pe,E as fe,g as he,o as me,F as ge,G as Q,I as xe,K as be,L as K,e as N,M as ve,m as w}from"./proxy-Bw5QJHtJ.js";import{u as ye}from"./use-spring-D16AUl63.js";import{u as g}from"./use-transform-BaAi1gYr.js";import"./use-motion-value-b8XmR67u.js";const z=new WeakMap;let v;const Z=(e,t,s)=>(r,i)=>i&&i[0]?i[0][e+"Size"]:ue(r)&&"getBBox"in r?r.getBBox()[t]:r[s],we=Z("inline","width","offsetWidth"),ke=Z("block","height","offsetHeight");function je({target:e,borderBoxSize:t}){var s;(s=z.get(e))==null||s.forEach(r=>{r(e,{get width(){return we(e,t)},get height(){return ke(e,t)}})})}function Se(e){e.forEach(je)}function Ee(){typeof ResizeObserver>"u"||(v=new ResizeObserver(Se))}function Te(e,t){v||Ee();const s=de(e);return s.forEach(r=>{let i=z.get(r);i||(i=new Set,z.set(r,i)),i.add(t),v==null||v.observe(r)}),()=>{s.forEach(r=>{const i=z.get(r);i==null||i.delete(t),i!=null&&i.size||v==null||v.unobserve(r)})}}const O=new Set;let S;function Ae(){S=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};O.forEach(t=>t(e))},window.addEventListener("resize",S)}function Ne(e){return O.add(e),S||Ae(),()=>{O.delete(e),!O.size&&typeof S=="function"&&(window.removeEventListener("resize",S),S=void 0)}}function Le(e,t){return typeof e=="function"?Ne(e):Te(e,t)}function ee(e,t){let s;const r=()=>{const{currentTime:i}=t,l=(i===null?0:i.value)/100;s!==l&&e(l),s=l};return W.preUpdate(r,!0),()=>J(r)}const We=50,X=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),ze=()=>({time:0,x:X(),y:X()}),Oe={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Y(e,t,s,r){const i=s[t],{length:o,position:l}=Oe[t],c=i.current,p=s.time;i.current=e[`scroll${l}`],i.scrollLength=e[`scroll${o}`]-e[`client${o}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=pe(0,i.scrollLength,i.current);const d=r-p;i.velocity=d>We?0:fe(i.current-c,d)}function Re(e,t,s){Y(e,"x",t,s),Y(e,"y",t,s),t.time=s}function Be(e,t){const s={x:0,y:0};let r=e;for(;r&&r!==t;)if(oe(r))s.x+=r.offsetLeft,s.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const o=r.getBoundingClientRect();s.x+=i.left-o.left,s.y+=i.top-o.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:o}=r.getBBox();s.x+=i,s.y+=o;let l=null,c=r.parentNode;for(;!l;)c.tagName==="svg"&&(l=c),c=r.parentNode;r=l}else break;return s}const M={start:0,center:.5,end:1};function V(e,t,s=0){let r=0;if(e in M&&(e=M[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),s+r}const He=[0,0];function Ie(e,t,s,r){let i=Array.isArray(e)?e:He,o=0,l=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,M[e]?e:"0"]),o=V(i[0],s,r),l=V(i[1],t),o-l}const Ce={All:[[0,0],[1,1]]},Me={x:0,y:0};function Pe(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function Fe(e,t,s){const{offset:r=Ce.All}=s,{target:i=e,axis:o="y"}=s,l=o==="y"?"height":"width",c=i!==e?Be(i,e):Me,p=i===e?{width:e.scrollWidth,height:e.scrollHeight}:Pe(i),d={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let y=!t[o].interpolate;const x=r.length;for(let b=0;b<x;b++){const j=Ie(r[b],d[l],p[l],c[o]);!y&&j!==t[o].interpolatorOffsets[b]&&(y=!0),t[o].offset[b]=j}y&&(t[o].interpolate=he(t[o].offset,me(r),{clamp:!1}),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=ge(0,1,t[o].interpolate(t[o].current))}function De(e,t=e,s){if(s.x.targetOffset=0,s.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)s.x.targetOffset+=r.offsetLeft,s.y.targetOffset+=r.offsetTop,r=r.offsetParent}s.x.targetLength=t===e?t.scrollWidth:t.clientWidth,s.y.targetLength=t===e?t.scrollHeight:t.clientHeight,s.x.containerLength=e.clientWidth,s.y.containerLength=e.clientHeight}function $e(e,t,s,r={}){return{measure:i=>{De(e,r.target,s),Re(e,s,i),(r.offset||r.target)&&Fe(e,s,r)},notify:()=>t(s)}}const T=new WeakMap,G=new WeakMap,I=new WeakMap,U=e=>e===document.scrollingElement?window:e;function te(e,{container:t=document.scrollingElement,...s}={}){if(!t)return Q;let r=I.get(t);r||(r=new Set,I.set(t,r));const i=ze(),o=$e(t,e,i,s);if(r.add(o),!T.has(t)){const c=()=>{for(const x of r)x.measure(xe.timestamp);W.preUpdate(p)},p=()=>{for(const x of r)x.notify()},d=()=>W.read(c);T.set(t,d);const y=U(t);window.addEventListener("resize",d,{passive:!0}),t!==document.documentElement&&G.set(t,Le(t,d)),y.addEventListener("scroll",d,{passive:!0}),d()}const l=T.get(t);return W.read(l,!1,!0),()=>{var d;J(l);const c=I.get(t);if(!c||(c.delete(o),c.size))return;const p=T.get(t);T.delete(t),p&&(U(t).removeEventListener("scroll",p),(d=G.get(t))==null||d(),window.removeEventListener("resize",p))}}const q=new Map;function Ke(e){const t={value:0},s=te(r=>{t.value=r[e.axis].progress*100},e);return{currentTime:t,cancel:s}}function re({source:e,container:t,...s}){const{axis:r}=s;e&&(t=e);const i=q.get(t)??new Map;q.set(t,i);const o=s.target??"self",l=i.get(o)??{},c=r+(s.offset??[]).join(",");return l[c]||(l[c]=!s.target&&be()?new ScrollTimeline({source:t,axis:r}):Ke({container:t,...s})),l[c]}function Xe(e,t){const s=re(t);return e.attachTimeline({timeline:t.target?void 0:s,observe:r=>(r.pause(),ee(i=>{r.time=r.iterationDuration*i},s))})}function Ye(e){return e.length===2}function Ve(e,t){return Ye(e)?te(s=>{e(s[t.axis].progress,s)},t):ee(e,re(t))}function Ge(e,{axis:t="y",container:s=document.scrollingElement,...r}={}){if(!s)return Q;const i={axis:t,container:s,...r};return typeof e=="function"?Ve(e,i):Xe(e,i)}const Ue=()=>({scrollX:N(0),scrollY:N(0),scrollXProgress:N(0),scrollYProgress:N(0)}),L=e=>e?!e.current:!1;function qe({container:e,target:t,...s}={}){const r=ae(Ue),i=f.useRef(null),o=f.useRef(!1),l=f.useCallback(()=>(i.current=Ge((c,{x:p,y:d})=>{r.scrollX.set(p.current),r.scrollXProgress.set(p.progress),r.scrollY.set(d.current),r.scrollYProgress.set(d.progress)},{...s,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0}),()=>{var c;(c=i.current)==null||c.call(i)}),[e,t,JSON.stringify(s.offset)]);return le(()=>{if(o.current=!1,L(e)||L(t)){o.current=!0;return}else return l()},[l]),f.useEffect(()=>{if(o.current)return K(!L(e)),K(!L(t)),l()},[l]),r}const _e=P.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);
`,Je=P.header`
    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`,Qe=P.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: color-mix(in oklab, var(--card) 92%, transparent);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    .scroller {
        max-height: min(72vh, 780px);
        overflow: auto;
        position: relative;
        scroll-behavior: smooth !important;
        /* Scrollbar that doesn’t shift layout */
        scrollbar-gutter: stable;
    }

    /* Sticky header that shrinks */
    .sticky {
        position: sticky;
        top: 0;
        z-index: 5;
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: var(--space-4);
        border-bottom: 1px solid var(--border);
        background: color-mix(in oklab, var(--card) 80%, transparent);
        /* Make backdrop filters pop on supporting browsers */
        -webkit-backdrop-filter: saturate(1.1);
        backdrop-filter: saturate(1.1);
    }

    .left {
        display: inline-grid;
        grid-auto-flow: column;
        align-items: center;
        gap: 10px;
    }
    .logoDot {
        width: 14px;
        height: 14px;
        border-radius: 99px;
        background: var(--primary);
        box-shadow: 0 0 0 3px
            color-mix(in oklab, var(--primary) 32%, transparent);
    }
    .title {
        font-weight: 700;
        letter-spacing: 0.2px;
        color: var(--text);
        line-height: 1.1;
    }

    .tabs {
        display: flex;
        align-items: center;
        gap: 2px;
        justify-content: center;
    }
    .tab {
        position: relative;
        border: none;
        background: transparent;
        color: var(--text-muted);
        padding: 10px 12px;
        border-radius: var(--radius-sm);
        cursor: pointer;
        font-weight: 600;
    }
    .tab:hover {
        color: var(--text);
    }
    .tab.active {
        color: var(--text);
    }
    .tab .underline {
        position: absolute;
        left: 8px;
        right: 8px;
        bottom: 6px;
        height: 2px;
        border-radius: 2px;
        background: var(--primary);
        box-shadow: 0 0 0 2px
            color-mix(in oklab, var(--primary) 22%, transparent);
    }

    .right {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .aboutBtn {
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        height: 34px;
        padding: 0 12px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }

    .content {
        padding: var(--space-6);
        display: grid;
        gap: var(--space-6);
        padding-top: 100px;
    }

    .block {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        padding: var(--space-6);
        color: var(--text);
    }
    .blockTitle {
        font-size: 18px;
        margin-bottom: var(--space-3);
        color: var(--text);
    }
    .block p {
        color: var(--text);
    }
    .block ul {
        margin-left: 18px;
        color: var(--text);
    }
    .callout {
        margin-top: var(--space-4);
        padding: var(--space-4);
        border: 1px dashed var(--border);
        background: color-mix(in oklab, var(--primary) 8%, var(--surface));
        border-radius: var(--radius-md);
    }

    /* ---- Modal ---- */
    .modalWrap {
        position: fixed;
        inset: 0;
        z-index: 30;
        display: grid;
        place-items: center;
    }
    .backdrop {
        position: absolute;
        inset: 0;
        background: hsl(0 0% 0% / 0.5);
        border: 0;
        padding: 0;
        margin: 0;
        cursor: default;
    }
    .modal {
        position: relative;
        width: min(560px, calc(100vw - 32px));
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-md);
        overflow: hidden;
    }
    .modal header,
    .modal footer,
    .modal .body {
        padding: var(--space-4) var(--space-6);
    }
    .modal header {
        border-bottom: 1px solid var(--border);
    }
    .modal footer {
        border-top: 1px solid var(--border);
        display: flex;
        justify-content: flex-end;
    }
    .closeBtn {
        height: 34px;
        padding: 0 12px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .xBtn {
        position: absolute;
        top: 8px;
        right: 10px;
        border: none;
        background: transparent;
        color: var(--text-muted);
        font-size: 24px;
        cursor: pointer;
    }

    @media (width < 560px) {
        .scroller {
            max-height: min(70vh, 720px);
        }
        .tabs {
            display: none;
        } /* keep compact in small screens */
    }
`,C={Wrapper:_e,Header:Je,Stage:Qe},k=[{id:"overview",title:"Overview"},{id:"design",title:"Design Notes"},{id:"behavior",title:"Behavior & UX"},{id:"a11y",title:"Accessibility"},{id:"perf",title:"Performance"},{id:"impl",title:"Implementation Tips"}];function _(e){try{e==null||e.focus()}catch{}}function it(){const e=f.useRef(null),{scrollYProgress:t}=qe({container:e}),s=ye(t,{stiffness:240,damping:28,mass:.9}),r=g(s,[0,.22],[96,56]),i=g(s,[0,.22],[20,12]),o=g(s,[0,.22],[1,.86]),l=g(s,[0,.22],[0,-2]),c=g(s,[0,.22],[22,18]),p=g(s,[0,.22],[0,8]),d=g(s,[0,.22],[.06,.18]),y=g(d,a=>`0 10px 30px hsl(0 0% 0% / ${a})`),x=g(p,a=>`saturate(1.1) blur(${a}px)`),[b,j]=f.useState(k[0].id),R=f.useRef({});f.useEffect(()=>{const a=e.current;if(!a)return;const u=new IntersectionObserver(h=>{const m=h.filter(E=>E.isIntersecting).sort((E,ne)=>ne.intersectionRatio-E.intersectionRatio);m[0]&&j(m[0].target.id)},{root:a,threshold:[.25,.5,.75],rootMargin:"-10% 0px -70% 0px"});return k.forEach(h=>{const m=R.current[h.id];m&&u.observe(m)}),()=>u.disconnect()},[]);const F=f.useRef({}),se=a=>{if(a.key!=="ArrowRight"&&a.key!=="ArrowLeft")return;a.preventDefault();const u=k.findIndex(E=>E.id===b),h=a.key==="ArrowRight"?Math.min(k.length-1,u+1):Math.max(0,u-1),m=k[h].id;j(m),_(F.current[m]),D(m)},D=a=>{const u=e.current,h=R.current[a];if(!u||!h)return;const m=h.offsetTop-8;u.scrollTo({top:m,behavior:"smooth"})},[B,A]=f.useState(!1),$=f.useRef(null);f.useEffect(()=>{if(B){const a=requestAnimationFrame(()=>_($.current));return()=>cancelAnimationFrame(a)}},[B]);const[ie,H]=f.useState(!1);return f.useEffect(()=>{let a=requestAnimationFrame(()=>{let u=requestAnimationFrame(()=>H(!0));H._r2=u});return()=>{cancelAnimationFrame(a),cancelAnimationFrame(H._r2||0)}},[]),n.jsx(ve,{reducedMotion:"never",children:n.jsxs(C.Wrapper,{children:[n.jsx(C.Header,{children:n.jsxs("div",{className:"heading",children:[n.jsx("h1",{children:"Section Header — Sticky Shrink"}),n.jsx("p",{className:"muted",children:"Large title collapses into a compact bar as you scroll the section. Tabs get an animated underline."})]})}),n.jsx(C.Stage,{children:n.jsxs("div",{className:"scroller",ref:e,"aria-label":"Demo scroller with sticky header",children:[n.jsxs(w.div,{className:"sticky",style:{height:r,paddingInline:i,boxShadow:y,WebkitBackdropFilter:x,backdropFilter:x},"data-mounted":ie,children:[n.jsxs("div",{className:"left",children:[n.jsx(w.span,{className:"logoDot",style:{scale:o},"aria-hidden":"true"}),n.jsx(w.h2,{className:"title",style:{y:l,fontSize:c},children:"Motion Patterns"})]}),n.jsx("nav",{className:"tabs",role:"tablist","aria-label":"Sections",onKeyDown:se,children:k.map(a=>{const u=b===a.id;return n.jsxs("button",{role:"tab","aria-selected":u,tabIndex:u?0:-1,ref:h=>F.current[a.id]=h,className:`tab ${u?"active":""}`,onClick:()=>{j(a.id),D(a.id)},title:a.title,children:[n.jsx("span",{children:a.title}),u&&n.jsx(w.div,{className:"underline",layoutId:"tab-underline",transition:{type:"spring",stiffness:600,damping:34,mass:.6}})]},a.id)})}),n.jsx("div",{className:"right",children:n.jsx(w.button,{whileTap:{scale:.96},className:"aboutBtn",onClick:()=>A(!0),"aria-haspopup":"dialog","aria-controls":"about-modal",title:"About this pattern",children:"About"})})]}),n.jsx("div",{className:"content",children:k.map((a,u)=>n.jsxs("section",{className:"block",children:[n.jsx("h3",{id:a.id,ref:h=>R.current[a.id]=h,className:"blockTitle",children:a.title}),n.jsx("p",{children:"This sticky-shrink pattern mirrors iOS large titles: generous at the top for scanning, compressing to a compact bar once you commit to the content. Keep motion minimal: values are tiny and spring-tuned so it feels deliberate, not floaty."}),n.jsxs("ul",{children:[n.jsx("li",{children:"Transforms only (height via MotionValue on the wrapper; no layout thrash)."}),n.jsx("li",{children:"Blur ramps in as the header shrinks to separate it from scrollable content."}),n.jsxs("li",{children:["Tabs use ",n.jsx("code",{children:"layoutId"})," underline for delightful, consistent feedback."]})]}),n.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel augue a mi interdum luctus. Mauris vehicula lectus sed nibh egestas, at facilisis orci facilisis. Nulla facilisi. Sed nam erat at dui tincidunt euismod. Integer pretium, erat a finibus sodales, turpis lectus porttitor justo, id rhoncus velit arcu et lectus."}),u===2&&n.jsxs("div",{className:"callout",children:[n.jsx("b",{children:"Tip:"})," keep the header background simple; avoid heavy images or shadows."]})]},a.id))})]})}),n.jsx(ce,{children:B&&n.jsxs(w.div,{id:"about-modal",role:"dialog","aria-modal":"true","aria-label":"About sticky header pattern",className:"modalWrap",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[n.jsxs(w.div,{className:"modal",initial:{y:12,opacity:0,scale:.98},animate:{y:0,opacity:1,scale:1},exit:{y:8,opacity:0,scale:.98},transition:{duration:.22,ease:[.22,1,.36,1]},children:[n.jsx("header",{children:n.jsx("h4",{children:"About this pattern"})}),n.jsxs("div",{className:"body",children:[n.jsx("p",{children:"Use sticky-shrink headers when the content scrolls within a self-contained region (cards, modals, side panels). The large title helps orientation; the compact state saves space."}),n.jsxs("ul",{children:[n.jsx("li",{children:"Animate tiny deltas (scale < 1.0, translate < 4px)."}),n.jsx("li",{children:"Prefer springs; they de-noise trackpad scroll micro-deltas."}),n.jsx("li",{children:"Respect reduced motion in production; demo forces motion for visibility."})]})]}),n.jsx("footer",{children:n.jsx("button",{ref:$,className:"closeBtn",onClick:()=>A(!1),children:"Close"})}),n.jsx("button",{className:"xBtn","aria-label":"Close",title:"Close",onClick:()=>A(!1),children:"×"})]}),n.jsx("button",{className:"backdrop",onClick:()=>A(!1),"aria-hidden":"true"})]})})]})})}export{it as default};
