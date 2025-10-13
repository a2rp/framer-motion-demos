import{d,r as i,j as e,A as k}from"./index-D8c9fCIL.js";import{m as K}from"./pages-CvVyMsYv.js";import{M as W,m as u}from"./proxy-Cy2a_Fiw.js";const z=d.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 980px;
    margin: 0 auto;
    color: var(--text);
`,H=d.header`
    display: flex;
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
    .btn {
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--primary);
        color: var(--primary-contrast);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
`,I=d.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-sm);
    padding: var(--space-6);
    ul {
        padding-left: 18px;
        color: var(--text-muted);
    }
`,O=d.header`
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: var(--space-4);
    .titleArea h2 {
        font-size: 20px;
    }
    .titleArea .muted {
        color: var(--text-muted);
        margin-top: 4px;
    }
    .iconBtn {
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        height: 36px;
        width: 36px;
        border-radius: var(--radius-md);
        display: grid;
        place-items: center;
        cursor: pointer;
    }
`,F=d.div`
    position: relative;
    padding-top: var(--space-4);
    .bar {
        height: 4px;
        background: var(--primary);
        transform-origin: left center;
        border-radius: 999px;
        box-shadow: 0 1px 0 hsl(0 0% 0% / 0.1) inset;
    }
    .dots {
        display: flex;
        gap: 6px;
        margin-top: 10px;
        justify-content: center;
    }
    .dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: var(--border);
    }
    .dot.active {
        background: var(--primary);
    }
`,L=d.section`
    margin-top: var(--space-4);
    .viewport {
        position: relative;
        min-height: 160px;
    }
    .step {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        padding: var(--space-4);
    }
    .form {
        display: grid;
        gap: var(--space-4);
    }
    .field {
        display: grid;
        gap: 6px;
    }
    .field span {
        font-size: 12px;
        color: var(--text-muted);
    }
    .field input {
        height: 36px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        padding: 0 10px;
        outline: none;
    }
    .review ul {
        padding-left: 18px;
    }
`,q=d.footer`
    margin-top: var(--space-6);
    display: grid;
    row-gap: var(--space-3);

    /* Buttons row */
    .actions {
        display: flex;
        align-items: center;
        gap: var(--space-4);
    }
    .spacer {
        flex: 1;
    }

    .btn {
        height: 36px;
        padding: 0 14px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
    }
    .btn.primary {
        background: var(--primary);
        color: var(--primary-contrast);
        border-color: transparent;
    }
    .btn.success {
        background: hsl(150 60% 40%);
        color: white;
        border-color: transparent;
        position: absolute;
        width: 100px;
        margin: auto;
        top: calc(100% - 50px);
        left: calc(100% - 120px);
    }
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    /* Success banner (now above the buttons) */
    .success {
        display: flex;
        align-items: center;
        gap: 8px;
        background: hsl(150 60% 38% / 0.15);
        border: 1px solid hsl(150 60% 38% / 0.35);
        color: hsl(150 60% 28%);
        border-radius: var(--radius-md);
        padding: 8px 10px;
    }
    .success .tick {
        width: 18px;
        height: 18px;
        display: inline-grid;
        place-items: center;
        background: hsl(150 60% 38%);
        color: white;
        border-radius: 4px;
        font-weight: 700;
    }
`;d.div``;d.div``;const p={Wrapper:z,Header:H,Placeholder:I,ModalHead:O,Progress:F,StepArea:L,Footer:q},y=typeof document<"u"?document.createElement("style"):null;y&&!y.dataset.msmInjected&&(y.dataset.msmInjected="true",y.textContent=`
  .modalRoot {
    position: fixed; inset: 0; z-index: 9999;
    display: grid; place-items: center;
  }
  .modalRoot .backdrop {
    position: absolute; inset: 0; border: 0; padding: 0; margin: 0;
    background: hsl(220 15% 10% / 0.4); backdrop-filter: blur(6px); cursor: pointer;
  }
  .modalRoot .panel {
    position: relative; width: min(720px, calc(100vw - 32px));
    background: var(--card); color: var(--text);
    border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
    padding: 18px 18px 20px;
  }
  .modalRoot .focusAnchor { outline: none; }
  .modalRoot .success {
    position: absolute; top: 8px; left: 8px; right: 8px;
    display: flex; align-items: center; gap: 8px;
    background: hsl(150 60% 38% / 0.15);
    border: 1px solid hsl(150 60% 38% / 0.35);
    color: hsl(150 60% 30%);
    border-radius: var(--radius-md);
    padding: 8px 10px;
  }
  .modalRoot .success .tick {
    width: 18px; height: 18px; display: inline-grid; place-items: center;
    background: hsl(150 60% 38%); color: white; border-radius: 4px; font-weight: 700;
  }
  `,document.head.appendChild(y));const U=[{key:"s1",title:"Basics",body:"Tell us a little about yourself. This is a quick, low-friction intro.",fields:[{key:"name",label:"Full name",placeholder:"Jane Doe"},{key:"email",label:"Email",placeholder:"jane@acme.com"}]},{key:"s2",title:"Details",body:"What are you exploring today? Pick options that match your vibe.",fields:[{key:"role",label:"Role",placeholder:"Student / Developer / Designer"},{key:"topic",label:"Topic of interest",placeholder:"Animations, UX motion..."}]},{key:"s3",title:"Preferences",body:"We’ll tune the experience to your preferences—nothing creepy.",fields:[{key:"theme",label:"Theme",placeholder:"System / Light / Dark"},{key:"updates",label:"Updates cadence",placeholder:"Weekly / Monthly"}]},{key:"s4",title:"Review",body:"Double-check your info. You can always tweak later.",fields:[]},{key:"s5",title:"Confirm",body:"Looks good? We’ll finalize and set things up.",fields:[]}],N=K(U,5),P=(o,n,r)=>Math.min(r,Math.max(n,o));function X({open:o,onClose:n,initialFocusRef:r,children:b,labelledBy:g}){i.useEffect(()=>{if(!o)return;const t=document.body.style.overflow;return document.body.style.overflow="hidden",()=>document.body.style.overflow=t},[o]);const x=i.useRef(null);i.useEffect(()=>{var c;if(!o)return;x.current=document.activeElement;const t=r==null?void 0:r.current;return(c=t==null?void 0:t.focus)==null||c.call(t),()=>{var h,s;x.current&&((s=(h=x.current).focus)==null||s.call(h))}},[o,r]);const v=t=>{if(t.key==="Escape"){t.stopPropagation(),n==null||n();return}if(t.key==="Tab"){const h=t.currentTarget.querySelectorAll('a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])'),s=Array.from(h).filter(j=>!j.hasAttribute("disabled"));if(!s.length)return;const l=s[0],f=s[s.length-1];t.shiftKey&&document.activeElement===l?(t.preventDefault(),f.focus()):!t.shiftKey&&document.activeElement===f&&(t.preventDefault(),l.focus())}};return e.jsx(k,{children:o&&e.jsxs(u.div,{className:"modalRoot",role:"dialog","aria-modal":"true","aria-labelledby":g,onKeyDown:v,initial:!1,children:[e.jsx(u.button,{className:"backdrop",onClick:n,"aria-label":"Close modal",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}}),e.jsxs(u.div,{className:"panel",initial:{opacity:0,y:12,scale:.98},animate:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:320,damping:30}},exit:{opacity:0,y:12,scale:.98,transition:{duration:.18}},children:[e.jsx("div",{tabIndex:-1,ref:r,className:"focusAnchor"}),b]})]})})}function $(){var D;const[o,n]=i.useState(!1),[r,b]=i.useState(0),[g,x]=i.useState(1),[v,t]=i.useState(!1),[c,h]=i.useState({}),s=N[r],l=N.length,f=i.useRef(null),j=r>0,S=r<l-1,C=i.useMemo(()=>(r+1)/l,[r,l]),E=()=>{j&&(x(-1),b(a=>P(a-1,0,l-1)))},A=()=>{S&&(x(1),b(a=>P(a+1,0,l-1)))},T=a=>m=>h(B=>({...B,[a]:m.target.value})),w=()=>{n(!1),setTimeout(()=>{b(0),t(!1)},220)},M=()=>{t(!0),setTimeout(()=>w(),800)},R=a=>{a.key==="Enter"&&!a.shiftKey&&(a.preventDefault(),S?A():M()),a.key==="Enter"&&a.shiftKey&&(a.preventDefault(),E())};return e.jsx(W,{reducedMotion:"never",children:e.jsxs(p.Wrapper,{children:[e.jsxs(p.Header,{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Multi-Step Modal"}),e.jsx("p",{className:"muted",children:"Slide between steps with springs, animated progress bar, ESC/overlay close, focus-trap, and a tidy success."})]}),e.jsx("button",{className:"btn primary",onClick:()=>n(!0),children:"Open modal"})]}),e.jsxs(p.Placeholder,{children:[e.jsx("p",{children:"This page demonstrates a self-made modal—no external dialog libs."}),e.jsxs("ul",{children:[e.jsx("li",{children:"At least five steps (auto-padded)."}),e.jsx("li",{children:"Framer Motion on backdrop, panel, progress, and step transitions."}),e.jsx("li",{children:"Accessibility: ESC to close, overlay click, focus trap, labelled header."})]})]}),e.jsxs(X,{open:o,onClose:w,initialFocusRef:f,labelledBy:"msm-title",children:[e.jsxs(p.ModalHead,{children:[e.jsxs("div",{className:"titleArea",children:[e.jsx("h2",{id:"msm-title",children:s.title}),e.jsx("p",{className:"muted",children:s.body})]}),e.jsx("button",{className:"iconBtn",onClick:w,"aria-label":"Close",children:e.jsx("span",{"aria-hidden":!0,children:"✕"})})]}),e.jsxs(p.Progress,{children:[e.jsx(u.div,{className:"bar",style:{scaleX:C}}),e.jsx("div",{className:"dots","aria-hidden":!0,children:N.map((a,m)=>e.jsx("span",{className:`dot ${m<=r?"active":""}`},m))})]}),e.jsx(p.StepArea,{onKeyDown:R,children:e.jsx("div",{className:"viewport",children:e.jsx(k,{mode:"wait",initial:!1,children:e.jsx(u.div,{className:"step",initial:{x:g>0?20:-20,opacity:0},animate:{x:0,opacity:1,transition:{type:"spring",stiffness:300,damping:28}},exit:{x:g>0?-16:16,opacity:0,transition:{duration:.18}},children:(D=s.fields)!=null&&D.length?e.jsx("div",{className:"form",children:s.fields.map(a=>e.jsxs("label",{className:"field",children:[e.jsx("span",{children:a.label}),e.jsx("input",{type:"text",value:c[a.key]||"",onChange:T(a.key),placeholder:a.placeholder})]},a.key))}):e.jsx("div",{className:"review",children:e.jsx("ul",{children:Object.entries(c).length?Object.entries(c).map(([a,m])=>e.jsxs("li",{children:[e.jsxs("b",{children:[a,":"]})," ",m||"—"]},a)):e.jsx("li",{children:"No data yet—previous steps were optional."})})})},s.id)})})}),e.jsxs(p.Footer,{children:[e.jsx(k,{children:v&&e.jsxs(u.div,{className:"success",initial:{y:8,opacity:0},animate:{y:0,opacity:1},exit:{y:8,opacity:0},transition:{duration:.35,ease:[.22,1,.36,1]},role:"status","aria-live":"polite",children:[e.jsx("span",{className:"tick",children:"✓"})," Saved — closing…"]})}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btn ghost",onClick:E,disabled:!j,children:"← Back"}),e.jsx("div",{className:"spacer"}),r<l-1?e.jsx("button",{className:"btn primary",onClick:A,children:"Next →"}):e.jsx("button",{className:"btn success",onClick:M,children:"Finish ✓"})]})]}),e.jsx(k,{children:v&&e.jsxs(u.div,{className:"success",initial:{y:-8,opacity:0},animate:{y:0,opacity:1},exit:{y:-8,opacity:0},transition:{duration:.35,ease:[.22,1,.36,1]},"aria-live":"polite",children:[e.jsx("span",{className:"tick",children:"✓"})," Saved — closing…"]})})]})]})})}export{$ as default};
