// import { combineReducers } from 'redux';

// import itemReducer from './Containers/Newitems/reducer';
// import loginReducer from './Containers/Loginview/reducer';


// export default combineReducers({
//   item:itemReducer,
//   login:loginReducer,
// })


import { combineReducers } from '@reduxjs/toolkit';

import itemReducer from './Containers/Newitems/reducer';
import loginReducer from './Containers/Loginview/reducer';

const rootReducer = combineReducers({
  itemReducer,
  loginReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;



