import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { setUrlConfig } from "./slices/appGlobalSlice.js";
import "./App.scss";
import { customAxios } from "./external/customAxios.js";

fetch("/config.json")
  .then((response) => {
    return response.json();
  })
  .then((config) => {
    customAxios.defaults.baseURL = config.apiEndpoint;
    store.dispatch(setUrlConfig(config));
  })
  .then(() => {
    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    );
  });
