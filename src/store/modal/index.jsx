import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  unfollowModal: false,
  unfollow: false,
  user:null
};


const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    unfollowModalOpenFunc: (state,aciton) => {
      state.unfollowModal = true;
      state.user= aciton.payload      
    },
    unfollowModalCloseFunc: (state) => {
      state.unfollowModal = false;
      state.user=null
    },
    unfollowFunc: (state) => {
      state.unfollow = true;
    },
    log: (state) => {
        console.log("Current state:", JSON.stringify(state,null,2));
    },
  },
});

export default modal.reducer;
export const { unfollowModalOpenFunc, unfollowModalCloseFunc, unfollowFunc,log } =
  modal.actions;

