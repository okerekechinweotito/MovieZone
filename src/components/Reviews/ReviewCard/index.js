import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Card, Author, ReviewText } from "./styles";
import cutText from "util/cutText";

export default function ReviewCard({ details }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
    };

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.a
            href={details.url}
            target="_blank"
            rel="noopener noreferrer"
            ref={ref}
            initial={"hidden"}
            animate={controls}
            variants={variants}
        >
            <Card>
                <ReviewText>{cutText(details.content, 300)}</ReviewText>
                <Author>&ndash; {details.author}</Author>
            </Card>
        </motion.a>
    );
}
