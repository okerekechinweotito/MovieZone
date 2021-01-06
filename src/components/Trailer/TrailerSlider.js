// Import Swiper React components
import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination]);

export default function TrailerSlider({ videos }) {
    return (
        <Swiper
            spaceBetween={10}
            navigation
            pagination
            draggable="true"
            grabCursor="true"
        >
            {videos.map((video) => (
                <SwiperSlide key={video.key}>
                    <iframe
                        src={`https://www.youtube.com/embed/${video.key}`}
                        frameBorder="0"   
                        title={video.name}
                        allowFullScreen                     
                    ></iframe>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
