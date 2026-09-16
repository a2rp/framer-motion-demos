import{d as p,r as a,j as r}from"./index-Bg5Ft_Mu.js";import{u as E}from"./use-motion-value-gKvy5EH1.js";import{u as k}from"./use-transform-EGMn7WN4.js";import{M as W,m as c}from"./proxy-DHsq80Pc.js";import{a as g}from"./index-D1yJ6_lo.js";const B=p.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 760px;
    margin: 0 auto;
    color: var(--text);
`,I=p.header`
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
        display: flex;
        align-items: center;
        gap: var(--space-4);
        flex-wrap: wrap;
    }

    .ctrl {
        display: grid;
        grid-template-columns: auto auto auto;
        align-items: center;
        column-gap: 8px;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .ctrl input[type="range"] {
        width: 180px;
        accent-color: var(--primary);
    }
    .ctrl em {
        font-style: normal;
        color: var(--text-muted);
        font-size: 12px;
    }

    .btn {
        height: 34px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.ghost {
        background: var(--surface);
    }
`,T=p.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    padding: 48px 24px;
    display: grid;
    place-items: center;
`,A=p.div`
    position: relative;
    width: 160px;
    height: 160px;
    display: grid;
    place-items: center;

    .ring {
        position: absolute;
        inset: 0;
    }

    .pressBtn {
        position: relative;
        z-index: 2;
        width: 112px;
        height: 112px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        display: grid;
        place-items: center;
        cursor: pointer;
        will-change: transform, opacity;
        transition: box-shadow 0.15s ease, background 0.15s ease;

        &:hover {
            box-shadow: 0 10px 28px hsl(0 0% 0% / 0.16);
        }
        &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px hsl(210 90% 56% / 0.35);
        }
    }

    .pressBtn .label {
        font-weight: 600;
        font-size: 13px;
        text-align: center;
        color: var(--text);
    }

    .pressBtn .check {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        font-size: 28px;
        font-weight: 700;
        color: var(--primary);
        pointer-events: none;
    }

    .pct {
        position: absolute;
        bottom: -28px;
        font-size: 12px;
        color: var(--text-muted);
    }
`,K=p.aside`
    color: var(--text-muted);
    h3 {
        color: var(--text);
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
    }
`,d={Wrapper:B,Header:I,Stage:T,RingWrap:A,Notes:K};function $(){const[m,P]=a.useState(900),[n,v]=a.useState(!1),[u,x]=a.useState(!1),i=E(0),l=a.useRef(null),o=a.useRef(null),f=a.useRef(!1),N=k(i,e=>Math.round(e*100)),R=k(i,[0,1],["var(--border)","var(--primary)"]),b=a.useMemo(()=>n?"Done":u?"Hold…":"Hold to Confirm",[u,n]);function y(e=0,t=.18){var s,w;(w=(s=l.current)==null?void 0:s.stop)==null||w.call(s),l.current=g(i,e,{duration:t,ease:[.22,1,.36,1]})}function j(){var e,t;n||(x(!0),(t=(e=l.current)==null?void 0:e.stop)==null||t.call(e),l.current=g(i,1,{duration:m/1e3,ease:"linear",onComplete:()=>{v(!0),x(!1),g("#lp-btn",{scale:[1,1.06,1]},{duration:.32,ease:[.22,1,.36,1]})}}))}function h(){x(!1),n||y(0)}function C(){v(!1),x(!1),y(0,.12)}function M(e){var t,s;e.button!==void 0&&e.button!==0||(o.current=e.pointerId??"mouse",(s=(t=e.currentTarget).setPointerCapture)==null||s.call(t,o.current),j())}function S(e){var t,s;o.current===(e.pointerId??"mouse")&&((s=(t=e.currentTarget).releasePointerCapture)==null||s.call(t,o.current),o.current=null,h())}function z(){o.current=null,h()}function H(){u&&!n&&h()}function L(e){e.repeat||(e.key===" "||e.key==="Enter")&&(f.current=!0,j(),e.preventDefault())}function D(e){f.current&&(e.key===" "||e.key==="Enter")&&(f.current=!1,h(),e.preventDefault())}return a.useEffect(()=>()=>{var e,t;return(t=(e=l.current)==null?void 0:e.stop)==null?void 0:t.call(e)},[]),r.jsx(W,{reducedMotion:"never",children:r.jsxs(d.Wrapper,{children:[r.jsxs(d.Header,{children:[r.jsxs("div",{className:"heading",children:[r.jsx("h1",{children:"Long-press Progress Ring"}),r.jsx("p",{className:"muted",children:"Hold the button to fill the ring. Release early to cancel. Keyboard: Space/Enter."})]}),r.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Long-press controls",children:[r.jsxs("label",{className:"ctrl",children:[r.jsx("span",{children:"Hold duration"}),r.jsx("input",{type:"range",min:"600",max:"2000",step:"50",value:m,onChange:e=>P(parseInt(e.target.value,10))}),r.jsxs("em",{children:[(m/1e3).toFixed(2),"s"]})]}),r.jsx("button",{className:"btn ghost",onClick:C,title:"Reset",children:"Reset"})]})]}),r.jsx(d.Stage,{children:r.jsxs(d.RingWrap,{children:[r.jsxs(c.button,{id:"lp-btn",type:"button",className:`pressBtn ${n?"is-success":""}`,onPointerDown:M,onPointerUp:S,onPointerCancel:z,onPointerLeave:H,onKeyDown:L,onKeyUp:D,"aria-pressed":u,"aria-label":b,children:[r.jsx("span",{className:"label",children:b}),r.jsx(c.span,{className:"check",initial:!1,animate:{opacity:n?1:0,scale:n?1:.8},transition:{duration:.22,ease:[.22,1,.36,1]},"aria-hidden":"true",children:"✓"})]}),r.jsxs("svg",{className:"ring",viewBox:"0 0 100 100","aria-hidden":"true",children:[r.jsx("circle",{cx:"50",cy:"50",r:"46",fill:"none",stroke:"var(--border)",strokeWidth:"6"}),r.jsx(c.circle,{cx:"50",cy:"50",r:"46",fill:"none",strokeWidth:"6",strokeLinecap:"round",stroke:n?"var(--primary)":R,pathLength:"1",strokeDasharray:"1",style:{pathLength:i},transform:"rotate(-90 50 50)"})]}),r.jsxs(c.div,{className:"pct","aria-hidden":"true",children:[r.jsx(c.span,{children:N}),"%"]})]})}),r.jsxs(d.Notes,{children:[r.jsx("h3",{children:"Tech notes"}),r.jsxs("ul",{children:[r.jsxs("li",{children:["Progress is a ",r.jsx("code",{children:"MotionValue"}),"; on press we ",r.jsx("code",{children:"animate()"})," it linearly to 1."]}),r.jsxs("li",{children:["SVG circle uses normalized ",r.jsx("code",{children:"pathLength"})," with ",r.jsx("code",{children:'strokeDasharray="1"'})," for easy 0..1 control."]}),r.jsx("li",{children:"Pointer + keyboard semantics; release/cancel animates back to 0 quickly."})]})]})]})})}export{$ as default};
