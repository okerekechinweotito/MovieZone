import React from "react";
import { SWRConfig } from "swr";
import { UserProvider } from "./UserContext";
import { AuthProvider } from "./AuthContext";

export default function GlobalContextProvider({ children }) {
    return (
        <SWRConfig
            value={{ shouldRetryOnError: true, errorRetryInterval: 5000 }}
        >
            <AuthProvider>
                <UserProvider>{children}</UserProvider>
            </AuthProvider>
        </SWRConfig>
    );
}
