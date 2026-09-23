import { createElement } from "react";
import { FaCodepen, FaFacebookF, FaGithub, FaLinkedinIn, FaPatreon, FaYoutube } from "react-icons/fa";
import { FiCoffee, FiGlobe, FiHeart, FiMail } from "react-icons/fi";
import { Styled } from "./styled";

const links = [
    ["Portfolio", "https://www.ashishranjan.net/", FiGlobe],
    ["GitHub", "https://github.com/a2rp", FaGithub],
    ["CodePen", "https://codepen.io/ash1198", FaCodepen],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FaLinkedinIn],
    ["Facebook", "https://www.facebook.com/theash.ashish/", FaFacebookF],
    ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FaYoutube],
    ["Email", "mailto:ash.ranjan09@gmail.com", FiMail],
    ["Support", "https://a2rp-donation-page.netlify.app/", FiHeart],
    ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FiCoffee],
    ["Patreon", "https://www.patreon.com/a2rp", FaPatreon],
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <Styled.Wrapper>
            <div className="footerIntro">
                <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan logo" />
                <div>
                    <strong>Framer Motion Demos</strong>
                    <p>Focused interaction patterns for React interfaces.</p>
                </div>
            </div>

            <div className="footerBottom">
                <p>
                    Copyright &copy; {year}{" "}
                    <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                        Ashish Ranjan
                    </a>
                </p>
                <nav className="footerLinks" aria-label="Social and support links">
                    {links.map(([label, href, Icon]) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith("mailto:") ? undefined : "_blank"}
                            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                            aria-label={label}
                            title={label}
                        >
                            {createElement(Icon, { "aria-hidden": true })}
                        </a>
                    ))}
                </nav>
            </div>
        </Styled.Wrapper>
    );
}
