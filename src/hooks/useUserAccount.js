import useSWR from "swr";
import API from "../api/moviedb.instance";

export default function useUserAccount(session) {
    const config = {
        params: {
            session_id: session?.session_id,
        },
    };
    const detailsFetcher = () =>
        API.get("account", config).then((res) => res.data);

    const { data, error } = useSWR(
        session ? `api/account/` : null,
        detailsFetcher
    );

    return {
        isLoading: !data && !error,
        data,
        hasError: error,
    };
}
