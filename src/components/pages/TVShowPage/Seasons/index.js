import React, { useEffect } from "react";
import SwiperCore, { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "swiper/swiper.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import SeasonCard from "./SeasonCard";
import { Wrapper, Title } from "./styles";

SwiperCore.use([Scrollbar]);

const BREAKPOINTS = {
    600: {
        slidesPerView: 2,
        slidesOffsetBefore: 50,
        slidesOffsetAfter: 50,
        loop: false,
    },
};

export default function Seasons({ seasons }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const variants = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -200 },
    };

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <Wrapper
            ref={ref}
            initial={"hidden"}
            animate={controls}
            variants={variants}
        >
            <Title>Seasons</Title>
            <Swiper
                slidesPerView={1}
                scrollbar={{ draggable: true }}
                slidesOffsetBefore="10"
                slidesOffsetAfter="10"
                breakpoints={BREAKPOINTS}
                grabCursor
                loop
            >
                {seasons.map((item) => (
                    <SwiperSlide key={item.id}>
                        <SeasonCard details={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Wrapper>
    );
}
