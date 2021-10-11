import { all } from 'redux-saga/effects';
import { loginSaga } from 'app/pages/Auth/loginSaga';
export function* rootSaga() {
  yield all([loginSaga()]);
}
