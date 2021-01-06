import React, { useState } from "react";

import { ChoiceHolder, MovieBtn, TVBtn } from "./styles";
import ListSkeleton from "../ListSkeleton";
import { useAuth } from "contexts/AuthContext";
import UserSlider from "./UserSlider";

export default function UserList() {
    const { state: AuthState } = useAuth();
    const { userMedia } = AuthState;
    const [current, setCurrent] = useState("Movies");
    const setToMovie = () => setCurrent("Movies");
    const setToTV = () => setCurrent("TV");

    if (!userMedia) return <ListSkeleton />;

    return (
        <>
            <ChoiceHolder>
                <MovieBtn current={current} onClick={setToMovie}>
                    Movie
                </MovieBtn>
                <TVBtn current={current} onClick={setToTV}>
                    TV Shows
                </TVBtn>
            </ChoiceHolder>

            <UserSlider current={current} />
        </>
    );
}
