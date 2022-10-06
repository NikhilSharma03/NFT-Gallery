import { NextPage } from "next";
import { useState } from "react";
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
  UNImgBtn,
  UNImgBtnContainer,
  UNAvatar,
  UNAvatarRounded,
} from "./UpdateNFTModal.style";

type Props = {
  title: string;
  description: string;
  image: string;
  id: string;
  closeModal: () => void;
};

const UpdateNFTModal: NextPage<Props> = ({
  closeModal,
  description,
  id,
  image,
  title,
}) => {
  const [inputTitle, setTitle] = useState(title);
  const [inputDescription, setDescription] = useState(description);
  const [updatedImage, setUpdatedImage] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [hasUpdatedImage, setHasUpdatedImage] = useState(false);

  const onImageUploadHandler = (files: FileList | null) => {
    if (files) {
      setUpdatedImage(files[0]);
      setImagePreview(URL.createObjectURL(files[0]));
      setHasUpdatedImage(true);
    }
  };

  const onUpdateNFTHandler = () => {
    console.log(inputTitle, inputDescription, updatedImage, hasUpdatedImage);
  };

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
              <UNInput
                type="text"
                placeholder="Type here"
                value={inputTitle}
                onChange={(e) => setTitle(e.target.value)}
              />
            </UNInputLabel>
          </UNInputContainer>
          <UNInputContainer>
            <UNInputLabel>
              <span>Description</span>
              <UNInput
                type="text"
                placeholder="Type here"
                value={inputDescription}
                onChange={(e) => setDescription(e.target.value)}
              />
            </UNInputLabel>
          </UNInputContainer>
          <UNImgBtnContainer>
            <UNImgBtn htmlFor="updatedImage">Upload Image</UNImgBtn>
            <input
              id="updatedImage"
              accept=".png,.jpg,.jpeg"
              type="file"
              className="hidden"
              onChange={(e) => onImageUploadHandler(e.target.files)}
            />
            <UNAvatar>
              <UNAvatarRounded>
                <img src={imagePreview ? imagePreview : image} alt="img" />
              </UNAvatarRounded>
            </UNAvatar>
          </UNImgBtnContainer>
          <UNBtnContainer>
            <UNBtn onClick={onUpdateNFTHandler}>Update</UNBtn>
            <UNBtn onClick={closeModal}>Close</UNBtn>
          </UNBtnContainer>
        </UNBody>
      </UNMain>
    </UNContainer>
  );
};

export default UpdateNFTModal;
