import { Request, Response } from "express";
import { ethers } from "ethers";
import Moralis from "moralis";
import { isValidObjectId } from "mongoose";
import { CustomNFTRequest } from "./../types/request";
import NFT from "./../models/nft";
import User from "./../models/user";

// getAllNFTs fetch all the created NFTs and returns them
export const getAllNFTs = async (req: Request, res: Response) => {
  const nfts = await NFT.find();
  res.json({
    message: "Fetched NFT successfully",
    nfts: nfts.length > 0 ? nfts : [],
  });
};

// getNFTByID fetch a single NFT by provided NFT ID and returns it
export const getNFTByID = async (req: Request, res: Response) => {
  const NFTID = req.params.nftId;
  // Validate ObjectID
  let isObjectID = isValidObjectId(NFTID);
  if (!isObjectID) {
    return res.status(400).json({ message: "the provided NFT id is invalid" });
  }
  // Fetching single NFT by provided NFT ID
  const nft = await NFT.findById(NFTID);
  res.json({
    message: "Fetched NFT successfully",
    nft,
  });
};

// getNFTsByUser fetch all the NFTs created by user by provided User wallet address and returns them
export const getNFTsByUser = async (req: Request, res: Response) => {
  const walletAddress = req.params.walletAddress;
  // Validate wallet address
  const isWalletAddressValid = ethers.utils.isAddress(walletAddress);
  if (!isWalletAddressValid) {
    return res.status(400).json({
      message: "invalid wallet Address.",
    });
  }
  // Fetching all NFTs by provided User wallet address
  const nfts = await NFT.find({ creator: walletAddress });
  res.json({
    message: "Fetched User NFTs successfully",
    nfts,
  });
};

// createNFT creates a new NFT
export const createNFT = async (req: Request, res: Response) => {
  const request = req as CustomNFTRequest;
  const { title, description } = request.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "invalid input. No title or description found" });
  }
  const { walletAddress: creatorWalletAddress } = request.user;
  // Validating wallet address
  const isWalletAddressValid = ethers.utils.isAddress(
    String(creatorWalletAddress)
  );
  if (!isWalletAddressValid) {
    return res.status(400).json({
      message:
        "invalid wallet Address in token. Please connect your wallet again.",
    });
  }
  // Image upload from request
  const image: any = request.files?.image;
  if (!image) {
    return res.status(400).json({
      message: "No image found in the request. Please add an NFT image.",
    });
  }
  // Connect to moralis
  const moralisAPIKey = process.env.MORALIS_API_KEY || "";
  try {
    await Moralis.start({ apiKey: moralisAPIKey });
  } catch (err) {
    return res.status(500).json({ message: "Failed to connect to Moralis" });
  }
  // Uploading image to IPFS
  const imageData = Buffer.from(image.data).toString("base64");
  const uniqueImageName = Date.now() + "-" + Math.round(Math.random() * 1e9);
  const imageABI = [
    {
      path: `nft-gallery/${uniqueImageName}`,
      content: imageData,
    },
  ];
  let imageURL = "";
  try {
    const response = await Moralis.EvmApi.ipfs.uploadFolder({
      abi: imageABI,
    });
    imageURL = response.result.at(0)?.path || "";
  } catch (err) {
    return res.status(500).json({
      message: `failed to save image to IPFS. Please try again. ${err}`,
    });
  }
  if (!imageURL) {
    return res.status(500).json({
      message: "failed to save image to IPFS. Please try again.",
    });
  }

  const newNFT = new NFT({
    title: title,
    description: description,
    creator: creatorWalletAddress,
    image: imageURL,
  });

  // Save the newNFT
  try {
    await newNFT.save();
  } catch (err) {
    let message = "failed to save nft";
    if (err instanceof Error) message = err.message;
    return res
      .status(500)
      .json({ message: "Something went wrong", error: message });
  }

  // Save the NFT ID in user nfts list
  const user = await User.findOne({ walletAddress: creatorWalletAddress });
  if (!user) {
    return res
      .status(400)
      .json({ message: "No user exists with provided wallet address!" });
  }

  try {
    user.nfts.push(newNFT._id);
    await user.save();
  } catch (error) {
    return res.status(500).json({
      message: "failed to save nft ID in user",
    });
  }

  return res.status(201).json({
    message: "Created NFT Successfully",
    nftData: {
      _id: newNFT._id,
      title: newNFT.title,
      description: newNFT.description,
      image: newNFT.image,
      creator: newNFT.creator,
      createdAt: newNFT.createdAt,
    },
  });
};

