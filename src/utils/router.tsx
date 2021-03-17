import React from "react";
import { MemoryRouter, BrowserRouter, Route, Switch } from "react-router-dom";

import Newitems from "../Containers/Newitems";
import SecuredRoute from "./authentication";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Newitems} />
        {/* <SecuredRoute path="/admin" component={Adminview} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
