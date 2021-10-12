import { delay, put, takeLatest } from '@redux-saga/core/effects';
import { authApi } from 'api/authApi';
import { loginAction } from './loginSlice';

function* authorize(payload: any) {
  yield delay(200);
  const data = payload.payload;
  try {
    const infoAccount = yield authApi.postAccount(data);
    localStorage.setItem('access_token', infoAccount.access_token);
    yield put(loginAction.loginSuccessSaga(''));
  } catch (error) {
    yield put(
      loginAction.loginErrorSaga('username or password wrong please try agian'),
    );
  }
}
function* registerUser(payload: any) {
  yield delay(200);
  const data = payload.payload;
  try {
    yield authApi.postRegister(data);
    yield put(loginAction.registerSuccess(''));
  } catch (error) {
    yield put(loginAction.registerError('user.register.email-already-existed'));
  }
}

export function* loginFlow() {
  yield takeLatest(loginAction.login.type, authorize);
}

export function* registerFlow() {
  yield takeLatest(loginAction.register.type, registerUser);
}
