import React, { useState } from "react";

import Collection from "./Collection";
import useTodayTV from "hooks/TV/useTodayTV";
import PageSkeleton from "./PageSkeleton";
import ErrorPage from 'components/pages/NotFoundPage';

export default function TodayTVList({ history }) {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, hasError } = useTodayTV(pageCount);

    if (isLoading) return <PageSkeleton />;

    if (hasError) {
        history.push(`/error/${hasError}`);
        return <ErrorPage />;
    }

    return (
        <Collection
            movies={data.results}
            title="Airing Today TV Shows"
            pageCount={pageCount}
            setPageCount={setPageCount}
            type="tv"
            pageLimit={data.total_pages}
        />
    );
}
