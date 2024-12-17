import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import userList from "./userList";
import modal from "./modal";

const store = configureStore({
  reducer: {
    auth,
    userList,
    modal
  },
});

export default store;
