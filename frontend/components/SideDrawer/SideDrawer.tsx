import type { NextPage } from "next";
import Link from "next/link";
import {
  Container,
  SDContent,
  SDInput,
  SDSide,
  SDSideLabel,
  SDSideList,
  SDSideListItem,
} from "./SideDrawer.style";
import WalletModalButton from "../WalletModal/WalletModalButton";

type Props = {
  children: React.ReactNode;
};

const SideDrawer: NextPage<Props> = ({ children }) => {
  return (
    <Container>
      <SDInput id="my-drawer" type="checkbox" />
      <SDContent>{children}</SDContent>
      <SDSide>
        <SDSideLabel htmlFor="my-drawer" />
        <SDSideList>
          <SDSideListItem>
            <WalletModalButton />
          </SDSideListItem>
          <SDSideListItem>
            <Link href="/gallery">Gallery</Link>
          </SDSideListItem>
          <SDSideListItem>
            <Link href="/create">Create</Link>
          </SDSideListItem>
        </SDSideList>
      </SDSide>
    </Container>
  );
};

export default SideDrawer;
