import styled from "styled-components";

export const NFTCardContainer = styled.div.attrs({
  className: "card card-compact w-80 m-4 bg-base-100 shadow-xl",
})``;

export const NFTImageContainer = styled.figcaption.attrs({ className: "" })``;

export const NFTCardBody = styled.div.attrs({ className: "card-body" })``;

export const NFTCardTitle = styled.h2.attrs({ className: "card-title" })``;

export const NFTCardBtnContainer = styled.div.attrs({
  className: "card-actions justify-end",
})``;

export const NFTCardBtn = styled.button.attrs({
  className: "btn btn-primary",
})``;
