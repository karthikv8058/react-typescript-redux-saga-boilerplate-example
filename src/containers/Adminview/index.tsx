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
import {
  refreshTokenRequestAction,
} from '../Loginview/action';

let loginDay=new Date();

const Adminview  = (props:any) => {

  console.log('PROPS FROM REDUCER IN ADMIN PAGE:',props.accessDateTime,props);
  

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

  loginDay = new Date(props.accessDateTime);
  
  console.log('OUTER TIMER DATE TIME:',props.accessDateTime);

  const startTime = () => {

    console.log('INNER TIMER DATE TIME:',props.accessDateTime);
    // const loginDay = new Date(props.accessDateTime)
    const loginH = new Date(loginDay).getHours();
    const loginM = new Date(loginDay).getMinutes();
    const loginS = new Date(loginDay).getSeconds();
      
    const loginTime = (loginH * 3600) + (loginM * 60) + loginS;
    // const loginTime = new Date(loginDay).getTime()/1000;
    const expireTime = props.expiresIn;

    const newRequestTime = ( loginTime + expireTime ) -520;
    

    // console.log('props.accessDateTime:',new Date(props.accessDateTime));
    
    
    const today = new Date();
    const h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();
    
    const CurrentTime = (h * 3600) + (m * 60) + s;
    // const CurrentTime = new Date().getTime()/1000;


    console.log('totalTimeInSeconds :',CurrentTime,loginTime,newRequestTime);

    

    if(CurrentTime == newRequestTime){

      console.log('Expired !');

      let params:object = {
        'refresh_token':props.refreshToken,
        'grant_type' : 'refresh_token'
      }

      dispatch(refreshTokenRequestAction(params));
      
    }else{
      console.log('Waiting !');
    }
    
    let t = setTimeout(function() {
      startTime()
    }, 1000);

  }

  useEffect(()=>{
    logoutAllTabsEventListener();
    startTime();
    // loginDay = new Date(props.accessDateTime);
  },[]);



    return(
      
        <div className="d-flex" style={{height:'100vh'}}>

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
    expiresIn:state.loginReducer.expiresIn,
    accessDateTime:state.loginReducer.accessDateTime,
  };
};

export default connect(
  mapStateToProps)(withRouter(Adminview));



