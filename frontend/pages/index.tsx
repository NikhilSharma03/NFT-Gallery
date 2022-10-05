import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import WalletModalBody from "../components/WalletModal/WalletModalBody";
import { HomeButton, HomeContainer, HomeHead } from "./../styles/Home.style";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NFT Portrait | Home</title>
      </Head>
      <HomeContainer>
        <HomeHead>Create and List your own NFT</HomeHead>
        <HomeButton>
          <Link href="/gallery">Explore</Link>
        </HomeButton>
      </HomeContainer>
      <WalletModalBody />
    </div>
  );
};

export default Home;
