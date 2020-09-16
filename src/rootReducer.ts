import { combineReducers } from "@reduxjs/toolkit";

import itemReducer from "./Containers/Newitems/reducer";
import loginReducer from "./Containers/Loginview/reducer";
import adminReducer from "./Containers/Adminview/reducer";
import amouletReducer from "./Containers/Adminview/AdminComponents/Amoulet/reducer";
import storyReducer from "./Containers/Adminview/AdminComponents/Stories/reducer";
import descriptionReducer from "./Containers/Adminview/AdminComponents/Descriptions/reducer";

const rootReducer = combineReducers({
  itemReducer,
  loginReducer,
  adminReducer,
  amouletReducer,
  storyReducer,
  descriptionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
