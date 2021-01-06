import axios from "axios";
import useSWR from "swr";
import API from "api/moviedb.instance";

export default function useUserMedia(session, userData) {
    const mediaConfig = {
        params: {
            session_id: session?.session_id,
            sort_by: "created_at.desc",
        },
    };
    const getFavoriteMovies =
            userData &&
            API.get(`account/${userData?.id}/favorite/movies`, mediaConfig),
        getFavoriteTV =
            userData &&
            API.get(`account/${userData?.id}/favorite/tv`, mediaConfig),
        getRatedMovies =
            userData &&
            API.get(`account/${userData?.id}/rated/movies`, mediaConfig),
        getRatedTV =
            userData &&
            API.get(`account/${userData?.id}/rated/tv`, mediaConfig),
        getWatchListMovie =
            userData &&
            API.get(`account/${userData?.id}/watchlist/movies`, mediaConfig),
        getWatchListTV =
            userData &&
            API.get(`account/${userData?.id}/watchlist/tv`, mediaConfig);

    const requests = [
        getFavoriteMovies,
        getFavoriteTV,
        getRatedMovies,
        getRatedTV,
        getWatchListMovie,
        getWatchListTV,
    ];

    const mediaFetcher = async () => {
        const requestResponse = await axios.all(requests);
        return {
            favoriteMovies: requestResponse[0].data,
            favoriteTV: requestResponse[1].data,
            ratedMovies: requestResponse[2].data,
            ratedTV: requestResponse[3].data,
            watchListMovies: requestResponse[4].data,
            watchListTV: requestResponse[5].data,
        };
    };

    const { data, error } = useSWR(
        userData ? `api/user/media` : null,
        mediaFetcher
    );

    return {
        data,
        isLoading: !data && !error,
        hasError: error,
    };
}
