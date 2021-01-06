import React from "react";
import Slider from "components/Slider";
import { useAuth } from "contexts/AuthContext";

export default function UserSlider({ current }) {
    const { state: AuthState } = useAuth();
    const { userMedia } = AuthState;
    
    return (
        <>
            <Slider
                type={current === "Movies" ? "movie" : "tv"}
                title="Favorites"
                movies={userMedia[`favorite${current}`].results}
                total={userMedia[`favorite${current}`].total_results}
                profile
            />
            <Slider
                type={current === "Movies" ? "movie" : "tv"}
                title="WatchList"
                movies={userMedia[`watchList${current}`].results}
                total={userMedia[`watchList${current}`].total_results}
                profile
            />
            <Slider
                type={current === "Movies" ? "movie" : "tv"}
                title="Rated"
                movies={userMedia[`rated${current}`].results}
                total={userMedia[`rated${current}`].total_results}
                profile
            />
        </>
    );
}
