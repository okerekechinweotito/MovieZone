import React, { useState } from "react";

import GenrePill from "components/GenrePill";
import Trailer from "components/Trailer";
import Icon from "components/shared/Icon";
import getIcon from "util/getIcon";
import getRuntime from "util/getRuntime";
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
    Overview,
    ShowTitle,
} from "./styles";
import ProfileButtons from "components/ProfileButtons";
import Rating from "components/Rating";

export default function MovieProfile({ details, trailers }) {
    const TYPE = "movie";
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
                            animate={animate}
                            initial={initial}
                        />
                    )}
                    <Content animate={animate} initial={initial}>
                        <ShowTitle>
                            {details.name || details.original_title}
                            <Rating type="movie" id={details.id} />
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
                                        ? `${details.vote_average}.0`
                                        : details.vote_average}
                                </span>
                            </Stat>
                            <Stat>
                                <Icon>
                                    <use href={getIcon("calendar")} />
                                </Icon>
                                Release Date:
                                <span>
                                    {convertDate(
                                        details.release_date ||
                                            details.first_air_date
                                    )}
                                </span>
                            </Stat>
                            <Stat>
                                <Icon>
                                    <use href={getIcon("timer")} />
                                </Icon>
                                Runtime:
                                <span>{getRuntime(details.runtime)}</span>
                            </Stat>
                        </Stats>
                        <Overview textLength={details.overview.length}>
                            {details.overview || "No summary found"}
                        </Overview>
                        <ProfileButtons
                            openTrailer={handleClick}
                            id={details.id}
                            type="movie"
                        />
                    </Content>
                </ProfileContainer>
            </Profile>
        </>
    );
}
