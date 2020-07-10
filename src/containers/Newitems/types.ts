import { ActionType } from 'typesafe-actions';
import * as actions from './action';

export interface itemStates{
    items:string[],
    itemsArr:any,
    isloading:boolean,
}

/* --- ACTIONS --- */
type TestpageActions = ActionType<typeof actions>;


export type ContainerActions = TestpageActions;

// export default ContainerActions;