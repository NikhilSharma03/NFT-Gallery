import { NextPage } from "next";
import {
  UNContainer,
  UNOverlay,
  UNBody,
  UNBtn,
  UNBtnContainer,
  UNHead,
  UNMain,
  UNInput,
  UNInputContainer,
  UNInputLabel,
  UpdateNFTImgBtn,
  UpdateNFTImgBtnContainer,
} from "./UpdateNFTModal.style";

type Props = {
  closeModal: () => void;
};

const UpdateNFTModal: NextPage<Props> = ({ closeModal }) => {
  return (
    <UNContainer>
      <UNOverlay />
      <UNMain>
        <UNBody>
          <UNHead>Update</UNHead>
          {/* Update Form */}
          <UNInputContainer>
            <UNInputLabel>
              <span>Title</span>
              <UNInput type="text" placeholder="Type here" />
            </UNInputLabel>
          </UNInputContainer>
          <UNInputContainer>
            <UNInputLabel>
              <span>Description</span>
              <UNInput type="text" placeholder="Type here" />
            </UNInputLabel>
          </UNInputContainer>
          <UpdateNFTImgBtnContainer>
            <UpdateNFTImgBtn>Upload Image</UpdateNFTImgBtn>
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img
                  src="https://ipfs.moralis.io:2053/ipfs/QmZbV8pQauUW7415xaLZv7KrWpbNJiZShT8b4vP1n9S6Qm/nft-gallery/1664974006224-35210220"
                  alt="img"
                />
              </div>
            </div>
          </UpdateNFTImgBtnContainer>
          <UNBtnContainer>
            <UNBtn onClick={closeModal}>Update</UNBtn>
            <UNBtn onClick={closeModal}>Close</UNBtn>
          </UNBtnContainer>
        </UNBody>
      </UNMain>
    </UNContainer>
  );
};

export default UpdateNFTModal;
