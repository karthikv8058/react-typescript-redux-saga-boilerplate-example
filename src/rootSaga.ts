import { fork } from "redux-saga/effects";
import testpageSaga from "./Containers/Newitems/saga";


export default function* startForman() {
  yield fork(testpageSaga);
  
}
