import ActionTypes from './constants';
import { ContainerActions, orderDetailsStates } from './types';

export const initialState = {
    orderDetails: [''],
    isloading: false,
    isLinkError:null,
}
const orderDetailsReducer = (state: orderDetailsStates = initialState, action: ContainerActions) => {
    switch (action.type) {
        case ActionTypes.GET_ORDER_DETAILS_REQUEST:
            console.log('GET_ORDER_DETAILS_REQUEST');
            
            return {
                ...state,
                isloading: true,
            }
        case ActionTypes.GET_ORDER_DETAILS_RESPONSE:
            console.log('GET_ORDER_DETAILS_RESPONSE',action);
            return {
                ...state,
                orderDetails:action.payload,
                isloading: false,
            }
        case ActionTypes.LINK_AMOULET_REQUEST:
                console.log('LINK_AMOULET_REQUEST',action);
                return {
                    ...state,
                    isLinkError:null,
                }
        case ActionTypes.LINK_AMOULET_RESPONSE:
                    console.log('LINK_AMOULET_RESPONSE',action);
                    return {
                        ...state,
                        isLinkError:action.payload.error
                    }
        default:
            return state;
    }
}

export default orderDetailsReducer;
