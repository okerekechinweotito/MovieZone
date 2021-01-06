import React from "react";
import { Link } from "react-router-dom";

import { Card, Poster, Title, Role, Overview, Content, Sub } from "./styles";
import cutText from "util/cutText";

export default function PersonMediaCard({ details }) {
    return (
        <Link to={`/${details.media_type}/${details.id}`}>
            <Card>
                {details.poster_path ? (
                    <Poster
                        src={`https://image.tmdb.org/t/p/w200/${details.poster_path}`}
                        alt={details.title || details.original_title}
                    />
                ) : <Sub>No Poster</Sub>}
                <Content>
                    <Title>
                        {details.name || details.original_name || details.title}
                    </Title>
                    <Role>
                        Popularity:
                        <span>{Number(details.popularity).toFixed(2)}</span>
                    </Role>
                    <Role>
                        Role:
                        <span>
                            {details.character
                                ? details.character
                                : "Not Found"}
                        </span>
                    </Role>
                    <Overview>
                        {details.overview
                            ? cutText(details.overview, 300)
                            : "No Summary Found"}
                    </Overview>
                </Content>
            </Card>
        </Link>
    );
}
