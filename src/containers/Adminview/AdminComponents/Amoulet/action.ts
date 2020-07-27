
import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const amouletCreateRequestAction = (params:object) => action(ActionTypes.AMOULET_CREATE_REQUEST, params);
export const amouletCreateResponseAction = (params:any) => action(ActionTypes.AMOULET_CREATE_RESPONSE, params);




