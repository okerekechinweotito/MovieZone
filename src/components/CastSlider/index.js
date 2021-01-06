import React, { useEffect } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import CastCard from "./CastCard";
import { Title, CastContainer } from "./styles";
import EmptyCast from "components/EmptyPlaceholder";

SwiperCore.use([Navigation]);

const BREAKPOINTS = {
    300: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
    },
    450: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
    },
    700: {
        slidesPerView: 4,
        slidesPerGroup: 4,
    },
    900: {
        slidesPerView: 5,
    },
};

export default function CastSlider({ casts }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 200 },
    };

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <CastContainer
            ref={ref}
            initial={"hidden"}
            animate={controls}
            variants={variants}
        >
            <Title>Casts</Title>
            <Swiper
                slidesPerView={5}
                slidesPerGroup={5}
                spaceBetween={20}
                freeMode
                navigation
                grabCursor
                breakpoints={BREAKPOINTS}
            >
                {casts.length ? (
                    casts.slice(0, 20).map((cast) => (
                        <SwiperSlide key={cast.id}>
                            <CastCard person={cast} />
                        </SwiperSlide>
                    ))
                ) : (
                    <EmptyCast title="No Cast Data Found" />
                )}
            </Swiper>
        </CastContainer>
    );
}
