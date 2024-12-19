import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backgroundColors: {
    /* primary: "#000",
    second: "#16181c",
    third: "#273340",
    titleText:"#fff",
    descText:"#71767b",
    hover:"rgba(231,233,234,0.1)"  */
    primary: "#15202b",
    second: "#2f3336",
    third: "#273340",
    titleText: "#fff",
    descText: "#8b98a5",
    hover: "rgba(247,249,249,0.1)",
    /* primary: "#fff",
    second: "#eff3f4",
    third: "#536471",
    titleText: "#000",
    descText: "#536471",
    hover:"rgba(247,249,249,0.1)" */
  },
  color: {
    //mavi
    /* primary: "#1d9bf0",
    second: "#8ecdf8",
    primary1a:"rgba(142, 205, 248, 0.1)" */
    //pembe
    /*  primary: "#f91880",
    second: "#fc8cc0",
    primary1a: "rgba(34, 139, 230, 0.1)", */
    //sarı
    /*     primary: "#ffd400",
    second: "#ffea80",
    primary1a: "rgb(255, 212, 0.1)", */
    //mor
    /*  primary: "rgb(120, 86, 255)",
    second: "rgb(188, 171, 255)",
    primary1a: "rgba(188, 171, 255, 0.97)", */
    //turuncu
    /* primary: "rgb(255, 122, 0)",
    second: "rgb(255, 189, 128)",
    primary1a: "rgba(255, 122, 0,.1)", */
    //yeşil
    primary: "rgb(0, 186, 124)",
    second: "rgb(128, 221, 190)",
    primary1a: "rgba(0, 186, 124,.1)",
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
