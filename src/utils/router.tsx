import React from "react";
import { MemoryRouter, BrowserRouter, Route, Switch } from "react-router-dom";

import Newitems from "../Containers/Newitems";
import EmailVerification from "../Containers/EmailVerification";
import SecuredRoute from "./authentication";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/validate/user/:token" component={EmailVerification} />
        {/* <SecuredRoute path="/admin" component={Adminview} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
