import { takeLatest, call, put } from 'redux-saga/effects';
import axios from '../../utils/axios/index';
import ActionTypes from './constants';
import ApiConstants from '../../api/ApiConstants';


import {
  loginResponseAction,
  loginErrorAction,
} from './action';

import {
  refreshTokenResponseAction
} from '../Loginview/action';


export function* getLoginResponse(action: any) {

  let url = ApiConstants.BASE_URL + ApiConstants.AUTH_LOGIN;
  let data = action.payload.params;

  try {

    const response = yield call(() => axios.postData(url, data));
    localStorage.setItem('access_token', response.access_token);
    localStorage.setItem('refresh_token', response.refresh_token);
    yield put(loginResponseAction(response));
    yield call(action.payload.loginNav);
  } catch (error) {
    yield put(loginErrorAction(error));
  }
}

// export function* getRefreshTokenResponse(action:any) {

//   let url = ApiConstants.BASE_URL + ApiConstants.AUTH_LOGIN;
//   let data= action.payload;

//   try {
//     const response = yield call(()=> axios.postData(url,data));
//     yield put(refreshTokenResponseAction(response));
//   } catch (error) {

//   }
// }

export default function* loginPageSaga() {
  yield takeLatest(ActionTypes.LOGIN_REQUEST, getLoginResponse);
  // yield takeLatest(ActionTypes.REFRESH_TOKEN_REQUEST, getRefreshTokenResponse);
}