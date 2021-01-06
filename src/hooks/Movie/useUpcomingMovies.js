import useSWR from "swr";
import API from 'api/moviedb.instance';

export default function useUpcomingMovies(page = 1) {
    const config = {
        params: {
            page,
        },
    };

    const fetcher = () =>
        API.get("movie/upcoming", config).then((res) => res.data);

    const { data, error } = useSWR(`/api/upcoming/${page}`, fetcher);

    return {
        data: data,
        isLoading: !data && !error,
        hasError: error,
    };
}
