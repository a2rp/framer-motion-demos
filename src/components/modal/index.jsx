
import { useEffect, useId, useRef } from "react";
import { Styled } from "./styled";

const FOCUSABLE =
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function Modal({
    open,
    onClose,
    title,
    children,
    actions,
    size = "md",          // sm | md | lg
    closeOnOverlay = true,
    hideClose = false,
    // autofocus is disabled by default; set true + initialFocus to enable
    autoFocus = false,
    initialFocus = null,  // CSS selector or ref (only used if autoFocus === true)
}) {
    const cardRef = useRef(null);
    const onCloseRef = useRef(onClose);
    const titleId = useId();

    // keep latest onClose without re-running effects
    useEffect(() => {
        onCloseRef.current = onClose;
    }, [onClose]);

    useEffect(() => {
        if (!open) return;

        const onKey = (e) => {
            if (e.key === "Escape") {
                onCloseRef.current?.();
                return;
            }
            if (e.key === "Tab") {
                const el = cardRef.current;
                if (!el) return;
                const f = el.querySelectorAll(FOCUSABLE);
                if (!f.length) return;

                // Only trap if focus is already inside the modal.
                if (!el.contains(document.activeElement)) return;

                const first = f[0];
                const last = f[f.length - 1];
                const active = document.activeElement;

                if (!e.shiftKey && active === last) {
                    e.preventDefault();
                    first.focus();
                } else if (e.shiftKey && active === first) {
                    e.preventDefault();
                    last.focus();
                }
            }
        };

        document.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        // ---- optional autofocus (OFF by default) ----
        if (autoFocus) {
            const el = cardRef.current;
            let target = null;

            if (typeof initialFocus === "string") target = el?.querySelector(initialFocus);
            else if (initialFocus && initialFocus.current) target = initialFocus.current;

            if (!target) target = el?.querySelector("[data-autofocus]");
            if (!target) {
                // first focusable inside body, excluding the close button
                const body = el?.querySelector("[data-modal-body]");
                target = body?.querySelector(`${FOCUSABLE}:not([aria-label="Close"])`) || null;
            }
            (target || el)?.focus();
        }

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [open, autoFocus, initialFocus]);

    if (!open) return null;

    const onScrimClick = (e) => {
        if (e.target === e.currentTarget && closeOnOverlay) onCloseRef.current?.();
    };

    return (
        <Styled.Scrim onClick={onScrimClick} role="dialog" aria-modal="true" aria-labelledby={titleId}>
            <Styled.Card ref={cardRef} tabIndex={-1} data-size={size}>
                <Styled.Header>
                    <Styled.Title id={titleId}>{title}</Styled.Title>
                    {!hideClose && (
                        <Styled.Close type="button" aria-label="Close" onClick={() => onCloseRef.current?.()}>
                            ×
                        </Styled.Close>
                    )}
                </Styled.Header>

                <Styled.Body data-modal-body>{children}</Styled.Body>

                {actions && <Styled.Footer>{actions}</Styled.Footer>}
            </Styled.Card>
        </Styled.Scrim>
    );
}
