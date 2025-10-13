import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Styled } from "./styled";

/* ---------------------------------------------
   Mock dataset
---------------------------------------------- */
const DATA = [
    "Angular", "Astro", "Backbone", "Deno", "Ember", "Express", "Fastify", "Gatsby",
    "Go", "Hono", "Laravel", "NestJS", "Next.js", "Nuxt", "Phoenix", "Qt", "React",
    "Remix", "Ruby on Rails", "Solid", "Spring", "Svelte", "Symfony", "Tauri",
    "Vue", "Vite", "Zig"
];

function filterItems(q) {
    const t = q.trim().toLowerCase();
    if (!t) return [];
    const tokens = t.split(/\s+/).filter(Boolean);
    return DATA.filter(n => tokens.every(tok => n.toLowerCase().includes(tok))).slice(0, 10);
}

function Highlighted({ text, query }) {
    if (!query) return text;
    const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!tokens.length) return text;
    const parts = [];
    let rest = text;
    let k = 0;
    while (rest.length) {
        let hitAt = null, token = "";
        for (const t of tokens) {
            const pos = rest.toLowerCase().indexOf(t);
            if (pos !== -1 && (hitAt === null || pos < hitAt)) { hitAt = pos; token = t; }
        }
        if (hitAt === null) { parts.push(<span key={`t-${k++}`}>{rest}</span>); break; }
        if (hitAt > 0) parts.push(<span key={`t-${k++}`}>{rest.slice(0, hitAt)}</span>);
        const hit = rest.slice(hitAt, hitAt + token.length);
        parts.push(<mark key={`m-${k++}`}>{hit}</mark>);
        rest = rest.slice(hitAt + token.length);
    }
    return <>{parts}</>;
}

const IconSearch = (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...p}>
        <path fill="currentColor" d="M15.8 14.4l4.9 4.9-1.4 1.4-4.9-4.9a7 7 0 111.4-1.4zM10 15a5 5 0 100-10 5 5 0 000 10z" />
    </svg>
);
const IconGear = (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...p}>
        <path fill="currentColor" d="M12 8a4 4 0 100 8 4 4 0 000-8zm8.94 3a7.94 7.94 0 00-.37-1.63l2.1-1.64-2-3.46-2.52 1a7.94 7.94 0 00-1.41-.82l-.38-2.67h-4l-.38 2.67c-.5.2-.97.46-1.41.82l-2.52-1-2 3.46 2.1 1.64c-.17.53-.29 1.07-.37 1.63l-2.63.4v4l2.63.4c.08.56.2 1.1.37 1.63l-2.1 1.64 2 3.46 2.52-1c.44.36.91.62 1.41.82l.38 2.67h4l.38-2.67c.5-.2.97-.46 1.41-.82l2.52 1 2-3.46-2.1-1.64c.17-.53.29-1.07.37-1.63l2.63-.4v-4l-2.63-.4z" />
    </svg>
);
const IconEye = (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...p}>
        <path fill="currentColor" d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 12a5 5 0 110-10 5 5 0 010 10z" />
    </svg>
);
const IconEyeOff = (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...p}>
        <path fill="currentColor" d="M2 5.27L3.28 4 20 20.72 18.73 22l-3.1-3.1A10.53 10.53 0 0112 19c-5 0-9.27-3.11-11-7a12.4 12.4 0 012.98-4.18L2 5.27zM12 7a5 5 0 014.9 6.1l-6-6A4.98 4.98 0 0112 7zm7.02 2.14A12.4 12.4 0 0123 12c-1.73 3.89-6 7-11 7-1.22 0-2.39-.19-3.47-.54l1.65-1.65c.58.13 1.18.19 1.82.19a5 5 0 005-5c0-.64-.06-1.24-.19-1.82l1.21-1.21z" />
    </svg>
);
const IconClose = (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...p}>
        <path fill="currentColor" d="M18.3 5.71L12 12.01l-6.3-6.3-1.4 1.41 6.29 6.29-6.3 6.3 1.41 1.41 6.3-6.29 6.29 6.29 1.41-1.41-6.3-6.3 6.3-6.29z" />
    </svg>
);

