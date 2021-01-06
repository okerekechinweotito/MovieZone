import React from "react";
import {
    Card,
    CardPoster,
    CardContent,
    CardTitle,
    CardDesc,
    Item,
    Placeholder,
} from "./styles";
import convertDate from "util/convertDate";
import cutText from "util/cutText";

export default function SeasonCard({ details }) {
    return (
        <Card>
            {details.poster_path ? (
                <CardPoster
                    src={`https://image.tmdb.org/t/p/w200/${details.poster_path}`}
                    alt={details.name}
                />
            ) : (
                <Placeholder>No Poster</Placeholder>
            )}
            <CardContent>
                <CardTitle>{details.name}</CardTitle>
                <Item>
                    Air Date: <span>{convertDate(details.air_date)}</span>
                </Item>
                <Item>
                    Episodes: <span>{details.episode_count}</span>
                </Item>
                <CardDesc>{cutText(details.overview, 200)}</CardDesc>
            </CardContent>
        </Card>
    );
}
