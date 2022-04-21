import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/EditProfile/styles.css";
import App from "./components/App";
import store from "./redux/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
