import styled from "styled-components";

export const Container = styled.div.attrs({
  className:
    "absolute -z-50 top-0 left-0 w-full h-full overflow-hidden bg-black",
})``;

export const YellowCircleContainer = styled.div.attrs({
  className: "absolute top-20 left-0 -z-50 blur-2xl",
})``;

export const PinkCircleContainer = styled.div.attrs({
  className: "absolute top-3/4 left-3/4 -z-50 blur-2xl center-circle",
})``;

export const LimeCircleContainer = styled.div.attrs({
  className: "absolute top-0 right-0 -z-50 hero-right-circle",
})``;

export const GreenCircleContainer = styled.div.attrs({
  className: "absolute top-20 right-1/3 -z-50 blur-2xl",
})``;

export const PurpleCircleContainer = styled.div.attrs({
  className: "absolute bottom-0 left-0 -z-50 hero-left-circle",
})``;

export const Backdrop = styled.div.attrs({
  className: "absolute top-0 left-0 w-full h-full backdrop-brightness-75 -z-50",
})``;
