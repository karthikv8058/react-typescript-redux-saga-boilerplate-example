
import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const loginRequestAction = (params:any) => action(ActionTypes.LOGIN_REQUEST,params);
export const loginResponseAction = (responseData:any) => action(ActionTypes.LOGIN_RESPONSE,responseData);
export const loginErrorAction = (errorData:any) => action(ActionTypes.LOGIN_ERROR,errorData);
export const fetchStatesAction = () => action(ActionTypes.FETCH_STATES);
export const clearLoginStatesAction = () => action(ActionTypes.CLEAR_STATES);
export const refreshTokenRequestAction = (params:object) => action(ActionTypes.REFRESH_TOKEN_REQUEST,params);
export const refreshTokenResponseAction = (tokenList:any) => action(ActionTypes.REFRESH_TOKEN_RESPONSE,tokenList);


