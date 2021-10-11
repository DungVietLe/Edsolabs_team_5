import { delay, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { authApi, authApiInfo } from 'api/authApi';
import { loginAction } from './loginSlice';

function* authorize(payload: any) {
  yield delay(500);
  const data = payload.payload;
  try {
    const infoAccount = yield authApi.postAccount(data);
    alert('đăng nhập thành công -__-');
    localStorage.setItem('access_token', infoAccount.access_token);
    let token = localStorage.getItem('access_token');
    const infoUser = yield authApiInfo.getUser(token);
    console.log(infoUser);
    yield put(loginAction.loginSuccessSaga(infoUser));
  } catch (error) {
    yield put(loginAction.loginErrorSaga(error));
  }
}
// function* handleLogout() {}
export function* loginFlow() {
  yield takeLatest(loginAction.login.type, authorize);
}
