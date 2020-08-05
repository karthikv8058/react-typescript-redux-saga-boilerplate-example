import { takeLatest,takeEvery,call,put } from 'redux-saga/effects';
import axios from '../../../../utils/axios/index';
import ActionTypes from './constants';
import { 
  storyListResponseAction,
 } from './action';

import ApiConstants from '../../../../api/ApiConstants';

// Function to get stories
export function* getStoryList(action:any) {
  let url = ApiConstants.BASE_URL + ApiConstants.STORY_LIST;
  try {
    const response = yield call(()=> axios.postData(url));
    console.log('response:',response);
    yield put(storyListResponseAction(response));
  } catch (error) {
  
  }
}
  
export default function* amouletPageSaga() {
  yield takeEvery(ActionTypes.STORY_LIST_REQUEST, getStoryList);
}