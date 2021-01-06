import React from "react";
import { Link } from "react-router-dom";

import { Card, Poster, Title,MiniPoster } from "./styles";
import cutText from "util/cutText";

export default function SearchCard({ details, type }) {
    return (
        <Link to={`/${type}/${details.id}`}>
            <Card>
                {details.poster_path ? <Poster
                    src={`https://image.tmdb.org/t/p/w200/${details.poster_path}`}
                    alt="poster"
                /> : <MiniPoster/>}
                <Title>{`${cutText(
                    details.title || details.original_title || details.name,
                    20
                )}`}</Title>
            </Card>
        </Link>
    );
}
