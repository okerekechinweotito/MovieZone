import React from "react";

import MediaCard from "./PersonMediaCard";
import { MediaHolder, Title, Wrapper } from "./styles";

export default function PersonMedia({ media }) {
    return (
        <Wrapper>
            <MediaHolder>
                <Title>Top Films and TV Shows</Title>

                {media.map((item) => (
                    <MediaCard key={item.id} details={item} />
                ))}
            </MediaHolder>
        </Wrapper>
    );
}
