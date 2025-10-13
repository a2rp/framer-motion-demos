import{d as s,r as n,j as e,A as k}from"./index-CEdkCtCm.js";import{m as j}from"./pages-CvVyMsYv.js";import{M as N,m as i}from"./proxy-KaJM56Od.js";const E=s.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1080px;
    margin: 0 auto;
    color: var(--text);
`,S=s.header`
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
`,$=s.div`
    display: grid;
    gap: var(--space-4);
    grid-template-columns: repeat(3, minmax(0, 1fr));

    @media (width < 900px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (width < 560px) {
        grid-template-columns: 1fr;
    }

    .card {
        display: grid;
        grid-template-rows: 120px auto auto;
        gap: 10px;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        color: var(--text);
        text-align: left;
        padding: var(--space-4);
        cursor: pointer;
        box-shadow: var(--shadow-sm);
        transition: transform 140ms ease, box-shadow 140ms ease,
            border-color 140ms ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: color-mix(in oklab, var(--border), var(--accent) 18%);
        }

        .thumb {
            border-radius: var(--radius-md);
            background: radial-gradient(
                    600px 140px at 10% 0%,
                    var(--accentSoft),
                    transparent 60%
                ),
                linear-gradient(
                    135deg,
                    var(--accent),
                    color-mix(in oklab, var(--accent), white 22%)
                );
            box-shadow: inset 0 0 0 1px
                color-mix(in oklab, var(--accent), black 35% / 10%);
        }

        .title {
            font-size: 16px;
            line-height: 1.3;
        }

        .excerpt {
            color: var(--text-muted);
            font-size: 13px;
        }
    }
`,C=s.div`
    position: fixed;
    inset: 0;
    background: hsl(0 0% 0% / 0.5);
    z-index: 1000;
`,A=s.div`
    position: fixed;
    inset: 0;
    z-index: 1001;
    display: grid;
    place-items: center;
    padding: var(--space-6);
`,D=s.article`
    width: min(920px, 96vw);
    max-height: min(82vh, 820px);
    display: grid;
    grid-template-rows: 200px auto auto auto;
    gap: var(--space-4);

    background: var(--card);
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    padding: var(--space-6);
    overflow: auto;

    .thumb.lg {
        border-radius: var(--radius-md);
        background: radial-gradient(
                1200px 280px at 10% 0%,
                var(--accentSoft),
                transparent 60%
            ),
            linear-gradient(
                135deg,
                var(--accent),
                color-mix(in oklab, var(--accent), white 18%)
            );
        box-shadow: inset 0 0 0 1px
                color-mix(in oklab, var(--accent), black 35% / 10%),
            0 16px 40px hsl(0 0% 0% / 0.2);
    }

    .title {
        font-size: 22px;
    }

    .body {
        color: var(--text);
    }

    .bullets {
        margin-left: 18px;
        display: grid;
        gap: 6px;
        color: var(--text);
    }
`,I=s.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--space-4);

    .nav {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .nav button {
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 6px 10px;
        cursor: pointer;

        &:disabled {
            opacity: 0.45;
            cursor: not-allowed;
        }
    }

    .count {
        color: var(--text-muted);
        font-size: 12px;
    }

    .close {
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        border-radius: var(--radius-md);
        padding: 8px 14px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
`,o={Wrapper:E,Header:S,Grid:$,Backdrop:C,DetailHolder:A,Detail:D,DetailFooter:I},z=[{key:"g1",title:"Analytics Overview",body:"High-level metrics snapshot. Click to see breakdowns, comparisons, and trends that matter."},{key:"g2",title:"Orders",body:"Live order feed merged with fulfillment state. Keep the pipeline flowing with minimal clicks."},{key:"g3",title:"Customers",body:"Segmentation + cohorts. Turn scattered events into a single, navigable customer story."}],p=j(z,5),x=[210,260,340,20,120,190,280,330];function P(){const[r,l]=n.useState(null),m=n.useRef(null);n.useEffect(()=>{if(r!=null){const a=requestAnimationFrame(()=>{var t;return(t=m.current)==null?void 0:t.focus()});return()=>cancelAnimationFrame(a)}},[r]);const h=r!=null&&r>0,v=r!=null&&r<p.length-1,y=a=>l(a),u=()=>l(null),g=()=>h&&l(a=>a-1),b=()=>v&&l(a=>a+1);n.useEffect(()=>{if(r==null)return;function a(t){if(t.key==="Escape")return u();if(t.key==="ArrowLeft")return g();if(t.key==="ArrowRight")return b()}return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[r]);const f=n.useMemo(()=>({opacity:0,y:14,scale:.98}),[]),w=n.useMemo(()=>({opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:260,damping:26}}),[]);return e.jsx(N,{reducedMotion:"never",children:e.jsxs(o.Wrapper,{children:[e.jsx(o.Header,{children:e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Grid → Detail (Explode)"}),e.jsxs("p",{className:"muted",children:["Select a card to morph it into a focused detail view via shared ",e.jsx("code",{children:"layoutId"}),"."]})]})}),e.jsx(o.Grid,{children:p.map((a,t)=>{const d=x[t%x.length],c=a.id||`item-${t+1}`;return e.jsxs(i.button,{className:"card",layoutId:`card-${c}`,initial:f,animate:w,onClick:()=>y(t),style:{"--accent":`hsl(${d} 90% 56%)`,"--accentSoft":`hsl(${d} 90% 56% / 0.12)`},children:[e.jsx(i.div,{className:"thumb",layoutId:`thumb-${c}`}),e.jsx(i.h3,{className:"title",layoutId:`title-${c}`,children:a.title}),e.jsx("p",{className:"excerpt",children:a.body})]},c)})}),e.jsx(k,{children:r!=null&&e.jsxs(e.Fragment,{children:[e.jsx(o.Backdrop,{as:i.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:u,"aria-hidden":"true"},"backdrop"),e.jsx(o.DetailHolder,{as:i.div,initial:{opacity:1},animate:{opacity:1},exit:{opacity:.6},"aria-modal":"true",role:"dialog","aria-label":"Detail",children:(()=>{const a=p[r],t=a.id||`item-${r+1}`,d=x[r%x.length];return e.jsxs(o.Detail,{as:i.article,layoutId:`card-${t}`,style:{"--accent":`hsl(${d} 90% 56%)`,"--accentSoft":`hsl(${d} 90% 56% / 0.12)`},children:[e.jsx(i.div,{className:"thumb lg",layoutId:`thumb-${t}`}),e.jsx(i.h2,{className:"title",layoutId:`title-${t}`,children:a.title}),e.jsxs("p",{className:"body",children:[a.body," This view expands the selected card, preserves its layout identity, and adds supporting details without a hard context switch."]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Shared ",e.jsx("code",{children:"layoutId"})," between grid card and detail container."]}),e.jsx("li",{children:"Backdrop + keyboard support (Esc/←/→)."}),e.jsx("li",{children:"Transforms/opacity only; token-themed visuals."})]}),e.jsxs(o.DetailFooter,{children:[e.jsxs("div",{className:"nav",children:[e.jsx("button",{onClick:g,disabled:!h,"aria-label":"Previous item",children:"← Prev"}),e.jsxs("span",{className:"count",children:[r+1," / ",p.length]}),e.jsx("button",{onClick:b,disabled:!v,"aria-label":"Next item",children:"Next →"})]}),e.jsx("button",{className:"close",onClick:u,ref:m,"aria-label":"Close detail",children:"Close"})]})]})})()},"holder")]})})]})})}export{P as default};
