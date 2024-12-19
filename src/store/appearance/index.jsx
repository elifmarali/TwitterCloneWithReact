import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backgroundColors: {
  },
  color: {
  },
  fontSize: 16,
};

export const appearance = createSlice({
  name: "appearance",
  initialState,
  reducers: {
    setBackgroundColor: (state, action) => {
      state.backgroundColors = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
  },
});

export const { setBackgroundColor, setColor, setFontSize } = appearance.actions;

export default appearance.reducer;
