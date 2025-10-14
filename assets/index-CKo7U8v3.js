import{d as b,r as c,j as e,A as N}from"./index-GOg7KvvH.js";import{M as L,m as u}from"./proxy-DRUkQ78w.js";const O=b.div`
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
`,W=b.div`
    display: grid;
    gap: var(--space-6);
    padding: var(--space-6);
    max-width: 880px;
    margin: 0 auto;
    color: var(--text);
`,H=b.header`
    .heading h1 {
        font-size: 24px;
        line-height: 1.2;
    }
    .heading .muted {
        color: var(--text-muted);
        margin-top: 6px;
    }
`,q=b.div`
    display: grid;
    gap: var(--space-4);

    .bar {
        height: 8px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        overflow: hidden;
        box-shadow: inset 0 1px 2px hsl(0 0% 0% / 0.06);
    }
    .fill {
        height: 100%;
        background: linear-gradient(90deg, hsl(210 90% 56%), hsl(210 90% 62%));
    }

    .dots {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-3);
        padding: 0;
        margin: 0;
        text-align: center;
    }
    .dots li {
        display: grid;
        justify-items: center;
        gap: 6px;
    }
    .dot {
        position: relative;
        width: 28px;
        height: 28px;
        border-radius: 999px;
        background: var(--card);
        border: 1px solid var(--border);
        display: grid;
        place-items: center;
        box-shadow: var(--shadow-sm);
    }
    .dots li.done .dot {
        border-color: hsl(210 90% 56%);
        background: color-mix(in oklab, var(--card) 80%, hsl(210 90% 56%));
    }
    .halo {
        position: absolute;
        inset: -6px;
        border-radius: 999px;
        box-shadow: 0 0 0 3px hsl(210 90% 56% / 0.3);
        pointer-events: none;
    }
    .idx {
        font-size: 12px;
        color: var(--text);
    }
    .label {
        font-size: 12px;
        color: var(--text-muted);
    }
`,D=b.section`
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--card);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    padding: var(--space-6);

    form {
        display: grid;
        gap: var(--space-6);
    }

    .panel {
        display: grid;
        gap: var(--space-6);
    }

    fieldset {
        border: 1px dashed var(--border);
        border-radius: var(--radius-md);
        padding: var(--space-4);
    }
    legend {
        padding: 0 8px;
        color: var(--text-muted);
        font-size: 12px;
    }

    .grid2 {
        display: grid;
        gap: var(--space-4);
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .grid2 > *[wide] {
        grid-column: 1 / -1;
    }

    .review .summary {
        margin-left: 18px;
        display: grid;
        gap: 6px;
    }
    .muted {
        color: var(--text-muted);
    }
`,Y=b.div`
    display: grid;
    gap: 8px;

    label {
        font-size: 13px;
        color: var(--text);
    }

    input[type="text"],
    input[type="email"],
    input[type="password"],
    input[type="url"],
    textarea,
    select {
        height: 38px;
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 12px;
        outline: none;
        box-shadow: var(--shadow-sm);
        transition: box-shadow 0.2s ease, border-color 0.2s ease,
            background 0.2s ease;
    }
    textarea {
        height: auto;
        padding: 10px 12px;
        resize: vertical;
        min-height: 90px;
    }

    input:focus,
    textarea:focus,
    select:focus {
        border-color: hsl(210 90% 56%);
        box-shadow: var(--shadow-sm), 0 0 0 3px hsl(210 90% 56% / 0.28);
    }

    .err {
        color: hsl(0 80% 60%);
        font-size: 12px;
    }

    &.invalid input,
    &.invalid textarea,
    &.invalid select {
        border-color: hsl(0 80% 60%);
        box-shadow: var(--shadow-sm), 0 0 0 2px hsl(0 80% 60% / 0.25);
    }

    /* radios / checkboxes */
    .row {
        display: flex;
        gap: 14px;
        align-items: center;
        flex-wrap: wrap;
    }
    .radio {
        display: inline-flex;
        gap: 8px;
        align-items: center;
    }
    .radio input {
        width: 16px;
        height: 16px;
    }
    .check {
        display: inline-flex;
        gap: 8px;
        align-items: center;
    }

    /* password eye */
    &.pw .pwWrap {
        position: relative;
    }
    &.pw .eye {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        width: 32px;
        height: 28px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--card);
        cursor: pointer;
        color: var(--text);
    }
`,$=b.div`
    display: flex;
    justify-content: flex-end;
    gap: var(--space-4);

    .btn {
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        padding: 0 16px;
        height: 38px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
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
`,n={Wrapper:W,Header:H,Stepper:q,Stage:D,Field:Y,Actions:$,ModalOverlay:O},I=/^[^\s@]+@[^\s@]+\.[^\s@]+$/i,K=/^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/.*)?$/i;function j(s,d){const o={};if(s===0){(!d.name||d.name.trim().length<2)&&(o.name="Name must be at least 2 characters."),I.test(d.email||"")||(o.email="Enter a valid email.");const h=d.password||"";h.length<8&&(o.password="Password must be at least 8 characters."),/[A-Z]/.test(h)||(o.password=(o.password||"")+" Include an uppercase letter."),/[0-9]/.test(h)||(o.password=(o.password||"")+" Include a number.")}return s===1&&(d.role||(o.role="Pick a role."),d.website&&!K.test(d.website)&&(o.website="Enter a valid URL (https://...)."),(!d.bio||d.bio.trim().length<10)&&(o.bio="Bio must be at least 10 characters.")),s===2&&(d.theme||(o.theme="Choose a theme.")),o}function V(s){return{...j(0,s),...j(1,s),...j(2,s)}}const v=[{key:"account",title:"Account",desc:"Basics to get you started."},{key:"profile",title:"Profile",desc:"Tell us about yourself."},{key:"prefs",title:"Preferences",desc:"Make it yours."},{key:"review",title:"Review",desc:"Confirm and submit."}],Z={enter:s=>({x:s>0?56:-56,opacity:.85,scale:.995}),center:{x:0,opacity:1,scale:1,transition:{type:"spring",stiffness:360,damping:32,mass:.9}},exit:s=>({x:s>0?-56:56,opacity:.85,scale:.995,transition:{duration:.18}})};function J(){const[s,d]=c.useState(0),[o,h]=c.useState(1),[f,E]=c.useState(!1),[z,k]=c.useState(!1),[t,S]=c.useState({}),y=c.useRef(null),[i,A]=c.useState({name:"",email:"",password:"",role:"",website:"",bio:"",theme:"system",newsletter:!0}),r=c.useMemo(()=>j(s,i),[s,i]),w=c.useMemo(()=>Object.keys(r).length===0,[r]),M=s/(v.length-1)*100,m=a=>{const{name:l,value:p,type:g,checked:R}=a.target;A(T=>({...T,[l]:g==="checkbox"?!!R:p}))},x=a=>S(l=>({...l,[a]:!0})),F=()=>{if(!w){B();return}h(1),d(a=>Math.min(a+1,v.length-1))},C=()=>{h(-1),d(a=>Math.max(a-1,0))},P=a=>{a.preventDefault();const l=V(i);if(Object.keys(l).length){S(Object.fromEntries(Object.keys(l).map(g=>[g,!0])));const p=[0,1,2].find(g=>Object.keys(j(g,i)).length)??0;d(p),h(-1),B();return}k(!0)};function B(){const a=y.current;if(!a)return;const l=a.querySelector("[data-error='true']");l&&l.focus()}return c.useEffect(()=>{const a=p=>{p.key==="Enter"&&(p.ctrlKey||p.metaKey)||p.key==="Enter"&&w&&s<v.length-1&&(p.preventDefault(),F())},l=y.current;return l==null||l.addEventListener("keydown",a),()=>l==null?void 0:l.removeEventListener("keydown",a)},[w,s]),e.jsx(L,{reducedMotion:"never",children:e.jsxs(n.Wrapper,{children:[e.jsx(n.Header,{children:e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Stepper Progress Bar"}),e.jsx("p",{className:"muted",children:"Multi-step form with animated progress and validations."})]})}),e.jsxs(n.Stepper,{children:[e.jsx("div",{className:"bar",children:e.jsx(u.div,{className:"fill",initial:!1,animate:{width:`${M}%`},transition:{duration:.5,ease:[.22,1,.36,1]}})}),e.jsx("ul",{className:"dots",children:v.map((a,l)=>e.jsxs("li",{className:l<=s?"done":"",children:[e.jsxs("div",{className:"dot",children:[e.jsx("span",{className:"idx",children:l+1}),e.jsx(N,{children:l===s&&e.jsx(u.span,{className:"halo",layoutId:"active-dot",initial:{scale:.9,opacity:.25},animate:{scale:1,opacity:.5},exit:{opacity:0},transition:{duration:.28}})})]}),e.jsx("span",{className:"label",children:a.title})]},a.key))})]}),e.jsx(n.Stage,{children:e.jsxs("form",{ref:y,onSubmit:P,noValidate:!0,children:[e.jsx(N,{initial:!1,custom:o,mode:"popLayout",children:e.jsxs(u.div,{className:"panel",variants:Z,custom:o,initial:"enter",animate:"center",exit:"exit",children:[s===0&&e.jsxs("fieldset",{className:"grid2",children:[e.jsx("legend",{children:"Account"}),e.jsxs(n.Field,{className:t.name&&r.name?"invalid":"",children:[e.jsx("label",{htmlFor:"name",children:"Full name"}),e.jsx("input",{id:"name",name:"name",type:"text",autoComplete:"name",value:i.name,onChange:m,onBlur:()=>x("name"),"data-error":t.name&&!!r.name,placeholder:"Ada Lovelace",required:!0}),t.name&&r.name&&e.jsx("span",{className:"err",children:r.name})]}),e.jsxs(n.Field,{className:t.email&&r.email?"invalid":"",children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",value:i.email,onChange:m,onBlur:()=>x("email"),"data-error":t.email&&!!r.email,placeholder:"ada@analytical.engine",required:!0}),t.email&&r.email&&e.jsx("span",{className:"err",children:r.email})]}),e.jsxs(n.Field,{className:`pw ${t.password&&r.password?"invalid":""}`,children:[e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsxs("div",{className:"pwWrap",children:[e.jsx("input",{id:"password",name:"password",type:f?"text":"password",autoComplete:"new-password",value:i.password,onChange:m,onBlur:()=>x("password"),"data-error":t.password&&!!r.password,placeholder:"At least 8 chars, A-Z & 0-9",required:!0}),e.jsx("button",{type:"button",className:"eye","aria-label":f?"Hide password":"Show password",onClick:()=>E(a=>!a),children:f?e.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18","aria-hidden":!0,children:e.jsx("path",{fill:"currentColor",d:"M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12a5 5 0 110-10 5 5 0 010 10zm0-2.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"})}):e.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18","aria-hidden":!0,children:e.jsx("path",{fill:"currentColor",d:"M3.27 2L2 3.27 5.11 6.4C3.11 8 2 12 2 12s3 7 10 7c2.23 0 4.08-.62 5.59-1.52l3.14 3.14 1.27-1.27L3.27 2zM12 17c-4.97 0-7.74-4.02-8.73-5.82A14.24 14.24 0 017.4 7.4l1.46 1.46A5 5 0 0012 17zm0-10c4.97 0 7.74 4.02 8.73 5.82-.33.61-1.02 1.73-2.17 2.86l-1.45-1.45A5 5 0 0010.27 7.1L8.82 5.65A13.7 13.7 0 0112 7z"})})})]}),t.password&&r.password&&e.jsx("span",{className:"err",children:r.password})]})]}),s===1&&e.jsxs("fieldset",{className:"grid2",children:[e.jsx("legend",{children:"Profile"}),e.jsxs(n.Field,{className:t.role&&r.role?"invalid":"",children:[e.jsx("label",{children:"Role"}),e.jsx("div",{className:"row",children:["Student","Teacher","Manager"].map(a=>e.jsxs("label",{className:"radio",children:[e.jsx("input",{type:"radio",name:"role",value:a,checked:i.role===a,onChange:m,onBlur:()=>x("role"),"data-error":t.role&&!!r.role}),e.jsx("span",{children:a})]},a))}),t.role&&r.role&&e.jsx("span",{className:"err",children:r.role})]}),e.jsxs(n.Field,{className:t.website&&r.website?"invalid":"",children:[e.jsx("label",{htmlFor:"website",children:"Website (optional)"}),e.jsx("input",{id:"website",name:"website",type:"url",inputMode:"url",value:i.website,onChange:m,onBlur:()=>x("website"),"data-error":t.website&&!!r.website,placeholder:"https://example.com"}),t.website&&r.website&&e.jsx("span",{className:"err",children:r.website})]}),e.jsxs(n.Field,{className:t.bio&&r.bio?"invalid":"",wide:!0,children:[e.jsx("label",{htmlFor:"bio",children:"Bio"}),e.jsx("textarea",{id:"bio",name:"bio",rows:4,value:i.bio,onChange:m,onBlur:()=>x("bio"),"data-error":t.bio&&!!r.bio,placeholder:"A line about your work, interests, or goals…"}),t.bio&&r.bio&&e.jsx("span",{className:"err",children:r.bio})]})]}),s===2&&e.jsxs("fieldset",{className:"grid2",children:[e.jsx("legend",{children:"Preferences"}),e.jsxs(n.Field,{className:t.theme&&r.theme?"invalid":"",children:[e.jsx("label",{htmlFor:"theme",children:"Theme"}),e.jsxs("select",{id:"theme",name:"theme",value:i.theme,onChange:m,onBlur:()=>x("theme"),"data-error":t.theme&&!!r.theme,required:!0,children:[e.jsx("option",{value:"system",children:"System"}),e.jsx("option",{value:"light",children:"Light"}),e.jsx("option",{value:"dark",children:"Dark"})]}),t.theme&&r.theme&&e.jsx("span",{className:"err",children:r.theme})]}),e.jsx(n.Field,{children:e.jsxs("label",{className:"check",children:[e.jsx("input",{type:"checkbox",name:"newsletter",checked:!!i.newsletter,onChange:m}),e.jsx("span",{children:"Subscribe to newsletter"})]})})]}),s===3&&e.jsxs("fieldset",{className:"review",children:[e.jsx("legend",{children:"Review"}),e.jsxs("ul",{className:"summary",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Name:"})," ",i.name||"—"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Email:"})," ",i.email||"—"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Role:"})," ",i.role||"—"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Website:"})," ",i.website||"—"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Theme:"})," ",i.theme]}),e.jsxs("li",{children:[e.jsx("b",{children:"Newsletter:"})," ",i.newsletter?"Yes":"No"]})]}),e.jsx("p",{className:"muted",children:"Submit when everything looks right."})]})]},s)}),e.jsxs(n.Actions,{children:[e.jsx("button",{type:"button",className:"btn ghost",onClick:C,disabled:s===0,children:"Back"}),s<v.length-1?e.jsx(u.button,{type:"button",className:"btn primary",onClick:F,disabled:!w,whileTap:{scale:.98},children:"Next"}):e.jsx(u.button,{type:"submit",className:"btn primary",whileTap:{scale:.98},children:"Submit"})]})]})}),e.jsx(N,{children:z&&e.jsx(n.ModalOverlay,{as:u.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(u.div,{className:"modal",initial:{y:12,scale:.98,opacity:0},animate:{y:0,scale:1,opacity:1,transition:{type:"spring",stiffness:360,damping:34}},exit:{y:8,scale:.98,opacity:0,transition:{duration:.18}},role:"dialog","aria-modal":"true","aria-labelledby":"m-title",children:[e.jsx("div",{className:"mHead",children:e.jsx("h3",{id:"m-title",children:"All set!"})}),e.jsxs("div",{className:"mBody",children:[e.jsx("p",{className:"muted",children:"Your details were validated successfully."}),e.jsxs("ul",{className:"details",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Name:"})," ",i.name]}),e.jsxs("li",{children:[e.jsx("b",{children:"Email:"})," ",i.email]}),e.jsxs("li",{children:[e.jsx("b",{children:"Role:"})," ",i.role]}),e.jsxs("li",{children:[e.jsx("b",{children:"Theme:"})," ",i.theme]}),e.jsxs("li",{children:[e.jsx("b",{children:"Newsletter:"})," ",i.newsletter?"Yes":"No"]})]})]}),e.jsx("div",{className:"mFoot",children:e.jsx("button",{className:"closeBtn",onClick:()=>k(!1),children:"Close"})})]})})})]})})}export{J as default};
