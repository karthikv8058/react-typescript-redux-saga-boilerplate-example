import React, { FunctionComponent,useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
// import {adminStates} from './types';
import Button from '../../Components/Button';

import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { Collapse, CardBody,UncontrolledCollapse,Card } from 'reactstrap';

import profile_pic from './assets/img/img_avatar.png';
import './assets/css/sb-admin-2.min.css';
import './assets/css/all.css';
import './assets/scss/style.scss';

import Dashborad from './AdminComponents/dashboard';
import Navbar from './AdminComponents/navbar';
import Userlist from './AdminComponents/userlist';
import userlist from './AdminComponents/userlist';


const Adminview  = (props:any) =>{

  const [isOpen, setIsOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isUserlistOpen, setIsUserlistOpen] = useState(false);

  const handleUserlist = () => {
    setIsUserlistOpen(true);
    setIsDashboardOpen(false);
  }

  const handleDashboard = () => {
    setIsDashboardOpen(true);
    setIsUserlistOpen(false);
  }

  const dispatch = useDispatch();


  const { match } = props;
  window.history.pushState(null, document.title, window.location.href);
  window.addEventListener('popstate', function (event){
     window.history.pushState(null, document.title,  window.location.href);
  });

  useEffect (()=>{
    setIsDashboardOpen(!isDashboardOpen);
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
                  <li className="my-2 my-md-3" onClick={handleDashboard}>
                    <span className="block text-decoration-none text-dark font-weight-bolder w-100">
                      <i className="fas fa-tachometer-alt"></i>
                      <span className={isDashboardOpen?"ml-3 text-theme":"ml-3"}>Dashboard</span>
                    </span>
                  </li>
                  <li className="my-2 my-md-3" onClick={handleUserlist}>
                    <span className="block text-decoration-none text-dark font-weight-bolder w-100">
                    <i className="fas fa-users"></i>
                      <span className={isUserlistOpen?"ml-3 text-theme":"ml-3"}>User list</span>
                    </span>
                  </li>
                  <li className="my-2 my-md-3">
                    <span className="block text-decoration-none text-dark font-weight-bolder w-100">
                    <i className="fas fa-gem"></i>
                      <span className="ml-3">Amoulet list</span>
                    </span>
                  </li>
                  <li className="my-2 my-md-3">
                    <span className="block text-decoration-none text-dark font-weight-bolder w-100">
                    <i className="fas fa-book-reader"></i>
                      <span className="ml-3">Stories</span>
                    </span>
                  </li>
                  {/* <i class="fas fa-book-reader"></i> */}
                </ul>
          </div>
          <div className="d-flex flex-column admin-view w-100 p-3">
              
              <Navbar />
              <div className="w-100 mt-3">
              {
                isDashboardOpen&&<Dashborad/>
              }
              {
                isUserlistOpen&&<Userlist/>
              }
              
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



