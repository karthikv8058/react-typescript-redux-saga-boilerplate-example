import { takeLatest,call,put } from 'redux-saga/effects';
import axios from 'axios';
import ActionTypes from './constants';
import { 
  amouletCreateResponseAction,
  amouletGiverCodeResponseAction,
  amouletReceiverCodeResponseAction,
  amouletValidateResponseAction
 } from './action';


import ApiConstants from '../../../../api/ApiConstants';

// Function to create amoulets
export function* createAmoulet(action :any) {

  console.log('createAmoulet :',action.payload);

  const url =ApiConstants.BASE_URL + ApiConstants.CREATE_AMOULET;
  const data = action.payload.amouletParams;
  const token = action.payload.accessParams.accessToken;

  axios.post(url,data, {
    headers: {
      'Authorization': `Bearer ${token}` 
    }
  }).then((res)=>{
    console.log('createAmoulet res :', res); 
  })
  .catch((err)=>{
    console.log('createAmoulet err :', err);
  });

  // function fetchFromApi() {
  //   return axios.get(ApiConstants.BASE_URL + ApiConstants.AMOULET_LIST, { headers: {"Authorization" : `Bearer ${action.payload.accessToken}`} })
  // }

  // try {
  //   const response = yield call(fetchFromApi);      
  //   if(response.data.error === false){
  //     yield put(amouletCreateResponseAction(response));
  //   }
  // } catch (err) {
  // }

}

// Function to get giver code
export function* getGiverCode(action :any) {
  function fetchFromApi() {
    return axios.get(ApiConstants.BASE_URL + ApiConstants.GET_CODE + 'giver', { headers: {"Authorization" : `Bearer ${action.payload.accessToken}`} })
  }
  try {
    const response = yield call(fetchFromApi);      
    if(response.data.error === false){
      yield put(amouletGiverCodeResponseAction(response.data));
    }
  } catch (err) {
    console.log('error in amoulet list api:', err);
  }
}

// Function to get giver code
export function* getReceiverCode(action :any) {
  function fetchFromApi() {
    return axios.get(ApiConstants.BASE_URL + ApiConstants.GET_CODE + 'receiver', { headers: {"Authorization" : `Bearer ${action.payload.accessToken}`} })
  }
  try {
    const response = yield call(fetchFromApi);      
    if(response.data.error === false){
      yield put(amouletReceiverCodeResponseAction(response.data));
    }
  } catch (err) {
    console.log('error in amoulet list api:', err);
  }
}

// Function to validate nfc and serial numbers
export function* validateNFCAndSerialNumber(action :any) {
  const url = ApiConstants.BASE_URL + ApiConstants.VALIDATE_NFC_SERIAL + action.payload.params.type;
  const data:object = {
    value: action.payload.params.value
  };
  const token = action.payload.accessParams.accessToken;
  function fetchFromApi() {
    return axios.post(url, data, {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    });
  }
  try {
    const response = yield call(fetchFromApi);
    console.log('3435345', response.data);
    if(response.status === 200 && response.data.error === false){
      console.log(423434234);
      yield put(amouletValidateResponseAction(response.data));
    }
  } catch (err) {
    console.log('error in amoulet list api:', err);
  }
  
  
  // function fetchFromApi() {
  //   return axios.get(ApiConstants.BASE_URL + ApiConstants.GET_CODE + 'receiver', { headers: {"Authorization" : `Bearer ${action.payload.accessToken}`} })
  // }
  // try {
  //   const response = yield call(fetchFromApi);      
  //   if(response.data.error === false){
  //     yield put(amouletReceiverCodeResponseAction(response.data));
  //   }
  // } catch (err) {
  //   console.log('error in amoulet list api:', err);
  // }
}
  
export default function* amouletPageSaga() {
    yield takeLatest(ActionTypes.AMOULET_CREATE_REQUEST, createAmoulet);
    yield takeLatest(ActionTypes.AMOULET_GIVER_CODE_REQUEST, getGiverCode);
    yield takeLatest(ActionTypes.AMOULET_VALIDATE_CODE_REQUEST, validateNFCAndSerialNumber);
}