import { takeLatest,call,put } from 'redux-saga/effects';
import axios from 'axios';
import ActionTypes from './constants';
import {
  addItemsResponse,
} from './action';




export function* getRepos() {
    // Select username from store
    console.log('getRepos');

    function fetchFromApi() {
      return axios.get('https://jsonplaceholder.typicode.com/comments')
    }
    
  
    try {
      const response = yield call(fetchFromApi);
      console.log('response from axios :',response.data);
      yield put(addItemsResponse(response.data));
    } catch (err) {
    //   yield put(testDataErrorAction(err));
    }
  }
  
  export default function* testpageSaga() {
    // See example in containers/HomePage/saga.js
    yield takeLatest(ActionTypes.ADD_ITEM, getRepos);
  }