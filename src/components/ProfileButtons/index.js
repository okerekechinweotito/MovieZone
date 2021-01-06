import React, { useState, useEffect } from "react";

import Icon from "components/shared/Icon";
import getIcon from "util/getIcon";
import { MovieButton, ButtonHolder } from "./styles";
import API from "api/moviedb.instance";
import { useAuth } from "contexts/AuthContext";
import Alert from "components/shared/Alert";

export default function ProfileButtons({ openTrailer, id, type }) {
    const media = type === "movie" ? "Movies" : "TV";
    const { state: AuthState } = useAuth();
    const { user, session, userMedia } = AuthState;
    const [isFavorite, setIsFavorite] = useState(false);
    const [isListed, setIsListed] = useState(false);
    const [isDisplayed, setIsDisplayed] = useState({
        display: false,
        message: "",
    });

    const config = {
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        params: {
            session_id: session?.session_id,
        },
    };

    const favoriteBody = {
        media_type: type,
        media_id: id,
        favorite: !isFavorite,
    };
    const listBody = {
        media_type: type,
        media_id: id,
        watchlist: !isListed,
    };

    useEffect(() => {
        const favorites = userMedia 
        && userMedia[`favorite${media}`].results.map((item) => item.id);
        const wannaWatch = userMedia 
        && userMedia[`watchList${media}`].results.map((item) => item.id);
        setIsFavorite(favorites?.includes(id));
        setIsListed(wannaWatch?.includes(id));
    }, [userMedia, id, media]);

    const markAsFavorite = () => {
        if (user) {
            API.post(`account/${user.id}/favorite`, favoriteBody, config).then(
                () => {
                    setIsFavorite(!isFavorite);
                }
            );
        } else {
            setIsDisplayed({
                display: true,
                message: "Try signing in!",
            });
            setTimeout(
                () =>
                    setIsDisplayed({
                        display: false,
                        message: "",
                    }),
                2000
            );
        }
    };

    const markAsListed = () => {
        if (user) {
            API.post(`account/${user.id}/watchlist`, listBody, config).then(
                () => {
                    setIsListed(!isListed);
                }
            );
        } else {
            setIsDisplayed({
                display: true,
                message: "Try signing in!",
            });
            setTimeout(
                () =>
                    setIsDisplayed({
                        display: false,
                        message: "",
                    }),
                2000
            );
        }
    };

    return (
        <>
            <ButtonHolder
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -200 }}
            >
                <MovieButton onClick={markAsFavorite}>
                    <Icon>
                        <use
                            href={getIcon(
                                isFavorite ? "bookmark" : "bookmark-add"
                            )}
                        />
                    </Icon>
                    {isFavorite ? "Added" : "Add"} to Favorites
                </MovieButton>
                <MovieButton onClick={markAsListed}>
                    <Icon>
                        <use href={getIcon(isListed ? "listed" : "list-add")} />
                    </Icon>
                    {isListed ? "Added" : "Add"} to Watchlist
                </MovieButton>
                <MovieButton onClick={openTrailer}>
                    <Icon>
                        <use href={getIcon("play")} />
                    </Icon>
                    Watch Trailer
                </MovieButton>
            </ButtonHolder>
            <Alert isDisplayed={isDisplayed.display} user={user}>
                {isDisplayed.message}
            </Alert>
        </>
    );
}
