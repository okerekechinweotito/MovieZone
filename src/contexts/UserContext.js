import React, { createContext } from "react";

const UserContext = createContext();

export const UserProvider = (props) => {
    return <UserContext.Provider value={{}} {...props} />;
};

export const useUser = () => React.useContext(UserContext);
