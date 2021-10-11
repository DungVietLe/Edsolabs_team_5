import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'models/user';

export interface LoginPayLoad {
  email: string;
  password: string;
}
export interface loginState {
  isLoggin: Boolean;
  logging?: Boolean;
  currentUser?: User;
}

const initialState: loginState = {
  isLoggin: false,
  logging: false,
  currentUser: undefined,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayLoad>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggin = true;
      state.logging = false;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
    },

    logout(state) {
      state.isLoggin = false;
      state.currentUser = undefined;
    },
  },
});
//actions
export const loginAction = loginSlice.actions;

//selectors
export const selectIsLoggin = (state: any) => state.login.isLoggin;
export const selectIsLogging = (state: any) => state.login.logging;

//reducer
const loginReducer = loginSlice.reducer;
export default loginReducer;
