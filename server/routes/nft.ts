import express from "express";
import * as nftController from "./../controllers/nft";
import JWTAuthMiddleware from "./../middlewares/jwt";

const router = express.Router();

// Methods
router.get("/", nftController.getAllNFTs);

router.get("/:nftId", nftController.getNFTByID);

router.get("/user/:walletAddress", nftController.getNFTsByUser);

router.post("/", JWTAuthMiddleware, nftController.createNFT);

router.patch("/:nftId", JWTAuthMiddleware, nftController.updateNFTByID);

router.delete("/:nftId", JWTAuthMiddleware, nftController.deleteNFTByID);

export default router;
