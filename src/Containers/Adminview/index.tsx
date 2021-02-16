import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";

import { Switch, Route, Link, withRouter, useHistory } from "react-router-dom";

import profile_pic from "./assets/img/img_avatar.png";
import "./assets/css/sb-admin-2.min.css";
import "./assets/css/all.css";
import "./assets/scss/style.scss";

import Navbartop from "./AdminComponents/Navbar/navbar";
import Sidebar from "./AdminComponents/Sidebar";
import Loader from "../../Components/Loader";

import { routes } from "./Routes";
import { logoutAllTabsEventListener } from "../../utils/logOutAll";
import axios from "axios";
import IdleTimer from "react-idle-timer";

import { refreshTokenRequestAction } from "../Loginview/action";

const Adminview = (props: any) => {
  const dispatch = useDispatch();

  const history = useHistory();
  let idleRef: any = null;

  const onAction = (e: any) => {
    // console.log("user did something", e);
  };

  const onActive = (e: any) => {
    // console.log("user is active", e);
    // console.log("time remaining", this.idleTimer.getRemainingTime());
  };

  const onIdle = (e: any) => {
    console.log("user is idle", e);
    console.log("last active", idleRef);
    history.push("/");
  };
  // useEffect(()=>{
  //   logoutAllTabsEventListener();
  // },[]);

  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isMenuBarActive, setIsMenuBarActive] = useState(false);

  window.history.pushState(null, document.title, window.location.href);
  window.addEventListener("popstate", function (event) {
    window.history.pushState(null, document.title, window.location.href);
  });

  const handleMenu = () => {
    setIsMenuActive(!isMenuActive);
    setIsMenuBarActive(!isMenuBarActive);
  };

  useEffect(() => {
    logoutAllTabsEventListener();
  }, []);

  return (
    <div className="d-flex relative" style={{ height: "100vh" }}>
      <IdleTimer
        ref={(ref) => {
          idleRef = ref;
        }}
        element={document}
        onActive={onActive}
        onIdle={onIdle}
        onAction={onAction}
        debounce={0}
        timeout={1000 * 60 * 30}
      />
      {(props.isloading || props.isloadingOrderDetailsReducer) && (
        <Loader color="text-primary" />
      )}
      <div
        className={
          isMenuActive ? "bg-white admin-menu active" : "bg-white admin-menu"
        }
      >
        <Sidebar />
      </div>
      <div className="d-flex flex-column admin-view w-100 p-3">
        <div className="d-flex justify-content-end bg-white py-2 rounded-lg shadow-sm">
          <div className="mr-auto">
            <div
              className={isMenuActive ? "menu active" : "menu"}
              onClick={handleMenu}
            >
              <span className="menu-bar"></span>
            </div>
          </div>

          <Navbartop />
        </div>

        <div className="w-100 pt-3">
          <Switch>
            {routes.map((route: any, index: any) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps: any = (state: any) => {
  return {
    loginStatus: state.loginReducer.loginStatus,
    refreshToken: state.loginReducer.refreshToken,
    isloading: state.adminReducer.isloading,
    isloadingOrderDetailsReducer: state.orderDetailsReducer.isloading,
    expiresIn: state.loginReducer.expiresIn,
  };
};

export default connect(mapStateToProps)(withRouter(Adminview));
