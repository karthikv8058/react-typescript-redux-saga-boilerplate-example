import React, {useEffect,useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {amouletListRequestAction} from '../action';

const Amouletlist = (props:any) => {

    const dispatch = useDispatch();
    const [isCreateAmoulet, setIsCreateAmoulet] = useState(false);

    const handleCreateAmoulet = (e:any) => {
      e.preventDefault();
      setIsCreateAmoulet(!isCreateAmoulet);
    }

    let params:object = {
      accessToken:props.accessToken,
      tokenType:props.tokenType,
      refresh_token:props.refreshToken,
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
                  <Link className="btn btn-primary rounded-sm" to="/admin/create-amoulet">Create Amoulet</Link>
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
  return {
    accessToken: state.loginReducer.accessToken,
    tokenType: state.loginReducer.tokenType,
    refreshToken:state.loginReducer.refreshToken,
    amouletList: state.adminReducer.amouletList,
    profileImages: state.adminReducer.profileImages,
  };
};

export default connect(
  mapStateToProps)(withRouter(Amouletlist));

