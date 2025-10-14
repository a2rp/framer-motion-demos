import{d as z,r as l,j as e,A as S}from"./index-B-21U0DQ.js";import{u as ae}from"./use-motion-value-DG1npRlY.js";import{u as V}from"./use-transform-Cylj3xKs.js";import{u as te}from"./use-spring-kVpEELvh.js";import{M as re,m as u}from"./proxy-BihD2B5F.js";const se=z.div`
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
        opacity: 0.6;
        cursor: not-allowed;
    }

    .formGrid {
        display: grid;
        gap: var(--space-4);
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
    .ctrl input[type="number"] {
        height: 34px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 10px;
        width: 140px;
    }
    .ctrl input[type="checkbox"] {
        width: 18px;
        height: 18px;
        accent-color: var(--primary);
    }

    .pwd {
        display: flex;
        align-items: center;
        gap: 6px;
    }
    .pwd input {
        flex: 1 1 auto;
        height: 36px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 10px;
        outline: none;
    }
    .pwd.invalid input {
        border-color: hsl(0 70% 50% / 0.7);
    }
    .pwd .eye {
        display: inline-grid;
        place-items: center;
        width: 36px;
        height: 36px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        cursor: pointer;
    }
    .error {
        color: hsl(0 70% 60%);
    }
`,oe=z.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 1100px;
    margin: 0 auto;
    color: var(--text);

    .sr {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        white-space: nowrap;
    }
`,ie=z.header`
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
        font-style: normal;
        color: var(--text-muted);
        font-size: 12px;
        text-align: right;
    }

    .switch {
        display: inline-flex;
        align-items: center;
        gap: 10px;
    }
    .switch input {
        width: 18px;
        height: 18px;
        accent-color: var(--primary);
    }

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        height: 34px;
        padding: 0 14px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .btn.ghost {
        background: var(--surface);
    }
`,ne=z.section`
    display: grid;
    gap: var(--space-3);

    .card {
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        overflow: hidden;
    }

    .caption {
        font-size: 12px;
    }
    .muted {
        color: var(--text-muted);
    }

    .chart {
        display: block;
        width: 100%;
        height: auto;
        aspect-ratio: 900 / 360;
    }

    /* SVG theme */
    .bg {
        fill: var(--card);
    }

    .grid .v,
    .grid .h {
        stroke: var(--border);
        stroke-width: 1;
    }

    .axes line {
        stroke: hsl(0 0% 50% / 0.45);
        stroke-width: 1.2;
        shape-rendering: crispEdges;
    }

    .area {
        fill: color-mix(in oklab, var(--primary) 25%, transparent);
    }

    .line {
        fill: none;
        stroke: var(--primary);
        stroke-width: 2.5;
        filter: drop-shadow(0 1px 0.5px hsl(0 0% 0% / 0.15));
    }

    .dot {
        fill: var(--card);
        stroke: var(--primary);
        stroke-width: 1.8;
    }

    .xh {
        stroke: hsl(210 90% 56% / 0.45);
        stroke-width: 1.2;
    }
    .xhDot {
        fill: var(--primary);
        stroke: var(--card);
        stroke-width: 1.4;
    }
    .xhLabelBg {
        fill: var(--surface);
        stroke: var(--border);
    }
    .xhLabel {
        font-size: 11px;
        fill: var(--text);
    }
