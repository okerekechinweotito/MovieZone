import axios from "axios";
import useSWR from "swr";
import API from "api/moviedb.instance";

export default function useGuestMedia(guestSession) {
    const getRatedMovies =
            guestSession &&
            API.get(
                `/guest_session/${guestSession.guest_session_id}/rated/movies`
            ),
        getRatedTV =
            guestSession &&
            API.get(
                `/guest_session/${guestSession.guest_session_id}/rated/tv`
            );

    const requests = [getRatedMovies, getRatedTV];

    const fetcher = async () => {
        const requestResponse = await axios.all(requests);
        return {
            ratedMovies: requestResponse[0].data,
            ratedTV: requestResponse[1].data,
        };
    };

    const { data, error } = useSWR(
        guestSession ? `/api/guest` : null,
        fetcher
    );

    return {
        isLoading: !error && !data,
        data,
        hasError: error,
    };
}
