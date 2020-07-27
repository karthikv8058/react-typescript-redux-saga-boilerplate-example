import { takeLatest,call,put } from 'redux-saga/effects';
import axios from 'axios';
import ActionTypes from './constants';
import { 
  userListResponseAction,
  genConfigResponseAction,
  amoluletListResponseAction,
 } from './action';


import ApiConstants from '../../api/ApiConstants';




export function* getUserlist(action:any) {
    console.log('getUserlistRepos');
    
    function fetchFromApi() {;
      return axios.get(ApiConstants.BASE_URL+ApiConstants.USER_LIST, { headers: {"Authorization" : `Bearer ${action.payload.accessToken}`} })
    }
    try {
      const response = yield call(fetchFromApi);
      console.log('response data from userlist',response.data);
      
      if(response.data.error===false){
        yield put(userListResponseAction(response.data));
      }
    } catch (err) {

    }
  }

  export function* getGenConfig(action:any) {
  
    function fetchFromApi() {
      return axios.get(ApiConstants.BASE_URL+ApiConstants.GEN_CONFIG, { headers: {"Authorization" : `Bearer ${action.payload.accessToken}`} })
    }
  
    try {
      const response = yield call(fetchFromApi);
      if(response.data.error===false){
        yield put(genConfigResponseAction(response.data));
      }
    } catch (err) {

    }
  }
  
  // Function to list amoulets
  export function* getAmouletList(action :any) {

    console.log('getAmouletList :', action.payload);

    function fetchFromApi() {
      return axios.get(ApiConstants.BASE_URL + ApiConstants.AMOULET_LIST, { headers: {"Authorization" : `Bearer ${action.payload.accessToken}`} })
    }

    try {
      const response = yield call(fetchFromApi);      
      if(response.data.error === false){
        yield put(amoluletListResponseAction(response.data));
      }
    } catch (err) {
      console.log('error in amoulet list api:', err);
    }
  }
  
  export default function* adminPageSaga() {
    // See example in containers/HomePage/saga.js
    yield takeLatest(ActionTypes.USER_LIST_REQUEST, getUserlist);
    yield takeLatest(ActionTypes.GEN_CONFIG_REQUEST, getGenConfig);
    yield takeLatest(ActionTypes.AMOULET_LIST_REQUEST, getAmouletList);
  }