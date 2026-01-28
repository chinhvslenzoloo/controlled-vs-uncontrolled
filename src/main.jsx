import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";



import { store } from "./app/store";
import { Provider } from "react-redux"

ReactDom.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);