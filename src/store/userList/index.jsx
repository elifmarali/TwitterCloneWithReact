import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {};

const userList = createSlice({
  name: "userList",
  initialState,
  reducers: {
    getUserList: (state, action) => {
      axios.get("http://localhost:3000/followUsers").then((items) => {
        if (items.length > 0) {
          console.log('items : ',items);
        }
      });
    },
  },
});

export default userList.reducer;
export const { getUserList } = userList.actions;
