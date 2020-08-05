import React, {useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter,Link } from 'react-router-dom';
import MUIDataTable from "mui-datatables";

import {
  userListRequestAction,
  genConfigRequestAction
} from '../action';

const Userlist = (props:any) => {

  
  const data = props.userList;
  
  const dispatch = useDispatch();

  const columns = [
    {
     name: "username",
     label: "User Name",
    },
    {
      name: "email",
      label: "Email",
     },
     {
      name: "firstName",
      label: "First Name",
     },
     {
      name: "lastName",
      label: "Last Name",
     },
     {
      name: "id",
      label: "Actions",
        options: {
          customBodyRender: (value:any, tableMeta:any) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                to={`/user/${tableMeta.rowData[0]}`}
              >
               <i className="d-inline-block fas fa-eye fa-1x text-success"></i>
              </Link>
            );
          }
      }
    }];


  let params:object = {
    accessToken:props.accessToken,
    tokenType:props.tokenType,
    refresh_token:props.refreshToken,
  }
  

  useEffect(()=>{
    dispatch(userListRequestAction(params));
    dispatch(genConfigRequestAction(params));
  },[]);

   

    return (
        <section className="userlist p-0">
                  <div>
                      <h3>{props.title}</h3>
                  </div>

                  <MUIDataTable
                    title={"User List"}
                    data={data}
                    columns={columns}
                  />
                  
             </section>
    )
}

const mapStateToProps: any = (state: any) => {
  return {
    loginReducer:state.loginReducer,
    accessToken:state.loginReducer.accessToken,
    expiresIn:state.loginReducer.expiresIn,
    refreshToken:state.loginReducer.refreshToken,
    tokenType:state.loginReducer.tokenType,
    loginStatus:state.loginReducer.loginStatus,
    userList:state.adminReducer.userList,
    profileImages:state.adminReducer.profileImages,
  };
};

export default connect(
  mapStateToProps)(withRouter(Userlist));

