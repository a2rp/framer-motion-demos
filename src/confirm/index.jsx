import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Styled } from "./styled";

/*
  Global Confirm system (no portals).
  Usage:
    1) Wrap <ConfirmProvider> near the app root (App.jsx).
    2) const confirm = useConfirm();
       const ok = await confirm({ title: "Clear All?", message: "This cannot be undone." });
       if (ok) { ... }

  Notes:
  - Promise-based; resolves true/false
  - ESC cancels, Enter confirms
  - Click outside cancels
  - Focus is trapped within the dialog while open; restored on close
*/

const ConfirmContext = createContext(null);

const DEFAULTS = {
    title: "Are you sure?",
    message: "",
    confirmText: "Confirm",
    cancelText: "Cancel",
    variant: "default", // "default" | "danger"
};

export function ConfirmProvider({ children }) {
    const [open, setOpen] = useState(false);
    const [opts, setOpts] = useState(DEFAULTS);
    const resolverRef = useRef(null);
    const lastActiveElRef = useRef(null);

    const confirmRef = useRef(null);
    const cancelRef = useRef(null);
    const dialogRef = useRef(null);

    // open a confirm dialog and return a promise<boolean>
    const confirm = useCallback((options = {}) => {
        return new Promise((resolve) => {
            // store resolver
            resolverRef.current = resolve;
            // merge options with defaults
            setOpts({ ...DEFAULTS, ...options });
            // remember focus, open dialog
            lastActiveElRef.current = document.activeElement;
            setOpen(true);
        });
    }, []);

    // resolve helper
    const resolve = useCallback((value) => {
        if (resolverRef.current) {
            resolverRef.current(value);
            resolverRef.current = null;
        }
        setOpen(false);
    }, []);

    // focus management when open
    useEffect(() => {
        if (!open) {
            // restore focus
            if (lastActiveElRef.current && typeof lastActiveElRef.current.focus === "function") {
                setTimeout(() => lastActiveElRef.current.focus(), 0);
            }
            return;
        }
        // autofocusing primary button
        setTimeout(() => {
            if (confirmRef.current) confirmRef.current.focus();
        }, 0);

        const onKeyDown = (e) => {
            if (e.key === "Escape") {
                e.preventDefault();
                resolve(false);
            } else if (e.key === "Enter") {
                // Only confirm if focus is inside the dialog to avoid accidental confirms
                if (dialogRef.current && dialogRef.current.contains(document.activeElement)) {
                    e.preventDefault();
                    resolve(true);
                }
            } else if (e.key === "Tab") {
                // Basic focus trap
                const focusables = dialogRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                if (!focusables || focusables.length === 0) return;
                const list = Array.from(focusables).filter(el => !el.hasAttribute("disabled"));
                const first = list[0];
                const last = list[list.length - 1];

                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [open, resolve]);

    const onBackdrop = useCallback((e) => {
        // click outside dialog cancels
        if (e.target === e.currentTarget) resolve(false);
    }, [resolve]);

    const ctx = useMemo(() => confirm, [confirm]);

    return (
        <ConfirmContext.Provider value={ctx}>
            {children}

            {/* Modal lives here; no portals; fixed overlay */}
            {open && (
                <Styled.Overlay className="no-print" onMouseDown={onBackdrop} aria-hidden="false">
                    <Styled.Dialog
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="confirm-title"
                        aria-describedby="confirm-message"
                        data-variant={opts.variant}
                        ref={dialogRef}
                    >
                        <h3 id="confirm-title">{opts.title}</h3>
                        {opts.message ? <p id="confirm-message">{opts.message}</p> : null}
                        <Styled.Actions>
                            <button
                                ref={confirmRef}
                                className={opts.variant === "danger" ? "danger" : ""}
                                onClick={() => resolve(true)}
                            >
                                {opts.confirmText}
                            </button>
                            <button ref={cancelRef} className="ghost" onClick={() => resolve(false)}>
                                {opts.cancelText}
                            </button>
                        </Styled.Actions>
                    </Styled.Dialog>
                </Styled.Overlay>
            )}
        </ConfirmContext.Provider>
    );
}

export function useConfirm() {
    const ctx = useContext(ConfirmContext);
    if (!ctx) throw new Error("useConfirm() must be used inside <ConfirmProvider>");
    return ctx;
}
