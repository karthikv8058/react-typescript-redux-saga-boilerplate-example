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
            return{
                ...state,
            }
        case ActionTypes.USER_LIST_RESPONSE:   
            return{
                ...state,
                userList:action.payload.data,
            }
        case ActionTypes.GEN_CONFIG_REQUEST:
            return{
                ...state,
            }
        case ActionTypes.GEN_CONFIG_RESPONSE:
            return {
                ...state,
                profileImages:action.payload.data.profileImages,
                storyMedia:action.payload.data.storyMedia,
            }
        case ActionTypes.AMOULET_LIST_REQUEST:
            return {
                ...state,
            }
        case ActionTypes.AMOULET_LIST_RESPONSE:
            return {
                ...state,
                amouletList: action.payload.data,
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
