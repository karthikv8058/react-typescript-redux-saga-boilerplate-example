import React, {useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import {
  userListRequestAction,
  genConfigRequestAction
} from '../action';

const Userlist = (props:any) => {

  const data = {
    columnDefs: [
      { headerName: "Make", field: "make" },
      { headerName: "Model", field: "model" },
      { headerName: "Price", field: "price" }],
    rowData: [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
    ]
  }
  
  const dispatch = useDispatch();

  let params:object = {
    accessToken:props.accessToken,
    tokenType:props.tokenType,
    refresh_token:props.refreshToken,
  }

    useEffect(()=>{
      dispatch(userListRequestAction(params));
      dispatch(genConfigRequestAction(params));;
    },[]);

    const onGridReady = (params:any) => {
        console.log('ag params :',params);
        const gridApi = params.api;
        const gridColumnApi = params.columnApi;

        params.columnApi.columnController.bodyWidth=1000;
      };

     const onPaginationChanged = (params:any) => {
          console.log();
          
          console.log('currentPage :',params.api.paginationProxy.currentPage+1);
          
      };

      const onRowClicked = (params:any) => {
        console.log('Row click params :',params);
      }
  

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
                  <div style={{ width: '100%', height: '100%' }}>
                    <div
                      id="myGrid"
                      style={{
                        height: '500px',
                        width: '100%',
                      }}
                      className="ag-theme-alpine"
                    >
                    <AgGridReact
                        columnDefs={data.columnDefs}
                        pagination={true}
                        rowData={data.rowData}
                        paginationPageSize={5}
                        onGridReady={onGridReady}
                        onPaginationChanged={onPaginationChanged}
                        suppressRowClickSelection={true}
                        onRowClicked={onRowClicked}
                      />
                  </div>
                  </div>
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

