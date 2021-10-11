import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'models/user';

export interface loginState {
  isLoggin: Boolean;
  currentUser?: User;
}

const initialState: loginState = {
  isLoggin: false,
  currentUser: undefined,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action) {},
    loginSuccessSaga(state, action) {
      state.isLoggin = true;
      console.log('redux nhận được', action.payload);
    },
    loginErrorSaga(state, action) {
      console.log('lỗi');
    },
    logout(state) {
      state.isLoggin = false;
    },
  },
});
//actions
export const loginAction = loginSlice.actions;

//selectors
export const selectIsLoggin = (state: any) => state.login.isLoggin;

//reducer
const loginReducer = loginSlice.reducer;
export default loginReducer;
