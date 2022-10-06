import type { NextPage } from "next";
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

type Props = {
  failed: boolean;
  nfts: NFT[];
};

const Gallery: NextPage<Props> = ({ nfts, failed }) => {
  return (
    <div>
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

export const getStaticProps = async () => {
  try {
    const data = await axios.get(`${process.env.BACKEND_API_URL}/api/nft`);
    if (!data) {
      return { props: { failed: true, nfts: [] } };
    }
    return {
      props: { failed: false, nfts: data.data.nfts ? data.data.nfts : [] },
    };
  } catch (err) {
    return { props: { failed: true, nfts: [] } };
  }
};

export default Gallery;
