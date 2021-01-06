import React, { useState } from "react";

import GenrePill from "components/GenrePill";
import Trailer from "components/Trailer";
import Icon from "components/shared/Icon";
import getIcon from "util/getIcon";
import convertDate from "util/convertDate";
import {
    Profile,
    ProfileContainer,
    Backdrop,
    Content,
    Genres,
    Stats,
    Stat,
    Poster,
    ShowTitle,
    Overview,
} from "./styles";
import ProfileButtons from "components/ProfileButtons";
import Rating from "components/Rating";

export default function TVProfile({ details, trailers }) {
    const TYPE = "tv";
    const [isTrailerOpen, setIsTrailerOpen] = useState(false);

    const handleClick = () => setIsTrailerOpen(true);

    document.title = `MovieZone - ${
        details.name ? details.name : details.title || details.original_title
    }`;

    const initial = { opacity: 0, x: -100 };
    const animate = { opacity: 1, x: 0 };

    return (
        <>
            <Trailer
                isOpen={isTrailerOpen}
                setIsTrailerOpen={setIsTrailerOpen}
                trailers={trailers}
            />

            <Profile>
                {details.backdrop_path && (
                    <Backdrop
                        src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
                        alt="backdrop"
                    />
                )}
                <ProfileContainer>
                    {details.poster_path && (
                        <Poster
                            src={`https://image.tmdb.org/t/p/w200/${details.poster_path}`}
                            alt="poster"
                            initial={initial}
                            animate={animate}
                        />
                    )}
                    <Content initial={initial} animate={animate}>
                        <ShowTitle>
                            {details.name
                                ? details.name
                                : details.original_title}
                            <Rating type="tv" id={details.id} />
                        </ShowTitle>
                        <Genres>
                            {details.genres?.map((genre) => (
                                <GenrePill
                                    key={genre.id}
                                    genre={genre.name}
                                    id={genre.id}
                                    type={TYPE}
                                />
                            ))}
                        </Genres>
                        <Stats>
                            <Stat>
                                <Icon>
                                    <use href={getIcon("star-full")} />
                                </Icon>
                                Popularity:
                                <span>
                                    {String(details.vote_average).length === 1
                                        ? details.vote_average + ".0"
                                        : details.vote_average}
                                </span>
                            </Stat>
                            <Stat>
                                <Icon>
                                    <use href={getIcon("calendar")} />
                                </Icon>
                                First Air Date:
                                <span>
                                    {convertDate(details.first_air_date) ??
                                        "Unknown"}
                                </span>
                            </Stat>
                            <Stat>
                                <Icon>
                                    <use href={getIcon("calendar")} />
                                </Icon>
                                Last Air Date:
                                <span>
                                    {convertDate(details.last_air_date) ??
                                        "Unknown"}
                                </span>
                            </Stat>
                            <Stat>
                                <Icon>
                                    <use href={getIcon("pen")} />
                                </Icon>
                                Creator:
                                <span>
                                    {details.created_by[0]
                                        ? details.created_by[0].name
                                        : "Unknown"}
                                </span>
                            </Stat>
                            <Stat>
                                <Icon>
                                    <use href={getIcon("film")} />
                                </Icon>
                                Episodes:
                                <span>{details.number_of_episodes}</span>
                            </Stat>
                            <Stat>
                                <Icon>
                                    <use href={getIcon("time")} />
                                </Icon>
                                Runtime:
                                <span>
                                    {details.episode_run_time.join("-")} min
                                </span>
                            </Stat>
                        </Stats>
                        <Overview textLength={details.overview.length}>
                            {details.overview
                                ? details.overview
                                : "No summary found"}
                        </Overview>
                        <ProfileButtons
                            openTrailer={handleClick}
                            id={details.id}
                            type="tv"
                        />
                    </Content>
                </ProfileContainer>
            </Profile>
        </>
    );
}
