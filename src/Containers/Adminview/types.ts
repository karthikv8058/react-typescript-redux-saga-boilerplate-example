import { ActionType } from "typesafe-actions";
import * as actions from "./action";

export interface adminStates {
  userList: any;
  amouletList: any;
  storyMedia: any;
  profileImages: any;
  isloading: boolean;
  amouletCount: number;
  dashboard: object;
}

/* --- ACTIONS --- */
type AdminpageActions = ActionType<typeof actions>;

export type ContainerActions = AdminpageActions;

// export default ContainerActions;
