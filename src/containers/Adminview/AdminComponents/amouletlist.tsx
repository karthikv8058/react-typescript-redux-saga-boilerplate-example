import React, {useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { amouletListRequestAction, genConfigRequestAction } from '../action'

const Amouletlist = (props:any) => {
    const dispatch = useDispatch();
    let params:object = {
      accessToken: props.accessToken,
      tokenType: props.tokenType
    }
    useEffect(() => {
      dispatch(amouletListRequestAction(params));
      dispatch(genConfigRequestAction(params));
    },[]);
    return (
        <section className="userlist p-0">
                    <div>
                      <table className="table table-bordered">
                          <tr className="bg-theme text-white">
                            <th>Amoulet Name</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Profile Image</th>
                          </tr>
                          <tr>
                            <td>Samual123</td>
                            <td>Samual123@host.in</td>
                            <td>Samual</td>
                            <td>Donmenic</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Samual123</td>
                            <td>Samual123@host.in</td>
                            <td>Samual</td>
                            <td>Donmenic</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Samual123</td>
                            <td>Samual123@host.in</td>
                            <td>Samual</td>
                            <td>Donmenic</td>
                            <td></td>
                          </tr>
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
    amouletList:state.adminReducer.amouletList,
    profileImages:state.adminReducer.profileImages,
  };
};

export default connect(
  mapStateToProps)(withRouter(Amouletlist));

