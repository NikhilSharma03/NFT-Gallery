import { Types } from "mongoose";

export type UserSchema = {
  walletAddress: string;
  createdAt: Date;
  nfts: Types.ObjectId[];
};
