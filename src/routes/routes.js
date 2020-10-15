import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Importar as páginas
import Home from "../App";
import Login from "../pages/Login/Login";
import Action from "../pages/Action/";
import ListAction from "../pages/ListActions/index";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/action" component={Action} />
        <Route path="/list-action" component={ListAction} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
