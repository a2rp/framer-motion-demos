import{d as g,j as e,r as h,A as C}from"./index-Cw4uPab2.js";import{M as P,m as A}from"./proxy-Bw5QJHtJ.js";const E=g.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);
`,Y=g.header`
    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`,B=g.section`
    display: grid;
    gap: var(--space-6);

    .group {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-4);
    }

    .cards {
        display: grid;
        gap: var(--space-4);
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (width < 720px) {
        .cards {
            grid-template-columns: 1fr;
        }
    }

    /* Base host (button or article) */
    .rippleHost {
        --btn-fg: var(--text);
        --btn-bg: var(--surface);
        --btn-border: var(--border);
        --btn-radius: var(--radius-md);
        --btn-shadow: var(--shadow-sm);

        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;

        min-height: 36px;
        padding: 10px 14px;
        gap: 8px;

        border-radius: var(--btn-radius);
        border: 1px solid var(--btn-border);
        background: var(--btn-bg);
        color: var(--btn-fg);
        box-shadow: var(--btn-shadow);
        cursor: pointer;
        user-select: none;
        text-align: left;
        outline: none;
        overflow: hidden; /* clip ripple */
        transition: transform 120ms ease, box-shadow 120ms ease,
            background-color 120ms ease;
    }
    .rippleHost.button {
        display: inline-flex;
    }
    .rippleHost[role="button"] {
        display: block;
    } /* card hosts */
    .rippleHost:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    /* Variants tune foreground/background and ripple color */
    .rippleHost.contained {
        --btn-bg: var(--primary);
        --btn-fg: var(--primary-contrast);
        --btn-border: transparent;
        --ripple: hsl(0 0% 100% / 0.5);
    }
    .rippleHost.surface {
        --btn-bg: var(--card);
        --btn-fg: var(--text);
        --btn-border: var(--border);
        --ripple: hsl(210 90% 56% / 0.35);
    }
    .rippleHost.outline {
        --btn-bg: transparent;
        --btn-fg: var(--text);
        --btn-border: var(--border);
        --ripple: hsl(210 90% 56% / 0.33);
        backdrop-filter: saturate(1.1);
    }
    .rippleHost.ghost {
        --btn-bg: var(--surface);
        --btn-fg: var(--text);
        --btn-border: transparent;
        --ripple: hsl(210 90% 56% / 0.32);
    }

    .rippleHost .label {
        position: relative;
        z-index: 2;
    }

    .rippleHost:focus-visible {
        box-shadow: var(--shadow-sm), var(--focus-ring);
    }
    @media (hover: hover) {
        .rippleHost:hover {
            transform: translateY(-1px);
        }
        .rippleHost:active {
            transform: translateY(0);
        }
    }

    /* Ripple plane sits under label but above background */
    .rippleLayer {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 1;
        border-radius: inherit;
        overflow: hidden;
    }
    .ripple {
        position: absolute;
        border-radius: 999px;
        background: var(--ripple);
        mix-blend-mode: screen; /* makes it pop on dark surfaces */
        will-change: transform, opacity;
        transform: translateZ(0);
    }

    /* Card styling */
    .card {
        display: grid;
        gap: var(--space-3);
        padding: var(--space-6);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        min-height: 140px;
    }
    .card header {
        margin-bottom: var(--space-2);
    }
    .card .muted {
        color: var(--text-muted);
    }
    .card .meta {
        color: var(--text-muted);
    }
    .icon {
        line-height: 1;
    }
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
`,D=g.aside`
    color: var(--text-muted);
    h3 {
        color: var(--text);
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
    }
`,f={Wrapper:E,Header:Y,Stage:B,Notes:D};function $(i,p,u){const s=i.getBoundingClientRect(),t=p-s.left,n=u-s.top,l=Number.isFinite(t)?t:s.width/2,d=Number.isFinite(n)?n:s.height/2,x=Math.max(l,s.width-l),b=Math.max(d,s.height-d),m=Math.sqrt(x*x+b*b);return{size:m*2,left:l-m,top:d-m}}function F(){const[i,p]=h.useState([]),u=h.useCallback(t=>p(n=>[...n,t]),[]),s=h.useCallback(t=>p(n=>n.filter(l=>l.id!==t)),[]);return{ripples:i,add:u,remove:s}}function c({as:i="button",children:p,className:u="",variant:s="contained",disabled:t=!1,onClick:n,"aria-label":l}){const d=h.useRef(null),{ripples:x,add:b,remove:m}=F(),j=h.useId(),v=h.useCallback((r,o)=>{const a=d.current;if(!a)return;const{size:R,left:S,top:z}=$(a,r,o),M=`${j}-${Math.random().toString(36).slice(2)}`;b({id:M,size:R,left:S,top:z})},[b,j]),y=r=>{t||v(r.clientX,r.clientY)},w=r=>{t||r.buttons===1&&v(r.clientX,r.clientY)},N=r=>{var a;if(t)return;const o=(a=r.touches)==null?void 0:a[0];o&&v(o.clientX,o.clientY)},k=r=>{var o;if(!t&&(r.key==="Enter"||r.key===" ")){const a=(o=d.current)==null?void 0:o.getBoundingClientRect();if(!a)return;v(a.left+a.width/2,a.top+a.height/2),r.key===" "&&r.preventDefault()}},H=r=>{t||n==null||n(r)};return e.jsx(P,{reducedMotion:"never",children:e.jsxs(i,{ref:d,type:i==="button"?"button":void 0,className:`rippleHost ${s} ${u}`,disabled:i==="button"?t:void 0,"aria-label":l,role:i!=="button"?"button":void 0,tabIndex:i!=="button"?0:void 0,onPointerDown:y,onMouseDown:w,onTouchStart:N,onKeyDown:k,onClick:H,children:[e.jsx("span",{className:"label",children:p}),e.jsx("span",{className:"rippleLayer","aria-hidden":!0,children:e.jsx(C,{children:x.map(r=>e.jsx(A.span,{className:"ripple",style:{width:r.size,height:r.size,left:r.left,top:r.top},initial:{opacity:.38,scale:0},animate:{opacity:0,scale:1},transition:{duration:.6,ease:[.2,.8,.2,1]},onAnimationComplete:()=>m(r.id)},r.id))})})]})})}function X(){return e.jsxs(f.Wrapper,{children:[e.jsx(f.Header,{children:e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Press Ripple"}),e.jsx("p",{className:"muted",children:"Ripple spawns from the press point, expands to cover the host, then fades. Works with mouse, touch, and keyboard."})]})}),e.jsxs(f.Stage,{children:[e.jsxs("div",{className:"group",children:[e.jsx(c,{variant:"contained",children:"Primary"}),e.jsx(c,{variant:"surface",children:"Surface"}),e.jsx(c,{variant:"outline",children:"Outline"}),e.jsx(c,{variant:"ghost",children:"Ghost"}),e.jsxs(c,{variant:"contained","aria-label":"Heart",children:[e.jsx("span",{className:"icon",children:"❤"}),e.jsx("span",{className:"sr-only",children:"Like"})]})]}),e.jsxs("div",{className:"cards",children:[e.jsxs(c,{as:"article",className:"card surface",variant:"surface","aria-label":"Open card",children:[e.jsxs("header",{children:[e.jsx("h3",{children:"Card with Full-bleed Ripple"}),e.jsx("p",{className:"muted",children:"Press anywhere on this card."})]}),e.jsx("div",{className:"meta",children:e.jsx("small",{children:"Ripple clips to card border radius."})})]}),e.jsxs(c,{as:"article",className:"card ghost",variant:"ghost","aria-label":"Explore",children:[e.jsxs("header",{children:[e.jsx("h3",{children:"Ghost Surface"}),e.jsx("p",{className:"muted",children:"Try keyboard: Enter or Space."})]}),e.jsx("div",{className:"meta",children:e.jsx("small",{children:'Accessible: focus ring + role="button".'})})]})]})]}),e.jsxs(f.Notes,{children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Hit-tested circle computed against farthest corner ensures coverage."}),e.jsx("li",{children:"Stacking: label above, ripple layer under label, over background."}),e.jsx("li",{children:"Blend-mode improves contrast across themes & variants."})]})]})]})}export{X as default};
