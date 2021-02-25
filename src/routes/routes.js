import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Router from "./route";

//Importar as páginas
import Home from "../App";
import Login from "../pages/Login/Login";
import Action from "../pages/Action/";
import ListAction from "../pages/ListActions/index";
import About from "../pages/Sobre/about";
import Adm from "../pages/Admin/AdminPages";
import { AuthProvider } from "../hooks";
function Routes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Router path="/" component={Home} exact />
          <Router path="/login" component={Login} oneTime />
          <Router path="/action/:title" component={Action} />
          <Router path="/list-actions" component={ListAction} />
          <Router path="/about" component={About} />
          <Router path="/adm" component={Adm} isPrivate />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default Routes;