// updateNFTByID updates a single NFT by provided NFT ID
export const updateNFTByID = async (req: Request, res: Response) => {
  const request = req as CustomNFTRequest;

  const NFTID = request.params.nftId;
  // Validate ObjectID
  let isObjectID = isValidObjectId(NFTID);
  if (!isObjectID) {
    return res.status(400).json({ message: "the provided NFT id is invalid" });
  }

  const nft = await NFT.findById(NFTID);
  if (!nft) {
    return res.status(400).json({ message: "found no NFT with provided ID" });
  }

  const { title, description, hasUpdatedImage } = request.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "invalid input. No title or description found" });
  }
  const { walletAddress: creatorWalletAddress } = request.user;
  // Validating wallet address
  const isWalletAddressValid = ethers.utils.isAddress(
    String(creatorWalletAddress)
  );
  if (!isWalletAddressValid) {
    return res.status(400).json({
      message:
        "invalid wallet Address in token. Please connect your wallet again.",
    });
  }
  // Check if has authority
  if (nft.creator !== creatorWalletAddress) {
    return res.status(401).json({
      message: "Not authorized.",
    });
  }
  // Handle image update
  const hasUpdatedImageBool = hasUpdatedImage === "true" ? true : false;
  let imageURL = hasUpdatedImageBool ? "" : nft.image;
  if (hasUpdatedImageBool) {
    // Image upload from request
    const image: any = request.files?.image;
    if (!image) {
      return res.status(400).json({
        message: "No image found in the request. Please add an NFT image.",
      });
    }
    // Connect to moralis
    const moralisAPIKey = process.env.MORALIS_API_KEY || "";
    try {
      await Moralis.start({ apiKey: moralisAPIKey });
    } catch (err) {
      return res.status(500).json({ message: "Failed to connect to Moralis" });
    }
    // Uploading image to IPFS
    const imageData = Buffer.from(image.data).toString("base64");
    const uniqueImageName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const imageABI = [
      {
        path: `nft-gallery/${uniqueImageName}`,
        content: imageData,
      },
    ];
    try {
      const response = await Moralis.EvmApi.ipfs.uploadFolder({
        abi: imageABI,
      });
      imageURL = response.result.at(0)?.path || "";
    } catch (err) {
      return res.status(500).json({
        message: `failed to save image to IPFS. Please try again. ${err}`,
      });
    }
    if (!imageURL) {
      return res.status(500).json({
        message: "failed to save image to IPFS. Please try again.",
      });
    }
  }

  // Update NFT fields and save it
  nft.title = title;
  nft.description = description;
  nft.image = imageURL;

  try {
    await nft.save();
  } catch (err) {
    return res.status(500).json({
      message: "failed to update NFT",
    });
  }

  res.status(200).json({
    message: "Updated NFT Successfully",
    nftData: {
      _id: nft._id,
      title: nft.title,
      description: nft.description,
      image: nft.image,
      creator: nft.creator,
      createdAt: nft.createdAt,
    },
  });
};

// deleteNFTByID deletes a single NFT by provided NFT ID
export const deleteNFTByID = async (req: Request, res: Response) => {
  const request = req as CustomNFTRequest;

  const NFTID = request.params.nftId;
  // Validate ObjectID
  let isObjectID = isValidObjectId(NFTID);
  if (!isObjectID) {
    return res.status(400).json({ message: "the provided NFT id is invalid" });
  }

  const nft = await NFT.findById(NFTID);
  if (!nft) {
    return res.status(400).json({ message: "found no NFT with provided ID" });
  }

  const { walletAddress: creatorWalletAddress } = request.user;
  // Validating wallet address
  const isWalletAddressValid = ethers.utils.isAddress(
    String(creatorWalletAddress)
  );
  if (!isWalletAddressValid) {
    return res.status(400).json({
      message:
        "invalid wallet Address in token. Please connect your wallet again.",
    });
  }
  // Check if has authority
  if (nft.creator !== creatorWalletAddress) {
    return res.status(401).json({
      message: "Not authorized.",
    });
  }
  // Delete NFT
  try {
    await nft.remove();
  } catch (err) {
    return res.status(500).json({ message: "failed to delete NFT" });
  }
  // Delete NFT ID from user nfts list
  const user = await User.findOne({ walletAddress: creatorWalletAddress });
  if (!user) {
    return res
      .status(400)
      .json({ message: "No user exists with provided wallet address!" });
  }
  user.nfts = user.nfts.filter((nftID) => nftID.toString() != NFTID);
  try {
    await user.save();
  } catch (err) {
    return res
      .status(500)
      .json({ message: "failed to delete NFT ID from user nfts list." });
  }

  res.status(200).json({ message: "Deleted NFT Successfully", nftID: NFTID });
};
