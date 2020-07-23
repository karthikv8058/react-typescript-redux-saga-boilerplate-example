import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Adminview from '../Containers/Adminview';
import Loginview from '../Containers/Loginview';
import SecuredRoute from './authentication';

const Routes = () => {
 return (
   <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Loginview} />
          <SecuredRoute path="/admin" component={Adminview} />
      </Switch>
   </BrowserRouter>
 );
}

export default Routes;