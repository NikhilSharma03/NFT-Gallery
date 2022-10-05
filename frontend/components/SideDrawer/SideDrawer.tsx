import type { NextPage } from "next";
import Link from "next/link";
import {
  SDContainer,
  SDContent,
  SDInput,
  SDSide,
  SDSideLabel,
  SDSideList,
  SDSideListItem,
} from "./SideDrawer.style";
import WalletModalButton from "../WalletModal/WalletModalButton";
import useAppSelector from "../../hooks/useAppSelector";

type Props = {
  children: React.ReactNode;
};

const SideDrawer: NextPage<Props> = ({ children }) => {
  const isWalletConnected = useAppSelector(
    (state) => state.user.isWalletConnected
  );
  const userWalletAccount = useAppSelector(
    (state) => state.user.userWalletAccount
  );

  return (
    <SDContainer>
      <SDInput id="my-drawer" type="checkbox" />
      <SDContent>{children}</SDContent>
      <SDSide>
        <SDSideLabel htmlFor="my-drawer" />
        <SDSideList>
          <SDSideListItem>
            <WalletModalButton>
              {isWalletConnected ? userWalletAccount : "Connect Wallet"}
            </WalletModalButton>
          </SDSideListItem>
          <SDSideListItem>
            <Link href="/gallery">Gallery</Link>
          </SDSideListItem>
          <SDSideListItem>
            <Link href="/create">Create</Link>
          </SDSideListItem>
        </SDSideList>
      </SDSide>
    </SDContainer>
  );
};

export default SideDrawer;
