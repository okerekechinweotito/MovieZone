import React, { useState, useEffect } from "react";
import {
    RatingWrapper,
    RatingForm,
    Rater,
    RaterLabel,
    RateIcon,
} from "./styles";
import getIcon from "util/getIcon";
import API from "api/moviedb.instance";
import { useAuth } from "contexts/AuthContext";
import Alert from "components/shared/Alert";

export default function Rating({ type, id }) {
    const { state: AuthState } = useAuth();
    const [rating, setRating] = useState(null);
    const [isDisplayed, setIsDisplayed] = useState({
        display: false,
        message: "",
    });
    const [hover, setHover] = useState(null);

    const displayMessage = (msg) => {
        setIsDisplayed({
            display: true,
            message: msg,
        });
        setTimeout(
            () =>
                setIsDisplayed({
                    display: false,
                    message: "",
                }),
            2000
        );
    };

    useEffect(() => {
        if (AuthState.user && AuthState.userMedia) {
            const ratedList = AuthState.userMedia[
                `rated${type === "tv" ? "TV" : "Movies"}`
            ].results.map((item) => ({ id: item.id, rating: item.rating }));
            ratedList.forEach((item) => {
                if (item.id === id) {
                    setRating(Math.floor(item.rating / 2));
                }
            });
        }
    }, [AuthState.userMedia, AuthState.user, id, type]);

    useEffect(() => {
        if (AuthState.guestSession && AuthState.guestMedia) {
            const key = `rated${type === "tv" ? "TV" : "Movies"}`;
            const ratedList = AuthState.guestMedia[key].results.map((item) => ({
                id: item.id,
                rating: item.rating,
            }));
            
            ratedList.forEach((item) => {
                if (item.id === id) {
                    setRating(Math.floor(item.rating / 2));
                }
            });
        }
    }, [AuthState.guestMedia, AuthState.guestSession, id, type]);

    const displayStars = (_, index) => {
        const ratingValue = index + 1;

        const submitRating = (e) => {
            if (AuthState.user && AuthState.userMedia) {
                setRating(ratingValue);
                API.post(
                    `/${type}/${id}/rating`,
                    {
                        value: ratingValue * 2,
                    },
                    {
                        params: {
                            session_id: AuthState.session.session_id,
                        },
                    }
                ).then(() => {
                    displayMessage("Successfully Reviewed!");
                });
            } else if (AuthState.guestSession) {
                setRating(ratingValue);
                API.post(
                    `/${type}/${id}/rating`,
                    {
                        value: ratingValue * 2,
                    },
                    {
                        params: {
                            guest_session_id:
                                AuthState.guestSession.guest_session_id,
                        },
                    }
                ).then(() => {
                    displayMessage("Successfully Reviewed!");
                });
            } else {
                displayMessage("Try Signing In");
            }
        };

        return (
            <RaterLabel key={index}>
                <Rater
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={submitRating}
                />
                <RateIcon
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                >
                    <use
                        href={getIcon(
                            ratingValue <= (hover || rating)
                                ? "star-full"
                                : "star-empty"
                        )}
                    />
                </RateIcon>
            </RaterLabel>
        );
    };

    return (
        <>
            <RatingWrapper>
                <RatingForm id="rating-form">
                    {[...Array(5)].map(displayStars)}
                </RatingForm>
            </RatingWrapper>
            <Alert
                isDisplayed={isDisplayed.display}
                user={AuthState.user || AuthState.guestSession}
            >
                {isDisplayed.message}
            </Alert>
        </>
    );
}
