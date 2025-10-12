// Replace the <select> block with this custom picker inside QnA

import { useEffect, useMemo, useRef, useState } from "react";

// Utility: click outside to close
function useClickOutside(ref, onOutside) {
    useEffect(() => {
        function handler(e) {
            if (!ref.current) return;
            if (!ref.current.contains(e.target)) onOutside();
        }
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [onOutside, ref]);
}

export const TopicPicker = ({ topics, selected, onChange }) => {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(
        Math.max(0, topics.findIndex(t => t.id === selected))
    );
    const ref = useRef(null);

    useClickOutside(ref, () => setOpen(false));

    useEffect(() => {
        setActiveIndex(Math.max(0, topics.findIndex(t => t.id === selected)));
    }, [selected, topics]);

    const onKeyDown = (e) => {
        if (!open && (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")) {
            e.preventDefault(); setOpen(true); return;
        }
        if (!open) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex(i => Math.min(i + 1, topics.length - 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex(i => Math.max(i - 1, 0));
        } else if (e.key === "Enter") {
            e.preventDefault();
            const t = topics[activeIndex]; if (t) onChange(t.id);
            setOpen(false);
        } else if (e.key === "Escape") {
            e.preventDefault(); setOpen(false);
        }
    };

    const current = useMemo(() => topics.find(t => t.id === selected), [topics, selected]);

    return (
        <div ref={ref} style={{ position: "relative" }}>
            <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => setOpen(o => !o)}
                onKeyDown={onKeyDown}
                style={{
                    width: "100%",
                    background: "#0e0f13",
                    color: "var(--text)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    padding: "10px 12px",
                    textAlign: "left"
                }}
            >
                {current ? current.title : "Select topic"}
            </button>

            {open && (
                <ul
                    role="listbox"
                    tabIndex={-1}
                    aria-activedescendant={topics[activeIndex]?.id}
                    style={{
                        position: "absolute",
                        top: "calc(100% + 8px)",
                        left: 0,
                        right: 0,
                        maxHeight: 320,
                        overflow: "auto",
                        background: "#0f1014",
                        border: "1px solid var(--border)",
                        borderRadius: 12,
                        padding: 6,
                        margin: 0,
                        listStyle: "none",
                        zIndex: 5,                // stays within content column
                        boxShadow: "0 8px 24px rgba(0,0,0,.35)"
                    }}
                >
                    {topics.map((t, i) => {
                        const active = i === activeIndex;
                        const selectedNow = t.id === selected;
                        return (
                            <li
                                id={t.id}
                                key={t.id}
                                role="option"
                                aria-selected={selectedNow}
                                onMouseEnter={() => setActiveIndex(i)}
                                onMouseDown={(e) => { e.preventDefault(); onChange(t.id); setOpen(false); }}
                                style={{
                                    padding: "10px 12px",
                                    borderRadius: 10,
                                    cursor: "pointer",
                                    background: active ? "rgba(124,92,255,.15)" : "transparent",
                                    outline: selectedNow ? "1px solid rgba(124,92,255,.6)" : "none"
                                }}
                            >
                                {t.title}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};
