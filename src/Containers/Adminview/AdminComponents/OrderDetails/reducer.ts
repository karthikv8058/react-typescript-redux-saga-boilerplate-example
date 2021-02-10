import ActionTypes from './constants';
import { ContainerActions, orderDetailsStates } from './types';

export const initialState = {
    orderDetails: ['asdasd']
}
const orderDetailsReducer = (state: orderDetailsStates = initialState, action: ContainerActions) => {
    switch (action.type) {
        case ActionTypes.GET_ORDER_DETAILS_REQUEST:
            console.log('GET_ORDER_DETAILS_REQUEST');
            
            return {
                ...state,
            }
        case ActionTypes.GET_ORDER_DETAILS_RESPONSE:
            console.log('GET_ORDER_DETAILS_RESPONSE',action);
            return {
                ...state,
                orderDetails:action.payload
            }
        
        default:
            return state;
    }
}

export default orderDetailsReducer;
