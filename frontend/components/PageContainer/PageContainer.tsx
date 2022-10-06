import type { NextPage } from "next";
import GreenCircleSvg from "../../assets/svg/GreenCircleSvg";
import LimeCircleSvg from "../../assets/svg/LimeCircleSvg";
import PinkCircleSvg from "../../assets/svg/PinkCircleSvg";
import PurpleCircleSvg from "../../assets/svg/PurpleCircleSvg";
import YellowCircleSvg from "../../assets/svg/YellowCircleSvg";
import {
  Container,
  Backdrop,
  GreenCircleContainer,
  LimeCircleContainer,
  PinkCircleContainer,
  PurpleCircleContainer,
  YellowCircleContainer,
} from "./PageContainer.style";

type Props = {
  children: React.ReactNode;
};

const PageContainer: NextPage<Props> = ({ children }) => {
  return (
    <Container>
      {/* Landing Page Bg Circles */}
      <YellowCircleContainer>
        <YellowCircleSvg />
      </YellowCircleContainer>
      <PinkCircleContainer>
        <PinkCircleSvg />
      </PinkCircleContainer>
      <LimeCircleContainer>
        <LimeCircleSvg />
      </LimeCircleContainer>
      <GreenCircleContainer>
        <GreenCircleSvg />
      </GreenCircleContainer>
      <PurpleCircleContainer>
        <PurpleCircleSvg />
      </PurpleCircleContainer>
      {/* Landing Page backdrop */}
      <Backdrop />
      {/* Landing Page Content */}
      <div>{children}</div>
    </Container>
  );
};

export default PageContainer;
