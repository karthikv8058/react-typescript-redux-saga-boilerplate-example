import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  amouletListRequestAction,
  dashboardRecGivCountRequestAction,
} from "../../action";

const Dashboard = (props: any) => {
  const dispatch = useDispatch();

  let params: object = {
    accessToken: props.accessToken,
    tokenType: props.tokenType,
    refresh_token: props.refreshToken,
  };

  useEffect(() => {
    dispatch(amouletListRequestAction(params));
    dispatch(dashboardRecGivCountRequestAction());
  }, []);

  let dashboardCount: any = {};
  props.dashboard &&
    props.dashboard.length > 0 &&
    props.dashboard.map((count: any) => {
      dashboardCount = { giver: count.giver, receiver: count.receiver };
    });
  return (
    <section className="dashboard p-0">
      <div>
        <h3>{props.title}</h3>
      </div>
      <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Passphrase 1
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {props.loginStatus && dashboardCount.giver}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-users fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Passphrase 2
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {props.loginStatus && dashboardCount.receiver}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-users fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                    Total Amoulets
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {props.loginStatus && props.amouletCount}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-gem fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card border-left-warning shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Pending requests</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.loginStatus&&'40'}</div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-comments fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                      </div> */}
      </div>
    </section>
  );
};

const mapStateToProps: any = (state: any) => {
  return {
    loginStatus: state.loginReducer.loginStatus,
    accessToken: state.loginReducer.accessToken,
    tokenType: state.loginReducer.tokenType,
    refreshToken: state.loginReducer.refreshToken,
    amouletCount: state.adminReducer.amouletCount,
    dashboard: state.adminReducer.dashboard,
  };
};

export default connect(mapStateToProps)(withRouter(Dashboard));
