import React, { useState } from "react";

import Collection from "./Collection";
import useAiring from "hooks/TV/useAiring";
import PageSkeleton from "./PageSkeleton";
import ErrorPage from 'components/pages/NotFoundPage';

export default function AiringTVList({ history }) {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, hasError } = useAiring(pageCount);

    if (isLoading) return <PageSkeleton />;

    if (hasError) {
        history.push(`/error/${hasError}`);
        return <ErrorPage />;
    }

    return (
        <Collection
            movies={data.results}
            title="On Air TV Shows"
            pageCount={pageCount}
            setPageCount={setPageCount}
            type="tv"
            pageLimit={data.total_pages}
        />
    );
}
