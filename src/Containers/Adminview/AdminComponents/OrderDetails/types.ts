import { ActionType } from 'typesafe-actions';
import * as actions from './action';

export interface orderDetailsStates {
    orderDetails: any,
}

/* --- ACTIONS --- */
type orderDetailsActions = ActionType<typeof actions>;


export type ContainerActions = orderDetailsActions;

// export default ContainerActions;