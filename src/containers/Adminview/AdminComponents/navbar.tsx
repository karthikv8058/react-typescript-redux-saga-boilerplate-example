import React from 'react';

import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import profile_pic from '../assets/img/img_avatar.png';

const Navbar = (props:any) => {
    return (
        <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input className="form-control mr-sm-2 rounded-pill bg-search border-0" type="search" placeholder="Search" aria-label="Search"/>
        </form>
        <div>
          <div className="d-inline-block border-black border-right px-3">
            <span>
            <i className="fas fa-bell pr-1"></i>
              Notifications
              </span>
          </div>
          <div className="d-inline-block">
            <span className="px-3">{props.loginStatus&&'Admin'}</span>
            <img src={profile_pic} className="img-fluid rounded-circle" width={25} height={25} alt=""/>
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
