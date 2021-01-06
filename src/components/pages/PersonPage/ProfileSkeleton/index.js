import React from "react";
import {
    FeaturedLoader as Container,
    FeaturedBottom,
    SampleTags,
    SampleDesc,
    SamplePoster,
    SampleTitle,
    Content,
} from "./styles";
import CardSkeleton from "./CardsSkeleton";

export default function FeaturedLoader() {
    return (
        <>
            <Container>
                <FeaturedBottom>
                    <Content>
                        <SampleTitle />
                        <SampleTags />
                        <SampleDesc />
                    </Content>
                    <SamplePoster />
                </FeaturedBottom>
            </Container>
            <CardSkeleton />
        </>
    );
}
