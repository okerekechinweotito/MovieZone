import axios from "axios";
import useSWR from "swr";
import API from "../api/moviedb.instance";

// GETS UNIQUE OBJECTS BASED ON ID
function onlyUnique(arr) {
    const uniqueID = [];
    const unique = [];

    arr.forEach((item) => {
        if (!uniqueID.includes(item.id)) {
            unique.push(item);
            uniqueID.push(item.id);
        }
    });

    return unique;
}

export default function usePerson(id) {
    const getDetails = API.get(`/person/${id}`),
        getMedia = API.get(`person/${id}/combined_credits`);

    const requests = [getDetails, getMedia];

    const fetcher = () =>
        axios.all(requests).then(
            axios.spread((...responses) => ({
                details: responses[0].data,
                media: onlyUnique(responses[1].data.cast)
                    .sort((a, b) => b.popularity - a.popularity)
                    .slice(0, 10),
            }))
        );

    const { data, error } = useSWR(`/api/person/${id}`, fetcher);

    return {
        isLoading: !error && !data,
        data,
        hasError: error,
    };
}
