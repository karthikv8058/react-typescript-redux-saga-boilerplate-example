import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./utils/router";
import { useEffect } from "react";
import { logoutAllTabsEventListener } from "./utils/logOutAll";

function App() {
  return (
    <div className="w-100">
      <Routes />
    </div>
  );
}

export default App;
