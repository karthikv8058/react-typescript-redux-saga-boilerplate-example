import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Router } from "react-router-dom";
import Newitems from '../Containers/Newitems/index';
import history from './history';

const Routes = () => {
 return (
   <Router history={history}>
      <Switch>
          <Route exact path="/" component={Newitems} />
      </Switch>
   </Router>
 );
}

export default Routes;