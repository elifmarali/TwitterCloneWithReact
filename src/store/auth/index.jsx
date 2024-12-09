import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 22,
    username: "elif9229",
    fullName: "Elif",
    avatar:
      "https://pbs.twimg.com/profile_images/1657300018640855044/dzE6e_FA_400x400.png",
    private: true,
  },
  accounts: [
    {
      id: 22,
      username: "elif9229",
      fullName: "Elif",
      avatar:
        "https://pbs.twimg.com/profile_images/1657300018640855044/dzE6e_FA_400x400.png",
      private: true,
    },
    {
      id: 24,
      username: "yek2905",
      fullName: "Yunus Emre",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1200px-Y_Combinator_logo.svg.png",
      private: false,
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (actionItem) => actionItem.id !== action.payload
      );
      if (state.currentAccount && state.currentAccount.id === action.payload) {
        state.currentAccount = false;
      }
    },
    setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export default auth.reducer;
export const { addAccount, removeAccount, setCurrentAccount } = auth.actions;
