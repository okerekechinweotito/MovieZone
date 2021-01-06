import React,{ useEffect } from "react";

import useMovieData from 'hooks/useMediaData';
import MovieProfile from "./MovieProfile";
import CastSlider from "components/CastSlider";
import Reviews from "components/Reviews";
import Recommendations from "components/Recommendations";
import MovieSkeleton from "components/pages/MoviePage/MovieSkeleton"

const TYPE = "movie";
export default function Movie({ match,history }) {
    const { id } = match.params;
    const { data, isLoading, hasError } = useMovieData(TYPE,id);

    useEffect(() => {
        if(hasError){
            history.push('/error')
        }
    },[hasError,history])

    if(isLoading){
        return <MovieSkeleton/>
    }

    return (
        <>
            <MovieProfile details={data.details} trailers={data.trailers}/>
            <CastSlider casts={data.casts} />
            <Reviews reviews={data.reviews} />
            <Recommendations results={data.recommendations} type='movie' />
        </>
    );
}
