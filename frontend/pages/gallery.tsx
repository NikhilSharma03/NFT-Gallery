import type { NextPage } from "next";
import Head from "next/head";
import WalletModalBody from "../components/WalletModal/WalletModalBody";
import {
  GalleryContainer,
  GalleryHead,
  GalleryNFTCardContainer,
} from "./../styles/Gallery.style";
import NFTCard from "../components/NFTCard/NFTCard";

const DATA = [
  {
    _id: "633d7cbc3fe0711d68657f5e",
    title: "Wallpaper",
    description: "Cast",
    image:
      "https://ipfs.moralis.io:2053/ipfs/QmZbV8pQauUW7415xaLZv7KrWpbNJiZShT8b4vP1n9S6Qm/nft-gallery/1664974006224-35210220",
    creator: "0xdBF8AE832809D6B1a933417c1F06c598b3c7306c",
    createdAt: "2022-10-05T12:46:21.769Z",
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NFT Portrait | Gallery</title>
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
