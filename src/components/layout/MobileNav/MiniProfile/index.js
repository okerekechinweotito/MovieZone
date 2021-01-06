import React from "react";
import { Link } from "react-router-dom";
import { Holder, Title, GoTo } from "./styles";

export default function MiniProfile() {
    return (
        <Holder>
            <Title>Profile</Title>
            <Link to='/login'>
                <GoTo>Login</GoTo>
            </Link>
        </Holder>
    );
}
