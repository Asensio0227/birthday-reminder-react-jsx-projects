import { configureStore } from "@reduxjs/toolkit";
import userSlice from './features/user/userSlice';


export const store = configureStore({
  reducers: {
    user: userSlice
  }
});