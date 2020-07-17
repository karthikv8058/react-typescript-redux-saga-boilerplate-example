import React, { FunctionComponent,useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {itemStates} from './types';
import { addItems } from './action';
import Button from '../../Components/Button';

import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { Collapse, CardBody,UncontrolledCollapse,Card } from 'reactstrap';

import profile_pic from './assets/img/img_avatar.png';
import './assets/css/sb-admin-2.min.css';
import './assets/css/all.css';
import './assets/scss/style.scss';


const Adminview  = (props:any) =>{

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleOnclick = (event:any) => {
    event.stopPropagation();
    console.log('Events :',event.target);
    
  }

  const dispatch = useDispatch();


  const { match } = props;
  window.history.pushState(null, document.title, window.location.href);
  window.addEventListener('popstate', function (event){
     window.history.pushState(null, document.title,  window.location.href);
  });


    return(
        <div className="d-flex" style={{height:'100vh'}}>
          <div className="bg-white p-3 admin-menu">
                <ul className="list-unstyled m-0">
                  <li className="mb-2 mb-md-5">
                    <a href="" className="d-block text-decoration-none text-dark text-center font-weight-bolder">
                      <div className="text-center">
                        <img src={profile_pic} className="img-fluid mx-auto rounded-circle" width={'50%'} alt=""/>
                        <h5 className="text-dark font-weight-bolder mb-0 pb-0 mt-1">Welcome Username</h5>
                        <span className="text-muted small">Super Admin</span>
                      </div>
                    </a>
                  </li>
                  <li className="my-2 my-md-3">
                    <span id="toggler1" onClick={(event)=>{handleOnclick(event)}} style={{zIndex:5}}  
                    className={isOpen?'drop-menu active d-block text-decoration-none text-dark font-weight-bolder w-100':'drop-menu d-block text-decoration-none text-dark font-weight-bolder w-100'}>
                      <i className="fas fa-tachometer-alt"></i>
                      <span className="ml-3">Dashboard</span>
                    </span>
                    <UncontrolledCollapse toggler="#toggler1">
                      <Card>
                        <CardBody>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                          similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                          dignissimos esse fuga! Minus, alias.
                        </CardBody>
                      </Card>
                    </UncontrolledCollapse>
                    
                  </li>
                  <li className="my-2 my-md-3">
                    <span id="toggler2"  
                    className={isOpen?'drop-menu active d-block text-decoration-none text-dark font-weight-bolder w-100':'drop-menu d-block text-decoration-none text-dark font-weight-bolder w-100'}>
                      <i className="fas fa-tachometer-alt"></i>
                      <span className="ml-3">Dashboard</span>
                    </span>
                    <UncontrolledCollapse toggler="#toggler2">
                      <Card>
                        <CardBody>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                          similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                          dignissimos esse fuga! Minus, alias.
                        </CardBody>
                      </Card>
                    </UncontrolledCollapse>
                    
                  </li>
                </ul>
          </div>
          <div className="d-flex flex-column admin-view w-100 p-3">
          <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
              <input className="form-control mr-sm-2 rounded-pill bg-search border-0" type="search" placeholder="Search" aria-label="Search"/>
            </form>
            <div>
              <div className="d-inline-block border-black border-right px-3">
                <span>sdsa</span>
              </div>
              <div className="d-inline-block">
                <span className="px-3">Username</span>
                <img src={profile_pic} className="img-fluid rounded-circle" width={25} height={25} alt=""/>
              </div>
            </div>
          </nav>
          <div className="w-100 mt-3">
              <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Earnings (Monthly)</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Earnings (ANNUAL)</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-rupee-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">452</div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-tasks fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Pending requests</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">80</div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
                </div>
                
              </div>
              <div className="row">
                
              </div>
          </div>
          </div>
        </div>
    );
}

const mapStateToProps: any = (state: any) => {
  return {
      
  };
};

export default connect(
  mapStateToProps)(withRouter(Adminview));



