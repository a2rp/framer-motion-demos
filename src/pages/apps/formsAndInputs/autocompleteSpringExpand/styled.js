import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: grid;
        gap: var(--space-6);
        padding: var(--space-6);
        max-width: 900px;
        margin: 0 auto;
        color: var(--text);
        h1,
        h2,
        h3 {
            font-family: "Antonio", system-ui, sans-serif;
        }
        p,
        input,
        button,
        label,
        span,
        em,
        kbd,
        pre {
            font-family: inherit;
        }
        code,
        kbd {
            font-family: ui-monospace, Menlo, Consolas, "Liberation Mono",
                monospace;
        }
    `,

    Header: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-4);
        flex-wrap: wrap;
        .heading h1 {
            font-size: 24px;
            line-height: 1.2;
        }
        .heading .muted {
            color: var(--text-muted);
            margin-top: 6px;
        }
        .gear {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            height: 36px;
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            border-radius: var(--radius-md);
            padding: 0 12px;
            box-shadow: var(--shadow-sm);
            cursor: pointer;
        }
    `,

    Stage: styled.section`
        display: grid;
        gap: var(--space-4);
        overflow: visible;

        .search {
            display: grid;
            gap: 10px;
            position: relative;
            z-index: 10;
        }

        .inputWrap {
            display: grid;
            grid-template-columns: 36px 1fr auto;
            align-items: center;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            padding: 4px;
            transition: box-shadow 0.2s ease, border-color 0.2s ease;
            &[data-open="true"] {
                box-shadow: 0 10px 30px hsl(0 0% 0% / 0.12);
                border-color: hsl(210 90% 56% / 0.45);
            }
        }

        .inputWrap .icon {
            display: grid;
            place-items: center;
            color: var(--text-muted);
        }
        .inputWrap input {
            height: 40px;
            padding: 0 8px;
            border: 0;
            outline: 0;
            background: transparent;
            color: var(--text);
        }
        .inputWrap .clear {
            display: inline-grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border: 0;
            background: transparent;
            color: var(--text-muted);
            cursor: pointer;
        }

        .panel {
            position: absolute;
            top: calc(100% + 6px);
            left: 0;
            right: 0;
            z-index: 20;
            transform-origin: top center;
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            background: var(--card);
            box-shadow: var(--shadow-md);
            overflow: hidden;
            will-change: transform, opacity;
        }

        .list {
            max-height: 280px;
            overflow: auto;
            padding: 8px;
            scrollbar-gutter: stable;
        }

        .row {
            position: relative;
            width: 100%;
            text-align: left;
            border: 0;
            background: transparent;
            color: var(--text);
            padding: 10px 12px;
            border-radius: var(--radius-sm);
            cursor: pointer;
            display: grid;
            align-items: center;
            transition: background 0.15s ease;
        }
        .row:hover {
            background: var(--surface);
        }
        .row[aria-selected="true"] .name {
            font-weight: 600;
        }

        .activeBg {
            position: absolute;
            inset: 0;
            border-radius: var(--radius-sm);
            background: linear-gradient(
                0deg,
                hsl(210 90% 56% / 0.08),
                hsl(210 90% 56% / 0.12)
            );
            z-index: 0;
        }
        .row .name {
            position: relative;
            z-index: 1;
        }

        mark {
            background: hsl(50 100% 50% / 0.25);
            color: inherit;
            padding: 0 1px;
            border-radius: 2px;
        }

        .help {
            color: var(--text-muted);
            border-left: 4px solid var(--border);
            padding-left: var(--space-4);
        }
        .help kbd {
            display: inline-block;
            min-width: 1.4ch;
            padding: 2px 6px;
            border-radius: 4px;
            border: 1px solid var(--border);
            background: var(--surface);
            box-shadow: var(--shadow-sm);
        }

        /* ===== Modal (blurred overlay + centered card) ===== */
        .modalOverlay {
            position: fixed;
            inset: 0;
            z-index: 98;
            background: hsl(220 15% 5% / 0.45);
            backdrop-filter: blur(10px) saturate(1.05);
            -webkit-backdrop-filter: blur(10px) saturate(1.05);
        }

        .modal {
            position: fixed;
            z-index: 99;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: min(560px, 92vw);
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-md);
            overflow: hidden;
            display: grid;
        }

        .mHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding: 12px 14px;
            border-bottom: 1px solid var(--border);
            background: var(--surface);
        }
        .mHead h2 {
            font-size: 18px;
        }
        .mHead .close {
            display: inline-grid;
            place-items: center;
            width: 34px;
            height: 34px;
            border: 0;
            border-radius: 8px;
            background: var(--card);
            color: var(--text);
            cursor: pointer;
        }

        .form {
            display: grid;
            gap: var(--space-4);
            padding: var(--space-6);
        }
        .field {
            display: grid;
            gap: 8px;
        }
        .field span {
            font-size: 12px;
            color: var(--text-muted);
        }
        .field input {
            height: 38px;
            padding: 0 10px;
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            background: var(--surface);
            color: var(--text);
            outline: none;
            transition: border-color 0.2s ease, box-shadow 0.2s ease,
                background 0.2s ease;
        }
        .field input::placeholder {
            color: hsl(0 0% 60%);
            opacity: 0.8;
        }
        .field input:hover {
            background: color-mix(in oklab, var(--surface), white 2%);
        }
        .field input:focus {
            border-color: hsl(210 90% 56%);
            box-shadow: var(--focus-ring);
            background: color-mix(in oklab, var(--surface), white 3%);
        }
        .field input[aria-invalid="true"] {
            border-color: hsl(0 80% 50% / 0.7);
        }
        .field .error {
            color: hsl(0 80% 60%);
            font-style: normal;
            font-size: 12px;
        }

        .pwdWrap {
            position: relative;
            display: grid;
        }
        .pwdWrap input {
            padding-right: 40px;
        }
        .pwdWrap .eye {
            position: absolute;
            right: 6px;
            top: 50%;
            transform: translateY(-50%);
            width: 32px;
            height: 32px;
            border: 0;
            border-radius: 8px;
            background: transparent;
            color: var(--text-muted);
            cursor: pointer;
            display: inline-grid;
            place-items: center;
        }

        .actions {
            display: flex;
            justify-content: end;
            gap: 10px;
            margin-top: 4px;
        }
        .btn {
            height: 36px;
            border-radius: var(--radius-md);
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            padding: 0 14px;
            box-shadow: var(--shadow-sm);
            cursor: pointer;
        }
        .btn.primary {
            background: var(--primary);
            color: var(--primary-contrast);
            border-color: transparent;
        }
        .btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .btn.ghost {
            background: var(--surface);
        }
    `,
};
