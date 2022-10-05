import type { NextPage } from "next";
import Head from "next/head";
import WalletModalBody from "../components/WalletModal/WalletModalBody";
import {
  GalleryContainer,
  GalleryHead,
  GalleryNFTCardContainer,
} from "./../styles/Gallery.style";
import NFTCard from "../components/NFTCard/NFTCard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NFT Portrait | Home</title>
      </Head>
      <GalleryContainer>
        {DATA.length > 0 ? (
          <GalleryNFTCardContainer>
            {DATA.map((nft) => (
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

export default Home;
