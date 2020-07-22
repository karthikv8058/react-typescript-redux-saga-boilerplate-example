import ActionTypes from './constants';
import {ContainerActions,adminStates} from './types';
 

export const initialState ={
    userList: [],
    amouletList: [],
    profileImages: '',
    storyMedia: ''
}
 
const adminReducer = (state:adminStates = initialState,action:ContainerActions) => {
    switch(action.type) {
        case ActionTypes.USER_LIST_REQUEST:
            console.log('USER_LIST_REQUEST'); 
            return{
                ...state,
            }
        case ActionTypes.USER_LIST_RESPONSE:
            console.log('USER_LIST_RESPONSE :',action.payload);    
            return{
                ...state,
                userList:action.payload.data,
            }
        case ActionTypes.GEN_CONFIG_REQUEST:
            console.log('GEN_CONFIG_REQUEST'); 
            return{
                ...state,
            }
        case ActionTypes.GEN_CONFIG_RESPONSE:
            console.log('GEN_CONFIG_RESPONSE',action.payload.data.profileImages); 
            return {
                ...state,
                profileImages:action.payload.data.profileImages,
                storyMedia:action.payload.data.storyMedia,
            }
        case ActionTypes.AMOULET_LIST_REQUEST:
            console.log('AMOULET_LIST_REQUEST', ActionTypes.AMOULET_LIST_REQUEST);
            return {
                ...state,
            }
        case ActionTypes.AMOULET_LIST_RESPONSE:
            return {
                ...state,
                amouletList: action.payload.data,
            }
        default:
            return state;
    }
}

export default adminReducer;
