import React from 'react';
import { ReviewBody, SampleReview } from './styles';

export default function ReviewSkeleton(){
    return (
        <ReviewBody>
            <SampleReview/>
            <SampleReview/>
        </ReviewBody>
    )
}