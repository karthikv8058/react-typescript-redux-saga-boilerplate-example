import { takeLatest,takeEvery,call,put } from 'redux-saga/effects';
import axios from '../../../../utils/axios/index';
import ActionTypes from './constants';

import ApiConstants from '../../../../api/ApiConstants';

// Function to create amoulets
export function* listDescriptions(action:any) {

  
}


export default function* amouletPageSaga() {
    yield takeLatest(ActionTypes.ADD_DESCRIPTIONS_REQUEST, listDescriptions);

}