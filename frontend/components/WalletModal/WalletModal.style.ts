import styled from "styled-components";

export const WMButton = styled.label.attrs({
  className: "btn btn-primary modal-button w-40 overflow-hidden text-ellipsis",
})``;

export const WMButtonHead = styled.h1.attrs({
  className: "w-40 overflow-hidden text-ellipsis",
})``;

export const WMInput = styled.input.attrs({ className: "modal-toggle" })``;

export const WMLabel = styled.label.attrs({
  className: "modal cursor-pointer",
})``;

export const WMBoxLabel = styled.label.attrs({
  className: "modal-box relative",
})`
  background: #222;
`;

export const WMCard = styled.div.attrs({
  className: "card w-full mb-3 bg-neutral text-neutral-content cursor-pointer",
})``;

export const WMCardMain = styled.div.attrs({
  className: "card-body items-center text-center",
})``;

export const WMCardHead = styled.h1.attrs({ className: "mt-4 text-xl" })``;

export const WMDBtn = styled.button.attrs({
  className: "btn btn-primary w-full mb-4 last:mb-0",
})``;

export const WMConnectedHead = styled.h1.attrs({
  className: "mt-4 text-xl overflow-hidden text-ellipsis mb-5",
})`
  color: #ddd;
`;
