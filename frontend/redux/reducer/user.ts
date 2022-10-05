import { createSlice } from "@reduxjs/toolkit";
import { connectWallet } from "../action/user";

const initialState = {
  userWalletAccount: "",
  isWalletConnected: false,
  loading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearUserError: (state) => {
      state.error = "";
    },
    disconnectWallet: (state) => {
      state.isWalletConnected = false;
      state.userWalletAccount = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(connectWallet.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(connectWallet.fulfilled, (state, { payload }) => {
      state.userWalletAccount = payload;
      state.isWalletConnected = true;
      state.loading = false;
    });
    builder.addCase(connectWallet.rejected, (state, action) => {
      state.error = String(action.payload);
      state.loading = false;
    });
  },
});

export const { clearUserError, disconnectWallet } = userSlice.actions;

export default userSlice.reducer;
