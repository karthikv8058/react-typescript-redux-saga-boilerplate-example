import { combineReducers } from "@reduxjs/toolkit";

import itemReducer from "./Containers/Newitems/reducer";
import loginReducer from "./Containers/Loginview/reducer";
import adminReducer from "./Containers/Adminview/reducer";
import amouletReducer from "./Containers/Adminview/AdminComponents/Amoulet/reducer";
import storyReducer from "./Containers/Adminview/AdminComponents/Stories/reducer";
import descriptionReducer from "./Containers/Adminview/AdminComponents/Descriptions/reducer";
import userlistReducer from "./Containers/Adminview/AdminComponents/Userlist/reducer";
import orderDetailsReducer from "./Containers/Adminview/AdminComponents/OrderDetails/reducer";

const rootReducer = combineReducers({
  itemReducer,
  loginReducer,
  adminReducer,
  amouletReducer,
  storyReducer,
  descriptionReducer,
  userlistReducer,
  orderDetailsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
