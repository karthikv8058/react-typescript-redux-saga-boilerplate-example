import ActionTypes from './constants';
import {ContainerActions,amouletStates} from './types';
import { string } from 'yup';
 
export const initialState = {
    giverCode: string,
    receiverCode: string,
}
const amouletReducer = (state:amouletStates = initialState, action:ContainerActions) => {
    switch(action.type) {
        case ActionTypes.AMOULET_CREATE_REQUEST:
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
            }
        case ActionTypes.AMOULET_GIVER_CODE_RESPONSE:
            return {
                ...state,
                giverCode: action.payload.data
            }
        case ActionTypes.AMOULET_RECEIVER_CODE_REQUEST:
            return {
                ...state,
            }
        case ActionTypes.AMOULET_RECEIVER_CODE_RESPONSE:
            return {
                ...state,
                receiverCode: action.payload.data
            }
        default:
            return state;
    }
}

export default amouletReducer;
