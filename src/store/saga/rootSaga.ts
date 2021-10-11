import { loginFlow } from 'app/pages/Auth/loginSaga';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([loginFlow()]);
}
