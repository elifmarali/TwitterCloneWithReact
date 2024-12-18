import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalName:null,
  modal: false,
  unfollow: false,
  user:null
};


const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalOpenFunc: (state,aciton) => {
      state.modal = true;
      state.user= aciton.payload      
    },
    modalCloseFunc: (state) => {
      state.modal = false;
      state.user=null
    },
    unfollowFunc: (state) => {
      state.unfollow = true;
    },
    changeModalName: (state,action)=>{
      state.modalName=action.payload;
    },
    resetModalInfo : (state)=>{
      state.modalName=null;
      state.modal=false;
      state.unfollow=false;
      state.user=null;
    },
    log: (state) => {
        console.log("Current state:", JSON.stringify(state,null,2));
    },
  },
});

export default modal.reducer;
export const { modalOpenFunc, modalCloseFunc, unfollowFunc,changeModalName,resetModalInfo,log } =
  modal.actions;

