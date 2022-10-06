import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import WalletModalBody from "../components/WalletModal/WalletModalBody";
import useAppSelector from "../hooks/useAppSelector";
import {
  CreateContainer,
  CreateAvatar,
  CreateAvatarRounded,
  CreateButton,
  CreateImgBtn,
  CreateImgBtnContainer,
  CreateInput,
  CreateInputContainer,
  CreateInputLabel,
  CreateForm,
} from "./../styles/Create.style";
import LoadingModal from "./../components/Loading/Loading";
import axios from "axios";

const Create: NextPage = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);

  const isWalletConnect = useAppSelector(
    (state) => state.user.isWalletConnected
  );
  const authToken = useAppSelector((state) => state.user.authToken);

  useEffect(() => {
    if (!isWalletConnect) {
      router.replace("/");
    }
  }, []);

  const onCreateNFTHandler = () => {
    if (
      title.trim().length === 0 ||
      description.trim().length === 0 ||
      !image
    ) {
      alert("Invalid input");
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    axios
      .post(`${process.env.BACKEND_API_URL}/api/nft`, formData, {
        headers: { token: `Bearer ${authToken}` },
      })
      .then((res) => {
        setLoading(false);
        router.replace("/gallery");
      })
      .catch((err) => {
        setLoading(false);
        alert(err.response.data.message);
      });
  };

  const onImageUploadHandler = (files: FileList | null) => {
    if (files) {
      setImage(files[0]);
      setImagePreview(URL.createObjectURL(files[0]));
    }
  };

  return (
    <div>
      {loading && <LoadingModal />}
      <Head>
        <title>NFT Portrait | Create</title>
      </Head>
      <CreateContainer>
        <CreateForm>
          <CreateInputContainer>
            <CreateInputLabel>
              <span>Title</span>
              <CreateInput
                type="text"
                placeholder="Type here"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </CreateInputLabel>
          </CreateInputContainer>
          <CreateInputContainer>
            <CreateInputLabel>
              <span>Description</span>
              <CreateInput
                type="text"
                placeholder="Type here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </CreateInputLabel>
          </CreateInputContainer>
          <CreateImgBtnContainer>
            <CreateImgBtn htmlFor="image">Upload Image</CreateImgBtn>
            <input
              id="image"
              accept=".png,.jpg,.jpeg"
              type="file"
              className="hidden"
              onChange={(e) => onImageUploadHandler(e.target.files)}
            />
            {imagePreview && (
              <CreateAvatar>
                <CreateAvatarRounded>
                  <img src={imagePreview} alt="img" />
                </CreateAvatarRounded>
              </CreateAvatar>
            )}
          </CreateImgBtnContainer>
          <CreateButton onClick={onCreateNFTHandler}>Create NFT</CreateButton>
        </CreateForm>
      </CreateContainer>
      <WalletModalBody />
    </div>
  );
};

export default Create;
