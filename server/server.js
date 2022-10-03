const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// CORS
app.use(cors());

// Middlewares
require("dotenv").config();
app.use(bodyParser.json());

// Routers
const userRoute = require("./routes/user");
// const nftRoute = require("./routes/nft");

// Routes
app.use("/api/user", userRoute);
// app.use("/api/nft", nftRoute);

// Connection
let mongoURI = process.env.MONGO_ATLAS_URI;
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
    console.log(err);
  });
