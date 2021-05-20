import { takeLatest,call,put } from 'redux-saga/effects';
import axios from "../../utils/axios/index";
import ActionTypes from './constants';
import ApiConstants from '../../api/ApiConstants';
import {
  tokenVerificationResponseAction,
  enableUserResponseAction
} from './action';

export function* handleTokenVerification(action:any) {
  console.log('handleTokenVerification=====>',action);
  
    let url = ApiConstants.BASE_URL + ApiConstants.VERIFY_TOKEN;
  let data = action.payload;
    try {
      const response = yield call(() => axios.postData(url,data));
      console.log('response from axios :',response);
      yield put(tokenVerificationResponseAction(response));
    } catch (err) {
    }
  }

  export function* handleEnableUser(action:any) {
    console.log('handleEnableUser=====>',action);
    
      let url = ApiConstants.BASE_URL + ApiConstants.ENABLE_USER;
    let data = action.payload;
      try {
        const response = yield call(() => axios.postData(url,data));
        console.log('response from axios :',response);
        yield put(enableUserResponseAction(response));
      } catch (err) {
      }
    }
  
  export default function* mailVerificationSaga() {
    yield takeLatest(ActionTypes.TOKEN_VERIFICATION_REQUEST, handleTokenVerification);
    yield takeLatest(ActionTypes.ENABLE_USER_REQUEST, handleEnableUser);
  }