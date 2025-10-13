import styled from "styled-components";
import { motion } from "framer-motion";

/* Shared sizes */
const ROW_H_COMFY = "82px";
const ROW_H_COMPACT = "66px";

export const Styled = {
    Wrapper: styled.div`
        display: grid;
        gap: var(--space-6);
        padding: var(--space-6);
        max-width: 980px;
        margin: 0 auto;
        color: var(--text);
    `,

    Header: styled.header`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-4);

        .heading h1 {
            font-size: 24px;
            line-height: 1.2;
        }
        .heading .muted {
            color: var(--text-muted);
            margin-top: 6px;
        }

        .controls {
            display: flex;
            align-items: center;
            gap: var(--space-4);
            flex-wrap: wrap;
        }

        .search input {
            height: 34px;
            min-width: 220px;
            border: 1px solid var(--border);
            background: var(--surface);
            color: var(--text);
            border-radius: var(--radius-md);
            padding: 0 12px;
            box-shadow: var(--shadow-sm) inset;
        }

        .ctrl {
            display: grid;
            grid-template-columns: auto auto;
            align-items: center;
            column-gap: 8px;
        }
        .ctrl span {
            font-size: 12px;
            color: var(--text-muted);
        }
        .ctrl select {
            height: 34px;
            min-width: 160px;
            border: 1px solid var(--border);
            background: var(--surface);
            color: var(--text);
            border-radius: var(--radius-sm);
            padding: 0 10px;
        }

        .btn {
            height: 34px;
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
        .btn.ghost {
            background: var(--surface);
        }
        .btn.danger {
            background: hsl(0 70% 50%);
            color: white;
            border-color: transparent;
        }
        .btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .sep {
            width: 1px;
            height: 34px;
            background: var(--border);
        }
    `,

    Stage: styled.section`
        position: relative;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-md);
        overflow: hidden;

        .list {
            max-height: 560px;
            overflow: auto;
            padding: var(--space-6);
            display: grid;
            gap: var(--space-3);
            scrollbar-gutter: stable;

            scrollbar-width: thin;
            scrollbar-color: hsl(0 0% 50% / 0.35) transparent;
        }
        .list::-webkit-scrollbar {
            width: 12px;
        }
        .list::-webkit-scrollbar-thumb {
            background: hsl(0 0% 50% / 0.35);
            border-radius: 8px;
            border: 3px solid transparent;
            background-clip: content-box;
        }

        .row {
            --row-height: ${ROW_H_COMFY};
            height: var(--row-height);
            display: grid;
            grid-template-columns: 18px 24px 1fr auto;
            align-items: center;
            gap: var(--space-4);
            padding: 10px 12px;
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            background: linear-gradient(
                    0deg,
                    hsl(210 90% 56% / 0.04),
                    hsl(210 90% 62% / 0.03)
                ),
                var(--surface);
            box-shadow: var(--shadow-sm);
            color: var(--text);
            will-change: transform, opacity;
            position: relative;
        }

        [data-density="compact"] & .row {
            --row-height: ${ROW_H_COMPACT};
            padding: 8px 10px;
        }

        .row.is-selected {
            outline: 2px solid hsl(210 90% 56% / 0.33);
        }
        .row.is-pulse {
            animation: pulse 1.2s ease-out 1;
        }
        @keyframes pulse {
            0% {
                box-shadow: 0 0 0 0 hsl(210 90% 56% / 0.35);
            }
            100% {
                box-shadow: 0 0 0 18px hsl(210 90% 56% / 0);
            }
        }

        .grab {
            width: 18px;
            height: 100%;
            background: radial-gradient(
                    2px 2px at 50% 8px,
                    hsl(0 0% 60% / 0.9),
                    transparent 60%
                ),
                radial-gradient(
                    2px 2px at 50% 18px,
                    hsl(0 0% 60% / 0.9),
                    transparent 60%
                ),
                radial-gradient(
                    2px 2px at 50% 28px,
                    hsl(0 0% 60% / 0.9),
                    transparent 60%
                ),
                radial-gradient(
                    2px 2px at 50% 38px,
                    hsl(0 0% 60% / 0.9),
                    transparent 60%
                );
            opacity: 0.7;
            border-right: 1px dashed var(--border);
            cursor: grab;
        }

        .check {
            position: relative;
            width: 24px;
            height: 24px;
            display: inline-grid;
            place-items: center;
        }
        .check input {
            position: absolute;
            opacity: 0;
            inset: 0;
            cursor: pointer;
        }
        .check span {
            width: 16px;
            height: 16px;
            border-radius: 4px;
            border: 1px solid var(--border);
            background: var(--card);
            display: inline-block;
            box-shadow: var(--shadow-sm) inset;
        }
        .row.is-selected .check span {
            background: var(--primary);
            border-color: transparent;
        }

        .main {
            overflow: hidden;
        }
        .t {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .t h3 {
            font-size: 16px;
            line-height: 1.2;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .note {
            color: var(--text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .prio {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
        }
        .prio.p2 {
            background: hsl(8 82% 55% / 0.16);
            color: hsl(8 82% 60%);
            border-color: hsl(8 82% 55% / 0.3);
        }
        .prio.p1 {
            background: hsl(38 95% 55% / 0.16);
            color: hsl(38 95% 50%);
            border-color: hsl(38 95% 55% / 0.3);
        }
        .prio.p0 {
            background: hsl(149 60% 45% / 0.16);
            color: hsl(149 60% 40%);
            border-color: hsl(149 60% 45% / 0.3);
        }

        .meta {
            display: grid;
            align-items: center;
            gap: 6px;
            justify-items: end;
        }
        .meta time {
            font-size: 12px;
            color: var(--text-muted);
        }
        .pill {
            height: 28px;
            padding: 0 10px;
            border-radius: 999px;
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            cursor: pointer;
        }
    `,

    Infobar: styled.div`
        font-size: 12px;
        color: var(--text-muted);
        padding: 10px 14px;
        border-bottom: 1px dashed var(--border);
        background: var(--surface);
    `,

    /* ✅ Real motion-styled toolbar (no `as={motion.div}` needed) */
    BulkToolbar: styled(motion.div)`
        position: sticky;
        top: 0;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-4);
        padding: 10px 12px;
        background: linear-gradient(180deg, var(--surface), var(--card));
        border-bottom: 1px solid var(--border);

        .left {
            color: var(--text);
        }
        .right {
            display: flex;
            gap: var(--space-3);
        }
    `,
};
