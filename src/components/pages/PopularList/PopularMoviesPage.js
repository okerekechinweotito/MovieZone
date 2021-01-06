import React, { useState } from "react";

import Collection from "../Collection";
import usePopularMovies from "hooks/Movie/usePopularMovies";
import PageSkeleton from "../PageSkeleton";
import ErrorPage from 'components/pages/NotFoundPage';


export default function PopularTV({ history }) {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, hasError } = usePopularMovies(pageCount);

    if (isLoading) return <PageSkeleton />;

    if (hasError) {
        history.push(`/error/${hasError}`);
        return <ErrorPage />;
    }

    return (
        <Collection
            movies={data.results}
            title="Popular Movies"
            pageCount={pageCount}
            setPageCount={setPageCount}
            type="movie"
            pageLimit={data.total_pages}
        />
    );
}
