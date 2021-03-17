import { combineReducers } from "@reduxjs/toolkit";

import itemReducer from "./Containers/Newitems/reducer";


const rootReducer = combineReducers({
  itemReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
