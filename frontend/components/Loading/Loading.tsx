import { NextPage } from "next";
import {
  LoadingModalContainer,
  LoadingModalOverlay,
  LoadingSpinner,
} from "./Loading.style";

const Loading: NextPage = () => {
  return (
    <LoadingModalContainer>
      <LoadingModalOverlay />
      <LoadingSpinner>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoadingSpinner>
    </LoadingModalContainer>
  );
};

export default Loading;
