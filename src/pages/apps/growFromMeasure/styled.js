import { motion } from "framer-motion";
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: grid;
        gap: var(--space-6);
        padding: var(--space-6);
        max-width: 980px;
        margin: 0 auto;
        color: var(--text);

        .muted {
            color: var(--text-muted);
        }
        code {
            background: var(--surface);
            padding: 0 4px;
            border-radius: 4px;
        }
    `,

    Header: styled.header`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--space-4);
        justify-content: space-between;

        h1 {
            font-size: 24px;
            line-height: 1.2;
        }

        /* Controls */
        & > .heading {
            min-width: 280px;
        }
    `,

    Controls: styled.div`
        display: grid;
        grid-template-columns: auto auto 1fr auto auto auto;
        gap: var(--space-4);
        align-items: center;

        .ctrl {
            display: grid;
            gap: 6px;
            align-items: center;
        }
        .ctrl span {
            font-size: 12px;
            color: var(--text-muted);
        }
        .ctrl select {
            min-width: 180px;
            height: 34px;
            border: 1px solid var(--border);
            background: var(--surface);
            color: var(--text);
            border-radius: var(--radius-sm);
            padding: 0 8px;
        }

        .spacer {
            width: 12px;
        }

        .btn {
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            border-radius: var(--radius-md);
            padding: 8px 14px;
            box-shadow: var(--shadow-sm);
            cursor: pointer;
            height: 34px;
        }
        .btn.ghost {
            background: var(--surface);
        }
    `,

    Stage: styled.section`
        display: grid;
        gap: var(--space-4);
    `,

    Panel: styled(motion.article)`
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        overflow: hidden; /* clips measure mode */
        will-change: height;

        &.open {
            box-shadow: var(--shadow-md);
        }
    `,

    PanelHeader: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-4) var(--space-6);
        cursor: pointer;
        user-select: none;
        background: var(--surface);

        .titles {
            display: grid;
            gap: 6px;
        }
        .kicker {
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-size: 11px;
            color: var(--text-muted);
        }
        h2 {
            font-size: 18px;
        }

        .chev {
            display: inline-flex;
            width: 20px;
            justify-content: center;
            color: var(--text-muted);
        }
    `,

    /* For layout mode body */
    PanelBody: styled.div`
        padding: var(--space-4) var(--space-6);
        background: var(--card);
        color: var(--text);

        .body {
            margin-bottom: var(--space-4);
        }
        .bullets {
            margin-left: 18px;
            display: grid;
            gap: 6px;
            color: var(--text);
        }
    `,

    /* For measured mode outer wrapper whose height is animated */
    MeasureWrap: styled.div`
        overflow: hidden;
        background: var(--card);
    `,

    Notes: styled.aside`
        color: var(--text-muted);
        ul {
            padding-left: 18px;
        }
    `,
};
