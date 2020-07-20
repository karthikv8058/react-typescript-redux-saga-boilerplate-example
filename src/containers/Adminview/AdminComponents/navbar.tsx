import React from 'react';

import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import profile_pic from '../assets/img/img_avatar.png';
import '../assets/scss/style.scss';



const handleOnNavClick = (e:any) => {
  
}

const Navbar = (props:any) => {
    return (
        <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input className="form-control mr-sm-2 rounded-pill bg-search border-0" type="search" placeholder="Search" aria-label="Search"/>
        </form>
        <div>
          <div className="d-inline-block nav border-black border-right px-3 relative" onClick={(e)=>{handleOnNavClick(e)}}>
            <span>
              <i className="fas fa-bell pr-1"></i>
              Notifications
            </span>
            <div className="nav-drop-menu">
                <ul className="list-unstyled">
                  <li><a href="">Profile</a></li>
                  <li><a href="">Forgot Password  ?</a></li>
                  <li><a href="">Settings</a></li>
                </ul>
            </div>
          </div>
          <div className="d-inline-block nav border-black border-right px-3 relative" onClick={(e)=>{handleOnNavClick(e)}}>
            <span>
              <i className="fas fa-bell pr-1"></i>
              Notifications
            </span>
            <div className="nav-drop-menu">
                <ul className="list-unstyled">
                  <li><a href="">Profile</a></li>
                  <li><a href="">Forgot Password  ?</a></li>
                  <li><a href="">Settings</a></li>
                </ul>
            </div>
          </div>
          <div className="d-inline-block nav relative" onClick={(e)=>{handleOnNavClick(e)}}>
            <span className="px-3">{props.loginStatus&&'Admin'}</span>
            <img src={profile_pic} className="img-fluid rounded-circle" width={25} height={25} alt=""/>
            <div className="nav-drop-menu">
                <ul className="list-unstyled">
                  <li><a href="">Profile</a></li>
                  <li><a href="">Forgot Password  ?</a></li>
                  <li><a href="">Settings</a></li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
    )
}

const mapStateToProps: any = (state: any) => {
    return {
      loginStatus:state.loginReducer.loginStatus,
    };
  };
  
  export default connect(
    mapStateToProps)(withRouter(Navbar));
