import type { NextPage } from "next";
import { WMButton, WMButtonHead } from "./WalletModal.style";

type Props = {
  children: React.ReactNode;
};

const WalletModalButton: NextPage<Props> = ({ children }) => {
  return (
    <WMButton htmlFor="wallet-modal">
      <WMButtonHead>{children}</WMButtonHead>
    </WMButton>
  );
};

export default WalletModalButton;
