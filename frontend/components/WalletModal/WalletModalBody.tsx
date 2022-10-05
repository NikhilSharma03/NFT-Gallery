import type { NextPage } from "next";
import MetamaskSvg from "../../assets/svg/MetamaskSvg";
import {
  WMBoxLabel,
  WMInput,
  WMLabel,
  WMCardHead,
  WMCard,
  WMCardMain,
  WMDBtn,
  WMConnectedHead,
} from "./WalletModal.style";
import useAppDispatch from "../../hooks/useAppDispatch";
import { connectWallet } from "./../../redux/action/user";
import { disconnectWallet, clearUserError } from "./../../redux/reducer/user";
import useAppSelector from "../../hooks/useAppSelector";
import Loading from "../Loading/Loading";
import Alert from "../Alert/Alert";

const WalletModalBody: NextPage = () => {
  const isWalletConnected = useAppSelector(
    (state) => state.user.isWalletConnected
  );
  const userWalletAccount = useAppSelector(
    (state) => state.user.userWalletAccount
  );
  const error = useAppSelector((state) => state.user.error);
  const loading = useAppSelector((state) => state.user.loading);

  const dispatch = useAppDispatch();
  const onConnectWallet = () => dispatch(connectWallet());
  const onDisconnectWallet = () => dispatch(disconnectWallet());
  const onClearConnectError = () => dispatch(clearUserError());

  return (
    <>
      {loading && <Loading />}
      {error && <Alert msg={error} clearError={onClearConnectError} />}
      <WMInput type="checkbox" id="wallet-modal" />
      <WMLabel htmlFor="wallet-modal">
        <WMBoxLabel htmlFor="">
          {isWalletConnected ? (
            <WMConnectedHead>{userWalletAccount}</WMConnectedHead>
          ) : (
            <WMCard onClick={onConnectWallet}>
              <WMCardMain>
                <MetamaskSvg />
                <WMCardHead>METAMASK</WMCardHead>
              </WMCardMain>
            </WMCard>
          )}
          {isWalletConnected && (
            <WMDBtn
              onClick={() => navigator.clipboard.writeText(userWalletAccount)}
            >
              Copy Address
            </WMDBtn>
          )}
          {isWalletConnected && (
            <WMDBtn onClick={onDisconnectWallet}>Disconnect</WMDBtn>
          )}
        </WMBoxLabel>
      </WMLabel>
    </>
  );
};

export default WalletModalBody;
