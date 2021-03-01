import React from "react";
import "./style.scss";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MyActions from "./MyActions/MyActions";
import MyActionsShow from "./MyActionsShow/MyActionsShow";
import MyCategory from "./MyCategories/index";

const AdminPages = () => (
  <>
    <div class="admin-pages">
      <Router>
        <Sidebar />
        {/* <Header /> */}
        <Switch>
          <Route path="/cadastrar_action" exact component={MyActions} />
          <Route path="/list_all_actions" exact component={MyActionsShow} />
          <Route path="/cadastrar_category" exact component={MyCategory} />
        </Switch>
      </Router>
    </div>
  </>
);

export default AdminPages;
