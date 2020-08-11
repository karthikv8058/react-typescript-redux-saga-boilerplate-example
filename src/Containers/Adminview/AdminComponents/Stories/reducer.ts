import ActionTypes from './constants';
import {ContainerActions,storyStates} from './types';
 
export const initialState ={
        storyList: [],
        isloading:false,
}
const storyReducer = (state:storyStates = initialState,action:ContainerActions) => {
    switch(action.type) {
        case ActionTypes.STORY_LIST_REQUEST:
            console.log('STORY_LIST_REQUEST');
            
            return {
                ...state,
                isloading:true,
            }
        case ActionTypes.STORY_LIST_RESPONSE:
            console.log('STORY_LIST_RESPONSE:',action.payload);
            return {
                ...state,
                storyList: action.payload,
                isloading:false,
            }
        default:
            return state;
    }
}

export default storyReducer;
