import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface loginState {
  isLoggin: Boolean;
  logging?: Boolean;
}

const initialState: loginState = {
  isLoggin: false,
  logging: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {},
    loginSuccess(state, action: PayloadAction<string>) {},
    loginFailed(state, action: PayloadAction<string>) {},

    logout(state) {},
  },
});
//actions
export const loginAction = loginSlice.actions;

//reducer
const loginReducer = loginSlice.reducer;
export default loginReducer;
