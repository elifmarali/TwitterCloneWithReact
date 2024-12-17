import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserList = createAsyncThunk("getUserList", async () => {
  const response = await axios.get("http://localhost:3000/followUsers");
  return response.data;
});

export const followUser = createAsyncThunk(
  "followUser",
  async ({ userId, isFollow },{dispatch}) => {
    console.log(userId, isFollow);
    await axios.patch(`http://localhost:3000/followUsers/${userId}`, {
      followed: isFollow,
    });
    dispatch(getUserList());
  }
);

const initialState = {
  userList: [],
};

const userList = createSlice({
  name: "userList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserList.fulfilled, (state, action) => {
      state.userList = action.payload;
    });
  },
});

export default userList.reducer;
// reducerlar içerisindeki fonksiyonlar tanımlanır
export const {} = userList.actions;
