import React from 'react'
import SliderSkeleton from 'components/pages/HomePage/SliderSkeleton';
import FeaturedSkeleton from 'components/pages/HomePage/FeaturedSlider/FeaturedSkeleton';

export default function HomeSkeleton() {
    return (
        <>
         <FeaturedSkeleton/>
         <SliderSkeleton/>   
         <SliderSkeleton/>   
         <SliderSkeleton/>   
         <SliderSkeleton/>   
        </>
    )
}
