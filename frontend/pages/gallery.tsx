import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import WalletModalBody from "../components/WalletModal/WalletModalBody";
import {
  GalleryContainer,
  GalleryHead,
  GalleryNFTCardContainer,
} from "./../styles/Gallery.style";
import NFTCard from "../components/NFTCard/NFTCard";
import axios from "axios";
import { NFT } from "./../types/nft";
import LoadingModal from "../components/Loading/Loading";

const Gallery: NextPage = () => {
  const [nfts, setNFTs] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.BACKEND_API_URL}/api/nft`)
      .then((data) => {
        const nftData: NFT[] = data.data.nfts ? data.data.nfts : [];
        setNFTs(nftData);
        setFailed(false);
        setLoading(false);
      })
      .catch((err) => {
        setFailed(true);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <LoadingModal />}
      <Head>
        <title>NFT Portrait | Gallery</title>
      </Head>
      <GalleryContainer>
        {failed ? (
          <GalleryHead>Failed to fetch NFT. Please try again.</GalleryHead>
        ) : nfts.length > 0 ? (
          <GalleryNFTCardContainer>
            {nfts.map((nft) => (
              <NFTCard
                key={nft._id}
                id={nft._id}
                title={nft.title}
                description={nft.description}
                image={nft.image}
              />
            ))}
          </GalleryNFTCardContainer>
        ) : (
          <GalleryHead>No NFT Found</GalleryHead>
        )}
      </GalleryContainer>
      <WalletModalBody />
    </div>
  );
};

export default Gallery;
