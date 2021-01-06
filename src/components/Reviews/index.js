import React from "react";

import ReviewCard from "./ReviewCard";
import Container from "components/shared/Container";
import { ReviewWrapper, Title } from "./styles";
import EmptyReview from "components/EmptyPlaceholder";

export default function Reviews({ reviews }) {


    return (
        <Container>
            <ReviewWrapper>
                <Title>Reviews</Title>
                {reviews.length ? (
                    reviews
                        .slice(0, 5)
                        .map((comment) => (
                            <ReviewCard details={comment} key={comment.id} />
                        ))
                ) : (
                    <EmptyReview title="No Reviews" />
                )}
            </ReviewWrapper>
        </Container>
    );
}
