import{d as l,r as p,j as e,A as f}from"./index-Bg5Ft_Mu.js";import{m as v,M as w}from"./proxy-DHsq80Pc.js";import{m as k}from"./pages-CvVyMsYv.js";const i={Wrapper:l.div`
        display: grid;
        gap: var(--space-6);
        padding: var(--space-6);
        max-width: 980px;
        margin: 0 auto;
        color: var(--text);

        .muted {
            color: var(--text-muted);
        }
        code {
            background: var(--surface);
            padding: 0 4px;
            border-radius: 4px;
        }
    `,Header:l.header`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--space-4);
        justify-content: space-between;

        h1 {
            font-size: 24px;
            line-height: 1.2;
        }

        /* Controls */
        & > .heading {
            min-width: 280px;
        }
    `,Controls:l.div`
        display: grid;
        grid-template-columns: auto auto 1fr auto auto auto;
        gap: var(--space-4);
        align-items: center;

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
            min-width: 180px;
            height: 34px;
            border: 1px solid var(--border);
            background: var(--surface);
            color: var(--text);
            border-radius: var(--radius-sm);
            padding: 0 8px;
        }

        .spacer {
            width: 12px;
        }

        .btn {
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            border-radius: var(--radius-md);
            padding: 8px 14px;
            box-shadow: var(--shadow-sm);
            cursor: pointer;
            height: 34px;
        }
        .btn.ghost {
            background: var(--surface);
        }
    `,Stage:l.section`
        display: grid;
        gap: var(--space-4);
    `,Panel:l(v.article)`
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        overflow: hidden; /* clips measure mode */
        will-change: height;

        &.open {
            box-shadow: var(--shadow-md);
        }
    `,PanelHeader:l.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-4) var(--space-6);
        cursor: pointer;
        user-select: none;
        background: var(--surface);

        .titles {
            display: grid;
            gap: 6px;
        }
        .kicker {
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-size: 11px;
            color: var(--text-muted);
        }
        h2 {
            font-size: 18px;
        }

        .chev {
            display: inline-flex;
            width: 20px;
            justify-content: center;
            color: var(--text-muted);
        }
    `,PanelBody:l.div`
        padding: var(--space-4) var(--space-6);
        background: var(--card);
        color: var(--text);

        .body {
            margin-bottom: var(--space-4);
        }
        .bullets {
            margin-left: 18px;
            display: grid;
            gap: 6px;
            color: var(--text);
        }
    `,MeasureWrap:l.div`
        overflow: hidden;
        background: var(--card);
    `,Notes:l.aside`
        color: var(--text-muted);
        ul {
            padding-left: 18px;
        }
    `},N=[{key:"gm1",title:"Grow from measure",body:"Animate height from its measured content size instead of hardcoded values. Great for accordions, expanding cards, and disclosure patterns.",bullets:["No magic numbers","Handles dynamic content","Pairs well with layout transitions"]},{key:"gm2",title:"When to use",body:"Anytime content can change size-user-generated text, filters, validation blocks-and you want a smooth expand/collapse.",bullets:["Forms & validation","Filter panels","Doc sections"]},{key:"gm3",title:"Implementation",body:"Two techniques: (1) layout animation, where Framer Motion measures for you, (2) manual measure using ResizeObserver and animating height.",bullets:["layout on containers","ResizeObserver for manual","Transforms/opacity only elsewhere"]}],M=k(N,5);function z(a){const n=p.useRef(null),[r,s]=p.useState(0);return p.useLayoutEffect(()=>{const d=n.current;if(!d)return;const c=()=>s(a?d.scrollHeight:0);c();const x=window.ResizeObserver||class{observe(){}disconnect(){}},o=new x(()=>c());o.observe(d);const h=()=>c();return window.addEventListener("resize",h),()=>{var u;(u=o.disconnect)==null||u.call(o),window.removeEventListener("resize",h)}},[a]),{ref:n,height:r}}function E(){const[a,n]=p.useState("layout"),[r,s]=p.useState(0),[d,c]=p.useState(0),x=r===-2,o=p.useMemo(()=>({type:"spring",stiffness:260,damping:28,mass:.9}),[]),h=t=>s(m=>m===t?-1:t),u=()=>s(-2),g=()=>s(-1),b=()=>{if(a==="layout"){const t=r;s(-1),requestAnimationFrame(()=>s(t===-1?0:t))}else c(t=>t+1)};return e.jsx(w,{reducedMotion:"never",children:e.jsxs(i.Wrapper,{children:[e.jsxs(i.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Grow-From-Measure"}),e.jsxs("p",{className:"muted",children:["Smooth expand/collapse using ",e.jsx("code",{children:"layout"})," or measured ",e.jsx("code",{children:"height"}),"."]})]}),e.jsxs(i.Controls,{role:"toolbar","aria-label":"Grow controls",children:[e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Technique"}),e.jsxs("select",{value:a,onChange:t=>n(t.target.value),children:[e.jsx("option",{value:"layout",children:"Layout (preferred)"}),e.jsx("option",{value:"measure",children:"Measured height"})]})]}),e.jsx("div",{className:"spacer"}),e.jsx("button",{className:"btn",onClick:u,title:"Open all",children:"Open all"}),e.jsx("button",{className:"btn",onClick:g,title:"Close all",children:"Close all"}),e.jsx("button",{className:"btn ghost",onClick:b,title:"Replay",children:"Replay"})]})]}),e.jsx(i.Stage,{children:M.map((t,m)=>{const j=x||r===m;return e.jsx(P,{index:m,item:t,isOpen:j,onToggle:()=>h(m),spring:o,mode:a,replayId:d},t.id)})}),e.jsxs(i.Notes,{children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Layout"}),": container’s height animates via ",e.jsx("code",{children:"layout"})," on open/close."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Measure"}),": wrapper animates numeric ",e.jsx("code",{children:"height"})," to the measured ",e.jsx("code",{children:"scrollHeight"}),"."]}),e.jsx("li",{children:"Short timings, transform/opacity elsewhere = smooth and cheap."})]})]})]})})}function P({item:a,index:n,isOpen:r,onToggle:s,spring:d,mode:c,replayId:x}){const o=`gm-panel-${n}`,{ref:h,height:u}=z(r);return e.jsxs(i.Panel,{layout:c==="layout",className:r?"open":"",children:[e.jsxs(i.PanelHeader,{onClick:s,"aria-expanded":r,"aria-controls":o,role:"button",tabIndex:0,onKeyDown:g=>(g.key==="Enter"||g.key===" ")&&s(),children:[e.jsxs("div",{className:"titles",children:[e.jsx("span",{className:"kicker",children:"Section"}),e.jsx("h2",{children:a.title})]}),e.jsx(v.span,{className:"chev",animate:{rotate:r?90:0},transition:{duration:.2},"aria-hidden":!0,children:"▸"})]}),c==="layout"?e.jsx(f,{initial:!0,children:r&&e.jsx(v.div,{layout:!0,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{layout:d,opacity:{duration:.18}},id:o,role:"region","aria-labelledby":o+"-label",children:e.jsx(i.PanelBody,{children:e.jsx(y,{item:a})})},`body-${n}-${open?1:0}`)}):e.jsx(i.MeasureWrap,{as:v.div,style:{height:u},initial:{height:0},animate:{height:u},transition:d,"aria-hidden":!r,children:e.jsx("div",{ref:h,children:e.jsx(i.PanelBody,{children:e.jsx(y,{item:a})})})},`measure-${n}-${x}`)]})}function y({item:a}){var n;return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"body",children:a.body}),(n=a.bullets)!=null&&n.length?e.jsx("ul",{className:"bullets",children:a.bullets.map((r,s)=>e.jsx("li",{children:r},s))}):null]})}export{E as default};
