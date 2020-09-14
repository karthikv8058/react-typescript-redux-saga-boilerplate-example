import ActionTypes from "./constants";
import { ContainerActions, decriptionStates } from "./types";
import { string, object } from "yup";

export const initialState = {
  descriptionList: {},
  isUpdate: false,
};
const descriptionReducer = (
  state: decriptionStates = initialState,
  action: ContainerActions
) => {
  switch (action.type) {
    case ActionTypes.LIST_DESCRIPTIONS_REQUEST:
      console.log("LIST_DESCRIPTIONS_REQUEST");

      return {
        ...state,
        isUpdate: false,
      };
    case ActionTypes.LIST_DESCRIPTIONS_RESPONSE:
      return {
        ...state,
        descriptionList: action.payload,
      };
    case ActionTypes.ADD_DESCRIPTIONS_REQUEST:
      return {
        ...state,
      };
    case ActionTypes.ADD_DESCRIPTIONS_RESPONSE:
      console.log("ADD_DESCRIPTIONS_RESPONSE");
      return {
        ...state,
        isUpdate: true,
      };
    default:
      return state;
  }
};

export default descriptionReducer;
