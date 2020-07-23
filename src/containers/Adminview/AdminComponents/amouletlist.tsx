import React, {useEffect,useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {amouletListRequestAction} from '../action';

const Amouletlist = (props:any) => {

    console.log("props from amoulet",props);
    

    const dispatch = useDispatch();
    
    let params:object = {
      accessToken: props.accessToken,
      tokenType: props.tokenType
    }

    useEffect(() => {
      dispatch(amouletListRequestAction(params));
    },[]);

    return (
      <section className="userlist p-0">
          <div>
              <div>
                  <h3>{props.title}</h3>
              </div>
              <div className="d-flex mb-3">
                  <Link className="btn btn-primary rounded-sm" to="/admin/createAmoulet">Create Amoulet</Link>
              </div>
              <div>
                  <table className="table table-bordered">
                      <thead>
                        <tr className="bg-theme text-white">
                          <th>Amoulet Name</th>
                          <th>Product Serial Number</th>
                          <th>NFC Code</th>
                          <th>Description</th>
                          <th>SKU</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                      { props.amouletList.length > 0 ? props.amouletList.map((item:any) => {
                          return <tr key={item.id}>
                              <td> {item.name} </td>
                              <td> {item.serialNumber} </td>
                              <td> {item.nfcCode} </td>
                              <td> {item.description} </td>
                              <td> {item.sku} </td>
                              <td></td>
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
          </div>
      </section>
    )
}

const mapStateToProps: any = (state: any) => {
  console.log('state', state);
  return {
    accessToken: state.loginReducer.accessToken,
    tokenType: state.loginReducer.tokenType,
    amouletList: state.adminReducer.amouletList,
    profileImages: state.adminReducer.profileImages,
  };
};

export default connect(
  mapStateToProps)(withRouter(Amouletlist));

