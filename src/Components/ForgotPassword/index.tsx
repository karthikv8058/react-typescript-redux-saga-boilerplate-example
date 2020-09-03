import React from 'react';
import {  Link } from 'react-router-dom';

export default function ForgotPassword(props:any) {
    return (
        <div className="d-flex bg-white align-self-center max-width shadow jumbotron login-cover">
                <div className="icon-cover">
                        <div className="middle">
                        <i className="fas fa-key fa-2x"></i>
                        </div>
                </div>
                  <form className="w-100">
                      <div className="form-group text-center">
                          <h5 className="text-capitalize text-theme pb-0 mb-0">Forgot your password ?
                            <small style={{fontSize:'12px'}} className="d-block mt-1 text-muted">No worries! Enter your email and we will send you a request</small>
                          </h5>
                      </div>
                      <div className="form-group relative">
                      <label htmlFor="" className="text-left text-dark"></label>
                          <input 
                            type="email"
                            name="forgotPassword"
                            ref={props.forgotPasswordRef} 
                            onChange={(e)=>{props.handleOnchanage(e)}} 
                            onBlur={(e)=>{props.handleOnBlur(e)}} 
                            className="form-control" 
                            placeholder="Email"
                            />
                            {
                              props.isForgotPasswordEmailError&&<span className="badge badge-danger px-3 error-label py-1 font-weight-lighter">
                                {props.forgotPasswordEmailError}
                              </span>
                            }
                      </div>
                      
                      <div className="form-group text-center">
                      <button className="btn btn-primary px-5 mt-2 bg-theme" onClick={(e)=>{props.handleForgot(e,props.forgotPasswordEmail)}}>
                          Send Request
                      </button>
                          
                      </div>
                      <div className="text-center">
                      {/* <span onClick={props.goBack} className="px-3 small" style={{cursor:'pointer'}}>Go Back</span> */}
                        <Link  to={props.path} className="small" >Go Back</Link> 
                      </div>
                          { props.error!='' && <div className="alert alert-danger small">
                            <small>{props.error}</small>
                          </div> }   

                  </form>

                  
          </div>
    )
}
