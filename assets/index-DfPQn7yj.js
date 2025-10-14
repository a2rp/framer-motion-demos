import{d as h,r as n,j as e,A as j}from"./index-B-21U0DQ.js";import{M as y,m as g}from"./proxy-BihD2B5F.js";const k=h.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);
`,N=h.header`
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

    .ctrl.switch {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        user-select: none;
    }
    .ctrl.switch input {
        accent-color: var(--primary);
    }
    .ctrl.switch .t {
        font-size: 14px;
        color: var(--text);
    }

    .pill {
        display: inline-flex;
        align-items: center;
        height: 28px;
        padding: 0 10px;
        border-radius: 999px;
        font-size: 12px;
        border: 1px solid var(--border);
        background: var(--surface);
    }
    .pill.ok {
        color: hsl(152 67% 35%);
        border-color: hsl(152 30% 45% / 0.35);
    }
    .pill.bad {
        color: hsl(5 80% 55%);
        border-color: hsl(5 55% 50% / 0.35);
    }
`,A=h.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;

    /* Pinned banner space */
    .banner {
        position: sticky;
        top: 0;
        z-index: 2;
        border-bottom: 1px solid var(--border);
        overflow: visible; /* allow subtle effects to breathe */
    }

    .banner.offline {
        background: linear-gradient(0deg, hsl(5 90% 55% / 0.12), transparent),
            var(--surface);
        color: hsl(0 100% 98%);
    }
    .banner.online {
        background: linear-gradient(0deg, hsl(152 60% 45% / 0.14), transparent),
            var(--surface);
        color: hsl(0 0% 98%);
    }

    .banner .content {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: var(--space-4);
        padding: 10px 14px;
    }

    .banner .icon {
        width: 26px;
        height: 26px;
        display: inline-grid;
        place-items: center;
        color: currentColor;
        filter: drop-shadow(0 1px 8px hsl(0 0% 0% / 0.25));
    }

    .banner .text {
        display: grid;
        gap: 2px;
        min-width: 0;
    }
    .banner .text strong {
        font-size: 14px;
        letter-spacing: 0.2px;
        color: var(--text);
    }
    .banner .text .sub {
        color: var(--text-muted);
        font-size: 12px;
    }

    .banner .actions {
        display: inline-flex;
        gap: 8px;
    }

    .btn {
        height: 32px;
        padding: 0 12px;
        border-radius: var(--radius-sm);
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

    /* Auto-hide progress bar for "back online" */
    .autoHideBar {
        height: 2px;
        transform-origin: left center;
        background: hsl(152 70% 40%);
    }

    /* Demo content */
    .paper {
        padding: var(--space-6);
    }
    .paper h3 {
        margin-bottom: 8px;
    }
    .paper .list {
        margin-top: 10px;
        display: grid;
        gap: 8px;
    }
    .paper li {
        padding: 10px 12px;
        border-radius: var(--radius-sm);
        background: var(--surface);
        border: 1px solid var(--border);
        color: var(--text);
    }
`,f={Wrapper:k,Header:N,Stage:A};function S(){const[r,t]=n.useState(()=>typeof navigator<"u"?navigator.onLine:!0);return n.useEffect(()=>{const s=()=>t(!0),i=()=>t(!1);return window.addEventListener("online",s),window.addEventListener("offline",i),()=>{window.removeEventListener("online",s),window.removeEventListener("offline",i)}},[]),r}function B(){const r=S(),[t,s]=n.useState(!1),i=r&&!t,[b,o]=n.useState(!1),[a,x]=n.useState("offline"),[v,p]=n.useState(!1),l=n.useRef(0),u=n.useRef(0);n.useEffect(()=>{let c=requestAnimationFrame(()=>{let d=requestAnimationFrame(()=>p(!0));p._r2=d});return()=>{cancelAnimationFrame(c),cancelAnimationFrame(p._r2||0)}},[]),n.useEffect(()=>(window.clearTimeout(l.current),i?(x("online"),o(!0),u.current++,l.current=window.setTimeout(()=>o(!1),1600)):(x("offline"),o(!0),u.current++),()=>window.clearTimeout(l.current)),[i]);const m=()=>{window.clearTimeout(l.current),o(!1)},w=n.useMemo(()=>({hidden:{y:"-100%",opacity:1e-4},shown:{y:"0%",opacity:1}}),[]);return e.jsx(y,{children:e.jsxs(f.Wrapper,{children:[e.jsxs(f.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Offline Banner Slide-Down"}),e.jsx("p",{className:"muted",children:"When the app goes offline, a banner slides down and pins. On reconnect, it shows a “Back online” notice and auto-dismisses."})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Demo controls",children:[e.jsxs("label",{className:"ctrl switch",children:[e.jsx("input",{type:"checkbox",checked:t,onChange:c=>s(c.target.checked),"aria-label":"Simulate offline"}),e.jsx("span",{className:"t",children:"Simulate offline"})]}),e.jsx("span",{className:`pill ${i?"ok":"bad"}`,children:i?"Online":"Offline"})]})]}),e.jsxs(f.Stage,{children:[e.jsx(j,{initial:!1,children:v&&b&&e.jsxs(g.div,{className:`banner ${a}`,role:"status","aria-live":"polite",initial:"hidden",animate:"shown",exit:"hidden",variants:w,transition:{type:"spring",stiffness:420,damping:36,mass:.7},children:[e.jsxs("div",{className:"content",children:[e.jsx("span",{className:"icon","aria-hidden":"true",children:a==="offline"?e.jsx(C,{}):e.jsx(z,{})}),e.jsxs("div",{className:"text",children:[e.jsx("strong",{children:a==="offline"?"You’re offline":"Back online"}),e.jsx("span",{className:"sub",children:a==="offline"?"Some actions are paused. We’ll retry automatically.":"Connection restored. Resuming network requests."})]}),e.jsx("div",{className:"actions",children:a==="offline"?e.jsx("button",{className:"btn ghost",onClick:m,children:"Dismiss"}):e.jsx("button",{className:"btn ghost",onClick:m,children:"Close"})})]}),a==="online"&&e.jsx(g.div,{className:"autoHideBar",initial:{scaleX:0},animate:{scaleX:1},transition:{duration:1.4,ease:"linear"},"aria-hidden":"true"})]},`${u.current}-${a}`)}),e.jsxs("div",{className:"paper",children:[e.jsx("h3",{children:"Demo content"}),e.jsx("p",{children:"Toggle “Simulate offline” to trigger the banner. Try scrolling; the banner stays pinned at the top of this surface."}),e.jsx("ul",{className:"list",children:Array.from({length:14}).map((c,d)=>e.jsxs("li",{children:["List item ",d+1]},d))})]})]})]})})}function C(r){return e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",...r,children:e.jsx("path",{fill:"currentColor",d:"M2.28 3.72L1 5l3.09 3.09A13.93 13.93 0 0 1 12 6c3 0 5.74.98 7.9 2.64l1.45-1.45A15.94 15.94 0 0 0 12 4C8.96 4 6.15 4.98 3.72 6.72L2.28 5.28 2.28 3.72zM6.5 9.5l1.5 1.5A8.96 8.96 0 0 1 12 10c2.01 0 3.86.66 5.33 1.77l1.48-1.48A10.96 10.96 0 0 0 12 8c-2.06 0-3.98.6-5.5 1.5zm3 3 4.99 5 .01.01A1.5 1.5 0 1 0 12 20a1.5 1.5 0 0 0 2.5-1.16l-3-3A5.97 5.97 0 0 0 12 15c1.31 0 2.52.42 3.5 1.13l1.46-1.46A7.97 7.97 0 0 0 12 13c-1.04 0-2.03.2-2.9.5z"})})}function z(r){return e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",...r,children:e.jsx("path",{fill:"currentColor",d:"M9.55 16.15l-3.7-3.7 1.4-1.4 2.3 2.29 7.1-7.1 1.41 1.41-8.5 8.5z"})})}export{B as default};
