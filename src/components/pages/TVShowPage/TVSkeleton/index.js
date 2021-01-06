import React from "react";

import Profile from "components/Skeleton/ProfileSkeleton";
import Season from "components/Skeleton/SeasonSkeleton";
import Cast from "components/Skeleton/CastSliderSkeleton";
import Reviews from "components/Skeleton/ReviewSkeleton";
import Recommendations from "components/Skeleton/RecommendationSkeleton";

export default function MovieSkeleton() {
    return (
        <>
            <Profile />
            <Cast />
            <Season/>
            <Reviews />
            <Recommendations />
        </>
    );
}
