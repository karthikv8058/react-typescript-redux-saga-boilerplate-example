import React, { FunctionComponent,useState, useEffect, createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loginStates} from './types';
import { 
  loginRequestAction,
  fetchStatesAction,
  clearLoginStatesAction,
} from './action';
import { clearItemStatesAction } from '../Newitems/action';
import { connect } from 'react-redux';
import { Link, withRouter,useHistory } from 'react-router-dom';

import { Spinner } from 'reactstrap';

import './assets/css/sb-admin-2.min.css';
import './assets/css/all.css';
import './assets/scss/style.scss';
import loginReducer from './reducer';

const LoginView = (props:any) => {
    // console.log('Props from login page :', props);
    const history = useHistory();
    const usernameRef:React.RefObject<HTMLInputElement> = createRef();
    const passwordRef:React.RefObject<HTMLInputElement> = createRef();

    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [isusernameError, setIsUsernameError] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [ispasswordError, setIsPasswordError] = useState(false);
    const [errCount, setErrCount] = useState(0);

    const dispatch = useDispatch();
    const handleOnchanage = (e:any) => {

    if( e.target.name === 'username' ) {
      if( e.target.value === '' ) {
        setUsernameError('Username is required');
        setIsUsernameError(true);
      } else {
        setUsername(e.target.value);
        setIsUsernameError(false);
      }
    }

    if( e.target.name === 'password' ){
      if( e.target.value === '' ){
        setPasswordError('Password is required');
        setIsPasswordError(true);
      } else {
        setPassword(e.target.value);
        setIsPasswordError(false);
      }
    }    
  }

  const handleOnBlur = (e:any) => {

    if(e.target.name==='username'){
      if(e.target.value===''){
        setUsernameError('Username is required');
        setIsUsernameError(true);
      }else{
        setUsername(e.target.value);
        setIsUsernameError(false);
      }
    }

    if(e.target.name==='password'){
      if(e.target.value===''){
        setPasswordError('Password is required');
        setIsPasswordError(true);
      }else{
        setPassword(e.target.value);
        setIsPasswordError(false);
      }
    }    

  }

  const handleSubmit = (username:string,password:string,e:any) => {
    e.preventDefault();
    console.log('username :',usernameRef.current?.value);
    if(usernameRef.current?.value === '') {
      setUsernameError('Username is required');
      setIsUsernameError(true);
    }
    if (passwordRef.current?.value==='') {
      setPasswordError('Password is required');
      setIsPasswordError(true);
    }
    if(usernameRef.current?.value !== '' && passwordRef.current?.value !== ''){
      const params:object = {     
        "grant_type": "password",
        'username': username,
        'password': password,
      }
      const finalParams:object = {
        params,
        loginNav:() => history.push('/admin')
      }
      dispatch(loginRequestAction(finalParams));
    }
  }

  const { match } = props;
      window.history.pushState(null, document.title, window.location.href);
      window.addEventListener('popstate', function (event){
         window.history.pushState(null, document.title,  window.location.href);
      }); 

      useEffect(()=> {
        if(match.url==='/'){
          history.push('/');
          dispatch(clearItemStatesAction());
          dispatch(clearLoginStatesAction());
        }  
       },[])
    return(
        <div className="d-flex justify-content-center bg-color login-view" style={{height:'100vh'}}>
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
                        ref={usernameRef} 
                        onChange={(e)=>{handleOnchanage(e)}} 
                        onBlur={(e)=>{handleOnBlur(e)}} 
                        className="form-control" 
                        placeholder="Enter Username"
                        />
                        {
                          isusernameError&&<span className="badge badge-danger px-3 error-label py-1 font-weight-lighter">
                            {usernameError}
                          </span>
                        }
                  </div>
                  <div className="form-group relative">
                      <label htmlFor="" className="text-left text-dark">Password :</label>
                      <input 
                        type="password"
                        name="password"
                        ref={passwordRef} 
                        onChange={(e)=>{handleOnchanage(e)}}
                        onBlur={(e)=>{handleOnBlur(e)}}  
                        className="form-control" 
                        placeholder="Enter Password"
                        />
                        {
                          ispasswordError&&<span className="badge badge-danger px-3 error-label py-1 font-weight-lighter">
                            {passwordError}
                          </span>
                        }
                  </div>
                  <div className="text-center">
                  <button className="btn btn-primary px-5 mt-2 bg-theme" onClick={(e)=>{handleSubmit(username,password,e)}}>
                      Sign in
                  </button>
                   {
                     props.isLoginError&&<div className="alert alert-danger mt-3">
                       <span>Invalid Username or Password</span>
                     </div>
                   }
                  </div>
              </form>
          </div>
          {
            props.isLoading&&
            <div className="loader-waiting d-flex justify-content-center">
                <div className="spinner-border text-info align-self-center" role="status">
                </div>
            </div>
          }
        </div>
    );
}

const mapStateToProps: any = (state: any) => {
  return {
    isLoading : state.loginReducer.isLoading,
    isLoginError : state.loginReducer.isLoginError,
  };
};

export default connect(
  mapStateToProps)(withRouter(LoginView));


