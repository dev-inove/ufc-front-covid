import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login/Login';
import Admin from './pages/Admin/AdminPages';



ReactDOM.render(
  <React.StrictMode>
            <BrowserRouter>
            <Switch>
              <Route path="/" exact={true} component={App} />
                <Route path="/login" component={Login} />
                <Route path="/adm" component={Admin} />
            </Switch>        
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


