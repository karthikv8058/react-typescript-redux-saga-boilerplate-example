import { ActionType } from 'typesafe-actions';
import * as actions from './action';

export interface itemStates{
    isloading:boolean,
    isTokenError:any,
    isEnableUserError:any,
    data:any,
}
/* --- ACTIONS --- */
// type TestpageActions = ActionType<typeof actions>;


// export type ContainerActions = TestpageActions;

// export default ContainerActions;