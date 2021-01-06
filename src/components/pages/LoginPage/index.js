import React from "react";
import { Link } from "react-router-dom";
import bg from "assets/img/background.png";
import logo from "assets/img/logo.png";
import {
    Main,
    Content,
    BG,
    Logo,
    H1,
    Buttons,
    Btn as Button,
    SubBtn as Sub,
} from "./styles";
import { useAuth } from "contexts/AuthContext";

export default function LoginPage() {
    const { manageSession, manageGuestSession } = useAuth();

    const mainVariant = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const variants = {
        show: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -200 },
    };

    return (
        <Main>
            <Content variants={mainVariant} initial="hidden" animate="show">
                <Link to="/">
                    <Logo src={logo} alt="MovieZone Logo" variants={variants} />
                </Link>
                <H1 variants={variants}>
                    Login with your <span>MovieDB</span> Account
                </H1>
                <Buttons>
                    <Button onClick={manageSession} variants={variants}>
                        Login
                    </Button>
                    <Sub onClick={manageGuestSession} variants={variants}>
                        Browse as Guest
                    </Sub>
                </Buttons>
            </Content>
            <BG
                src={bg}
                alt="Background Photo"
            />
        </Main>
    );
}
