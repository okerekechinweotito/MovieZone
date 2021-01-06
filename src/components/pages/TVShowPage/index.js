import React, { useEffect } from "react";

import TVProfile from "./TVProfile";
import CastSlider from "components/CastSlider";
import Seasons from "./Seasons";
import Reviews from "components/Reviews";
import Recommendations from "components/Recommendations";
import useTVData from "hooks/useMediaData";
import TVSkeleton from "components/pages/TVShowPage/TVSkeleton";

const TYPE = "tv";
export default function TVShow({ match, history }) {
    const { id } = match.params;
    const { data, isLoading, hasError } = useTVData(TYPE, id);

    useEffect(() => {
        if (hasError) {
            history.push("/error");
        }
    }, [hasError,history]);

    if (isLoading) {
        return <TVSkeleton />;
    }

    return (
        <>
            <TVProfile details={data.details} trailers={data.trailers} />
            <CastSlider casts={data.casts} />
            <Seasons seasons={data.details.seasons}/>
            <Reviews reviews={data.reviews} />
            <Recommendations results={data.recommendations} type="tv" />
        </>
    );
}
