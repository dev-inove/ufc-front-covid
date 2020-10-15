import React from "react";
import ReactDOM from "react-dom";
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
