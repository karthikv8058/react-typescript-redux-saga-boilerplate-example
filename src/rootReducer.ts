
import { combineReducers } from '@reduxjs/toolkit';

import itemReducer from './Containers/Newitems/reducer';
import loginReducer from './Containers/Loginview/reducer';
import adminReducer from './Containers/Adminview/reducer';

const rootReducer = combineReducers({
  itemReducer,
  loginReducer,
  adminReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;



