import React, { useEffect } from "react";

import FeaturedSlider from "./FeaturedSlider";
import Slider from "components/Slider";
import useHomeData from "hooks/useHomeData";
import HomeSkeleton from "components/pages/HomePage/HomeSkeleton";

export default function Home({ history }) {
    const { data, isLoading, hasError } = useHomeData();
    document.title = "MovieZone - Search for Movies and TV Shows";

    useEffect(() => {
        if (hasError) {
            history.push("/");
        }
    }, [hasError, history]);

    if (isLoading) return <HomeSkeleton />;

    return (
        <>
            <FeaturedSlider movies={data.featured} />
            <Slider title="Popular" movies={data.popularMovies} type="movie" />
            <Slider
                title="Trending"
                movies={data.trendingMovies}
                type="movie"
            />
            <Slider title="Popular Shows" movies={data.popularTV} type="tv" />
            <Slider
                title="Top Rated Shows"
                movies={data.topRatedTV}
                type="tv"
            />
        </>
    );
}
