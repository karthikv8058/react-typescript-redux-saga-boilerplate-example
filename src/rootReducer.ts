import { combineReducers } from "@reduxjs/toolkit";

import mailVerificationReducer from "./Containers/EmailVerification/reducer";


const rootReducer = combineReducers({
  mailVerificationReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
