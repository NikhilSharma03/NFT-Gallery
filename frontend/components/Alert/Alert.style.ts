import styled from "styled-components";

export const AlertContainer = styled.div.attrs({
  className:
    "fixed top-0 left-0 w-full h-screen flex justify-center items-center z-2000",
})``;

export const AlertOverlay = styled.div.attrs({
  className: "fixed top-0 left-0 w-full h-screen",
})`
  background-color: rgba(15, 15, 15, 0.95);
`;

export const AlertMain = styled.div.attrs({
  className: "card w-96 bg-neutral text-neutral-content",
})``;

export const AlertBody = styled.div.attrs({
  className: "card-body items-center text-center",
})``;

export const AlertHead = styled.h2.attrs({
  className: "card-title mb-4",
})``;

export const AlertMsg = styled.p.attrs({
  className: "mb-4",
})``;

export const AlertBtnContainer = styled.div.attrs({
  className: "card-actions justify-end",
})``;

export const AlertBtn = styled.button.attrs({
  className: "btn btn-primary",
})``;
