import styled from "styled-components";

export const UNContainer = styled.div.attrs({
  className:
    "fixed top-0 left-0 w-full h-screen flex justify-center items-center z-2000",
})``;

export const UNOverlay = styled.div.attrs({
  className: "fixed top-0 left-0 w-full h-screen",
})`
  background-color: rgba(15, 15, 15, 0.95);
`;

export const UNMain = styled.div.attrs({
  className: "card w-1/3 bg-neutral text-neutral-content",
})``;

export const UNBody = styled.div.attrs({
  className: "card-body items-center text-center",
})``;

export const UNHead = styled.h2.attrs({
  className: "card-title mb-4",
})``;

export const UNBtnContainer = styled.div.attrs({
  className: "card-actions justify-end",
})``;

export const UNBtn = styled.button.attrs({
  className: "btn btn-primary",
})``;

export const UNInputContainer = styled.div.attrs({
  className: "form-control mb-4 w-full",
})``;

export const UNInputLabel = styled.label.attrs({
  className: "input-group input-group-md",
})``;

export const UNInput = styled.input.attrs({
  className: "input input-bordered input-md w-full",
})``;

export const UpdateNFTImgBtnContainer = styled.div.attrs({
  className: "mb-4 flex items-center",
})``;

export const UpdateNFTImgBtn = styled.button.attrs({
  className: "btn btn-primary mr-2",
})``;
