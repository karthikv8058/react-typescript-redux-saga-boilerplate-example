import React from 'react';

import {
  Link,
} from "react-router-dom";

import profile_pic from '../../assets/img/img_avatar.png';
import '../../assets/css/sb-admin-2.min.css';
import '../../assets/css/all.css';
import '../../assets/scss/style.scss';

const Sidebar = (props:any) => {
    return (
        <div>
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
                  {/* <li className="my-2 my-md-3">
                    <span className="block text-decoration-none text-dark font-weight-bolder w-100">
                    <i className="fas fa-book-reader"></i>
                      <span  className="ml-3 text-theme">
                          <Link to="/admin/stories">Stories</Link>
                      </span>
                    </span>
                  </li> */}
                
                </ul>
        </div>
    )
}

export default Sidebar;
