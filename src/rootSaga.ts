import { fork } from 'redux-saga/effects';
import testpageSaga from './containers/Newitems/saga';

export default function* startForman() {
  yield fork(testpageSaga);
}