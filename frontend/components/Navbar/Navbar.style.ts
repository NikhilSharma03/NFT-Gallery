import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "navbar text-primary-content px-10 py-4",
})``;

export const LogoContainer = styled.div.attrs({ className: "flex-1" })`
  a {
    font-size: 1.4rem;
    font-weight: bold;
    letter-spacing: 1px;
    background: linear-gradient(
      90deg,
      #7c1dc1 0%,
      #eb54bc 18.58%,
      #0fb6ca 37.63%,
      #67d8de 52.96%,
      #02dc85 67.82%,
      #fcd757 88.72%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

export const HamburgerButton = styled.button.attrs({
  className: "btn btn-square btn-ghost hidden sm:block hover:bg-transparent",
})``;

export const HamburgerLabel = styled.label.attrs({
  className:
    "btn bg-transparent hover:bg-transparent border-none drawer-button",
})``;

export const NavContainer = styled.div.attrs({
  className: "flex-none sm:hidden",
})``;

export const NavList = styled.ul.attrs({
  className: "menu menu-horizontal p-0",
})``;

export const NavItem = styled.li.attrs({
  className: "mr-2",
})`
  a:active {
    background: transparent;
  }
`;
