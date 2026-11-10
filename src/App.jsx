import ScrollToTop from './components/ScrollToTop'
import { Styled } from './App.styled'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MdMenuOpen } from 'react-icons/md'
import Footer from './components/footer'
import NavList from './components/navList'
import { TbSunMoon } from "react-icons/tb"

// Toasts
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AppRoutes from './AppRoutes'

const THEME_KEY = "fm:theme:v1"

function getInitialTheme() {
    try {
        const saved = localStorage.getItem(THEME_KEY)
        if (saved === "light" || saved === "dark") return { theme: saved, explicit: true }
    } catch { }
    if (typeof window !== "undefined" && window.matchMedia) {
        return {
            theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
            explicit: false,
        }
    }
    return { theme: "light", explicit: false }
}

const App = () => {
    const [displayNav, setDisplayNav] = useState(() => (
        typeof window !== "undefined" && window.matchMedia?.("(min-width: 1000px)").matches
    ))
    const [themePreference, setThemePreference] = useState(getInitialTheme)
    const { theme, explicit } = themePreference

    // Apply theme to <html> as data attribute + persist
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        if (explicit) {
            try { localStorage.setItem(THEME_KEY, theme) } catch { }
        }
    }, [theme, explicit])

    useEffect(() => {
        const breakpoint = window.matchMedia?.("(min-width: 1000px)")
        if (!breakpoint) return undefined

        const handleBreakpointChange = (event) => setDisplayNav(event.matches)
        breakpoint.addEventListener?.("change", handleBreakpointChange)
        return () => breakpoint.removeEventListener?.("change", handleBreakpointChange)
    }, [])

    // If user hasn't explicitly chosen, follow OS changes
    useEffect(() => {
        const mq = window.matchMedia?.("(prefers-color-scheme: dark)")
        if (!mq) return
        const handler = (e) => setThemePreference((preference) => (
            preference.explicit ? preference : { ...preference, theme: e.matches ? "dark" : "light" }
        ))
        mq.addEventListener?.("change", handler)
        return () => mq.removeEventListener?.("change", handler)
    }, [])

    const toggleTheme = () => setThemePreference((preference) => ({
        theme: preference.theme === "dark" ? "light" : "dark",
        explicit: true,
    }))
    const handleDisplayNav = () => setDisplayNav(prev => !prev)

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Styled.LogoLinkWrapper>
                    <Styled.NavLinkWrapper
                        as="button"
                        type="button"
                        aria-label={displayNav ? "Hide demo navigation" : "Show demo navigation"}
                        aria-expanded={displayNav}
                        aria-controls="demo-navigation"
                        onClick={handleDisplayNav}
                        title="Toggle sidebar"
                    >
                        <MdMenuOpen size={20} aria-hidden="true" />
                    </Styled.NavLinkWrapper>
                    <NavLink to="/" title="Framer Motion Demos">
                        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan logo" />
                        <span>Framer Motion Demos</span>
                    </NavLink>
                </Styled.LogoLinkWrapper>

                <Styled.Heading>
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                        title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                        aria-pressed={theme === "light"}
                        className="iconBtn"
                    >
                        <TbSunMoon size={20} />
                    </button>
                </Styled.Heading>
            </Styled.Header>

            <Styled.Main>
                <Styled.NavWrapper
                    id="demo-navigation"
                    aria-hidden={!displayNav}
                    className={`${displayNav ? "active" : ""}`}
                >
                    <div className="navInner">
                        <NavList />
                    </div>
                </Styled.NavWrapper>

                <Styled.ContentWrapper id="scroll-root" data-scroll-root>
                    <Styled.RoutesWrapper>
                        <AppRoutes />
                    </Styled.RoutesWrapper>

                    <Styled.Footer>
                        <Footer />
                    </Styled.Footer>
                </Styled.ContentWrapper>
            </Styled.Main>

            <ScrollToTop />
            <ToastContainer position="bottom-center" autoClose={4000} newestOnTop />
        </Styled.Wrapper>
    )
}

export default App
