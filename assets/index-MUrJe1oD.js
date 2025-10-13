import{d as c,r as t,j as e,A as n}from"./index-CdN9zR5x.js";import{M as f,m as s}from"./proxy-Cg-EgVc2.js";const v=c.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 900px;
    margin: 0 auto;
    color: var(--text);
`,g=c.header`
    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`,b=c.section`
    display: grid;
    gap: var(--space-4);

    .copyRow {
        position: relative;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        overflow: hidden; /* keeps row flash constrained */
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: stretch;
    }

    /* Flash overlay */
    .flash {
        position: absolute;
        inset: 0;
        transform-origin: left center;
        background: linear-gradient(
                0deg,
                hsl(210 90% 56% / 0.12),
                hsl(210 90% 56% / 0.04)
            ),
            var(--surface);
        border-right: 1px solid hsl(210 90% 56% / 0.35);
        pointer-events: none;
        will-change: transform, opacity;
    }

    .code {
        margin: 0;
        padding: var(--space-6) var(--space-6);
        background: var(--card);
        color: var(--text);
        white-space: pre-wrap;
        line-height: 1.6;
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
        tab-size: 2;
    }

    .copyBtn {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        margin: var(--space-6);
        padding: 0 14px;
        height: 36px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;

        /* 👇 allow the pulse ring to render outside the button bounds */
        overflow: visible;
        isolation: isolate; /* isolate stacking so z-index works predictably */

        /* keep content above the pulse */
        .icon,
        .label {
            position: relative;
            z-index: 1;
        }
    }

    /* Pulse ring (success) — sits behind content, expands out */
    .pulse {
        position: absolute;
        inset: -4px; /* a little larger than the button */
        border-radius: calc(var(--radius-md) + 4px);
        pointer-events: none;
        z-index: 0;
        will-change: transform, opacity;

        /* visible both in light and dark; double shadow makes it read well */
        box-shadow: 0 0 0 3px hsl(210 90% 56% / 0.35),
            0 0 0 8px hsl(210 90% 56% / 0.18);
    }

    .copyBtn .icon {
        display: inline-grid;
        place-items: center;
    }
    .copyBtn .label {
        font-weight: 600;
        letter-spacing: 0.2px;
    }

    .tips {
        color: var(--text-muted);
        border-left: 4px solid var(--border);
        padding-left: var(--space-4);
    }

    .sr {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        white-space: nowrap;
    }
`,l={Wrapper:v,Header:g,Stage:b};async function w(i){try{return await navigator.clipboard.writeText(i),!0}catch{try{const a=document.createElement("textarea");a.value=i,a.style.position="fixed",a.style.opacity="0",document.body.appendChild(a),a.focus(),a.select();const o=document.execCommand("copy");return document.body.removeChild(a),o}catch{return!1}}}function j(i){return e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":!0,focusable:"false",...i,children:e.jsx("path",{fill:"currentColor",d:"M8 7a3 3 0 013-3h7a3 3 0 013 3v7a3 3 0 01-3 3h-7a3 3 0 01-3-3V7zm-5 5a3 3 0 003 3h1v-2H6a1 1 0 01-1-1V8H3v4z"})})}function C(i){return e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":!0,focusable:"false",...i,children:e.jsx("path",{fill:"currentColor",d:"M9.55 16.15l-3.7-3.7 1.4-1.4 2.3 2.29 7.1-7.1 1.41 1.41-8.5 8.5z"})})}function z(){const i=`npm i framer-motion styled-components
# or
pnpm add framer-motion styled-components`,[a,o]=t.useState(!1),[h,u]=t.useState(0),[m,d]=t.useState(""),r=t.useRef(0),x=async()=>{const p=await w(i);window.clearTimeout(r.current),o(!!p),u(y=>y+1),d(p?"Copied to clipboard":"Copy failed"),r.current=window.setTimeout(()=>{o(!1),d("")},1100)};return t.useEffect(()=>()=>window.clearTimeout(r.current),[]),e.jsx(f,{reducedMotion:"never",children:e.jsxs(l.Wrapper,{children:[e.jsx(l.Header,{children:e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Copy Confirmation Flash"}),e.jsx("p",{className:"muted",children:"Click to copy. The row flashes, the button pulses, and the icon swaps to a check."})]})}),e.jsxs(l.Stage,{children:[e.jsxs("div",{className:"copyRow",children:[e.jsx(n,{initial:!1,children:e.jsx(s.div,{className:"flash",initial:{opacity:0,scaleX:0},animate:{opacity:[0,1,0],scaleX:[0,1,1]},transition:{duration:.9,times:[0,.18,1],ease:[.22,1,.36,1]},"aria-hidden":"true"},h)}),e.jsx("pre",{className:"code","aria-label":"Install commands",tabIndex:0,children:String(i)}),e.jsxs("button",{className:"copyBtn",onClick:x,"aria-live":"polite","aria-label":"Copy to clipboard",children:[e.jsx(n,{initial:!1,children:a&&e.jsx(s.span,{className:"pulse",initial:{opacity:.25,scale:.8},animate:{opacity:0,scale:1.6},exit:{opacity:0},transition:{duration:.6,ease:"easeOut"},"aria-hidden":"true"},"pulse")}),e.jsx("span",{className:"icon","aria-hidden":"true",children:e.jsx(n,{mode:"wait",initial:!1,children:a?e.jsx(s.span,{initial:{rotate:-10,opacity:0,scale:.9},animate:{rotate:0,opacity:1,scale:1},exit:{rotate:10,opacity:0,scale:.9},transition:{duration:.25,ease:[.2,.8,.2,1]},children:e.jsx(C,{})},"check"):e.jsx(s.span,{initial:{rotate:-10,opacity:0,scale:.9},animate:{rotate:0,opacity:1,scale:1},exit:{rotate:10,opacity:0,scale:.9},transition:{duration:.25,ease:[.2,.8,.2,1]},children:e.jsx(j,{})},"copy")})}),e.jsx("span",{className:"label",children:a?"Copied":"Copy"})]})]}),e.jsx("span",{className:"sr","aria-live":"polite",children:m}),e.jsx("div",{className:"tips",children:e.jsxs("ul",{children:[e.jsxs("li",{children:["Flash uses a full-row overlay: ",e.jsx("code",{children:"scaleX"})," and opacity tween."]}),e.jsx("li",{children:"Button fires a quick pulse ring and icon crossfade."}),e.jsx("li",{children:"Accessible: focusable code block + polite screen reader updates."})]})})]})]})})}export{z as default};
