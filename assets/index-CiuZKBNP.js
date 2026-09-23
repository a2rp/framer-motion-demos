import{d as i,r as t,j as r}from"./index-D8yAWZ_T.js";import{u as b}from"./use-reduced-motion-BJRUk5Wx.js";import{u as j}from"./use-animation-BuKN9KEq.js";import{M as y,m as w}from"./proxy-DfzdIqFN.js";const o={Wrapper:i.div`
        display: grid;
        gap: var(--space-6);
        padding: var(--space-6);
        max-width: 720px;
        margin: 0 auto;
        color: var(--text);
    `,Header:i.header`
        .heading h1 {
            font-size: 24px;
            line-height: 1.2;
        }
        .heading .muted {
            color: var(--text-muted);
            margin-top: 6px;
        }
    `,Stage:i.section`
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        padding: var(--space-6);

        form {
            display: grid;
            gap: var(--space-4);
        }

        .field {
            display: grid;
            gap: 8px;
            padding: var(--space-4);
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            background: var(--surface);
            /* animation will temporarily add a focus ring/box-shadow */
            will-change: transform, box-shadow;
        }

        label {
            font-size: 13px;
            color: var(--text-muted);
        }

        input {
            height: 38px;
            padding: 0 12px;
            color: var(--text);
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-sm);
            outline: none;
        }
        input:focus {
            box-shadow: var(--focus-ring);
            border-color: var(--primary);
        }

        .hint {
            font-size: 12px;
            color: var(--text-muted);
        }

        .actions {
            display: flex;
            gap: var(--space-4);
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
            justify-content: center;
        }
        .btn.primary {
            background: var(--primary);
            color: var(--primary-contrast);
            border-color: transparent;
        }
        .btn.ghost {
            background: var(--surface);
        }

        .messages {
            min-height: 24px;
        }
        .error {
            margin-top: 4px;
            color: hsl(0 85% 60%);
            font-weight: 600;
        }
        .ok {
            margin-top: 4px;
            color: hsl(150 60% 45%);
            font-weight: 600;
        }
    `,Notes:i.aside`
        color: var(--text-muted);
        h3 {
            color: var(--text);
            margin-bottom: 6px;
        }
        ul {
            padding-left: 18px;
        }
    `},k=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;function C(){const h=b(),s=j(),n=t.useRef(null),[p,m]=t.useState(""),[a,d]=t.useState(""),[x,l]=t.useState(!1),v=async()=>{var e;if(h){await s.start({boxShadow:["0 0 0 0px transparent","0 0 0 3px hsl(0 85% 55% / .5)","0 0 0 0px transparent"],transition:{duration:.6,times:[0,.35,1]}});return}await s.start({x:[0,-10,10,-8,8,-4,4,0],transition:{duration:.55,ease:"easeInOut"}});try{(e=navigator.vibrate)==null||e.call(navigator,40)}catch{}},g=e=>e.trim()?k.test(e)?"":"Enter a valid email (name@example.com).":"Email is required.",f=async e=>{var u;e.preventDefault();const c=g(p);d(c),l(!c),c&&((u=n.current)==null||u.focus(),await v())};return r.jsx(y,{reducedMotion:"never",children:r.jsxs(o.Wrapper,{children:[r.jsx(o.Header,{children:r.jsxs("div",{className:"heading",children:[r.jsx("h1",{children:"Error Shake"}),r.jsx("p",{className:"muted",children:"A tiny, useful micro-interaction for invalid fields. Reduced-motion users get a color flash instead."})]})}),r.jsx(o.Stage,{children:r.jsxs("form",{onSubmit:f,noValidate:!0,children:[r.jsxs(w.div,{className:"field",animate:s,children:[r.jsx("label",{htmlFor:"email",children:"Email"}),r.jsx("input",{id:"email",ref:n,type:"email",autoComplete:"email",value:p,onChange:e=>{m(e.target.value),a&&d(""),l(!1)},"aria-invalid":a?"true":"false","aria-describedby":"email-help email-error",placeholder:"name@example.com"}),r.jsx("div",{id:"email-help",className:"hint",children:"We’ll never share your email."})]}),r.jsxs("div",{className:"actions",children:[r.jsx("button",{className:"btn primary",type:"submit",children:"Submit"}),r.jsx("button",{className:"btn ghost",type:"button",onClick:()=>{var e;m(""),d(""),l(!1),(e=n.current)==null||e.focus()},children:"Reset"})]}),r.jsxs("div",{className:"messages","aria-live":"polite",children:[a&&r.jsx("div",{id:"email-error",className:"error",children:a}),x&&!a&&r.jsx("div",{className:"ok",children:"Looks good. Form ready to submit."})]})]})}),r.jsxs(o.Notes,{children:[r.jsx("h3",{children:"Usage"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Call the shake on validation failure for any field or row."}),r.jsx("li",{children:"Keep the distance tiny (≤10px) so it feels crisp, not cartoonish."}),r.jsx("li",{children:"Always pair motion with text and color for accessibility."})]})]})]})})}export{C as default};
