import { takeLatest, takeEvery, call, put } from "redux-saga/effects";
import axios from "../../../../utils/axios/index";
import ActionTypes from "./constants";
import ApiConstants from "../../../../api/ApiConstants";
import {
  listDescriptionsResponseAction,
  addDescriptionResponseAction,
} from "./action";

import Swal from "sweetalert2";

// Function to LIST descriptions
export function* listDescriptions(action: any) {
  let url = ApiConstants.BASE_URL + ApiConstants.LIST_DESCRIPTIONS;
  try {
    const response = yield call(() => axios.getData(url));
    yield put(listDescriptionsResponseAction(response));
  } catch (error) {}
}

//Function to ADD/UPDATE descriptions
export function* addDescriptions(action: any) {
  let url = ApiConstants.BASE_URL + ApiConstants.ADD_DESCRIPTIONS;

  let data = action.payload.descriptionParams;

  try {
    const response = yield call(() => axios.postData(url, data));
    console.log("addDescriptions response :", response);
    yield put(addDescriptionResponseAction(response));

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Updated Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {}
}

export default function* descriptionPageSaga() {
  yield takeLatest(ActionTypes.LIST_DESCRIPTIONS_REQUEST, listDescriptions);
  yield takeLatest(ActionTypes.ADD_DESCRIPTIONS_REQUEST, addDescriptions);
}
