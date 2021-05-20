
import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const tokenVerificationRequestAction = (params:any) => action(ActionTypes.TOKEN_VERIFICATION_REQUEST,params);
export const tokenVerificationResponseAction = (params:any) => action(ActionTypes.TOKEN_VERIFICATION_RESPONSE,params);

export const enableUserRequestAction = (params:any) => action(ActionTypes.ENABLE_USER_REQUEST,params);
export const enableUserResponseAction = (params:any) => action(ActionTypes.ENABLE_USER_RESPONSE,params);