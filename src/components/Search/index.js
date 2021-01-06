import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import {
    SearchForm,
    FieldContainer as SearchField,
    SearchInput,
    SearchIcon,
    SearchLoader,
} from "./styles";
import SearchResults from "./SearchResults";
import getIcon from "util/getIcon";
import useSearch from "hooks/useSearch";

const loaderBody = (
    <>
        <div />
        <div />
        <div />
        <div />
    </>
);

export default function Search() {
    const history = useHistory();
    const location = useLocation();
    const [query, setQuery] = useState("");
    const [isShowing, setIsShowing] = useState(false);
    const { data, isLoading } = useSearch(query);

    useEffect(() => {
        window.scrollTo(0,0,);
        setQuery("");
    }, [location.pathname]);

    const handleChange = (e) => setQuery(e.target.value);

    const showResults = () => setIsShowing(true);

    const hideResults = () => {
        setIsShowing(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query !== "") {
            history.push(`/search/${query}`);
            setQuery("");
        }
    };

    const initial = { opacity: 0, y:-100 };
    const animate = { opacity: 1, y:0 };
    const transition = { delay: 2 };

    return (
        <SearchForm
            onMouseLeave={hideResults}
            onMouseEnter={showResults}
            onSubmit={handleSubmit}
            initial={initial}
            animate={animate}
            transition={transition}
        >
            <SearchField>
                <SearchInput
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={handleChange}
                    onKeyDown={showResults}
                    onFocus={showResults}
                />
                <SearchIcon>
                    <use href={getIcon("search")} />
                </SearchIcon>
                {isLoading && query ? (
                    <SearchLoader>{loaderBody}</SearchLoader>
                ) : null}
            </SearchField>
            {(data.movies || data.tvShows) && (
                <SearchResults media={data} isShowing={isShowing} />
            )}
        </SearchForm>
    );
}
