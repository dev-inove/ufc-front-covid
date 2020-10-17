import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./App";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Login from "./pages/Login/Login";
// import Admin from "./pages/Admin/AdminPages";

import Routes from "./routes/routes";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
