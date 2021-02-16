import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import axios from '../../../../utils/axios/index';
import ActionTypes from './constants';
import { getOrderDetailsResponseAction,linkAmouletResponseAction } from './action';

import ApiConstants from '../../../../api/ApiConstants';

// Function to create amoulets
export function* getOrderDetailsFunction(action: any) {

  let url = ApiConstants.BASE_URL + ApiConstants.ORDER_DETAILS;

  try {
    const response = yield call(() => axios.getData(url));
    console.log('response:::::::getOrderDetailsFunction',response);
     yield put(getOrderDetailsResponseAction(response));
  } catch (error) {

  }
}

export function* linkAmouletFunction(action: any) {
  console.log('action.payload=======',action.payload);
  
  let url = ApiConstants.BASE_URL + ApiConstants.LINK_AMOULET;
  let data = action.payload;
  try {
    const response = yield call(() => axios.postData(url, data));
    console.log('response:::::::linkAmouletFunction',response);
     yield put(linkAmouletResponseAction(response));
  } catch (error) {

  }
}



export default function* orderDetailsPageSaga() {
  yield takeLatest(ActionTypes.GET_ORDER_DETAILS_REQUEST, getOrderDetailsFunction);
  yield takeLatest(ActionTypes.LINK_AMOULET_REQUEST, linkAmouletFunction);
}