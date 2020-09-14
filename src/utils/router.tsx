import React from "react";
import { MemoryRouter, BrowserRouter, Route, Switch } from "react-router-dom";

import Adminview from "../Containers/Adminview";
import Loginview from "../Containers/Loginview";
import SecuredRoute from "./authentication";

const Routes = () => {
  return (
    <MemoryRouter>
      <Switch>
        <Route exact path="/" component={Loginview} />
        <SecuredRoute path="/admin" component={Adminview} />
      </Switch>
    </MemoryRouter>
  );
};

export default Routes;
