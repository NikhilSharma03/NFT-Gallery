import { NextPage } from "next";

const HamburgerSvg: NextPage = () => {
  return (
    <svg viewBox="0 0 100 80" width="25" height="25">
      <rect width="100" height="10" fill="#ddd"></rect>
      <rect y="30" width="100" height="10" fill="#ddd"></rect>
      <rect y="60" width="100" height="10" fill="#ddd"></rect>
    </svg>
  );
};

export default HamburgerSvg;
