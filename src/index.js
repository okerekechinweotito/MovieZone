import React from "react";
import ReactDOM from "react-dom";
import GlobalContextProvider from "./contexts/GlobalContext";

import App from "./App";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <GlobalContextProvider>
        <App />
    </GlobalContextProvider>,
    document.getElementById("root")
);


serviceWorker.register();