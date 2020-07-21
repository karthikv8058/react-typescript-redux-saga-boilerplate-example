import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const Amouletlist = (props:any) => {
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
    loginStatus:state.loginReducer.loginStatus,
  };
};

export default connect(
  mapStateToProps)(withRouter(Amouletlist));

