import ActionTypes from './constants';
import {ContainerActions,loginStates} from './types';
import { date } from 'yup';
 

export const initialState ={
    errorData:'',
    responseData:'',
    isLoading:false,
    isLoginError:false,
    accessToken:'',
    expiresIn:0,
    refreshToken:'',
    tokenType:'',
    loginStatus:false,
    accessDateTime:'',
    isLoader:false,

}
console.log('in reducer file');

const loginReducer = (state:loginStates = initialState,action:ContainerActions) => {
    switch(action.type){
        case ActionTypes.LOGIN_REQUEST:        
            return {
                ...state,
                isLoading:true,
                isLoginError:false,
                loginStatus:false,
            }
        case ActionTypes.LOGIN_RESPONSE:
            console.log('LOGIN_RESPONSE expires_in :',action.payload.expires_in);
            return {
                ...state,
                accessToken:action.payload.data.access_token,
                expiresIn:action.payload.data.expires_in,
                tokenType:action.payload.data.token_type,
                refreshToken:action.payload.data.refresh_token,
                accessDateTime:action.payload.loginDay,
                isLoginError:false,
                isLoading:false,
                loginStatus:true,
            }
         case ActionTypes.LOGIN_ERROR:
             return {
                ...state,
                isLoginError:true,
                isLoading:false,
                loginStatus:false,
             }
        case ActionTypes.REFRESH_TOKEN_REQUEST:
            console.log('REFRESH_TOKEN_REQUEST');
            
            return {
                ...state,
                isLoader:true,
            }
        case ActionTypes.REFRESH_TOKEN_RESPONSE:
            console.log('REFRESH_TOKEN_RESPONSE :',action.payload);
            return {
                ...state,
                accessToken:action.payload.data.access_token,
                expiresIn:action.payload.data.expires_in,
                tokenType:action.payload.data.token_type,
                refreshToken:action.payload.data.refresh_token,
                isLoader:false,
            }
        case ActionTypes.CLEAR_STATES:
            return {
                ...state,
                errorData:'',
                responseData:'',
                isLoading:false,
                isLoginError:false,
                accessToken:'',
                expiresIn:0,
                refreshToken:'',
                tokenType:'',
                loginStatus:false,
            }
            default:
                return state;
    }
}

export default loginReducer;
