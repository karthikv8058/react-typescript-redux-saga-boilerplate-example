import React from 'react';

import {
  Link,
} from "react-router-dom";

import profile_pic from '../../assets/img/img_avatar.png';
import '../../assets/css/sb-admin-2.min.css';
import '../../assets/css/all.css';
import '../../assets/scss/style.scss';

const Sidebar = (props:any) => {

    const onLinkClick = (e:any) => {
      console.log('Log Current :',e.target);
      
      var items = document.getElementsByClassName('link-text') as HTMLCollectionOf<HTMLElement>;
      console.log('items :' ,items);
      for (var i=0; i < items.length; i++) {
        items[i].style.color = 'green';
      }
      e.target.style.color='blue';
      

    }

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
                   
                    <Link to="/admin" className="d-inline-block w-100 font-weight-bold link-text" onClick={(e)=> {onLinkClick(e)} }>
                            <i className="fas fa-users d-inline-block mr-2 text-dark"></i>
                            Dashboard
                          </Link>
                  </li>
                  <li className="my-2 my-md-3">
                    
                    <Link to="/admin/userlist" className="d-inline-block w-100 font-weight-bold link-text" onClick={(e)=> {onLinkClick(e)} }>
                            <i className="fas fa-users d-inline-block mr-2 text-dark"></i>
                            User list
                          </Link>
                  

                  </li>
                  <li className="my-2 my-md-3">
                    

                    <Link to="/admin/amouletlist" className="d-inline-block w-100 font-weight-bold link-text" onClick={(e)=> {onLinkClick(e)} }>
                            <i className="fas fa-gem d-inline-block mr-2 text-dark"></i>
                            Amoulet list
                          </Link>

                  </li>
                  <li className="my-2 my-md-3">
                          <Link to="/admin/adddescriptions" className="d-inline-block w-100 font-weight-bold link-text" onClick={(e)=> {onLinkClick(e)} }>
                            <i className="fas fa-file-alt d-inline-block mr-2 text-dark"></i>
                            Add Descriptions
                          </Link>
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
