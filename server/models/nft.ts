import { Schema, model } from "mongoose";
import { NFTSchema } from "./../types/nft";

const nftSchema = new Schema<NFTSchema>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  creator: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

export default model<NFTSchema>("Nfts", nftSchema);
