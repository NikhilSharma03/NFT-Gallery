const jwt = require("jsonwebtoken");
const { ethers } = require("ethers");
const User = require("./../models/user");

exports.signIn = async (req, res) => {
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
      return res
        .status(500)
        .json({ message: "Something went wrong", error: err.message });
    }
  }
  // JWT Token
  let jwtToken = jwt.sign(
    {
      walletAddress: walletAddress,
      expiresIn: +Date.now() + 60 * 60 * 1000,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.status(200).json({
    message: "Sign in Successful",
    walletAddress: walletAddress,
    token: jwtToken,
    expiresIn: Date.now() + 60 * 60 * 1000,
  });
};
