import React,{ useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import MovieCard from "components/MovieCard";
import {
    RecommendationsMain,
    RecommendationsContainer as Container,
    Title,
} from "./styles";
import EmptyRecommendation from "components/EmptyPlaceholder";

export default function Recommendations({ results, type }) {
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
        <RecommendationsMain
            length={results.length}
            ref={ref}
            initial={"hidden"}
            animate={controls}
            variants={variants}
        >
            <Title>More Like This</Title>
            {results.length ? (
                <Container>
                    {results.slice(0, 12).map((item) => (
                        <MovieCard key={item.id} movie={item} type={type} />
                    ))}
                </Container>
            ) : (
                <EmptyRecommendation title="No Movie Recommendations" />
            )}
        </RecommendationsMain>
    );
}
