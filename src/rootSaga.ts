import { fork } from "redux-saga/effects";
import mailVerificationSaga from "./Containers/EmailVerification/saga";


export default function* startForman() {
  yield fork(mailVerificationSaga);

}
