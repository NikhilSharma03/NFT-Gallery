const express = require("express");
const router = express.Router();
const userController = require("./../controllers/user");

// Methods
router.post("/signin", userController.signIn);

module.exports = router;
