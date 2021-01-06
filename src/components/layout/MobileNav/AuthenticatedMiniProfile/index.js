import React from "react";
import { useHistory } from "react-router-dom";

import { Holder, Title, GoTo } from "./styles";
import { useAuth } from "contexts/AuthContext";
import actionTypes from "ActionTypes";

export default function MiniProfile() {
    const { state: AuthState, dispatch } = useAuth();
    const { user } = AuthState;

    const history = useHistory();

    const logoutUser = () => {
        dispatch({ type: actionTypes.LOGOUT });
        history.push("/");
    };

    const goToProfile = () => {
        history.push("/profile");
        window.location.reload();
    };

    return (
        <Holder>
            <Title>Profile</Title>
            <GoTo onClick={goToProfile}>{user ? user.username : "Guest"}</GoTo>
            <GoTo onClick={logoutUser}>Logout</GoTo>
        </Holder>
    );
}
