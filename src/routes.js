import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import Municipios from './components/Municipios';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/municipios/:id" component={Municipios} />
        </Switch>
    </BrowserRouter>
);

export default Routes;

