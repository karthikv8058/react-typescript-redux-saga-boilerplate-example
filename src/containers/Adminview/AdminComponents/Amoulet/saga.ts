import { takeLatest,call,put } from 'redux-saga/effects';
import axios from 'axios';
import ActionTypes from './constants';
import { 
  amouletCreateResponseAction,
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
      console.log('createAmoulet res :',res); 
    })
    .catch((err)=>{
      console.log('createAmoulet err :',err);
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
  
  export default function* amouletPageSaga() {
    yield takeLatest(ActionTypes.AMOULET_CREATE_REQUEST,createAmoulet);
  
  }