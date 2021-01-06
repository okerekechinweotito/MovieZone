import axios from "axios";
import useSWR from "swr";
import API from "api/moviedb.instance";

export default function useHomeData() {
    const getFeatured = API.get("movie/now_playing"),
        getPopularMovies = API.get("movie/popular"),
        getTrendingMovies = API.get("trending/movie/day"),
        getPopularTV = API.get("tv/popular"),
        getTopRatedTV = API.get("tv/top_rated");

    const requests = [
        getFeatured,
        getPopularMovies,
        getTrendingMovies,
        getPopularTV,
        getTopRatedTV,
    ];

    const random = Math.floor(Math.random() * 12);

    const fetcher = () =>
        axios
            .all(requests)
            .then(
                axios.spread((...responses) => ({
                    featured: responses[0].data.results.slice(
                        random,
                        random + 5
                    ),
                    popularMovies: responses[1].data.results,
                    trendingMovies: responses[2].data.results,
                    popularTV: responses[3].data.results,
                    topRatedTV: responses[4].data.results,
                }))
            )
            .catch((err) => {
                return err;
            });

    const { data, error } = useSWR(`/api/home`, fetcher);

    return {
        isLoading: !error && !data,
        data,
        hasError: error,
    };
}
