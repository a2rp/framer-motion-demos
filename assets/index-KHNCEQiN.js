import{d as m,r,j as e,A as L}from"./index-Bg5Ft_Mu.js";import{M as F,m as z}from"./proxy-DHsq80Pc.js";import{u as $}from"./use-animation-DXhEZD1X.js";const R=m.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1100px;
    margin: 0 auto;
    color: var(--text);
`,D=m.header`
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
    .actions {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        flex-wrap: wrap;
    }
    .btn {
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .btn.ghost {
        background: var(--surface);
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }
`,G=m.section`
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    min-height: 420px;

    .backdrop {
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: radial-gradient(
                1200px 500px at -10% -20%,
                hsl(210 90% 56% / 0.12),
                transparent 60%
            ),
            radial-gradient(
                1000px 420px at 110% 120%,
                hsl(260 90% 60% / 0.12),
                transparent 60%
            ),
            var(--card);
    }
    .sun {
        position: absolute;
        top: -140px;
        left: 60%;
        width: 320px;
        height: 320px;
        border-radius: 50%;
        background: radial-gradient(
            circle at 50% 50%,
            hsl(50 95% 60% / 0.35),
            transparent 70%
        );
        filter: blur(8px);
    }
    .lines {
        position: absolute;
        inset: -1px;
        opacity: 0.12;
        background: repeating-linear-gradient(
            -12deg,
            color-mix(in srgb, var(--text) 20%, transparent) 0 2px,
            transparent 2px 10px
        );
        mix-blend-mode: overlay;
    }
    .noise {
        position: absolute;
        inset: 0;
        opacity: 0.05;
        background-image: repeating-linear-gradient(
            0deg,
            #000 0 1px,
            transparent 1px 2px
        );
        mix-blend-mode: overlay;
    }

    .ts-canvas {
        position: relative;
        isolation: isolate;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .streakLayer {
        position: absolute;
        inset: 0;
        transform: rotate(var(--tilt));
        will-change: transform;
    }

    /* ✅ Lightness slider fix: use *1% inside calc so var becomes a valid percentage */
    .streak {
        position: absolute;
        left: -20%;
        width: 140%;
        height: var(--th);

        --h: calc(var(--hueA) * (1 - var(--mix)) + var(--hueB) * var(--mix));

        background: linear-gradient(
            90deg,
            hsl(var(--h) 92% calc((var(--light) + 4) * 1%) / 0),
            hsl(
                var(--h) 96% calc((var(--light) + 8) * 1%) /
                    max(0.18, var(--alpha))
            ),
            hsl(var(--h) 92% calc((var(--light) + 4) * 1%) / 0)
        );

        box-shadow: 0 6px 24px hsl(0 0% 0% / 0.1),
            0 0 18px hsl(var(--h) 100% 60% / calc(var(--alpha) + 0.18));

        mix-blend-mode: plus-lighter;
        filter: saturate(1.15) contrast(1.04);
        border-radius: 999px;
        will-change: transform, opacity;
    }
    @supports not (mix-blend-mode: plus-lighter) {
        .streak {
            mix-blend-mode: screen;
        }
    }

    .glassCard {
        position: absolute;
        right: 16px;
        bottom: 16px;
        width: min(720px, 96%);
        max-height: calc(100% - 32px);
        overflow: auto;
        overscroll-behavior: contain;
        background: color-mix(in oklab, var(--card) 72%, #ffffff10);
        backdrop-filter: blur(6px) saturate(1.05);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        padding: var(--space-6);
        color: var(--text);
        z-index: 2;
    }
    @media (width < 640px) {
        .glassCard {
            inset: auto 8px 8px 8px;
            width: auto;
            right: 8px;
            left: 8px;
        }
    }
    .glassCard h2 {
        font-size: 18px;
        margin-bottom: var(--space-4);
    }
    .glassCard .hint {
        color: var(--text-muted);
        margin-top: var(--space-3);
    }

    .grid {
        display: grid;
        gap: var(--space-4);
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (width < 860px) {
        .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }
    @media (width < 560px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }

    .ctrl {
        display: grid;
        gap: 6px;
        align-items: center;
    }
    .ctrl span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .ctrl input[type="number"],
    .ctrl input[type="range"] {
        width: 100%;
        height: 36px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        padding: 0 8px;
        accent-color: var(--primary);
    }
    .ctrl input[type="number"] {
        -moz-appearance: textfield;
    }
    .ctrl input[type="number"]::-webkit-outer-spin-button,
    .ctrl input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .ctrl em {
        font-style: normal;
        font-size: 12px;
        color: var(--text-muted);
        justify-self: end;
    }

    .ctrl input[type="range"] {
        -webkit-appearance: none;
        background: transparent;
        padding: 0;
        height: 24px;
    }
    .ctrl input[type="range"]::-webkit-slider-runnable-track {
        height: 6px;
        border-radius: 999px;
        background: linear-gradient(
            90deg,
            var(--primary),
            color-mix(in srgb, var(--primary) 30%, var(--border))
        );
    }
    .ctrl input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        margin-top: -6px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--primary);
        border: 2px solid color-mix(in srgb, var(--primary) 30%, #fff);
        box-shadow: var(--shadow-sm);
    }
    .ctrl input[type="range"]::-moz-range-track {
        height: 6px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--primary) 60%, var(--border));
    }
    .ctrl input[type="range"]::-moz-range-thumb {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--primary);
        border: 2px solid color-mix(in srgb, var(--primary) 30%, #fff);
        box-shadow: var(--shadow-sm);
    }
`,O=m.aside`
    color: var(--text-muted);
    h3 {
        color: var(--text);
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
        display: grid;
        gap: 6px;
    }
`;m.div`
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

    .form {
        display: grid;
        gap: var(--space-4);
        margin: 10px 0 14px;
    }
    .fCtrl {
        display: grid;
        gap: 6px;
    }
    .fCtrl span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .fCtrl input[type="text"],
    .fCtrl input[type="email"],
    .fCtrl input[type="password"],
    .fCtrl input[type="search"],
    .fCtrl input[type="tel"] {
        width: 100%;
        height: 36px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 10px;
        outline: none;
    }
    .fCtrl input[aria-invalid="true"] {
        border-color: hsl(6 84% 58%);
        box-shadow: 0 0 0 3px hsl(6 84% 58% / 0.15);
    }
    .fCtrl em {
        color: hsl(6 84% 68%);
        font-size: 12px;
    }
    .pwd {
        position: relative;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
    }
    .pwd input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .eye {
        height: 36px;
        width: 40px;
        border: 1px solid var(--border);
        border-left: none;
        background: var(--surface);
        color: var(--text);
        border-top-right-radius: var(--radius-sm);
        border-bottom-right-radius: var(--radius-sm);
        display: grid;
        place-items: center;
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
    .closeBtn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;const u={Wrapper:R,Header:D,Stage:G,Notes:O},N=(s,l=2)=>Math.round(s*10**l)/10**l,t={slices:12,speed:1,tilt:-22,thickness:36,gap:16,jitter:.18,hueA:210,hueB:260,light:62,alpha:.32},U=/^[^\s@]+@[^\s@]+\.[^\s@]+$/i;function W({slices:s,thickness:l,gap:p,jitter:c}){const n=Math.max(1,s),d=l+p,h=Array.from({length:n},(o,i)=>({id:`slice-${i}`,top:i*d,jitter:1+Math.sin(i*1.12)*c,parity:i%2===0?1:-1}));return{rows:n,band:d,items:h}}const _=s=>Math.min(5,Math.max(.6,2.2/Math.min(2.5,Math.max(.2,s)))),V=s=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24","aria-hidden":!0,...s,children:e.jsx("path",{fill:"currentColor",d:"M8 5v14l11-7z"})}),q=s=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24","aria-hidden":!0,...s,children:e.jsx("path",{fill:"currentColor",d:"M6 5h4v14H6zm8 0h4v14h-4z"})});function J({id:s,top:l,mix:p,parity:c,baseDur:n,running:d,jitter:h}){const o=$(),i=n*(1+(c>0?1:-1)*.08)*h;return r.useEffect(()=>{d?o.start({x:["-120%","120%"],transition:{duration:i,repeat:1/0,ease:"linear"}}):o.stop()},[d,i,o]),e.jsx(z.div,{className:"streak",style:{top:l,"--mix":String(p)},initial:{x:"-120%"},animate:o},`${s}-${Math.round(i*1e3)}`)}function ie(){const[s,l]=r.useState(!0),[p,c]=r.useState(t.slices),[n,d]=r.useState(t.speed),[h,o]=r.useState(t.tilt),[i,g]=r.useState(t.thickness),[x,b]=r.useState(t.gap),[v,f]=r.useState(t.hueA),[y,j]=r.useState(t.hueB),[w,k]=r.useState(t.light),[M,S]=r.useState(t.alpha),[K,Q]=r.useState(!1),[A,X]=r.useState("Premium Preset"),[B,Y]=r.useState(""),[P,Z]=r.useState(""),[ee,ae]=r.useState(!1);A.trim().length>=3&&U.test(B.trim())&&P.length>=6;const C=r.useMemo(()=>W({slices:Math.min(48,Math.max(2,Math.floor(p))),thickness:Math.min(160,Math.max(8,i)),gap:Math.min(80,Math.max(0,x)),jitter:t.jitter}),[p,i,x]),I=r.useMemo(()=>_(n),[n]);r.useEffect(()=>{c(a=>Math.min(48,Math.max(2,Math.floor(a)))),o(a=>Math.min(55,Math.max(-55,Math.round(a)))),g(a=>Math.min(160,Math.max(8,Math.floor(a)))),b(a=>Math.min(80,Math.max(0,Math.floor(a)))),f(a=>Math.min(360,Math.max(0,Math.floor(a)))),j(a=>Math.min(360,Math.max(0,Math.floor(a)))),k(a=>Math.min(90,Math.max(20,Math.floor(a)))),S(a=>Math.min(1,Math.max(0,Math.round(a*100)/100)))},[]);const H=()=>{c(t.slices),d(t.speed),o(t.tilt),g(t.thickness),b(t.gap),f(t.hueA),j(t.hueB),k(t.light),S(t.alpha)},T={"--th":`${i}px`,"--gap":`${x}px`,"--hueA":v,"--hueB":y,"--light":w,"--alpha":M};return e.jsx(F,{reducedMotion:"never",children:e.jsxs(u.Wrapper,{children:[e.jsxs(u.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Time-Slice Streaks"}),e.jsx("p",{className:"muted",children:"Diagonal streak wedges sweep across a canvas with subtle parallax and premium easing. Fully theme-able, responsive, and driven by Framer Motion."})]}),e.jsxs("div",{className:"actions",role:"toolbar","aria-label":"Playback",children:[e.jsxs("button",{className:"btn",onClick:()=>l(a=>!a),title:s?"Pause":"Play",children:[s?e.jsx(q,{}):e.jsx(V,{})," ",e.jsx("span",{children:s?"Pause":"Play"})]}),e.jsx("button",{className:"btn ghost",onClick:H,title:"Reset to defaults",children:"Reset"})]})]}),e.jsxs(u.Stage,{children:[e.jsxs("div",{className:"backdrop",children:[e.jsx("div",{className:"sun"}),e.jsx("div",{className:"lines","aria-hidden":!0}),e.jsx("div",{className:"noise","aria-hidden":!0})]}),e.jsxs("div",{className:"ts-canvas",style:T,children:[e.jsx("div",{className:"streakLayer",style:{"--tilt":`${h}deg`},children:e.jsx(L,{initial:!1,children:C.items.map((a,E)=>e.jsx(J,{id:a.id,top:a.top,mix:E/Math.max(1,C.rows-1),parity:a.parity,jitter:a.jitter,baseDur:I,running:s},a.id))})}),e.jsxs(z.div,{className:"glassCard",initial:{y:10,opacity:0,scale:.98},animate:{y:0,opacity:1,scale:1,transition:{duration:.45,ease:[.22,1,.36,1]}},children:[e.jsx("h2",{children:"Live Settings"}),e.jsxs("div",{className:"grid",children:[e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Slices"}),e.jsx("input",{type:"number",min:2,max:48,value:p,onChange:a=>c(Math.min(48,Math.max(2,parseInt(a.target.value||"0",10))))})]}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Speed"}),e.jsx("input",{type:"range",min:.2,max:2.5,step:.05,value:n,onChange:a=>d(parseFloat(a.target.value))}),e.jsxs("em",{children:[N(n,2),"×"]})]}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Tilt"}),e.jsx("input",{type:"range",min:-55,max:55,step:1,value:h,onChange:a=>o(parseInt(a.target.value,10))}),e.jsxs("em",{children:[h,"°"]})]}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Thickness"}),e.jsx("input",{type:"range",min:8,max:160,step:2,value:i,onChange:a=>g(parseInt(a.target.value,10))}),e.jsxs("em",{children:[i,"px"]})]}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Gap"}),e.jsx("input",{type:"range",min:0,max:80,step:2,value:x,onChange:a=>b(parseInt(a.target.value,10))}),e.jsxs("em",{children:[x,"px"]})]}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Hue A"}),e.jsx("input",{type:"range",min:0,max:360,step:1,value:v,onChange:a=>f(parseInt(a.target.value,10))}),e.jsx("em",{children:v})]}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Hue B"}),e.jsx("input",{type:"range",min:0,max:360,step:1,value:y,onChange:a=>j(parseInt(a.target.value,10))}),e.jsx("em",{children:y})]}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Lightness"}),e.jsx("input",{type:"range",min:20,max:90,step:1,value:w,onChange:a=>k(parseInt(a.target.value,10))}),e.jsxs("em",{children:[w,"%"]})]}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Opacity"}),e.jsx("input",{type:"range",min:0,max:1,step:.01,value:M,onChange:a=>S(parseFloat(a.target.value))}),e.jsx("em",{children:N(M,2)})]})]}),e.jsx("p",{className:"hint",children:"Tip: thickness < 48 + gap 8–24 ⇒ expensive-UI vibes."})]})]})]}),e.jsxs(u.Notes,{children:[e.jsx("h3",{children:"How it works"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Streaks are horizontal bands inside a rotated layer, controls stay upright."}),e.jsx("li",{children:"Per-streak jitter avoids robotic motion; transform-only for silky 60fps."})]})]})]})})}export{ie as default};
