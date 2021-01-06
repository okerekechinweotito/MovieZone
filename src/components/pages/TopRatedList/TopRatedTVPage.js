import React, { useState } from "react";

import Collection from "../Collection";
import useTopRatedTV from "hooks/TV/useTopratedTV";
import PageSkeleton from "../PageSkeleton";
import ErrorPage from 'components/pages/NotFoundPage';

export default function TopRatedTV({ history }) {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, hasError } = useTopRatedTV(pageCount);

    if (isLoading) return <PageSkeleton />;

    if (hasError) {
        history.push(`/error/${hasError}`);
        return <ErrorPage />;
    }

    return (
        <Collection
            movies={data.results}
            title="Top Rated TV Shows"
            pageCount={pageCount}
            setPageCount={setPageCount}
            type="tv"
            pageLimit={data.total_pages}
        />
    );
}
