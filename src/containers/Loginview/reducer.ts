import ActionTypes from './constants';
import {ContainerActions,loginStates} from './types';
 

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
            //console.log('LOGIN_RESPONSE :',action.payload.error);
            return {
                ...state,
                accessToken:action.payload.access_token,
                expiresIn:action.payload.expires_in,
                tokenType:action.payload.token_type,
                refreshToken:action.payload.refresh_token,
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
        case ActionTypes.CLEAR_STATES:
            return {
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
