import React, { useState, useEffect } from "react";

import Collection from "./Collection";
import useGenre from "hooks/useGenre";
import PageSkeleton from "./PageSkeleton";

export default function GenreList({ match, history }) {
    const { id, genre, type } = match.params;
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, hasError } = useGenre(pageCount, id, type);

    useEffect(() => {
        if (hasError) {
            history.push("/");
        }
    }, [hasError,history]);

    if (isLoading) return <PageSkeleton />;

    return (
        <Collection
            movies={data.results}
            title={`${genre} ${type === "movie" ? "Movies" : "TV Shows"}`}
            pageCount={pageCount}
            setPageCount={setPageCount}
            type={type}
            pageLimit={data.total_pages}
        />
    );
}
