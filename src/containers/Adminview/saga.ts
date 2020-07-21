import { takeLatest,call,put } from 'redux-saga/effects';
import axios from 'axios';
import ActionTypes from './constants';
import { 
  userListResponseAction,
  genConfigResponseAction,
 } from './action';


import ApiConstants from '../../api/ApiConstants';




export function* getUserlistRepos(action:any) {
  
    // Select username from store
    console.log('adminpageSaga :',action);

    function fetchFromApi() {
      console.log('api fn');
      
      // return axios.post(ApiConstants.BASE_URL+ApiConstants.AUTH_LOGIN,action.payload.params)
      return axios.get(ApiConstants.BASE_URL+ApiConstants.USER_LIST, { headers: {"Authorization" : `Bearer ${action.payload.accessToken}`} })
    }
    
  
    try {
      console.log('try ');
      
      const response = yield call(fetchFromApi);
      // console.log('response from axios :',response.data);
      if(response.data.error===false){
        yield put(userListResponseAction(response.data));
      }
    } catch (err) {

      console.log('error in admin req:',err);
      
      //yield put(testDataErrorAction(err));
    }
  }

  export function* getGenConfig(action:any) {
  
    // Select username from store
    console.log('getGenConfig :',action.payload);

    function fetchFromApi() {
      console.log('api fn getGenConfig');
      
      // return axios.post(ApiConstants.BASE_URL+ApiConstants.AUTH_LOGIN,action.payload.params)
      return axios.get(ApiConstants.BASE_URL+ApiConstants.GEN_CONFIG, { headers: {"Authorization" : `Bearer ${action.payload.accessToken}`} })
    }
    
  
    try {
      console.log('try ');
      
      const response = yield call(fetchFromApi);
       console.log('response from axios :',response.data);
      if(response.data.error===false){
        yield put(genConfigResponseAction(response.data));
      }
    } catch (err) {

      console.log('error in admin req:',err);
      
      //yield put(testDataErrorAction(err));
    }
  }
  
  export default function* adminPageSaga() {
    // See example in containers/HomePage/saga.js
    yield takeLatest(ActionTypes.USER_LIST_REQUEST, getUserlistRepos);
    yield takeLatest(ActionTypes.GEN_CONFIG_REQUEST, getGenConfig);
  }