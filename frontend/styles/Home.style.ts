import styled from "styled-components";

export const HomeContainer = styled.div.attrs({
  className: "flex w-full items-center justify-center",
})`
  flex-direction: column;
  height: 60vh;
`;

export const HomeHead = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  padding: 0 1rem;
  color: #ddd;
  margin-bottom: 2rem;
`;

export const HomeButtonContainer = styled.div.attrs({
  className: "flex",
})``;

export const HomeButton = styled.button.attrs({
  className: "btn btn-primary m-2",
})``;
