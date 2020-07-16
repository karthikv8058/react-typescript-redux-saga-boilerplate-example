import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Newitems from '../Containers/Newitems';
import Adminview from '../Containers/Adminview';
import Loginview from '../Containers/Loginview';
// import history from './history';

const Routes = () => {
 return (
   <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Loginview} />
          <Route exact path="/items" component={Newitems} />
          <Route exact path="/admin" component={Adminview} />
      </Switch>
   </BrowserRouter>
 );
}

export default Routes;