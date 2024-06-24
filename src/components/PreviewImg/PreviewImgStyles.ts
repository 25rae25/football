import styled from "@emotion/styled";
import Image from "next/image";

export const ImageLabel = styled.label`
  display: block;
  margin: 20px auto;
  align-items: center;
  border: 2px dashed #1475cf;
  height: 300px;
  width: 500px;
  cursor: pointer;
  border-radius: 5px;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const PreviewImg = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const PreviewButton = styled.button`
  display: block;
  margin: 20px auto;
  background-color: transparent;
  align-items: center;
  border: 2px dashed #1475cf;
  height: 300px;
  width: 55%;
  cursor: pointer;
  border-radius: 5px;
`;
