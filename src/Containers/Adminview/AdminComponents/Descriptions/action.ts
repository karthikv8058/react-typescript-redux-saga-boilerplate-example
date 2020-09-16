import { action } from "typesafe-actions";

import ActionTypes from "./constants";

export const listDescriptionsRequestAction = (params: object) =>
  action(ActionTypes.LIST_DESCRIPTIONS_REQUEST, params);
export const listDescriptionsResponseAction = (params: object) =>
  action(ActionTypes.LIST_DESCRIPTIONS_RESPONSE, params);
export const addDescriptionRequestAction = (params: object) =>
  action(ActionTypes.ADD_DESCRIPTIONS_REQUEST, params);
export const addDescriptionResponseAction = (params: object) =>
  action(ActionTypes.ADD_DESCRIPTIONS_RESPONSE, params);
