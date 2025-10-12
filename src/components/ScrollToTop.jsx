import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        const node = document.getElementById("scroll-root");
        if (node) {
            // route change ⇒ instant jump to top (no animation needed)
            node.scrollTo({ top: 0, behavior: "auto" });
        } else {
            window.scrollTo({ top: 0, behavior: "auto" });
        }
    }, [pathname]);

    return null;
}
