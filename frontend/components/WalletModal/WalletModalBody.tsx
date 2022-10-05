import type { NextPage } from "next";
import MetamaskSvg from "../../assets/svg/MetamaskSvg";
import TrustWalletSvg from "../../assets/svg/TrustWalletSvg";
import {
  WMBoxLabel,
  WMInput,
  WMLabel,
  WMCardHead,
  WMCard,
  WMCardMain,
} from "./WalletModal.style";

const WalletModalBody: NextPage = () => {
  return (
    <>
      <WMInput type="checkbox" id="wallet-modal" />
      <WMLabel htmlFor="wallet-modal">
        <WMBoxLabel htmlFor="">
          <WMCard>
            <WMCardMain>
              <MetamaskSvg />
              <WMCardHead>METAMASK</WMCardHead>
            </WMCardMain>
          </WMCard>
          <WMCard>
            <WMCardMain>
              <TrustWalletSvg />
              <WMCardHead>TRUST WALLET</WMCardHead>
            </WMCardMain>
          </WMCard>
          <button className="btn btn-primary w-full">Disconnect</button>
        </WMBoxLabel>
      </WMLabel>
    </>
  );
};

export default WalletModalBody;
