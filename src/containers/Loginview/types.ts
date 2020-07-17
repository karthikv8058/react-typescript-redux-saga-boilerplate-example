import { ActionType } from 'typesafe-actions';
import * as actions from './action';

export interface loginStates{
    errorData:any,
    responseData:any,
    isLoginError:boolean,
    accessToken:string,
    expiresIn:number,
    refreshToken:string,
    tokenType:string,
    isLoading:boolean,
    loginStatus:boolean,
}

/* --- ACTIONS --- */
type loginPageActions = ActionType<typeof actions>;


export type ContainerActions = loginPageActions;

// export default ContainerActions;