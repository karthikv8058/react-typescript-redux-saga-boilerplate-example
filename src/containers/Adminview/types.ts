import { ActionType } from 'typesafe-actions';
import * as actions from './action';

export interface adminStates{
   userList:any,
   storyMedia:any,
   profileImages:any,
}

/* --- ACTIONS --- */
type AdminpageActions = ActionType<typeof actions>;


export type ContainerActions = AdminpageActions;

// export default ContainerActions;