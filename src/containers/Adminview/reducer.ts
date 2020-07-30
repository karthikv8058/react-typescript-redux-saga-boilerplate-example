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
            console.log('USER_LIST_RESPONSE:',action.payload);
               
            return{
                ...state,
                userList:action.payload,
            }
        case ActionTypes.GEN_CONFIG_REQUEST:
            return{
                ...state,
            }
        case ActionTypes.GEN_CONFIG_RESPONSE:
            return {
                ...state,
                profileImages:action.payload.profileImages,
                storyMedia:action.payload.storyMedia,
            }
        case ActionTypes.AMOULET_LIST_REQUEST:
            console.log('AMOULET_LIST_REQUEST');
            
            return {
                ...state,
            }
        case ActionTypes.AMOULET_LIST_RESPONSE:
            return {
                ...state,
                amouletList: action.payload,
            }
        case ActionTypes.CLEAR_ADMIN_STATES:
            return {
                userList: [],
                amouletList: [],
                profileImages: '',
                storyMedia: ''
            }

        default:
            return state;
    }
}

export default adminReducer;
