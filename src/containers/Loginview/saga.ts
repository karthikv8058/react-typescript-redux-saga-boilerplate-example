import { takeLatest,call,put } from 'redux-saga/effects';
import axios from 'axios';

import ActionTypes from './constants';
import ApiConstants from '../../api/ApiConstants';

import {
  loginResponseAction,
  loginErrorAction
} from './action';

export function* getLoginResponse(action:any) {
    function fetchFromApi() {
      return axios.post(ApiConstants.BASE_URL+ApiConstants.AUTH_LOGIN,action.payload.params)
    }
    
    try {
      const response = yield call(fetchFromApi);
      if(response.status === 200 && !response.data.error) {
        yield put(loginResponseAction(response.data));
        yield call(action.payload.loginNav); 
      }
    } catch (err) {
      yield put(loginErrorAction(err));
    }
  }
  
  export default function* loginPageSaga() {
    yield takeLatest(ActionTypes.LOGIN_REQUEST, getLoginResponse);
  }