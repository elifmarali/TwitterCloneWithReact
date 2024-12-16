import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import userList from "./userList"
const store = configureStore({
  reducer: {
    auth,
    userList
  },
});

export default store;
