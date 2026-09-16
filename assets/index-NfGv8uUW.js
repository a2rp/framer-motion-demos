import{d as N,r as s,j as e,A as k}from"./index-Bg5Ft_Mu.js";import{M as D,m}from"./proxy-DHsq80Pc.js";const S={Wrapper:N.div`
        display: grid;
        gap: var(--space-6);
        padding: var(--space-6);
        max-width: 900px;
        margin: 0 auto;
        color: var(--text);
        h1,
        h2,
        h3 {
            font-family: "Antonio", system-ui, sans-serif;
        }
        p,
        input,
        button,
        label,
        span,
        em,
        kbd,
        pre {
            font-family: inherit;
        }
        code,
        kbd {
            font-family: ui-monospace, Menlo, Consolas, "Liberation Mono",
                monospace;
        }
    `,Header:N.header`
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
        .gear {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            height: 36px;
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            border-radius: var(--radius-md);
            padding: 0 12px;
            box-shadow: var(--shadow-sm);
            cursor: pointer;
        }
    `,Stage:N.section`
        display: grid;
        gap: var(--space-4);
        overflow: visible;

        .search {
            display: grid;
            gap: 10px;
            position: relative;
            z-index: 10;
        }

        .inputWrap {
            display: grid;
            grid-template-columns: 36px 1fr auto;
            align-items: center;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            padding: 4px;
            transition: box-shadow 0.2s ease, border-color 0.2s ease;
            &[data-open="true"] {
                box-shadow: 0 10px 30px hsl(0 0% 0% / 0.12);
                border-color: hsl(210 90% 56% / 0.45);
            }
        }

        .inputWrap .icon {
            display: grid;
            place-items: center;
            color: var(--text-muted);
        }
        .inputWrap input {
            height: 40px;
            padding: 0 8px;
            border: 0;
            outline: 0;
            background: transparent;
            color: var(--text);
        }
        .inputWrap .clear {
            display: inline-grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border: 0;
            background: transparent;
            color: var(--text-muted);
            cursor: pointer;
        }

        .panel {
            position: absolute;
            top: calc(100% + 6px);
            left: 0;
            right: 0;
            z-index: 20;
            transform-origin: top center;
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            background: var(--card);
            box-shadow: var(--shadow-md);
            overflow: hidden;
            will-change: transform, opacity;
        }

        .list {
            max-height: 280px;
            overflow: auto;
            padding: 8px;
            scrollbar-gutter: stable;
        }

        .row {
            position: relative;
            width: 100%;
            text-align: left;
            border: 0;
            background: transparent;
            color: var(--text);
            padding: 10px 12px;
            border-radius: var(--radius-sm);
            cursor: pointer;
            display: grid;
            align-items: center;
            transition: background 0.15s ease;
        }
        .row:hover {
            background: var(--surface);
        }
        .row[aria-selected="true"] .name {
            font-weight: 600;
        }

        .activeBg {
            position: absolute;
            inset: 0;
            border-radius: var(--radius-sm);
            background: linear-gradient(
                0deg,
                hsl(210 90% 56% / 0.08),
                hsl(210 90% 56% / 0.12)
            );
            z-index: 0;
        }
        .row .name {
            position: relative;
            z-index: 1;
        }

        mark {
            background: hsl(50 100% 50% / 0.25);
            color: inherit;
            padding: 0 1px;
            border-radius: 2px;
        }

        .help {
            color: var(--text-muted);
            border-left: 4px solid var(--border);
            padding-left: var(--space-4);
        }
        .help kbd {
            display: inline-block;
            min-width: 1.4ch;
            padding: 2px 6px;
            border-radius: 4px;
            border: 1px solid var(--border);
            background: var(--surface);
            box-shadow: var(--shadow-sm);
        }

        /* ===== Modal (blurred overlay + centered card) ===== */
        .modalOverlay {
            position: fixed;
            inset: 0;
            z-index: 98;
            background: hsl(220 15% 5% / 0.45);
            backdrop-filter: blur(10px) saturate(1.05);
            -webkit-backdrop-filter: blur(10px) saturate(1.05);
        }

        .modal {
            position: fixed;
            z-index: 99;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: min(560px, 92vw);
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-md);
            overflow: hidden;
            display: grid;
        }

        .mHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding: 12px 14px;
            border-bottom: 1px solid var(--border);
            background: var(--surface);
        }
        .mHead h2 {
            font-size: 18px;
        }
        .mHead .close {
            display: inline-grid;
            place-items: center;
            width: 34px;
            height: 34px;
            border: 0;
            border-radius: 8px;
            background: var(--card);
            color: var(--text);
            cursor: pointer;
        }

        .form {
            display: grid;
            gap: var(--space-4);
            padding: var(--space-6);
        }
        .field {
            display: grid;
            gap: 8px;
        }
        .field span {
            font-size: 12px;
            color: var(--text-muted);
        }
        .field input {
            height: 38px;
            padding: 0 10px;
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            background: var(--surface);
            color: var(--text);
            outline: none;
            transition: border-color 0.2s ease, box-shadow 0.2s ease,
                background 0.2s ease;
        }
        .field input::placeholder {
            color: hsl(0 0% 60%);
            opacity: 0.8;
        }
        .field input:hover {
            background: color-mix(in oklab, var(--surface), white 2%);
        }
        .field input:focus {
            border-color: hsl(210 90% 56%);
            box-shadow: var(--focus-ring);
            background: color-mix(in oklab, var(--surface), white 3%);
        }
        .field input[aria-invalid="true"] {
            border-color: hsl(0 80% 50% / 0.7);
        }
        .field .error {
            color: hsl(0 80% 60%);
            font-style: normal;
            font-size: 12px;
        }

        .pwdWrap {
            position: relative;
            display: grid;
        }
        .pwdWrap input {
            padding-right: 40px;
        }
        .pwdWrap .eye {
            position: absolute;
            right: 6px;
            top: 50%;
            transform: translateY(-50%);
            width: 32px;
            height: 32px;
            border: 0;
            border-radius: 8px;
            background: transparent;
            color: var(--text-muted);
            cursor: pointer;
            display: inline-grid;
            place-items: center;
        }

        .actions {
            display: flex;
            justify-content: end;
            gap: 10px;
            margin-top: 4px;
        }
        .btn {
            height: 36px;
            border-radius: var(--radius-md);
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            padding: 0 14px;
            box-shadow: var(--shadow-sm);
            cursor: pointer;
        }
        .btn.primary {
            background: var(--primary);
            color: var(--primary-contrast);
            border-color: transparent;
        }
        .btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .btn.ghost {
            background: var(--surface);
        }
    `},I=["Angular","Astro","Backbone","Deno","Ember","Express","Fastify","Gatsby","Go","Hono","Laravel","NestJS","Next.js","Nuxt","Phoenix","Qt","React","Remix","Ruby on Rails","Solid","Spring","Svelte","Symfony","Tauri","Vue","Vite","Zig"];function P(a){const l=a.trim().toLowerCase();if(!l)return[];const d=l.split(/\s+/).filter(Boolean);return I.filter(n=>d.every(i=>n.toLowerCase().includes(i))).slice(0,10)}function q({text:a,query:l}){if(!l)return a;const d=l.trim().toLowerCase().split(/\s+/).filter(Boolean);if(!d.length)return a;const n=[];let i=a,p=0;for(;i.length;){let o=null,h="";for(const c of d){const x=i.toLowerCase().indexOf(c);x!==-1&&(o===null||x<o)&&(o=x,h=c)}if(o===null){n.push(e.jsx("span",{children:i},`t-${p++}`));break}o>0&&n.push(e.jsx("span",{children:i.slice(0,o)},`t-${p++}`));const g=i.slice(o,o+h.length);n.push(e.jsx("mark",{children:g},`m-${p++}`)),i=i.slice(o+h.length)}return e.jsx(e.Fragment,{children:n})}const O=a=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,...a,children:e.jsx("path",{fill:"currentColor",d:"M15.8 14.4l4.9 4.9-1.4 1.4-4.9-4.9a7 7 0 111.4-1.4zM10 15a5 5 0 100-10 5 5 0 000 10z"})}),T=a=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,...a,children:e.jsx("path",{fill:"currentColor",d:"M12 8a4 4 0 100 8 4 4 0 000-8zm8.94 3a7.94 7.94 0 00-.37-1.63l2.1-1.64-2-3.46-2.52 1a7.94 7.94 0 00-1.41-.82l-.38-2.67h-4l-.38 2.67c-.5.2-.97.46-1.41.82l-2.52-1-2 3.46 2.1 1.64c-.17.53-.29 1.07-.37 1.63l-2.63.4v4l2.63.4c.08.56.2 1.1.37 1.63l-2.1 1.64 2 3.46 2.52-1c.44.36.91.62 1.41.82l.38 2.67h4l.38-2.67c.5-.2.97-.46 1.41-.82l2.52 1 2-3.46-2.1-1.64c.17-.53.29-1.07.37-1.63l2.63-.4v-4l-2.63-.4z"})}),V=a=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,...a,children:e.jsx("path",{fill:"currentColor",d:"M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 12a5 5 0 110-10 5 5 0 010 10z"})}),Y=a=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,...a,children:e.jsx("path",{fill:"currentColor",d:"M2 5.27L3.28 4 20 20.72 18.73 22l-3.1-3.1A10.53 10.53 0 0112 19c-5 0-9.27-3.11-11-7a12.4 12.4 0 012.98-4.18L2 5.27zM12 7a5 5 0 014.9 6.1l-6-6A4.98 4.98 0 0112 7zm7.02 2.14A12.4 12.4 0 0123 12c-1.73 3.89-6 7-11 7-1.22 0-2.39-.19-3.47-.54l1.65-1.65c.58.13 1.18.19 1.82.19a5 5 0 005-5c0-.64-.06-1.24-.19-1.82l1.21-1.21z"})}),B=a=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,...a,children:e.jsx("path",{fill:"currentColor",d:"M18.3 5.71L12 12.01l-6.3-6.3-1.4 1.41 6.29 6.29-6.3 6.3 1.41 1.41 6.3-6.29 6.29 6.29 1.41-1.41-6.3-6.3 6.3-6.29z"})});function G(){const[a,l]=s.useState(""),[d,n]=s.useState(!1),[i,p]=s.useState(0),o=s.useRef(null),h=s.useRef(null),[g,c]=s.useState(!1),x=s.useRef(null),[y,L]=s.useState(""),[f,R]=s.useState(""),[w,W]=s.useState(!1),[E,C]=s.useState({email:!1,pwd:!1}),u=s.useMemo(()=>{const r=P(a);return p(0),r},[a]);s.useEffect(()=>{n(a.trim().length>=1)},[a]);function H(r){if(!d&&(r.key==="ArrowDown"||r.key==="ArrowUp")){n(!0);return}u.length&&(r.key==="ArrowDown"?(r.preventDefault(),p(t=>Math.min(t+1,u.length-1))):r.key==="ArrowUp"?(r.preventDefault(),p(t=>Math.max(t-1,0))):r.key==="Enter"?(r.preventDefault(),u[i]&&z(u[i])):r.key==="Escape"&&n(!1))}s.useEffect(()=>{var t;const r=(t=o.current)==null?void 0:t.querySelector('[data-active="true"]');r&&r.scrollIntoView({block:"nearest"})},[i]);function z(r){var t;l(r),n(!1),(t=h.current)==null||t.focus()}const b=E.email&&(y.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y.trim())?"":"Enter a valid email.":"Email is required."),v=E.pwd&&(f?f.length<8?"Minimum 8 characters.":/[0-9]/.test(f)?"":"Include at least one number.":"Password is required."),A=!b&&!v&&y&&f;return s.useEffect(()=>{if(!g)return;const r=document.documentElement.style.overflow;document.documentElement.style.overflow="hidden";const t=setTimeout(()=>{var j;return(j=x.current)==null?void 0:j.focus()},50),M=j=>{j.key==="Escape"&&c(!1)};return window.addEventListener("keydown",M),()=>{document.documentElement.style.overflow=r,clearTimeout(t),window.removeEventListener("keydown",M)}},[g]),e.jsx(D,{reducedMotion:"never",children:e.jsxs(S.Wrapper,{children:[e.jsxs(S.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Autocomplete - Spring Expand"}),e.jsx("p",{className:"muted",children:"Type to search. Panel expands with a spring, results stagger in, and the active option uses a shared layout highlight."})]}),e.jsxs("button",{className:"gear",onClick:()=>c(!0),title:"Settings",children:[e.jsx(T,{}),e.jsx("span",{children:"Settings"})]})]}),e.jsxs(S.Stage,{children:[e.jsxs(m.div,{className:"search",layout:!0,initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:280,damping:26},children:[e.jsxs("div",{className:"inputWrap","data-open":d,children:[e.jsx("span",{className:"icon",children:e.jsx(O,{})}),e.jsx("input",{ref:h,type:"text",value:a,onChange:r=>l(r.target.value),onKeyDown:H,placeholder:"Search frameworks, libraries, runtimes…","aria-autocomplete":"list","aria-expanded":d,"aria-controls":"auto-listbox"}),a&&e.jsx("button",{className:"clear",onClick:()=>l(""),"aria-label":"Clear",children:e.jsx(B,{})})]}),e.jsx(k,{initial:!1,children:d&&e.jsx(m.div,{className:"panel",role:"listbox",id:"auto-listbox",initial:{opacity:0,scaleY:.92,y:-4},animate:{opacity:1,scaleY:1,y:0},exit:{opacity:0,scaleY:.96,y:-4},transition:{type:"spring",stiffness:280,damping:26},children:e.jsx("div",{className:"list",ref:o,children:e.jsx(k,{initial:!1,children:(u.length?u:I.slice(0,6)).map((r,t)=>e.jsxs(m.button,{type:"button",role:"option","data-active":t===i,"aria-selected":t===i,className:"row",onMouseEnter:()=>p(t),onClick:()=>z(r),initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{delay:t*.02,duration:.18},children:[e.jsx(k,{children:t===i&&e.jsx(m.span,{className:"activeBg",layoutId:"active-row",transition:{type:"spring",stiffness:480,damping:40},"aria-hidden":"true"})}),e.jsx("span",{className:"name",children:e.jsx(q,{text:r,query:a})})]},r))})})},`panel-${u.length}`)})]}),e.jsx("div",{className:"help",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("kbd",{children:"↑"}),"/",e.jsx("kbd",{children:"↓"})," navigate, ",e.jsx("kbd",{children:"Enter"})," selects, ",e.jsx("kbd",{children:"Esc"})," closes."]}),e.jsxs("li",{children:["Panel reveal uses ",e.jsx("code",{children:"scaleY"})," + spring; rows stagger in."]}),e.jsxs("li",{children:["Active option uses a ",e.jsx("code",{children:"layoutId"})," pill for buttery movement."]})]})})]}),e.jsx(k,{children:g&&e.jsxs(e.Fragment,{children:[e.jsx(m.div,{className:"modalOverlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.18},onClick:()=>c(!1),"aria-hidden":"true"}),e.jsxs(m.div,{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"settings-title",initial:{opacity:0,scale:.96,y:8},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.98,y:8},transition:{type:"spring",stiffness:320,damping:28},children:[e.jsxs("header",{className:"mHead",children:[e.jsx("h2",{id:"settings-title",children:"Settings"}),e.jsx("button",{className:"close",onClick:()=>c(!1),"aria-label":"Close",children:e.jsx(B,{})})]}),e.jsxs("form",{className:"form",onSubmit:r=>{r.preventDefault(),A&&c(!1)},noValidate:!0,children:[e.jsxs("label",{className:"field",children:[e.jsx("span",{children:"Email"}),e.jsx("input",{ref:x,type:"email",value:y,onChange:r=>L(r.target.value),onBlur:()=>C(r=>({...r,email:!0})),required:!0,placeholder:"you@example.com","aria-invalid":!!b,"aria-describedby":b?"err-email":void 0}),b&&e.jsx("em",{id:"err-email",className:"error",children:b})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{children:"Password"}),e.jsxs("div",{className:"pwdWrap",children:[e.jsx("input",{type:w?"text":"password",value:f,onChange:r=>R(r.target.value),onBlur:()=>C(r=>({...r,pwd:!0})),required:!0,placeholder:"••••••••","aria-invalid":!!v,"aria-describedby":v?"err-pwd":void 0}),e.jsx("button",{className:"eye",type:"button",onClick:()=>W(r=>!r),"aria-label":w?"Hide password":"Show password",title:w?"Hide":"Show",children:w?e.jsx(Y,{}):e.jsx(V,{})})]}),v&&e.jsx("em",{id:"err-pwd",className:"error",children:v})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{type:"button",className:"btn ghost",onClick:()=>c(!1),children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn primary",disabled:!A,children:"Save"})]})]})]})]})})]})})}export{G as default};
