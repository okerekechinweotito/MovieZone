import React, { useEffect } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import { SliderContainer, SliderTitle, Holder } from "./styles";
import MovieCard from "components/MovieCard";
import Empty from "components/EmptyPlaceholder";

SwiperCore.use([Navigation]);

const BREAKPOINTS = {
    300: {
        slidesPerView: 2,
        spaceBetween: 10,
        freeMode: true,
    },
    450: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
    700: {
        slidesPerView: 4,
    },
    900: {
        slidesPerView: 5,
    },
    1000: {
        slidesPerView: 6,
    },
};

export default function Slider({ title, movies, type, profile, total }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <Holder>
            <SliderContainer
                ref={ref}
                initial={'hidden'}
                animate={controls}
                variants={variants}
            >
                <SliderTitle>
                    {title} {profile && (total ? `(${total})` : null)}
                </SliderTitle>
                {movies && movies.length ? (
                    <Swiper
                        spaceBetween={30}
                        navigation
                        breakpoints={BREAKPOINTS}
                        grabCursor
                    >
                        {movies.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <MovieCard movie={movie} type={type} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <Empty title="No Media Found" />
                )}
            </SliderContainer>
        </Holder>
    );
}
