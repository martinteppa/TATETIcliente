import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

axios.defaults.baseURL = "http://127.0.0.1:8000/tateti/";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
