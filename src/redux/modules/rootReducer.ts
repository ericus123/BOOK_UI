import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import contactSlice from "./contacts/contactSlice";
import navigationSlice from "./navigation/navigationSlice";
const rootReducer = combineReducers({
  navigation: navigationSlice,
  auth: authSlice,
  contact: contactSlice,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
