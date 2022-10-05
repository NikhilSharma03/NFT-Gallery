import { createAsyncThunk } from "@reduxjs/toolkit";

export const connectWallet = createAsyncThunk<
  string,
  void,
  { rejectValue: string }
>("user/connectWallet", async (_, { rejectWithValue }) => {
  let win: any = window;
  const ethereum = win.ethereum;
  if (!ethereum) {
    return rejectWithValue("Failed! Please install MetaMask");
  }

  try {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    let account = accounts[0];
    if (account !== "") {
      return account;
    }
  } catch (err) {
    return rejectWithValue("Failed to connect to MetaMask");
  }
});
