import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

export type JWTPayloadData = {
  walletAddress?: string;
  expiresIn?: number;
};

export interface CustomNFTRequest extends Request {
  user: JWTPayloadData;
}
