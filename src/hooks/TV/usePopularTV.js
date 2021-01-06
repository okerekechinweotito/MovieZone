import useSWR from "swr";
import API from "api/moviedb.instance";

export default function usePopularTV(page = 1) {
    const config = {
        params: {
            page,
        },
    };

    const fetcher = () => API.get("tv/popular", config).then((res) => res.data);

    const { data, error } = useSWR(`/api/popular/tv/${page}`, fetcher);

    return {
        data,
        isLoading: !data && !error,
        hasError: error,
    };
}
