import { ActionType } from 'typesafe-actions';
import * as actions from './action';

export interface amouletStates {
    giverCode: object,
    receiverCode: object,
    validateCode: object,
    isGiverCode:boolean,
    isReceiverCode:boolean,
    isValidateCode:boolean,
}

/* --- ACTIONS --- */
type AmouletpageActions = ActionType<typeof actions>;


export type ContainerActions = AmouletpageActions;

// export default ContainerActions;