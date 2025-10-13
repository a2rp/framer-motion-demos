import{d as j,r as o,j as e,A as N}from"./index-OJckmjHY.js";import{u as E}from"./use-spring-Bo4FPSC6.js";import{a as H}from"./use-transform-Doqm-mS3.js";import{i as M,M as T,m}from"./proxy-5eYXRWSd.js";import{u as $}from"./use-motion-value-DqlSTgNe.js";function g(r,...s){const d=r.length;function c(){let l="";for(let n=0;n<d;n++){l+=r[n];const i=s[n];i&&(l+=M(i)?i.get():i)}return l}return H(s.filter(M),c)}const A=j.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1100px;
    margin: 0 auto;
    color: var(--text);
`,D=j.header`
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

    .controls {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        flex-wrap: wrap;
    }

    .switch {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        input {
            accent-color: var(--primary);
            width: 18px;
            height: 18px;
        }
    }

    .ctrl {
        display: grid;
        align-items: center;
        gap: 6px;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .ctrl input[type="range"] {
        width: 160px;
        accent-color: var(--primary);
    }
    .ctrl em {
        font-size: 12px;
        color: var(--text-muted);
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
        background: var(--card);
    }
`,O=j.section`
    position: relative;
    isolation: isolate;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    min-height: 420px;

    .grid {
        display: grid;
        gap: var(--space-4);
        padding: var(--space-6);
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (width < 900px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (width < 560px) {
        .grid {
            grid-template-columns: 1fr;
            padding: var(--space-4);
        }
    }

    .card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        padding: var(--space-4);
        display: grid;
        gap: var(--space-3);
    }
    .card h3 {
        font-size: 18px;
    }
    .card .body {
        color: var(--text-muted);
    }
    .card .actions {
        margin-top: 4px;
    }
    .card .btn {
        height: 32px;
        padding: 0 12px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }

    /* Spotlight layer
     We support two strategies:
     - mask (preferred on Safari/Chromium)
     - gradient fallback using transparency
  */
    .spotLayer {
        position: absolute;
        inset: 0;
        z-index: 3;
        pointer-events: none;
        will-change: transform, opacity;
        /* Custom props expected:
       --x (px), --y (px), --r (px), --f (px), --dim (0..1)
    */
    }

    /* Preferred: mask image punches a hole through the dark layer */
    .spotLayer.use-mask {
        background: hsl(0 0% 0% / var(--dim));
        -webkit-mask-image: radial-gradient(
            circle at var(--x) var(--y),
            transparent 0,
            transparent calc(var(--r) - var(--f)),
            black calc(var(--r) + var(--f)),
            black 100%
        );
        mask-image: radial-gradient(
            circle at var(--x) var(--y),
            transparent 0,
            transparent calc(var(--r) - var(--f)),
            black calc(var(--r) + var(--f)),
            black 100%
        );
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
    }

    /* Fallback: draw a radial gradient that is transparent inside and dark outside */
    .spotLayer.use-gradient {
        background: radial-gradient(
            circle at var(--x) var(--y),
            transparent 0,
            transparent calc(var(--r) - var(--f)),
            hsl(0 0% 0% / var(--dim)) calc(var(--r) + var(--f)),
            hsl(0 0% 0% / var(--dim)) 100%
        );
    }

    /* Subtle ring (premium vibe) */
    .ring {
        position: absolute;
        z-index: 4;
        pointer-events: none;
        border-radius: 999px;
        border: 1.5px solid hsl(210 90% 56% / 0.65);
        box-shadow: 0 0 0 1px hsl(210 90% 56% / 0.18),
            0 10px 30px hsl(0 0% 0% / 0.18);
        will-change: transform;
    }

    /* Modal (self-made) */
    .modalOverlay {
        position: fixed;
        inset: 0;
        z-index: 50;
        backdrop-filter: blur(6px) saturate(1.2);
        background: hsl(0 0% 0% / 0.35);
        display: grid;
        place-items: center;
    }
    .modal {
        width: min(560px, 92vw);
        background: var(--card);
        color: var(--text);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        display: grid;
        gap: var(--space-4);
        padding: var(--space-6);
    }
    .modalHead h2 {
        font-size: 20px;
    }
    .modalBody ul {
        padding-left: 18px;
        color: var(--text);
    }
    .modalFoot {
        display: flex;
        justify-content: flex-end;
    }
    .modalFoot .btn {
        height: 34px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
`,y={Wrapper:A,Header:D,Stage:O},V=(()=>{var r,s;try{return((r=CSS==null?void 0:CSS.supports)==null?void 0:r.call(CSS,"-webkit-mask-image","radial-gradient(circle, #000 0, transparent 100%)"))||((s=CSS==null?void 0:CSS.supports)==null?void 0:s.call(CSS,"mask-image","radial-gradient(circle, #000 0, transparent 100%)"))||!1}catch{return!1}})();function K(r){const s=$(0),d=$(0),c=o.useCallback(n=>{const i=r.current;if(!i)return;const u=i.getBoundingClientRect();s.set(n.clientX-u.left),d.set(n.clientY-u.top)},[r,s,d]),l=o.useCallback(()=>{const n=r.current;if(!n)return;const i=n.getBoundingClientRect();s.set(i.width/2),d.set(i.height/2)},[r,s,d]);return{x:s,y:d,setFromEvent:c,center:l}}function _(){const[r,s]=o.useState(!0),[d,c]=o.useState(!1),[l,n]=o.useState(.65),[i,u]=o.useState(160),[v,F]=o.useState(36),x=o.useRef(null),{x:w,y:k,setFromEvent:b,center:f}=K(x),z=E(w,{stiffness:240,damping:30,mass:.8}),L=E(k,{stiffness:240,damping:30,mass:.8}),h=g`${i}px`,R=g`${v}px`,S=g`${z}px`,C=g`${L}px`;o.useEffect(()=>{f();const a=()=>f();return window.addEventListener("resize",a,{passive:!0}),()=>window.removeEventListener("resize",a)},[f]),o.useEffect(()=>{const a=t=>{t.key.toLowerCase()==="f"&&s(p=>!p),(t.key==="?"||t.shiftKey&&t.key==="/")&&c(p=>!p)};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[]);const P=a=>{if(!a||!x.current)return;const t=a.getBoundingClientRect(),p=x.current.getBoundingClientRect();w.set(t.left-p.left+t.width/2),k.set(t.top-p.top+t.height/2)},B=o.useMemo(()=>Array.from({length:6}).map((a,t)=>({id:`card-${t+1}`,title:`Target ${t+1}`,body:"Click “Spot here” to pin the spotlight to this card."})),[]);return e.jsx(T,{reducedMotion:"never",children:e.jsxs(y.Wrapper,{children:[e.jsxs(y.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Spotlight Overlay"}),e.jsx("p",{className:"muted",children:"Dim the world and reveal a moving focus circle that follows the cursor or pins to elements."})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Spotlight controls",children:[e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:r,onChange:a=>s(a.target.checked),"aria-label":"Enable spotlight"}),e.jsx("span",{children:"Enabled"})]}),e.jsxs("div",{className:"ctrl",children:[e.jsx("span",{children:"Radius"}),e.jsx("input",{type:"range",min:"80",max:"280",step:"2",value:i,onChange:a=>u(+a.target.value)}),e.jsxs("em",{children:[i,"px"]})]}),e.jsxs("div",{className:"ctrl",children:[e.jsx("span",{children:"Feather"}),e.jsx("input",{type:"range",min:"8",max:"80",step:"2",value:v,onChange:a=>F(+a.target.value)}),e.jsxs("em",{children:[v,"px"]})]}),e.jsxs("div",{className:"ctrl",children:[e.jsx("span",{children:"Dim"}),e.jsx("input",{type:"range",min:"0.2",max:"0.9",step:"0.05",value:l,onChange:a=>n(+a.target.value)}),e.jsx("em",{children:l.toFixed(2)})]}),e.jsx("button",{className:"btn ghost",onClick:()=>c(!0),"aria-haspopup":"dialog","aria-controls":"spot-help",children:"Guide"})]})]}),e.jsxs(y.Stage,{ref:x,onMouseMove:a=>r&&b(a),onTouchMove:a=>{if(!r)return;const t=a.touches[0];t&&b(t)},onClick:a=>r&&b(a),children:[e.jsx("div",{className:"grid",children:B.map(a=>e.jsxs("article",{className:"card",id:a.id,children:[e.jsx("header",{children:e.jsx("h3",{children:a.title})}),e.jsx("p",{className:"body",children:a.body}),e.jsx("div",{className:"actions",children:e.jsx("button",{className:"btn",onClick:t=>P(t.currentTarget.closest(".card")),children:"Spot here"})})]},a.id))}),e.jsx(N,{initial:!1,children:r&&e.jsx(m.div,{className:`spotLayer ${V?"use-mask":"use-gradient"}`,style:{"--x":S,"--y":C,"--r":h,"--f":R,"--dim":l},"aria-hidden":"true"})}),r&&e.jsx(m.div,{className:"ring",style:{left:`calc(${S} - ${h})`,top:`calc(${C} - ${h})`,width:`calc(${h} * 2)`,height:`calc(${h} * 2)`},"aria-hidden":"true"})]}),e.jsx(N,{children:d&&e.jsx(m.div,{className:"modalOverlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(m.div,{id:"spot-help",role:"dialog","aria-modal":"true",className:"modal",initial:{y:12,opacity:.8,scale:.98},animate:{y:0,opacity:1,scale:1,transition:{type:"spring",stiffness:280,damping:30}},exit:{y:8,opacity:0,scale:.98,transition:{duration:.18}},children:[e.jsx("header",{className:"modalHead",children:e.jsx("h2",{children:"Using Spotlight"})}),e.jsx("div",{className:"modalBody",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Enabled"})," lets the circle follow your cursor/touch."]}),e.jsxs("li",{children:["Use ",e.jsx("b",{children:"Radius"})," and ",e.jsx("b",{children:"Feather"})," to tune the reveal."]}),e.jsxs("li",{children:["Click ",e.jsx("b",{children:"Spot here"})," on any card to pin the light there."]}),e.jsxs("li",{children:["Keyboard: ",e.jsx("kbd",{children:"F"})," toggles enable, ",e.jsx("kbd",{children:"?"})," opens this guide."]})]})}),e.jsx("footer",{className:"modalFoot",children:e.jsx("button",{className:"btn",onClick:()=>c(!1),children:"Close"})})]})})})]})})}export{_ as default};
