import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

import Featured from "./Featured";

SwiperCore.use([Autoplay]);

export default function FeaturedSlider({ movies }) {
    return (
        <Swiper
            autoplay={{
                delay: 5000,
                disableOnInteraction: true,
            }}
            loop
            grabCursor
        >
            {movies?.map((movie) => (
                <SwiperSlide key={movie.id}>
                    <Featured featured={movie} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
