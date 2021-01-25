import ActionTypes from './constants';
import {ContainerActions,amouletStates} from './types';
import { string, object } from 'yup';
 
export const initialState = {
    giverCode: {},
    receiverCode: {},
    validateCode: {},
    isGiverCode:false,
    isReceiverCode:false,
    isValidateCode:false,
    giverCodeUUID:'',
    receiverCodeUUID:'',
    isExists: false,
    isLoading: false,
}
const amouletReducer = (state:amouletStates = initialState, action:ContainerActions) => {
    switch(action.type) {
        case ActionTypes.AMOULET_CREATE_REQUEST:
            console.log('AMOULET_CREATE_REQUEST');
            
            return {
                ...state,
            }
        case ActionTypes.AMOULET_CREATE_RESPONSE:
            return {
                ...state,
            }
        case ActionTypes.AMOULET_GIVER_CODE_REQUEST:
            return {
                ...state,
                isGiverCode:true,
            }
        case ActionTypes.AMOULET_GIVER_CODE_RESPONSE:
            console.log('AMOULET_GIVER_CODE_RESPONSE:',action.payload);
            
            return {
                ...state,
                isGiverCode:false,
                giverCode: action.payload,
                giverCodeUUID:action.payload.uuid,
            }
        case ActionTypes.AMOULET_RECEIVER_CODE_REQUEST:
            return {
                ...state,
                isReceiverCode:true,
            }
        case ActionTypes.AMOULET_RECEIVER_CODE_RESPONSE:
            console.log('AMOULET_RECEIVER_CODE_RESPONSE:',action.payload);
            return {
                ...state,
                isReceiverCode:false,
                receiverCode: action.payload,
                receiverCodeUUID:action.payload.uuid
            }
        case ActionTypes.AMOULET_VALIDATE_CODE_REQUEST:
            return {
                ...state,
                isValidateCode:true,
                isLoading: true,
            }
        case ActionTypes.AMOULET_VALIDATE_CODE_RESPONSE:
            console.log('AMOULET_VALIDATE_CODE_RESPONSE;;;;;;;',action);
            
            return {
                ...state,
                validateCode: action.payload,
                isValidateCode:false,
                isLoading: false,
            }
        default:
            return state;
    }
}

export default amouletReducer;
