import express from "express";
import * as userController from "./../controllers/user";

const router = express.Router();

// Methods
router.post("/signin", userController.signIn);

export default router;
