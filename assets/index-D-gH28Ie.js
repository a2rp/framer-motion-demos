import{d as o,j as e,F as b,a as u,M as g,T as d,b as v,c as f,e as w,f as k}from"./index-D8yAWZ_T.js";const y="1080px",F={Wrapper:o.div`
        padding: var(--space-6);
        max-width: ${y};
        margin: 0 auto;
        color: var(--text);

        h1 {
            margin-bottom: 30px;
        }

        fieldset {
            padding: var(--space-4);
            margin: 50px 0;
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            background: var(--card);
            box-shadow: var(--shadow-sm);

            legend {
                padding: 0 var(--space-4);
                font-size: 16px;
                color: var(--primary);
                background: var(--card);
                border-radius: var(--radius-sm);
            }

            .para {
                display: block;
                margin-bottom: var(--space-4);
                max-width: 900px;
                color: var(--text);

                .heading {
                    margin-bottom: var(--space-4);
                }

                p {
                    margin-bottom: var(--space-4);
                    color: var(--text);
                }

                .section {
                    margin-bottom: var(--space-4);

                    ul {
                        margin-left: 30px;
                        color: var(--text);
                    }

                    h3 {
                        color: var(--text);
                        a {
                            color: var(--text);
                            text-decoration: none;
                            &:hover {
                                text-decoration: underline;
                            }
                            &:focus-visible {
                                outline: var(--focus-ring);
                                border-radius: var(--radius-sm);
                            }
                        }
                    }
                }
            }
        }
    `},r=o.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    border-bottom: 1px solid var(--border);
    transition: background 160ms ease;

    &:hover {
        background-color: var(--surface);
    }
`,s=o.div`
    flex: 0 0 80px;
    white-space: nowrap;
    color: var(--text-muted);
`,i=o.div`
    display: flex;
    align-items: center;
    gap: 15px;
    color: var(--text);

    a {
        color: var(--text);
        overflow-wrap: anywhere;
        word-break: break-word;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
        &:focus-visible {
            outline: var(--focus-ring);
            border-radius: var(--radius-sm);
        }
    }

    .icon {
        width: 50px;
        height: 50px;
        display: grid;
        place-items: center;
        color: var(--text-muted);
    }
