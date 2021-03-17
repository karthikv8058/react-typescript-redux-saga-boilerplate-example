import { takeLatest,call,put } from 'redux-saga/effects';
import axios from "../../utils/axios/index";
import ActionTypes from './constants';
import {
  addItemsResponse,
} from './action';

export function* getRepos() {

    let url = 'https://jsonplaceholder.typicode.com/comments';

    try {
      const response = yield call(() => axios.getData(url));
      console.log('response from axios :',response);
      yield put(addItemsResponse(response));
    } catch (err) {
    //   yield put(testDataErrorAction(err));
    }
  }
  
  export default function* testpageSaga() {
    // See example in containers/HomePage/saga.js
    yield takeLatest(ActionTypes.ADD_ITEM, getRepos);
  }