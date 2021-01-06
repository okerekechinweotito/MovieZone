import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Image, Main, Title } from "./styles";
import img from "assets/img/404.svg";
import Button from "components/shared/Button";

export default function NotFoundPage() {
    const location = useLocation();
    const history = useHistory();
    
    const handleClick = () => {
        history.push("/");
    };
    return (
        <Main>
            <Image src={img} alt="404 page" />
            <Title>
                {location.pathname.includes("error")
                    ? "Something Went Wrong"
                    : "Page Not Found"}
            </Title>
            <Button onClick={handleClick}>Go To Home</Button>
        </Main>
    );
}
