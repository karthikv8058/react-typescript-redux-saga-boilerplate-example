import { takeLatest, takeEvery, call, put } from "redux-saga/effects";
import axios from "../../utils/axios/index";
import ActionTypes from "./constants";
import {
  userListResponseAction,
  genConfigResponseAction,
  amoluletListResponseAction,
  dashboardRecGivCountResponseAction,
} from "./action";

import ApiConstants from "../../api/ApiConstants";

export function* getUserlist(action: any) {

  let url = ApiConstants.BASE_URL + ApiConstants.USER_LIST;

  try {
    const response = yield call(() => axios.getData(url));
    yield put(userListResponseAction(response));
    console.log('getUserlist:::::::', response);
    
  } catch (error) { }
}

export function* getGenConfig(action: any) {
  let url = ApiConstants.BASE_URL + ApiConstants.GEN_CONFIG;

  try {
    const response = yield call(() => axios.getData(url));
    yield put(genConfigResponseAction(response));
  } catch (error) { }
}

export function* getAmouletList(action: any) {
  let url = ApiConstants.BASE_URL + ApiConstants.AMOULET_LIST;

  try {
    const response = yield call(() => axios.getData(url));
    yield put(amoluletListResponseAction(response));
  } catch (error) { }
}

export function* getDashboardCount(action: any) {
  let url = ApiConstants.BASE_URL + ApiConstants.DASHBOARD;

  try {
    const response = yield call(() => axios.getData(url));
    yield put(dashboardRecGivCountResponseAction(response));
  } catch (error) { }
}

export default function* adminPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(ActionTypes.USER_LIST_REQUEST, getUserlist);
  yield takeEvery(ActionTypes.GEN_CONFIG_REQUEST, getGenConfig);
  yield takeEvery(ActionTypes.AMOULET_LIST_REQUEST, getAmouletList);
  yield takeEvery(
    ActionTypes.DASHBOARD_REC_GIV_COUNT_REQUEST,
    getDashboardCount
  );
}
