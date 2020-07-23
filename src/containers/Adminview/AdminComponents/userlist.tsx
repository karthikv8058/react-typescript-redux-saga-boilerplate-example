import React, {useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  userListRequestAction,
  genConfigRequestAction
} from '../action'

const Userlist = (props:any) => {

  const dispatch = useDispatch();

  let params:object = {
    accessToken:props.loginReducer.accessToken,
    tokenType:props.loginReducer.tokenType
  }

    useEffect(()=>{
      dispatch(userListRequestAction(params));
      dispatch(genConfigRequestAction(params));;
      
    },[]);

    return (
        <section className="userlist p-0">
                  <div>
                      <h3>{props.title}</h3>
                  </div>
                  <div className="table-responsive">
                      <table className="table table-bordered">
                          <thead>
                            <tr className="bg-theme text-white">
                              <th>User Name</th>
                              <th>Email</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Profile Image</th>
                            </tr>
                          </thead>
                          <tbody>
                          {
                            props.userList.length > 0 ? props.userList.map((item:any)=>{
                              return   <tr key={item.id}>
                                  <td> {item.username}</td>
                                  <td> {item.email}</td>
                                  <td> {item.firstName}</td>
                                  <td> {item.lastName}</td>
                                  <td> 
                                      <img src={props.profileImages+item.profileImage} width={50} height={50} alt="Profile Pic"/>
                                  </td>
                              </tr>
                            }) :
                            
                            <tr>
                              <td colSpan={6}>
                              <span className="d-block text-center">No data</span>
                              </td>
                            </tr>
                           
                          }
                         </tbody>
                      </table>
                  </div>
             </section>
    )
}

const mapStateToProps: any = (state: any) => {
  return {
    loginReducer:state.loginReducer,
    accessToken:state.loginReducer.accessToken,
    tokenType:state.loginReducer.tokenType,
    loginStatus:state.loginReducer.loginStatus,
    userList:state.adminReducer.userList,
    profileImages:state.adminReducer.profileImages,
  };
};

export default connect(
  mapStateToProps)(withRouter(Userlist));

