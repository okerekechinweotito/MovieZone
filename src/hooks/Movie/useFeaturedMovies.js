import useSWR from "swr";
import API from "api/moviedb.instance";

export default function useFeaturedMovies() {
    const fetcher = () => API.get("movie/now_playing").then((res) => res.data);
    const { data, error } = useSWR("/api/featured", fetcher);

    return {
        data,
        isLoading: !data && !error,
        hasError: error,
    };
}
