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
      console.log('response from axios :',response);
      if(response.status === 200 && !response.data.error) {
        console.log('response data from axios no error :',response.data);
        yield put(loginResponseAction(response.data));
        yield call(action.payload.loginNav); 
      }
    } catch (err) {
      console.log('response from axios err:',err);
      yield put(loginErrorAction(err));
    }
  }
  
  export default function* loginPageSaga() {
    // See example in containers/HomePage/saga.js
    yield takeLatest(ActionTypes.LOGIN_REQUEST, getLoginResponse);
  }