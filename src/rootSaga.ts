import { fork } from 'redux-saga/effects';
import testpageSaga from './Containers/Newitems/saga';
import loginPageSaga from './Containers/Loginview/saga';

export default function* startForman() {
  yield fork(testpageSaga);
  yield fork(loginPageSaga);
}