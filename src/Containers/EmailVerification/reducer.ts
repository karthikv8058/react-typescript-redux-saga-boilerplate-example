import ActionTypes from './constants';
import {itemStates} from './types';
 

export const initialState ={
isloading:false,
isTokenError:null,
isEnableUserError:null,
data:null,
}
 
const mailVerificationReducer = (state:itemStates = initialState,action:any) => {
    switch(action.type){
        case ActionTypes.TOKEN_VERIFICATION_REQUEST:
            return{
                ...state,
                isloading:true,
            }
        case ActionTypes.TOKEN_VERIFICATION_RESPONSE:
            console.log('TOKEN_VERIFICATION_RESPONSE:::',action.payload.error);
            
            return{
                ...state,
                isloading:false,
                isTokenError:action.payload.error,
                data:action.payload,
            }
        case ActionTypes.ENABLE_USER_REQUEST:
            return{
                ...state,
                isloading:true,
            }
        case ActionTypes.ENABLE_USER_RESPONSE:
            console.log('ENABLE_USER_RESPONSE:::',action.payload.error);
            
            return{
                ...state,
                isloading:false,
                isEnableUserError:action.payload.error
            }
            default:
                return state;
    }
}

export default mailVerificationReducer;
