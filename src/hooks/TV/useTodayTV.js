import useSWR from "swr";
import API from "api/moviedb.instance";

export default function useToday(page = 1) {
    const config = {
        params: {
            page,
        },
    };

    const fetcher = () =>
        API.get("tv/airing_today", config).then((res) => res.data);

    const { data, error } = useSWR(`/api/today/tv/${page}`, fetcher);

    return {
        data,
        isLoading: !data && !error,
        hasError: error,
    };
}
