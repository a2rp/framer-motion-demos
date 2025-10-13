import{r as s,d as l,j as e}from"./index-BUutmlIb.js";import{u as T}from"./use-motion-value-DdFrqe5P.js";import{u as f}from"./use-transform-BdW5KIR2.js";import{M as I,m as x}from"./proxy-DSa7FBfm.js";import{a as R}from"./index-DJWqldsu.js";function E(a,o,i){s.useInsertionEffect(()=>a.on(o,i),[a,o,i])}const c={Wrapper:l.div`
        display: grid;
        gap: var(--space-6);
        padding: var(--space-6);
        max-width: 820px;
        margin: 0 auto;
        color: var(--text);
    `,Header:l.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-4);
        flex-wrap: wrap;

        .heading h1 {
            font-size: 24px;
            line-height: 1.2;
        }
        .heading .muted {
            color: var(--text-muted);
            margin-top: 6px;
        }

        .meta {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--text-muted);
        }
        .meta .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--primary);
        }
    `,Stage:l.section`
        position: relative;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        overflow: hidden;

        /* Indicator pinned to top; we also translate it with the same MotionValue "y" */
        .ptr-indicator {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 80px; /* space revealed while pulling */
            display: grid;
            place-items: center;
            z-index: 2;
            pointer-events: none;
            color: var(--text);
            background: radial-gradient(
                    900px 220px at 10% 0%,
                    hsl(210 90% 60% / 0.06),
                    transparent 60%
                ),
                var(--card);
            border-bottom: 1px dashed var(--border);
        }

        .ring {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--surface);
            border: 1px solid var(--border);
            box-shadow: var(--shadow-sm);
        }
        .ring svg {
            display: block;
        }
        .ring .track {
            fill: none;
            stroke: var(--border);
            stroke-width: 3;
        }
        .ring .prog {
            fill: none;
            stroke: var(--primary);
            stroke-width: 3;
            stroke-linecap: round;
            transform: rotate(-90deg);
            transform-origin: 16px 16px;
        }
        /* Spinner when refreshing */
        .ring.refreshing .prog {
            stroke-dasharray: 18 18;
            animation: spin 0.9s linear infinite;
        }
        @keyframes spin {
            to {
                transform: rotate(270deg);
            }
        }

        .ring .label {
            font-size: 12px;
            color: var(--text);
        }

        .done {
            margin-top: 6px;
            font-size: 12px;
            color: var(--text-muted);
        }

        /* Draggable sheet that contains the list */
        .ptr-sheet {
            position: relative;
            z-index: 1;
            will-change: transform;
            background: transparent; /* content cards handle their own surfaces */
        }

        .list {
            display: grid;
            gap: var(--space-4);
            padding: 90px var(--space-6) var(--space-6); /* top padding leaves room for indicator */
            list-style: none;
        }

        .row {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: var(--space-4);
            align-items: start;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            padding: var(--space-4);
            box-shadow: var(--shadow-sm);
        }

        .pill {
            padding: 4px 10px;
            border-radius: 999px;
            background: var(--primary);
            color: var(--primary-contrast);
            font-size: 12px;
            align-self: start;
        }

        .text h3 {
            font-size: 16px;
            margin-bottom: 6px;
        }
        .text p {
            color: var(--text-muted);
        }
    `,Notes:l.aside`
        color: var(--text-muted);
        ul {
            padding-left: 18px;
        }
    `},P=a=>({id:`${Date.now()}-${a}`,title:`Item ${a}`,body:"Pull down to refresh. This list simulates network fetch with a short delay."}),z=140,p=90,A=64,u=12,v=2*Math.PI*u;function C(){const[a,o]=s.useState(()=>Array.from({length:12},(r,g)=>P(g+1))),[i,w]=s.useState(()=>new Date),y=s.useMemo(()=>new Intl.DateTimeFormat("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(i),[i]),[d,n]=s.useState("idle"),[b,j]=s.useState(!1),t=T(0),k=f(t,[0,p],[0,1],{clamp:!0}),N=f(k,r=>v*(1-r));E(t,"change",r=>j(r>=p));const h=d!=="refreshing",m=r=>R(t,r,{type:"spring",stiffness:420,damping:36,mass:.9}),D=async()=>{n("refreshing"),await m(A),await new Promise(r=>setTimeout(r,900)),o(r=>[{id:`${Date.now()}-N1`,title:"✨ New item",body:"Freshly fetched content."},...r]),w(new Date),await m(0),n("done"),setTimeout(()=>n("idle"),900)},S=()=>{h&&n("pulling")},M=async()=>{if(!h)return;t.get()>=p?await D():(await m(0),n("idle"))};return s.useEffect(()=>{let r=requestAnimationFrame(()=>{let g=requestAnimationFrame(()=>t.set(0));t._r2=g});return()=>{cancelAnimationFrame(r),cancelAnimationFrame(t._r2||0)}},[t]),e.jsx(I,{reducedMotion:"never",children:e.jsxs(c.Wrapper,{children:[e.jsxs(c.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Pull-to-Refresh"}),e.jsx("p",{className:"muted",children:"Pull down from the top. The ring fills with distance; cross the threshold to trigger a refresh."})]}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"dot"}),e.jsxs("span",{children:["Last updated: ",y]})]})]}),e.jsxs(c.Stage,{children:[e.jsxs(x.div,{className:"ptr-indicator",style:{y:t},"aria-hidden":!0,children:[e.jsxs("div",{className:`ring ${d}`,children:[e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32","aria-hidden":!0,children:[e.jsx("circle",{cx:"16",cy:"16",r:u,className:"track"}),e.jsx(x.circle,{cx:"16",cy:"16",r:u,className:"prog",style:{strokeDasharray:v,strokeDashoffset:N}})]}),e.jsx("span",{className:"label",children:d==="refreshing"?"Refreshing…":b?"Release to refresh":"Pull to refresh"})]}),d==="done"&&e.jsx("div",{className:"done",children:"✓ Updated"})]}),e.jsx(x.div,{className:"ptr-sheet",drag:"y",dragConstraints:{top:0,bottom:z},dragElastic:.28,dragMomentum:!1,style:{y:t},onDragStart:S,onDragEnd:M,dragListener:h,children:e.jsx("ul",{className:"list",children:a.map(r=>e.jsxs("li",{className:"row",children:[e.jsx("div",{className:"pill",children:"Item"}),e.jsxs("div",{className:"text",children:[e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.body})]})]},r.id))})})]}),e.jsx(c.Notes,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"y"})," MotionValue drives both the sheet and the indicator; threshold at"," ",e.jsxs("b",{children:[p,"px"]}),"."]}),e.jsx("li",{children:"Transforms only (no layout thrash); short springs keep it crisp."}),e.jsxs("li",{children:["In production, call your fetch in ",e.jsx("code",{children:"doRefresh()"})," and update the list."]})]})})]})})}export{C as default};
