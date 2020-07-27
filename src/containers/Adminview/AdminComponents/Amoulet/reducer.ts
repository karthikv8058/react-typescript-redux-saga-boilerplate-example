import ActionTypes from './constants';
import {ContainerActions,amouletStates} from './types';
 

export const initialState ={
  
}
const amouletReducer = (state:amouletStates = initialState,action:ContainerActions) => {
    switch(action.type) {
        case ActionTypes.AMOULET_CREATE_REQUEST:
            console.log('AMOULET_CREATE_REQUEST'); 
            return{
                ...state,
            }
        case ActionTypes.AMOULET_CREATE_RESPONSE:
            return{
                ...state,
            }
        default:
            return state;
    }
}

export default amouletReducer;
