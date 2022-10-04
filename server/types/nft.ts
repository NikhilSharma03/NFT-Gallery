import { Types } from "mongoose";

export type NFTSchema = {
  title: string;
  description: string;
  image: string;
  creator: string;
  createdAt: Date;
};
