import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

import App from "./App";
import { store } from "./redux/index";
import ServiceWorkerWrapper from "./serviceWorkerWrapper";

ReactDOM.render(
  <SnackbarProvider maxSnack={1}>
    <BrowserRouter>
      <Provider store={store}>
        <ServiceWorkerWrapper />
        <App />
      </Provider>
    </BrowserRouter>
  </SnackbarProvider>,

  document.getElementById("root")
);
