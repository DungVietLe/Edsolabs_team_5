import { createSlice } from '@reduxjs/toolkit';

export interface loginState {
  loading: Boolean;
  isLoggin: Boolean;
  registerError: string | null;
  registerSuccess: string | null;
}

const initialState: loginState = {
  loading: false,
  isLoggin: false,
  registerError: null,
  registerSuccess: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action) {
      state.loading = true;
    },
    loginSuccessSaga(state, action) {
      state.loading = false;
      state.isLoggin = true;
    },
    loginErrorSaga(state, action) {
      state.loading = false;
      state.isLoggin = false;
      alert(action.payload);
    },
    logout(state) {
      state.isLoggin = false;
      localStorage.removeItem('access_token');
    },
    register(state, action) {
      state.loading = true;
    },
    registerSuccess(state, action) {
      state.loading = false;
      state.registerSuccess =
        'Create Account Success ! Go to Email Active Account -___-';
    },
    registerError(state, action) {
      state.loading = false;
      state.registerError = 'This email address is already registered';
    },
  },
});
//actions
export const loginAction = loginSlice.actions;

//selectors
export const selectLoading = (state: any) => state.login.loading;
export const selectIsLogin = (state: any) => state.login.isLoggin;
export const selectRegisterSuccess = (state: any) =>
  state.login.registerSuccess;
export const selectRegisterError = (state: any) => state.login.registerError;
export //reducer
const loginReducer = loginSlice.reducer;
export default loginReducer;
