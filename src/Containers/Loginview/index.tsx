import React, {useState, useEffect, createRef } from 'react';
import { useDispatch } from 'react-redux';

import { 
  loginRequestAction,
  clearLoginStatesAction,
} from './action';

import {clearAdminStates} from '../Adminview/action';

import { clearItemStatesAction } from '../Newitems/action';
import { connect } from 'react-redux';
import {  withRouter,useHistory,Switch,Route,BrowserRouter,MemoryRouter } from 'react-router-dom';
import {persistor} from '../../store';


import './assets/css/sb-admin-2.min.css';
import './assets/css/all.css';
import './assets/scss/style.scss';
import { logout } from '../../utils/logOutAll';

import Login from '../../Components/Login';
import ForgotPassword from '../../Components/ForgotPassword';
import Loader from '../../Components/Loader';

const LoginView = (props:any) =>{

    // console.log('Props from login page :', props);

    const history = useHistory();
    const usernameRef:React.RefObject<HTMLInputElement> = createRef();
    const passwordRef:React.RefObject<HTMLInputElement> = createRef();
    const forgotPasswordRef:React.RefObject<HTMLInputElement> = createRef();

    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [isusernameError, setIsUsernameError] = useState(false);
    
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [ispasswordError, setIsPasswordError] = useState(false);

    const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
    const [forgotPasswordEmailError, setForgotPasswordEmailError] = useState('');
    const [isForgotPasswordEmailError, setIsForgotPasswordEmailError] = useState(false);

    const [isForgotpassword, setIsForgotPassword] = useState(false);

    const dispatch = useDispatch();
  
  const handleOnchanage = (e:any) => {

    let regexmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm;

    if(e.target.name==='username'){
      if(e.target.value===''){
        setUsernameError('Username is required');
        setIsUsernameError(true);
      } else {
        setUsername(e.target.value);
        setIsUsernameError(false);
      }
    }

    if(e.target.name==='forgotPassword'){
      if(e.target.value===''){
        setForgotPasswordEmailError('Email is required');
        setIsForgotPasswordEmailError(true);
      }else if(!regexmail.test(e.target.value)){
        setForgotPasswordEmailError('Invail Email ID');
        setIsForgotPasswordEmailError(true);
      } 
      else{
        setForgotPasswordEmail(e.target.value);
        setIsForgotPasswordEmailError(false);
      }
    }

    if(e.target.name==='password'){
      if(e.target.value===''){
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

    if(e.target.name==='forgotPassword'){
      if(e.target.value===''){
        setForgotPasswordEmailError('Email is required');
        setIsForgotPasswordEmailError(true);
      }else{
        setForgotPasswordEmail(e.target.value);
        setIsForgotPasswordEmailError(false);
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
    // console.log('username :',usernameRef.current?.value);

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
        "user_type" : "admin",
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
       
          dispatch(clearItemStatesAction());
          dispatch(clearLoginStatesAction());
          dispatch(clearAdminStates()); 

       },[])


      const handleForgot = (e:any,forgotPasswordEmail:string) => {
        
        e.preventDefault();

        console.log('Forgot function');
        if(forgotPasswordRef.current?.value==='') {
            setForgotPasswordEmailError('Email is required');
            setIsForgotPasswordEmailError(true);
          }else{
                
        }
      }

       const handleGoBack = (e:any) => {
        e.preventDefault();
        setIsForgotPassword(!isForgotpassword);
       }

       const routes = [
        {
          path: "/",
          exact: true,
        },
        {
          path: "/forgotpassword",
        },
      ];

    return(
        <MemoryRouter>
        <div className="d-flex justify-content-center bg-color login-view" style={{height:'100vh'}}>
                
                <Switch>
                  <Route
                        
                        path={routes[0].path}
                        exact={routes[0].exact}
                        children={<Login
                          username={username}
                          password={password} 
                          usernameRef ={usernameRef}
                          passwordRef={passwordRef}
                          ispasswordError={ispasswordError}
                          isusernameError={isusernameError}
                          passwordError={passwordError}
                          usernameError={usernameError}
                          handleGoBack={handleGoBack} 
                          handleOnchanage={handleOnchanage} 
                          handleOnBlur={handleOnBlur}
                          handleSubmit={handleSubmit}
                          path="/forgotpassword"
                          error={props.errorData}
                          /> }
                      />
                    <Route
                      
                      path={routes[1].path}
                      exact={routes[1].exact}
                      children={<ForgotPassword
                        forgotPasswordRef={forgotPasswordRef}
                        handleOnchanage={handleOnchanage} 
                        handleOnBlur={handleOnBlur}
                        handleForgot={handleForgot}
                        forgotPasswordEmail={forgotPasswordEmail}
                        isForgotPasswordEmailError={isForgotPasswordEmailError}
                        forgotPasswordEmailError={forgotPasswordEmailError}
                        path="/"
                        error=""
                      />}
                    />
                  
                  </Switch>
                  
  
          {
            props.isLoading&&
            <Loader color="text-primary"/>
          }
          
        </div>
        </MemoryRouter>
    );
}

const mapStateToProps: any = (state: any) => {
  return {
    isLoading : state.loginReducer.isLoading,
    isLoginError : state.loginReducer.isLoginError,
    errorData : state.loginReducer.errorData,
  };
};

export default connect(
  mapStateToProps)(withRouter(LoginView));
