import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import GenrePill from "components/GenrePill";
import useGenreList from "hooks/useGenreList";
import cutText from "util/cutText";
import {
    FeaturedStyle,
    BGWrapper,
    BG,
    FeaturedContainer,
    Content,
    Description,
    FeaturedButton,
    Cover,
    Genres,
} from "./styles";

export default function Featured({ featured }) {
    const { data: genreNames } = useGenreList();

    const initial = { opacity: 0, x: 100 };
    const animate = { opacity: 1, x: 0 };

    /* 
        GETS THE GENRE FOR THE NAME BASED ON THE ID
    */
    const genreList =
        genreNames &&
        featured.genre_ids.map((id) => {
            let genreName, itemId;
            genreNames.genres.forEach((item) => {
                if (item.id === id) {
                    genreName = item.name;
                    itemId = item.id;
                }
            });
            return (
                <GenrePill
                    key={itemId + String(Math.random() * 2)}
                    genre={genreName}
                    id={itemId}
                    type="movie"
                />
            );
        });

    return (
        <div>
            <FeaturedStyle>
                <BGWrapper>
                    <BG
                        src={`https://image.tmdb.org/t/p/original/${featured.backdrop_path}`}
                        alt={featured.name || featured.original_title}
                    />
                </BGWrapper>
                <FeaturedContainer>
                    <Content>
                        <motion.h2 initial={initial} animate={animate}>{`${
                            featured.name || featured.original_title
                        } (${featured.release_date
                            ?.split("")
                            .slice(0, 4)
                            .join("")})`}</motion.h2>
                        <Genres initial={initial} animate={animate}>
                            {genreList}
                        </Genres>
                        <Description initial={initial} animate={animate}>
                            {featured.overview
                                ? cutText(featured.overview, 300)
                                : "No summary found"}
                        </Description>
                        <Link to={`/movie/${featured.id}`}>
                            <FeaturedButton initial={{opacity:0}} animate={{opacity:1}}>
                                See More
                            </FeaturedButton>
                        </Link>
                    </Content>
                    <Cover>
                        <Link to={`/movie/${featured.id}`}>
                            <motion.img
                                src={`https://image.tmdb.org/t/p/w200/${featured.poster_path}`}
                                alt={featured.original_title + "poster"}
                                initial={initial}
                                animate={animate}
                            />
                        </Link>
                    </Cover>
                </FeaturedContainer>
            </FeaturedStyle>
        </div>
    );
}
