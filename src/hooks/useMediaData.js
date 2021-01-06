import axios from "axios";
import useSWR from "swr";
import API from "../api/moviedb.instance";

export default function useMediaData(type, id) {
    const getDetails = API.get(`${type}/${id}`),
          getCast = API.get(`${type}/${id}/credits`),
          getTrailer = API.get(`${type}/${id}/videos`),
          getRecommendations = API.get(`${type}/${id}/recommendations`),
          getReviews = API.get(`${type}/${id}/reviews`);

    const requests = [
        getDetails,
        getCast,
        getTrailer,
        getRecommendations,
        getReviews,
    ];

    const fetcher = () =>
        axios.all(requests).then(
            axios.spread((...responses) => ({
                details: responses[0].data,
                casts: responses[1].data.cast,
                trailers: responses[2].data.results,
                recommendations: responses[3].data.results,
                reviews: responses[4].data.results,
            }))
        );

    const { data, error } = useSWR(`/api/${type}/${id}`, fetcher);

    return {
        isLoading: !error && !data,
        data,
        hasError: error,
    };
}
