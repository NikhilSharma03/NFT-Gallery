import { Schema, model } from "mongoose";
import { UserSchema } from "./../types/user";

const userSchema = new Schema<UserSchema>({
  walletAddress: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now() },
  nfts: [{ type: Schema.Types.ObjectId, ref: "Nfts" }],
});

export default model<UserSchema>("Users", userSchema);
