import { useEffect, useRef } from "react";
import { Styled } from "./styled";

export default function Toast({
    open,
    message,
    type = "info",
    actionLabel,
    onAction,
    onClose,
    duration = 4000,
}) {
    const timerRef = useRef(null);

    useEffect(() => {
        if (!open) return;
        if (duration === 0) return; // persistent toast
        timerRef.current = setTimeout(() => {
            onClose?.();
        }, duration);
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [open, duration, onClose, message, actionLabel]);

    if (!open) return null;

    return (
        <Styled.Host role={type === "error" ? "alert" : "status"} aria-live="polite">
            <Styled.Toast data-type={type}>
                <Styled.Msg>{message}</Styled.Msg>

                {actionLabel && onAction ? (
                    <Styled.Action
                        type="button"
                        onClick={() => {
                            try {
                                onAction();
                            } finally {
                                onClose?.();
                            }
                        }}
                    >
                        {actionLabel}
                    </Styled.Action>
                ) : null}

                <Styled.Close type="button" aria-label="Close" onClick={() => onClose?.()}>
                    ✕
                </Styled.Close>
            </Styled.Toast>
        </Styled.Host>
    );
}
