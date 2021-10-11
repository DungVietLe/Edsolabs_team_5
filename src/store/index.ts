import loginReducer from 'app/pages/Auth/loginSlice';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  login: loginReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
