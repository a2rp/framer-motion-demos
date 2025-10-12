// src/pages/home/styled.js
import styled from "styled-components";

const maxw = "1080px";

export const Styled = {
    Wrapper: styled.div`
        padding: var(--space-6);
        max-width: ${maxw};
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
    `,
};

export const Row = styled.div`
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
`;

export const Col1 = styled.div`
    flex: 0 0 80px;
    white-space: nowrap;
    color: var(--text-muted);
`;

export const Col2 = styled.div`
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
`;
