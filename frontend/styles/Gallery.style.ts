import styled from "styled-components";

export const GalleryContainer = styled.div`
  height: 95vh;
  padding: 3rem 4rem;
`;

export const GalleryHead = styled.h1.attrs({
  className: "mt-4 text-center font-bold",
})`
  font-size: 2rem;
  color: #ddd;
`;

export const GalleryNFTCardContainer = styled.div.attrs({
  className: "flex justify-center",
})`
  flex-wrap: wrap;
  max-height: 80vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 1rem;
    background-color: #ccc;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: #7c1dc1;
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
    &:hover {
      background-color: #58138a;
    }
  }
`;
