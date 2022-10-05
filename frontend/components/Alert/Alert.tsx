import { NextPage } from "next";
import {
  AlertContainer,
  AlertOverlay,
  AlertBody,
  AlertBtn,
  AlertBtnContainer,
  AlertHead,
  AlertMain,
  AlertMsg,
} from "./Alert.style";

type Props = {
  msg: string;
  clearError: () => {};
};

const Alert: NextPage<Props> = ({ msg, clearError }) => {
  return (
    <AlertContainer>
      <AlertOverlay />
      <AlertMain>
        <AlertBody>
          <AlertHead>Alert!</AlertHead>
          <AlertMsg>{msg}</AlertMsg>
          <AlertBtnContainer>
            <AlertBtn onClick={clearError}>Close</AlertBtn>
          </AlertBtnContainer>
        </AlertBody>
      </AlertMain>
    </AlertContainer>
  );
};

export default Alert;
