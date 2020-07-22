import React, {useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { amouletListRequestAction, amoluletListResponseAction } from '../action'

const Amouletlist = (props:any) => {
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
                { props.amouletList.length > 0 && props.amouletList.map((item:any) => {
                    return <tr key={item.id}>
                        <td> {item.name} </td>
                        <td> {item.serialNumber} </td>
                        <td> {item.nfcCode} </td>
                        <td> {item.description} </td>
                        <td> {item.sku} </td>
                        <td></td>
                    </tr>
                  })
                }
              </tbody>
            </table>
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

