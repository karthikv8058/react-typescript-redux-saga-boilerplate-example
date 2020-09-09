import ActionTypes from './constants';
import {ContainerActions,decriptionStates} from './types';
import { string, object } from 'yup';
 
export const initialState = {

}
const descriptionReducer = (state:decriptionStates = initialState, action:ContainerActions) => {
    switch(action.type) {
        case ActionTypes.ADD_DESCRIPTIONS_REQUEST:
            console.log('AMOULET_CREATE_REQUEST');
            
            return {
                ...state,
            }
        case ActionTypes.ADD_DESCRIPTIONS_RESPONSE:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default descriptionReducer;
