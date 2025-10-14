import{d as E,r as g,j as e,A as B}from"./index-ChsZnzdL.js";import{M as _,m as f}from"./proxy-DJIhAgXk.js";const F=E.div`
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
`,$=E.header`
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
        display: inline-flex;
        gap: var(--space-4);
        align-items: center;
    }

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 8px 14px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 36px;
    }
    .btn.ghost {
        background: var(--surface);
    }
`,D=E.section`
    display: grid;
    gap: var(--space-6);

    .chartWrap {
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        padding: var(--space-4);
        display: grid;
        place-items: center;
        overflow: hidden;
    }

    .chart {
        width: min(560px, 95vw);
        height: auto;
        display: block;
    }

    .ring {
        fill: var(--surface);
        stroke: var(--border);
        stroke-width: 1;
    }

    .slice {
        cursor: pointer;
    }
    .sliceBorder {
        fill: none;
        stroke: var(--card);
        stroke-opacity: 0.45;
        stroke-width: 1;
    }

    .centerLabel text {
        text-anchor: middle;
        dominant-baseline: middle;
    }
    .centerLabel .title {
        font-size: 14px;
        fill: var(--text-muted);
    }
    .centerLabel .value {
        font-size: 22px;
        font-weight: 700;
        fill: var(--text);
    }
    .centerPct {
        text-anchor: middle;
        dominant-baseline: middle;
        font-size: 28px;
        font-weight: 700;
        fill: var(--text);
    }

    .legend {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: var(--space-3);
    }
    .legendItem {
        display: grid;
        grid-template-columns: 14px 1fr auto;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        text-align: left;
    }
    .legendItem.active {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px hsl(210 90% 56% / 0.28);
    }
    .legendItem:focus-visible {
        outline: none;
        box-shadow: 0 0 0 3px var(--focus-ring);
    }

    .swatch {
        width: 14px;
        height: 14px;
        border-radius: 3px;
        box-shadow: inset 0 0 0 1px hsl(0 0% 0% / 0.15);
    }
    .liLabel {
        color: var(--text);
        font-weight: 600;
    }
    .liValue {
        color: var(--text-muted);
    }
`,T=E.div`
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

    /* Form grid */
    .gridHead {
        display: grid;
        grid-template-columns: 1fr 120px 90px;
        gap: 10px;
        padding: 6px 0;
        color: var(--text-muted);
        font-size: 12px;
    }
    .rows {
        display: grid;
        gap: 8px;
    }
    .row {
        display: grid;
        grid-template-columns: 1fr 120px 90px;
        gap: 10px;
        align-items: start;
    }
    .cell {
        display: grid;
        gap: 6px;
    }
    .cell.actions {
        align-content: center;
    }

    input[type="text"],
    input[type="number"] {
        height: 34px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 10px;
        outline: none;
    }
    input[type="text"]:focus,
    input[type="number"]:focus {
        box-shadow: 0 0 0 3px var(--focus-ring);
        border-color: var(--primary);
    }

    .mini {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        height: 30px;
        padding: 0 10px;
        border-radius: var(--radius-sm);
        cursor: pointer;
    }
    .mini.ghost {
        background: var(--surface);
    }
    .mini.danger {
        background: hsl(0 75% 50%);
        color: white;
        border-color: transparent;
    }

    .rowOps {
        margin-top: 8px;
    }

    .hint {
        color: hsl(0 70% 60%);
        font-size: 12px;
    }
    .err {
        color: hsl(0 80% 60%);
        margin-bottom: 8px;
    }

    /* Password block */
    .pwWrap {
        display: grid;
        gap: 6px;
        margin-top: 10px;
    }
    .pwWrap label {
        font-size: 12px;
        color: var(--text-muted);
    }
    .pwInput {
        position: relative;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
    }
    .pwInput input {
        height: 34px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-sm);
        padding: 0 36px 0 10px;
    }
    .pwInput input:focus {
        box-shadow: 0 0 0 3px var(--focus-ring);
        border-color: var(--primary);
    }
    .pwInput .eye {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        width: 28px;
        height: 28px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: 6px;
        cursor: pointer;
    }

    @media (width < 520px) {
        .gridHead,
        .row {
            grid-template-columns: 1fr 100px 80px;
        }
    }
`,P={Wrapper:F,Header:$,Stage:D},z=r=>r*Math.PI/180;function M(r,d,i,n){const c=z(n-90);return{x:r+i*Math.cos(c),y:d+i*Math.sin(c)}}function O(r,d,i,n,c,u){const N=u-c<=180?0:1,x=M(r,d,i,u),h=M(r,d,i,c),l=M(r,d,n,c),b=M(r,d,n,u);return["M",x.x,x.y,"A",i,i,0,N,0,h.x,h.y,"L",l.x,l.y,"A",n,n,0,N,1,b.x,b.y,"Z"].join(" ")}function V(r){return`hsl(${210+r*28%360} 75% 52%)`}const R=[{id:"a",label:"Alpha",value:32},{id:"b",label:"Beta",value:25},{id:"c",label:"Gamma",value:18},{id:"d",label:"Delta",value:14},{id:"e",label:"Epsilon",value:11}];function G(){var t,s;const[r,d]=g.useState(R),[i,n]=g.useState(null),[c,u]=g.useState(!1),[N,x]=g.useState(""),h=g.useMemo(()=>r.reduce((a,o)=>a+(Number(o.value)||0),0),[r]),l=420,b=l/2,y=l/2,C=150,A=88,j=g.useMemo(()=>{const a=[];let o=0;if(h<=0)return a;for(let p=0;p<r.length;p++){const m=r[p],w=(Number(m.value)||0)/h,v=o/h*360,S=(o+m.value)/h*360;o+=m.value;const H=(v+S)/2,I=V(p);a.push({...m,color:I,startAngle:v,endAngle:S,midAngle:H,pct:w*100})}return a},[r,h]),k=a=>{var o;n(p=>p===a?null:a),x("Slice "+(((o=r.find(p=>p.id===a))==null?void 0:o.label)||"")+" selected")},L=()=>{n(null),d(R),x("Chart reset")};return e.jsx(_,{reducedMotion:"never",children:e.jsxs(P.Wrapper,{children:[e.jsxs(P.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Pie Slice Pop-Out"}),e.jsx("p",{className:"muted",children:"Hover to nudge; click to pop a slice. Edit the dataset live. Everything runs on crisp transforms."})]}),e.jsxs("div",{className:"controls",role:"toolbar","aria-label":"Chart controls",children:[e.jsx("button",{className:"btn",onClick:()=>u(!0),title:"Edit data",children:"Edit Data"}),e.jsx("button",{className:"btn ghost",onClick:L,title:"Reset",children:"Reset"})]})]}),e.jsxs(P.Stage,{children:[e.jsx("div",{className:"chartWrap",role:"img","aria-label":"Donut chart",children:e.jsxs("svg",{viewBox:`0 0 ${l} ${l}`,width:"100%",height:"100%",className:"chart",children:[e.jsx("circle",{cx:b,cy:y,r:(C+A)/2,className:"ring"}),j.map((a,o)=>{const p=O(b,y,C,A,a.startAngle,a.endAngle),m=i===a.id?16:8,w=Math.cos(z(a.midAngle-90))*m,v=Math.sin(z(a.midAngle-90))*m;return e.jsxs(f.g,{initial:!1,whileHover:{x:w*.5,y:v*.5},animate:{x:i===a.id?w:0,y:i===a.id?v:0},transition:{type:"spring",stiffness:380,damping:30,mass:.6},className:"slice",onClick:()=>k(a.id),role:"button",tabIndex:0,onKeyDown:S=>(S.key==="Enter"||S.key===" ")&&k(a.id),"aria-label":`${a.label} ${Math.round(a.pct)}%`,children:[e.jsx(f.path,{d:p,style:{fill:a.color},initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},transition:{duration:.35,ease:[.22,1,.36,1]}}),e.jsx("path",{d:p,className:"sliceBorder"}),e.jsx(B,{children:i===a.id&&e.jsxs(f.text,{x:b,y,className:"centerPct",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.2},children:[Math.round(a.pct),"%"]},"pct")})]},a.id)}),e.jsxs(f.g,{initial:!1,className:"centerLabel",children:[e.jsx("text",{x:b,y:y-6,className:"title",children:i?((t=j.find(a=>a.id===i))==null?void 0:t.label)||"—":"Total"}),e.jsx("text",{x:b,y:y+20,className:"value",children:i?((s=j.find(a=>a.id===i))==null?void 0:s.value)??0:h})]})]})}),e.jsx("div",{className:"legend",role:"list","aria-label":"Legend",children:j.map((a,o)=>e.jsxs(f.button,{className:`legendItem ${i===a.id?"active":""}`,onClick:()=>k(a.id),whileHover:{y:-2},whileTap:{scale:.98},layout:!0,children:[e.jsx("span",{className:"swatch",style:{background:a.color}}),e.jsx("span",{className:"liLabel",children:a.label}),e.jsx("span",{className:"liValue",children:a.value})]},a.id))})]}),e.jsx("span",{className:"sr","aria-live":"polite",children:N}),e.jsx(B,{children:c&&e.jsx(T,{as:f.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(f.div,{className:"modal",role:"dialog","aria-modal":"true","aria-label":"Edit data",initial:{y:20,scale:.98,opacity:0},animate:{y:0,scale:1,opacity:1},exit:{y:8,scale:.98,opacity:0},transition:{type:"spring",stiffness:320,damping:28,mass:.7},children:[e.jsx("div",{className:"mHead",children:e.jsx("h3",{children:"Edit Data"})}),e.jsx(W,{data:r,onCancel:()=>u(!1),onSave:a=>{d(a),n(null),u(!1),x("Data updated")}})]})})})]})})}function W({data:r,onSave:d,onCancel:i}){const[n,c]=g.useState(()=>r.map(t=>({id:t.id,label:t.label,value:String(t.value)}))),[u,N]=g.useState(""),[x,h]=g.useState(!1),[l,b]=g.useState({}),y=g.useRef(0),C=()=>{const t=++y.current;c(s=>[...s,{id:"n"+t,label:"New",value:"1"}])},A=t=>{c(s=>s.filter(a=>a.id!==t))},j=(t,s)=>{c(a=>a.map(o=>o.id===t?{...o,...s}:o))},k=()=>{const t={};n.length===0&&(t.rows="At least one row is required.");const s=new Set;let a=0;return n.forEach((o,p)=>{const m=`row_${o.id}`,w=(o.label||"").trim(),v=Number(o.value);w||(t[m+"_label"]="Label is required."),s.has(w.toLowerCase())&&(t[m+"_label"]="Labels must be unique."),s.add(w.toLowerCase()),(!Number.isFinite(v)||v<=0)&&(t[m+"_value"]="Value must be a positive number."),a+=Number.isFinite(v)?v:0}),a<=0&&(t.total="Total value must be greater than zero."),u&&u.length<6&&(t.pw="Password must be at least 6 characters."),b(t),Object.keys(t).length===0},L=()=>{if(!k())return;const t=n.map(s=>({id:s.id,label:s.label.trim(),value:Math.round(Number(s.value))}));d(t)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mBody",children:[e.jsx("p",{className:"muted",children:"Add/edit labels and values. Values must be positive numbers."}),l.total&&e.jsx("p",{className:"err",children:l.total}),l.rows&&e.jsx("p",{className:"err",children:l.rows}),e.jsxs("div",{className:"gridHead",children:[e.jsx("span",{children:"Label"}),e.jsx("span",{children:"Value"}),e.jsx("span",{className:"sr",children:"Actions"})]}),e.jsx("div",{className:"rows",children:n.map(t=>{const s=`row_${t.id}`;return e.jsxs(f.div,{layout:!0,className:"row",initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},children:[e.jsxs("div",{className:"cell",children:[e.jsx("input",{type:"text",value:t.label,onChange:a=>j(t.id,{label:a.target.value}),"aria-label":"Label",placeholder:"Label"}),l[s+"_label"]&&e.jsx("span",{className:"hint",children:l[s+"_label"]})]}),e.jsxs("div",{className:"cell",children:[e.jsx("input",{type:"number",min:"1",step:"1",value:t.value,onChange:a=>j(t.id,{value:a.target.value}),"aria-label":"Value",placeholder:"Value"}),l[s+"_value"]&&e.jsx("span",{className:"hint",children:l[s+"_value"]})]}),e.jsx("div",{className:"cell actions",children:e.jsx("button",{className:"mini danger",onClick:()=>A(t.id),title:"Remove",children:"Remove"})})]},t.id)})}),e.jsx("div",{className:"rowOps",children:e.jsx("button",{className:"mini ghost",onClick:C,children:"+ Add row"})}),e.jsxs("div",{className:"pwWrap",children:[e.jsx("label",{htmlFor:"pw",children:"Protect edits (optional)"}),e.jsxs("div",{className:"pwInput",children:[e.jsx("input",{id:"pw",type:x?"text":"password",value:u,onChange:t=>N(t.target.value),placeholder:"Password (min 6 chars)","aria-invalid":!!l.pw}),e.jsx("button",{type:"button",className:"eye",onClick:()=>h(t=>!t),"aria-label":x?"Hide password":"Show password",title:x?"Hide":"Show",children:x?e.jsx(U,{}):e.jsx(q,{})})]}),l.pw&&e.jsx("span",{className:"hint",children:l.pw})]})]}),e.jsxs("div",{className:"mFoot",children:[e.jsx("button",{className:"closeBtn ghost",onClick:i,children:"Cancel"}),e.jsx(f.button,{className:"closeBtn",onClick:L,whileTap:{scale:.98},children:"Save"})]})]})}function q(r){return e.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18","aria-hidden":!0,focusable:"false",...r,children:e.jsx("path",{fill:"currentColor",d:"M12 5c5 0 9 4 10 7-1 3-5 7-10 7S3 15 2 12c1-3 5-7 10-7zm0 3.5A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 8.5z"})})}function U(r){return e.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18","aria-hidden":!0,focusable:"false",...r,children:e.jsx("path",{fill:"currentColor",d:"M2 3.3 3.3 2 22 20.7 20.7 22l-3.3-3.3A11.8 11.8 0 0 1 12 19c-5 0-9-4-10-7 0 0 2-4.6 6.5-6.5L2 3.3zM12 7a5 5 0 0 1 5 5 4.9 4.9 0 0 1-.4 2l-6.6-6.6A4.9 4.9 0 0 1 12 7z"})})}export{G as default};
