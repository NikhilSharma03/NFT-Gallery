import styled from "styled-components";

export const CreateContainer = styled.div`
  height: 95vh;
  padding: 3rem 4rem;
`;

export const CreateButton = styled.button.attrs({
  className: "btn btn-primary m-2 w-full",
})``;

export const CreateInputContainer = styled.div.attrs({
  className: "form-control w-full",
})`
  margin-bottom: 2rem;
`;

export const CreateInputLabel = styled.label.attrs({
  className: "input-group input-group-md",
})``;

export const CreateInput = styled.input.attrs({
  className: "input input-bordered input-md w-full",
})``;

export const CreateForm = styled.div`
  width: 50%;
  margin: 10rem auto;
`;

export const CreateImgBtnContainer = styled.div.attrs({
  className: "flex items-center",
})`
  margin-bottom: 2rem;
`;

export const CreateImgBtn = styled.label.attrs({
  className: "btn btn-primary mr-2",
})``;

export const CreateAvatar = styled.div.attrs({ className: "avatar" })``;

export const CreateAvatarRounded = styled.div.attrs({
  className: "w-12 rounded-full",
})``;
