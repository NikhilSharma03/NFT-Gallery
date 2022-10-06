import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import WalletModalBody from "../components/WalletModal/WalletModalBody";
import useAppSelector from "../hooks/useAppSelector";
import {
  ProfileContainer,
  ProfileHead,
  ProfileNFTCardContainer,
  ProfileAdd,
} from "./../styles/Profile.style";
import axios from "axios";
import LoadingModal from "./../components/Loading/Loading";
import { NFT } from "./../types/nft";
import NFTCard from "../components/NFTCard/NFTCard";

const Profile: NextPage = () => {
  const router = useRouter();

  const [nfts, setNFTs] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(false);

  const isWalletConnect = useAppSelector(
    (state) => state.user.isWalletConnected
  );
  const userWalletAccount = useAppSelector(
    (state) => state.user.userWalletAccount
  );

  useEffect(() => {
    if (!isWalletConnect) {
      router.replace("/");
      return;
    }
    setLoading(true);
    axios
      .get(`${process.env.BACKEND_API_URL}/api/nft/user/${userWalletAccount}`)
      .then((res) => {
        if (res.data.nfts) {
          setNFTs(res.data.nfts);
        }
        setLoading(false);
      })
      .catch((err) => {
        alert(err.response.data.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <LoadingModal />}
      <Head>
        <title>NFT Portrait | Profile</title>
      </Head>
      <ProfileContainer>
        <ProfileAdd>User: {userWalletAccount}</ProfileAdd>
        {nfts.length > 0 ? (
          <ProfileNFTCardContainer>
            {nfts.map((nft) => (
              <NFTCard
                key={nft._id}
                id={nft._id}
                title={nft.title}
                description={nft.description}
                image={nft.image}
              />
            ))}
          </ProfileNFTCardContainer>
        ) : (
          <ProfileHead>No NFT Found. Lets Create One.</ProfileHead>
        )}
      </ProfileContainer>
      <WalletModalBody />
    </div>
  );
};

export default Profile;
