import styled from "styled-components";

export const CMContainer = styled.div.attrs({
  className:
    "fixed top-0 left-0 w-full h-screen flex justify-center items-center z-2000",
})``;

export const CMOverlay = styled.div.attrs({
  className: "fixed top-0 left-0 w-full h-screen",
})`
  background-color: rgba(15, 15, 15, 0.95);
`;

export const CMMain = styled.div.attrs({
  className: "card w-96 bg-neutral text-neutral-content",
})``;

export const CMBody = styled.div.attrs({
  className: "card-body items-center text-center",
})``;

export const CMMsg = styled.p.attrs({
  className: "mb-4",
})``;

export const CMBtnContainer = styled.div.attrs({
  className: "card-actions justify-end",
})``;

export const CMBtn = styled.button.attrs({
  className: "btn btn-primary",
})``;
