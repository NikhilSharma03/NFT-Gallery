const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  walletAddress: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now() },
  nfts: [{ type: Schema.Types.ObjectId, ref: "Nfts" }],
});

module.exports = model("Users", userSchema);
