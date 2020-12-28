import { fork } from "redux-saga/effects";
import testpageSaga from "./Containers/Newitems/saga";
import loginPageSaga from "./Containers/Loginview/saga";
import adminPageSaga from "./Containers/Adminview/saga";
import amouletPageSaga from "./Containers/Adminview/AdminComponents/Amoulet/saga";
import storyPageSaga from "./Containers/Adminview/AdminComponents/Stories/saga";
import descriptionPageSaga from "./Containers/Adminview/AdminComponents/Descriptions/saga";
import userlistPageSaga from "./Containers/Adminview/AdminComponents/Userlist/saga";

export default function* startForman() {
  yield fork(testpageSaga);
  yield fork(loginPageSaga);
  yield fork(adminPageSaga);
  yield fork(amouletPageSaga);
  yield fork(storyPageSaga);
  yield fork(descriptionPageSaga);
  yield fork(userlistPageSaga);
}
