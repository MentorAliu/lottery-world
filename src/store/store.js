import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import '../features/users/usersSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
