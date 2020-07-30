import { takeLatest,takeEvery,call,put } from 'redux-saga/effects';
import axios from 'axios';
import ActionTypes from './constants';
import { 
  amouletCreateResponseAction,
  amouletGiverCodeResponseAction,
  amouletReceiverCodeResponseAction
 } from './action';


import ApiConstants from '../../../../api/ApiConstants';
import { refreshTokenRequestAction } from '../../../Loginview/action';

// Function to create amoulets
export function* createAmoulet(action :any) {

  console.log('createAmoulet :',action.payload);

  let paramsRefresh = {
    refresh_token:action.payload.accessParams.refresh_token,
    grant_type:'refresh_token'
  }

  const url =ApiConstants.BASE_URL + ApiConstants.CREATE_AMOULET;
  const data = action.payload.amouletParams;
  const token = action.payload.accessParams.accessToken;

  function fetchFromApi() {
    return  axios.post(url,data, {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    });
  }

  try {

    const response = yield call(fetchFromApi);
    console.log('createAmoulet response',response);
    console.log('createAmoulet error :',response.response.status);        

    if(response.data.error === false){
      yield put(amouletCreateResponseAction(response));
    }

    if(response.response.status===401){
      yield put(refreshTokenRequestAction(paramsRefresh));
    }
    
    
  } catch (err) {
  }

}

// Function to get giver code
export function* getGiverCode(action :any) {

  console.log('getGiverCode action params:',action.payload);
  
  let paramsRefresh = {
    refresh_token:action.payload.refresh_token,
    grant_type:'refresh_token'
  }

  function fetchFromApi() {
    return axios.get(ApiConstants.BASE_URL + ApiConstants.GET_CODE + 'giver', { headers: {"Authorization" : `Bearer ${action.payload.accessToken}`} })
  }

  try {

    const response = yield call(fetchFromApi); 
   

    console.log('giver response',response);
    console.log('giver error :',response.response.status);
    
    if(response.data.error === false){

      yield put(amouletGiverCodeResponseAction(response.data));

    }

    if(response.response.status===401){
      console.log('401 in saga giver');
      yield put(refreshTokenRequestAction(paramsRefresh));

    }
   
  } catch (err) {
    
  }
}

// Function to get receiver code
export function* getReceiverCode(action :any) {

  console.log('getReceiverCode action params:',action.payload);

  let paramsRefresh = {
    refresh_token:action.payload.refresh_token,
    grant_type:'refresh_token'
  }

  function fetchFromApi() {
    return axios.get(ApiConstants.BASE_URL + ApiConstants.GET_CODE + 'receiver', { headers: {"Authorization" : `Bearer ${action.payload.accessToken}`} })
  }

  try {

    const response = yield call(fetchFromApi); 

    console.log('receiver response',response);
    console.log('receiver error :',response.response.status);

    if(response.response.status===401){

      console.log('401 in saga receiver');
      yield put(refreshTokenRequestAction(paramsRefresh));

    }else if(response.data.error === false){

      yield put(amouletReceiverCodeResponseAction(response.data));

    }else{

      console.log('receiver response error last else :',response);

    }

  } catch (err) {
    
  }
}
  
export default function* amouletPageSaga() {
    yield takeEvery(ActionTypes.AMOULET_CREATE_REQUEST, createAmoulet);
    yield takeEvery(ActionTypes.AMOULET_GIVER_CODE_REQUEST, getGiverCode);
    yield takeEvery(ActionTypes.AMOULET_RECEIVER_CODE_REQUEST, getReceiverCode);
}