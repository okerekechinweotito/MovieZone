import useSWR from "swr";
import API from "api/moviedb.instance";

export default function useGenreList() {
    const fetcher = () => API.get("genre/movie/list").then((res) => res.data);
    const { data, error } = useSWR("/api/genrelist", fetcher);

    return {
        data,
        isLoading: !data && !error,
        hasError: error,
    };
}
