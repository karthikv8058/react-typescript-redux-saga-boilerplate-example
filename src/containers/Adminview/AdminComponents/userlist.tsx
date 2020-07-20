import React, {useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import {
  userListRequestAction,
  genConfigRequestAction
} from '../action'

const Userlist = (props:any) => {

  console.log('Props from userlist :',props);
  

  const dispatch = useDispatch();

  let params:object = {
    accessToken:props.accessToken,
    tokenType:props.tokenType
  }

    useEffect(()=>{
      dispatch(userListRequestAction(params));
      dispatch(genConfigRequestAction(params));
    },[]);

    return (
        <section className="userlist p-0">
                  <div>
                      <table className="table table-bordered">
                          <tr className="bg-theme text-white">
                            <th>User Name</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Profile Image</th>
                          </tr>
                         
                          {
                            props.userList.length > 0 && props.userList.map((item:any)=>{
                              return   <tr key={item.id}>
                                  <td> {item.username}</td>
                                  <td> {item.email}</td>
                                  <td> {item.firstName}</td>
                                  <td> {item.lastName}</td>
                                  <td> 
                                    {/* {item.profileImage} */}
                                      <img src={props.profileImages+item.profileImage} width={50} height={50} alt="No Image"/>
                                      {
                                        console.log('img path:',props.profileImages+item.profileImage)
                                        
                                      }
                                  </td>
                              </tr>
                            })
                          }
                         
                      </table>
                  </div>
             </section>
    )
}

const mapStateToProps: any = (state: any) => {
  return {
    accessToken:state.loginReducer.accessToken,
    tokenType:state.loginReducer.tokenType,
    userList:state.adminReducer.userList,
    profileImages:state.adminReducer.profileImages,
  };
};

export default connect(
  mapStateToProps)(withRouter(Userlist));

