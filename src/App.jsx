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
        if (saved === "light" || saved === "dark") return saved
    } catch { }
    if (typeof window !== "undefined" && window.matchMedia) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    return "light"
}

const App = () => {
    const [displayNav, setDisplayNav] = useState(true)
    const [theme, setTheme] = useState(getInitialTheme)

    // Apply theme to <html> as data attribute + persist
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        try { localStorage.setItem(THEME_KEY, theme) } catch { }
    }, [theme])

    // If user hasn't explicitly chosen, follow OS changes
    useEffect(() => {
        const mq = window.matchMedia?.("(prefers-color-scheme: dark)")
        if (!mq) return
        const handler = (e) => {
            const saved = localStorage.getItem(THEME_KEY)
            if (saved !== "light" && saved !== "dark") {
                setTheme(e.matches ? "dark" : "light")
            }
        }
        mq.addEventListener?.("change", handler)
        return () => mq.removeEventListener?.("change", handler)
    }, [])

    const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"))
    const handleDisplayNav = () => setDisplayNav(prev => !prev)

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Styled.LogoLinkWrapper>
                    <Styled.NavLinkWrapper onClick={handleDisplayNav} title="Toggle sidebar">
                        <MdMenuOpen size={20} />
                    </Styled.NavLinkWrapper>
                    <NavLink to="/" title="Framer Motion Demos">
                        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan logo" />
                        <span>Framer Motion Demos</span>
                    </NavLink>
                </Styled.LogoLinkWrapper>

                <Styled.Heading>
                    <button
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                        title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                        className="iconBtn"
                    >
                        <TbSunMoon size={20} />
                    </button>
                </Styled.Heading>
            </Styled.Header>

            <Styled.Main>
                <Styled.NavWrapper className={`${displayNav ? "active" : ""}`}>
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
