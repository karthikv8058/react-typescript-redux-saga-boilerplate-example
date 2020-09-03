import React, {useState, useEffect, createRef } from 'react';
import { useDispatch } from 'react-redux';
import {  withRouter,useHistory,Link } from 'react-router-dom';
import { 
    loginRequestAction,
    clearLoginStatesAction,
  } from '../../Containers/Loginview/action';


export default function Login(props:any) {

    return (
        <div className="d-flex bg-white align-self-center max-width shadow jumbotron login-cover">
            <div className="icon-cover">
                    <div className="middle">
                      <i className="fas fa-graduation-cap fa-2x"></i>
                    </div>
            </div>
              <form className="w-100">
                  <div className="form-group relative">
                      <label htmlFor="" className="text-left text-dark">Username :</label>
                      <input 
                        type="email"
                        name="username"
                        ref={props.usernameRef} 
                        onChange={(e)=>{props.handleOnchanage(e)}} 
                        onBlur={(e)=>{props.handleOnBlur(e)}} 
                        className="form-control" 
                        placeholder="Enter Username"
                        />
                        {
                          props.isusernameError&&<span className="badge badge-danger px-3 error-label py-1 font-weight-lighter">
                            {props.usernameError}
                          </span>
                        }
                  </div>
                  <div className="form-group relative">
                      <label htmlFor="" className="text-left text-dark">Password :</label>
                      <input 
                        type="password"
                        name="password"
                        ref={props.passwordRef} 
                        onChange={(e)=>{props.handleOnchanage(e)}}
                        onBlur={(e)=>{props.handleOnBlur(e)}}  
                        className="form-control" 
                        placeholder="Enter Password"
                        />
                        {
                          props.ispasswordError&&<span className="badge badge-danger px-3 error-label py-1 font-weight-lighter">
                            {props.passwordError}
                          </span>
                        }
                  </div>
                  <div className="form-group text-center">
                  <button className="btn btn-primary px-5 mt-2 bg-theme" onClick={(e)=>{props.handleSubmit(props.username,props.password,e)}}>
                      Sign in
                  </button>
                   {
                     props.isLoginError&&<div className="alert alert-danger mt-3">
                       <span>Invalid Username or Password</span>
                     </div>
                   }
                    <div className="mt-2 px-3">
                      <Link  to={props.path} className="small" >Forgot password ?</Link> 
                    </div>
                      { props.error!='' && <div className="alert alert-danger">{props.error}</div> }  
                  </div>
              </form>
          </div>
    )
}
