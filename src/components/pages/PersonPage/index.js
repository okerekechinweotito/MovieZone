import React, { useEffect } from "react";

import PersonProfile from "./PersonProfile";
import PersonMedia from "./PersonMedia";
import ProfileSkeleton from "./ProfileSkeleton";
import usePerson from "hooks/usePerson";

export default function Person({ match, history }) {
    const { id } = match.params;
    const { data, isLoading, hasError } = usePerson(id);

    useEffect(() => {
        if (hasError) {
            history.push("/");
        }
    }, [hasError,history]);

    if (isLoading) return <ProfileSkeleton />;

    return (
        <>
            <PersonProfile details={data.details} bg={data.media} />
            <PersonMedia media={data.media} />
        </>
    );
}
