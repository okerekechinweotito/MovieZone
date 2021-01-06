import React, { useState } from "react";

import Collection from "./Collection";
import useSearch from "hooks/useSearch";
import PageSkeleton from "./PageSkeleton";
import ErrorPage from "components/pages/NotFoundPage";

export default function SearchPageResult({ match, history }) {
    const { query } = match.params;
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, hasError, pageLimit } = useSearch(
        query,
        pageCount
    );

    if (isLoading) return <PageSkeleton />;

    if (hasError) {
        history.push(`/error/${hasError}`);
        return <ErrorPage />;
    }

    return (
        <Collection
            movies={[...data.movies, ...data.tvShows]}
            title={`Search Results for ${query}`}
            pageCount={pageCount}
            setPageCount={setPageCount}
            pageLimit={pageLimit.total_pages}
        />
    );
}
