import { takeLatest,takeEvery,call,put } from 'redux-saga/effects';
import axios from 'axios';
import ActionTypes from './constants';
import { 
  userListResponseAction,
  genConfigResponseAction,
  amoluletListResponseAction,
 } from './action';

 import {
  refreshTokenResponseAction,
  refreshTokenRequestAction
} from '../Loginview/action';


import ApiConstants from '../../api/ApiConstants';



export function* getUserlist(action:any) {
  
    let paramsRefresh = {
      refresh_token:action.payload.refresh_token,
      grant_type:'refresh_token'
    }

    function fetchFromApi() {
      return axios.get(ApiConstants.BASE_URL+ApiConstants.USER_LIST, { headers: {"Authorization" : `Bearer ${action.payload.accessToken}`} })
    }

    try {

      const response = yield call(fetchFromApi);
      const error = yield call(fetchFromApi);

      if(response.data.error===false){
        yield put(userListResponseAction(response.data));
      }

      if(error.response.status===401){
        yield put(refreshTokenRequestAction(paramsRefresh));
      }
      
    } catch (err) {
      
    }


  }

  export function* getGenConfig(action:any) {

    let paramsRefresh = {
      refresh_token:action.payload.refresh_token,
      grant_type:'refresh_token'
    }
  
    function fetchFromApi() {
      return axios.get(ApiConstants.BASE_URL+ApiConstants.GEN_CONFIG, { headers: {"Authorization" : `Bearer ${action.payload.accessToken}`} })
    }
  
    try {
      const response = yield call(fetchFromApi);
      if(response.data.error===false){
        yield put(genConfigResponseAction(response.data));
      }
    } catch (err) {
      yield put(refreshTokenRequestAction(paramsRefresh));
    }
  }
  
  // Function to list amoulets
  export function* getAmouletList(action :any) {

    let paramsRefresh = {
      refresh_token:action.payload.refresh_token,
      grant_type:'refresh_token'
    }

    function fetchFromApi() {
      return axios.get(ApiConstants.BASE_URL + ApiConstants.AMOULET_LIST, { headers: {"Authorization" : `Bearer ${action.payload.accessToken}`} })
    }

    try {
      const response = yield call(fetchFromApi);      
      const error = yield call(fetchFromApi);  

      if(response.data.error === false){
        yield put(amoluletListResponseAction(response.data));
      }
      if(error.response.status===401){
        yield put(refreshTokenRequestAction(paramsRefresh));
      }
    } catch (err) {
      
    }
  }
  
  export default function* adminPageSaga() {
    // See example in containers/HomePage/saga.js
    yield takeEvery(ActionTypes.USER_LIST_REQUEST, getUserlist);
    yield takeEvery(ActionTypes.GEN_CONFIG_REQUEST, getGenConfig);
    yield takeEvery(ActionTypes.AMOULET_LIST_REQUEST, getAmouletList);
  }