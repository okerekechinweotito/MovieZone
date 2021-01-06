import React, { useState } from "react";

import Collection from "./Collection";
import useUpcomingMovies from "hooks/Movie/useUpcomingMovies";
import PageSkeleton from "./PageSkeleton";
import ErrorPage from 'components/pages/NotFoundPage';

export default function TrendingMoviesList({ history }) {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, hasError } = useUpcomingMovies(pageCount);

    if (isLoading) return <PageSkeleton />;

    if (hasError) {
        history.push(`/error/${hasError}`);
        return <ErrorPage />;
    }

    return (
        <Collection
            movies={data.results}
            title="Upcoming Movies"
            pageCount={pageCount}
            setPageCount={setPageCount}
            type="movie"
            pageLimit={data.total_pages}
        />
    );
}
