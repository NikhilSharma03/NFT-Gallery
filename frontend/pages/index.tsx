import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import WalletModalBody from "../components/WalletModal/WalletModalBody";
import useAppSelector from "../hooks/useAppSelector";
import {
  HomeButton,
  HomeContainer,
  HomeHead,
  HomeButtonContainer,
} from "./../styles/Home.style";

const Home: NextPage = () => {
  const router = useRouter();

  const isWalletConnect = useAppSelector(
    (state) => state.user.isWalletConnected
  );

  const onCreateHandler = () => {
    if (isWalletConnect) {
      router.replace("/create");
    }
  };

  return (
    <div>
      <Head>
        <title>NFT Portrait | Home</title>
      </Head>
      <HomeContainer>
        <HomeHead>Create and List your own NFT</HomeHead>
        <HomeButtonContainer>
          <HomeButton>
            <Link href="/gallery">Explore</Link>
          </HomeButton>
          <div
            className="tooltip ml-4"
            data-tip={isWalletConnect ? "Connected" : "Connect Wallet"}
          >
            <HomeButton onClick={onCreateHandler}>Create</HomeButton>
          </div>
        </HomeButtonContainer>
      </HomeContainer>
      <WalletModalBody />
    </div>
  );
};

export default Home;
