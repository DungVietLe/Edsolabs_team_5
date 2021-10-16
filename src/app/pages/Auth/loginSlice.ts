import { createSlice } from '@reduxjs/toolkit';

export interface loginState {
  loading: Boolean;
  isLoggin: Boolean;
  registerSuccess: Boolean;
  registerFaild: Boolean;
}

const initialState: loginState = {
  loading: false,
  isLoggin: false,
  registerSuccess: false,
  registerFaild: false,
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
      state.registerSuccess = action.payload;
    },
    registerError(state, action) {
      state.loading = false;
      state.registerFaild = action.payload;
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
export const selectRegisterFaild = (state: any) => state.login.registerFaild;

export const loginReducer = loginSlice.reducer;
export default loginReducer;
