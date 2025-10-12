import React from 'react'
import { Col1, Col2, Row, Styled } from './styled'
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt, FaUser, FaYoutube } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import IndianFlag from '../../components/IndianFlag'
import { TbWorldWww } from 'react-icons/tb'

const Home = () => {
    function formatISTLabel(iso) {
        try {
            const d = new Date(iso);
            const parts = new Intl.DateTimeFormat("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
                timeZone: "Asia/Kolkata",
            }).formatToParts(d);

            const get = (t) => parts.find((p) => p.type === t)?.value || "";
            return `${get("month")} ${get("day")}, ${get("year")} ${get("hour")}:${get("minute")}:${get("second")} hrs`;
        } catch {
            return "-";
        }
    }

    // choose commit time, fall back to build time
    const LAST_ISO =
        (typeof __APP_COMMIT_ISO__ !== "undefined" && __APP_COMMIT_ISO__) ||
        (typeof __APP_BUILD_ISO__ !== "undefined" && __APP_BUILD_ISO__) ||
        null;

    const lastUpdatedLabel = LAST_ISO ? formatISTLabel(LAST_ISO) : "-";

    return (
        <>
            <Styled.Wrapper>
                <h3>Framer Motion Demos — last updated: <time dateTime={LAST_ISO || ""}>{lastUpdatedLabel}</time></h3>

                <fieldset>
                    <legend>About Project</legend>
                    <div className='para'>
                        <div className='section'>
                            <b>Framer Motion Demos</b> is a route-wise gallery of unique animation patterns for real apps.
                            Each route focuses on a single idea (page transitions, gestures, lists, tables, modals, charts, and more)
                            using <b>Framer Motion</b> with a clean React (Vite) setup and <b>styled-components</b> theming.
                        </div>

                        <div className='section'>
                            <h3>What’s inside</h3>
                            <ul>
                                <li><b>Page transitions:</b> Curtain reveal, book-flip, slide-over stack, hero teleport, split transition, blur-to-sharp</li>
                                <li><b>Entrances & layout:</b> Staggered rise, drop-in bounce, FLIP reflow, grid→detail, masonry shuffle</li>
                                <li><b>Gestures:</b> Drag-to-dismiss, swipe-to-archive, magnetic button, long-press progress ring</li>
                                <li><b>Feedback:</b> Spinner→check morph, error shake, press ripple, offline banner slide-down</li>
                                <li><b>Overlays:</b> Frosted modal, bottom sheet rubber-band, context menu morph, spotlight overlay</li>
                                <li><b>Nav & tabs:</b> Underline glide (shared <code>layoutId</code>), sticky shrink headers, command palette</li>
                                <li><b>Forms:</b> Focus glow, invalid micro-shake, autocomplete spring-expand, submit morph</li>
                                <li><b>Charts & media:</b> Bar grow, line draw-on, pie pop-out, skeletons→data, lightbox zoom</li>
                                <li><b>Scroll:</b> Reveal-on-scroll, reading progress bar, scrollytelling steps, back-to-top FAB</li>
                                <li><b>Enterprise:</b> Row expand preview, inline edit morph, bulk-select toolbar, paged table transition</li>
                            </ul>
                        </div>

                        <div className='section'>
                            <h3>How to use</h3>
                            <ul>
                                <li>Pick a demo from the left sidebar (Ctrl/Cmd + K to search).</li>
                                <li>Each demo is self-contained and production-oriented—copy the core variant/block into your app.</li>
                                <li>Animations respect <b>prefers-reduced-motion</b>; keep motion subtle for dense screens.</li>
                            </ul>
                        </div>

                        <div className='section'>
                            <h3>Tech notes</h3>
                            <ul>
                                <li><b>AnimatePresence</b> for enter/exit with stable <code>key</code> and <code>mode="wait"</code> for route transitions.</li>
                                <li><b>layout</b> / <b>layoutId</b> for FLIP reflow and shared element transitions.</li>
                                <li>Only animate transforms/opacity for smoothness; height/width via <code>layout</code> where needed.</li>
                                <li>Vite + React Router + styled-components; GH Pages friendly.</li>
                            </ul>
                        </div>

                        <div className='section'>
                            <h3>Contribute / Feedback</h3>
                            Star the repo, open issues, or suggest a pattern you want covered next.
                        </div>

                        <div className='section'>
                            <h3>Live: <a href="https://a2rp.github.io/framer-motion-demos/" target="_blank" rel="noopener noreferrer">a2rp.github.io/framer-motion-demos</a></h3>
                            <h3>Code: <a href="https://github.com/a2rp/framer-motion-demos" target="_blank" rel="noopener noreferrer">github.com/a2rp/framer-motion-demos</a></h3>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>About Developer</legend>
                    <div className='aboutDeveloper'>
                        <Row>
                            <Col1>Name</Col1>
                            <Col2>
                                Ashish Ranjan
                                <div className="icon"><FaUser size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>Phone</Col1>
                            <Col2>
                                <a href="tel:+918123747965">+91 8123747965</a>
                                <div className="icon"><FaPhoneAlt size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>Email</Col1>
                            <Col2>
                                <a href="mailto:ash.ranjan09@gmail.com">ash.ranjan09@gmail.com</a>
                                <div className="icon"><MdEmail size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>Nationality</Col1>
                            <Col2>
                                The Republic of India
                                <div className="icon"><IndianFlag /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>Website</Col1>
                            <Col2>
                                <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">https://www.ashishranjan.net/</a>
                                <div className="icon"><TbWorldWww size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>Old Website</Col1>
                            <Col2>
                                <a href="http://www.ashishranjan.in/" target="_blank" rel="noopener noreferrer">http://www.ashishranjan.in/</a>
                                <div className="icon"><TbWorldWww size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>Facebook</Col1>
                            <Col2>
                                <a href="https://www.facebook.com/theash.ashish/" target="_blank" rel="noopener noreferrer">facebook.com/theash.ashish/</a>
                                <div className="icon"><FaFacebook size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>LinkedIn</Col1>
                            <Col2>
                                <a href="https://www.linkedin.com/in/aashishranjan/" target="_blank" rel="noopener noreferrer">linkedin.com/in/aashishranjan/</a>
                                <div className="icon"><FaLinkedin size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>YouTube</Col1>
                            <Col2>
                                <a href="https://www.youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ" target="_blank" rel="noopener noreferrer">youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ</a>
                                <div className="icon"><FaYoutube size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>GitHub</Col1>
                            <Col2>
                                <a href="https://github.com/a2rp" target="_blank" rel="noopener noreferrer">github.com/a2rp</a>
                                <div className="icon"><FaGithub size={20} /></div>
                            </Col2>
                        </Row>
                    </div>
                </fieldset>
            </Styled.Wrapper>
        </>
    )
}

export default Home
