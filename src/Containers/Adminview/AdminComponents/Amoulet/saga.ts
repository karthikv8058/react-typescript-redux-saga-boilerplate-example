import { takeLatest,takeEvery,call,put } from 'redux-saga/effects';
import axios from '../../../../utils/axios/index';
import ActionTypes from './constants';
import { 
  amouletCreateResponseAction,
  amouletGiverCodeResponseAction,
  amouletReceiverCodeResponseAction,
  amouletValidateResponseAction
 } from './action';

import ApiConstants from '../../../../api/ApiConstants';

// Function to create amoulets
export function* createAmoulet(action:any) {

  let url = ApiConstants.BASE_URL + ApiConstants.CREATE_AMOULET;
  let data= action.payload.amouletParams;

  try {
    const response = yield call(()=> axios.postData(url,data));
    console.log('createAmoulet :',response);
    yield put(amouletCreateResponseAction(response));
  } catch (error) {
    
  }
}

// Function to get giver code
export function* getGiverCode(action:any) {
  console.log('getGiverCode action:',action.payload);
  
  let url = ApiConstants.BASE_URL + ApiConstants.GET_CODE + 'giver';

  try {
    const response = yield call(()=> axios.getData(url));
    console.log('getGiverCode response:',response);
    yield put(amouletGiverCodeResponseAction(response));
  } catch (error) {
    
  }

}

// Function to get receiver code
export function* getReceiverCode(action:any) {
  console.log('getReceiverCode action params :',action.payload);
  
  let url = ApiConstants.BASE_URL + ApiConstants.GET_CODE + 'receiver';

  try {
    const response = yield call(()=> axios.getData(url));
    console.log('getReceiverCode response:',response);
    yield put(amouletReceiverCodeResponseAction(response));
  } catch (error) {
    
  }

}
// Function to validate nfc and serial numbers
export function* validateNFCAndSerialNumber(action :any) {

  console.log('validateNFCAndSerialNumber action params:',action.payload);
  

  const url = ApiConstants.BASE_URL + ApiConstants.VALIDATE_NFC_SERIAL + action.payload.params.type;
  const data:object = {
    value: action.payload.params.value
  };

  try {
      const response = yield call(()=> axios.postData(url,data));
      console.log('validateNFCAndSerialNumber response:',response);
      
      yield put(amouletValidateResponseAction(response.data));
    
  } catch (err) {
    
  }
  
}
  
export default function* amouletPageSaga() {
    yield takeLatest(ActionTypes.AMOULET_CREATE_REQUEST, createAmoulet);
    yield takeLatest(ActionTypes.AMOULET_GIVER_CODE_REQUEST, getGiverCode);
    yield takeLatest(ActionTypes.AMOULET_RECEIVER_CODE_REQUEST, getReceiverCode);
    yield takeLatest(ActionTypes.AMOULET_VALIDATE_CODE_REQUEST, validateNFCAndSerialNumber);
}