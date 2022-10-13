import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  NFTButton,
  NFTButtonContainer,
  NFTContainer,
  NFTImageContainer,
  NFTText,
  NFTHead,
} from "./../../styles/NFT.style";
import WalletModalBody from "../../components/WalletModal/WalletModalBody";
import UpdateNFTModal from "../../components/UpdateNFTModal/UpdateNFTModal";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import { NFT } from "./../../types/nft";
import axios from "axios";
import useAppSelector from "../../hooks/useAppSelector";
import LoadingModal from "./../../components/Loading/Loading";

const NFTPage: NextPage = () => {
  const router = useRouter();
  const { id: nftID } = router.query;

  const [nftData, setNFTData] = useState<NFT | null>(null);
  const [error, setError] = useState("");
  const [showUpdateNFTModal, setShowUpdateNFTModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const userWalletAccount = useAppSelector(
    (state) => state.user.userWalletAccount
  );
  const isWalletConnected = useAppSelector(
    (state) => state.user.isWalletConnected
  );
  const authToken = useAppSelector((state) => state.user.authToken);

  const onDeleteNFTHandler = () => {
    setShowConfirmModal(false);
    setLoading(true);

    axios
      .delete(`${process.env.BACKEND_API_URL}/api/nft/${nftID}`, {
        headers: { token: `Bearer ${authToken}` },
      })
      .then((res) => {
        setLoading(false);
        router.replace("/gallery");
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    if (nftID) {
      axios
        .get(`${process.env.BACKEND_API_URL}/api/nft/${nftID}`)
        .then((res) => {
          if (res.data.nft) {
            setNFTData(res.data.nft);
            setLoading(false);
            setError("");
          } else {
            setError("No NFT found");
            setLoading(false);
          }
        })
        .catch((err) => {
          setError(err.response.data.message);
        });
    }
  }, [nftID]);

  return (
    <div>
      {showUpdateNFTModal && (
        <UpdateNFTModal
          title={nftData ? nftData.title : ""}
          description={nftData ? nftData.description : ""}
          image={nftData ? nftData.image : ""}
          id={nftData ? nftData._id : ""}
          closeModal={() => setShowUpdateNFTModal(false)}
        />
      )}
      {showConfirmModal && (
        <ConfirmModal
          deleteNFT={onDeleteNFTHandler}
          closeModal={() => setShowConfirmModal(false)}
        />
      )}
      {loading && <LoadingModal />}
      <Head>
        <title>NFT Portrait | NFT</title>
      </Head>
      <NFTContainer>
        {error ? (
          <NFTHead>{error}</NFTHead>
        ) : (
          <>
            <NFTImageContainer>
              <img src={nftData ? nftData.image : ""} alt="image" />
            </NFTImageContainer>
            <NFTText>Title: {nftData ? nftData.title : ""}</NFTText>
            <NFTText>Description: {nftData ? nftData.description : ""}</NFTText>
            <NFTText>Creator: {nftData ? nftData.creator : ""}</NFTText>
            {isWalletConnected &&
              nftData?.creator.toLowerCase() ===
                userWalletAccount.toLowerCase() && (
                <NFTButtonContainer>
                  <NFTButton onClick={() => setShowUpdateNFTModal(true)}>
                    Update
                  </NFTButton>
                  <NFTButton onClick={() => setShowConfirmModal(true)}>
                    Delete
                  </NFTButton>
                </NFTButtonContainer>
              )}
          </>
        )}
      </NFTContainer>
      <WalletModalBody />
    </div>
  );
};

export default NFTPage;
