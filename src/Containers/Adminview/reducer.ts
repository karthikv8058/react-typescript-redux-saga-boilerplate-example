import ActionTypes from "./constants";
import { ContainerActions, adminStates } from "./types";

export const initialState = {
  userList: [],
  amouletList: [],
  profileImages: "",
  storyMedia: "",
  isloading: false,
  amouletCount: 0,
  dashboard: {},
};

const adminReducer = (
  state: adminStates = initialState,
  action: ContainerActions
) => {
  switch (action.type) {
    case ActionTypes.USER_LIST_REQUEST:

      return {
        ...state,
        isloading: true,
      };
    case ActionTypes.USER_LIST_RESPONSE:

      return {
        ...state,
        userList: action.payload,
        isloading: false,
      };
    case ActionTypes.GEN_CONFIG_REQUEST:
      return {
        ...state,
      };
    case ActionTypes.GEN_CONFIG_RESPONSE:
      return {
        ...state,
        profileImages: action.payload.profileImages,
        storyMedia: action.payload.storyMedia,
      };
    case ActionTypes.AMOULET_LIST_REQUEST:
      return {
        ...state,
        isloading: true,
      };
    case ActionTypes.AMOULET_LIST_RESPONSE:

      return {
        ...state,
        amouletList: action.payload,
        amouletCount: action.payload.length,
        isloading: false,
      };
    case ActionTypes.CLEAR_ADMIN_STATES:
      return {
        userList: [],
        amouletList: [],
        profileImages: "",
        storyMedia: "",
        isloading: false,
      };
    case ActionTypes.DASHBOARD_REC_GIV_COUNT_REQUEST:
      return {
        ...state,
      };
    case ActionTypes.DASHBOARD_REC_GIV_COUNT_RESPONSE:
      return {
        ...state,
        dashboard: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducer;
