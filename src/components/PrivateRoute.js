import React from "react";
import { Route } from "react-router-dom";
import { useAuth } from "contexts/AuthContext";
import LoginPage from "components/pages/LoginPage";

export default function PrivateRoute({ component, ...options }) {
    const { state: AuthState } = useAuth();
    const { user, guestSession } = AuthState;

    const finalComponent = user || guestSession ? component : LoginPage;

    return <Route {...options} component={finalComponent} />;
}
