import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const connectWallet = createAsyncThunk(
  "user/connectWallet",
  async (_, { rejectWithValue }) => {
    let win: any = window;
    const ethereum = win.ethereum;
    if (!ethereum) {
      return rejectWithValue("Failed! Please install MetaMask");
    }
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      let account: string = accounts[0];
      if (account !== "") {
        // Signin using account address
        const data = await axios.post(
          `${process.env.BACKEND_API_URL}/api/user/signin`,
          {
            walletAddress: account,
          }
        );
        const authToken: string = data.data.token;
        return { account, authToken };
      }
    } catch (err) {
      return rejectWithValue("Failed to connect to MetaMask");
    }
  }
);
