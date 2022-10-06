import Link from "next/link";
import HamburgerSvg from "../../assets/svg/HamburgerSvg";
import {
  Container,
  LogoContainer,
  HamburgerButton,
  HamburgerLabel,
  NavContainer,
  NavList,
  NavItem,
} from "./Navbar.style";
import WalletModalButton from "../WalletModal/WalletModalButton";
import useAppSelector from "../../hooks/useAppSelector";

const Navbar = () => {
  const isWalletConnected = useAppSelector(
    (state) => state.user.isWalletConnected
  );
  const userWalletAccount = useAppSelector(
    (state) => state.user.userWalletAccount
  );

  return (
    <Container>
      <LogoContainer>
        <Link href="/">NFT Portrait</Link>
      </LogoContainer>
      <HamburgerButton>
        <HamburgerLabel htmlFor="my-drawer">
          <HamburgerSvg />
        </HamburgerLabel>
      </HamburgerButton>
      <NavContainer>
        <NavList>
          <NavItem>
            <Link href="/gallery">Gallery</Link>
          </NavItem>
          {isWalletConnected && (
            <NavItem>
              <Link href="/create">Create</Link>
            </NavItem>
          )}
          <NavItem>
            <WalletModalButton>
              {isWalletConnected ? userWalletAccount : "Connect Wallet"}
            </WalletModalButton>
          </NavItem>
        </NavList>
      </NavContainer>
    </Container>
  );
};

export default Navbar;
