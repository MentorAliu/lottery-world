import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import modalReducer from "../features/modal/modalSlice";
import "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    modal: modalReducer,
  },
});
