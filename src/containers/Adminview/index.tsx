import React, { useEffect } from 'react';
import { connect } from 'react-redux';

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



const Adminview  = (props:any) => {

  window.history.pushState(null, document.title, window.location.href);
  window.addEventListener('popstate', function (event){
     window.history.pushState(null, document.title,  window.location.href);
  });

  useEffect (()=>{
    
  },[]);


    return(
      
        <div className="d-flex" style={{height:'100vh'}}>

          <div className="bg-white admin-menu">
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
  };
};

export default connect(
  mapStateToProps)(withRouter(Adminview));



