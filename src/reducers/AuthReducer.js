import actionTypes from "ActionTypes";

export default function AuthReducer(state, action) {
    switch (action.type) {
        case actionTypes.RETRIEVE_TOKEN:
            // if there was a previous session

            return state;
        case actionTypes.RETRIEVE_SESSION:
            const retrievedSession = JSON.parse(
                localStorage.getItem("session")
            );
            const retrievedToken = JSON.parse(localStorage.getItem("token"));
            // if there was a previous session

            return {
                ...state,
                token: retrievedToken,
                session: retrievedSession,
            };
        case actionTypes.SAVE_TOKEN:
            localStorage.setItem("token", JSON.stringify(action.token));
            return { ...state, token: action.token };
        case actionTypes.SAVE_SESSION:
            localStorage.setItem("session", JSON.stringify(action.session));
            return { ...state, session: action.session };
        case actionTypes.GET_USER:
            return {
                ...state,
                user: action.user,
            };
        case actionTypes.GET_USER_MEDIA:
            return {
                ...state,
                userMedia: action.media,
                isLoggedIn: true,
            };
        case actionTypes.GET_GUEST_MEDIA:
            return {
                ...state,
                guestMedia: action.media,
            };
        case actionTypes.LOGOUT:
            localStorage.clear();
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                userMedia: null,
                guestSession:null,
                guestMedia:null
            };
        case actionTypes.SAVE_GUEST_SESSION:
            localStorage.setItem("guestSession", JSON.stringify(action.guest));
            return { ...state, guestSession: action.guest };
        default:
            return state;
    }
}
