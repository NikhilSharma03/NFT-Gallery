import { NextPage } from "next";
import {
  CMContainer,
  CMOverlay,
  CMBody,
  CMBtn,
  CMBtnContainer,
  CMMain,
  CMMsg,
} from "./ConfirmModal.style";

type Props = {
  closeModal: () => void;
  deleteNFT: () => void;
};

const ConfirmModal: NextPage<Props> = ({ deleteNFT, closeModal }) => {
  return (
    <CMContainer>
      <CMOverlay />
      <CMMain>
        <CMBody>
          <CMMsg>Are you sure you want to Delete!</CMMsg>
          <CMBtnContainer>
            <CMBtn onClick={deleteNFT}>Confirm</CMBtn>
            <CMBtn onClick={closeModal}>Close</CMBtn>
          </CMBtnContainer>
        </CMBody>
      </CMMain>
    </CMContainer>
  );
};

export default ConfirmModal;
