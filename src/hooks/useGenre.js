import useSWR from "swr";
import API from "api/moviedb.instance";

export default function useGenre(page = 1, id, type) {
    const config = {
        params: { with_genres: id, page },
    };
    const fetcher = () =>
        API.get(`discover/${type}`, config).then((res) => res.data);
    const { data, error } = useSWR(`/api/${type}/genre/${id}/${page}`, fetcher);
    return {
        data,
        isLoading: !data && !error,
        hasError: error,
    };
}
