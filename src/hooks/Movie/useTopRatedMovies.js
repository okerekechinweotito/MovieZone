import useSWR from "swr";
import API from "api/moviedb.instance";

export default function useTopRatedMovies(page = 1) {
    const config = {
        params: {
            page,
        },
    };

    const fetcher = () =>
        API.get("movie/top_rated", config).then((res) => res.data);

    const { data, error } = useSWR(`/api/toprated/movie/${page}`, fetcher);

    return {
        data: data,
        isLoading: !data && !error,
        hasError: error,
    };
}
