import React from "react";

import Profile from "components/Skeleton/ProfileSkeleton";
import Cast from "components/Skeleton/CastSliderSkeleton";
import Reviews from "components/Skeleton/ReviewSkeleton";
import Recommendations from "components/Skeleton/RecommendationSkeleton";

export default function MovieSkeleton() {
    return (
        <>
            <Profile />
            <Cast />
            <Reviews />
            <Recommendations />
        </>
    );
}
