
import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const addDescriptionsRequestAction = (params:object) => action(ActionTypes.ADD_DESCRIPTIONS_REQUEST, params);
export const addDescriptionsResponseAction = (params:object) => action(ActionTypes.ADD_DESCRIPTIONS_RESPONSE, params);