/* ---------------------------------------------
   Component
---------------------------------------------- */
export default function AutocompleteSpringExpand() {
    const [q, setQ] = useState("");
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(0);
    const listRef = useRef(null);
    const inputRef = useRef(null);

    // modal
    const [modal, setModal] = useState(false);
    const emailRef = useRef(null);
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwdShow, setPwdShow] = useState(false);
    const [touched, setTouched] = useState({ email: false, pwd: false });

    const results = useMemo(() => {
        const items = filterItems(q);
        setActive(0);
        return items;
    }, [q]);

    useEffect(() => { setOpen(q.trim().length >= 1); }, [q]);

    function onKeyDown(e) {
        if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) { setOpen(true); return; }
        if (!results.length) return;
        if (e.key === "ArrowDown") { e.preventDefault(); setActive(i => Math.min(i + 1, results.length - 1)); }
        else if (e.key === "ArrowUp") { e.preventDefault(); setActive(i => Math.max(i - 1, 0)); }
        else if (e.key === "Enter") { e.preventDefault(); if (results[active]) selectItem(results[active]); }
        else if (e.key === "Escape") { setOpen(false); }
    }

    useEffect(() => {
        const el = listRef.current?.querySelector('[data-active="true"]');
        if (el) el.scrollIntoView({ block: "nearest" });
    }, [active]);

    function selectItem(name) { setQ(name); setOpen(false); inputRef.current?.focus(); }

    // validations
    const emailErr =
        touched.email && (!email.trim()
            ? "Email is required."
            : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
                ? "Enter a valid email."
                : "");

    const pwdErr =
        touched.pwd && (!pwd
            ? "Password is required."
            : pwd.length < 8
                ? "Minimum 8 characters."
                : !/[0-9]/.test(pwd)
                    ? "Include at least one number."
                    : "");

    const formValid = !emailErr && !pwdErr && email && pwd;

    /* ------- NEW: premium modal behavior ------- */
    // Lock page scroll, focus first field, close on Escape.
    useEffect(() => {
        if (!modal) return;
        const prevOverflow = document.documentElement.style.overflow;
        document.documentElement.style.overflow = "hidden";
        const t = setTimeout(() => emailRef.current?.focus(), 50);
        const onKey = (e) => { if (e.key === "Escape") setModal(false); };
        window.addEventListener("keydown", onKey);
        return () => {
            document.documentElement.style.overflow = prevOverflow;
            clearTimeout(t);
            window.removeEventListener("keydown", onKey);
        };
    }, [modal]);

    return (
        <MotionConfig reducedMotion="never">
            <Styled.Wrapper>
                <Styled.Header>
                    <div className="heading">
                        <h1>Autocomplete — Spring Expand</h1>
                        <p className="muted">
                            Type to search. Panel expands with a spring, results stagger in, and the active option uses a shared layout highlight.
                        </p>
                    </div>
                    <button className="gear" onClick={() => setModal(true)} title="Settings">
                        <IconGear /><span>Settings</span>
                    </button>
                </Styled.Header>

                <Styled.Stage>
                    <motion.div
                        className="search"
                        layout
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 280, damping: 26 }}
                    >
                        <div className="inputWrap" data-open={open}>
                            <span className="icon"><IconSearch /></span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                onKeyDown={onKeyDown}
                                placeholder="Search frameworks, libraries, runtimes…"
                                aria-autocomplete="list"
                                aria-expanded={open}
                                aria-controls="auto-listbox"
                            />
                            {q && (
                                <button className="clear" onClick={() => setQ("")} aria-label="Clear">
                                    <IconClose />
                                </button>
                            )}
                        </div>

                        <AnimatePresence initial={false}>
                            {open && (
                                <motion.div
                                    className="panel"
                                    key={`panel-${results.length}`}
                                    role="listbox"
                                    id="auto-listbox"
                                    initial={{ opacity: 0, scaleY: 0.92, y: -4 }}
                                    animate={{ opacity: 1, scaleY: 1, y: 0 }}
                                    exit={{ opacity: 0, scaleY: 0.96, y: -4 }}
                                    transition={{ type: "spring", stiffness: 280, damping: 26 }}
                                >
                                    <div className="list" ref={listRef}>
                                        <AnimatePresence initial={false}>
                                            {(results.length ? results : DATA.slice(0, 6)).map((name, i) => (
                                                <motion.button
                                                    key={name}
                                                    type="button"
                                                    role="option"
                                                    data-active={i === active}
                                                    aria-selected={i === active}
                                                    className="row"
                                                    onMouseEnter={() => setActive(i)}
                                                    onClick={() => selectItem(name)}
                                                    initial={{ opacity: 0, y: 6 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -6 }}
                                                    transition={{ delay: i * 0.02, duration: 0.18 }}
                                                >
                                                    <AnimatePresence>
                                                        {i === active && (
                                                            <motion.span
                                                                className="activeBg"
                                                                layoutId="active-row"
                                                                transition={{ type: "spring", stiffness: 480, damping: 40 }}
                                                                aria-hidden="true"
                                                            />
                                                        )}
                                                    </AnimatePresence>
                                                    <span className="name"><Highlighted text={name} query={q} /></span>
                                                </motion.button>
                                            ))}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    <div className="help">
                        <ul>
                            <li><kbd>↑</kbd>/<kbd>↓</kbd> navigate, <kbd>Enter</kbd> selects, <kbd>Esc</kbd> closes.</li>
                            <li>Panel reveal uses <code>scaleY</code> + spring; rows stagger in.</li>
                            <li>Active option uses a <code>layoutId</code> pill for buttery movement.</li>
                        </ul>
                    </div>
                </Styled.Stage>

                {/* Modal */}
                <AnimatePresence>
                    {modal && (
                        <>
                            <motion.div
                                className="modalOverlay"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.18 }}
                                onClick={() => setModal(false)}
                                aria-hidden="true"
                            />
                            <motion.div
                                className="modal"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="settings-title"
                                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98, y: 8 }}
                                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                            >
                                <header className="mHead">
                                    <h2 id="settings-title">Settings</h2>
                                    <button className="close" onClick={() => setModal(false)} aria-label="Close">
                                        <IconClose />
                                    </button>
                                </header>

                                <form
                                    className="form"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        if (!formValid) return;
                                        setModal(false);
                                    }}
                                    noValidate
                                >
                                    <label className="field">
                                        <span>Email</span>
                                        <input
                                            ref={emailRef}
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onBlur={() => setTouched(t => ({ ...t, email: true }))}
                                            required
                                            placeholder="you@example.com"
                                            aria-invalid={!!emailErr}
                                            aria-describedby={emailErr ? "err-email" : undefined}
                                        />
                                        {emailErr && <em id="err-email" className="error">{emailErr}</em>}
                                    </label>

                                    <label className="field">
                                        <span>Password</span>
                                        <div className="pwdWrap">
                                            <input
                                                type={pwdShow ? "text" : "password"}
                                                value={pwd}
                                                onChange={(e) => setPwd(e.target.value)}
                                                onBlur={() => setTouched(t => ({ ...t, pwd: true }))}
                                                required
                                                placeholder="••••••••"
                                                aria-invalid={!!pwdErr}
                                                aria-describedby={pwdErr ? "err-pwd" : undefined}
                                            />
                                            <button
                                                className="eye"
                                                type="button"
                                                onClick={() => setPwdShow(v => !v)}
                                                aria-label={pwdShow ? "Hide password" : "Show password"}
                                                title={pwdShow ? "Hide" : "Show"}
                                            >
                                                {pwdShow ? <IconEyeOff /> : <IconEye />}
                                            </button>
                                        </div>
                                        {pwdErr && <em id="err-pwd" className="error">{pwdErr}</em>}
                                    </label>

                                    <div className="actions">
                                        <button type="button" className="btn ghost" onClick={() => setModal(false)}>Cancel</button>
                                        <button type="submit" className="btn primary" disabled={!formValid}>Save</button>
                                    </div>
                                </form>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </Styled.Wrapper>
        </MotionConfig>
    );
}
