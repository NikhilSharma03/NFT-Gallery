import type { NextPage } from "next";
import { WMButton } from "./WalletModal.style";

const WalletModalButton: NextPage = () => {
  return <WMButton htmlFor="wallet-modal">Connect Wallet</WMButton>;
};

export default WalletModalButton;
