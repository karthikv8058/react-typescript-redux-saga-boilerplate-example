
import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const userListRequestAction = (params:object) => action(ActionTypes.USER_LIST_REQUEST, params);
export const userListResponseAction = (userList:any) => action(ActionTypes.USER_LIST_RESPONSE, userList);
export const amouletListRequestAction = (params:object) => action(ActionTypes.AMOULET_LIST_REQUEST, params);
export const amoluletListResponseAction = (amouletList:any) => action(ActionTypes.AMOULET_LIST_RESPONSE, amouletList);
export const genConfigRequestAction = (params:object) => action(ActionTypes.GEN_CONFIG_REQUEST, params);
export const genConfigResponseAction = (config:any) => action(ActionTypes.GEN_CONFIG_RESPONSE, config);



