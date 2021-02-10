import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import axios from '../../../../utils/axios/index';
import ActionTypes from './constants';
import {
  getOrderDetailsResponseAction,
} from './action';

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



export default function* orderDetailsPageSaga() {
  yield takeLatest(ActionTypes.GET_ORDER_DETAILS_REQUEST, getOrderDetailsFunction);
}