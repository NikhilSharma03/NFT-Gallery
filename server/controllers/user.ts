import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ethers } from "ethers";
import User from "./../models/user";
import { Secret } from "jsonwebtoken";

// signIn registers user and return authentication token
export const signIn = async (req: Request, res: Response) => {
  const { walletAddress } = req.body;
  if (!walletAddress) {
    return res
      .status(400)
      .json({ message: "invalid input. No wallet Address found" });
  }
  // Validate walletAddress
  const isWalletAddressValid = ethers.utils.isAddress(walletAddress);
  if (!isWalletAddressValid) {
    return res.status(400).json({ message: "invalid wallet Address" });
  }

  // Check if user already exits
  const userExists = await User.findOne({ walletAddress });
  if (!userExists) {
    // Create new user model
    const newUser = new User({
      walletAddress: walletAddress,
      nfts: [],
    });
    // Save new user
    try {
      await newUser.save();
    } catch (err) {
      let message = "failed to save user";
      if (err instanceof Error) message = err.message;
      return res
        .status(500)
        .json({ message: "Something went wrong", error: message });
    }
  }
  // JWT Token
  const secretKey: Secret = process.env.JWT_SECRET_KEY || "";
  let jwtToken = jwt.sign(
    {
      walletAddress: walletAddress,
      expiresIn: +Date.now() + 60 * 60 * 1000,
    },
    secretKey,
    { expiresIn: "1h" }
  );

  res.status(200).json({
    message: "Sign in Successful",
    walletAddress: walletAddress,
    token: jwtToken,
    expiresIn: Date.now() + 60 * 60 * 1000,
  });
};
