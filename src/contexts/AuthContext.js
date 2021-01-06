import React, { createContext, useReducer, useEffect } from "react";
import AuthReducer from "reducers/AuthReducer";
import API from "api/moviedb.instance";
import actionTypes from "ActionTypes";
import useUser from "hooks/useUserAccount";
import useUserMedia from "hooks/useUserMedia";
import useGuestMedia from "hooks/useGuestMedia";

const getToken = () => {
    if (localStorage.getItem("token")) {
        return JSON.parse(localStorage.getItem("token"));
    }
    return null;
};
const getSession = () => {
    if (localStorage.getItem("session")) {
        return JSON.parse(localStorage.getItem("session"));
    }
    return null;
};
const getGuestSession = () => {
    if (localStorage.getItem("guestSession")) {
        return JSON.parse(localStorage.getItem("guestSession"));
    }
    return null;
};

const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(AuthReducer, {
        isLoggedIn: false,
        token: getToken(),
        session: getSession(),
        user: null,
        userMedia: null,
        guestSession: getGuestSession(),
        guestMedia: null,
    });
    const baseURL = window.location.origin;
    const { data: userData } = useUser(state.session);
    const { data: userMedia } = useUserMedia(state.session, state.user);
    const { data: guestMedia } = useGuestMedia(state.guestSession);

    // CHECK IF THERE IS TOKEN
    useEffect(() => {
        if (state.token && !state.session) {
            API.post("authentication/session/new", {
                request_token: state.token.request_token,
            }).then((res) => {
                if (res.data.success) {
                    dispatch({
                        type: actionTypes.SAVE_SESSION,
                        session: res.data,
                    });
                } else {
                    console.error("error token");
                }
            });
        }
    }, [state.token, state.session]);

    // GET THE USER

    useEffect(() => {
        if (state.session) {
            dispatch({ type: actionTypes.GET_USER, user: userData });
        }
    }, [userData, state.session]);
    // GET USER MEDIA
    useEffect(() => {
        if (state.user) {
            dispatch({ type: actionTypes.GET_USER_MEDIA, media: userMedia });
        }
    }, [state.user, state.session, userMedia]);
    // GET GUEST MEDIA
    useEffect(() => {
        if (state.guestSession) {
            dispatch({ type: actionTypes.GET_GUEST_MEDIA, media: guestMedia });
        }
    }, [state.guestSession, guestMedia]);

    const manageSession = async () => {
        const tokenData = await API.get("authentication/token/new");
        if (tokenData.data.success) {
            dispatch({
                type: actionTypes.SAVE_TOKEN,
                token: tokenData.data,
            });
            window.location
                .assign(`https://www.themoviedb.org/authenticate/${tokenData.data.request_token}?redirect_to=${baseURL}/
            `);
        } else {
            console.error("No Token ");
        }
    };

    const manageGuestSession = async () => {
        API.get(`/authentication/guest_session/new`)
            .then((res) => {
                if (res.data.success) {
                    dispatch({
                        type: actionTypes.SAVE_GUEST_SESSION,
                        guest: res.data,
                    });
                    window.location.assign("/profile");
                }
            })
            .catch((err) => console.error(err));
    };

    return (
        <AuthContext.Provider
            value={{ state, dispatch, manageSession, manageGuestSession }}
            {...props}
        />
    );
};

export const useAuth = () => React.useContext(AuthContext);
