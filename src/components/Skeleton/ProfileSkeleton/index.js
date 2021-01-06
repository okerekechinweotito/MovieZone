import React from "react";
import {
    FeaturedLoader as Container,
    FeaturedBottom,
    SampleTags,
    SampleDesc,
    SampleButton,
    SamplePoster,
    SampleTitle,
    Content,
} from "./styles";

export default function FeaturedLoader() {
    return (
        <>
            <Container>
                <FeaturedBottom>
                    <Content>
                        <SampleTitle />
                        <SampleTags />
                        <SampleDesc />
                        <SampleButton />
                    </Content>
                    <SamplePoster />
                </FeaturedBottom>
            </Container>
        </>
    );
}
