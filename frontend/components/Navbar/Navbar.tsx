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

const Navbar = () => {
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
          <NavItem>
            <Link href="/create">Create</Link>
          </NavItem>
        </NavList>
      </NavContainer>
    </Container>
  );
};

export default Navbar;
