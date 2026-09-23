import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiArrowUp } from "react-icons/fi";
import { Styled } from "../App.styled";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = document.getElementById("scroll-root");
        if (node) {
            // route change ⇒ instant jump to top (no animation needed)
            node.scrollTo({ top: 0, behavior: "auto" });
        } else {
            window.scrollTo({ top: 0, behavior: "auto" });
        }
    }, [pathname]);

    useEffect(() => {
        const node = document.getElementById("scroll-root");
        const handleScroll = () => setVisible((node?.scrollTop || window.scrollY) > 240);

        handleScroll();
        node?.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            node?.removeEventListener("scroll", handleScroll);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        const node = document.getElementById("scroll-root");
        node?.scrollTo({ top: 0, behavior: "smooth" });
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <Styled.FloatingTopButton
            type="button"
            className="floatingTopButton"
            onClick={handleClick}
            aria-label="Scroll to top"
            title="Scroll to top"
        >
            <FiArrowUp aria-hidden="true" />
        </Styled.FloatingTopButton>
    );
}
