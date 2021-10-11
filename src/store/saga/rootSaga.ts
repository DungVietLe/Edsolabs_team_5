import { userSaga } from 'store/userReducer/userSaga';
import { all } from 'redux-saga/effects';
import { loginSaga } from 'app/pages/Auth/authSaga';
export function* rootSaga() {
  yield all([userSaga(), loginSaga()]);
}
