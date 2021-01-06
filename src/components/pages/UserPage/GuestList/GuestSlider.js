import React from "react";
import Slider from "components/Slider";
import { useAuth } from "contexts/AuthContext";

export default function GuestSlider() {
    const { state: AuthState } = useAuth();
    const { guestMedia } = AuthState;

    return (
        <>
            <Slider
                type="movie"
                title="Rated Movies"
                movies={guestMedia.ratedMovies.results}
                total={guestMedia.ratedMovies.total_results}
                profile
            />
            <Slider
                type="tv"
                title="Rated TV Shows"
                movies={guestMedia.ratedTV.results}
                total={guestMedia.ratedTV.total_results}
                profile
            />
        </>
    );
}
