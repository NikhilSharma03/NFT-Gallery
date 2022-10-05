import styled from "styled-components";

export const WMButton = styled.label.attrs({
  className: "btn btn-primary modal-button",
})``;

export const WMInput = styled.input.attrs({ className: "modal-toggle" })``;

export const WMLabel = styled.label.attrs({
  className: "modal cursor-pointer",
})``;

export const WMBoxLabel = styled.label.attrs({
  className: "modal-box relative",
})``;

export const WMCard = styled.div.attrs({
  className: "card w-full mb-3 bg-neutral text-neutral-content cursor-pointer",
})``;

export const WMCardMain = styled.div.attrs({
  className: "card-body items-center text-center",
})``;

export const WMCardHead = styled.h1.attrs({ className: "mt-4 text-xl" })``;