`,N=({width:t=24,height:a=24})=>e.jsxs("svg",{width:t,height:a,viewBox:"0 0 3 2",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M0,0 H3 V2 H0 Z",fill:"#f93"}),e.jsx("path",{d:"M0,0.667 H3 V1.333 H0 Z",fill:"#fff"}),e.jsx("path",{d:"M0,1.333 H3 V2 H0 Z",fill:"#128807"}),e.jsx("circle",{cx:"1.5",cy:"1",r:"0.2",fill:"#008"})]}),H=()=>{function t(h){try{const x=new Date(h),j=new Intl.DateTimeFormat("en-US",{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"Asia/Kolkata"}).formatToParts(x),n=m=>{var l;return((l=j.find(p=>p.type===m))==null?void 0:l.value)||""};return`${n("month")} ${n("day")}, ${n("year")} ${n("hour")}:${n("minute")}:${n("second")} hrs`}catch{return"-"}}const a="2026-09-21T22:07:18+05:30",c=t(a);return e.jsx(e.Fragment,{children:e.jsxs(F.Wrapper,{children:[e.jsxs("h3",{children:["Framer Motion Demos - last updated: ",e.jsx("time",{dateTime:a,children:c})]}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"About Project"}),e.jsxs("div",{className:"para",children:[e.jsxs("div",{className:"section",children:[e.jsx("b",{children:"Framer Motion Demos"})," is a route-wise gallery of unique animation patterns for real apps. Each route focuses on a single idea (page transitions, gestures, lists, tables, modals, charts, and more) using ",e.jsx("b",{children:"Framer Motion"})," with a clean React (Vite) setup and ",e.jsx("b",{children:"styled-components"})," theming."]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"What’s inside"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Page transitions:"})," Curtain reveal, book-flip, slide-over stack, hero teleport, split transition, blur-to-sharp"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Entrances & layout:"})," Staggered rise, drop-in bounce, FLIP reflow, grid→detail, masonry shuffle"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Gestures:"})," Drag-to-dismiss, swipe-to-archive, magnetic button, long-press progress ring"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Feedback:"})," Spinner→check morph, error shake, press ripple, offline banner slide-down"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Overlays:"})," Frosted modal, bottom sheet rubber-band, context menu morph, spotlight overlay"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Nav & tabs:"})," Underline glide (shared ",e.jsx("code",{children:"layoutId"}),"), sticky shrink headers, command palette"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Forms:"})," Focus glow, invalid micro-shake, autocomplete spring-expand, submit morph"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Charts & media:"})," Bar grow, line draw-on, pie pop-out, skeletons→data, lightbox zoom"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Scroll:"})," Reveal-on-scroll, reading progress bar, scrollytelling steps, back-to-top FAB"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Enterprise:"})," Row expand preview, inline edit morph, bulk-select toolbar, paged table transition"]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"How to use"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Pick a demo from the left sidebar (Ctrl/Cmd + K to search)."}),e.jsx("li",{children:"Each demo is self-contained and production-oriented-copy the core variant/block into your app."}),e.jsxs("li",{children:["Animations respect ",e.jsx("b",{children:"prefers-reduced-motion"}),"; keep motion subtle for dense screens."]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"Tech notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"AnimatePresence"})," for enter/exit with stable ",e.jsx("code",{children:"key"})," and ",e.jsx("code",{children:'mode="wait"'})," for route transitions."]}),e.jsxs("li",{children:[e.jsx("b",{children:"layout"})," / ",e.jsx("b",{children:"layoutId"})," for FLIP reflow and shared element transitions."]}),e.jsxs("li",{children:["Only animate transforms/opacity for smoothness; height/width via ",e.jsx("code",{children:"layout"})," where needed."]}),e.jsx("li",{children:"Vite + React Router + styled-components; GH Pages friendly."})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"Contribute / Feedback"}),"Star the repo, open issues, or suggest a pattern you want covered next."]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{children:["Live: ",e.jsx("a",{href:"https://a2rp.github.io/framer-motion-demos/",target:"_blank",rel:"noopener noreferrer",children:"a2rp.github.io/framer-motion-demos"})]}),e.jsxs("h3",{children:["Code: ",e.jsx("a",{href:"https://github.com/a2rp/framer-motion-demos",target:"_blank",rel:"noopener noreferrer",children:"github.com/a2rp/framer-motion-demos"})]})]})]})]}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"About Developer"}),e.jsxs("div",{className:"aboutDeveloper",children:[e.jsxs(r,{children:[e.jsx(s,{children:"Name"}),e.jsxs(i,{children:["Ashish Ranjan",e.jsx("div",{className:"icon",children:e.jsx(b,{size:20})})]})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Phone"}),e.jsxs(i,{children:[e.jsx("a",{href:"tel:+918123747965",children:"+91 8123747965"}),e.jsx("div",{className:"icon",children:e.jsx(u,{size:20})})]})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Email"}),e.jsxs(i,{children:[e.jsx("a",{href:"mailto:ash.ranjan09@gmail.com",children:"ash.ranjan09@gmail.com"}),e.jsx("div",{className:"icon",children:e.jsx(g,{size:20})})]})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Nationality"}),e.jsxs(i,{children:["The Republic of India",e.jsx("div",{className:"icon",children:e.jsx(N,{})})]})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Website"}),e.jsxs(i,{children:[e.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"https://www.ashishranjan.net/"}),e.jsx("div",{className:"icon",children:e.jsx(d,{size:20})})]})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Old Website"}),e.jsxs(i,{children:[e.jsx("a",{href:"http://www.ashishranjan.in/",target:"_blank",rel:"noopener noreferrer",children:"http://www.ashishranjan.in/"}),e.jsx("div",{className:"icon",children:e.jsx(d,{size:20})})]})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Facebook"}),e.jsxs(i,{children:[e.jsx("a",{href:"https://www.facebook.com/theash.ashish/",target:"_blank",rel:"noopener noreferrer",children:"facebook.com/theash.ashish/"}),e.jsx("div",{className:"icon",children:e.jsx(v,{size:20})})]})]}),e.jsxs(r,{children:[e.jsx(s,{children:"LinkedIn"}),e.jsxs(i,{children:[e.jsx("a",{href:"https://www.linkedin.com/in/aashishranjan/",target:"_blank",rel:"noopener noreferrer",children:"linkedin.com/in/aashishranjan/"}),e.jsx("div",{className:"icon",children:e.jsx(f,{size:20})})]})]}),e.jsxs(r,{children:[e.jsx(s,{children:"YouTube"}),e.jsxs(i,{children:[e.jsx("a",{href:"https://www.youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ",target:"_blank",rel:"noopener noreferrer",children:"youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ"}),e.jsx("div",{className:"icon",children:e.jsx(w,{size:20})})]})]}),e.jsxs(r,{children:[e.jsx(s,{children:"GitHub"}),e.jsxs(i,{children:[e.jsx("a",{href:"https://github.com/a2rp",target:"_blank",rel:"noopener noreferrer",children:"github.com/a2rp"}),e.jsx("div",{className:"icon",children:e.jsx(k,{size:20})})]})]})]})]})]})})};export{H as default};
