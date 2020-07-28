import { takeLatest,call,put } from 'redux-saga/effects';
import axios from 'axios';

import ActionTypes from './constants';
import ApiConstants from '../../api/ApiConstants';

import {
  loginResponseAction,
  loginErrorAction
} from './action';

import {
  refreshTokenResponseAction
} from '../Loginview/action';

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

  export function* getRefreshTokenResponse(action:any) {

    console.log('getRefreshTokenResponse params:',action.payload);

    function fetchFromApi() {
      return axios.post(ApiConstants.BASE_URL+ApiConstants.AUTH_LOGIN,action.payload)
    }
    
    try {

      const response = yield call(fetchFromApi);
      console.log('getRefreshTokenResponse Data:',response);
      
      if(response.status === 200 && response.statusText=='OK') {

        yield put(refreshTokenResponseAction(response.data)); 
      }
    } catch (err) {
      
    }
  }
  
  export default function* loginPageSaga() {
    yield takeLatest(ActionTypes.LOGIN_REQUEST, getLoginResponse);
    yield takeLatest(ActionTypes.REFRESH_TOKEN_REQUEST, getRefreshTokenResponse);
  }