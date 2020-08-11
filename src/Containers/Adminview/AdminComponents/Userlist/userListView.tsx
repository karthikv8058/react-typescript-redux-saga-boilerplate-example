import React, {useEffect, useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import {  withRouter,useHistory  } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import inArray from '../../../../Service';
import Swal from 'sweetalert2';
import {
  amouletCreateRequestAction,
  amouletGiverCodeRequestAction,
  amouletReceiverCodeRequestAction,
  amouletValidateRequestAction
} from './action'; 

import Avatar from '../../assets/img/img_avatar.png';


const UserListView = (props:any) => {    

    if(props.location.state !== undefined){
      localStorage.setItem('rowData',JSON.stringify(props.location.state.rowData)); 
    }

    var data:any = localStorage.getItem('rowData');
    var rowData= JSON.parse(data);
    var [username,email,firstname,lastname,profileImg,id] = rowData;
    
    const dispatch = useDispatch();
    const history = useHistory();

    let accessParams:object = {
      accessToken: props.accessToken,
      tokenType: props.tokenType,
      refresh_token:props.refreshToken,
    }

    useEffect(() => {
    },[]);

    return (
      <section className="create-amoulet p-0">
        <div>
            {/* <h3>{props.title}</h3> */}
        </div>
        <div className="mt-3 mt-md-5">
            <div className="list d-flex justify-content-center">
            <div className="w-50">
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-auto">
                          <div className="text-center">
                            <img src={profileImg?props.profileImages + profileImg:Avatar} alt="" width={150} className="img-thumbnail"/>
                              <h5 className="p-0 m-0 mt-2">{firstname +' '+ lastname}</h5>
                          </div>
                        </div>
                        <div className="col">
                            <div className="jumbotron h-100 py-3 px-4">
                               <div className="align-self-center">
                                  <div className="row mb-1">
                                    <div className="col-4">
                                      <h6 className="p-0">Username</h6>
                                    </div>
                                    <div className="col-8">
                                        <h6 className="p-0">{username}</h6>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-4">
                                      <h6 className="p-0">Email</h6>
                                    </div>
                                    <div className="col-8">
                                        <h6 className="p-0">{email}</h6>
                                    </div>
                                  </div>
                               </div>
                            </div>
                        </div>
                    </div>  
                </div>
              </div>
            </div>
            </div>
        </div>
      </section>
    )
}

const mapStateToProps: any = (state: any) => {
  return {
    accessToken: state.loginReducer.accessToken,
    tokenType: state.loginReducer.tokenType,
    profileImages:state.adminReducer.profileImages,
  };
};

export default connect(
  mapStateToProps)(withRouter(UserListView));

