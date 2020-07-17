import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const Dashboard = (props:any) => {
    return (
        <section className="dashboard p-0">
                  <div className="row">
                      <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card border-left-primary shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Earnings (Monthly)</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.loginStatus&&'$40,000'}</div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-calendar fa-2x text-gray-300"></i>
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
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Earnings (ANNUAL)</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.loginStatus&&'$40,000'}</div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-rupee-sign fa-2x text-gray-300"></i>
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
                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.loginStatus&&'452'}</div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-tasks fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                      </div>
                      <div className="col-xl-3 col-md-6 mb-4">
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
                      </div>
                      
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
  mapStateToProps)(withRouter(Dashboard));

