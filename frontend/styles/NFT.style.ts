import styled from "styled-components";

export const NFTContainer = styled.div`
  height: 95vh;
  padding: 1rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NFTHead = styled.h1.attrs({
  className: "mt-4 text-center font-bold",
})`
  font-size: 2rem;
  color: #ddd;
`;

export const NFTImageContainer = styled.figcaption`
  width: 40rem;
  height: 25rem;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 3rem;
  border: 1px solid #ddd;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const NFTText = styled.h2.attrs({ className: "" })`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  text-align: center;
  padding: 0 2rem;
  max-width: 40rem;
  word-break: break-word;
  max-height: 5rem;
  overflow-y: auto;
  color: #ddd;
  width: fit-content;
  background: #000;
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid #444;

  &::-webkit-scrollbar {
    width: 5px;
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

export const NFTButtonContainer = styled.div.attrs({ className: "" })``;

export const NFTButton = styled.button.attrs({
  className: "btn btn-primary",
})`
  margin-right: 1rem;

  &:last-child {
    margin-right: 0rem;
  }
`;
