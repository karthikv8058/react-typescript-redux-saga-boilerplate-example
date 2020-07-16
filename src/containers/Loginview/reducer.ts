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

}
console.log('in reducer file');

const loginReducer = (state:loginStates = initialState,action:ContainerActions) => {
    //console.log('hello from login reducer');
    switch(action.type){
        case ActionTypes.LOGIN_REQUEST:
            console.log('LOGIN_REQUEST',action.payload);         
            return{
                ...state,
                isLoading:true,
            }
        case ActionTypes.LOGIN_RESPONSE:
            console.log('LOGIN_RESPONSE :',action.payload.error);
            return{
                ...state,
                responseData:action.payload,
                isLoginError:false,
                isLoading:false,
            }
         case ActionTypes.LOGIN_ERROR:
             return{
                ...state,
                isLoginError:true,
                isLoading:false
             }
            default:
                return state;
    }
}

export default loginReducer;
