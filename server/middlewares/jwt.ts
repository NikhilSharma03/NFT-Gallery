import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";
import { JWTPayloadData } from "./../types/request";

export default (req: Request, res: Response, next: NextFunction) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  // Extracting token from req headers
  const tokenHeader = req?.headers?.token;
  if (tokenHeader) {
    let token = String(tokenHeader).split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "No Auth Token found in headers. Please connect your wallet.",
      });
    }

    try {
      const secretKey: Secret = process.env.JWT_SECRET_KEY || "";
      const data: JWTPayloadData = jwt.verify(
        token,
        secretKey
      ) as JWTPayloadData;
      // Checking if token has expired
      const expiresIn = (data.expiresIn as number) - Date.now();
      if (expiresIn > 0) {
        (req as any).user = data;
        next();
      } else {
        return res.status(401).json({
          message: "Token Expired. Please connect your wallet again.",
        });
      }
    } catch (err) {
      let message = "Something went wrong.";
      if (err instanceof Error) message = err.message;
      if (message === "jwt expired")
        message = "Token Expired. Please connect your wallet again.";
      return res.status(401).json({ message });
    }
  } else {
    return res.status(401).json({
      message: "No Auth Token found in headers. Please connect your wallet.",
    });
  }
};
