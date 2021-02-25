import React from "react";
import "./style.scss";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MyActions from "./MyActions/MyActions";
const AdminPages = () => (
  <>
    <div class="admin-pages">
      <Router>
        <Sidebar />
        {/* <Header /> */}
        <Switch>
          <Route path="/cadastrar" exact component={MyActions} />
        </Switch>
      </Router>
    </div>
  </>
);

export default AdminPages;
