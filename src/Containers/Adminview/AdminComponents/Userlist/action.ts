
import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const amouletCreateRequestAction = (params: object) => action(ActionTypes.AMOULET_CREATE_REQUEST, params);
export const amouletCreateResponseAction = (params: any) => action(ActionTypes.AMOULET_CREATE_RESPONSE, params);
export const amouletGiverCodeRequestAction = (params: object) => action(ActionTypes.AMOULET_GIVER_CODE_REQUEST, params);
export const amouletGiverCodeResponseAction = (params: any) => action(ActionTypes.AMOULET_GIVER_CODE_RESPONSE, params);
export const amouletReceiverCodeRequestAction = (params: object) => action(ActionTypes.AMOULET_RECEIVER_CODE_REQUEST, params);
export const amouletReceiverCodeResponseAction = (params: any) => action(ActionTypes.AMOULET_RECEIVER_CODE_RESPONSE, params);
export const amouletValidateRequestAction = (params: object) => action(ActionTypes.AMOULET_VALIDATE_CODE_REQUEST, params);
export const amouletValidateResponseAction = (params: any) => action(ActionTypes.AMOULET_VALIDATE_CODE_RESPONSE, params);
export const linkUnlinkRequestAction = (params: any) => action(ActionTypes.LINK_UNLINK_REQUEST, params);
export const linkUnlinkResponseAction = (params: any) => action(ActionTypes.LINK_UNLINK_RESPONSE, params);