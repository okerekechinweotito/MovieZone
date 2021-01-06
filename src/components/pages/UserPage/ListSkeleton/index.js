import React from 'react';
import { Wrapper } from './styles';
import SliderSkeleton from "components/Skeleton/SliderSkeleton";

export default function ListSkeleton() {
    return (
        <Wrapper>
            <SliderSkeleton />
            <SliderSkeleton />
            <SliderSkeleton />
        </Wrapper>
    );
}
