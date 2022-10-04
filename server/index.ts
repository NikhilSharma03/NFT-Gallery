import express, { Express } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import Moralis from "moralis";
// Routers
import userRoute from "./routes/user";
import nftRoute from "./routes/nft";

const app: Express = express();

// Middlewares
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(cors());
dotenv.config();
app.use(bodyParser.json());

// Routes
app.use("/api/user", userRoute);
app.use("/api/nft", nftRoute);

// Connection
const mongoURI = process.env.MONGO_ATLAS_URI || "";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to Database...");

    const port = process.env.PORT || 5001;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect DB:", err);
  });
