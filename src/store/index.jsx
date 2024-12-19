import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import userList from "./userList";
import modal from "./modal";
import appearance from "./appearance";

const store = configureStore({
  reducer: {
    auth,
    userList,
    modal,
    appearance,
  },
});

export default store;
