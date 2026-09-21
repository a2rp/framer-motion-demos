import{d as h,r as s,j as e,h as N,k as I,l as C,A as u,m as E,n as P,o as B}from"./index-Cf_T-Gf1.js";import{M as H,m as n}from"./proxy-DKYKL-ar.js";const K=h.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1100px;
    margin: 0 auto;
    color: var(--text);
`,O=h.header`
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
        gap: var(--space-4);
        align-items: center;
        flex-wrap: wrap;
    }

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 14px;
        height: 36px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`,D=h.section`
    display: grid;
    gap: var(--space-4);

    .errorBanner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: linear-gradient(0deg, hsl(0 80% 60% / 0.08), transparent),
            var(--card);
        box-shadow: var(--shadow-sm);
        padding: 10px 12px;
        color: var(--text);
    }
    .errorBanner .msg {
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .errorBanner .close {
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        height: 30px;
        padding: 0 10px;
        border-radius: var(--radius-sm);
        cursor: pointer;
    }

    .grid {
        display: grid;
        gap: var(--space-4);
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (width < 980px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (width < 620px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }

    .card {
        position: relative;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        color: var(--text);
        overflow: hidden;
        padding: 16px;
        display: grid;
        gap: 10px;
    }

    /* Data card content */
    .cHead {
        display: grid;
        gap: 4px;
    }
    .kicker {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 11px;
        color: var(--text-muted);
    }
    h3 {
        font-size: 18px;
    }
    .desc {
        color: var(--text-muted);
    }

    .kpis {
        margin-top: 6px;
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
        gap: 8px;
    }
    .kpi {
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--surface);
        display: grid;
        gap: 4px;
        padding: 10px;
    }
    .kpi .label {
        color: var(--text-muted);
        font-size: 12px;
    }
    .kpi .value {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.2px;
    }
    .kpi.up {
        outline: 2px solid hsl(140 70% 45% / 0.15);
    }
    .kpi.down {
        outline: 2px solid hsl(0 70% 45% / 0.15);
    }

    /* Skeletons */
    .skeleton {
        background: var(--card);
    }
    .skel {
        border-radius: 8px;
        background: var(--surface);
    }
    .skel-title {
        height: 16px;
        width: 50%;
    }
    .skel-line {
        height: 10px;
        width: 100%;
    }
    .skel-line.short {
        width: 70%;
    }

    .shimmer {
        position: absolute;
        inset: 0;
        background: linear-gradient(
            90deg,
            transparent 0%,
            hsl(0 0% 100% / 0.08) 35%,
            hsl(0 0% 100% / 0.16) 50%,
            hsl(0 0% 100% / 0.08) 65%,
            transparent 100%
        );
        mix-blend-mode: plus-lighter;
        transform: translateX(-100%);
        pointer-events: none;
    }
`,$=h.div`
    position: fixed;
    inset: 0;
    z-index: 50;
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

    .field {
        display: grid;
        gap: 6px;
        margin: 10px 0 6px;
    }
    .field > span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .inputWrap {
        position: relative;
        display: grid;
    }
    input {
        height: 38px;
        padding: 0 38px 0 12px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--surface);
        color: var(--text);
        outline: none;
    }
    input[aria-invalid="true"] {
        box-shadow: 0 0 0 3px hsl(0 90% 60% / 0.25) inset;
    }
    .error {
        color: hsl(0 80% 60%);
        font-size: 12px;
    }

    .eye {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        width: 32px;
        height: 32px;
        display: grid;
        place-items: center;
        border-radius: 8px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        cursor: pointer;
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
`,b={Wrapper:K,Header:O,Stage:D},y="s2d_apiKey",W=t=>new Promise(r=>setTimeout(r,t)),_=(()=>{let t=0;return()=>`row-${++t}`})();function R(t){const r=(t||"").trim();return r?r.length<8?"API key must be at least 8 characters.":/^[a-z0-9-_.]+$/i.test(r)?"":"Only letters, numbers, dash, underscore, dot.":"API key is required."}function f(t=8){const r=Math.max(6,t);return Array.from({length:r},(o,p)=>{const d=_(),g=60+Math.floor(Math.random()*40),l=(Math.random()*2-1)*6;return{id:d,title:`Metric ${p+1}`,desc:"Premium card with subtle micro-interactions and motion.",score:g,delta:Math.round(l*10)/10}})}function F(){const[t,r]=s.useState(!1),[o,p]=s.useState(()=>{try{return localStorage.getItem(y)||""}catch{return""}}),[d,g]=s.useState(!1),[l,j]=s.useState(""),[c,k]=s.useState(!0),[S,w]=s.useState(()=>f(8)),[m,v]=s.useState(""),M=s.useMemo(()=>!c&&!m,[c,m]),x=s.useCallback(async({simulateError:a=!1}={})=>{k(!0),v("");try{if(await W(1100),a)throw new Error("Network error: request timed out.");w(f(8))}catch(i){v((i==null?void 0:i.message)||"Something went wrong.")}finally{k(!1)}},[o]);s.useEffect(()=>{x()},[x]);const z=()=>{const a=R(o);if(j(a),!a){try{localStorage.setItem(y,o)}catch{}r(!1)}},A=()=>{try{p(localStorage.getItem(y)||"")}catch{}j(""),r(!1)};return e.jsx(H,{reducedMotion:"never",children:e.jsxs(b.Wrapper,{children:[e.jsxs(b.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Skeletons → Data"}),e.jsx("p",{className:"muted",children:"Shimmering placeholders that crossfade into real content. Tidy motion, no layout jumps, and a crisp, theme-aware design."})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Skeletons controls",children:[e.jsxs("button",{className:"btn ghost",onClick:()=>x({simulateError:!0}),title:"Simulate error",children:[e.jsx(N,{size:18}),"Simulate Error"]}),e.jsxs("button",{className:"btn",onClick:()=>x(),title:"Reload data",disabled:c,children:[e.jsx(I,{size:18}),"Reload"]}),e.jsxs("button",{className:"btn primary",onClick:()=>r(!0),title:"Settings",children:[e.jsx(C,{size:18}),"Settings"]})]})]}),e.jsxs(b.Stage,{children:[e.jsx(u,{initial:!1,children:m&&e.jsxs(n.div,{className:"errorBanner",role:"status",initial:{y:-12,opacity:0},animate:{y:0,opacity:1},exit:{y:-10,opacity:0},transition:{duration:.28,ease:[.22,1,.36,1]},children:[e.jsxs("div",{className:"msg",children:[e.jsx(N,{size:18}),e.jsx("span",{children:m})]}),e.jsx("button",{className:"close",onClick:()=>v(""),"aria-label":"Dismiss",children:e.jsx(E,{size:16})})]})}),e.jsxs("div",{className:`grid ${c?"is-loading":""}`,children:[e.jsx(u,{initial:!1,children:c&&Array.from({length:8}).map((a,i)=>e.jsxs(n.article,{className:"card skeleton",initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.25,delay:i*.03},"aria-hidden":"true",children:[e.jsx("div",{className:"skel skel-title"}),e.jsx("div",{className:"skel skel-line"}),e.jsx("div",{className:"skel skel-line short"}),e.jsx(n.div,{className:"shimmer","aria-hidden":"true",initial:{x:"-120%"},animate:{x:"120%"},transition:{repeat:1/0,duration:1.4,ease:"linear"}})]},`skel-${i}`))}),e.jsx(u,{initial:!1,children:M&&S.map((a,i)=>e.jsxs(n.article,{className:"card",initial:{opacity:0,y:14,scale:.98},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-8,scale:.98},transition:{duration:.28,delay:i*.04,ease:[.22,1,.36,1]},whileHover:{y:-2},children:[e.jsxs("header",{className:"cHead",children:[e.jsx("span",{className:"kicker",children:"Metric"}),e.jsx("h3",{children:a.title})]}),e.jsx("p",{className:"desc",children:a.desc}),e.jsxs("div",{className:"kpis",children:[e.jsxs("div",{className:"kpi",children:[e.jsx("span",{className:"label",children:"Score"}),e.jsx("span",{className:"value",children:a.score})]}),e.jsxs("div",{className:`kpi ${a.delta>=0?"up":"down"}`,children:[e.jsx("span",{className:"label",children:"Δ"}),e.jsxs("span",{className:"value",children:[a.delta>=0?"+":"",a.delta,"%"]})]})]})]},a.id))})]})]}),e.jsx(u,{children:t&&e.jsx($,{as:n.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(n.div,{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"m-title",initial:{scale:.96,y:10,opacity:0},animate:{scale:1,y:0,opacity:1},exit:{scale:.98,y:-6,opacity:0},transition:{duration:.22,ease:[.22,1,.36,1]},children:[e.jsx("div",{className:"mHead",children:e.jsx("h3",{id:"m-title",children:"Settings"})}),e.jsxs("div",{className:"mBody",children:[e.jsx("p",{className:"muted",children:"Add your API key (stored locally). This demo does not call a real API."}),e.jsxs("label",{className:"field",children:[e.jsx("span",{children:"API Key"}),e.jsxs("div",{className:"inputWrap",children:[e.jsx("input",{type:d?"text":"password",value:o,onChange:a=>p(a.target.value),placeholder:"Enter at least 8 characters","aria-invalid":!!l}),e.jsx("button",{type:"button",className:"eye",onClick:()=>g(a=>!a),"aria-label":d?"Hide API key":"Show API key",title:d?"Hide":"Show",children:d?e.jsx(P,{size:18}):e.jsx(B,{size:18})})]}),l&&e.jsx("span",{className:"error",children:l})]}),e.jsxs("details",{className:"details",children:[e.jsx("summary",{children:"What’s stored?"}),e.jsxs("div",{className:"muted",children:["Only the API key (if you provide one) is saved to ",e.jsx("code",{children:"localStorage"}),"."]})]})]}),e.jsxs("div",{className:"mFoot",children:[e.jsx("button",{className:"closeBtn ghost",onClick:A,children:"Cancel"}),e.jsx("button",{className:"closeBtn",onClick:z,children:"Save"})]})]})})})]})})}export{F as default};
