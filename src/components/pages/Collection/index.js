import React from "react";

import MovieCard from "components/MovieCard";
import Pagination from "./Pagination";
import { Wrapper, CollectionContainer as Container, Title } from "./styles";
import Empty from "components/EmptyPlaceholder";
import { motion } from "framer-motion";

export default function Collection({
    movies,
    title,
    setPageCount,
    pageCount,
    type,
    pageLimit,
}) {
    document.title = `MovieZone - ${title}`;

    const mainVariant = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };
    const itemVariant = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    return (
        <>
            <Wrapper>
                <div>
                    <Title
                        variants={itemVariant}
                        initial="hidden"
                        animate="show"
                    >
                        {title}
                    </Title>
                    {movies.length ? (
                        <Container
                            variants={mainVariant}
                            initial="hidden"
                            animate="show"
                        >
                            {movies.map((item) => (
                                <motion.div variants={itemVariant} style={{width:'100%'}}>
                                    <MovieCard
                                        movie={item}
                                        key={item.id}
                                        type={type}
                                        mediaType={item.media_type}
                                    />
                                </motion.div>
                            ))}
                        </Container>
                    ) : (
                        <Empty title={"No Media Found"} />
                    )}
                </div>
            </Wrapper>
            <Pagination
                setPageCount={setPageCount}
                pageCount={pageCount}
                pageLimit={pageLimit}
                length={movies.length}
            />
        </>
    );
}
