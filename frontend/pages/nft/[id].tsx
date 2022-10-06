import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  NFTButton,
  NFTButtonContainer,
  NFTContainer,
  NFTImageContainer,
  NFTText,
} from "./../../styles/NFT.style";
import WalletModalBody from "../../components/WalletModal/WalletModalBody";
import UpdateNFTModal from "../../components/UpdateNFTModal/UpdateNFTModal";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";

const DATA = {
  _id: "633d7cbc3fe0711d68657f5e",
  title: "Wallet",
  description:
    "CastCastCastCastCastCastCastCastCastCastCastCastCastCastCastCastCastCastCastCastCastCastCastCastCastCastCast",
  image:
    "https://ipfs.moralis.io:2053/ipfs/QmZbV8pQauUW7415xaLZv7KrWpbNJiZShT8b4vP1n9S6Qm/nft-gallery/1664974006224-35210220",
  creator: "0xdBF8AE832809D6B1a933417c1F06c598b3c7306c",
  createdAt: "2022-10-05T12:46:21.769Z",
};

const NFT: NextPage = () => {
  const router = useRouter();
  const { id: nftID } = router.query;

  const [showUpdateNFTModal, setShowUpdateNFTModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  return (
    <div>
      {showUpdateNFTModal && (
        <UpdateNFTModal
          title={DATA.title}
          description={DATA.description}
          image={DATA.image}
          id={DATA._id}
          closeModal={() => setShowUpdateNFTModal(false)}
        />
      )}
      {showConfirmModal && (
        <ConfirmModal
          deleteNFT={() => {}}
          closeModal={() => setShowConfirmModal(false)}
        />
      )}
      <Head>
        <title>NFT Portrait | NFT</title>
      </Head>
      <NFTContainer>
        <NFTImageContainer>
          <img src={DATA.image} alt="image" />
        </NFTImageContainer>
        <NFTText>{DATA.title}</NFTText>
        <NFTText>{DATA.description}</NFTText>
        <NFTText>Creator: {DATA.creator}</NFTText>
        <NFTButtonContainer>
          <NFTButton onClick={() => setShowUpdateNFTModal(true)}>
            Update
          </NFTButton>
          <NFTButton onClick={() => setShowConfirmModal(true)}>
            Delete
          </NFTButton>
        </NFTButtonContainer>
      </NFTContainer>
      <WalletModalBody />
    </div>
  );
};

export default NFT;
