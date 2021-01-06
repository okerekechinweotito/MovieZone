import React from 'react';
import { ReviewBody, SampleReview } from './styles';

export default function CardsSkeleton(){
    return (
        <ReviewBody>
            <SampleReview/>
            <SampleReview/>
        </ReviewBody>
    )
}