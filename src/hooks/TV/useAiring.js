import useSWR from "swr";
import API from "api/moviedb.instance";

export default function useAiring(page = 1) {
    const config = {
        params: {
            page,
        },
    };

    const fetcher = () =>
        API.get("tv/on_the_air", config).then((res) => res.data);

    const { data, error } = useSWR(`/api/airing/tv/${page}`, fetcher);

    return {
        data,
        isLoading: !data && !error,
        hasError: error,
    };
}
