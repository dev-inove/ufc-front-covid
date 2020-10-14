import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importar as páginas
import Login from '../pages/Login/Login';
import Action from '../components/Necessities/NecessityPage'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path='/action' component={Action} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;