
import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const loginRequestAction = (params:any) => action(ActionTypes.LOGIN_REQUEST,params);
export const loginResponseAction = (responseData:any) => action(ActionTypes.LOGIN_RESPONSE,responseData);
export const loginErrorAction = (errorData:any) => action(ActionTypes.LOGIN_ERROR,errorData);
export const fetchStatesAction = () => action(ActionTypes.FETCH_STATES);


