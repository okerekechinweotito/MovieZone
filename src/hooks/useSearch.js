import useSWR from "swr";
import API from 'api/moviedb.instance'

export default function useSearch(query, page = 1) {
    const config = {
        params: {
            page,
            query
        },
    };

    const fetcher = () =>
        API.get("search/multi", config).then((res) => res.data);

    const { data, error } = useSWR(query ? `/api/search/${query}/${page}` : null, fetcher);

    const movies =
        data && data.results.filter((item) => item.media_type === "movie");
    const tvShows =
        data && data.results.filter((item) => item.media_type === "tv");

    return {
        data: { movies, tvShows },
        isLoading: !data && !error,
        hasError: error,
        pageLimit: data,
    };
}
