import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "drawer",
})``;

export const SDInput = styled.input.attrs({
  className: "drawer-toggle",
})``;

export const SDContent = styled.div.attrs({
  className: "drawer-content",
})``;

export const SDSide = styled.div.attrs({
  className: "drawer-side",
})``;

export const SDSideLabel = styled.label.attrs({
  className: "drawer-overlay",
})``;

export const SDSideList = styled.ul.attrs({
  className: "menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content",
})``;

export const SDSideListItem = styled.li`
  a:active {
    background-color: transparent;
  }
`;
