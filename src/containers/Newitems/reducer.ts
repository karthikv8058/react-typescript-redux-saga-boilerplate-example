import ActionTypes from './constants';
import {ContainerActions,itemStates} from './types';
 

export const initialState ={
    items:[],
    itemsArr:[],
    isloading:false,
}
 
const itemReducer = (state:itemStates = initialState,action:ContainerActions) => {
    switch(action.type){
        case ActionTypes.ADD_ITEM:
            console.log('ADD_ITEM reducer', action.payload);
            return{
                ...state,
                items:[...state.items,action.payload],
                isloading:true,
            }
        case ActionTypes.ADD_ITEM_RESPONSE:
            console.log('ADD_ITEM_RESPONSE :',action.payload);
            
            return{
                ...state,
                itemsArr:action.payload,
                isloading:false,
            }
        case ActionTypes.CLEAR_STATES:
            console.log('CLEAR_STATES');
            
            return{
                ...state,
                items:[],
                itemsArr:[],
                isloading:false,
            }
            default:
                return state;
    }
}

export default itemReducer;
