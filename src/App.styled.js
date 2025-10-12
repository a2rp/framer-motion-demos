// src/App.styled.js
import styled, { css } from "styled-components";

/* ---- Hover scrollbar with NO layout shift ----
   - Uses theme tokens (var(--text), var(--text-muted), var(--border)).
   - Width is constant (12px), so content never moves.
   - Thumb fades from transparent → visible on hover.
   - Works in Chromium/Safari (WebKit) + Firefox.
*/
const hoverScrollbarStable = css`
    /* Reserve space so nothing shifts (where supported) */
    scrollbar-gutter: stable;

    /* Firefox defaults: thin + invisible until hover */
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;

    /* WebKit: fixed size; invisible by default */
    &::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: transparent; /* hidden look */
        border-radius: 8px;
        border: 3px solid transparent; /* inset effect */
        background-clip: content-box;
    }

    /* On hover: only change colors / opacity, not width */
    @media (hover: hover) {
        &:hover {
            scrollbar-color: var(--text-muted) transparent; /* Firefox thumb color */
        }
        &:hover::-webkit-scrollbar-thumb {
            background: var(--text-muted);
        }
        &::-webkit-scrollbar-thumb:hover {
            background: var(--text);
        }
    }

    /* Touch devices: keep a visible thin thumb for usability */
    @media (hover: none) {
        scrollbar-width: thin;
        scrollbar-color: var(--text-muted) transparent;
        &::-webkit-scrollbar-thumb {
            background: var(--text-muted);
        }
    }
`;

const Wrapper = styled.div`
    position: relative;
    background: var(--bg);
    color: var(--text);
`;

const Header = styled.div`
    position: fixed;
    inset: 0 0 auto 0;
    height: 70px;
    background: var(--surface);
    color: var(--text);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    padding: 15px;
    border-bottom: 1px solid var(--border);
    z-index: 1000;
`;

const LogoLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        color: var(--text);
        text-decoration: none;
        padding: 2px 15px;
        border-radius: var(--radius-sm);

        &:hover {
            border-bottom: 1px solid var(--border);
        }
        &:focus-visible {
            outline: var(--focus-ring);
        }
    }
`;

const NavLinkWrapper = styled.div`
    border: 1px solid var(--border);
    background: var(--card);
    color: var(--text);
    border-radius: var(--radius-sm);
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    box-shadow: var(--shadow-sm);

    &:focus-visible {
        outline: var(--focus-ring);
    }
`;

const Heading = styled.h1`
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: var(--space-3);

    a img {
        height: 22px;
    }

    /* optional: align the theme button nicely if placed here */
    button.iconBtn {
        background: var(--card);
        color: var(--text);
    }
`;

const Main = styled.div`
    height: 100vh;
    padding-top: 70px; /* header height */
    display: flex;
    align-items: stretch;
    overflow: hidden;
    background: var(--bg);
`;

const NavWrapper = styled.div`
    border-right: 1px solid var(--border);
    width: 0;
    flex: 0 0 0;
    transition: 0.2s ease;
    transition-property: width, flex;
    overflow: hidden;
    z-index: 999;
    background: var(--surface);
    color: var(--text);
    position: relative;

    &.active {
        flex: 0 0 250px;
        width: 250px;
    }

    @media (width < 1000px) {
        position: fixed;
        top: 70px;
        left: 0;
        height: calc(100vh - 70px);
        border-right: 1px solid var(--border);
        box-shadow: var(--shadow-md);
    }

    .navInner {
        width: 250px;
        height: 100%;
        overflow-y: auto;
        ${hoverScrollbarStable};
        padding: 15px;
        background: var(--surface);
    }
`;

const Tuts = styled.div``;

const ContentWrapper = styled.div`
    width: 100%;
    overflow: auto;
    scroll-behavior: smooth !important;
    ${hoverScrollbarStable};

    /* Provide a subtle inset ring to separate from sidebar */
    background: var(--bg);
    color: var(--text);
`;

const RoutesWrapper = styled.div`
    min-height: 100vh;
    background: var(--bg);
    color: var(--text);
`;

const Footer = styled.div`
    padding: 15px;
    background: var(--surface);
    border-top: 1px solid var(--border);
    color: var(--text-muted);
`;

export const Styled = {
    Wrapper,
    Header,
    LogoLinkWrapper,
    NavLinkWrapper,
    Heading,
    Main,
    ContentWrapper,
    RoutesWrapper,
    NavWrapper,
    Tuts,
    Footer,
};
