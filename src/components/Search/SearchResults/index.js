import React from "react";
import { Results, Title, SubTitle } from "./styles";
import SearchCard from "components/Search/SearchCard";

export default function SearchResults({ media, isShowing }) {
    const { movies, tvShows } = media;

    const noResults = movies.length === 0 && tvShows.length === 0;

    const movieList = (
        <ul>
            <Title>Movies</Title>
            {movies.map((item) => (
                <SearchCard key={item.id} details={item} type="movie" />
            ))}
        </ul>
    );

    const tvShowList = (
        <ul>
            <Title>TV Shows</Title>
            {tvShows.map((item) => (
                <SearchCard key={item.id} details={item} type="tv" />
            ))}
        </ul>
    );

    return (
        <Results isShowing={isShowing} isEmpty={noResults}>
            {movies.length ? movieList : null}
            {tvShows.length ? tvShowList : null}
            {noResults && <SubTitle>No Results</SubTitle>}
        </Results>
    );
}
