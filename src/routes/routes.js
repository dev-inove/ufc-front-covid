import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Importar as páginas
import Home from "../App";
import Login from "../pages/Login/Login";
import Action from "../pages/Action/";
import ListAction from "../pages/ListActions/index";
import About from "../pages/Sobre/about";
import Adm from "../pages/Admin/AdminPages";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/action/:title" component={Action} />
        <Route path="/list-actions" component={ListAction} />
        <Route path="/about" component={About} />
        <Route path="/adm" component={Adm} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
