import useSWR from "swr";
import API from "api/moviedb.instance";

export default function usePopularMovies(page = 1) {
    const config = {
        params: {
            page,
        },
    };

    const fetcher = () =>
        API.get("movie/popular", config).then((res) => res.data);

    const { data, error } = useSWR(`/api/popular/movie/${page}`, fetcher);

    return {
        data,
        isLoading: !data && !error,
        hasError: error,
    };
}
