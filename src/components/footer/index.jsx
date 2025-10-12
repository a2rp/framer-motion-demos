import { Styled } from "./styled";
import ar_logo from "../../assets/ar_logo.png";

export default function Footer() {
    return (
        <>
            <Styled.Wrapper>
                <Styled.Col>&copy; {new Date().getFullYear()}</Styled.Col>
                <Styled.Col>
                    By <a
                        href="https://www.ashishranjan.net"
                        target="_blank"
                    >
                        <img src={ar_logo} alt="ar_logo" /> Ashish Ranjan
                    </a>
                </Styled.Col>
            </Styled.Wrapper>
        </>
    );
}


