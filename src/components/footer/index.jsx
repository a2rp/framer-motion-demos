import { Styled } from "./styled";
import ar_logo from "../../assets/ar_logo.png";

export default function Footer() {
    const year = new Date().getFullYear();
    const links = [
        ["Portfolio", "https://www.ashishranjan.net"],
        ["GitHub", "https://github.com/a2rp"],
        ["CodePen", "https://codepen.io/ash1198"],
        ["LinkedIn", "https://www.linkedin.com/in/aashishranjan"],
        ["Facebook", "https://www.facebook.com/theash.ashish/"],
        ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1"],
        ["Email", "mailto:ash.ranjan09@gmail.com"],
    ];
    const support = [
        ["Support", "https://a2rp-donation-page.netlify.app/"],
        ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp"],
        ["Patreon", "https://patreon.com/a2rp"],
    ];
    return (
        <Styled.Wrapper>
            <Styled.Col>&copy; {year} Ashish Ranjan</Styled.Col>
            <Styled.Col>
                <div>Links</div>
                {links.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>)}
            </Styled.Col>
            <Styled.Col>
                <div>Support</div>
                {support.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>)}
            </Styled.Col>
            <Styled.Col>
                By <a href="https://www.ashishranjan.net" target="_blank" rel="noopener noreferrer">
                    <img src={ar_logo} alt="Ashish Ranjan logo" /> Ashish Ranjan
                </a>
            </Styled.Col>
        </Styled.Wrapper>
    );
}


