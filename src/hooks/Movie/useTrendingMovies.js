import useSWR from "swr";
import API from 'api/moviedb.instance'

export default function useTrendingMovies(page = 1) {
    const config = {
        params: {
            page,
        },
    };

    const fetcher = () =>
        API.get("trending/movie/day", config).then((res) => res.data);

    const { data, error } = useSWR(`/api/trending/${page}`, fetcher);

    return {
        data: data,
        isLoading: !data && !error,
        hasError: error,
        
    };
}