`,L={Wrapper:oe,Header:ie,Stage:ne,ModalOverlay:se},M=(s,x,c)=>Math.max(x,Math.min(c,s)),le=(s,x,c)=>s+(x-s)*c;function ce(s=24,x=12,c=100){const g=[];let t=le(x,c,.6);for(let o=0;o<s;o++){const d=Math.sin(o/s*Math.PI*2)*10;t=M(t+(Math.random()-.5)*12+d,x,c),g.push({x:o,y:Math.round(t*10)/10})}return g}function de(s,x=.2){if(!(s!=null&&s.length))return"";if(s.length<2)return`M ${s[0].x} ${s[0].y}`;const c=(t,o,d,n)=>{const h=Math.hypot(o.x-t.x,o.y-t.y)||1,v=Math.hypot(d.x-o.x,d.y-o.y)||1,m=n*h/(h+v),w=n*v/(h+v),b=o.x-m*(d.x-t.x),N=o.y-m*(d.y-t.y),A=o.x+w*(d.x-t.x),y=o.y+w*(d.y-t.y);return[{x:b,y:N},{x:A,y}]},g=[`M ${s[0].x} ${s[0].y}`];for(let t=0;t<s.length-1;t++){const o=s[t-1]||s[t],d=s[t],n=s[t+1],h=s[t+2]||n,[v,m]=c(o,d,n,x),[w,b]=c(d,n,h,x);g.push(`C ${m.x} ${m.y}, ${w.x} ${w.y}, ${n.x} ${n.y}`)}return g.join(" ")}function ye(){const[s,x]=l.useState(24),[c,g]=l.useState(.22),[t,o]=l.useState(!0),[d,n]=l.useState(!1),[h,v]=l.useState(""),[m,w]=l.useState(!1),b=h.length>0&&h.length<6,[N,A]=l.useState(0),y=l.useMemo(()=>ce(Math.max(5,s)),[s,N]),r={w:900,h:360,pad:36,top:24,right:16,bottom:32,left:44},k=r.w-r.left-r.right,f=r.h-r.top-r.bottom,$=y.length-1,C=Math.min(...y.map(a=>a.y)),D=Math.max(...y.map(a=>a.y)),X=a=>r.left+a/Math.max(1,$)*k,B=a=>r.top+f-(a-C)/Math.max(1e-6,D-C)*f,j=l.useMemo(()=>y.map(a=>({x:X(a.x),y:B(a.y),v:a.y})),[y,N]),P=l.useMemo(()=>de(j,M(c,0,.5)),[j,c]),G=l.useMemo(()=>{if(j.length<2)return"";const a=r.top+f;return`${P} L ${j.at(-1).x} ${a} L ${j[0].x} ${a} Z`},[P,j,f]),O=l.useRef(null),[E,R]=l.useState(1);l.useLayoutEffect(()=>{var i,p;const a=((p=(i=O.current)==null?void 0:i.getTotalLength)==null?void 0:p.call(i))||1;R(a)},[P]);const F=ae(0),Y=V(F,[r.left,r.left+k],[0,$]),W=te(Y,{stiffness:300,damping:30,mass:.6}),_=V(W,a=>Math.round(M(a,0,$))),[Z,H]=l.useState(!1),q=a=>{const i=a.currentTarget,p=i.createSVGPoint();p.x=a.clientX,p.y=a.clientY;const ee=p.matrixTransform(i.getScreenCTM().inverse());F.set(M(ee.x,r.left,r.left+k))},J=a=>{var i;return((i=y[M(a,0,$)])==null?void 0:i.y)??0},T=()=>n(!1),K=()=>n(!0),Q=()=>{b||n(!1)},[I,U]=l.useState("");return l.useEffect(()=>U(`Series with ${y.length} points, range ${C} to ${D}`),[y,C,D]),e.jsx(re,{reducedMotion:"never",children:e.jsxs(L.Wrapper,{children:[e.jsxs(L.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Line Chart — Draw On"}),e.jsx("p",{className:"muted",children:"Path reveals with stroke-dash, grid fades in, points stagger, and a crosshair tracks your cursor."})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Chart controls",children:[e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Points"}),e.jsx("input",{type:"range",min:5,max:60,step:1,value:s,onChange:a=>x(parseInt(a.target.value,10)||5)}),e.jsx("em",{children:s})]}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Smoothing"}),e.jsx("input",{type:"range",min:0,max:.5,step:.02,value:c,onChange:a=>g(parseFloat(a.target.value))}),e.jsx("em",{children:c.toFixed(2)})]}),e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:t,onChange:a=>o(a.target.checked)}),e.jsx("span",{children:"Area"})]}),e.jsx("button",{className:"btn ghost",onClick:()=>A(a=>a+1),children:"Regenerate"}),e.jsx("button",{className:"btn",onClick:K,children:"Settings"})]})]}),e.jsxs(L.Stage,{children:[e.jsx("div",{className:"card",role:"img","aria-label":`Animated line chart. ${I}`,children:e.jsxs(u.svg,{viewBox:`0 0 ${r.w} ${r.h}`,className:"chart",onPointerMove:q,onPointerEnter:()=>H(!0),onPointerLeave:()=>H(!1),children:[e.jsx("rect",{x:"0",y:"0",width:r.w,height:r.h,className:"bg"}),e.jsxs("g",{className:"grid",children:[e.jsx(S,{initial:!1,children:Array.from({length:6}).map((a,i)=>{const p=r.left+i/5*k;return e.jsx(u.line,{x1:p,x2:p,y1:r.top,y2:r.top+f,initial:{opacity:0,scaleY:.9,transformOrigin:"center"},animate:{opacity:1,scaleY:1},transition:{duration:.4,delay:.05*i,ease:[.22,1,.36,1]},className:"v"},`vx-${i}`)})}),e.jsx(S,{initial:!1,children:Array.from({length:6}).map((a,i)=>{const p=r.top+i/5*f;return e.jsx(u.line,{x1:r.left,x2:r.left+k,y1:p,y2:p,initial:{opacity:0,scaleX:.9,transformOrigin:"center"},animate:{opacity:1,scaleX:1},transition:{duration:.4,delay:.05*i,ease:[.22,1,.36,1]},className:"h"},`hx-${i}`)})})]}),e.jsxs("g",{className:"axes",children:[e.jsx("line",{x1:r.left,y1:r.top+f,x2:r.left+k,y2:r.top+f}),e.jsx("line",{x1:r.left,y1:r.top,x2:r.left,y2:r.top+f})]}),t&&e.jsx(u.path,{d:G,className:"area",initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,ease:[.22,1,.36,1]}}),e.jsx(u.path,{ref:O,d:P,className:"line",strokeDasharray:E,initial:{strokeDashoffset:E},animate:{strokeDashoffset:0},transition:{duration:1.1,ease:[.22,1,.36,1]}}),e.jsx(S,{initial:!1,children:j.map((a,i)=>e.jsx(u.circle,{cx:a.x,cy:a.y,r:"3.5",className:"dot",initial:{opacity:0,scale:.7},animate:{opacity:1,scale:1},transition:{duration:.28,delay:.03*i,ease:[.22,1,.36,1]}},`pt-${i}-${N}`))}),e.jsx(xe,{active:Z,index:_,pts:j,scaleY:B,valueAt:J,vb:r})]})}),e.jsxs("p",{className:"caption muted",children:["Draw-on via ",e.jsx("code",{children:"strokeDasharray"}),"/",e.jsx("code",{children:"strokeDashoffset"}),", spline path for premium feel, and MotionValues for a responsive crosshair."]})]}),e.jsx(S,{children:d&&e.jsx(L.ModalOverlay,{as:u.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:a=>{a.target===a.currentTarget&&T()},role:"dialog","aria-modal":"true","aria-label":"Chart settings",children:e.jsxs(u.div,{className:"modal",initial:{y:12,scale:.98,opacity:0},animate:{y:0,scale:1,opacity:1},exit:{y:8,scale:.98,opacity:0},transition:{duration:.25,ease:[.22,1,.36,1]},children:[e.jsxs("div",{className:"mHead",children:[e.jsx("h3",{children:"Settings"}),e.jsx("p",{className:"muted",children:"Tune how the line renders and optional sharing protection."})]}),e.jsx("div",{className:"mBody",children:e.jsxs("div",{className:"formGrid",children:[e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Smoothing (0–0.5)"}),e.jsx("input",{type:"number",step:"0.02",min:"0",max:"0.5",value:c,onChange:a=>g(M(parseFloat(a.target.value)||0,0,.5))})]}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Show Area"}),e.jsx("input",{type:"checkbox",checked:t,onChange:a=>o(a.target.checked)})]}),e.jsxs("label",{className:"ctrl",children:[e.jsx("span",{children:"Share Password (optional)"}),e.jsxs("div",{className:`pwd ${b?"invalid":""}`,children:[e.jsx("input",{type:m?"text":"password",value:h,onChange:a=>v(a.target.value),placeholder:"Min 6 characters","aria-invalid":b}),e.jsx("button",{className:"eye",onClick:()=>w(a=>!a),type:"button","aria-label":m?"Hide password":"Show password",children:e.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18","aria-hidden":!0,children:m?e.jsx("path",{fill:"currentColor",d:"M12 5c5.5 0 9.5 5.2 9.5 7s-4 7-9.5 7S2.5 12.8 2.5 12 6.5 5 12 5zm0 3a4 4 0 100 8 4 4 0 000-8z"}):e.jsx("path",{fill:"currentColor",d:"M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12zm10 4a4 4 0 110-8 4 4 0 010 8z"})})})]}),b&&e.jsx("small",{className:"error",children:"Password must be at least 6 characters."})]})]})}),e.jsxs("div",{className:"mFoot",children:[e.jsx("button",{className:"closeBtn ghost",onClick:T,children:"Cancel"}),e.jsx("button",{className:"closeBtn",onClick:Q,disabled:b,children:"Save"})]})]})})}),e.jsx("span",{className:"sr","aria-live":"polite",children:I})]})})}function xe({active:s,index:x,pts:c,valueAt:g,vb:t}){const[o,d]=l.useState(0);l.useEffect(()=>{const v=x.on("change",m=>d(m));return()=>v()},[x]);const n=c[o]||c[0]||{x:t.left,y:t.top},h=g(o);return e.jsx(S,{children:s&&e.jsxs("g",{children:[e.jsx(u.line,{x1:n.x,x2:n.x,y1:t.top,y2:t.top+(t.h-t.top-t.bottom),className:"xh",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.15}},"xh"),e.jsx(u.circle,{cx:n.x,cy:n.y,r:"5.5",className:"xhDot",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.15}},"xhd"),e.jsxs(u.g,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},transition:{duration:.15},children:[e.jsx("rect",{x:n.x-36,y:t.top-22,width:"72",height:"18",rx:"8",className:"xhLabelBg"}),e.jsx("text",{x:n.x,y:t.top-9,textAnchor:"middle",className:"xhLabel",children:h.toFixed(1)})]},"xhl")]})})}export{ye as default};
