import React, { useEffect,useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import {
  Switch,
  Route,
  Link,
  withRouter,

} from "react-router-dom";

import profile_pic from './assets/img/img_avatar.png';
import './assets/css/sb-admin-2.min.css';
import './assets/css/all.css';
import './assets/scss/style.scss';


import Navbartop from './AdminComponents/navbar';
import {routes} from './Routes';
import { logoutAllTabsEventListener } from '../../utils/logOutAll';
import axios from 'axios';

import {refreshTokenRequestAction} from '../Loginview/action';


const Adminview  = (props:any) => {  

  const dispatch = useDispatch();

  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isMenuBarActive, setIsMenuBarActive] = useState(false);

  window.history.pushState(null, document.title, window.location.href);
  window.addEventListener('popstate', function (event){
     window.history.pushState(null, document.title,  window.location.href);
  });

  const handleMenu = () => {
    setIsMenuActive(!isMenuActive);
    setIsMenuBarActive(!isMenuBarActive);
  }


  useEffect(()=>{
    
    logoutAllTabsEventListener();

  },[]);

    return(
      
        <div className="d-flex relative" style={{height:'100vh'}}>
           {
             props.isloading&&
              <div className="loader-waiting d-flex justify-content-center">
                  <div className="spinner-border text-info align-self-center" role="status">
                  </div>
              </div>
           }
          <div className={isMenuActive?"bg-white admin-menu active":"bg-white admin-menu"}>
                <ul className="list-unstyled m-0">
                  <li className="mb-2 mb-md-5">
                    <a href="" className="d-block text-decoration-none text-dark text-center font-weight-bolder">
                      <div className="text-center">
                        <img src={profile_pic} className="img-fluid mx-auto rounded-circle" width={'50%'} alt=""/>
                        <h5 className="text-dark font-weight-bolder mb-0 pb-0 mt-1">Welcome {props.loginStatus&&'Admin'}</h5>
                        <span className="text-muted small">Super Admin</span>
                      </div>
                    </a>
                  </li>
                  <li className="my-2 my-md-3">
                    <span className="block text-decoration-none text-dark font-weight-bolder w-100">
                      <i className="fas fa-tachometer-alt"></i>
                      <span  className="ml-3 text-theme">
                          <Link to="/admin">Dashboard</Link>
                      </span>
                    </span>
                  </li>
                  <li className="my-2 my-md-3">
                    <span className="block text-decoration-none text-dark font-weight-bolder w-100">
                    <i className="fas fa-users"></i>
                      <span  className="ml-3 text-theme">
                          <Link to="/admin/userlist">User list</Link>
                      </span>
                    </span>
                  </li>
                  <li className="my-2 my-md-3">
                    <span className="block text-decoration-none text-dark font-weight-bolder w-100">
                    <i className="fas fa-gem"></i>
                      <span  className="ml-3 text-theme">
                          <Link to="/admin/amouletlist">Amoulet list</Link>
                      </span>
                    </span>
                  </li>
                  <li className="my-2 my-md-3">
                    <span className="block text-decoration-none text-dark font-weight-bolder w-100">
                    <i className="fas fa-book-reader"></i>
                      <span  className="ml-3 text-theme">
                          <Link to="/admin/stories">Stories</Link>
                      </span>
                    </span>
                  </li>
                
                </ul>
          </div>
          <div className="d-flex flex-column admin-view w-100 p-3">
              
              <div className="d-flex justify-content-end bg-white py-2 rounded-lg shadow-sm">
                  <div className="mr-auto">
                      <div className={isMenuActive?"menu active":"menu"} onClick={handleMenu}>
                        <span  className="menu-bar"></span>
                      </div>
                  </div>
                  <Navbartop />
              </div>
              
              <div className="w-100">
              
             
                  <Switch>
                  {routes.map((route:any, index:any) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      children={<route.sidebar/>}
                    />
                  ))}
                  </Switch>

              
              </div>
          </div>
          
        </div>
        
        
    );
}

const mapStateToProps: any = (state: any) => {
  return {
    loginStatus:state.loginReducer.loginStatus,
    refreshToken:state.loginReducer.refreshToken,
    isloading:state.adminReducer.isloading,
    expiresIn:state.loginReducer.expiresIn,
  };
};

export default connect(
  mapStateToProps)(withRouter(Adminview));



