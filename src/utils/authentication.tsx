import React from 'react';
import {  Route, Redirect,withRouter } from "react-router-dom";
import { connect } from 'react-redux';

const SecuredRoute = (props:any) => {
    return (
        <Route path={props.path} render={data=>props.loginStatus?
            (<props.component {...data}></props.component>):
            (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
    );
}

const mapStateToProps: any = (state: any) => {
    return {
      loginStatus:state.loginReducer.loginStatus,
    };
  };
  
  export default connect(
    mapStateToProps)(withRouter(SecuredRoute));