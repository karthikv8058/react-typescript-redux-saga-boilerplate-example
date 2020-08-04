import { ActionType } from 'typesafe-actions';
import * as actions from './action';

export interface storyStates {
    storyList: any
    isloading:boolean,
}

/* --- ACTIONS --- */
type StorypageActions = ActionType<typeof actions>;


export type ContainerActions = StorypageActions;

// export default ContainerActions;