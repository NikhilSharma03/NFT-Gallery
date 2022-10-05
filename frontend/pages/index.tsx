import type { NextPage } from "next";
import Head from "next/head";
import WalletModalBody from "../components/WalletModal/WalletModalBody";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NFT Portrait | Home</title>
      </Head>
      <div>
        <WalletModalBody />
      </div>
    </div>
  );
};

export default Home;
